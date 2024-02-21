// This is the movies list Displayed  component {MoviesList} including  :

  // A] Main imported and included components    :
    // 1- {CardMovie}    =>  The main element of card in the movies list   => which is being mappped to get each Movie details   
    // 2- {PaginationComponent}  => The Pagination Controling Bar        
     
  // B] Main Functions used in this component  :
    // 1- {Conditional Rendering} of displayed Movies => [according to the obtained  [Datasource's length] prop-> {movies}    
    // 2- {Conditional Rendering} of displayed Pagination => [according to the obtained  [Datasource's length] prop -> {} 
    // 3- {Mapping} on the  recieved prop {movies} with using the imported {CardMovie} component     
 
  // C]  Main recived props    :,
    // 1- {movies} X -> represent the main datasource of api Movies data => [ canceled ]         
    // 2- {getPage} -> represent the  Defined a seperated pagination function [with parameter of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component  
    // 3- {pagesCount} -> represent the  value of state variable of current page count [staic / dynamic ]           
    
  // D] New Main Functions used in this component [after Redux edit]  :
    // 1- {Conditional Rendering} of displayed Movies => [according to the obtained  [Datasource's length] prop-> {movies}    
    // 2- {Conditional Rendering} of displayed Pagination => [according to the obtained  [Datasource's length] prop -> {} 
    // 3- {Mapping} on the  recieved prop {movies} with using the imported {CardMovie} component     
  

import React , {useState , useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useSelector , useDispatch } from "react-redux";

// importing the [action method] of {getAllMovie} from the action file -> [to  be used wihtin the dispatch to send the it's  defined  {action mehtod}  into the Reducer  ]   : 
import { getAllMovie } from "../redux/actions/movieAction";  

const MoviesList = ({ getPage , pagesCount }) => {
  
  // All following logic codes has been comming from the main component {App} [accordign to the Redux] : 
  
    // 1] define the variable to store the current total pages inside it to pass into another comnponents until reaching the to {PagiationComponent} to be used to store the incomming page count    :
    // const [pagesCount, setPagesCount] = useState(0); => [not using it now]
  
    // (2) Define the useState [of the movie card] ->  to use it as  local data storege of extracted store variable   :
    const [movies, setMovies] = useState([]);
        
    // Extract a new dispatch method to be able to send a dispatch action :
    const dispatch = useDispatch() ;
    
    // using useEffect to Dispatching the imported action method:{getAllMovie()} for the first rendering ->  to get all movies data in the first rendering and send it to the reducer and store before extracting a new store {dataMovies} :
    useEffect( () => {
      dispatch(getAllMovie()) ;
    }, [])

  // Define a new extracted variable from the store [after being assigned by the previous step of updating store by reducer] by using the useSelector : 
    const dataMovies = useSelector( (state) => state.movies ) ;    
    
    // using useEffect to render the obtained data stored by [dataMovies] each time the page is being Re-rendered by [ setting the defined state by [dataMovies] + using [dataMovies] extracted store variable as the useEffect dependencies]  :      
    useEffect( () => {
      setMovies(dataMovies) ;
    }, [dataMovies])
  // -------------------
  
  
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
