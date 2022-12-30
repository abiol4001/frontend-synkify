import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";
import { BiMenu } from "react-icons/bi"
import MobileNav from './MobileNav';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-4 max-w-[1400px] w-[90%] mx-auto flex justify-between">
      <Link to="/">
        <img src="" alt="" />
        <p className="tablet:text-[28px] text-[18px] text-blue-400 font-[700]">
          {navbarList.logo}
        </p>
      </Link>

      <div>
        <ul className="hidden md:flex ">
          {navbarList.navList.map(({ page, link }) => (
            <Link className="mx-3 " key={link} to={link}>
              <li className="p-3 mb-2 font-[700] navbar">{page}</li>
            </Link>
          ))}
        </ul>
      </div>

      {!isOpen && <div className="md:hidden" onClick={() => setIsOpen(true)}>
        <BiMenu size={30} />
      </div>}

      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Navbar