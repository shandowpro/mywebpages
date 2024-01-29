// this is hthe movies list component :

import React from "react";
import CardMovie from "./CardMovie";
import { Row, Card, Col } from "react-bootstrap";

const MoviesList = () => {
  return (
    
    <Row className='mt-3'>
      <CardMovie />
      <CardMovie />
      <CardMovie />
    </Row>

  );
};

export default MoviesList;
