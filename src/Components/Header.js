import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import united from '../Assets/united.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import {
  Link,
} from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className='container-fluid py-1 px-0 border-bottom'>
        <Navbar expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand className='order-md-1' href="#home">TagStore Vendor Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to="/register" className='btn register me-2 rounded-pill border-0'>Register Now</Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="#easy-shipping-and-delivery">Shipping and delivery</Link>
            <Link className="navItem" to="#selling-expenses-on-jumia">Selling expenses on Jumia</Link>
            <Link className="navItem" to="#lang"><img className='me-1' style={{width:'15px'}} src={require('../Assets/egypt.png')} alt="" />العربية</Link>
            
            {/* <a className="navItem" href="home">Home</a>
            <a className="navItem" href="easy-shipping-and-delivery">Shipping and delivery</a>
            <a className="navItem" href="selling-expenses-on-jumia">Selling expenses on Jumia</a>
            <a className="navItem" href="lang">العربية</a> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </>
  )
}
