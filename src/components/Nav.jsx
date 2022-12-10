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
import { Link } from 'react-router-dom';

export default function Nav() {
  return (

    <MDBNavbar bgColor='#39545a' className='shadow-none'>
      <MDBContainer fluid className='nav-contain d-flex align-items-center'>
      <Link to="/">
        <div className='logo'>
          Fill the Void
        </div>
        </Link>
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





