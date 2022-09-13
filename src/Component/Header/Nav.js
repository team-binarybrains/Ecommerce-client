import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ className, hideMenuFn }) => {
  const navStyle = ({ isActive }) => {
    return isActive
      ? "font-extrabold text-dark tracking-wider"
      : "font-extrabold text-white tracking-wider";
  };

  return (
    <div className={className}>
      <NavLink onClick={hideMenuFn} to={"/"} className={navStyle}>
        হোম
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/allProducts"} className={navStyle}>
        কেনাকাটা করুন
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/checkout"} className={navStyle}>
        চেকআউট
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/dashboard"} className={navStyle}>
        ড্যাশবোর্ড
      </NavLink>
      <NavLink onClick={hideMenuFn} to={"/contact"} className={navStyle}>
        যোগাযোগ
      </NavLink>
    </div>
  );
};

export default Nav;
