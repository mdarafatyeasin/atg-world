import React from 'react';
import './Banner.css'
import { UilArrowLeft } from '@iconscout/react-unicons'

const Banner = () => {
    return (
        <div className='banner'>

            {/* <button>Hi</button> */}
            <div className='banner-text'>
                <div className='r-banner-text d-flex justify-content-between'>
                    <div><p className='r-arrow'><UilArrowLeft /></p></div>
                    <div><button className='r-join-group'>Join Group</button></div>
                </div>
                <div className='title-info'>
                    <h2>Computer Engineering</h2><br />
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;