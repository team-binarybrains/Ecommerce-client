import React from 'react';
import Indicator from '../Indicator';
import MailAndMssg from '../MailAndMssg';
import Nav from '../Nav';
import SocialAndLogin from '../SocialAndLogin';

const MenuDrawar = ({menu,setMenu,className}) => {

    return (
        <div className={className}>
            <div className={`absolute w-screen sm:w-1/2 bg-white flex flex-col items-start px-10 pt-10 pb-5 gap-8 top-0 bottom-0 right-0 border-l border-t overflow-y-auto`}>

                <Indicator className='flex justify-center gap-8 text-dark' setMenu={setMenu}/>
                <SocialAndLogin className='space-y-2' />
                <Nav className='flex flex-col gap-4 justify-center' hideMenuFn={()=>setMenu(false)} />
                <MailAndMssg className='space-y-1 text-dark' />

            </div>
        </div>
    );
};

export default MenuDrawar;