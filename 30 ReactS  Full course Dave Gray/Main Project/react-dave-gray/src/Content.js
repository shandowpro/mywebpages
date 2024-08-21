/* Content component , including  :
  Importing components :  
    1- {Lesson56} =>  including default props [ Not assigned props]    
    2- {Lesson78} => 
      -- including default assigned props       
      -- including defined array of objects prop [ items  ]      
      -- including defined  (2) functions props [ handleClick + handleDelete]      


    3- {Lesson9} =>  including :
      --default props [ overriding Assigning one prop & and Not assigned the other ] 
      -- prop to be assinged by defined variable extention       
*/

import React, { useState } from "react";

// importing the  lessons components :
import Lesson7 from "./Lesson7";
import Lesson56 from "./Lesson56";
import Lesson9 from "./Lesson9";
import ColorChangerApp from "./ColorChangerApp";

const Content = () => {
  // const count = items.length ;

  // a- Define state of the main list items to be used as main [datasource]  as a dynamic data from the localStorage (instead of using static array ) :
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  // define a state variable for  search fuctionality  :
  const [search, setSearch] = useState("");
  // -------------------------------------------

  // d-  Define a state variable to be used for storing the new item as paramter of  [identical pattern of each function -  which will be used with both of [handleClick] & [handleDelete]     -] :
  const [newItem, setNewItem] = useState("");
  // ------------------------------------------------------------------

  // Define a identical pattern of each function to be used inside both   [handleClick , deleteClick]  :
  const setAndSaveItems = (newItems) => {
    // Setting the value of the paramter inside the dataSource state  itemslist  array using its setter function :
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  // b- [Switching Clicking of item list ] =>  Define Handling click function to handle the clicked input [more dynamically] :
  const handleClick = (id) => {
    // 1- Define a variable  (of the  mapped items) form the given array after modifying the checked state :
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // calling idetcial function by using the (listItems) parameter  :
    setAndSaveItems(listItems);
  };
  // ------------------------------------------------------------

  // c- [Deletion funtion of the items inside items list ] => Define the function of deleting the item from the list   :
  const handleDelete = (id) => {
    // 1- Creating a new array of item - of non selected items - to be stored as new array of  items :
    const listItems = items.filter((item) => item.id !== id);

    // calling idetcial function by using the (listItems) parameter  :
    setAndSaveItems(listItems);
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

    //  Calling the identical function for using it's identical procedures by using its  parameter of by [listItems] :
    setAndSaveItems(listItems);
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
