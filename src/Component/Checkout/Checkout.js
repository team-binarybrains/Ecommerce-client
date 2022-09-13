import React, { useState } from "react";

const Checkout = () => {
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };
  return (
    <div className="flex justify-center items-center">
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
              <p className="text-sm leading-none">Back</p>
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
                  <p className="text-2xl font-bold">Price:</p>
                </div>
                <div className="flex justify-between mt-7 mb-5">
                  <p>Product</p>
                  <p>taka</p>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex justify-between mt-7 mb-5">
                  <p className="text-xl ">Subtotal</p>
                  <p className="text-xl ">3000</p>
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
                      <p>100</p>
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
                      <p>100</p>
                    </div>
                  </div>
                </div>
                <hr />

                <div>
                  <div className="flex justify-between mt-7 mb-5">
                    <p className="text-xl ">Subtotal</p>
                    <p className="text-xl font-bold">3000</p>
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
              {/* 
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="MM/YY"
                  />
                  <input
                    className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="CVC"
                  />
                </div>
              </div> */}

              {/* <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Name on card"
                  />
                </div>
              </div> */}

              {/* <label className="mt-8 text-base leading-4 text-gray-800">
                Country or region
              </label> */}
              {/* <div className="mt-2 flex-col">
                <div className="relative">
                  <button
                    className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                    type="email"
                  >
                    {country}
                  </button>
                  <svg
                    onClick={() => setMenu(!menu)}
                    className={
                      "transform  cursor-pointer absolute top-4 right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
                <input
                  className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="ZIP"
                />
              </div> */}

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
