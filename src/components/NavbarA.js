import React, { useState } from "react";
import {Row,Nav,Container,Navbar,Form,NavDropdown,Button} from "react-bootstrap";

const NavbarA = ({filteringS}) => {
  const [motS,setMotS] = useState ("")

  const onCherch = (motS)=>{
    filteringS(motS)
  }
  return (
    <Row>
      <Navbar expand="lg" className="bg-dark rounded-2">
        <Container fluid>
          <Navbar.Brand href="#" className="text text-success">VELO +</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-success" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: "100px" }}navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search velo..."
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setMotS(e.target.value.trim())}}
              />
              <Button variant="outline-success" onClick={(e)=> {
                  onCherch(motS);
              }
              }>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavbarA;
