import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  logo from '../images/logo.png'
import './NavbarCard.css';

import 'react-autoql/dist/autoql.esm.css'
function NavbarCard() {
    return (
        <Navbar expand="lg" id=" navbar ">
            <Container fluid style={{textAlign:"center", paddingLeft:"2rem"}}>
                {/* <img className="logo" width={"30px"}  src={logo} alt="Logo" /> */}
                <Navbar.Brand href="/"><img className="logo" width={"50px"} style={{borderRadius:"10px"}}  src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
  
            </Container>
        </Navbar>
    );
}

export default NavbarCard;
