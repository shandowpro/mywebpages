// The {NavBar} of the third  project { MoviesDB}
  // functions & links  used in this component  :  
    // 1- [live searching]  ->   using the impojted functional  prop from main [App] , with the  retunrned parameter  value of the inpout  
    // 2- [default link] to the main page within the logo image 
 


import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// importing the [logo image] from the images folder for best pracitise => to be used in {NavBar} : 
import logo from  '../images/logo.svg' ;


// import {Link} from  'react-router-dom' ;

const NavBar = ({ search }) => {
  
  // Define the parent searching container :
  const onSearch = (word) => {
     // passing through the parameter (word) [comming from the input value element] of the parent function  into the  functional parameter {search}  :
    search(word);
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href='/'>
              <img className="logo" src={logo} alt="logo image" />
            </a>      
          </Col>

          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>

              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث ..."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
