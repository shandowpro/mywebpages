
// The single card component :

import React from "react";
import { Col } from "react-bootstrap";

const CardMovie = () => {
  return (
    <Col sx="6" sm="6" lg="3" className="my-1">
      <div className="card">
        <img src="p1.jpg" className="card__img" alt="film" />
        <div className="card__overlay"></div>
      </div>
    </Col>
  );
};

export default CardMovie;
