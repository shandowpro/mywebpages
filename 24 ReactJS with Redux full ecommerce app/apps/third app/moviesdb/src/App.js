//  This is ther main component that inlcude thr following components :
// 1] {NavBar} =>
// 2] {MoviesList} =>

// import './App.css';

  /* The following line can be included in your src/index.js or App.js file */
 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState , useEffect} from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from 'axios';

function App() {

  // Define a useState variable to store,handle  the recieved datasource inside it  : 
  const [movies , setMovies] = useState([]) ;

  // Define a seperated function containing defining varialbe that Recieve the [api] inside it by using asyn+await &  axios :
  const getAllMovies = async () => {
    
    // Using the {axios()} method [with (aync,await)]  :
      const res = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar') ;

    // Testing the recivinig [api] data by printing :
      console.log(res);

    // Assigning the recived api inisde the useState :
     setMovies(res)
  
  }

  // Define a [useEffect()] function to implement the  defined function :
    useEffect(() => {
      getAllMovies();
    }, [])




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
