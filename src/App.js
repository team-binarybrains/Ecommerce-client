import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/ProductDetails/ProductDetail";
import Footer from "./Component/Footer/Footer";
import Checkout from "./Component/Checkout/Checkout";
import AllProducts from "./Component/AllProducts/AllProducts";
import { useEffect } from "react";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";

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
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/productDetail/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="/allProducts" element={<AllProducts />}></Route>
                         {/* auth */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
