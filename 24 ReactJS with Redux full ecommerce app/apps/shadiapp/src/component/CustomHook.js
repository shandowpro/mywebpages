// This is the main funcational component that using and calling he deifned custom hook function :

// const [shadi] = FetchData('https://jsonplaceholder.typicode.com/todos') ;

// importing the defined customn hook :
import React, { useState, useEffect, Fragment } from "react";
// import FetchData from "../customHooks/FetchData";


const useCustomHook = () => {

  // define the object to simulate the api   data: 
  const data1 = [
    { id: "1", title: "title1", decs: "Description1"  },
    { id: "2", title: "title2", decs: "Description2"  },
    { id: "3", title: "title3", decs: "Description3"  },
  ];

   
  // define the state array variable to use it  in reciecing the data of Api :
  const [state, setState] = useState([]);

 // define the useEffect to assgin the procdcures of [fetching data + dispalying it by using then with the defined state ] 
  useEffect(() => {
    fetch( data1)
      .then(res => res.json)
      .then(datas => setState(datas))
    }, []);

  
  
  // return a maped data of {recieved custom hook} variable  :

  return (
    <div>
      {console.log(state)}
      {state.map((item) => {
        return (
          <Fragment>  
              <h1>{item.title}</h1>
              <h1>{item.name }</h1>
          </Fragment> 
        ) 
      })}
    </div>
  );
};

export default useCustomHook;



// const FetchData = () => {
//   // define the state with initial value of empty array    :
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((res) => res.json())
//       .then(datas => setState(datas))
//     }, []);

//   return [state] ;
// }



 // define an Array of recieved custom hook export array data :
//  const [shadi] = FetchData("https://jsonplaceholder.typicode.com/todos");

 