import React from 'react';

const MenuIcon = ({menu,setMenu,style,setDrawer}) => {

    return (
        <label className={`${style.label}`} htmlFor="check">
            <input
                className={`${style.input}`}
                type="checkbox" id="check"
                onChange={(e) => {setMenu(e.target.checked);setDrawer(false)}}
                checked={menu}
            />
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
            <span className={`${style.span}`}></span>
        </label>
    );
};

export default MenuIcon;