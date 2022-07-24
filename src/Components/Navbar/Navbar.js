import React from 'react';
import './Navbar.css'
import { UilSearchAlt } from '@iconscout/react-unicons'

const Navbar = () => {
    return (
        <div className='navbar flex'>
            <div className='first'>Logo</div>
            <div className='second'>
                <UilSearchAlt className='icon'></UilSearchAlt>
                <input className='search-box' type="text" placeholder='Search for your favorite groups in ATG' />
            </div>
            <div className='third'>Create account. <a href="">It's free!</a></div>
        </div>
    );
};

export default Navbar;