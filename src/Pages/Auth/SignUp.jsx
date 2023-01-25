import React from "react";
import { logo, facebook, background, google } from "../../assets";
import { TextInput } from "../../Components";

function SignUp() {
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
                Synk your social <br />
                media profiles into <br />
                one platform
              </h1>
              <p className="text-xl text-white font-[Poppins] font-normal mt-[30px]">
                With just one click on our platform, you may post to all of your
                social media profiles at once.
              </p>
              <div className="mt-[80px] flex gap-[40px]">
                <p className="text-3xl text-white font-['Open_Sans'] font-bold">
                  Synk.
                </p>
                <p className="text-3xl text-white font-['Open_Sans'] font-bold">
                  Compose.
                </p>
                <p className="text-3xl text-white font-['Open_Sans'] font-bold">
                  Schedule.
                </p>
              </div>
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
          <h2 className="text-3xl text-[#C58865] font-['Open_Sans'] font-bold leading-[36px] mb-[50px]">
            Create an account to use all the features of Synkify's platform
          </h2>
          <form action="" className="flex flex-col gap-[30px]">
            <TextInput
              id="fullname"
              title="Full Name"
              placeholder="Enter your Full name"
              type="text"
              required
            />
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
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="w-5 h-5"
              />
              <p className="text-xl text-[#424848] font-['Open_Sans'] font-normal">
                I have read and agree with{" "}
                <span className="text-[#C58865]">Terms of Service</span> and our{" "}
                <span className="text-[#C58865]">Privacy Policy</span>
              </p>
            </div>
            <input
              type="submit"
              value="CREATE AN ACCOUNT"
              className="text-white text-lg bg-[#013135] py-5 px-6 my-0 mx-auto"
            />
          </form>
          <div>
            <p className="text-xl text-[#424848] text-center font-['Open_Sans'] font-normal my-[50px]">
              OR
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 border border-[#C58865] p-1">
                <img src={google} className="w-6 h-6" alt="" />
                <p
                  href=""
                  className="text-xl text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Google
                </p>
              </div>
              <div className="flex items-center gap-1 border border-[#C58865] p-1">
                <img src={facebook} className="w-6 h-6" alt="" />
                <p
                  href=""
                  className="text-xl text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Facebook
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-[50px]">
              <p
                href=""
                className="text-xl text-[#424848] font-['Open_Sans'] font-normal"
              >
                You have an accounT already?
              </p>
              <p
                href=""
                className="text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                LOG IN
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
