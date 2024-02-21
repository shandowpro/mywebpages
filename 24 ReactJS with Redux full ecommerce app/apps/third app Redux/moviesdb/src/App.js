//  This is the main component [App] of application  :

// A] This component includes the following imported {components} :
  // 1] {NavBar}     => contain a {live search }
  // 2] {MoviesList} => contain {live api datasource}

// B] Main Functions : 
  // 1- Dynamic live getting the data of {each page}  => [moved to the {MoveisList} component] (according to the redux )
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
// import { moviesReducer } from "./redux/reducer/moviesReducer"; 
// import { UseSelector, useDispatch } from "react-redux" ; 
 

function App() {
 // The first funcion of [getting all movies data] has been moved into the {redux/actions/MoviesList.js} by using the redux system  
// -----------------
// The second funcion of [live searching] according to inserted valieu inside tee input   has been moved into the {redux/actions/MoviesList.js} by using the redux system  
// -----------------
// The Third funcion of  [get current page ] according to 
  
  // -------------------

  return (
    <div className="color-body">
      <NavBar  />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  // getPage={getPage}
                  // pagesCount={pagesCount}
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
