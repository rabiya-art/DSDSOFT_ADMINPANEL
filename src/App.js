import "./App.css";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Order from "./components/Order";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import Payment from "./components/Payment";
import Customer from "./components/Customer";
import Return from "./components/Return";
import AllOrders from "./components/AllOrders";
import NewOrders from "./components/NewOrders";
import Pending from "./components/Pending";
import Delivered from "./components/Delivered";


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
        <Route exact path="/all_orders" element={<AllOrders />}></Route>
        <Route exact path="/new_orders" element={<NewOrders />}></Route>
        <Route exact path="/delivered" element={<Delivered />}></Route>
        <Route exact path="/pending" element={<Pending  />}></Route>
        <Route exact path="/payments" element={<Payment />}></Route>
        <Route exact path="/customers" element={<Customer />}></Route>
        <Route exact path="/returns" element={<Return />}></Route>
        <Route exact path="/productForm" element={<ProductForm />}>
          {" "}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
