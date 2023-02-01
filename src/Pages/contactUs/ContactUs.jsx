import { Textarea } from "@material-tailwind/react";
import React from "react";
import { TextInput3 } from "../../Components";

export const ContactUs = () => {
  return (
    <div className="w-full lg:w-4/5 lg:mx-auto lg:h-[80%] my-4 lg:my-8 lg:px-0">
      <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-['Open_Sans'] font-bold">
        Get In Touch
      </h1>
      <div className="grid lg:grid-cols-2 h-full my-4 lg:my-8">
        <section className="px-4">
          <h2 className="text-xl lg:text-2xl font-['Open_Sans'] font-bold">
            Send us a Message
          </h2>

          <form className="flex flex-col gap-[30px] my-3 lg:my-6">
            <TextInput3
              id="firstname"
              title="First Name"
              placeholder="First Name"
              type="text"
              required
            />
            <TextInput3
              id="lastname"
              title="Last Name"
              placeholder="Last Name"
              type="text"
              required
            />
            <TextInput3
              id="email"
              title="Email"
              placeholder="Email"
              type="email"
              required
            />
            <TextInput3
              id="phone"
              title="Phone Number"
              placeholder="Phone Number"
              type="tel"
              required
            />

            <Textarea
              placeholder="Message"
              className="h-28 w-full appearance-none bg-white placeholder-[#696869] border-0 border-b border-[#414041] text-sm lg:text-lg"
              required
            ></Textarea>

            <input
              type="submit"
              value="SEND MESSAGE"
              className="text-white text-sm lg:text-lg bg-[#013135] py-5 px-6 my-0 mx-auto"
            />
          </form>
        </section>
        <section className="mt-8 lg:mt-0 lg:grid lg:place-items-center w-full">
          <div className="px-8 py-8 lg:py-0 h-[100%] lg:h-[70%] bg-[#2B5C5F] lg:w-[70%] flex justify-center items-center">
            <div className="lg:w-[90%]">
              <h3 className="text-center lg:text-left text-xl lg:text-2xl font-['Open_Sans'] font-bold text-white mb-6">Contact Info</h3>
              <div className="flex flex-col gap-4">
                <p className="text-center text-white text-lg">+2349000000090</p>
                <p className="text-center text-white text-lg">
                  info@synkify.com
                </p>
                <p className="text-center text-white text-lg">
                  https://twitter.com/Synkify
                </p>
                <p className="text-center text-white text-lg">
                  https://Facebook.com/Synkify
                </p>
                <p className="text-center text-white text-lg">
                  https://medium.com/Synkify
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
