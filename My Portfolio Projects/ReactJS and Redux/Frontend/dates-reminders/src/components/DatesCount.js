
// Define the [DatesCount] component with using  the recieved porps 
// The recieve3d and used props is =>  datasource static array of objects  {person}

import React from "react";
import { Col, Row } from "react-bootstrap";
    


 const DatesCount = ({person}) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8">لديك {person.length} مواعيد</Col>
      </Row>
    </div>
  );
}

export default  DatesCount ;
