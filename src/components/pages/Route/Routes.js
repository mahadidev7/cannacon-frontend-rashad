import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Login from "../Login";
import Singup from "../Singup";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
