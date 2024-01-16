// About this file :
    // Define a second Context variable and function provider
    // Using an Abject value of the context Provider Function 's value
    


// Importing the react and createContext object from the main library :
import React, {createContext} from 'react' ;

// Define tha main context variable :
const UseContext2 = createContext() ;
 

// Define the main functional Comonent :    
const ContextProvider2 = ({children}) => {
 
    return (
        <UseContext2.Provider value={{id: '1' , name:'shadi'}}>
            {children}
        </UseContext2.Provider>
    )
}

export {ContextProvider2 , UseContext2} ;