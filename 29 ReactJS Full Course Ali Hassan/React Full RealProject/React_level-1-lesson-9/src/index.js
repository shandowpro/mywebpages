/*  [Index] main react configuration  settings file , include    :
  -- Routering main settings -> accoring to most recent of {react router dom} version [v6.4.2] , as following :
    --- importing { createBrowserRouter, RouterProvider } Classes  from the {react router dom} library
    --- Define the {Router} variable of extracted {createBrowserRouter} imported function including array of objects of all defined Routes          
  -- Used Inner Pages functional components Routes -> [ Home , Css , HTML , Javascript ]     
  --  

*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1  style={{ color: 'red'  }} > SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
