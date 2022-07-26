import React, { useState } from 'react';
import './Titlebar.css'
import { UilSearchAlt } from '@iconscout/react-unicons'
import Signup from '../Home/Modal/Signup';

const Titlebar = () => {
    return (
        <div id='title-bar'>
            <div className='title-bar flex'>
                <div className='first'>Logo</div>
                <div className='second'>
                    <UilSearchAlt color="#495057" className='icon'></UilSearchAlt>
                    <input className='search-box' type="text" placeholder='Search for your favorite groups in ATG' />
                </div>
                <div className='third'>Create account.
                    <button className='openModalBtn'>It's free!</button>
                </div>
            </div>
            <Signup />
        </div>
    );
};

export default Titlebar;