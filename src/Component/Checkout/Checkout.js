/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import useProductStore from "../Hooks/useProductStorage";

const Checkout = ({drawer}) => {
  const navigate = useNavigate();
  const [bookedData,,,getData] = useProductStore();
  const [deliveryCost,setDeliveryCost] = useState(0);
  
  useEffect(()=> {
      getData();
      bookedData.length && setDeliveryCost(0);
  },[drawer]);
  /* const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  }; */

  const totalPrice = ()=> {
    return bookedData?.reduce((total,product) => total+(product.quantity*product.price),0);
  };

  return (
    <div>
      <div className="hidden sm:block">
        <div className="py-16 px-4">
          <div className="w-full space-y-9">
            
            <div className="space-y-2">
              <button onClick={()=>navigate('/')} className="flex flex-row items-center gap-x-1 text-clr text-2xl">
                  <FaLongArrowAltLeft/>
                  <p className="text-lg leading-none font-bold">Back</p>
              </button>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                আপনার অর্ডার
              </p>
            </div>

            <div className="flex flex-col xl:flex-row justify-center xl:justify-between gap-y-6 xl:gap-y-0 xl:gap-x-6">
              
              <div className="bg-gray-100 py-10 px-10 basis-[55%] grow">
                <div className="">
                  <div className="flex justify-between ">
                    <p className="text-2xl font-bold">পণ্য :</p>
                    <p className="text-2xl font-bold">দাম :</p>
                  </div>
                  <section className="min-h-16 max-h-[13.5rem] space-y-2 overflow-y-auto thin-scroll pr-3 snap-y snap-mandatory">

                    {
                      bookedData?.map((product) =>
                        <div
                        key={product._id}
                        className={`justify-between items-center h-16 snap-start ${product.quantity>0?'flex':'hidden'}`}>
                          <p className="text-clr font-bold inline-flex items-center text-xl">
                          <span className="text-dark text-base">{product.name}</span>
                          <ImCross className="w-3 h-3 ml-3 mr-0.5"/>
                            {product.quantity}
                            </p>
                          <p>
                            <span className="text-xl font-bold">৳ </span>
                            {product.price * product.quantity}
                          </p>
                        </div>)
                    }

                  </section>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between mt-7 mb-5">
                    <p className="text-xl ">মোট =</p>
                    <p className="text-xl mr-4">
                      <span className="text-xl font-bold">৳ </span>
                      {
                        totalPrice()
                      }
                    </p>
                  </div>
                </div>
                <hr />
                <div className="mt-7">
                  <p className="text-2xl font-bold">Shipping</p>
                  
                    <section className="flex justify-between mt-7">
                      <label className="cursor-pointer select-none" htmlFor="outSideDhaka">
                        <input
                          onClick={(e)=> setDeliveryCost(parseInt(e.target.value))}
                          className="mr-2 font-bold cursor-pointer"
                          type="radio"
                          name="place"
                          id="outSideDhaka"
                          value={200}
                          disabled={!totalPrice()}
                        />
                        ঢাকার বাহিরে :
                      </label>
                        <p>
                          <span className="text-xl font-bold">৳ </span>
                          200
                        </p>
                    </section>

                    <section className="flex justify-between mt-7 mb-5">
                      <label className="cursor-pointer select-none" htmlFor="inSideDhaka">
                        <input
                          onClick={(e)=> setDeliveryCost(parseInt(e.target.value))}
                          className="mr-2 font-bold cursor-pointer"
                          type="radio"
                          name="place"
                          id="inSideDhaka"
                          value={100}
                          disabled={!totalPrice()}
                        />
                        ঢাকার ভিতর:
                      </label>
                        <p>
                          <span className="text-xl font-bold">৳ </span>
                          100
                        </p>
                    </section>
                  <hr />

                  <div>
                    <div className="flex justify-between mt-7 mb-5">
                      <p className="text-xl ">সর্বমোট =</p>
                      <p className="text-xl font-bold">
                        <span className="text-2xl font-bold">৳ </span>
                        {
                          totalPrice()+deliveryCost
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gray-100 flex flex-col basis-[40%] grow">
                <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4 leading-4 text-gray-600 text-3xl">
                    ডেলিভারির ঠিকানা
                  </p>
                  <hr className="border w-full" />
                </div>
                <div>
                  <p className="text-gray-600 text-base pt-5 leading-7">
                    অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার,
                    লিখে অর্ডার কনফার্ম বাটনে ক্লিক করুন
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
                    placeholder="আপনার ঠিকানা"
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
                <button 
                className="mt-8 border border-transparent hover:border-gray-300 bg-clr transition duration-300 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full text-base leading-4 disabled:bg-clr/50 disabled:hover:bg-clr/50 disabled:hover:text-white disabled:cursor-not-allowed"
                disabled={!totalPrice()}>
                  অর্ডার কনফার্ম করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* for phone */}
      <div className="flex justify-center items-center lg:hidden md:hidden">
        <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                <div className="flex flex-row justify-center items-center mt-6">
                  <hr className="border w-full" />
                  <p className="flex flex-shrink-0 px-4  leading-4 text-gray-600 text-3xl">
                    ডেলিভারির ঠিকানা
                  </p>
                  <hr className="border w-full" />
                </div>
                <div>
                  <p className="flex flex-shrink-0 px-4   text-gray-600 text-base pt-5 leading-7	">
                    অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার,
                    লিখে অর্ডার কনফার্ম বাটনে ক্লিক করুন
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
                    placeholder="আপনার ঠিকানা"
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
                <div className="mt-7">
                  <p className="text-2xl font-bold">Shipping</p>
                  <div className="mt-7">
                    <div className="flex justify-between">
                      <label htmlFor="outDhaka" className="cursor-pointer select-none">
                        <input
                          className="mr-2 font-bold cursor-pointer select-none"
                          type="radio"
                          name="place"
                          id="outDhaka"
                          value={200}
                          disabled={!totalPrice()}
                          onClick={(e)=> setDeliveryCost(parseInt(e.target.value))}
                        />
                        ঢাকার বাহিরে :
                      </label>
                      <div>
                        <p>
                          <span className="text-xl font-bold">৳ </span>
                          200
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7 mb-5">
                    <div className="flex justify-between">
                      <label htmlFor="inDhaka" className="cursor-pointer select-none">
                        <input
                          className="mr-2 font-bold cursor-pointer select-none"
                          type="radio"
                          name="place"
                          id="inDhaka"
                          value={100}
                          disabled={!totalPrice()}
                          onClick={(e)=> setDeliveryCost(parseInt(e.target.value))}
                        />
                        ঢাকার ভিতর:
                      </label>
                      <div>
                        <p>
                          {" "}
                          <span className="text-xl font-bold">৳ </span>
                          100
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <button 
                className="mt-8 border border-transparent hover:border-gray-300 bg-clr transition duration-300 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full text-base leading-4 disabled:bg-clr/50 disabled:hover:bg-clr/50 disabled:hover:text-white disabled:cursor-not-allowed"
                disabled={!totalPrice()}>
                  অর্ডার কনফার্ম করুন
                </button>
                <div className="flex justify-start flex-col items-start space-y-2 mt-5">
                  <button onClick={() => navigate('/')} className="flex flex-row items-center text-clr space-x-1">
                    <FaLongArrowAltLeft />
                    <p className="text-lg leading-none font-bold">Back</p>
                  </button>
                  <p className="pt-5 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    আপনার অর্ডার
                  </p>
                </div>
                <div className="mt-5">
                  <div className="flex justify-between ">
                    <p className="text-2xl font-bold">পণ্য :</p>
                    <p className="text-2xl font-bold">দাম :</p>
                  </div>
                  <section className="min-h-16 max-h-[13.5rem] space-y-2 overflow-y-auto thin-scroll pr-3 snap-y snap-mandatory">

                    {
                      bookedData?.map((product) =>
                        <div
                        key={product._id}
                        className={`justify-between items-center h-16 snap-start ${product.quantity>0?'flex':'hidden'}`}>
                          <p className="text-clr font-bold inline-flex items-center text-xl">
                            {product.quantity}
                            <ImCross className="w-3 h-3 ml-0.5 mr-2" /> <span className="text-dark text-base">{product.name}</span></p>
                          <p>
                            <span className="text-xl font-bold">৳ </span>
                            {product.price * product.quantity}
                          </p>
                        </div>)
                    }

                  </section>
                </div>
                <div>
                  <div className="flex justify-between mt-7 mb-5">
                    <p className="text-xl ">সর্বমোট =</p>
                    <p className="text-xl font-bold">
                      <span className="text-2xl font-bold">৳ </span>
                      {totalPrice()+deliveryCost}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
