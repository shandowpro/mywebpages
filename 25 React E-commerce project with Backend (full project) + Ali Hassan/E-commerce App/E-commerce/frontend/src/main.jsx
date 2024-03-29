// This is the [main.jsx] Wrapping whole application file [or called [index.jsx] in some frameworks] :

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
