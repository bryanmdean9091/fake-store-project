import React from "react";
import "./Details.css";
import { MDBBtn, MDBTabsItem } from "mdb-react-ui-kit";
import Departments from "./Departments";
import axios from "axios";

export default function Details({
  setDetailsOpen,
  setProductOpen,
  data,
  setData,
  setLoading,setClose
//   callApi,
}) { 
    
   const callApi = (categoryType) => {
    axios({
      method:"GET",
      url:`https://fakestoreapi.com/products/category/${categoryType}`
    }).then(res=>  { 
      console.log(res.data);
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(() =>{setLoading(false)
       setDetailsOpen(false);
        setProductOpen(true);
    })
  }
//   const back = () => {
//     console.log(data);
//     console.log(typeof data.category);
//     callApi(data.category).then(res => setDetailsOpen(false)
//     ).then(ans => setProductOpen(true))
//     console.log('this code is on line 18');
//     console.log('this code is on line 19');
//   };
  return (
    <header>
      <div className="p-5 text-center bg-image details-head mt-2 mb-1">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex  align-items-center h-100 mx-5 page">
          {/* {data.map((item) => ( */}
            <>
            <div className="container detailsPic-box">
              <img
                src={data.image}
                className="rounded-3 img-luid details-pic"
                alt={data.title}
              />
            </div>
            <div className="container product-name">
              <h2 className="name-txt">
                {data.title}
              </h2>
              <p className="product-details">
                {data.description}
              </p>
              <div className="flex-column"></div>
              <div className="d-flex flex-row align-items-center justify-content-center me-5">
                <h5 className="rating mx-1">Rating</h5>
                <div className="ratings-box"><p>{data.rating.rate}</p></div>
                <h5 className="price mx-1">Price$</h5>
                <div className="price-box">{data.price}</div>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center mt-4 doo">
                <MDBBtn
                  outline
                  size="lg"
                  className="sign-in font-weight-bold mx-1"
                >
                  Add to Cart
                </MDBBtn>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center mt-4 doo">
                <MDBBtn
                  outline
                  size="lg"
                  className="sign-in font-weight-bold mx-1 cart-btn"
                  onClick={() => callApi(data.category)}
                >
                  Back
                </MDBBtn>
              </div>
            </div>
</>
          {/* ))} */}
          
          </div>
        </div>
      </div>
    </header>
  );
}
