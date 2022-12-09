import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Header.css";
import axios from 'axios'
import {MDBBtn} from "mdb-react-ui-kit";
  
 
 

export default function Header({setOpen, setClose, setHome, setLoading, setData}) {

  const shopNow = () => {
    setOpen(true);
    setClose(true);
    setHome(true);
  }

 

  return (
    <header>
      <div className="p-5 text-center bg-image shop-pic head">
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 store-name display-1">Fill the Void</h1>
              <h3 className="mb-3 title-2">..with more stuff</h3>
              <MDBBtn onClick={() => shopNow()}  outline size="lg" className="sign-in font-weight-bold">
                shop now!
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
