// This is the functional component of the [Catetgories buttons Bar ] ,to be used as life filtering creteria displaying  :

import React from "react";
import { Row, Col } from "react-bootstrap";

const Category = ({ filterByCategory, allCats }) => {
  // Define a parent container function including the recieved porp function , and to be call inside each button:
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

// <button
//   onClick={() => onFilter("افطار")}
//   style={{ border: "2px solid #b45b35" }}
//   className="btnCat mx-2 p-2 "
// >
//   {" "}
//   الافطار{" "}
// </button>
// <button
//   onClick={() => onFilter("غذاء")}
//   style={{ border: "2px solid #b45b35" }}
//   className="btnCat mx-2 p-2 "
// >
//   {" "}
//   الغذاء{" "}
// </button>
// <button
//   onClick={() => onFilter("عشاء")}
//   style={{ border: "2px solid #b45b35" }}
//   className="btnCat mx-2 p-2 "
// >
//   {" "}
//   العشاء{" "}
// </button>
