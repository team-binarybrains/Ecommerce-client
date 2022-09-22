import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Nav = ({ className, hideMenuFn }) => {

  const user = useAuthState(auth)
  // console.log(user)
  const [admin] = useAdmin(user)

  const navStyle = ({ isActive }) => {
    return isActive
      ? "font-extrabold lg:text-dark text-clr tracking-wider"
      : "font-extrabold lg:text-white text-dark tracking-wider";
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

      {admin &&
        <NavLink onClick={hideMenuFn} to={"/dashboard"} className={navStyle}>
          ড্যাশবোর্ড
        </NavLink>
      }
    </div>
  );
};

export default Nav;
