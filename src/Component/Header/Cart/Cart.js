import React, { useState } from "react";
import style from "./cart.module.css";

let drawer, setDrawer;

const Cart = () => {
  [drawer, setDrawer] = useState(false);

  return (
    <div
      className={`fixed w-screen backdrop-blur-sm top-[70px] lg:top-[105px] bottom-0 left-0 right-0 z-[99] ${
        drawer ? "block" : "hidden"
      }`}
    >
      <section
        className={`relative w-full sm:w-[25rem] bg-white h-full ${
          drawer ? style.slideIn : style.slideOut
        }`}
      >
        <button
          className="absolute top-5 right-5 btn"
          onClick={() => {
            setDrawer(false);
          }}
        >
          X
        </button>
      </section>
    </div>
  );
};

export default Cart;
export { drawer, setDrawer };
