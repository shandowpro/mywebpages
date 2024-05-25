
// the single component of card unit {CardMovie} => This component is being called inside the [MoviesList]   :

  // A] used classes in this component  :
    // 1- {Link} [1] => to create the link to navigatge to the defined Dynamic router of {Each component  inner page} according to the obtaind {Movie ID} to use it in each movie  
  
 
  // B]  Receiving [props] in this component  :
    // 1- {mov} => from Mapping on the datasource {movies} -> within {MoviesList} to create the link to navigatge to the defined Dynamic router of {Each component  inner page} according to the obtaind {Movie ID} to use it in each movie  
  
 

import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
    
      <Link to = {`/movie/${mov.id}`}  >
       
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt="Movie Poster"
          />

          <div className="card__overlay d-flex  ">
            <div className="overlay__text  text-center  w-100 p-3 ">
              <p> اسم الفيلم : {mov.title} </p>
              <p> اسم الفيلم الاصلي: {mov.original_title} </p>
              <p> تاريخ الاصدار : {mov.release_date} </p>
              <p> عدد المقيمين: {mov.vote_count} </p>
              <p> التقييم: {mov.vote_average} </p>
            </div>
          </div>
        </div>
    
      </Link>

    </Col>
  );
};

export default CardMovie;
