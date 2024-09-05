import React from "react";
import useAuth from "../security/UseAuth";

const Navbar: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return isAuthenticated ? (
    <div>Navbar Autenticado</div>
  ) : (
    <div>Navbar Não Autenticado</div>
  );
};

export default Navbar;
