import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <>
      <Router>
        {/* <ComingSoon /> */}
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
