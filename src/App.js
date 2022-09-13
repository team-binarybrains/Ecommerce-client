import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
