import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
// import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";


function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Router>
        {/* <ComingSoon /> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/forget-pass" element={<ForgetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
