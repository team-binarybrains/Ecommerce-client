import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({className,hideMenuFn}) => {

    
    const navStyle = ({isActive})=> {
        return isActive?'font-extrabold text-clr lg:text-dark tracking-wider':'font-extrabold lg:text-white text-dark tracking-wider';
    }

    return (
        <div className={className}>
            <NavLink onClick={hideMenuFn} to={'/'} className={navStyle}>HOME</NavLink>
            <NavLink onClick={hideMenuFn} to={'/shop'} className={navStyle}>SHOP</NavLink>
            <NavLink onClick={hideMenuFn} to={'/pages'} className={navStyle}>PAGES</NavLink>
            <NavLink onClick={hideMenuFn} to={'/blog'} className={navStyle}>BLOG</NavLink>
            <NavLink onClick={hideMenuFn} to={'/contact'} className={navStyle}>CONTACT</NavLink>
        </div>
    );
};

export default Nav;