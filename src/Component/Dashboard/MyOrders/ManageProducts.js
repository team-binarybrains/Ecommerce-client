import React from "react";
import SingleManageProduct from "./SingleManageProduct";
import useAllProducts from "../../Hooks/useAllProducts";
const ManageProducts = () => {
  const [products] = useAllProducts();

  return (
    <div className="max-w-7xl mx-auto">
      <div className=" grid lg:flex lg:flex-wrap lg:justify-center sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:gap-y-12 lg:gap-x-10  gap-x-6 gap-y-6 lg:mt-12 mt-10">
        {products?.map((product) => (
          <SingleManageProduct
            key={product._id}
            product={product}
            //   setDeleteproducts={setDeleteproducts}
          ></SingleManageProduct>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
