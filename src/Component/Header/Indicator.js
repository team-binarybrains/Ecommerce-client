import React from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';

const Indicator = ({ className }) => {


    return (
        <div className={className}>
            <div className="indicator">
                <BsFillBookmarkHeartFill className='w-6 h-6 text-gray-100 cursor-pointer' />
            </div>

            <div className="indicator">
                <MdShoppingCart className='w-7 h-7 text-gray-100 cursor-pointer' />
            </div>

            <p className='font-semibold text-dark'>Item: <span className='font-extrabold text-white'>$ 0</span></p>
        </div>
    );
};

export default Indicator;