import React from 'react';
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilPen } from '@iconscout/react-unicons'
import { UilExclamationCircle } from '@iconscout/react-unicons'

const Create = () => {
    return (
        <div className='create'>
            <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <UilMapMarker />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your location' className='location' />
                    </div>
                    <div>
                        <UilPen />
                    </div>
                </div>
                <hr />
                <div className='location-message d-flex'>
                    <UilExclamationCircle />
                    <p>Your location will help us serve better and extend a personalised experience.</p>
                </div>
        </div>
    );
};

export default Create;