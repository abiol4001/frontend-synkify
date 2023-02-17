import React from 'react'
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    const fullName = localStorage.getItem("fullName")
    return (
        <div className='py-8 pl-8 pr-0 flex justify-between items-center' style={{ width: '1000px' }}>
            <h1 style={{ fontWeight: '700', fontSize: '25px' }}>Welcome {fullName}!</h1>
            <form className='flex justify-between items-center'
                onSubmit={() => { }}
                style={{ border: '1px solid #2B5C5F', width: '250px', paddingLeft: '5px', boxShadow: 'none', }}
            >
                <FaSearch className='cursor-pointer hover:text-red-700' />
                <input className='outline-none border-spacing-0 w-full p-1 z-10	' value='' onChange={() => { }} />

            </form>
            <div className='flex justify-between items-center' style={{ width: '50px', }}>
                <FaRegBell className='text-2xl cursor-pointer hover:text-red-700' />
                <FaRegUser className='text-2xl cursor-pointer hover:text-red-700' />
            </div>
        </div>
    )
}

export default Header