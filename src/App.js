import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Departments from "./components/Departments";
import Products from "./components/Products";
import axios from "axios";



export default function App() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [home, setHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState({});
  const [cat, setCat] = useState("");
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    axios({
      method:"GET",
      url:`https://fakestoreapi.com/products/category/${cat}`
    }).then(res=>  { 
      console.log(res.data);
      console.log(res.data[0].title);
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(() =>{setLoading(false)
        setClose(false);
        setProductOpen(true);
    })  
   },[cat])



  return (
    <>
  
      {home != true && <Header 
      setHome={setHome}
      setOpen={setOpen}
      setClose={setClose} 
      setLoading={setLoading}
      setData={setData}
       
      />}
      {open != false && (
        
          <Nav />
      )}
      {close != false && (
        
        <Departments 
          setOpen={setOpen}
          setClose={setClose}
          setLoading={setLoading}
          setData={setData}
          setCat={setCat}
           />
           
      ) }
      {productOpen != false && (
        <Products
        department={data}
         />
      )}
         
        
      

      {/* <SignIn /> */}
      {/* <Register /> */}
    </>
  );
}
