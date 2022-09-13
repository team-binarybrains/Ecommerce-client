import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard/Dashboard";
import ProductDetail from "./Component/ProductDetails/ProductDetail";
import Footer from "./Component/Footer/Footer";
import Checkout from "./Component/Checkout/Checkout";
import AllProducts from "./Component/AllProducts/AllProducts";

function App() {
  return (
    <div>
      <Header />
      <section className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/productDetail" element={<ProductDetail />}></Route>
          <Route path="/allProducts" element={<AllProducts />}></Route>
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
