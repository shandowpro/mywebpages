// The main {store} variable of Redux System    :

// configureStore  => [this is the new class used to create a new store variable in the Redux , instead of {createStore}   ]

// A]  importing section : 
    // importing the {createStore} class of Redux to create a new store :
    // import React from "react";
    import { createStore } from "redux";

    // importing the defined Reducer , to be included in the store varialbe 's parameter  :
     import { rootReducer } from "../reducers/rootReducer";

    // Imporiting the  dowloaded library of [redux-devtool-extension] {incase of prodution stage }
    // import  {composeWithDevTools} from 'redux-devtoopls-extension'  ;   
 

// B]  Defien the {store} varialbe  section :
    // Define a new variable Store extracted from the {createStore} class of redux , including a paramter of imported and defined {combined Reducer}  :
    export const storeAll = createStore(rootReducer);
    
    
    // Define the store variable incase of using redux devtools extension + {composeWithDevTools} :    
    // export const storeAll = createStore(rootReducer, composeWithDevTools);




