import React from "react";
import {Nav,Container,Navbar} from "react-bootstrap";







function Home(){


  

    return(

        <React.Fragment>
 <Navbar collapseOnSelect expand="lg" className="top_nav">
  <Container>
  <Navbar.Brand href="#home">Phone<b className="logo">Hub</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto left">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
          
        </React.Fragment>
    );
}

export default Home;