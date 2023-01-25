import React from "react";
import { logo, facebook, background } from "../../assets";
import { TextInput } from "../../Components";

function Login() {
  return (
    <main className="h-screen grid grid-cols-2">
      {/* Left Column */}
      <section
        className="bg-cover"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className="bg-gradient-to-r from-black grid place-items-center">
          <div className="w-4/5 h-screen py-[40px] flex flex-col justify-between">
            <img src={logo} alt="Website Logo" className="w-[184px]" />
            <div className="w-[480px]">
              <h1 className="text-5xl text-white font-['Open_Sans'] font-bold leading-[60px]">
                Managing your Social <br />
                Media accounts is easy <br />
                with Synkify
              </h1>
              <p className="text-xl text-white font-[Poppins] font-normal mt-[30px]">
                You can post instant content with Synkify whenever you want to
                your selected social media accounts.
              </p>
              
            </div>
            <div className="flex gap-[40px]">
              <a
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Right Column */}
      <section className="grid place-items-center bg-[#EBEAEB] overflow-y-scroll">
        <div className="w-4/5 py-[40px] flex flex-col">
          <h2 className="text-3xl text-[#C58865] text-center font-['Open_Sans'] font-bold leading-[36px]">
            LOGIN
          </h2>
          <h3 className="font-normal text-[#191819] text-xl my-[30px]">
            <span className="font-bold">Welcome!</span> Sign in to stay
            connected on Synkify
          </h3>
          <form action="" className="flex flex-col gap-[30px]">
            <TextInput
              id="email"
              title="Email Address"
              placeholder="Enter your Email Address"
              type="email"
              required
            />
            <TextInput
              id="password"
              title="Password"
              placeholder="Enter your Password"
              type="password"
              required
            />
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="w-5 h-5"
                />
                <p className="text-xl text-[#C58865] font-['Open_Sans'] font-normal">
                  Remember Me
                </p>
              </div>
              <a
                href=""
                className="text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                Forgot Password
              </a>
            </div>
            <input
              type="submit"
              value="LOG IN YOUR ACCOUNT"
              className="text-white text-lg bg-[#013135] py-5 px-6 my-0 mx-auto"
            />
          </form>
          <div>
            <div className="flex items-center gap-3 mt-[50px]">
              <p
                href=""
                className="text-xl text-[#424848] font-['Open_Sans'] font-normal"
              >
                Don't have an account?
              </p>
              <p
                href=""
                className="text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                Create an account
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
