import React from 'react'
import pic from "../img/logo.png";
export default function Navbar() {
  return (
    <div>
      <div className="sidebar">
        <div className="logo">
        <img src={pic} alt=""/>
        </div>
        <a className="active" href="#dashboard"><i className="bi bi-columns-gap">&nbsp;&nbsp; Dashboard</i></a>
        <a href="#product"><i className="bi bi-stack">&nbsp;&nbsp;&nbsp;Product</i></a>
        <a href="#orders"><i className="bi bi-cart-fill">&nbsp;&nbsp;&nbsp;Orders</i></a>
        <a href="#payments"><i className="bi bi-cash-stack">&nbsp;&nbsp;&nbsp;Payments</i></a>
        <a href="#customers"><i className="bi bi-people">&nbsp;&nbsp;&nbsp;Customers</i></a>
        <a href="#stock_report"><i className="bi bi-bar-chart-line">&nbsp;&nbsp;&nbsp;Stock Report</i></a>
        <a href="#sales_summary"><i className="bi bi-graph-up">&nbsp;&nbsp;&nbsp;Sales Summary</i></a>
        <a href="#returns"><i className="bi bi-arrow-return-left">&nbsp;&nbsp;&nbsp;Returns</i></a>
      </div>
    </div>
  )
}
