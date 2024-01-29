// the single component of card :

import React from "react";
import { Col } from "react-bootstrap";

const CardMovie = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card" >
        <img src="p1.jpg" className="card__image" alt="ka" />

        <div className="card__overlay d-flex  ">
          <div className="overlay__text  text-center  w-100 p-3 ">
            <p> اسم الفيلم : castaway </p>
            <p> تاريخ الاصدار : 10-10-2023 </p>
            <p> النوع: انيميشن </p>
            <p> التقييم: 8.5 </p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardMovie;
