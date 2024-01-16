
// This is the Defined {reducer functional variable} =>
 

// Using {switch} mehtod of the original JS , to assing different actions for the assigned  [state] variable :  
// Each value of each case => represent the reducer , which will nbe called by state handler function => inside the {onClick} of a button  : 
// In Each value of each case => Using {count} property name of [initial object variable] to assign it by a new value based on calculated current value of state :   


// Define the main {reducer functional variable} :
const reducerTest = (state , action) => {

  switch(action.type) {
  
    // Using {count} property name of [initial object variable] to assign it by a new value based on calculated current value of state :   
    case 'increament' :
      return { count: state.count + 1 }

    case 'decreament' :
      return { count: state.count  - 1 }

    // Assign a [0] value incase of using [reset] reducer's value :
    case 'reset' :
      return {  count: 0 }

    // Assign the main value of state [incase of default] :
    default : 
      return {state} 
  } 
}

 
// Exporting the defined  reducer functional Variable : 
export default  reducerTest  ;  



