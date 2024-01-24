// This is the functional component of the [Categories buttons Bar ] ,to be used as life filtering creteria displaying  :

import React from "react";
import { Row, Col } from "react-bootstrap";


// Recieving the both of :
  // [ allCats ] ->   the Define a new Array of unique category values of all items in the main datasouerce array  -> [to be mapped with inside buttons' values ] -> by using {...net Set()} + {mapping the imported datasource varialbe  } :
  // [ filterByCategory ] -> the Define the method of filteration process by onClick event of each [category Bar buttons] , accordintg to the recieved [param]   :


const Category = ({ filterByCategory, allCats }) => {
  
  // Define a parent container function including the recieved prop function , and to be call inside each button by onclick event :
  const onFilter = (cat) => {
    filterByCategory(cat);
  };

  return (
    <Row className="m-2 mb-5">
      <Col sm="12" className="justify-content-center d-flex my-2 ">
    
        {allCats.length >= 1 ? (
          allCats.map((cat) => {
            return (
              <button
                onClick={() => onFilter(cat)}
                style={{ border: "2px solid #b45b35" }}
                className="btnCat mx-2 p-2 "
              >
                {cat}
              </button>
            );
          })
        ) : (
          <h2> لا يوجد </h2>
        )}
        
      </Col>
    </Row>
  );
};

export default Category;
 