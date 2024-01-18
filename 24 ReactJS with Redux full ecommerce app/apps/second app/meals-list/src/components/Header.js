import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">
        قائمة الطعام
        </div>
        <div className="justify-content-center d-flex" >     
            <div className="underline"></div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;

// <p  className='title'></p>
