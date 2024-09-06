import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../security/UseAuth";
import "./css/Navbar.css"; //

const Navbar: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsActive(!isActive);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="/home">
          <label className="navbar-logo">Logo do Site</label>
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          {isAuthenticated ? (
            <>
              <Link to="/home" className="navbar-item">
                Home
              </Link>
              <Link to="/profile" className="navbar-item">
                Perfil
              </Link>
              <Link to="/logout" className="navbar-item">
                Sair
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-item">
                Login
              </Link>
              <Link to="/register" className="navbar-item">
                Registrar-se
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
