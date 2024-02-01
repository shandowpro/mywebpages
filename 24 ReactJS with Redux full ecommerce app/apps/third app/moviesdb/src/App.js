
//  This is the main component that include thr following components :
// 1] {NavBar} =>   contain a {live search }
// 2] {MoviesList} => contain {live api datasource}


import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";


function App() {

  // Define the useState :
  const [movies, setMovies] = useState([])  ;
  
  // Define a seperated function of recievcing a api varialbe and assinging it's value inside a useState variable : 
  const  getAllMovies = async () => {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar') ;
    console.log(res.data.results);
    setMovies(res.data.results); 
  } 
  
  // Define a useEffect to implememnt the denfined  sperated function => [to bve caled while the page first render  ]   :
  useEffect(() => {
    getAllMovies() ;
  } , [])
 
  // Define the searching method:
  const search = async (word) => {
    if (word ==='') {
      getAllMovies() 
    } else {
      // const res = await axios.get(`https://api.themoviedb.org/3/search/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&query=${word}&language=ar`);
      // const res = await axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);
      // const res = await axios.get( `https://api.themoviedb.org/3/search/movie?language=ar&query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);
      const res = await axios.get( `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);
      setMovies(res.data.results);
    }
  }

  return (
    <div className="color-body">
      <NavBar search={search}  />

      <Container>
        <MoviesList movies={movies}  />
      </Container>
    </div>
  );
}

export default App;
