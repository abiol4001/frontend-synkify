import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const SocialAccount = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("Bearer");
    console.log(token)
    // async function connectFacebook() {
    //   try {
    //     const response = await fetch(
    //       "https://synkify-api.onrender.com/api/v1/facebook/facebookIntegrate"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Error in fetching data");
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error in connecting with Facebook:", error);
    //   }
    // }

    const connectFacebook = () => {
        if (token) {
          axios
            .get(
              "https://synkify-api.onrender.com/api/v1/facebook/facebookIntegrate"
            )
            .then((res) => {
              console.log(res);
              
            })
            .catch((err) => {
              console.error(err);
            //   setErrMsg(err.message);
            });
        } else {
          navigate("/login");
        }
    }

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
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Instagram</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#00A4F2', padding: '15px 95px' }}><FaLinkedin fontSize='40px' color='white' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>LinkedIn</div>
                    <button className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
                <div className='w-60 h-56 flex flex-col justify-center items-center'>
                    <div className='border border-black w-full h-20' style={{ textAlign: 'center', backgroundColor: '#00A4F2', padding: '15px 95px' }}><FaFacebook fontSize='40px' color='white' /></div>
                    <div className='border border-black w-full h-20 py-6 text-2xl'>Facebook</div>
                    <button onClick={connectFacebook} className='py-2 px-8 rounded my-3' style={{ color: '#050505', border: '1px solid #050505' }}>Connect</button>
                </div>
            </div>
        </>
    )
}

export default SocialAccount