// This file is the main context file , and contain the following  :
// 1- Create/define  main {Context variable} & {Context function}
// 2- Exporting both Define main {Context variable} & {Context function}

// Import the {createContext} object from the main reactJ library - with the same line of importing code :
import React, { createContext, useState } from "react";

// Define the main  {Context variable} from the imported [createContext] object in React library :
const ColorContext = createContext();

// Define the Context Provider function :
// [with using [children] prop to send the function provider contents into any user functional component will use it  :
// [with using Defined { Context Variable} + it's [Provider] property :
// [with assigning the [Value] property/attribute  of defined {Context variable}  :

// Define the main fucnitonal component :   
const UseContextProvider = ({ children }) => {

    // Define [useState] variable for using it as the value of the context provider function  {value} prop + assingign a default  value 'single value '      :
    const [stateData, setData] = useState('green');

    
    // Define [useState] parent handler function for using it  set the state variable value       :
    const ParentHandler = (color) => {
      setData(color);
    };
    
    return (
      <ColorContext.Provider value={{ stateData , ParentHandler }}>
        {children}
      </ColorContext.Provider>
    );

}

// Exporting both context variable and it's Context provider function :
export { ColorContext, UseContextProvider };

