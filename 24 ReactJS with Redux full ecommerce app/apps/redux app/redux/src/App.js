
// The main component [App] wiht using Redux system     :    
  // - using both {useSelector  , useDispatch} to access  and send defeined action type's (3) value  to  the {store} and {reducer} , within the onClick() 
  
import React from 'react';

// Importinng the both of the {useSelector} {useDispatch} for :
  //  {useSelector} =>  to accees to the defined {Store} in the current Redux system    
  //  {useDispatch} =>  to  send certain defeindd action type value into the Redux method       
import {useSelector  , useDispatch}  from  'react-redux' ;      

 
function App() {

    // Define the variable of extracted useSelector [of the first defiend reducer method => via prop:Counter]:
    const count = useSelector(state => state.Count.counter)   
   
    // Printing the [count] of returned  value of accessed {store} :
    console.log(count) ;        
    // -------------------------------

    // Define the variable of extracted useSelector [of the secoind  defiend reducer method  ]  :
    const login = useSelector(state => state.Auth.isLog)   
   
    // Printing the [log] of returned  value of accessed {store} :
    console.log(login) ;        

    // Define the just only one  dispatch variable of extracted {useDispatch} for all defiend reducers :
    const dispatchCounter  = useDispatch();      

   return (
    <div className="App">
      <header>
         This is the React-Redux &  Redux  testing applications   
      </header>
     
       
      
        <h1> Button events of : Increament,Decreament,Reset of assigned reducer 'reducerCounter' method : </h1>
        <br></br>
      
        <h2> {count} </h2>
        <button onClick={ ()=> dispatchCounter( {type:'INCREMENT'} ) } > Increament </button>      
        <button onClick={ ()=> dispatchCounter( {type:'DECREMENT'} ) } > Decreament </button>      
        <button onClick={ ()=> dispatchCounter( {type:'RESET'} ) } > RESET </button>      
        <br></br>


        <h1> Buttons events of : login & logoff of assigned reducer method  'reducerAuth' method : </h1>
        <br></br>
      
        {login === true?  <h1>  You are Login  </h1>  : <h1> You are logoff   </h1> } 
        
        <button onClick={ ()=> dispatchCounter( {type:'Login'} ) } > Click to Login  </button>      
        <button onClick={ ()=> dispatchCounter( {type:'notLogin'} ) } > Click to Logoff </button>      
         
    </div>
  );
}

export default App;
 