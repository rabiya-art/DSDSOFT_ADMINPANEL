import "./App.css";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Order from "./components/Order";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import Payment from "./components/Payment";
import Customer from "./components/Customer";

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
        <Route exact path="/payments" element={<Payment />}></Route>
        <Route exact path="/customers" element={<Customer />}></Route>
        <Route exact path="/productForm" element={<ProductForm />}>
          {" "}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
