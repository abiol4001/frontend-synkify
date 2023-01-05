import React from "react";
import { Period, MobileNav, Navbar } from "../../Components/ComingSoon";
import { heroImage, facebook, twitter, synkifyText, logo } from "../../assets";
import Countdown from "../../Components/countdown/Countdown";

export default function ComingSoon() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="py-[50px]">
        <div className="max-w-[1400px] w-[90%] mx-auto">
          <div className="grid grid-rows-2 md:grid-rows-1 gap-8 md:gap-0 md:grid-cols-3 mb-[50px] place-items-center">
            {/* <div className="grid grid-rows-2 md:grid-rows-1 gap-8 md:gap-0 md:grid-cols-3 md:h-[50px] mb-[50px]"> */}
            <div className="hidden md:block"></div>
            <div className="flex justify-center">
              {/* <div className="bg-[#346265] w-[50%] grid place-items-center">
                <h1 className="text-white text-2xl md:text-4xl font-bold">
                  Logo
                </h1>
              </div> */}
              <img
                src={logo}
                alt="Logo"
                className="h-[120px] w-[380px] object-cover"
              />
            </div>
            <div className="flex justify-center h-[50px]">
              <img src={synkifyText} alt="" />
            </div>
          </div>
          <div className="w-[80%] md:w-[60%] mx-auto">
            <h1 className="text-[#346265] text-4xl md:text-5xl text-center font-bold font-sans leading-tight">
              Synkify is coming to you soon!
            </h1>
            <div className="md:w-[85%] mx-auto">
              <p className="text-lg md:text-[18px] text-black text-center md:text-start leading-loose md:leading-relaxed mt-4">
                Never loose your consumers’ attention with Synkify. Engage with
                more audience, respond promptly, and share relevant contents
                from our Platform. Subscribe to our Newsletter to get full
                updates when the website launches
              </p>
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto my-8 grid grid-rows-2 md:grid-rows-1 gap-4 md:gap-0 md:grid-cols-3">
              <input
                type="text"
                placeholder="Email Address"
                className="p-4 md:col-span-2 text-xl border border-[#5B9EA5] rounded-lg"
              />
              <button className="bg-[#013B3F] text-white p-2 mx-4 rounded-lg text-xl hover:scale-90 transition duration-500">
                NOTIFY ME
              </button>
            </div>
          </div>
          <div className="w-[70%] mx-auto my-[60px] flex justify-center">
            <img src={heroImage} className="object-cover h-full" />
          </div>
          <section>
            <h3 className="text-[#1A4F52] text-xl md:text-3xl text-center font-bold font-sans leading-tight">
              Hang on! we’ve got something exiting for you here. Let the
              count-down begins
            </h3>
            {/* <div className="my-8 grid place-items-center grid-rows-1">
              <div className="flex gap-2">
                <Period number="28" text="Days" />
                <Period number="45" text="Hours" />
                <Period number="56" text="Minutes" />
                <Period number="32" text="Seconds" />
              </div>
            </div> */}
            <Countdown />
            <div className="flex justify-between md:w-[70%] mx-auto">
              <h3 className="text-[#1A4F52] text-xl md:text-[28px] font-bold font-sans leading-tight w-[60%]">
                We post trends and challenges on our social media handle, follow
                us on
              </h3>
              <div className="flex justify-end w-[30%] gap-10">
                <a href="https://www.facebook.com/profile.php?id=100089188536675" target='_blank'><img src={facebook} className="h-[40px] md:h-[60px] hover:scale-125 transition duration-500" /></a>
                <a href="https://twitter.com/synkify_" target='_blank'><img src={twitter} className="h-[40px] md:h-[60px] hover:scale-125 transition duration-500" /></a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}