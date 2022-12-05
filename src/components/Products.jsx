import React from "react";
import axios from "axios";
import "./Products.css";
import Departments from "./Departments";

function Products({ department }) {
  return (
    <>
   
    <div className="container-fluid product-wrap">
    {/* <div className=" row title-box">
    <h1 className="product-title text-center">fuck</h1>
    </div> */}
   
  
            {department.map((item) => (
       
<img src={item.image} class="rounded-3 img-fluid prdct " alt="..."/>
            ))} 
            </div>
            </>
  );
}

export default Products;
