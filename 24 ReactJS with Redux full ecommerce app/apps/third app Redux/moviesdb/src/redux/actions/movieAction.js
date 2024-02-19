
// This file will contain the action funciton to return of [object] value to be considered as [reducer's state] value  ,  to be returned when it being used inside any element of any component  witin the {dispach} callback function method :
// This file  will also use higher order fucnoin to obtain the abliity to use the redux system  :

// This function must import and include the defined value of expression type value {movieAction.js} :
import { moviesType , moviesApi } from '../types/moviesType';
import  axios  from  'axios' ; 

// Define the main action method of getting all data of the movies from api   :   
export  const getAllMovie = ()  =>  {
  
    // Using the higher order function method to make the redux accept the [async-await]  :  
    return async (dispatch) => {
        
        // [A : First function] of getting all movies by using the redux system ] via => Define the variable of getting the api of the movies data , the  using the imported variable of [url value ]   :   
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


