import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Dashboard from './Dashboard';

const SocialAccount = () => {
    return (
        <>
            <div style={{ marginLeft: '590px', color: '#fff' }}>
                <button className="inline-flex ml- justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 w-40" style={{ background: '#013135' }}>
                    Link Accounts
                    <FaAngleDown className="-mr-1 ml-2 h-5 w-5" />
                </button>
            </div>
            <div className='grid grid-cols-2 gap-4 p-8' style={{ margin: 'auto', width: '700px', textAlign: 'center' }}>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#00A4F2', padding: '15px 95px' }}><FaTwitter fontSize='40px' color='white' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Twitter</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#EBEAEB', padding: '15px 95px' }}><FaInstagram fontSize='40px' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Twitter</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#00A4F2', padding: '15px 95px' }}><FaLinkedin fontSize='40px' color='white' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Twitter</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#00A4F2', padding: '15px 95px' }}><FaFacebook fontSize='40px' color='white' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Twitter</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
            </div>
        </>
    )
}

export default SocialAccount