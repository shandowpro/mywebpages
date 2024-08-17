// Content component :

import React   from "react";

 
// importing the  lessons  components 
import Lesson7 from "./Lesson7";
import Lesson56 from "./Lesson56";

const Content = () => {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "Item1"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item2"
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item3"
  //   }
  // ]);

  return (
    <main className="App-header" style={{   margin:'10px'   }}  >
        <h1> Content Component </h1>
        
        <Lesson56 /> 
        <Lesson7 /> 
    </main>
  )
}

export default Content   ;
 