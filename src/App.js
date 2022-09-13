import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
