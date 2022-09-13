import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
const SingleHomepageProducts = ({ value }) => {
  //   const [image, name, details, price] = value;
  return (
    <div className="bg-white border  shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[400px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 rounded-tl-[80px] " src={value.image} alt="" />

      <div className="text-xl font-semibold max-w-[260px]">{value.name}</div>
      <div className="text-lg font-semibold text-violet-600 mb-4 mt-2">
        <span className="text-3xl font-bold">৳</span> {value.price}
      </div>
      <div>
        <h1>
          <span className="font-bold">বিবরণ : </span>
          {value.details.slice(0, 50)}...
        </h1>
      </div>
      <div>
        <button className="w-full tracking-wider p-5 rounded-xl rounded-t-none bg-clr font-bold mt-5 text-white hover:text-dark transition duration-300">
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default SingleHomepageProducts;
