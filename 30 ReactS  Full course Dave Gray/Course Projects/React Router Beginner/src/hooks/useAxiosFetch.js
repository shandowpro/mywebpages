
// The custom hook function of the [useAxiosFetch] ,   responsible for the next procedures :
/*    
    1-  handling fetching data from  api using [axios] library , wiht (3) main states resulted  :
      -- [data , setData]              => state of returning data from the  given api       
      -- [fetchError , setFetchError ] => state of returning error  from the  given api   
      -- [isLoading   , setIsLoading ] => state of while loading  data from the given api   
*/

// a] main required  importings  :
import {useState , useEffect} from  'react' ; 
import  axios from  'axios' ;


// b] main function of custom hook with reiceving parameter  of  (dataUrl) , wiht using this paramter as hte inner useEffect depnedeicy   : 
const useAxiosFetch = (dataUrl) => {

  //  b/1] Define the main api varaibles states [3 main probable states]  :  
    //  (a) state of returned data as an empty array :
     const [ data ,  setData ]  = useState([]);

    // (b) state of catched error : 
    const [fetchError , setFetchError ] = useState(null) ;

    // (c) state of is loading state :
    const [isLoading   , setIsLoading ]  =  useState(false);

 
  // b/2]  Define the main useEffect function :
  useEffect(()=>{
    // b/2/1] Define a checking variable [based on the true ]  => as sign of the rendering (entering the useEffect) :      
    const isMounted = true ;    
    
    // b/2/2]  Define a variable of api token source after cancellation current value :
    const  source =  axios.CancelToken.source();       
 
    //  b/2/3]  Define the main function of fetching data form the api , asccordin   to the gotten parameter of the main custopm hook function   : 
    const fetchData = async  (url) => {
  
      //   Assign the {isLoading} state by the [true] value (to activate  this state as the current state  )   :    
      setIsLoading(true) ;
      
      try{
        // (a) Define a response of fetched data from given api url as a reicevned paramtner form the main cutsom hook function : 
        const response = await axios.get(url,{ 
            cancelToken : source.token   
        }) ;
  
        //  (b) assign the value of the [data] state in case of the [isMounted] is true      :  
        if (isMounted )  {
            setData(response.data);
            setFetchError(null);
        }

      } catch(err) {
        // using the condition check to getting steps of the catching  error   :  
         if (isMounted) {
           // (a)    Assign value of the [fetchError] state  in case of  catching error : 
             setFetchError(err.message) ;
           
           // (b) Setting the value of  [data] state  by empty array  : 
           setData([]) ; 
         }

      }  finally {
          //  [after fetching] Resetting the [inLoading] by  the 'false' again - witin (2  seconds for testing ) - with condintal rendering of the  [inMounted]  :
          isMounted && isLoading(false);
      }
  
    }   

    //  b/2/3] calling the upper defined fetching  function of {fetchData}  with assgning the main recieved parameter of the main custom hook {dataUrl} to  pass it thorugh   :   
    fetchData(dataUrl) ; 
    
    
    //  b/2/4]  cancelling the  token api using  a clean up  function :   
    const cleanUp = () => {
      
    // ReSetting the check variable by 'false'    :
    const isMounted = false  ;    
      
    // Cancelling the source token : 
    source.cancel() ;
 
  }

   // Returning the upper defined clean up fuction {cleanUp} inside  the  useEffect call back  function    :
    cleanUp() ;  

  } , [dataUrl]) 
    
  //  Main return of  custom hook function as {object  of all defined states } : 
   return  {  data  , fetchError , isLoading }

}


// c] Export the main custom hook function :
export default useAxiosFetch ; 





