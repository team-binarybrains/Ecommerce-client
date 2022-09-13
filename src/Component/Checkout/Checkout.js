import React, { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
            <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
              <svg
                className="fill-stroke"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link to="/">
                {" "}
                <p className="text-sm leading-none">Back</p>
              </Link>
            </button>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Checkout
            </p>
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className=" flex flex-col sm:flex-row xl:flex-col  bg-gray-100 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="">
                <div className="flex justify-between ">
                  <p className="text-2xl font-bold">Product:</p>
                  <p className="text-2xl font-bold"> Price:</p>
                </div>
                <div className="flex justify-between mt-7 mb-5">
                  <p>Product</p>
                  <p>
                    {" "}
                    <span className="text-xl font-bold">৳</span> 200
                  </p>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between mt-7 mb-5">
                  <p className="text-xl ">Subtotal</p>
                  <p className="text-xl ">
                    {" "}
                    <span className="text-xl font-bold">৳</span> 3000
                  </p>
                </div>
              </div>
              <hr />
              <div className="mt-7">
                <p className="text-2xl font-bold">Shipping</p>
                <div className="mt-7">
                  <div className="flex justify-between">
                    <div>
                      <input
                        className="mr-2 font-bold"
                        type="radio"
                        name="place"
                        id=""
                      />
                      ঢাকার বাহিরে :
                    </div>
                    <div>
                      <p>
                        <span className="text-xl font-bold">৳</span> 100
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-7 mb-5">
                  <div className="flex justify-between">
                    <div>
                      <input
                        className="mr-2 font-bold"
                        type="radio"
                        name="place"
                        id=""
                      />
                      ঢাকার ভিতর:
                    </div>
                    <div>
                      <p>
                        {" "}
                        <span className="text-xl font-bold">৳</span> 100
                      </p>
                    </div>
                  </div>
                </div>
                <hr />

                <div>
                  <div className="flex justify-between mt-7 mb-5">
                    <p className="text-xl ">Subtotal</p>
                    <p className="text-xl font-bold">
                      {" "}
                      <span className="text-2xl font-bold">৳</span> 3000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4  leading-4 text-gray-600 text-3xl">
                  আপনার অর্ডার
                </p>
                <hr className="border w-full" />
              </div>
              <div>
                <p className="flex flex-shrink-0 px-4   text-gray-600 text-base pt-5 leading-7	">
                  অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে
                  অর্ডার কনফার্ম বাটনে ক্লিক করুন
                </p>
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800">
                আপনার নাম
              </label>
              <div className="mt-3">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="আপনার নাম"
                />
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800">
                আপনার ঠিকানা
              </label>
              <div className="mt-3">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="  আপনার ঠিকানা"
                />
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800">
                আপনার মোবাইল
              </label>
              <div className="mt-3">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="আপনার মোবাইল"
                />
              </div>
              <button className="mt-8 border border-transparent hover:border-gray-300 bg-clr transition duration-300 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                  <p className="text-base leading-4">অর্ডার কনফার্ম করুন</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
