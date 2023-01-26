import React from "react";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import { heroDisplay, featuresImage } from "../../assets";
import { Link } from "react-router-dom";
import { audienceNeeds, featuresList, reasons } from "../../Data/featuresAtGlance";

const Home = () => {
  const color = "#5B9EA5";
  const times = [1, 2, 3];

  return (
    <div>
      <Navbar />
      <section className="hero md:flex max-w-[1600px] w-[100%] md:px-[124px] gap-4 pt-[80px] mb-[50px]">
        <div className="w-[55%]">
          <h3 className="text-[48px] font-[700] leading-tight mb-[30px]">
            A simpler way to connect with your audience across all social
            networks
          </h3>
          <p className="text-[24px] font-[400] text-[#050505] mb-[40px]">
            Our platform aids in your audience growth. With Synkify, you will
            connect effectively and keep track of all engagements,set automated
            reminders and have your contents scheduled ahead.
          </p>
          <button className="bg-[#013135CC] text-[#FFFEFF] md:w-[350px] md:h-[75px] border-none outline-none hover:scale-105 hover:bg-[#013135] transition-all">
            <Link to="/sign-up" className=" md:px-28 md:py-6">
              GET STARTED
            </Link>
          </button>
        </div>
        <div className="w-45%">
          <img
            src={heroDisplay}
            alt="Main-Image"
            className="w-[590px] md:h-[550px] object-contain"
          />
        </div>
      </section>
      <div className="relative">
        <div className="flex justify-between w-[300px] mx-auto">
          {times.map((time, index) => {
            return (
              <img
                key={index}
                src="medal-star.svg"
                alt="Medal-Star"
                style={{ filter: "blur(4px)" }}
              />
            );
          })}
        </div>
        <hr
          style={{
            height: 5,
            borderColor: color,
            width: "82%",
            zIndex: 10,
            position: "absolute",
            top: 30,
            left: 120,
          }}
        />
      </div>
      <section className="py-[50px] px-[124px]">
        <h4 className="text-[36px] font-[700] text-center">
          Integrate multiple social media platforms on one Interface
        </h4>
        <div className="md:flex mt-14">
          <div className="w-1/2">
            <img src={featuresImage} alt="" className="w-[100%]" />
          </div>
          <div className="flex flex-col w-1/2 items-end md:mt-24">
            {featuresList.map((item, i) => (
              <div
                key={i}
                className={`w-[486px] flex flex-col items-center border border-1 border-[#5B9EA5] rounded-lg p-3 group hover:bg-[#5B9EA5] transition-all ${
                  i === 0 ? "" : "mt-6"
                }`}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="group-hover:text-white"
                />
                <h4 className="text-[14px] font-[700] mt-2 group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-[14px] font-[400] mt-2 group-hover:text-white">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:px-[120px]">
        <h4 className="text-[36px] font-[700] text-center mb-[30px]">
          Why you should use Synkify
        </h4>
        <div className="relative h-[1050px]">
          <div className="absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-[50%]">
            <img src="Reasons.png" alt="" />
          </div>
          {reasons.map((item, i) => (
            <div
              key={i}
              className={`w-[280px] flex flex-col items-center p-3 
              ${
                i === 0 &&
                "absolute -translate-x-[50%] -translate-y-[50%] top-24 left-[50%]"
              }
              ${i === 1 && "absolute -translate-y-[50%] left-8 top-[45%]"}
              ${i === 2 && "absolute -translate-y-[50%] right-8 top-[45%]"}
              ${
                i === 3 &&
                "absolute -translate-x-[50%] -translate-y-[50%] -bottom-20 left-[50%]"
              }`}
            >
              <img src={item.icon} alt="" className="w-[60px] h-[60px]" />
              <h4 className="text-[20px] text-[#5B9EA5] font-[700] mt-5">
                {item.title}
              </h4>
              <p className="text-[14px] font-[400] mt-1">{item.content}</p>
            </div>
          ))}
          <div className="absolute top-8 left-36">
            <img src="Line--4.svg" alt="" />
          </div>
          <div className="absolute top-12 right-28">
            <img src="Line--1.svg" alt="" />
          </div>
          <div className="absolute bottom-36 right-36">
            <img src="Line--2.svg" alt="" />
          </div>
          <div className="absolute bottom-36 left-36">
            <img src="Line--3.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="px-[120px] py-[50px]">
        <h4 className="text-[36px] font-[700] text-center mb-[30px]">
          Our Audiences' needs
        </h4>
        <div className="flex flex-wrap justify-between mt-[50px]">
          {audienceNeeds.map((item, i) => (
            <div className="flex flex-col items-center w-[384px] h-[384px] text-center px-[51px] py-8 bg-[#E3DAD5] rounded-[10px]">
              <img src={item.image} alt="" className="rounded-[50%] mb-[40px] h-[140px] w-[140px]" />
              <p className="text-[#2B5C5F] text-[16px] font-[400]">{item.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
