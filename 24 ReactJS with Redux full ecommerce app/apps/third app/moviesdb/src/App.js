 
//  This is the main component that include thr following components :
  // 1] {NavBar} =>   contain a {live search }
  // 2] {MoviesList} => contain {live api datasource}
  
  // 3]    =>  Dynamic responding of {total page} value in all stutus of [dynamic renderuing + dynamic searcching  +  pagination navigation] :   
  // 4] {Routing inner page of []} =>  

import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";


function App() {
  // [D : fourth function]  =>  Dynamic responding of {total page} value in all stutus of [dynamic renderuing + dynamic searcching  +  pagination navigation] :   
    // 1] define the variable to store the current total pages inside it to pass into another comnponents until reaching the to {PagiationComponent} to be used to store the incomming page count    :  
    const [pagesCount, setPagesCount] = useState(0) ;

  
  // [A : first function] => Getting the dynamic Movie card element       : 
    // (1) Define the useState [of the  movie card ] :
    const [movies, setMovies] = useState([])  ;
    
    // (2) Define a seperated function of recieving a api varialbe and assinging it's value inside a useState variable : 
    const  getAllMovies = async () => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar') ;
      console.log(res.data.total_pages);
      setMovies(res.data.results); 
      setPagesCount(res.data.total_pages) ; 
    } 
    
    // (3) Define a useEffect to implement the denfined  sperated function => [to bve caled while the page first render  ]   :
    useEffect(() => {
      getAllMovies() ;

    } , [])
  // -----------------
  
  // [B : second function] =>  Define the dynamic  searching method :
    const search = async (word) => {
      if (word ==='') {
        getAllMovies() 
      } else {
        const res = await axios.get( `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);
        setMovies(res.data.results);
        setPagesCount(res.data.total_pages) ; 
      }
    }
  // ------------------

  // [C: third function] => Define a seperated pagination function [with parmatner of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component  : 
    const  getPage = async (page) => {
      // Define an api url link with dynammic value of page :
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar&page=${page}`) ;
      console.log(res.data.results);
      setMovies(res.data.results); 
      setPagesCount(res.data.total_pages) ; 
    } 
  // -------------------
  
  
  
  return (
    <div className="color-body">
      <NavBar search={search}  />

      <Container>
        <MoviesList movies={movies} getPage={getPage} pagesCount={pagesCount}  />
      </Container>
    </div>
  );
}

export default App;
