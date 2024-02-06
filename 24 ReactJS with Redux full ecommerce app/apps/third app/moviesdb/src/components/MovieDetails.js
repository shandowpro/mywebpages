// This is the inner page of the defeind router of each movie detials  :

import React, {useState , useEffect} from "react";
import { Col, Row } from "react-bootstrap";
import { Link , useParams} from "react-router-dom";
import axios from "axios";
 

const MovieDetails = () => {

  // Define the a variable  of current [Api id param] of this router inner page of selected movie => to use it in the api url to get all parameters   :
    const param = useParams() ;

    
  // Define the a state variable to store the array of all returned API parameters api url that  uses [api_id] parameter  :
    const [movie , setMovie] = useState([]) ;

  
  // Define a function of get the all api parameters  according to the return [Api_id] :
  const getMoviesDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=893adba5dca668458f2a181bcbd88e02&language=ar`
    );

    // poster_path
    // Store the retunred api paramters inside the defined state :
    setMovie(res.data) ;

    // Store the retunred api paramters inside the defined state :
    console.log(res.data);
    
  };

  // (3) Define a useEffect to implement the denfined function of get the api url    =>  oncde thejpage is being rendered for rhe first time     :
  useEffect(() => {
    getMoviesDetails();
  }, []);
  // -----------------

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img className="img-movie w-30" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt="movieImage" />
              
            <div className=" justify-content-center text-center mx-auto ">
              <p className="card-text-details border-bottom">
                اسم الفيلم : {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المفيمين: {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">التفييم : {movie.vote_average} </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1">
          <div className="card-story d-flex flex-column align-items-start ">
            <div className="text-end p-4">
              <p className="card-text-title border-bottom">القصة</p>
            </div>

            <div className="text-end px-2">
              <p className="card-text-story"> {movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col
          md="12"
          xs="12"
          sm="12"
          className="mt-2  d-flex justify-content-center"
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#b45b53", border: "none" }}
              className="btn btn-primary mx-2"
            >
              عودة للصفحة الرئيسية
            </button>
          </Link>

          <button
            style={{ backgroundColor: "#b45b53", border: "none" }}
            className="btn btn-primary"
          >
            مشاهدة الفيلم
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
