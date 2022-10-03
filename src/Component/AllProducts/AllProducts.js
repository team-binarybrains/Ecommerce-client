import React, { useState } from "react";
import useAllProducts from "../Hooks/useAllProducts";
import SingleProducts from "./SingleProducts";

import Loading from "../Share/Loading";

const AllProducts = () => {
  const [products, loading] = useAllProducts();
  // console.log(products);
  const [sesrch, setSesrch] = useState("");

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" mt-10 ">
        <form className="max-w-2xl mx-auto px-3 lg:px-0">
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSesrch(e.target.value)}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border   "
              placeholder="আপনার পণ্য অনুসন্ধান করুন"
              required=""
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-16 mb-20">
        {loading && <Loading />}
        {products
          .filter((val) => val.name.toLowerCase().includes(sesrch))
          ?.map((value) => (
            <SingleProducts key={value._id} value={value} />
            // <SingleProducts key={value.id} value={value} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
