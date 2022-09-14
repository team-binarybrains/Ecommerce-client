import React from 'react';
import MenuDrawar from './MenuDrawar';
import MenuIcon from './MenuIcon';
import style from './mobileMenu.module.css';

const MobileMenu = ({menu,setMenu,className}) => {
    return (
        <div className={className}>
            <MenuIcon menu={menu} setMenu={setMenu} style={style}/>

            <MenuDrawar menu={menu} setMenu={setMenu} className={`fixed backdrop-blur-[8px] top-16 bottom-0 z-[99] right-0 ${menu ? 'w-screen' : 'w-0'}`}/>
        </div>
    );
};

export default MobileMenu;