
// This is the [NavBar] function component :  

import React , {useState} from "react";
import { Row , Container, Nav, Navbar, Form } from "react-bootstrap";

const NavBar = ({filterBySearch}) => {
  
  // Define useState variable to store the searching input's value inside it [with empty initial value] :   
    const [searchValue , setSearchValue ] = useState('');

 
  // Define a parent container of the recieved function of [filterBySearch] :
  const onSearch = (e) => {
    // Using the prevent default method to prevent the default actrion of submit button of searching form [which is using this function by onclick() event]  
    e.preventDefault();
    
    // Assigning the value of [state] variable as a imported filter by searching function : 
    filterBySearch(searchValue) ;
    
    // Setting the state variable by empty value [ after sendgin it to as a paramter of {filterBySearch()} ] :
    setSearchValue('') ;
  } 

  
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
                onChange={ (e)=> setSearchValue(e.target.value) }
                value = {searchValue} 
              />
              <button className="btn-search" onClick={onSearch}> بحث </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
