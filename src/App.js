import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Order from "./components/Order";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/product"
          element={<Product title="Product" />}
        ></Route>
        <Route exact path="/orders" element={<Order />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
