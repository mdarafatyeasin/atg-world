import React, { useState } from 'react';
import './Signup.css'
import Modal from 'react-modal'
import { UilTimesCircle } from '@iconscout/react-unicons'
import login1 from '../../../Asset/login1.jpg'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGoogle } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom';
import Signin from '../Modal/Signin';

const Signup = () => {
    const [modalIsOpn, setModalIsOpen] = useState(false)
    return (
        <div>
            <button className='create-account-btn' onClick={() => setModalIsOpen(true)} >It's free!</button>
            <Modal isOpen={modalIsOpn}
                style={
                    {
                        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.666)', },
                        content: {
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            right: '0px',
                            bottom: '0px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '0px'
                        }
                    }}>
                <div className='modal-title'>
                    <div className='btn-X-right'>
                        <button onClick={() => setModalIsOpen(false)}><UilTimesCircle /></button>
                    </div>
                    <div>
                        <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    </div>
                    <div className="modal-nav">
                        <h2>Create Account</h2>
                        <div className='sign-btn'><p>Already have an account?</p><Signin/></div>
                    </div>
                    <div className="content-sec">
                        <div className='input-section'>
                            <form>
                                <div className="name">
                                    <input type="text" placeholder='First Name' />
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className="others">
                                    <input type="email" placeholder='Email'/>
                                    <input type="password" placeholder='Password'/>
                                    <input type="password" placeholder='Confirm Password'/>
                                </div>
                            </form>
                            <button className='submit-btn'>Create Account</button>
                            <button className='google-btn'><span><UilFacebook/></span> Sign up with Facebook</button>
                            <button className='facebook-btn'><span><UilGoogle/></span> Create Account</button>
                        </div>
                        <div className='img-section'>
                            <img src={login1} alt="" />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Signup;