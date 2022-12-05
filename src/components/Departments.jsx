import React, { useState, useEffect } from "react";
import "./Departments.css";
import axios from 'axios'
// import { category } from './Utils';

export default function Departments({ setOpen, setClose, setLoading, setData, setCat}) {
//   const [cat, setCat] = useState("");


  //fetches the 4 categories upon page loading
//  useEffect(() => {
//     axios({
//       method:"GET",
//       url:`https://fakestoreapi.com/products/category/${cat}`
//     }).then(res=>  { 
//       console.log(res.data);
//       console.log(res.data[0].title);
//       setData(res.data)
//     }).catch(e=>console.log(e))
//     .finally(() =>{setLoading(false)
//         setClose(false);
//     })  
//    },[cat])

   const handleClick = (cat) => {
    setCat(cat);
    // setClose(false);

   }

   

  
   

  return (
    <header>
      <div className="p-5 text-center bg-image shop-pic mt-1">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="row row-cols-1 row-cols-md-6 row-cols-sm-8 g-4 justify-content-around card-box">
              <div className="col">
                <div className="card dept-card h-100">
                  <img
                    src={require("./media/electronics1.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-black">Electronics</h5>
                    <div className ="card-footer d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn dept-btn mt-3"
                        onClick={() => handleClick('electronics')}
                        >
                        SHOP 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card dept-card h-100">
                  <img
                    src={require("./media/jewelery2.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-black">Jewelery</h5>
                    <div className="card-footer d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn dept-btn mt-3"
                        onClick={() => handleClick("jewelery")}
                      >
                        SHOP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card dept-card h-100">
                  <img
                    src={require("./media/men5.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-black">Men's Clothing</h5>
                    <div className="card-footer d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn dept-btn mt-3"
                        onClick={() => handleClick("men's clothing")}
                      >
                        SHOP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card dept-card h-100">
                  <img
                    src={require("./media/women2.png")}
                    className="card-img-top bg-img"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title text-black">Women's Clothing</h5>
                    <div className="card-footer d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn dept-btn mt-1"
                        onClick={()=> handleClick("women's clothing")}
                      >
                        SHOP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
