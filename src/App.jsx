import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
// import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Faq from "./Pages/faq/Faq";
import { ContactUs } from "./Pages/contactUs/ContactUs";
import Main from "./Components/Dashboard/Main";
import SocialAccount from "./Components/Dashboard/SocialAccount";
import Profile from "./Components/Dashboard/Profile";
import Post from "./Components/Dashboard/Post";
import Schedule from "./Components/Dashboard/Schedule";
import Notification from "./Components/Dashboard/Notification";
import Reminder from "./Components/Dashboard/Reminder";
import Setting from "./Components/Dashboard/Setting";
import Protected from "./Protected";


// const DashboardRouter = () => {
//   <Router>
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/dashboard/main" element={<Main />} />
//       <Route path="/dashboard/account" element={<SocialAccount />} />
//       <Route path="/dashboard/profile" element={<Profile />} />
//       <Route path="/dashboard/post" element={<Post />} />
//       <Route path="/dashboard/schedule" element={<Schedule />} />
//       <Route path="/dashboard/notification" element={<Notification />} />
//       <Route path="/dashboard/reminder" element={<Reminder />} />
//       <Route path="/dashboard/setting" element={<Setting />} />
//     </Routes>
//   </Router>;
// }

function App() {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/* <Dashboard /> */}
      {/* <DashboardRouter /> */}
      <Router>
        <Navbar />
        {/* <ComingSoon />*/}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/dashboard/main"
            element={
              <Protected>
                <Main />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
