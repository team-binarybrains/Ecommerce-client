import React from 'react';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaPinterestP, FaUser } from 'react-icons/fa';

const SocialAndLogin = ({ className }) => {
    return (
        <div className={className}>
            <nav className='flex justify-center items-center gap-5'>
                <GrFacebookOption />
                <GrTwitter />
                <GrLinkedinOption />
                <FaPinterestP />
            </nav>
            <div className="divider lg:divider-horizontal my-0" />
            <button className='flex justify-center items-center gap-2 cursor-pointer'><FaUser /> Login</button>
        </div>
    );
};

export default SocialAndLogin;