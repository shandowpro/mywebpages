
// This file is {DatesList} functional component , which represent the the middle row [dates list items] of the  application, and include the follwing elements  :    


  // 1- The second row and its column  
  // 2- the repeated item , by using mapping function [accordign to the mapped datasource array length ] 
  // 3- [Condtinonal Rendering] => according to the datasource array length {person}        
  // 4- The passed through [props] inside the repeated item , by each inner property object of this array  



import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({person}) => {
  return (
    <div>
      <Row className="justify-content-center"    >
        <Col sm="8">
          <div className="rectangle p-2">
            {person.length ? (
              person.map((item) => {
                return (
                  <div className="d-flex border-bottom mx-3 my-2 "  key={item.id} >
                    <img src={item.img} alt="person" className="img-avatar" />
                    <div className="px-3">
                      <p className="d-inline fs-5"> {item.name} </p>
                      <p className="fs-6"> {item.date} </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2> لا يوجد بيانات </h2>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DatesList;
