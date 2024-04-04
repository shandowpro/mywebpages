// This is the [main.jsx] Wrapping whole script by [Provider store={store}] parent element (to activate the imported RTK query system ) ,  [or within  [index.jsx] in some frameworks] :
// This  is using hte redux system and [RTk query]  

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from 'react-redux'
import { store } from './Redux/store'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
