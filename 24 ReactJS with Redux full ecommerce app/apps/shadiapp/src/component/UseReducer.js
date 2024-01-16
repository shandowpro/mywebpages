
// This is a main Functional component file that contains  [{useReducer} functional variable]  + an imported defined [defined  reducer variable ] :

// a] Importing section:  
    // importing the main {useReducer} object from the main 'react'  library:       
    import React , { useReducer } from "react";

    // importing the defined {reducer functional variable}  from the reducer directory / file   :
    import reducerTest from "../reducer/TestReducer";
// ------------------------------------------------------------- 

// b] Before the functional component :
    // Define the initial object variable :
    const initialVar = {
        count : 0
    } 

    // Define the main {reducer functional variable} -> [we have  imported instead ] :
    // const reducerTest = (state , action) => {

    //     switch(action.type) {
        
    //       // Using {count} property name of [initial object variable] to assign it by a new value based on calculated current value of state :   
    //       case 'increament' :
    //         return { count: state.count + 1 }
    
    //       case 'decreament' :
    //         return { count: state.count  - 1 }
    
    //       // Assign a [0] value incase of using [reset] reducer's value :
    //       case 'reset' :
    //         return {  count: 0 }
    
    //       // Assign the main value of state [incase of default] :
    //       default : 
    //         return {state} 
    //     } 
    //   }
// ------------------------------------

// c] Define the main functional component :       
  const  UseReducerFunc = () => {

    // Define the main {useReducer} functional variable => [using the imported {[reducer] functional component} & {defiend iniitial value  variable}   ] => { must be defiend before teh main component } : 
    const [state, dispatch] = useReducer(reducerTest , initialVar ) ;
     
     return (
       <div>
             <h3> This is the application of 'increament / decreament / reset ' of a certain defeind state using defeind reducer through using 'useReducer'    </h3>

             <label>
                 The current value of the state ' assinged useReducer '  =
             </label>
             {state.count}
             <br></br>

             <button onClick={() => dispatch({ type: 'increament' })}>
                 +
             </button>

              
             <button onClick={() => dispatch({ type: 'decreament' })}>
                 -
             </button>

              
             <button onClick={() => dispatch({ type: 'reset' })}>
                 Reset
             </button>
 
      </div>

  )
}
 
export default UseReducerFunc;


