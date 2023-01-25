import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaRecycle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

// Dashboard navbar list
export const sidebarNavList = [
    { name: "Social Account", link: '/main', icon: <FaRecycle /> },
    { name: "Profile", link: '/profile', icon: <FaUserCircle /> },
    { name: "Post", link: '/post', icon: <FaEdit /> },
    { name: "Schedules", link: '/schedule', icon: <FaClipboardCheck /> },
    { name: "Notifications", link: '/notification', icon: <FaBell /> },
    { name: "Reminder", link: '/reminder', icon: <FaClock /> },
    { name: "Settings", link: '/setting', icon: <FaRegSun /> },
    { name: "Logout", link: '/login', icon: <FaSignOutAlt /> },
];


const sidebar = () => {
    return (
        <div className='h-screen text-white' style={{ width: '300px', backgroundColor: '#2B5C5F' }}>
            <h1 style={{ marginLeft: '30px', fontWeight: 'bolder', fontSize: '40px', padding: '20px' }}>Synkify</h1>
            {sidebarNavList.map(category => (
                <NavLink key={category.name} to={category.link} activeStyle={{ background: 'linear-gradient(90deg, #CCD8D9 58.61%, rgba(66, 72, 72, 0) 99.74%)' }}>
                    <button style={{ color: '#fff' }} className='bold flex items-center justify-start cursor-pointer px-2 py-4'>
                        <span style={{ marginRight: '15px', marginLeft: '20px' }}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                </NavLink>
            ))}
        </div>
    )
}

export default sidebar