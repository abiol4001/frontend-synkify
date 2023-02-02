import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import Faq from "./Pages/faq/Faq";
import { ContactUs } from "./Pages/contactUs/ContactUs";
import Protected from "./Protected";
import Blog from "./Pages/blog/Blog";
import About from './Pages/About/About'
import PagesLayout from "./Components/PagesLayout";

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<PagesLayout />}>
            <Route index element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-pass" element={<ForgetPassword />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route
            path="dashboard/*"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
