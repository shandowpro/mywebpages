
// This the file will contains the action[function return ] to be used inside any element of any component  witin the {dispach} backfunction  method   :

// This function must import and  include the deinfed value of experssion type value {movieAction.js}
import { moviesType } from '../types/moviesType';

export  const getAllMovies = ()  =>  {

    // will return the object of both [ type's value &  data array of the movies to be obained form the api ] 
    return { type: moviesType  , data:[]  }

}


