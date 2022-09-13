import React from "react";
import Checkout from "../Checkout/Checkout";
import ProductDetail from "../ProductDetails/ProductDetail";
import HomePageProducts from "./HomepageProducts/HomePageProducts";

const Home = () => {
  return (
    <div>
      <HomePageProducts />

      <ProductDetail />
    </div>
  );
};

export default Home;
