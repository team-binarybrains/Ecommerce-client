import React, { useState } from "react";
import useAllProducts from "../Hooks/useAllProducts";
import SingleProducts from "./SingleProducts";

import { BsSearch } from "react-icons/bs";

const AllProducts = () => {
  const [products] = useAllProducts();
  console.log(products);
  const [sesrch, setSesrch] = useState("");

  return (
    <div>
      <div className=" mt-44">
        <form className="ml-5 lg:ml-0">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative">
            <div
              class="flex absolute 
             inset-y-0 left-0 items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={(e) => setSesrch(e.target.value)}
              type="search"
              id="default-search"
              class="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  "
              placeholder="এখানে অনুসন্ধান করুন"
              required=""
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-16 mb-20">
        {products
          .filter((val) => val.name.toLowerCase().includes(sesrch))
          ?.map((value) => (
            <SingleProducts key={value.id} value={value} />
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
