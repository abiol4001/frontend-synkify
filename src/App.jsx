import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
// import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
// import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Faq from './Pages/faq/Faq'


function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* <Dashboard /> */}
      <Router>
        <Navbar />
        {/* <ComingSoon />*/}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
