import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import PrivateRoute from "./security/PrivateRoute";
import { Home } from "./components/pages/Home";
import Register from "./components/pages/Register";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<PrivateRoute component={Home} />} />
    </Routes>
  );
};

export default App;
