    

// This is  the whole combined ruducer that includes all other defined reducers : 

// Importing other defined reducers methods  :
import {reducerAuth} from  './reducerAuth' ;
import { reducerCounter } from './reducerCounter';
 
// Importing  combined Reducer from the redux   :
import { combineReducers } from 'redux'; 


// Define the main {combineReducers} method :
export const rootReducer =  combineReducers({
    Auth : reducerAuth ,
    Count : reducerCounter 
})



