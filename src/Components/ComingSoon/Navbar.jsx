import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { csNavbarList } from "../../Data/navbar";
import { BiMenu } from "react-icons/bi"
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="py-4 max-w-[1400px] w-[90%] mx-auto flex justify-between">
      <Link className="flex items-center" to="/">
        <img src={csNavbarList.logo} alt="" width='100' height='100' />
        {/* <p className="tablet:text-[28px] text-[18px] text-[#1A4F52] font-[700]">
          {csNavbarList.logo}
        </p> */}
      </Link>

      <div className="bg-[#1A4F52]">
        <ul className="hidden md:flex  items-center">
          {csNavbarList.navList.map(({ page, link }) => (
            <Link className="mx-3 " key={link}>
              <li className="px-3 pt-4 pb-2 mb-2 navbar text-[18px] font-[400] font-sans text-[#FFFEFF] hover:underline">
                {page}
              </li>
            </Link>
          ))}
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
}

export default Navbar