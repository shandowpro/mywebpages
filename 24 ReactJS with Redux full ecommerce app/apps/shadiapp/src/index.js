
// Importing the main librarires of ReactJS :
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";


// importing the reactJs bootstrap link :
import "bootstrap/dist/css/bootstrap.min.css";
 

// Importing the main  App component file to be used in the rendering method :
import App from "./App";


// Importing the main defined [context Provider Function] {UseContextProvider} from context defining file {UseContext.js} =>
    // [to be used as a Wrapper of App main component ]   :
import {UseContextProvider} from "./component/UseContext";


// Rendering the [App] main component inside the ReactDom render method => [with using the defined {Context Function} as wrapper of the main {App}  inside it] :
ReactDOM.render( 
    <UseContextProvider >
        <App />     
    </UseContextProvider>   
    , document.getElementById("root")
);


// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter> 
//     , document.ge-tElementById("root")    
// );
