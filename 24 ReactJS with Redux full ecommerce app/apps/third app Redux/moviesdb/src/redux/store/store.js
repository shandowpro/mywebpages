
// This is the {store} file to contian the main redux store const - withj using the {Middleware} tool of the [redux-thunk]    :

// Import main class of defining the store varialbe & {Middleware} class   :  
import  {createStore  , applyMiddleware }  from 'redux' ; 

// importing the defined reducer function from it's seperated file :           
import { moviesReducer } from '../reducer/moviesReducer';

// Importing the {thunk} class from the {redux-thunk} :
import {thunk}  from 'redux-thunk'; 
// import  thunk from 'redux-thunk';



// Define a store varialbe according to the imported reducer :
export const storeAll  = createStore(moviesReducer , applyMiddleware(thunk) ) ; 

  

//  Importing {composeWithDevTools} from the 'redux-devtools-extension'  library   :
// import {composeWithDevTools} from 'redux-devtools-extension' 

// export const store  = createStore(moviesReducer , composeWithDevTools() ) ; 