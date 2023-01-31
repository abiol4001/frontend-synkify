import React from 'react'
import { Link } from "react-router-dom";
import { navbarList } from "../../Data/navbar";
import { footerNavList } from "../../Data/navbar"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-[45rem] lg:h-[34rem] bg-blue-gray-50 text-black md:bg-transparent md:bg-[url("./assets/bg-footer.svg")] bg-no-repeat bg-cover pt-52 md:text-white'>
      <div className='flex flex-col justify-center items-center w-3/4 h-72 mx-auto'>
        <div className='flex justify-around w-full flex-col md:flex-row'>
          <div>
            <Link to="/">
              <img src="" alt="" />
              <p className="tablet:text-[28px] text-[30px] font-[700] mb-4">
                {navbarList.logo}
              </p>
            </Link>
            <p>Office address should be here</p>
            <p>info@synkify.com</p>
            <p>+234-08000000000</p>
          </div>
          <div>
            <h2 className='my-4 font-[700] text-[24px]'>Quick Links</h2>
            <ul>
              {footerNavList.quickLinks.map(({ page, link }) => (
                <Link key={link} to={link}>
                  <li className=''>{page}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='my-4 font-[700] text-[24px]'>Support</h2>
            <ul>
              {footerNavList.support.map(({ page, link }) => (
                <Link key={link} to={link}>
                  <li className='mb-0'>{page}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='my-4 font-[700] text-[24px]'>Follow Us</h2>
            <div className='flex justify-between'>
              <a href='#!' role='button' className='text-[30px]'> <FaTwitterSquare /></a>
              <a href='#!' role='button' className='text-[30px]'> <FaFacebook /></a>
              <a href='#!' role='button' className='text-[30px]'> <FaInstagram /></a>
              <a href='#!' role='button' className='text-[30px]'> <FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className='mt-12'>@2023 Synkify. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer