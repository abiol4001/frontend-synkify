import React, { useState, useEffect, useRef } from "react";
import axios from "../../api/axios";
import { logo, facebook, background, google, synkify, officialLogo } from "../../assets";
import { TextInput } from "../../Components";
import Aos from "aos";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NAME_REGEX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function SignUp() {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [allValid, setAllValid] = useState(false);
  // const [success, setSuccess] = useState(false);

  const success = () =>
    toast.success("Account successfully created, proceed to Login", {
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    // console.log(result)
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    // console.log(result)
    setValidPwd(result);
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, password, isChecked]);

  console.log(name, email, password, isChecked);

  const isValid = () => {
    if (validEmail && validName && validPwd && isChecked) {
      return setAllValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allValid) {
      try {
        const response = await axios.post("/register", {
          fullName: name,
          email: email,
          password: password,
        });
        success();
        setName("");
        setEmail("");
        setPassword("");
        setIsChecked(false);
        setErrMsg("")
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    else {
      return setErrMsg("Fill the required field(s)*")
    }
  };

  return (
    <main
      className="h-1/2 grid lg:grid-cols-2 w-[100%] px-4 lg:px-0 lg:w-[70%]"
      style={{ margin: "50px auto 80px" }}
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="900"
    >
      {/* Left Column */}
      <section
        className="bg-cover hidden lg:block"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className="bg-gradient-to-r from-black grid place-items-center">
          <div className="w-[90%] lg:w-4/5 h-screen py-[40px] flex flex-col justify-between">
            <div className="h-[50px]">
              <img src={synkify} alt="Website Logo" className="w-[184px] hidden" />
            </div>
            <div className="w-[400px]">
              <h1 className="text-4xl text-white font-['Open_Sans'] font-bold leading-[60px]">
                Synk your social <br />
                media profiles into <br />
                one platform
              </h1>
              <p className="text-lg text-white font-[Poppins] font-normal mt-[30px]">
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
              <Link
                to="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Contact Us
              </Link>
              <Link
                to="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Right Column */}
      <section className="grid place-items-center bg-[#EBEAEB] overflow-y-scroll">
        <ToastContainer autoClose={5000} />
        <div className="w-[90%] lg:w-4/5 py-[40px] flex flex-col">
          <img
            src={officialLogo}
            alt="Website Logo"
            className="w-[150px] lg:w-[184px] mx-auto mb-8 lg:hidden"
          />
          <h2 className="text-1xl lg:text-2xl text-[#C58865] font-['Open_Sans'] font-bold leading-[36px]">
            Create an account to use all the features of Synkify's platform
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            <p className=" text-red-500 text-[16px] mt-3">{errMsg}</p>
            <TextInput
              id="name"
              title="Full Name"
              placeholder="Enter your Full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p
              className={
                name && !validName
                  ? "block text-red-500 text-[14px] -mt-5 transition-all"
                  : "hidden"
              }
            >
              Input your First and Last name without numbers and symbols
            </p>
            <TextInput
              id="email"
              title="Email Address"
              placeholder="Enter your Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="false"
            />
            <p
              className={
                email && !validEmail
                  ? "block text-red-500 text-[14px] -mt-5 transition-all"
                  : "hidden"
              }
            >
              Enter a valid Email address.
            </p>
            <TextInput
              id="password"
              title="Password"
              placeholder="Enter your Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p
              className={
                password && !validPwd
                  ? "block text-red-500 text-[14px] -mt-5"
                  : "hidden"
              }
            >
              8 to 24 characters <br />
              Must include uppercase and lowercase letters, a number and special
              character <br />
              Allowed special characters: !@#$
            </p>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-5 h-5"
              />
              <p className="text-sm md:text-lg text-[#424848] font-['Open_Sans'] font-normal">
                I have read and agree with{" "}
                <span className="text-[#C58865]">Terms of Service</span> and our{" "}
                <span className="text-[#C58865]">Privacy Policy</span>
              </p>
            </div>
            <input
              type="submit"
              onClick={isValid}
              value="CREATE AN ACCOUNT"
              className="text-white text-sm lg:text-sm bg-[#013135] py-3 px-5 my-0 mx-auto cursor-pointer border hover:bg-white hover:text-[#013135] hover:border-[#013135]"
            />
          </form>
          <div>
            <p className="text-xl text-[#424848] text-center font-['Open_Sans'] font-normal my-[10px]">
              OR
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 justify-between">
              <div className="flex items-center justify-center lg:justify-start rounded-lg gap-1 border border-[#C58865] p-1">
                <img src={google} className="w-6 h-6" alt="" />
                <a
                  href="#"
                  className="text-sm lg:text-sm text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Google
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start rounded-lg gap-1 border border-[#C58865] p-1">
                <img src={facebook} className="w-6 h-6" alt="" />
                <a
                  href="#"
                  className="text-sm lg:text-sm text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Facebook
                </a>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-3 mt-[50px]">
              <p className="text-lg lg:text-xl text-[#424848] font-['Open_Sans'] font-normal">
                You have an account already?
              </p>
              <Link
                to="/login"
                className="text-lg lg:text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                LOG IN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
