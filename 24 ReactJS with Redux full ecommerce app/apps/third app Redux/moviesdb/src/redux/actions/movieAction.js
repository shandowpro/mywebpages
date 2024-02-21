
// This file will contain the action funciton to return of [object] value to be considered as [reducer's state] value  ,  to be returned when it being used inside any element of any component  witin the {dispach} callback function method :
// This file will also use higher order function to obtain the ability to use the redux system  :

// A] Importing section :  
// Import and include the defined value of expression type value from the {moviesTypes.js} , as following  :
    // [moviesType] => will be used  as  the value of the type property  of the retunred object of the the defined {dispatch} function              
    // [moviesApi]  => will be used  as [api url] value of the {axios} method             
    import { moviesType , moviesApi } from '../types/moviesType';

// Importing the { axios }  calss to be used in defining the api url :
    import  axios  from  'axios' ; 
 

// B] Define the first Action method [accoreding to using the {middleware} ] :  
// Define the first action method {getAllMovie} of getting all data of the movies from api , with using the higher order function to make the redux accept the [aync-await]         :   
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

// C] Define the [second Action] method [accoreding to using the {middleware} ]  :  
// Define the second action method {getMovieSearch} of the dynamic searching method  :   
    export  const getMovieSearch = (word)  =>  {
    
        // [A : Second function] of  Getting the dynamic searching result method ] via Using the higher order function method to make the redux accept the [async-await]  =>    
        return async (dispatch) => {
            
            // Define the variable of getting the api of the movies data ,  according to the assinged valu of [search api]   :    
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);

            // Returning the action method's object data using the dispatch :
            // will return the object of each :
                // 1- [type's expression value ] -> as the imported variable of the movie type expression     
                // 2- [data array of the movies to be obained form the api ] ->  by assinging extesssion [data.results]  of  the varaible of axios obtainted value   
                // 3- [page prop] ->   by assinging extesion [data.total_pages]  of  the varaible of axios obtainted value   
            dispatch({
                type: moviesType ,
                data: res.data.results ,
                pages : res.data.total_pages
            })

        }
        
    }


// D] Define the [Third Action] method [accoreding to using the {middleware} ]  :  
// Define the third  action method {} of the getting the currrent page count method  :   
    export  const getPage = (page)  =>  {
    
        // [D : Third function] of     =>    
        return async (dispatch) => {
            
            // Define the variable of getting the api page count prop of the current result ,  according to the dynamic assinged value inside   [api url]   :    
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar&page=${page}`);

            // Returning the action method's object data using the dispatch :
            // will return the object of each :
                // 1- [type's expression value ] -> as the imported variable of the movie type expression     
                // 2- [data array of the movies to be obained form the api ] ->  by assinging extesssion [data.results]  of  the varaible of axios obtainted value   
                // 3- [page prop] ->   by assinging extesion [data.total_pages]  of  the varaible of axios obtainted value   
            dispatch({
                type: moviesType ,
                data: res.data.results ,
                pages : res.data.total_pages
            })

        }
        
    }


