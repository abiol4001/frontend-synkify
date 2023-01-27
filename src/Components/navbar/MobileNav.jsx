import React from 'react'
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";

const MobileNav = ({ setIsOpen }) => {
  return (
    <div className="fixed bg-[#C5D7D9] z-50 w-[100%] h-[100vh]  right-0 top-0 overflow-y-hidden">
      <button
        className="absolute right-[12%] top-[1.5%] text-white text-[22px]"
        onClick={() => setIsOpen(false)}
      >
        <GrClose />
      </button>
      <ul className="mt-[60px]">
        {navbarList.navList.map(({ page, link }) => (
          <Link key={link} to={link} onClick={() => setIsOpen(false)}>
            <li className="p-4 text-[24px] font-[700] mx-3 text-black">
              {page}
            </li>
          </Link>
        ))}
        <div className="mt-8 ml-6 w-[100%]">
          <Link
            to="/login"
            className="text-[24px] font-[500] text-white bg-red-500 rounded-xl px-36 h-10 py-6 hover:bg-white hover:text-red-500"
          >
            Login
          </Link>
        </div>
        <div className="mt-14 ml-6 w-[100%]">
          <Link
            to="/sign-up"
            className="text-[24px] font-[500] text-white bg-green-500 rounded-xl px-[132px] h-10 py-6 hover:bg-white hover:text-green-500"
          >
            Sign Up
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav