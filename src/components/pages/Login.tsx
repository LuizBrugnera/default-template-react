import React, { useState } from "react";
import useAuth from "../../security/UseAuth";
import "bulma/css/bulma.min.css";
import "../css/Login.css";
import { AuthService } from "../../services/AuthService";
import { toast } from "react-toastify"; // Importa o react-toastify
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const token = await AuthService.login({ email, password });
      signIn(token);
      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        navigate("/home");
      }, 1100);
    } catch (error) {
      toast.error("Erro ao fazer login. Verifique suas credenciais.");
      console.log(error);
    }
  };

  return (
    <section className="login hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <div className="box login">
                <h1 className="title has-text-centered login">Login</h1>

                <div className="field">
                  <label className="label login">Email</label>
                  <div className="control">
                    <input
                      className="input login"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label login">Senha</label>
                  <div className="control">
                    <input
                      className="input login"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Senha"
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      className="button login is-fullwidth"
                      onClick={handleLogin}
                    >
                      Entrar
                    </button>
                  </div>
                </div>
                <div className="field">
                  <span>
                    Esqueceu sua senha?{" "}
                    <a href="/register" className="link login">
                      Clique aqui
                    </a>
                  </span>
                </div>
                <div className="field">
                  <span>
                    Não tem uma conta?{" "}
                    <a href="/register" className="link login">
                      Registre-se
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

export default Login;
