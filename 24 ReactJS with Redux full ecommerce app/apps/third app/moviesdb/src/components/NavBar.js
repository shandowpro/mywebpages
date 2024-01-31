// The {NavBar} of the third  project { MoviesDB}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NavBar = ({ search }) => {
  
  // Define the parent searching container :
  const onSearch = (word) => {
     // passing through the parameter (w*ord) [comming from the input value element] of the parent function  into the  functional parameter {search}  :
    search(word);
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <img className="logo" src="" alt="dfs" />
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
