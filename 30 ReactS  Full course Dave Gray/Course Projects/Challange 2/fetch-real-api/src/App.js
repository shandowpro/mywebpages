/* The main home page of the application , that will include the following components :
  1-  [Form] => include 3 buttons of each categorry of the given api url        
  2-  [List] => include the main list of items [mapped item component  ] to be used as data container     
 
*/




import { useState, useEffect } from 'react';
import Form from './Form.js';
import Table from './Table.js';

// import List from './List.js';

import './App.css';


function App() {

  // Define a variable of  api url to be used to call the desired api url provider   :   
  const URL_API = 'https://jsonplaceholder.typicode.com/';

  // Define a state to set the request type value :     
  const [reqType, setReqType] = useState('users');


  // Define a state of  the array  of items to be called from the api url  : 
  const [items, setItems] = useState([]);

  // Define the useEffect hook to ead the data from the  given api  :

  useEffect(() => {
    const fetchItems = async () => {
      try {

        // Define a varialbe of the connecting with given api url [main api url  + sub api url] :
        const response = await fetch(`${URL_API}${reqType}`);

        // Define a varialbe of getting data from the given api url :
        const data = await response.json();

        // Testing displaying data form the given api   :
        console.log(data);
        
        setItems(data);

      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">

      <Form
        reqType={reqType}
        setReqType={setReqType}
      />

      {/*  <List  items={items}   /> */}  
      <Table  items={items}   /> 

    </div>
  );
}

export default App;
