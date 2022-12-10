import React, { useState, useEffect } from "react";
// import { getFakePoducts } from './components/Utils'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Departments from "./components/Departments";
import Products from "./components/Products";
import Details from "./components/Details";
// import { callApi } from './components/Departments'
import { Routes, Route, Outlet } from "react-router-dom";
import axios from "axios";
import { getDetails} from './components/Products';

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
  // const [products, setAllProducts] = useState([]);

  // useEffect(() => {
  //   axios({
  //     method:"GET",
  //     url:`https://fakestoreapi.com/products/category/${cat}`
  //   }).then(res=>  {
  //     console.log(res.data);
  //     setData(res.data)
  //   }).catch(e=>console.log(e))
  //   .finally(() =>{setLoading(false)
  //       setClose(false);
  //       // setProductOpen(true);
  //   })
  //  },[cat])

  //trying something
  const fetchproducts = async () => {
    setLoading(true);
    const req = await fetch(`https://fakestoreapi.com/products`);
    const products = await req.json();
    setProducts(products);
    setLoading(false);
    console.log(products);
  }

  useEffect(() => {
    fetchproducts()
  }, []);

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

  // useEffect(() => {
  //   console.log(data)
  // }, [data, home])

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/departments"
          element={<Departments setLoading={setLoading} setData={setData} callApi={callApi}/>}
        />
        <Route
          path="/products"
          element={<Products data={data} setData={setData} setLoading={setLoading} getDetails={getDetails} callApi={callApi}/>}
        />
        <Route
          path="/details"
          elements={
            <Details data={data} setLoading={setLoading} setData={setData} getDetails={getDetails}/>
          }
        />
      </Routes>
    </>
    //  <>
    //     {home == false && <Header
    //     setHome={setHome}
    //     setOpen={setOpen}
    //     setClose={setClose}
    //      setLoading={setLoading}
    //      setData={setData}

    //     />}
    //     {open == true && (

    //         <Nav />
    //     )}
    //     {close == true && (
    //       <>
    //       <Departments
    //         setOpen={setOpen}
    //         setClose={setClose}
    //         setLoading={setLoading}
    //         setData={setData}
    //         setCat={setCat}
    //         category={category}
    //         setCategory={setCategory}
    //         setProductOpen={setProductOpen}
    //         // productByDept={productByDept}
    //         data={data}
    //         // fetchProducts={fetchproducts}

    //         products={products}
    //          />
    //         </>
    //     )}
    //     {productOpen == true && (

    //       <Products
    //       data={data}
    //       setProductOpen={setProductOpen}
    //       setLoading={setLoading}
    //       setData={setData}
    //       setDetailsOpen={setDetailsOpen}
    //       callApi={callApi}
    //       setClose={setClose}
    //       setOpen={setOpen}
    //        />
    //     )}
    //     {detailsOpen == true && (
    //       <Details
    //         setDetailsOpen={setDetailsOpen}
    //         setProductOpen={setProductOpen}
    //         data={data}
    //         callApi={callApi}
    //         setCat={setCat}
    //         setData={setData}
    //         setLoading={setLoading}
    //         setClose={setClose}
    //       />
    //     )}

    //   </>
  );
}
