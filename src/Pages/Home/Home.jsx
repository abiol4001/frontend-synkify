import React from "react";
import { Link } from "react-router-dom";
import { featuresList } from "../../Data/featuresAtGlance";
import heroImage from "../../assets/heroImage.png";
import share from "../../assets/share.png";
import keep from "../../assets/keep.png";
import grow from "../../assets/grow.png";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";

const Home = () => {
  return (
    <div className="max-w[350px] md:max-w-[1600px] mx-auto">
      {/* For the Hero Section */}
      <section className="flex flex-col-reverse md:flex-row md:pl-16 w-[100%] justify-between items-center">
        <div className="md:w-1/3 text-center md:text-start">
          <p className="text-[42px] md:text-[57px] leading-tight font-[600]">
            Manage all channels{" "}
            <span className="text-[#74482E] block md:inline">with ease</span>
          </p>
          <p className="text-[28px] font-[400] mt-4">
            Synkify users will monitor all their engagement and strengthen the
            connection with their audience.
          </p>
          <div className="bg-[#013B3F] text-white text-center py-5 cursor-pointer hover:bg-[#013b3fd6] w-[270px] rounded-md mt-28 mx-auto md:mx-0">
            <Link to="/login">Get Started</Link>
          </div>
        </div>
        <div className="md:w-2/3">
          <img
            src={heroImage}
            alt="hero-image"
            className="object-fit md:h-[115vh] w-[100%]"
          />
        </div>
      </section>

      <section className="w-[100%] mt-[40px] mx-auto">
        <p className="text-center text-[32px] md:text-[42px] mb-10">
          Reach new audiences and build your brand online
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10 md:w-[800px] mx-auto">
          <div className="w-[300px] md:w-[350px] h-[280px] flex flex-col justify-center items-center rounded-[50px] shadow-[0_4px_4px_rgba(8,30,63,0.7)]">
            <img src={twitter} alt="Twitter" className="w-[60px] h-[60px]" />
            <p className="mt-2 text-[24px]">Twitter</p>
          </div>
          <div className="w-[300px] md:w-[350px] h-[280px] flex flex-col justify-center items-center rounded-[50px] shadow-[0_4px_4px_rgba(8,30,63,0.7)]">
            <img src={linkedin} alt="LinkedIn" className="w-[80px] h-[80px]" />
            <p className="mt-2 text-[24px]">LinkedIn</p>
          </div>
          <div className="w-[300px] md:w-[350px] h-[280px] flex flex-col justify-center items-center rounded-[50px] shadow-[0_4px_4px_rgba(8,30,63,0.7)]">
            <img src={insta} alt="Instagram" className="w-[80px] h-[80px]" />
            <p className="mt-2 text-[24px]">Instagram</p>
          </div>
          <div className="w-[300px] md:w-[350px] h-[280px] flex flex-col justify-center items-center rounded-[50px] shadow-[0_4px_4px_rgba(8,30,63,0.7)]">
            <img src={fb} alt="Facebook" className="w-[80px] h-[80px]" />
            <p className="mt-2 text-[24px]">Facebook</p>
          </div>
        </div>
        <p className="text-center text-[32px] mt-10 text-[500]">
          Post, Schedule, track, and manage your{" "}
          <span className=" block">social media platform with SYNKIFY.</span>
        </p>
      </section>

      <section className="md:px-[80px] mt-[100px]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/4 text-center">
            <p className="text-[42px]">
              Share old and new content on a schedule
            </p>
          </div>
          <div className="md:w-2/4">
            <img
              src={share}
              alt=""
              className="h-[480px] w-[100%] object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center mt-10">
          <div className="md:w-1/4 text-center">
            <p className="text-[42px]">keep your followers engaged</p>
          </div>
          <div className="md:w-2/4">
            <img
              src={keep}
              alt=""
              className="h-[450px] w-[100%] object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="md:w-1/4 text-center">
            <p className="text-[42px]">Grow your website traffic</p>
          </div>
          <div className="md:w-2/4">
            <img
              src={grow}
              alt=""
              className="h-[450px] w-[100%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Features at Glance */}
      <section className="mt-[60px] w-[100%]">
        <p className="text-[48px] font-[500] text-center">Features at glance</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9 mt-[40px] mx-auto place-items-center">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="w-[300px] text-center flex flex-col items-center"
            >
              <img src={item.icon} alt="" />
              <p className="text-[24px]">{item.title}</p>
              <p className="text-[24px]">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto w-[300px] flex justify-center">
          <button className="bg-[#013B3F] w-[100%] rounded-[10px] text-white py-4">
            Browse All Features
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
