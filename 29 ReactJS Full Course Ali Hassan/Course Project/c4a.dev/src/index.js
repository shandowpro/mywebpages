

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Importing 'react router  dom' library elements :
import { createBrowserRouter, RouterProvider  } from "react-router-dom"; 

// Import the main page component  [App.jsx]  :
import App from "./App";

// Importing the inner pages components  :
import Home from "./pages/Home";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript  from "./pages/Javascript";


// Define the general main variable of router , which is  including all other defined inner pages , as object inside a array of objects    :
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1  style={{ color:'red'  }}  >   Sorry NO page is available ...  </h1>
  },
  {
    path: "/pages/Home",
    element: <Home />,
  },
  {
    path: "/Html",
    element: <Html />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



