import React from 'react';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';

const Indicator = ({ className,setMenu,setDrawer }) => {

    return (
        <div className={className}>

                <BsFillBookmarkHeartFill className='w-6 h-6 lg:text-gray-100 cursor-pointer' />

                <MdShoppingCart className='w-7 h-7 lg:text-gray-100 cursor-pointer' onClick={()=> {setDrawer(prev=>!prev);setMenu(false)}}/>
                
        </div>
    );
};

export default Indicator;