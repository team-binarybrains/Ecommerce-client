/* eslint-disable no-unused-vars */
import React from "react";
import SingleManageProduct from "./SingleManageProduct";
import useAllProducts from "../../Hooks/useAllProducts";
import axios from "axios";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import Loading from "../../Share/Loading";
const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch("https://api.com.quickinun.com/server/all-product", {
      method: "GET",
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" grid lg:flex lg:flex-wrap lg:justify-center sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:gap-y-12 lg:gap-x-10  gap-x-6 gap-y-6 lg:mt-12 mt-10">
        {products?.map((product) => (
          <SingleManageProduct
            key={product._id}
            product={product}
            refetch={refetch}
          //   setDeleteproducts={setDeleteproducts}
          ></SingleManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
