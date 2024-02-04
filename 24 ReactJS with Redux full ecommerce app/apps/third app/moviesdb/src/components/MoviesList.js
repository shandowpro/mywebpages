// This is the movies list component {MoviesList} including  :
  //  recieving the {movies} prop from [App.js] to use it in mapping through the imported component {cardMovie} with using
  // [conditional Rendering]
  // [map()] => with using :
  // {mov} object =>
  // {mvo.id}
  // {PaginationComponent.js} component 

import React from "react";
import CardMovie from "./CardMovie";
import { Row, Card, Col } from "react-bootstrap";
import PaginationComponent from "./Pagination";

const MoviesList = ({ movies , getPage , pagesCount }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5 "> لا يوجد افلام </h2>
      )}

      <PaginationComponent getPage={getPage} pagesCount={pagesCount}     />
    </Row>
  );
};

export default MoviesList;
