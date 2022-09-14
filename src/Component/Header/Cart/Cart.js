import React, { useState } from "react";
import style from "./cart.module.css";

let drawer, setDrawer;

const Cart = () => {
  [drawer, setDrawer] = useState(false);

  return (
    <div
      className={`fixed backdrop-blur-[8px] top-[4rem] lg:top-[6.5rem] bottom-0 z-[80] left-0 ${
        drawer ? 'w-screen' : 'w-0'
      }`}
    >
      <section
        className={`relative w-full sm:w-[25rem] bg-white h-full border-r-2 ${
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
