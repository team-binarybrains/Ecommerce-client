import React from "react";
import Checkout from "../Checkout/Checkout";
import HomePageProducts from "./HomepageProducts/HomePageProducts";

const Home = () => {
  return (
    <div>
      <HomePageProducts />
      <Checkout />
    </div>
  );
};

export default Home;
