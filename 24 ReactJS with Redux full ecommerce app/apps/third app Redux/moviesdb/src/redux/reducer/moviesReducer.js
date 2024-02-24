
// The main Reducer of {moviesReducer} , and will contain the folwoing functions  :
    // 1- Displyaing all movies for the first rederning  -> {getAllMovies()} & {getPage()}
    // 2- Live Searching -> {serach()}  
    // 3- Pagination   -> { ()}  


// Importing the defined class to be used as  one of type parameter value  :
    import { moviesType } from "../types/moviesType"


// Define a object variable [as a values of initial state values = object of (2 properties  => empty array of movies data from api , pageCount   ) ] :     
    const initalValue = {movies:[] , pageCount :0 }  


// Define the main Reducer function [using the switch() ]   :  
    export const moviesReducer  = (state = initalValue , action) => {

        switch(action.type ) {

            // using the imported variable of the [type expression value] :
            case moviesType :
 
                // using the imported variable of the first object's property {movies array} of initial value of the reducer state prop  :      
                   // assigingnig the parmaters of reducer by the recivied  values from the action methods :
                return { movies :  action.data  , pageCount: action.pages }

            default :
                return state;

        }
    
    } 



 

