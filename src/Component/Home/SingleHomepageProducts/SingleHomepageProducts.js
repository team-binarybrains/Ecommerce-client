/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import useProductStore from "../../Hooks/useProductStorage";

const SingleHomepageProducts = ({ value }) => {
  const navigate = useNavigate();
  const { data, upserting } = useProductStore();

  const handleaddToCart = (p) => {
    const cartProduct = {
      name: p.name,
      image: p.image,
      price: parseFloat(p.newPrice),
      quantity: data?.find((p) => p._id === value._id)
        ? data?.find((p) => p._id === value._id).quantity
        : 1,
    };

    upserting({ ...cartProduct, _id: value._id });
    navigate("/checkout");
  };

  const handleDetail = (id) => {
    navigate("/productDetail/" + id);
  };

  return (
    <div className="bg-white border relative  shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[400px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img
        onClick={() => handleDetail(value._id)}
        className="mb-2 rounded-tl-[80px] h-[250px] "
        src={`http://localhost:5000/file/${value.image}`}
        alt=""
      />

      <div className="text-xl font-semibold max-w-screen h-[50px]">
        {value.name}
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4 mt-2">
        <span className="text-3xl font-bold">৳</span> {value.newPrice}
      </div>
      <div>
        <h1>
          <span className="font-bold">বিবরণ : </span>
          {value.details.slice(0, 50)}...
        </h1>
      </div>
      <div className="mt-20 ">
        <button
          onClick={() => handleaddToCart(value)}
          className="  mx-auto p-5 absolute bottom-0 left-0 right-0 lg:bottom-2 lg:left-2 lg:right-2 tracking-wider rounded-xl rounded-t-none bg-clr font-bold   mt-5 text-white hover:text-dark transition duration-300"
        >
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default SingleHomepageProducts;
