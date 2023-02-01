import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaThLarge } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { logo } from '../../assets'

// Dashboard navbar list
export const sidebarNavList = [
    { name: "Dashboard", link: '/dashboard/main', icon: <FaThLarge /> },
    { name: "Social Account", link: '/account', icon: <FaRecycle /> },
    { name: "Profile", link: '/profile', icon: <FaUserCircle /> },
    { name: "Post", link: '/post', icon: <FaEdit /> },
    { name: "Schedules", link: '/schedule', icon: <FaClipboardCheck /> },
    { name: "Notifications", link: '/notification', icon: <FaBell /> },
    { name: "Reminder", link: '/reminder', icon: <FaClock /> },
    { name: "Settings", link: '/setting', icon: <FaRegSun /> },
    { name: "Logout", link: '/login', icon: <FaSignOutAlt /> },
];

const activeClass = {
    color: 'red',
}
const nonActive = {
    color: 'blue',
}


const sidebar = () => {
    return (
        <div className='h-screen' style={{ width: '300px', backgroundColor: '#2B5C5F' }}>
            <img src={logo} alt="Website Logo" className="w-[250px] p-10" />

            {/* <h1 style={{ marginLeft: '30px', fontWeight: 'bolder', fontSize: '40px', padding: '20px', color: 'white' }}>Synkify</h1> */}
            {sidebarNavList.map(category => (
                <NavLink key={category.name} to={category.link} style={(isActive) => (isActive ? { color: '#FFFFFF' } : { color: '#FFFEFF' })}>
                    <button className='bold flex items-center justify-start cursor-pointer px-2 py-4'>

                        <span style={{ marginRight: '15px', marginLeft: '20px' }}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                </NavLink>
            ))}
        </div>
    )
}

export default sidebar