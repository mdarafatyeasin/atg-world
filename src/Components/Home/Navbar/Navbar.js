import React from 'react';
import './Navbar.css'
import { UilUserPlus } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
        <>
            <div className='sub-navbar'>
                <dib className="left">
                    <ul>
                        <li><a href=''>All Posts(32)</a></li>
                        <li><a href=''>Article</a></li>
                        <li><a href=''>Event</a></li>
                        <li><a href=''>Education</a></li>
                        <li><a href=''>Job</a></li>
                    </ul>
                </dib>
                <dib className="right">
                    <button className='post-btn'><p>Write A Post</p><UilAngleDown /></button>
                    <button className='add-btn'><UilUserPlus /><p>Join Group</p></button>
                </dib>
            </div>
            <hr />
        </>
    );
};

export default Navbar;