import React from "react";
import pic from "../img/profile.png";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const navigate = useNavigate();
  return (
    <>
      <div class='content'>
      <h2>Orders</h2>
      <div className="d-flex justify-content-around top-nav">
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
      <div className="container" style={{marginLeft:"10%",maxWidth:"80%"}}>
      <div className="row">
        <div className="col-sm-4">
          <div className ="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">New Orders</h5>
              <p className="card-text">45</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className ="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">New Orders</h5>
              <p className="card-text">45</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{backgroundColor:"#f4f4f4"}}>
            <div className="card-body">
              <h5 className="card-title">Pending</h5>
              <p className="card-text">2000</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="table-responsive-lg">
        <table className="table">
          <thead>
            <tr style={{ backgroundColor: "white" }}>
            <th scope="col" style={{ color: "black" }}>Order Id</th>
            <th scope="col">Date</th>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#1345</th>
              <td>12-8-22</td>
              <td>Hp PC</td>
              <td>100</td>
              <td>160</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
