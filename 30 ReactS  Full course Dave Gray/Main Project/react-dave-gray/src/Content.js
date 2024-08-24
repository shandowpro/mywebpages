/* Content component , including  :
  Importing components :  
    1- {Lesson56} =>  including default props [ Not assigned props]    
    2- {Lesson78} => 
      -- including default assigned props       
      -- including defined array of objects prop [ items  ]      
      -- including defined  (2) functions props [ handleClick + handleDelete]      


    3- {Lesson9}  including =>   :
      --default props [ overriding Assigning one prop & and Not assigned the other ] 
      -- prop to be assinged by defined variable extention       

    4-  {ColorChangerApp} including   => 
      -- inner children components [Square , Input ]


*/

import React, { useState, useEffect } from "react";

// Importing the  lessons components :
import Lesson7 from "./Lesson7";
import Lesson56 from "./Lesson56";
import Lesson9 from "./Lesson9";
import ColorChangerApp from "./ColorChangerApp";

const Content = () => {
  //  Define a varible of the [API url] to deal with it using [fetch()]  :
  const API_URL = "http://localhost:3500/items";

  // a- Define state of the main list items to be used as main [datasource] OR an empty array {when teh localstorage array is being deleted by the user or for the firt visitor   }  as a dynamic data from the localStorage (instead of using static array ) :
  const [items, setItems] = useState([]);
  // JSON.parse(localStorage.getItem("shoppinglist")) ||

  // b- Define a new state variable of the fetched error :
  const [fetchError, setFetchError] = useState(null);

  // c- Define a new state variable of isLoading message  :
  const [isLoading , setIsLoading] = useState(true);

  // d- Define a state variable for  search fuctionality  :
  const [search, setSearch] = useState("");
  // -------------------------------------------

  // e-  Define a state variable to be used for storing the new item as paramter inside each functions [  [handleClick] & [handleDelete]   -] :
  const [newItem, setNewItem] = useState("");
  // ------------------------------------------------------------------

  // b- Define useEffect function to be used in executing codes for the first loading only []  ->   :
  useEffect(() => {
    // Define a fuction of fetching for data from given api => [to be used only for the first load ]   :
    const fetchItems = async () => {
      try {
        // 1- Define a variable of awaited fetching from the assinged given [ API_URL] :
        const response = await fetch(API_URL);

        // 2- Checking if there are an error of fetching response [error of not getting data] -> before the reciving data inside the [listItems]  => this code will be executed not the [catch error] :
        if (!response.ok) throw Error("Did not receive expected data ");

        // Define a variable of the responsed data after converting into  a json format           :
        const listItems = await response.json();

        // Setting the obtained json data into the defiend state variable [usgin the setter function ]    :
        setItems(listItems);

        // test printing of the obtainwed data from api json server  :
        // console.log(listItems);

        // Handling the custom error message using the defined error state [setFetchError()] to set 'null' value instead of the Current  obtained :
        setFetchError(null);
      } catch (err) {
        //  Printing the error stack [this error will not be dispalehed due to not reached the defined response of data ] :
        // console.log(err.stack) ;
        setFetchError(err.message);
      } finally {
        setIsLoading(false) ;
      } 
    };

    // Call the defined previous function of [fetchItems()] directly =>  to be called inside the {useEffect} hook => calling the async [fetchItmes] insde the {setTimer()}  to simulate the slow  loading api and show the loading message :
    setTimeout(()=> {
      (async () => await fetchItems())();
    }, 3000 )

  }, []);

  // b- Define useEffect function to be used in executing codes for the first only of [(saving for the first time) the defined state [items] after being changed into the  local storage ] according to the dependency  of {items}  ->   :
  // useEffect(()=> {
  //   // Adding the new value of the [items] list into the local storage of browser each time the itmes is being  changed :
  //   localStorage.setItem("shoppinglist", JSON.stringify(items));
  // } , [items] )

  //  ---------------------------------------


  // Define a identical pattern of each function to be used inside both   [handleClick , deleteClick]  :
  // const setAndSaveItems = (newItems) => {
  // Setting the value of the paramter inside the dataSource state  itemslist  array using its setter function :
  // setItems(newItems);
  // localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  // };

  // b- [Switching Clicking of item list ] =>  Define Handling click function to handle the clicked input [more dynamically] :
  const handleClick = (id) => {
    // 1- Define a variable  (of the  mapped items) form the given array after modifying the checked state :
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // Adding the new value of the  [list items] into the defined  state of [items] after being updated (change checked property after checking an input ) :
    setItems(listItems);
  };
  // ------------------------------------------------------------

  // c- [Deletion funtion of the items inside items list ] => Define the function of deleting the item from the list   :
  const handleDelete = (id) => {
    // 1- Creating a new array of item - of non selected items - to be stored as new array of  items :
    const listItems = items.filter((item) => item.id !== id);

    // Adding the new value of the  [list items] into the defined state of [items] after being updated ( remove an input form the list  ) :
    setItems(listItems);

    // calling idetcial function by using the (listItems) parameter  :
    // setAndSaveItems(listItems);
  };
  // ----------------------------------------------------------------

  // Define a function of adding the new item id to modified items list object accroding to it :
  const addItem = (item) => {
    // Getting the new item id with increament (or by  (1) if the list is  emtpy ) [according to index , after checking of the existance of the main items] :
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    // Define a temporory variable of the new item , and set it's parameters values :
    const myNewItem = { id, checked: false, item };

    // Define a temprory array of Adding the previous defind new item element [myNewItem] , to the current array (with spreaing  opperator) state of [itemslist] :
    const listItems = [...items, myNewItem];

    setItems(listItems);

    //  Calling the identical function for using it's identical procedures by using its  parameter of by [listItems] :
    // setAndSaveItems(listItems);
  };
  //    ---------------------------------------

  //  e- [Handling Function of Submiting the {newItem : which the paramter that had been used inside the indentical function and stored by new array of the itemslist of either {handleClick} || {handleDelete}      }      ] :
  const handleSubmit = (e) => {
    //  stop the default procedureas of the handling form of [reloading] to provide the next steps   :
    e.preventDefault();

    // return the default procedure incase of existed new item value :
    if (!newItem) return;

    // Calling the defined function of [addItem()] with using its parameter by {(newItem) : which the value of the new item array - after handling click or delete }  :
    addItem(newItem);

    // setting empty value of the new item after procesing the previous steps :
    setNewItem("");
  };
  //   -------------------------------------------
  
  return (
    <main className="App-header" style={{ margin: "10px" }}>
    <h1> Content Component </h1>
      <Lesson56 />
      { 
        fetchError ? (
          <p style={{ color:"red"}}> {`Lesson789: Error: ${fetchError}` } </p>
        ) : ( isLoading ? ( <p style={{ color:"green" , fontSize:'30px' }}  > Loading data...  </p> ) : (
          <Lesson7
            title="Listing and keys"
            subTitle="Listing and keys"
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            newItem={newItem}
            setItems={setItems}
            setNewItem={setNewItem}
            handleClick={handleClick}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            search={search}
            setSearch={setSearch}
          />
          )
        )   
      } 

      <Lesson9
        title="Lesson9"
        subTitle=" Props and Props drilling"
        count={items.length}
      />

      <ColorChangerApp />
    </main>
  );
};

export default Content;
