import React from 'react';
import './Titlebar.css'
import { UilSearchAlt } from '@iconscout/react-unicons'

const Titlebar = () => {
    return (
        <div className='title-bar flex'>
            <div className='first'>Logo</div>
            <div className='second'>
                <UilSearchAlt color= "#495057" className='icon'></UilSearchAlt>
                <input className='search-box' type="text" placeholder='Search for your favorite groups in ATG' />
            </div>
            <div className='third'>Create account. <a href="">It's free!</a></div>
        </div>
    );
};

export default Titlebar;