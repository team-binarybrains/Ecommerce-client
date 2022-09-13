import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({className,hideMenuFn}) => {

    
    const navStyle = ({isActive})=> {
        return isActive?'font-extrabold text-clr lg:text-dark tracking-wider':'font-extrabold lg:text-white text-dark tracking-wider';
    }

    return (
        <div className={className}>
            <NavLink onClick={hideMenuFn} to={'/'} className={navStyle}>হোম</NavLink>
            <NavLink onClick={hideMenuFn} to={'/shop'} className={navStyle}>কেনাকাটা করুন</NavLink>
            <NavLink onClick={hideMenuFn} to={'/checkout'} className={navStyle}>চেকআউট</NavLink>
            <NavLink onClick={hideMenuFn} to={'/blog'} className={navStyle}>ব্লগ</NavLink>
        </div>
    );
};

export default Nav;