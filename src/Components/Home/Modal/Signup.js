import React, { useState } from 'react';
import './Signup.css'
import Modal from 'react-modal'
import { UilTimesCircle } from '@iconscout/react-unicons'

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
                        <p>Already have an account? <a href="">Sign In</a></p>
                    </div>
                    <div className="content-sec">
                        <div className='input-section'>
                            <table>
                                <tr>
                                    <td><input type="text" placeholder='First Name'/></td>
                                    <td><input type="text" placeholder='Last Name'/></td>
                                </tr>
                                <tr>
                                    <td colspan="4"><input type="email" placeholder='Email'/></td>
                                    
                                </tr>
                                <tr>
                                    <td colspan="2"><input type="password" placeholder='Password'/></td>
                                </tr>
                                <tr>
                                <td colspan="2"><input type="password" placeholder='COnfirm Password'/></td>
                                </tr>
                            </table>
                        </div>
                        <div className='img-section'></div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Signup;