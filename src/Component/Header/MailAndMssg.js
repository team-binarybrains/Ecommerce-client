import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";

const MailAndMssg = ({ className }) => {
  return (
    <div className={className}>
     <a href='tel:+8801735047626' className="flex items-center gap-2 font-bold">
        <BsFillTelephoneForwardFill className="h-5 w-5 text-clr" />
        +8801735047626
      </a>

     {/* <a href='tel:0177358821' className="flex items-center hidden gap-2">
        <BsFillTelephoneForwardFill className="h-5 w-5" />
        0177358821
      </a> */}
      {/* <div className="divider lg:divider-horizontal my-0" />
            <p className=''>Free Shipping for all Order of $99</p> */}
    </div>
  );
};

export default MailAndMssg;
