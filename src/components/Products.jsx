// import { useEffect, useState } from "react";
import "./Products.css";
import { MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { Link } from "react-router-dom";

function Products({
  data,
  setData,
  setLoading,
  setProductOpen,
  setDetailsOpen,
  setClose,
  setOpen,
}) {
 
const  getDetails = (ID) => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${ID}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        // setProductOpen(false);
        // setDetailsOpen(true);
      });
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
        // setProductOpen(false);
        // setClose(true);
      });
  };

  return (
    <header>
      <div className="p-5 text-center bg-image shop-pic head mt-3">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="container-fluid product-wrap">
              {data.map((item) => (
                
                  <div>
                  <Link to="./details">
                    <img
                      src={item.image}
                      className="rounded-3 img-fluid prdct m-4 "
                      alt={item.title}
                      onClick={() => getDetails(item.id)}
                    />
                    </Link>
                  </div>
               
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center back-prdct">
        <Link to="/departments">
          <MDBBtn
            outline
            size="lg"
            className="sign-in font-weight-bold back-product"
            onClick={() => callApi(data.category)}
          >
            Back
          </MDBBtn>
        </Link>
      </div>
    </header>
  );
}
export default Products;
