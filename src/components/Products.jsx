import { useEffect, useState } from "react";
import "./Products.css";
import {MDBBtn} from "mdb-react-ui-kit";
import axios from "axios";




function Products({  data, setData, setLoading, setProductOpen, setDetailsOpen, setClose, setOpen }) {

  // const [ID, setID] = useState("");

  // useEffect(() => {
  //   getDetails();
  // },[ID])


  const getDetails = (ID) => {
    axios({
          method:"GET",
          url:`https://fakestoreapi.com/products/${ID}`
        }).then(res=>  { 
          console.log(res.data);
          setData(res.data)
        }).catch(e=>console.log(e))
        .finally(() =>{setLoading(false)
          setProductOpen(false)
          setDetailsOpen(true);
        })
      }

      const callApi = (categoryType) => {
        axios({
          method:"GET",
          url:`https://fakestoreapi.com/products/category/${categoryType}`
        }).then(res=>  { 
          console.log(res.data);
          setData(res.data)
        }).catch(e=>console.log(e))
        .finally(() =>{setLoading(false)
          setProductOpen(false)
          setClose(true);
         
           ;
        })
      }
   
  
  
  // const getDetails = () => {
  //   axios({
  //     method:"GET",
  //     url:`https://fakestoreapi.com/products/${ID}`
  //   }).then(res=>  { 
  //     console.log(res.data);
  //     setData(res.data)
  //   }).catch(e=>console.log(e))
  //   .finally(() =>{setLoading(false)
  //       // setClose(false);
  //       //  setProductOpen(false);
  //   })
  // }

  // const getDetails = (ID) => {
  //   axios({
  //     method:"GET",
  //     url:`https://fakestoreapi.com/products/${ID}`
  //   }).then(res=>  { 
  //     console.log(res.data);
  //     setData(res.data)
  //   }).catch(e=>console.log(e))
  //   .finally(() =>{setLoading(false)
  //       // setClose(false);
  //       // setProductOpen(true);
  //       setDetailsOpen(true);
  //   })
  // }

  return (
  <>
    <div className="container-fluid product-wrap">
      {data.map((item) => (
        <div>
        <img
          src={item.image}
          className="rounded-3 img-fluid prdct m-4 "
          alt={item.title}
          onClick={() => getDetails(item.id)}
        />
         </div>
      ))}
     
     
    </div>
     <div className="d-flex flex-column align-items-center justify-content-center mt-4 doo">
                <MDBBtn
                  outline
                  size="lg"
                  className="sign-in font-weight-bold "
                  onClick={() => callApi(data.category)}
                >
                  Back
                </MDBBtn>
              </div>
              </>
  );
}

export default Products;
