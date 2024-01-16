// Using useMemo and {useState} as one of it's dependency :

// Importing {useMemo}  & {useState} from the main reactJS library :
import React, { useState, useMemo } from "react";


// Define the main functional component :
const UseMemoFunc = () => {
    
    // a] {useState} Definition :
        // Define the {useState} variable :
        const [counter, setcounter] = useState(0);
        
        const counterHandler = () => {
        setcounter(counter + 1);
          console.log("The new counter value =  " + counter);
        };
    //---------------------------------------------

    // b] {useMemo} Definition :
        // Define the {useMemo} functional variable + using the defined useState var as memo depenedency:
        const memoVar = useMemo(() => {
            // Define a Random color generating variable [to use it as the be value of[ color style property] of the retured element   ]  :
            const randColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
            
        // Memo functional variable's Return [will bve displayed -> incase of the condition/dependency = true ] :
        return (
            <div style={{ color: randColor }}>
                <p>This current value of counter = {counter}</p>
            </div>
        )}, [counter]);
    //--------------------------------------------- 
 

  return (
    <div>
      <label>
        this is the current value of memo var 'will be changed in casse of the
        defind state is changed '
      </label>

      {memoVar}

      <button onClick={counterHandler}>Click to + 1</button>
    </div>
  );
};

export default UseMemoFunc;
