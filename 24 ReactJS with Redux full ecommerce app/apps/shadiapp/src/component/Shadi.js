import React , {useState} from "react";
import { Button  } from "react-bootstrap";
// import { Link } from "react-router-dom";  

const Shadi = () => {
  // Define/extract the main useState variable [wiht using numeric intial value of (0) ] :   
  const [ count, setCount ] = useState(0) ;
  
  // Define a container function to using the defined useState handler function and variable => [to set an Increasing +1  task]    :
  const increasing= () => {
    setCount(  count + 1  ) ;
  }
  
  // Define a container function to using the defined useState handler function and variable => [to set an Decreasing -1  task]    :
  const decreasing= () => {
    setCount(  count - 1  ) ;
  }
  
  // Define/extract the main useState variable [with using empty texual intial value of ('') ] :   
  const [ text, setText ] = useState('') ;
  
  const liveDisp = (e) => {
    setText(e.target.value)  ; 
  }
  
  return (
    <div>
      Hello from the shadi apps page
      
      <h1> Welcome to application of increasing & decreasing  by using 'button' and it's 'onClick' event & 'useState'     </h1>
      <Button onClick={increasing} > +  </Button>
      <Button onClick={decreasing} > -  </Button>
      <label>  The current count value  = {count} </label> 
 


      <h1> Welcome to application of 'live text displaying' by using 'input' & 'label'  and it's 'onChange' event & 'useState'  </h1>
      
      <label> This input will be changed by using 'an inner calling of defined state handler function'   </label>
      <input type='text' onChange={(e) => setText(e.target.value)} /> 
      
      <label> This input will be changed by 'using  the defined container function of handler state varaible'  </label>
      <input type='text' onChange={liveDisp} /> 
      
      
      
      <label> This input will display the live changed value inserting input   </label>
      <input type='text' value={text} /> 
      
      <textArea placeholder='This element will get the live value of input value '> {text} </textArea> 
 
    </div>
  );
};

export default Shadi;

// </Link>
// <Link to="/Shadi">

// <a href="/Shadi"> go to shadi</a>
// <Link to ="/about" > go About  </Link> 
    // <Button> Home </Button>