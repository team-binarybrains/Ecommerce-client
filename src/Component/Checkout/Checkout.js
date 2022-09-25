/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import useProductStore from "../Hooks/useProductStorage";
import { getCookie, setCookie } from "../Hooks/useCookie";
import { toast } from "react-toastify";
import axios from "axios";

const Checkout = ({ drawer }) => {
  const navigate = useNavigate();
  const { data: bookedData, getData, clear } = useProductStore();
  const [deliveryCost, setDeliveryCost] = useState(0);
  const dCost = useRef();

  const totalPrice = () => {
    return bookedData?.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  useEffect(() => {
    getData();
    setDeliveryCost(dCost?.current?.cost || 0);
  }, [drawer]);

  const confirmingOrder = (e) => {
    e.preventDefault();

    const t = new Date();
    t.setTime(t.getTime());

    const order = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      products: bookedData,
      delivery: dCost.current,
      time: t.toString(),
    };

    // console.log(order);

    if (getCookie(order.phone)) {
      toast.error(`আপনি ৭২ ঘন্টার মধ্যে অর্ডার করতে পারবেন না |`, {
        theme: "colored",
      });
    } else {
      axios.post("https://quickinun.com/order", order).then(({ data }) => {
        if (data.acknowledged) {
          setCookie(order.phone);
          clear();
          e.target.reset();
          toast.success(`Order successfully booked`);
        } else {
          toast.error(`Order unsuccessfull`, { theme: "colored" });
        }
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto sm:px-2">
      <div className="hidden sm:block">
        <div className="py-16 px-4">
          <div className="w-full space-y-9">
            <div className="space-y-2">
              <button
                onClick={() => navigate("/")}
                className="flex flex-row items-center gap-x-1 text-clr text-2xl"
              >
                <FaLongArrowAltLeft />
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
                  <section className="min-h-16 max-h-[13.5rem] space-y-2 overflow-y-auto thin-scroll snap-y snap-mandatory">
                    {bookedData?.map((product) => (
                      <div
                        key={product._id}
                        className={`justify-between items-center h-16 snap-start ${product.quantity > 0 ? "flex" : "hidden"
                          }`}
                      >
                        <p className="text-clr font-bold inline-flex items-center text-xl">
                          <span className="text-dark text-base">
                            {product.name}
                          </span>
                          <ImCross className="w-3 h-3 ml-3 mr-0.5" />
                          {product.quantity}
                        </p>
                        <p>
                          <span className="text-xl font-bold">৳ </span>
                          {product.price * product.quantity}
                        </p>
                      </div>
                    ))}
                  </section>
                </div>
                <hr />
                <div>
                  <div className="flex justify-between mt-7 mb-5">
                    <p className="text-xl ">মোট =</p>
                    <p className="text-xl">
                      <span className="text-xl font-bold">৳ </span>
                      {totalPrice()}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="mt-7">
                  <p className="text-2xl font-bold">Shipping</p>

                  <section className="flex justify-between mt-7">
                    <label
                      className="cursor-pointer select-none"
                      htmlFor="outSideDhaka"
                    >
                      <input
                        required
                        onClick={(e) => {
                          setDeliveryCost(parseInt(e.target.value));
                          dCost.current = {
                            cost: parseInt(e.target.value),
                            place: e.target.parentNode.innerText.split(':')[0].trim()
                          }
                        }}
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
                    <label
                      className="cursor-pointer select-none"
                      htmlFor="inSideDhaka"
                    >
                      <input
                        required
                        onClick={(e) => {
                          setDeliveryCost(parseInt(e.target.value));
                          dCost.current = {
                            cost: parseInt(e.target.value),
                            place: e.target.parentNode.innerText.split(':')[0].trim()
                          }
                        }}
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
                        {totalPrice() ? totalPrice() + deliveryCost : 0}
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
                <p className="text-gray-600 text-base pt-5 leading-7">
                  অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে
                  অর্ডার কনফার্ম বাটনে ক্লিক করুন
                </p>

                <form onSubmit={confirmingOrder} className="flex flex-col">
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="name"
                  >
                    আপনার নাম
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার নাম"
                      id="name"
                      name="name"
                    />
                  </label>
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="address"
                  >
                    আপনার ঠিকানা
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার ঠিকানা"
                      id="address"
                      name="address"
                    />
                  </label>
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="phone"
                  >
                    আপনার মোবাইল
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার মোবাইল"
                      id="phone"
                      name="phone"
                    />
                  </label>
                  <input
                    type="submit"
                    className="mt-8 border border-transparent hover:border-gray-300 bg-clr transition duration-300 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full text-base leading-4 disabled:bg-clr/50 disabled:hover:bg-clr/50 disabled:hover:text-white disabled:cursor-not-allowed cursor-pointer"
                    value="অর্ডার কনফার্ম করুন"
                    disabled={!totalPrice() || !deliveryCost}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for phone */}
      <div className="flex justify-center items-center lg:hidden md:hidden">
        <div className="py-16 px-2 flex justify-center items-center">
          <div className="flex flex-col justify-start items-start w-full space-y-9">
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
              <div className="py-8 px-4 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
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

                <form onSubmit={confirmingOrder} className="flex flex-col">
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="mName"
                  >
                    আপনার নাম
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার নাম"
                      name="name"
                      id="mName"
                    />
                  </label>
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="mAddress"
                  >
                    আপনার ঠিকানা
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার ঠিকানা"
                      name="address"
                      id="mAddress"
                    />
                  </label>
                  <label
                    className="mt-8 text-base leading-4 text-gray-800"
                    htmlFor="mPhone"
                  >
                    আপনার মোবাইল
                    <input
                      required
                      className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600 mt-3"
                      type="text"
                      placeholder="আপনার মোবাইল"
                      name="phone"
                      id="mPhone"
                    />
                  </label>

                  <div className="mt-7">
                    <p className="text-2xl font-bold">Shipping</p>
                    <div className="flex justify-between mt-7">
                      <label
                        htmlFor="outDhaka"
                        className="cursor-pointer select-none"
                      >
                        <input
                          required
                          className="mr-2 font-bold cursor-pointer select-none"
                          type="radio"
                          name="place"
                          id="outDhaka"
                          value={200}
                          disabled={!totalPrice()}
                          onClick={(e) => {
                            setDeliveryCost(parseInt(e.target.value));
                            dCost.current = {
                              cost: parseInt(e.target.value),
                              place: e.target.parentNode.innerText.split(':')[0].trim()
                            }
                          }}
                        />
                        ঢাকার বাহিরে :
                      </label>
                      <p>
                        <span className="text-xl font-bold">৳ </span>
                        200
                      </p>
                    </div>
                    <div className="flex justify-between mt-7 mb-5">
                      <label
                        htmlFor="inDhaka"
                        className="cursor-pointer select-none"
                      >
                        <input
                          required
                          className="mr-2 font-bold cursor-pointer select-none"
                          type="radio"
                          name="place"
                          id="inDhaka"
                          value={100}
                          disabled={!totalPrice()}
                          onClick={(e) => {
                            setDeliveryCost(parseInt(e.target.value));
                            dCost.current = {
                              cost: parseInt(e.target.value),
                              place: e.target.parentNode.innerText.split(':')[0].trim()
                            }
                          }}
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
                    <hr />
                  </div>

                  <input
                    type="submit"
                    className="mt-8 border border-transparent hover:border-gray-300 bg-clr transition duration-300 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full text-base leading-4 disabled:bg-clr/50 disabled:hover:bg-clr/50 disabled:hover:text-white disabled:cursor-not-allowed text-center cursor-pointer"
                    disabled={!totalPrice() || !deliveryCost}
                    value="অর্ডার কনফার্ম করুন"
                  />
                </form>

                <div className="flex justify-start flex-col items-start space-y-2 mt-5">
                  <button
                    onClick={() => navigate("/")}
                    className="flex flex-row items-center text-clr space-x-1"
                  >
                    <FaLongArrowAltLeft />
                    <p className="text-lg leading-none font-bold">Back</p>
                  </button>
                  <p className="pt-2 pb-5 text-2xl font-semibold text-dark">
                    আপনার অর্ডার
                  </p>
                </div>

                <div className="">
                  <div className="flex justify-between ">
                    <p className="text-lg font-bold">পণ্য :</p>
                    <p className="text-lg font-bold">দাম :</p>
                  </div>
                  <section className="min-h-16 max-h-[13.5rem] space-y-2 overflow-y-auto thin-scroll snap-y snap-mandatory">
                    {bookedData?.map((product) => (
                      <div
                        key={product._id}
                        className={`justify-between items-start h-16 snap-start gap-x-3 ${product.quantity > 0 ? "flex" : "hidden"
                          }`}
                      >
                        <p className="text-clr font-bold inline-flex items-start grow-0 shrink basis-[80%]">
                          <span>{product.quantity}</span>
                          <ImCross className="w-2 h-[1.5rem] ml-0.5 mr-1" />
                          <span className="text-dark font-normal text-xs pt-[0.25rem] basis-[85%]">
                            {product.name}
                          </span>
                        </p>

                        <p className="font-bold text-xs leading-6 shrink-0">
                          <span className="font-extrabold">৳ </span>
                          {product.price * product.quantity}
                        </p>
                      </div>
                    ))}
                  </section>
                </div>

                <div>
                  <div className="flex justify-between items-center mt-7 mb-5">
                    <p className="text-lg font-bold">সর্বমোট =</p>
                    <p className="text-lg font-bold">
                      <span className="">৳ </span>
                      {totalPrice() + deliveryCost}
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
