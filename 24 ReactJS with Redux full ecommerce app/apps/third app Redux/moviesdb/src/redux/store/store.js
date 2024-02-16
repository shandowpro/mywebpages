
// This is the {store} file to cointan the main redux store const :

// Import main class of defining the store varialbe   :  
import  {createStore}  from 'redux' ;
 

// importing the defined reducer function from it's seperated file :           
import { moviesReducer } from '../reducer/moviesReducer';

// Define a store varialbe according to the imported reducer :
export const storeAll  = createStore(moviesReducer ) ; 




 
 


//  Importing {composeWithDevTools} from the 'redux-devtools-extension'  library   :
// import {composeWithDevTools} from 'redux-devtools-extension' 

// export const store  = createStore(moviesReducer , composeWithDevTools() ) ; 