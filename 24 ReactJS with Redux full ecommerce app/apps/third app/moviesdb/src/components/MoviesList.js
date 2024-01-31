// This is the movies list component {MoviesList} : 
   //  recieving the {movies} prop from [App.js] to use it in mapping through the imported component {cardMovie} with using
    // [conditional Rendering]  
    // [map()] => with using : 
        // {mov} object =>
        // {mvo.id} 
     
 

import React from "react";
import CardMovie from "./CardMovie";
import { Row, Card, Col } from "react-bootstrap";
 

const MoviesList = ({movies}) => {
  return (
    
    <Row className='mt-3'>
      {
        movies.length >=1 ? (movies.map((mov)=> {
          return (
            <CardMovie key={mov.id} mov={mov} /> 
          );
        })

        ) : <h2 className="text-center p-5 "> لا يوجد بيانات  </h2>

      }   
    
       
    </Row>

  );
};

export default MoviesList;
