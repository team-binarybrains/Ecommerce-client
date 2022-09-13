import React from 'react';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Indicator from './Indicator';
import Nav from './Nav';
import MailAndMssg from './MailAndMssg';
import SocialAndLogin from './SocialAndLogin';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
    const [menu,setMenu] = useState(false);

    return (
        <div className='fixed top-0 left-0 right-0 border-b border-clr bg-clr z-[99]'>
            
            <section className='bg-white'>
                
                <div className='h-10 cont px-5 hidden lg:flex justify-between items-center'>
                    <MailAndMssg className='flex justify-center items-center' />

                    <SocialAndLogin className='flex justify-center items-center' />
                </div>
            
            </section>

            <section className='h-16 cont px-5 flex justify-between items-center'>

                <NavLink onClick={() => setMenu(false)} to={'/'} className='cairo text-white font-extrabold text-3xl cursor-pointer'><span className='text-dark'>VIP</span> Bazar</NavLink>
                
                <Nav className='hidden lg:flex items-center justify-center gap-8'/>
                
                <Indicator className='hidden lg:flex justify-center gap-8'/>

                {/* menu for mobile device */}
                <MobileMenu menu={menu} setMenu={setMenu} className='block lg:hidden'/>

            </section>

        </div>
    );
};

export default Header;