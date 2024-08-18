/* Content component , including  :
  Importing components :  
    1- {Lesson56} =>  including default props [ Not assigned props]    
    2- {Lesson78} => 
      -- including default props [ Not assigned props]      
      -- including defined array of objects prop [ items  ]      
      -- including defined  (2) functions props [ handleClick + handleDelete]      
    3- {Lesson9} =>  including :
      --default props [ overriding Assigning one prop & and Not assigned the other ] 
      -- prop to be assinged by defined variable extention       
*/

import React  , {useState} from "react";

 
// importing the  lessons components :
import Lesson7 from "./Lesson7";
import Lesson56 from "./Lesson56";
import Lesson9 from "./Lesson9";

const Content = ( ) => {

  // a- Define state of the items to be used as input elements items inside the JSX :
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


  // const count = items.length ;

  // b- [Switching Clicking of item list ] =>  Define Handling click function to handle the clicked input [more dynamically] :

  const handleClick = (id) => {
    // 1- Define a variable  (of the  mapped items) form the given array after modifying the checked state :
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // 2- Adding the defined variable [after modifications] to the main rendered  array -> using the state setter function :
    setItems(listItems);

    // 3- Adding the defined  variable [after moidifications] to the local stortage to be stored in the web browser :
    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));
  };
  // ------------------------------------------------------------

  // c- [Deletion funtion of the items inside items list ] => Define the function of deleting the item from the list   :
  const handleDelete = (id) => {
    //  1- Creating a new array of item - of non selected items - to be stored as new array of  items :
    const listItems = items.filter((item) => item.id !== id);

    //  2- Adding the defined variable of new array [after filteration] to the main rendered  array  -> using the state setter function :
    setItems(listItems);

    // 3- Adding the defined  variable [after moidifications] to the local stortage to be stored in the web browser :
    localStorage.setItem("Shoppinglist", JSON.stringify(listItems));
  };
  // ----------------------------------------------------------------
  
   
  return (

    <main className="App-header" style={{   margin:'10px'   }}  >
        <h1> Content Component </h1>
        
        <Lesson56 /> 
        
        <Lesson7    
          subTitle='Listing and keys'
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}   
        /> 
        
        <Lesson9  title='Lesson9'  subTitle=' Props and Props drilling' count={items.length}  /> 
         
    </main>
  )
}

export default Content  ;
 