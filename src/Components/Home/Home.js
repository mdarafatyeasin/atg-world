import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import Navbar from './Navbar/Navbar';
import Post from './Post/Post';

const Home = () => {
    return (
        <div className='home'>
            {/* banner section */}
            <Banner></Banner>
            {/* navbar section */}
            <div className='container'>
                <Navbar></Navbar>

                {/* Post section */}
                <Post></Post>
            </div>
        </div>
    );
};

export default Home;