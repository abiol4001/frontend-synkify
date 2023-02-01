import React, { useState, useEffect, useRef } from "react";
import { logo, facebook, background, google } from "../../assets";
import { TextInput } from "../../Components";

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

  const [errMsg, setErrMsg] = useState("");
  const [allValid, setAllValid] = useState(false);
  const [success, setSuccess] = useState(false);

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
  }, [name, email, password]);

  console.log(name, email, password);

  const isValid = () => {
    if (validEmail && validName && validPwd) {
      return setAllValid(true);
    }
  };

  const handleSubmit = async (e) => {
    const myData = {
      fullName: name,
      email: email,
      password: password,
    };
    e.preventDefault();
    if (allValid) {
      try {
        const result = await fetch(
          "https://synkify-api.onrender.com/api/v1/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          }
        );

        // success();
        setName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error)
      }
    }
    console.log("All info" + allValid);
  };

  return (
    <main className="h-screen grid lg:grid-cols-2" style={{ width: '70%', margin: '80px auto', }}>
      {/* Left Column */}
      <section
        className="bg-cover hidden lg:block"
        style={{ backgroundImage: `url("${background}")` }}
      >
        <div className="bg-gradient-to-r from-black grid place-items-center">
          <div className="w-[90%] lg:w-4/5 h-screen py-[40px] flex flex-col justify-between">
            <div className="h-[50px]">
              <img src={logo} alt="Website Logo" className="w-[184px] hidden" />
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
        <div className="w-[90%] lg:w-4/5 py-[40px] flex flex-col">
          <img
            src={logo}
            alt="Website Logo"
            className="w-[100px] lg:w-[184px] mx-auto mb-8 lg:hidden"
          />
          <h2 className="text-2xl lg:text-4xl text-[#C58865] font-['Open_Sans'] font-bold leading-[36px] mb-[50px]">
            Create an account to use all the features of Synkify's platform
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
            <p>{errMsg}</p>
            <TextInput
              id="name"
              title="Full Name"
              placeholder="Enter your Full name"
              type="text"
              // ref={nameRef}
              onChange={(e) => setName(e.target.value)}
              required
              // autoComplete="false"
            />
            <p
              className={
                name && !validName
                  ? "block text-red-500 text-[16px] -mt-5 transition-all"
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
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="false"
            />
            <p
              className={
                email && !validEmail
                  ? "block text-red-500 text-[16px] -mt-5 transition-all"
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p
              className={
                password && !validPwd
                  ? "block text-red-500 text-[16px] -mt-5"
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
                className="w-5 h-5"
              />
              <p className="text-lg lg:text-lg text-[#424848] font-['Open_Sans'] font-normal">
                I have read and agree with{" "}
                <span className="text-[#C58865]">Terms of Service</span> and our{" "}
                <span className="text-[#C58865]">Privacy Policy</span>
              </p>
            </div>
            <input
              type="submit"
              onClick={isValid}
              value="CREATE AN ACCOUNT"
              className="text-white text-sm lg:text-lg bg-[#013135] py-5 px-5 my-0 mx-auto"
            />
          </form>
          <div>
            <p className="text-xl text-[#424848] text-center font-['Open_Sans'] font-normal my-[50px]">
              OR
            </p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
              <div className="flex items-center justify-center lg:justify-start rounded-lg gap-1 border border-[#C58865] p-1">
                <img src={google} className="w-6 h-6" alt="" />
                <a
                  href="#"
                  className="text-lg lg:text-xl text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Google
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start rounded-lg gap-1 border border-[#C58865] p-1">
                <img src={facebook} className="w-6 h-6" alt="" />
                <a
                  href="#"
                  className="text-lg lg:text-xl text-[#424848] font-['Open_Sans'] font-normal"
                >
                  Sign up with Facebook
                </a>
              </div>
            </div>
            <div className="flex items-center flex-col lg:flex-row gap-3 mt-[50px]">
              <p className="text-lg lg:text-xl text-[#424848] font-['Open_Sans'] font-normal">
                You have an account already?
              </p>
              <a
                href="/login"
                className="text-lg lg:text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                LOG IN
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
