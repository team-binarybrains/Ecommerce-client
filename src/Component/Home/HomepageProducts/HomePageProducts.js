import React from "react";
import useAllProducts from "../../Hooks/useAllProducts";
import Loading from "../../Share/Loading";
import SingleHomepageProducts from "../SingleHomepageProducts/SingleHomepageProducts";

const HomePageProducts = () => {
  const [products, loading] = useAllProducts();
  console.log(products);

  return (
    <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-10 mb-20">
      {loading && <Loading />}
      {products.map((value) => (
        <SingleHomepageProducts key={products._id} value={value} />
      ))}
    </div>
  );
};

export default HomePageProducts;
