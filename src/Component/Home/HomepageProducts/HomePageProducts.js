import React from "react";
import useAllProducts from "../../Hooks/useAllProducts";
import SingleHomepageProducts from "../SingleHomepageProducts/SingleHomepageProducts";

const HomePageProducts = () => {
  const [products] = useAllProducts();
  console.log(products);

  return (
    <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-20">
      {products.map((value) => (
        <SingleHomepageProducts key={products.id} value={value} />
      ))}
    </div>
  );
};

export default HomePageProducts;
