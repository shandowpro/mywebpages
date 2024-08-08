
/*  [Index] main react configuration  settings file , include    :

  -- [Most recent version of {React Router Dom}  Not matched with the {Helmet} libray ] Routering main settings -> accoring to most recent of {react router dom} version [v6.4.2] , as following :
    --- importing { createBrowserRouter, RouterProvider } Classes  from the {react router dom} library
    --- Define the {Router} variable of extracted {createBrowserRouter} imported function including array of objects of all defined Routes => [acording ot the most recent version of { react  router dom}  ]          
  -- Used Inner Pages functional components Routes -> [ Home , Css , HTML , Javascript ]     

  -- [we will use the previous version of the {react router dom} Settings  => to be matched with the helmet library]  
*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider  , 
  BrowserRouter 
} from "react-router-dom";


// Importings [Helmet library ] to be used to set configurations of this library side this application   - by wrapping the [HelmetProvider] over the main element {app} : 
import {  HelmetProvider } from "react-helmet-async";

// importing  the [App] main component to be called inside main configuration of router - according to the previous version of react router dom  -  
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App/>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
// ---------------------------------

// import Home from "./pages/home";
// import HTML from "./pages/html";
// import Css from "./pages/css";
// import Javascript from "./pages/javascript";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1 style={{ color: "red" }}> SORROY.........</h1>,
//   },

//   {
//     path: "/html",
//     element: <HTML />,
//   },

//   {
//     path: "/css",
//     element: <Css />,
//   },
//   {
//     path: "/javascript",
//     element: <Javascript />,
//   },
// ]);


// <RouterProvider router={router} />