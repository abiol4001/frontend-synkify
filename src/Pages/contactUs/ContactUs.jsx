import { useState, useEffect, useRef } from "react";
import Aos from "aos";
import { TextInput3 } from "../../Components";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const contactInfo = [
  { icon: <FaPhoneAlt />, value: "+2349000000090" },
  { icon: <FaEnvelope />, value: "info@synkify.com" },
  { icon: <FaTwitter />, value: "https://twitter.com/Synkify" },
  { icon: <FaFacebook />, value: "https://Facebook.com/Synkify" },
  { icon: <FaMedium />, value: "https://medium.com/Synkify" },
];

export const ContactUs = () => {
  const [isSending, setIsSending] = useState(false);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    setIsSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y2rhwy6",
        "template_hzlu0mb",
        form.current,
        "Zz58bCbABIQArpdmC"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setIsSending(false)
          toast.success('Email sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
          toast.error('Sorry, Email was not sent', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      );
  };

  return (
    <div className="w-full lg:w-4/5 lg:mx-auto lg:h-[80%] my-4 lg:my-8 lg:px-0">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-['Open_Sans'] font-bold">
        Get In Touch
      </h1>
      <div className="grid lg:grid-cols-2 h-full my-4 lg:my-8">
        <section className="px-4">
          <h2 className="text-xl lg:text-2xl font-['Open_Sans'] font-bold">
            Send us a Message
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-[30px] my-3 lg:my-6"
          >
            <TextInput3
              id="firstname"
              name="firstname"
              title="First Name"
              placeholder="First Name"
              type="text"
              required
            />
            <TextInput3
              id="lastname"
              name="lastname"
              title="Last Name"
              placeholder="Last Name"
              type="text"
              required
            />
            <TextInput3
              id="email"
              name="email"
              title="Email"
              placeholder="Email"
              type="email"
              required
            />
            <TextInput3
              id="phone"
              name="phone"
              title="Phone Number"
              placeholder="Phone Number"
              type="tel"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              className="h-28 w-full appearance-none bg-white placeholder-[#696869] border-0 border-b border-[#414041] text-sm lg:text-lg focus:outline-none"
              required
            ></textarea>

            <input
              type="submit"
              value={isSending ? "Sending Message" : "SEND MESSAGE"}
              className="text-white text-sm lg:text-lg bg-[#013135] py-5 px-6 my-0 mx-auto cursor-pointer"
            />
          </form>
        </section>
        <section
          className="mt-8 lg:mt-0 lg:grid lg:place-items-center w-full"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className="px-8 py-8 lg:py-0 h-[100%] lg:h-[70%] bg-[#2B5C5F] lg:w-[70%] flex justify-center items-center">
            <div className="lg:w-[90%]">
              <h3 className="text-center lg:text-left text-xl lg:text-2xl font-['Open_Sans'] font-bold text-white mb-6">
                Contact Info
              </h3>
              {contactInfo.map((info, i) => (
                <div className="flex gap-4 text-white text-lg py-2">
                  {info.icon}
                  <p>{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
