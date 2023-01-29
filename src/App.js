import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Product title="Product" />
      </div>
    </>
  );
}

export default App;
