
//  This is ther main component that inlcude thr following components :
// 1] {NavBar} =>
// 2] {MoviesList} =>


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
    setMovies(res); 
  } 
  
  // Define a useEffect to implememnt the denfined  sperated function => [to bve caled while the page first render  ]   :
  useEffect(() => {
    getAllMovies() ;
  } , [])
 
  return (
    <div className="color-body">
      <NavBar />

      <Container>
        <MoviesList />
      </Container>
    </div>
  );
}

export default App;
