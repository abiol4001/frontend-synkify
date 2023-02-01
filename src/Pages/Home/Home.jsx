import React from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { heroDisplay, featuresImage } from "../../assets";
import { Link } from "react-router-dom";
import { audienceNeeds, featuresList, reasons } from "../../Data/featuresAtGlance";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const color = "#5B9EA5";
  const times = [1, 2, 3];

  return (
    <>
      <section className="hero lg:flex w-[100%] px-[15px] md:px-[30px] lg:px-[124px] gap-4 pt-[40px] mb-[50px]">
        <div className="lg:w-[55%]">
          <h3 className="text-[40px] text-center md:text-start md:text-[42px] font-[700] leading-tight mb-[30px]" data-aos="fade-down" data-aos-once='false'>
            A simpler way to connect with your audience across all social
            networks
          </h3>
          <p className="text-[20px] text-center md:text-start md:text-[24px] font-[400] font-['Open_Sans] text-[#050505] mb-[40px]" data-aos='fade-down' data-aos-delay='300' data-aos-once='false'>
            With Synkify, you will connect effectively and keep track of all
            engagements,set automated reminders and have your contents scheduled
            ahead.
          </p>
          <Link to="/sign-up" className="mx-auto">
            <button className="bg-[#013135CC] text-[#FFFEFF] lg:w-[350px] w-[100%] h-[75px] lg:m-0 border-none outline-none hover:scale-105 hover:bg-[#013135] transition-all mb-10" data-aos='fade-down' data-aos-delay='700' data-aos-once='false'>
              GET STARTED
            </button>
          </Link>
        </div>
        <div className="lg:w-45%" data-aos='fade-left' data-aos-delay='900' data-aos-once='false'>
          <img
            src={heroDisplay}
            alt="Main-Image"
            className="lg:w-[590px] w-[100%] md:h-[550px] object-cover"
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
        <hr className="none lg:block h-0 border border-green-800 lg:w-[82%] z-10 absolute top-8 left-32" />
      </div>

      {/* Integrate multiple Platforms */}
      <section className="py-[50px] px-[15px] md:px-[30px] lg:px-[124px]">
        <h4 className="text-[36px] text-center md:text-start font-[700]" data-aos='fade-right' data-aos-duration='1'>
          Integrate multiple social media platforms on one Interface
        </h4>
        <div className="lg:flex mt-14">
          <div className="lg:w-1/2 h-[626px]" data-aos='fade-right' data-aos-delay='600' data-aos-duration='900'>
            <img src={featuresImage} alt="" className="w-[100%] h-[100%]" />
          </div>
          <div className="flex flex-col lg:w-1/2 items-center lg:items-end py-6">
            {featuresList.map((item, i) => (
              <div
                data-aos='fade-up' data-aos-delay={`${(i + 1) * 300}`} data-aos-once='false'
                key={i}
                className={`max-w-[486px] flex flex-col items-center border border-1 border-[#5B9EA5] rounded-lg p-3 group hover:bg-[#5B9EA5] transition-all ${i === 0 ? "" : "mt-4"
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

      {/* Why you should use Synkify */}
      <section className="px-[15px] md:px-[30px] lg:px-[124px]">
        <h4 className="text-[36px] font-[700] text-center mb-[30px]" data-aos='fade-down'>
          Why you should use Synkify
        </h4>
        <div className="relative xl:h-[600px]">
          <div className="hidden xl:absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-[50%]">
            <img src="Reasons.png" alt="" />
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            {reasons.map((item, i) => (
              <div
                key={i}
                className={`w-[300px] md:w-[350px] xl:w-[280px] flex flex-col items-center p-3 
              ${i === 0 &&
                  "xl:absolute xl:-translate-x-[50%] xl:-translate-y-[50%] top-24 left-[50%]"
                  }
              ${i === 1 && "xl:absolute xl:-translate-y-[50%] left-20 top-[45%]"
                  }
              ${i === 2 &&
                  "xl:absolute xl:-translate-y-[50%] right-20 top-[45%]"
                  }
              ${i === 3 &&
                  "xl:absolute xl:-translate-x-[50%] xl:-translate-y-[50%] -bottom-20 left-[50%]"
                  }`}
              >
                <img src={item.icon} alt="" className="w-[60px] h-[60px]" />
                <h4 className="text-[20px] text-[#5B9EA5] font-[700] mt-5">
                  {item.title}
                </h4>
                <p className="text-[14px] font-[400] mt-1">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="hidden xl:block">
            <div className=" absolute top-8 left-36">
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
        </div>
      </section>

      {/* Our Audiences' needs */}
      <section className="px-[15px] md:px-[30px] lg:px-[124px] py-[50px]">
        <h4 className="text-[36px] font-[700] text-center mb-[30px]" data-aos='fade-down'>
          Our Audiences' needs
        </h4>
        <div className="flex flex-wrap gap-5 justify-center mt-[50px]">
          {audienceNeeds.map((item, i) => (
            <div className="flex flex-col items-center max-w-[384px] w-[300px] h-[384px] text-center px-[30px] md:px-[50px] py-8 bg-[#E3DAD5] rounded-[10px]" data-aos='fade-right' data-aos-delay={`${(i + 1) * 300}`} data-aos-once='false'>
              <img
                src={item.image}
                alt=""
                className="rounded-[50%] mb-[40px] h-[140px] w-[140px]"
              />
              <p className="text-[#2B5C5F] text-[16px] font-[400]">
                {item.comment}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
