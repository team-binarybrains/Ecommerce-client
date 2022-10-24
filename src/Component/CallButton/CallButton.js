import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const CallButton = () => {
  return (
    <div>
      <a href="tel:+8801967313329">
        {" "}
        <button className="bg-clr text-white hover: text-3xl  w-16 h-16 rounded-full fixed right-4  bottom-24 cursor-pointer flex justify-center items-center transition-all lg:hidden ">
          <BsFillTelephoneForwardFill />
        </button>
      </a>
    </div>
  );
};

export default CallButton;
