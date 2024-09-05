import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "../css/Register.css";
import { AuthService } from "../../services/AuthService";
import { toast } from "react-toastify";
import useAuth from "../../security/UseAuth";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem.");
      return;
    }

    try {
      await AuthService.register({
        name,
        email,
        password,
        confirmPassword,
      });
      toast.success("Registro realizado com sucesso!");
      const token = await AuthService.login({ email, password });
      signIn(token);

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      toast.error("Erro ao registrar. Tente novamente.");
      console.log(error);
    }
  };

  return (
    <section className="register hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <div className="box register">
                <h1 className="title has-text-centered register">Registrar</h1>

                <div className="field">
                  <label className="label register">Nome</label>
                  <div className="control">
                    <input
                      className="input register"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nome"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const input = document.querySelector(
                            ".email"
                          ) as HTMLInputElement;
                          if (input) {
                            input.focus();
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label register">Email</label>
                  <div className="control">
                    <input
                      className="input register email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const input = document.querySelector(
                            ".password"
                          ) as HTMLInputElement;
                          if (input) {
                            input.focus();
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label register">Senha</label>
                  <div className="control">
                    <input
                      className="input register password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Senha"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          const input = document.querySelector(
                            ".confirm-password"
                          ) as HTMLInputElement;
                          if (input) {
                            input.focus();
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label register">Confirme a Senha</label>
                  <div className="control">
                    <input
                      className="input register confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirme a Senha"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleRegister();
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      className="button register is-fullwidth"
                      onClick={handleRegister}
                    >
                      Registrar
                    </button>
                  </div>
                </div>
                <div className="field">
                  <span>
                    Já tem uma conta?{" "}
                    <a href="/login" className="link register">
                      Entrar
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
