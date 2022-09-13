import React from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';

const Indicator = ({ className }) => {


    return (
        <div className={className}>
            <div className="indicator">
                <span className="indicator-item badge border-0 bg-clr text-white font-bold">0</span>
                <BsFillBookmarkHeartFill className='w-6 h-6 relative' />
            </div>

            <div className="indicator">
                <span className="indicator-item badge border-0 bg-clr text-white font-bold">0</span>
                <MdShoppingCart className='w-7 h-7' />
            </div>

            <p className='font-semibold text-zinc-600'>Item: <span className='font-extrabold text-zinc-900'>$ 0</span></p>
        </div>
    );
};

export default Indicator;