import React from 'react';
import { HiMail } from 'react-icons/hi';

const MailAndMssg = ({ className }) => {

    return (
        <div className={className}>
            <p className='flex items-center gap-2'><HiMail className='h-5 w-5' />example@gmail.com</p>
            <div className="divider lg:divider-horizontal my-0" />
            <p className=''>Free Shipping for all Order of $99</p>
        </div>
    );
};

export default MailAndMssg;