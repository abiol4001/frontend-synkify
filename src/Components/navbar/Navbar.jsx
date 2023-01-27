import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";
import { BiMenu } from "react-icons/bi";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 px-10 md:px-[100px] max-w-[1600px] w-[100%] md:mt-4 mx-auto flex justify-between items-center">
      <Link to="/">
        <img src="" alt="" />
        <p className="tablet:text-[28px] text-[18px] text-blue-400 font-[700]">
          {navbarList.logo}
        </p>
      </Link>

      <div>
        <ul className="hidden md:flex items-center">
          {navbarList.navList.map(({ page, link }) => (
            <Link className="mx-3 " key={link} to={link}>
              <li className="p-3 mb-2 md:mb-0 text-[#696869] font-[400] navbar">
                {page}
              </li>
            </Link>
          ))}
          <Link to="/login">
            <button className="text-[16px] font-[400] text-[#414041] border border-red-500 rounded-3xl px-6 h-10">
              Login
            </button>
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
