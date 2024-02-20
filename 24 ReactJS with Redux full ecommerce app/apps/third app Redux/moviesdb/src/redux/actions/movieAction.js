
// This file will contain the action funciton to return of [object] value to be considered as [reducer's state] value  ,  to be returned when it being used inside any element of any component  witin the {dispach} callback function method :
// This file will also use higher order function to obtain the ability to use the redux system  :

// A] Importing section :  
// Import and include the defined value of expression type value from the {moviesTypes.js} , as following  :
    // [moviesType] => will be used  as  the value of the type property  of the retunred object of the the defined {dispatch} function              
    // [moviesApi]  => will be used  as [api url] value of the {axios} method             
import { moviesType , moviesApi } from '../types/moviesType';

// Importing the { axios }  calss to be used in defining the api url :
import  axios  from  'axios' ; 
 

// B] Dfine the main Action method section :  
// Define the main action method {getAllMovie} of getting all data of the movies from api , with using the higher order function to make the redux accept the [aync-await]         :   
export  const getAllMovie = ()  =>  {
  
    // [A : First function] of getting all movies by using the redux system ] via Using the higher order function method to make the redux accept the [async-await]  =>    
    return async (dispatch) => {
        
        // Define the variable of getting the api of the movies data , the  using the imported variable {moviesApi} of [url value ]   :    
        const res = await axios.get(moviesApi);

        // Returning the action method's object data using the dispatch :
        // will return the object of each :
            // 1- [type's expression value ] -> as the imported variable of the movie type expression     
            // 2- [data array of the movies to be obained form the api ] ->  by assinging extesssion [data.results]  of  the varaible of axios obtainted value   
            // 3- [page prop] ->   by assinging extesssion [data.total_pages]  of  the varaible of axios obtainted value   
        dispatch({
            type: moviesType ,
            data: res.data.results ,
            pages : res.data.total_pages
        })

    }
     
}


