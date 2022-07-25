import React from 'react';
import './Post.css'
import ps1 from '../../../Asset/ps1.jpg'
// import ps2 from '../../../Asset/ps2.jpg'
// import ps3 from '../../../Asset/ps3.jpg'
import user from '../../../Asset/user.png'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilSwatchbook } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'
import { UilShareAlt } from '@iconscout/react-unicons'

const Post = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div className='read'>

                {/* Posts */}
                <div className="post">
                    <div className="img">
                        <img src={ps1} alt="nature" />
                    </div>
                    <div className="content">
                        <h1 className='title'><UilSwatchbook /> Article</h1>
                        <div>
                            <div className='sub-title-box'>
                                <div className='sub-title'>
                                    <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                                </div>
                                <div>
                                    <UilEllipsisH />
                                </div>
                            </div>
                            <p className='description'>I've worked in UX for the better part of a decade. Form now on, I plan to rei...</p>
                            <div className="info d-flex justify-content-between align-items-center user-container">
                                <div className="user d-flex align-items-center">
                                    <div className="user-img"><img src={user} alt="" /></div>
                                    <div className="user-name"><h2>Sarthak Kamra</h2></div>
                                </div>
                                <div className="viewer d-flex align-items-center">
                                    <div className="view"><UilEye/> 1.4K Views</div>
                                    <div className="share"><UilShareAlt/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------ */}
                <div className="post">
                    <div className="img">
                        <img src={ps1} alt="nature" />
                    </div>
                    <div className="content">
                        <h1 className='title'><UilSwatchbook /> Article</h1>
                        <div>
                            <div className='sub-title-box'>
                                <div className='sub-title'>
                                    <h2>What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                                </div>
                                <div>
                                    <UilEllipsisH />
                                </div>
                            </div>
                            <p className='description'>I've worked in UX for the better part of a decade. Form now on, I plan to rei...</p>
                            <div className="info d-flex justify-content-between align-items-center user-container">
                                <div className="user d-flex align-items-center">
                                    <div className="user-img"><img src={user} alt="" /></div>
                                    <div className="user-name"><h2>Sarthak Kamra</h2></div>
                                </div>
                                <div className="viewer d-flex align-items-center">
                                    <div className="view"><UilEye/> 1.4K Views</div>
                                    <div className="share"><UilShareAlt/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------- */}

            </div>
            <div className='create'>
                <hr />
            </div>
        </div>
    );
};

export default Post;