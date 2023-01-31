import React from "react";
import { logo, facebook, forgetPassword, google } from "../../assets";
import { TextInput2 } from "../../Components";

function ForgetPassword() {
  return (
    <main className="h-screen grid lg:grid-cols-2" style={{ width: '70%', margin: '80px auto', }}>
      {/* Left Column */}
      <section
        className="bg-cover hidden lg:block"
        style={{ backgroundImage: `url("${forgetPassword}")` }}
      ></section>
      {/* Right Column */}
      <section className="grid place-items-center bg-[#f5f5f5] overflow-y-scroll">
        <div className="w-[90%] lg:w-4/5 py-[40px] flex flex-col">
          <img src={logo} alt="Website Logo" className="w-[100px] lg:w-[184px] mx-auto mb-8" />
          <h2 className="text-2xl lg:text-4xl text-[#1A4F52] text-center font-['Open_Sans'] font-bold leading-[36px] mb-[50px]">
            Forgot Password?
          </h2>

          <h3 className="font-normal text-[#191819] text-lg lg:text-xl text-center lg:text-left mb-[30px]">
            Do not panic, we’ve got you covered. Kindly, input the email
            associated with your account, and we will send you a reset link.
          </h3>
          <form action="" className="flex flex-col gap-[30px]">
            <TextInput2
              id="email"
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
          </form>
        </div>
      </section>
    </main>
  );
}

export default ForgetPassword;
