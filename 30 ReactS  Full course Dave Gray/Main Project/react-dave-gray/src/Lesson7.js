//  lesson7 component  :

import React, { useState } from "react";

const Lesson7 = () => {
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
    }
  ]);

  return (
    <main  style={{  border:'3px white solid' , width: '100%' , margin:'10px' }} >
      <header  style={{fontSize:'50px' , width:'80%' , margin: '5px auto' ,  border:'2px blue solid'   }} > This is the lesson7   </header>


      <ul  style={{ listStyle:'none'  }}   >
        {items.map((item) => (
          <li className="item" id={item.id}>
            <input checked={item.checked} type="checkbox" />

            <label> {item.item} </label>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Lesson7 ;
