/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import style from "./cart.module.css";
import { ImCross } from 'react-icons/im';
import CartProduct from "./CartProduct";

const Cart = ({drawer,setDrawer,upserting,deleting,getData,cartProducts}) => {

  useEffect(()=> {
      getData()
  },[drawer])

  return (
    <div
      className={`fixed backdrop-blur-[8px] top-[4rem] lg:top-[6.5rem] bottom-0 z-[80] left-0 ${
        drawer ? 'w-screen' : 'w-0'
      }`}
    >
      <section
        className={`relative max-w-[35rem] bg-white h-full border-r-2 ${
          drawer ? style.slideIn : style.slideOut
        }`}
      >
        <section className="flex flex-wrap-reverse items-center justify-between px-2 gap-x-5">
          <h1 className="text-dark font-bold text-lg inline-flex gap-2 items-center select-none">Product in Cart : <span className="text-clr text-2xl">{cartProducts.length}</span></h1>
          <button
            className="btn btn-ghost"
            onClick={() => {
              setDrawer(false);
            }}
          >
            <ImCross className="h-5 w-5" />
          </button>

        </section>

        <section className="mt-2 h-full overflow-y-auto space-y-2 pl-2 pr-4 pb-20">
          {
            cartProducts?.map(product => <CartProduct key={product._id} product={product} upserting={upserting} deleting={deleting}/>)
          }
        </section>

      </section>
    </div>
  );
};

export default Cart;