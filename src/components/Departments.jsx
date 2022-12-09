import React, { useEffect } from "react";
import "./Departments.css";
import axios from "axios";

export default function Departments({
  setCat,
  category,
  setCategory,
  setLoading,
  setData,
  setProductOpen,
  cat,
  setClose,
}) {
  const handleClick = (cat) => {
    setCat(cat);
  };

  const callApi = (categoryType) => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/category/${categoryType}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        setClose(false);
        setProductOpen(true);
      });
  };

  return (
    // <header>
    //   <div className="p-5 text-center bg-image department-contain mt-1">
    //     <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
    //       <div className="d-flex justify-content-center align-items-center h-100 dpt-wrap">
    //         <div className="row row-cols-1 row-cols-md-6 row-cols-sm-8 g-4 justify-content-around card-box">
    //
    //               </div>
    //             </div>
    //           </div><div className="col cardyB">
    //             <div className="card dept-card h-100" onClick={() => callApi("electronics")}>
    //               <img
    //                 src={require("./media/electronics1.png")}
    //                 className="card-img-top bg-img"
    //                 alt="..."
    //               />
    //               <div className="card-body">
    //                 <h5 className="dept-card-title text-black">Electronics</h5>
    //                 <div className="card-footer d-flex justify-content-center">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col">
    //             <div className="card dept-card h-100"  onClick={() => callApi("jewelery")}>
    //               <img
    //                 src={require("./media/jewelery2.png")}
    //                 className="card-img-top bg-img"
    //                 alt="..."
    //               />
    //               <div className="card-body">
    //                 <h5 className="dept-card-title text-black">Jewelery</h5>
    //                 <div className="card-footer d-flex justify-content-center">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col">
    //             <div className="card dept-card h-100"   onClick={() => callApi("men's clothing")}>
    //               <img
    //                 src={require("./media/men5.png")}
    //                 className="card-img-top bg-img"
    //                 alt="..."
    //               />
    //               <div className="card-body">
    //                 <h5 className="dept-card-title text-black">Men's Clothing</h5>
    //                 <div className="card-footer d-flex justify-content-center">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col">
    //             <div className="card dept-card h-100" onClick={() => callApi("women's clothing")}>
    //               <img
    //                 src={require("./media/women2.png")}
    //                 className="card-img-top bg-img"
    //                 alt="..."
    //               />
    //               <div className="card-body">
    //                 <h5 className="dept-card-title text-black">Women's Clothing</h5>
    //                 <div className="card-footer d-flex justify-content-center">
    //                 </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <div className="department-contain text-center bg-image mt-1">
    <div className="container-fluid dept-wrap">
      <div className="col">
        <div
          className="card dept-card h-100"
          onClick={() => callApi("electronics")}
        >
          <img
            src={require("./media/electronics1.png")}
            className="card-img-top bg-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="dept-card-title text-black">Electronics</h5>
            <div className="card-footer d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card dept-card h-100"
          onClick={() => callApi("jewelery")}
        >
          <img
            src={require("./media/jewelery2.png")}
            className="card-img-top bg-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="dept-card-title text-black">Jewelery</h5>
            <div className="card-footer d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card dept-card h-100"
          onClick={() => callApi("men's clothing")}
        >
          <img
            src={require("./media/men5.png")}
            className="card-img-top bg-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="dept-card-title text-black">Men's Clothing</h5>
            <div className="card-footer d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card dept-card h-100"
          onClick={() => callApi("women's clothing")}
        >
          <img
            src={require("./media/women2.png")}
            className="card-img-top bg-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="dept-card-title text-black">Women's Clothing</h5>
            <div className="card-footer d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
