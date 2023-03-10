import React, { useState } from "react";
import { logo, facebook, forgetPassword, google } from "../../assets";
import { TextInput2 } from "../../Components";
import axios from "../../api/axios";

function ForgetPassword() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/forgotpassword", {
        email,
        callbackUrl: "http:localhost:3000",
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <main className="h-full lg:h-screen grid lg:grid-cols-2 w-[100%] px-4 lg:px-0 lg:w-[70%] my-[20px] lg:my-[80px] mx-auto">
      {/* Left Column */}
      <section
        className="bg-cover hidden lg:block"
        style={{ backgroundImage: `url("${forgetPassword}")` }}
      ></section>
      {/* Right Column */}
      <section className="grid place-items-center bg-[#f5f5f5] overflow-y-scroll">
        <div className="w-[90%] lg:w-4/5 py-[40px] flex flex-col">
          <img
            src={logo}
            alt="Website Logo"
            className="w-[100px] lg:w-[184px] mx-auto mb-8"
          />
          <h2 className="text-2xl lg:text-4xl text-[#1A4F52] text-center font-['Open_Sans'] font-bold leading-[36px] mb-[20px] md:mb-[50px]">
            Forgot Password?
          </h2>

          <h3 className="font-normal text-[#191819] text-sm md:text-xl text-center lg:text-left mb-[30px]">
            Do not panic, we’ve got you covered. Kindly, input the email
            associated with your account, and we will send you a reset link.
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
            <TextInput2
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              title="Email Address"
              placeholder="Enter your Email Address"
              type="email"
              required
            />

            <input
              type="submit"
              value="GET RESET LINK"
              className="text-white text-sm lg:text-lg bg-[#013135] py-5 px-6 my-0 mx-auto"
            />
            {message && <p className="text-red-500 text-[14px]">{message}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

export default ForgetPassword;
