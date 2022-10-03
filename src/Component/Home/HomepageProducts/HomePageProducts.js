import React from "react";
import SingleProducts from "../../AllProducts/SingleProducts";
import useAllProducts from "../../Hooks/useAllProducts";
import Loading from "../../Share/Loading";

const HomePageProducts = () => {
  const [products, loading] = useAllProducts();

  return (
    <div className="grid grid-cols-1 p-4 lg:p-0 lg:grid-cols-3 gap-8 mt-10 mb-20">
      {loading && <Loading />}
      {products.map((value) => (
        <SingleProducts key={value._id} value={value} />
        // <SingleProducts key={value.id} value={value} />
      ))}
    </div>
  );
};

export default HomePageProducts;
