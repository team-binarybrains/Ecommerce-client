import React from 'react';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaPinterestP, FaUser } from 'react-icons/fa';

const SocialAndLogin = ({ className }) => {
    return (
        <div className={className}>
            <nav className='flex justify-center items-center gap-5 text-dark'>
                <GrFacebookOption className='cursor-pointer' />
                <GrTwitter className='cursor-pointer' />
                <GrLinkedinOption className='cursor-pointer' />
                <FaPinterestP className='cursor-pointer' />
            </nav>
            <div className="divider lg:divider-horizontal my-0" />
            <Link to='/login' className='flex justify-center items-center gap-2 cursor-pointer text-dark'><FaUser /> Login</Link>
        </div>
    );
};

export default SocialAndLogin;