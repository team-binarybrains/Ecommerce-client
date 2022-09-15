import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/ProductDetails/ProductDetail";
import Footer from "./Component/Footer/Footer";
import Checkout from "./Component/Checkout/Checkout";
import AllProducts from "./Component/AllProducts/AllProducts";
import AllUser from "./Component/Dashboard/AllUser/AllUser"
import AllOrders from "./Component/Dashboard/AllOrders/AllOrders";
import AddProduct from "./Component/Dashboard/AddProduct/AddProduct";
import MyOrders from "./Component/Dashboard/MyOrders/MyOrders";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto min-h-[calc(100vh-365px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          {/*-------------- dashboard start ------------------*/}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="all-users" element={<AllUser />} />
            <Route path="all-orders" element={<AllOrders />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="my-orders" element={<MyOrders />} />
          </Route>
          {/*-------------- dashboard end ------------------*/}

          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/productDetail/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="/allProducts" element={<AllProducts />}></Route>
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
