// This is the functional component of the [Catetgories buttons Bar ] ,to be used as life filtering creteria displaying  :


import React from "react";
import { Row, Col } from "react-bootstrap";

 const Category = () => {
  return (
    <Row className="m-2 mb-5">
      <Col sm="12" className="justify-content-center d-flex my-2 ">
          <button style={{border: "2px solid #b45b35"}} className="btnCat mx-2 p-2 " > الكل </button>        
          <button style={{border: "2px solid #b45b35"}} className="btnCat mx-2 p-2 " > الافطار  </button>        
          <button style={{border: "2px solid #b45b35"}} className="btnCat mx-2 p-2 " > الغذاء  </button>        
          <button style={{border: "2px solid #b45b35"}} className="btnCat mx-2 p-2 " > العشاء </button>        
      </Col>
    </Row>
  );
};

export default Category ;
