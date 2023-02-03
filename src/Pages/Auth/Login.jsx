import axios from "../../api/axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logo, facebook, background } from "../../assets";
import { TextInput } from "../../Components";
import Aos from 'aos';

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX =
  // /^[!@#$%^&*(),.?":{}|<>]{1}[A-Za-z\d!@#$%^&*(),.?":{}|<>]{7,}$/;
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [allValid, setAllValid] = useState(false);
  const [errMsg, setErrMsg] = useState("");


  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    console.log("email " + result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPwd(result);
    console.log('pwd ' + result)
    console.log(password)
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const isValid = () => {
    if (validEmail && validPwd) {
      return setAllValid(true);
    }
  };

  const handleSubmit = (e) => {
    const myData = {
      email: email,
      password: password,
    };
    e.preventDefault();
    if (allValid) {
      axios
        .post("/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token)
          navigate("/dashboard/main")
        })
        .catch((err) => {
          console.error(err);
          setErrMsg(err.message)
        });

    }
    else {
      return setError("Fill the required field(s)*");
    }
  };

  return (
    <main
      className="h-screen grid lg:grid-cols-2 w-[100%] px-4 lg:px-0 lg:w-[70%]"
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
          <div className="w-4/5 h-screen py-[40px] flex flex-col justify-between">
            <div className="h-[50px]">
              <img src={logo} alt="Website Logo" className="w-[184px] hidden" />
            </div>
            <div className="w-[400px]">
              <h1 className="text-4xl text-white font-['Open_Sans'] font-bold leading-[60px]">
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
              <Link
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Privacy Policy
              </Link>
              <link
                href="#"
                className="text-base text-white font-[Poppins] font-normal"
              >
                Terms of Service
              </link>
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
          <h2 className="text-2xl lg:text-4xl text-[#C58865] text-center font-['Open_Sans'] font-bold leading-[36px]">
            LOGIN
          </h2>
          <h3 className="font-normal text-[#191819] text-base md:text-lg text-center lg:text-left my-[20px]">
            <span className="font-bold">Welcome!</span> Sign in to stay
            connected on Synkify
          </h3>
          <p className="text-red-500 text-[14px] -mt-3 mb-3">{errMsg}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
            <TextInput
              id="email"
              title="Email Address"
              placeholder="Enter your Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextInput
              id="password"
              title="Password"
              placeholder="Enter your Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
                <p className="text-sm md:text-xl text-[#C58865] font-['Open_Sans'] font-normal">
                  Remember Me
                </p>
              </div>
              <Link
                to="/forget-pass"
                className="text-sm md:text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                Forgot Password
              </Link>
            </div>
            <input
              type="submit"
              value="LOG IN YOUR ACCOUNT"
              onClick={isValid}
              className="text-white text-sm lg:text-sm bg-[#013135] p-4 my-0 mx-auto cursor-pointer border hover:bg-white hover:text-[#013135] hover:border-[#013135]"
            />
          </form>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-[50px]">
              <p className="text-lg lg:text-xl text-[#424848] font-['Open_Sans'] font-normal">
                Don't have an account?
              </p>
              <Link
                to="/sign-up"
                className="text-lg lg:text-xl text-[#C58865] font-['Open_Sans'] font-normal"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
