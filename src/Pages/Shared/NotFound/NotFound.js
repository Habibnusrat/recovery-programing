import React from 'react';
import sleeping from '../../../images/Sleepy-404.jpg'

const NotFound = () => {
    return (
        <div className='w-100'>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;