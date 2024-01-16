
import React, {useRef} from 'react' ;
 
import {ColorContext} from './component/UseContext';

const UseRefExps = () => {
    
    // Define the main  useRef varible :  
    const elem = useRef(null);
    
    // Define/extract the new custom context variable using the recieved object of the defined useState [state variable only + (without parent handler) ]    :  
    //  const{stateData} = useContext(ColorContext) ;
   
    // Define/extract the new custom context variable using the recieved object of the defined useState both [state variable + parent handler] :  
    const {stateData , ParentHandler} = useContext(ColorContext) ;
  
    // Define/extract the new custom context variable using the recieved object of the defined useState [(without state variable) + only parent handler ] :  
    // const {ParentHandler} = useContext(ColorContext) ;
    
    // Define a function to be used by onClick button , to access the  useRef  variaable :  
    const elemFocus = () => {
      // implement a focus function to the element using this method:
      elem.current.focus();
      
      // print the overall element that  using this method:
      console.log(elem.current) ;
      alert(elem.current) ;
      
      // print the element's value that  using this method:
      console.log(elem.current.value) ;
      alert(elem.current.value) ;

      // Assign context value using by Recieved  the Inserted value of the Input element   :
      ParentHandler(elem.current.value) ; 
    }

    // {ParentHandler('red')}
    
    return (
      <div> 
    
        <label> The current value of context is {stateData} </label>     
        
        <label> Insert a new value of the context value </label>     
        
        <input type="text"  ref={elem}  />
        
        <label> Click to activate the Function of : Focus on Input element & print its value + assign the input's inserted value as context's Parameter value </label>     
        
        <button onClick={elemFocus} > Click to Activate the Funciton 'focus and assign the new context value' </button>     
      
      </div>
  )
}



export default UseRefExps  ;  