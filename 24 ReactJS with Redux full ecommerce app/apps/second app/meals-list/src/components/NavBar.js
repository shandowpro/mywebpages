import React from "react";
import { Row , Container, Nav, Navbar, Form } from "react-bootstrap";

const NavBar = () => {
  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark"  >
        <Container >

          <Navbar.Brand  >
            <div className='brand-color'>
              مطعم جديد
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث ..."
                className=" mx-2"
                aria-label="Search"
                
              />
              <button className="btn-search"> بحث </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
