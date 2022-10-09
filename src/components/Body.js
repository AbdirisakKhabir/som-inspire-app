import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoCreators from "./creators/videoCreators";
import LoginForm from "./loginForm";
import Navbar from "./Navbar";
import RegisterForm from "./registerForm";
import Podcasters from "./creators/podcasters";
const Body = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="loginForm" element={<LoginForm />} />
        <Route exact path="registerForm" element={<RegisterForm />} />
        <Route exact path="/videoCreators" element={<VideoCreators />} />
        <Route exact path="/podcasters" element={<Podcasters />} />
      </Routes>
    </React.Fragment>
  );
};

export default Body;
