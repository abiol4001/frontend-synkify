import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";
import { synkify } from "../../assets";
import { BiMenu } from "react-icons/bi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-10 md:px-[100px] max-w-[1600px] w-[100%] md:mt-4 mx-auto flex justify-between items-center">
      <Link to="/">
        <img src={synkify} alt="logo" className="w-[120px] h-[60px]" />
      </Link>

      <div className=" md:w-[80%] lg:w-[65%] ">
        <ul className="hidden md:flex items-center">
          {navbarList.navList.map(({ page, link }) => (
            <Link className="mx-3 " key={link} to={link}>
              <li className="p-3 mb-2 md:mb-0 text-[#696869] font-[400] navbar hover:underline underline-offset-4 decoration-2 decoration-[#2B5C5F] hover:text-[#2B5C5F]">
                {page}
              </li>
            </Link>
          ))}
          <Link
            to="/login"
            className="text-[16px] font-[400] text-[#414041] border border-red-500 rounded-3xl px-6 h-10 p-2 ml-auto hover:bg-red-500 hover:text-white"
          >
            Login
          </Link>
        </ul>
      </div>

      {!isOpen && (
        <div className="md:hidden" onClick={() => setIsOpen(true)}>
          <BiMenu size={30} />
        </div>
      )}

      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Navbar;
