
// This file is {DatesActions} functional component , which represent the the last row of the  application, and include the follwing elements  : 
 
   // 1- {Show all} button  = >  which is about show all items in the [dates list]  =>  will be activated by onclick event, by using the recived functional prop  {onView } 
    
   // 2- {Delete all} button  = >  which is about hide all items in the [dates list] => will be activated by onclick event =>  will be activated by onclick event, by using the recived functional prop  {onDelete} 


import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesActions = ({ onDelete ,  onView }) => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="d-flex justify-content-between">
          <button clasName="btn-style p-2" onClick={onView}> عرض الكل </button>
          <button clasName="btn-style p-2" onClick={onDelete}> مسح الكل </button>
        </Col>
      </Row>
    </div>
  );
};

export default DatesActions;
