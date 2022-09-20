/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/ProductDetails/ProductDetail";
import Footer from "./Component/Footer/Footer";
import Checkout from "./Component/Checkout/Checkout";
import AllProducts from "./Component/AllProducts/AllProducts";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import AllUser from "./Component/Dashboard/AllUser/AllUser";
import AllOrders from "./Component/Dashboard/AllOrders/AllOrders";
import AddProduct from "./Component/Dashboard/AddProduct/AddProduct";
import { ToastContainer } from "react-toastify";
import ManageProducts from "./Component/Dashboard/MyOrders/ManageProducts";
import axios from "axios";
import useAdmin from "./Component/Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";

function App() {
  const user = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Header drawer={drawer} setDrawer={setDrawer} />
      <section className=" min-h-[calc(100vh-365px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/checkout"
            element={<Checkout drawer={drawer} />}
          ></Route>
          <Route
            path="/productDetail/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="/allProducts" element={<AllProducts />}></Route>
          {/* auth */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

          {/*-------------- dashboard start ------------------*/}
          {admin && (
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard" element={<AllUser />}></Route>
              <Route path="all-orders" element={<AllOrders />}></Route>
              <Route path="add-product" element={<AddProduct />}></Route>
              <Route
                path="manage-products"
                element={<ManageProducts />}
              ></Route>
            </Route>
          )}
          {/*-------------- dashboard end ------------------*/}
        </Routes>
      </section>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
