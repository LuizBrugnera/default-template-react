import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import PrivateRoute from "./security/PrivateRoute";
import { Home } from "./components/pages/Home";
import Register from "./components/pages/Register";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
      </Routes>
    </Fragment>
  );
};

export default App;
