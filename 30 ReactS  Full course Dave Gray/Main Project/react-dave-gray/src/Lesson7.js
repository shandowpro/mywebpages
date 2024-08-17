//  lesson7  , lesson8    component  :

import React, { useState } from "react";

// importing the icons :
import { FaTrashAlt } from "react-icons/fa";

const Lesson7 = () => {
  // Define state of the items to be used as input elements itmes inside the JSX :
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "Item1",
    },
    {
      id: 2,
      checked: false,
      item: "Item2",
    },
    {
      id: 3,
      checked: false,
      item: "Item3",
    },
  ]);

  // Define Handling click function to handle the cliked input [more dynamically] :
  const handleClick = (id) => {
    const listItems = items.map( (item) => 
      item.id === id ?
     {...item , checked: !item.checked} : item 
    );
    
    setItems(listItems) ;
    
    localStorage.setItem( 'Shoppinglist' , JSON.stringify(listItems) );
  }


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

      <ul style={{ listStyle: "none" }}>
        {items.map((item) => (
          <li className="item" id={item.id}>
          <input 
          checked={item.checked} 
          type="checkbox"
          onChange={ () => handleClick(item.id)}
          />
          <label  style ={{ color: 'blue'  }}  > {item.item} </label>
          <FaTrashAlt
            role="button"
              tabIndex="0"
            />
            
            </li>
          ))}
          </ul>
    </main>
  );
};

export default Lesson7;
