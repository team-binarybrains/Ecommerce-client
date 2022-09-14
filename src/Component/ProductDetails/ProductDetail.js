import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const [count, setCount] = useState(0);
  const { productId } = useParams();

  const [products, setProducts] = useState({})

  const {name, image, price, details} = products

 useEffect(() => {
        if (productId) {
            fetch(`http://localhost:5000/product/${productId}`)
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                    setProducts(data)
                })
        }

    }, [productId])

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="h-full  lg:h-screen lg:mt-20">
      <div className="2xl:container 2xl:mx-auto lg:py-16  md:py-12 md:px-6 py-9 px-1 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}

          <div className=" p-2 lg:p-0 w-full sm:w-96 md:w-8/12 lg:w-5/12 items-center">
            <h2 className=" font-semibold lg:text-3xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4 h-auto lg:w-full">
              {/* {detail.productname} */}
              পণ্যের নাম : {name}
            </h2>
            <p className="mt-10 font-semibold lg:text-xl text-xl lg:leading-6 leading-5 lg:mt-9 ">
              পণ্য বিবরণী :
            </p>
            <p className="  h-[120px] overflow-y-auto font-normal text-base leading-6 text-gray-600 mt-4">
              {details}
            </p>

            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              মূল্য : <span className="text-3xl font-bold">৳ </span> 
              {price}
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">
                  পরিমাণ বাছাই করুন
                </p>
                <div className="flex">
                  <span
                    onClick={minusCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    -
                  </span>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={count}
                  />
                  <span
                    onClick={addCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                  >
                    +
                  </span>
                </div>
              </div>
              <hr className=" bg-gray-200 w-full mt-10" />
            </div>

            <button
              //   onClick={() => handleAddtocartt(detail)}
              className="focus:outline-none focus:ring-2 hover:bg-clr/70 hover:text-gray-700 transition-all duration-300 focus:ring-offset-2 focus:ring-white font-medium text-base leading-4 text-white bg-clr w-full py-5 lg:mt-5 mt-6"
            >
              অর্ডার করুন
            </button>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-2 sm:gap-6 gap-4">
            <div className=" w-full lg:w-12/12  flex justify-center ">
              <img
                className="lg:h-[495px]  object-cover"
                src={image}
                alt="image"
              />
            </div>
            <div className="  w-full lg:w-6/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-2">
              <div className=" flex justify-center ">
                <img
                  className="object-cover"
                  src={image}
                />
              </div>
              <div className=" flex justify-center  ">
                <img
                  className="object-cover"
                  src={image}
                  alt="Wooden chair - preview 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
