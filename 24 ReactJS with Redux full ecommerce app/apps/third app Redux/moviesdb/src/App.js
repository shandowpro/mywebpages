//  This is the main component [App] of application  :

// A] This component includes the following imported {components} :
  // 1] {NavBar}     => contain a {live search }
  // 2] {MoviesList} => contain {live api datasource}

// B] Main Functions : 
  // 1- Dynamic live getting the data of {each page} 
  // 2- Dynamic responding of {total page} value in all status of [dynamic rendering]
  // 3- Dynamic searching  
  // 4- Pagination navigation
  
  
// C] Main {Routers} created in this project [2 Routers] :
    // 1) Static Router to {main page} inside [Movies List] component } 
    // 2) Dynamic Router to {inner page of each movie} according to the obtained {ID}

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // [D : fourth function]  =>  Dynamic responding of {total page} value in all stutus of [dynamic renderuing + dynamic searcching  +  pagination navigation] :
  // 1] define the variable to store the current total pages inside it to pass into another comnponents until reaching the to {PagiationComponent} to be used to store the incomming page count    :
  const [pagesCount, setPagesCount] = useState(0);

  // setPagesCount(500);
  // [A : first function] => Getting the dynamic Movie card element       :
  // (1) Define the useState [of the  movie card ] :
  const [movies, setMovies] = useState([]);

  // (2) Define a seperated function of recieving a api varialbe and assinging it's value inside a useState variable :
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar"
    );

    // Assigning the botained  value of Api's result property inside the defined state [movies]  :
    setMovies(res.data.results);

    // Testing the value of {total_pages} api parameter :
    console.log(res.data.total_pages);

    // Dynamic Method of Assigning {total_pages} inside the [pagesCount] defined state  :
    // setPagesCount(res.data.total_pages) ;

    // Static Method of Assigning {total_pages} inside the [pagesCount] defined state :
    setPagesCount(500);
  };

  // (3) Define a useEffect to implement the denfined  sperated function => [to bve caled while the page first render  ]   :
  useEffect(() => {
    getAllMovies();
  }, []);
  // -----------------

  // [B : second function] =>  Define the dynamic  searching method :
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`
      );
      setMovies(res.data.results);

      // Dynamic Method of Assigning {total_pages} inside the [pagesCount] defined state  :
      setPagesCount(res.data.total_pages);

      // Static Method of Assigning {total_pages} inside the [pagesCount] defined state  :
      // setPagesCount(500) ;
    }
  };
  // ------------------

  // [C: third function] => Define a seperated pagination function [with parmatner of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component  :
  const getPage = async (page) => {
    // Define an api url link with dynammic value of page :
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar&page=${page}`
    );
    console.log(res.data.results);
    setMovies(res.data.results);

    // Dynamic Method of Assigning {total_pages} inside the [pagesCount] defined state  :
    // setPagesCount(res.data.total_pages) ;

    // Static Method of Assigning {total_pages} inside the [pagesCount] defined state  :
    setPagesCount(500);
  };
  // -------------------

  return (
    <div className="color-body">
      <NavBar search={search} />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pagesCount={pagesCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
