//  The main file of index with wrapped Proivder function :

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// importing the Provider class from the modificatied Redux ' react-redux'  :
import { Provider } from "react-redux";

//  importing the defined {store} variable :
import {storeAll} from  './store/store' ;


// Using the imported {Provider} class to wrapp main App [to enable all files and compoint in the project access both of {store} and {reducer}  ] :   
ReactDOM.render(
  <Provider store={storeAll}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <Provider store={storeCounter}>
//     <App />
//   </Provider>
//   // </React.StrictMode>
// );
 