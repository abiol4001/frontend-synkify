import React from 'react'
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
    { name: "Social Account", link: '/dashboard/account', icon: <FaRecycle /> },
    { name: "Profile", link: '/dashboard/profile', icon: <FaUserCircle /> },
    { name: "Post", link: '/dashboard/post', icon: <FaEdit /> },
    { name: "Schedules", link: '/dashboard/schedule', icon: <FaClipboardCheck /> },
    { name: "Notifications", link: '/dashboard/notification', icon: <FaBell /> },
    { name: "Reminder", link: '/dashboard/reminder', icon: <FaClock /> },
    { name: "Settings", link: '/dashboard/setting', icon: <FaRegSun /> },
    { name: "Logout", link: '/login', icon: <FaSignOutAlt /> },
];

const sidebar = () => {
    return (
        <div className='h-screen' style={{ width: '300px', backgroundColor: '#2B5C5F' }}>
            <img src={logo} alt="Website Logo" className="w-[250px] p-10" />
            {sidebarNavList.map(category => (
                <NavLink key={category.name} to={category.link} style={({ isActive }) => ({
                    color: isActive ? '#fff' : '#C3C2C3',
                    fontWeight: isActive ? '700' : '400'
                })}>
                    <button className='bold flex items-center justify-start cursor-pointer px-2 py-4'>

                        <span style={{ marginRight: '15px', marginLeft: '20px', color: '#BF7B54' }}>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                </NavLink>
            ))}
        </div>
    )
}

export default sidebar