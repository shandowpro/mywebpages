
// The main component [App] wiht using Redux system     :    
    
import React from 'react';
import {useSelector  , useDispatch}  from  'react-redux' ;      

 
function App() {

    // Define the variable of extracted useSelector  :
    const data = useSelector(state => state.counter)   
   
    // Printing the [data] of returned  value of accessed {store} :
    console.log(data) ;        

    // Define the dispatch varialbe of extracted {useDispatch} :
    const dispatchCounter  = useDispatch();      

   return (
    <div className="App">
      <header>
         This is the React-Redux &  Redux  testing applications   
      </header>

      <div>
      
        <h1>  Button events of : Increament,Decreament,Reset of assigned reducer method : </h1>
        <br></br>
      
        <h2> {data} </h2>
        
         
        <button onClick={ ()=> dispatchCounter( {type:'INCREMENT'} ) } > Increament </button>      
        <button onClick={ ()=> dispatchCounter( {type:'DECREMENT'} ) } > Decreament </button>      
        <button onClick={ ()=> dispatchCounter( {type:'RESET'} ) } > RESET </button>      
      </div>
 
    </div>
  );
}

export default App;
 