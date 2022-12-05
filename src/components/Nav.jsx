import React from 'react';
import './Nav.css';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBInputGroup,
    MDBBadge,
  } from "mdb-react-ui-kit";

export default function Nav() {
  return (

    <MDBNavbar bgColor='#39545a' className='shadow-none'>
      <MDBContainer fluid className='nav-contain d-flex align-items-center'>
        <MDBInputGroup tag="form" className='d-flex  w-auto mb-0'>
          <input className='form-control shop-search' placeholder="Search Store" aria-label="Search" type='text' />
          <MDBBtn className="search-store-btn" outline>Search</MDBBtn>
        </MDBInputGroup>
        <div className='cart-box'>
        <MDBBadge pill color='danger'>0</MDBBadge>
              <span>
                <MDBIcon className="cart mx-2" fas icon='shopping-cart'></MDBIcon>
              </span>
              </div>
        
      </MDBContainer>
      
    </MDBNavbar>
   
  )
}





