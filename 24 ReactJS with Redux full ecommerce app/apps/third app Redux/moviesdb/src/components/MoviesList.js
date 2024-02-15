// This is the movies list Displayed  component {MoviesList} including  :

  // A] Main imported and included components    :
    // 1- {CardMovie}    =>  The main element of card in the movies list   => which is being mappped to get each Movie details   
    // 2- {PaginationComponent}  => The Pagination Controling Bar        
     
  // B] Main Functions used in this component  :
    // 1- {Conditional Rendering} of displayed Movies => [according to the obtained  [Datasource's length] prop-> {movies}    
    // 2- {Conditional Rendering} of displayed Pagination => [according to the obtained  [Datasource's length] prop -> {} 
    // 3- {Mapping} on the  recieved prop {movies} with using the imported {CardMovie} component     
 
  // C]  Main recived props    :
    // 1- {movies} -> represent the main datasource of api Movies data         
    // 2- {getPage} -> represent the  Defined a seperated pagination function [with parameter of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component  
    // 3- {pagesCount} -> represent the  value of state variable of current page count [staic / dynamic ]           


import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
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

      {movies.length >= 1 ? (
        <PaginationComponent getPage={getPage} pagesCount={pagesCount} />
        ) : null  
      }
      
    </Row>
  );
};

export default MoviesList;
