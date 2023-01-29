import React from 'react'
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const navigate = useNavigate();
  return (
    <div className='content'>
      <h2>Product Form</h2>
      <div className="d-flex justify-content-around">
        <div className="input-group">
          <input type="search" className="form-control" placeholder="Search here" aria-label="Search" aria-describedby="search-addon"/>
          <span className="input-group-text border-0" id="search-addon">
            <i className="bi bi-search"></i>
          </span>
        </div>

        <div className="add-icon">
          <button style={{ backgroundColor: "#f59359", padding: "8px" }} type="button" onClick={() => {
            navigate("/productForm");
            }}>
            <i className="bi bi-plus"></i>Add Item
          </button>
        </div>

        <div className="profile">
          <img src={pic} alt="" />
        </div>
      </div>

      <form>
        <div className="form-group">
          <label for="inputBarcode">Barcode</label>
          <input type="text" className="form-control" id="inputBarcode"/>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputStock">Stock</label>
            <input style={{height: "40px",width: "400px"}} type="text" className="form-control" id="inputStock" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputQuantity">Quantity</label>
            <input style={{height: "40px",width: "400px"}} type="text" className="form-control" id="inputQuantity"/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputUOM">UOM</label>
            <input style={{height: "40px",width: "400px"}} type="text" className="form-control" id="inputUOM" />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <input style={{height: "40px",width: "400px"}} type="text" className="form-control" id="Price"/>
          </div>
        </div>
        <div className="form-group">
          <label for="inputDiscount">Discount</label>
          <input type="text" className="form-control" id="inputDiscount"/>
        </div>
        <div className="form-group">
          <label for="inputAmount">Total Amount</label>
          <input type="text" className="form-control" id="inputAmount"/>
        </div>
      </form>
      <button style={{backgroundColor:"#f59359"}} 
      onClick={() => {
        navigate("/product");
      }}
      type="submit" className="btn btn-primary">Add</button>
      
    </div>
  )
}
