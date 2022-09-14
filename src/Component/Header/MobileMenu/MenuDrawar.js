import React from 'react';
import Indicator from '../Indicator';
import MailAndMssg from '../MailAndMssg';
import Nav from '../Nav';
import SocialAndLogin from '../SocialAndLogin';
import style from './mobileMenu.module.css'

const MenuDrawar = ({menu,setMenu,className}) => {

    return (
        <div className={className}>
            <div className={`absolute w-screen sm:w-[25rem] bg-white flex flex-col items-start pl-8 pr-2 pt-10 pb-5 gap-8 top-0 right-0 bottom-0 border-l border-t overflow-y-auto ${menu ? style.slideIn : style.slideOut}`}>

                <Indicator className='flex justify-center gap-8 text-dark select-none' setMenu={setMenu}/>
                <SocialAndLogin className='space-y-2 select-none' />
                <Nav className='flex flex-col gap-4 justify-center select-none' hideMenuFn={()=>setMenu(false)} />
                <MailAndMssg className='space-y-1 text-dark select-none' />

            </div>
        </div>
    );
};

export default MenuDrawar;