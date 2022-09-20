/* eslint-disable no-unused-vars */
import React from "react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import Indicator from "./Indicator";
import Nav from "./Nav";
import MailAndMssg from "./MailAndMssg";
import SocialAndLogin from "./SocialAndLogin";
import MobileMenu from "./MobileMenu/MobileMenu";
import Cart from "./Cart/Cart";
import useProductStore from "../Hooks/useProductStorage";

const Header = ({ drawer, setDrawer }) => {
  const [menu, setMenu] = useState(false);
  const {
    data: cartProducts,
    upserting,
    deleting,
    getData,
  } = useProductStore();

  return (
    <div className="sticky top-0 left-0 right-0 border-b border-clr bg-clr z-[99]">
      <section className="bg-white">
        <div className="h-10 cont px-5 hidden lg:flex justify-between items-center max-w-7xl mx-auto">
          <MailAndMssg className="flex justify-center items-center" />

          <SocialAndLogin className="flex justify-center items-center" />
        </div>
      </section>

      <section className="h-16 cont px-5 flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          onClick={() => setMenu(false)}
          to={"/"}
          className="cairo text-white font-extrabold text-3xl cursor-pointer selection:bg-white selection:text-dark"
        >
          <span className="text-dark selection:text-clr">VIP</span> Bazar
        </NavLink>

        <Nav className="hidden lg:flex items-center justify-center gap-8 select-none" />

        <Indicator
          setDrawer={setDrawer}
          setMenu={setMenu}
          className="hidden lg:flex justify-center gap-8 select-none"
        />

        {/* menu for mobile device */}
        <MobileMenu
          menu={menu}
          setMenu={setMenu}
          setDrawer={setDrawer}
          className="block lg:hidden"
        />

        <Cart
          drawer={drawer}
          setMenu={setMenu}
          upserting={upserting}
          deleting={deleting}
          getData={getData}
          setDrawer={setDrawer}
          cartProducts={cartProducts}
        />
      </section>
    </div>
  );
};

export default Header;
