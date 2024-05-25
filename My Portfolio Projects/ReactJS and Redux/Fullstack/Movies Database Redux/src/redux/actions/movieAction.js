
// This file will contain the action funciton to return of [object] value to be considered as [reducer's state] value  ,  to be returned when it being used inside any element of any component  witin the {dispach} callback function method :
// This file will also use higher order function to obtain the ability to use the redux system  :

//  Importing section :  
// Import and include the defined value of expression type value from the {moviesTypes.js} , as following  :
    // [moviesType] => will be used  as  the value of the type property  of the retunred object of the the defined {dispatch} function              
    // [moviesApi]  => will be used  as [api url] value of the {axios} method             
    import { moviesType , moviesApi } from '../types/moviesType';

// Importing the { axios }  calss to be used in defining the api url :
    import  axios  from  'axios' ; 
 

// A] Define the {First Action} method [according to using the {middleware} ] :  
// Define the first action method {getAllMovie} of getting all data of the movies from api , with using the higher order function to make the redux accept the [aync-await] :   
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
// ------------------------------------------------

// B] Define the {Second Action} method [accoreding to using the {middleware} ]  :  
// Define the second action method {getMovieSearch} of the dynamic searching method  :   
    export  const getMovieSearch = (word)  =>  {
    
        // [B : Second function] of  Getting the dynamic searching result method ] via Using the higher order function method to make the redux accept the [async-await]  =>    
        return async (dispatch) => {
            
            // Define the variable of getting the [searched api] of the movies data ,  according to the assinged value of [search api]   :    
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`);

            // Returning the action method's object data using the dispatch :
            // will return the object of each :
                // 1- [type's expression value ] -> as the imported variable of the movie type expression     
                // 2- [data array of the movies to be obained form the api ] ->  by assinging extesssion [data.results]  of  the varaible of axios obtainted value   
                // 3- [pages prop] ->   by assinging extesion [data.total_pages]  of  the variable of axios obtainted value :
                // pages : 500
            dispatch({
                type: moviesType ,
                data: res.data.results ,
                pages : res.data.total_pages
            })
        }
    }   
// ------------------------------------------------

// C] Define the {Third Action} method [according to using the {middleware}] :  
// Define the third action method {getPage} of the getting the current pages count method [acccording to the got parameter of current page value ] :   
    export  const getPage = (page)  =>  {
    
        // [C: Third function] of Getting Total current pages count according to the recevied parameter of the current selceted page value =>    
        return async (dispatch) => {
            
            // Define the variable of getting the api [pages count] prop of the current result ,  according to the dynamic assinged value inside   [api url]   :    
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=893adba5dca668458f2a181bcbd88e02&language=ar&page=${page}`);

            // Returning the action method's object data using the dispatch :
            // will return the object of each :
                // 1- [type's expression value ] -> as the imported variable of the movie type expression :
                    //   Assign the [type] prop key by value of [moviesType] , which will be obtaned from the reducer after recieving this action method their.  

                // 2- [data array of the movies to be obained form the api ] ->  by assinging extesssion [data.results]  of  the varaible of axios obtainted value   
                    // Assign the [data] prop key by value of [res.data.results (which is the whole movies extracted data from given api's data 's {results} paramter )] , which will be obtaned from the reducer after recieving this action method their .  

                // 3- [page prop] ->  by assinging extension [data.total_pages] of the variable of axios obtainted value :
                    //  Assign the [pages] prop key by value of [res.data.total_pages]  (which is the current pages count  extracted  value from given api's data 's {total_pages} paramter) , which will be obtaned from the reducer after recieving this action method their .  
            dispatch({          
                // This prop will be used as the value of expression :  
                type: moviesType ,

                // This prop will be  used  as the value of defined prop {data} inside the Reducer method :      
                data: res.data.results ,
                
                
                // This prop will be used as the vleu of the defined prop {pageCount} inside the Reducer method  :     
                 pages : res.data.total_pages
            })
        }
    }
// ------------------------------------------------ 

