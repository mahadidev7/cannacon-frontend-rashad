import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Login from "../Login";
import Singup from "../Singup";
import MobDes from "../MobDes";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mobdesc" element={<MobDes />} />
    </Routes>
  );
};

export default Router;
