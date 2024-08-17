//  lesson7  , lesson8    component  :

import React, { useState } from "react";

// importing the icons :
import { FaTrashAlt } from "react-icons/fa";

const Lesson7 = () => {
  // a- Define state of the items to be used as input elements items inside the JSX :
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "Item1",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item2",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item3",
  //   },
  // ]);

  
  const [items, setItems] = useState([]);



  // b- [Switching Clicking of item list ] =>  Define Handling click function to handle the clicked input [more dynamically] :
  const handleClick = (id) => {
    // 1- Define a variable  (of the  mapped items) form the given array after modifying the checked state :
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // 2- Adding the defined variable [after modifications] to the main rendered  array  :
    setItems(listItems);

    // 3- Adding the defined  variable [after moidifications] to the local stortage to be stored in the web browser :
    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));
  };
  // ------------------------------------------------------------
  
  // c- [Deletion funtion of the items inside items list ] => Define the function of deleting the item from the list   :
  const handleDelete = (id) => {

    // Creating a new array of item - of non selected items - to be stored as new array of  items :
    const listItems = items.filter((item) => item.id !== id);

    // Adding the defined variable of new array [after modifications] to the main rendered  array  :
    setItems(listItems);

    // Adding the defined  variable [after moidifications] to the local stortage to be stored in the web browser :
    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main style={{ border: "3px white solid", width: "100%", margin: "10px" }}>
      <header
        style={{
          fontSize: "50px",
          width: "80%",
          margin: "5px auto",
          border: "2px blue solid",
        }}
      >
        This is the lesson7
      </header>
           
      {
        items.length ? (
          <ul style={{ listStyle: "none" }}>
            {items.map((item) => (
              <li className="item" id={item.id}>
                <input
                  checked={item.checked}
                  type="checkbox"
                  onChange={() => handleClick(item.id)}
                />
                <label 
                  style={{ color: "blue" }}
                  onDoubleClick={() => handleClick(item.id) }   
                > 
                  {item.item} 
                </label>
                
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />
    
              </li>
            ))}
          </ul>
 
        ) : (
          <p  style={{color: 'red' }} >  Sorry the list is empty  </p> 
        )   
      }
    </main>
  );
};

export default Lesson7;
