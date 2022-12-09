import React, { useState, useEffect } from "react";
// import { getFakePoducts } from './components/Utils'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Departments from "./components/Departments";
import Products from "./components/Products";
import Details from "./components/Details";
import { callApi } from './components/Departments'
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
  const [category, setCategory] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    axios({
      method:"GET",
      url:`https://fakestoreapi.com/products/category/${cat}`
    }).then(res=>  { 
      console.log(res.data);
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(() =>{setLoading(false)
        setClose(false);
        // setProductOpen(true);
    })  
   },[cat])

   const callApi = (categoryType) => {
    axios({
      method:"GET",
      url:`https://fakestoreapi.com/products/category/${categoryType}`
    }).then(res=>  { 
      console.log(res.data);
      setData(res.data)
    }).catch(e=>console.log(e))
    .finally(() =>{setLoading(false)
        setClose(false);
        setProductOpen(true);
    })
  }

// useEffect(() => {
//   console.log(data)
// }, [data, home])

  return (
   <>
      {home == false && <Header 
      setHome={setHome}
      setOpen={setOpen}
      setClose={setClose} 
       setLoading={setLoading}
       setData={setData}
       
      />}
      {open == true && (
        
          <Nav />
      )}
      {close == true && (
        <>
        <Departments 
          setOpen={setOpen}
          setClose={setClose}
          setLoading={setLoading}
          setData={setData}
          setCat={setCat}
          category={category}
          setCategory={setCategory}
          setProductOpen={setProductOpen}
           />
          </> 
      )}
      {productOpen == true && (
      
        <Products
        data={data}
        setProductOpen={setProductOpen}
        setLoading={setLoading}
        setData={setData}
        setDetailsOpen={setDetailsOpen}
        callApi={callApi}
        setClose={setClose}
        setOpen={setOpen}
         />
      )}
      {detailsOpen == true && (
        <Details 
          setDetailsOpen={setDetailsOpen}
          setProductOpen={setProductOpen}
          data={data}
          callApi={callApi}
          setCat={setCat}
          setData={setData}
          setLoading={setLoading}
          setClose={setClose}
        />
      )}
     
    </>
  );
}
