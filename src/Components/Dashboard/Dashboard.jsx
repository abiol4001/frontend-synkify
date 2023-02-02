import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Header from './Header';
import Main from './Main';
import Profile from './Profile';
import Post from './Post'
import Notification from './Notification';
import Schedule from './Schedule';
import Reminder from './Reminder';
import Setting from './Setting';
import SocialAccount from './SocialAccount';

const Dashboard = ({ children }) => {
    return (
        <div className='flex'>
            {/* <Router> */}

                <div>
                    <Sidebar />

                </div>
                <div>
                    <Header />

                    {children}
                    {/* <Routes>
                        <Route index element={<Main />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/account" element={<SocialAccount />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/schedule" element={<Schedule />} />
                        <Route path="/notification" element={<Notification />} />
                        <Route path="/reminder" element={<Reminder />} />
                        <Route path="/setting" element={<Setting />} />
                    </Routes> */}
                </div>
        </div>
    )
}

export default Dashboard