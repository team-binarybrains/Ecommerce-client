import React from "react";
import useAllProducts from "../../Hooks/useAllProducts";
import SingleHomepageProducts from "../SingleHomepageProducts/SingleHomepageProducts";

const HomePageProducts = () => {
  const [products] = useAllProducts();
  console.log(products);

  return (
    <div>
      {products.map((value) => (
        <SingleHomepageProducts key={products.id} value={value} />
      ))}
    </div>
  );
};

export default HomePageProducts;
