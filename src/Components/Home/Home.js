import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className='home'>
            {/* banner section */}
            <Banner></Banner>
            {/* navbar section */}
            <div className='container'>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Home;