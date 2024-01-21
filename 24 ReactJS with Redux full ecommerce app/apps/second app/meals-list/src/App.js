//  This is the main [App.js] file, and include the following :   
  // Children components : 
  // 1- {Header} 
  // 2- {NavBar} =>  
  // 3- {Category} => using recieved fitering method from the [app.js] with prop value to be filterd upon it   
  // 4- {ItemsList} => to be repeated by using  [map()]
   
  
  
import React, {useState} from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category  from './components/Category';
import ItemsList  from './components/ItemsList';
import { Container } from "react-bootstrap";
import { items } from "./data";

function App() {

  // Define a usestate variable to sotre the imported datasource inside it:
  const [stateData, setStateData] = useState(items);

  // Define the metod of filteration by onClick event of each button :
  const filterByCategory =  (cat) => {
    
    // make a condtion according to recived category param's value : 
    if( cat === 'الكل') {
      setStateData(items);
    
    } else {
      // define a new datasorce array filtered according to the value of category of the looped category property value :   
      const  newArr = items.filter((item) => item.category === cat);
      
      setStateData(newArr);
    }
  }

  return (
    <div className="color-body font">
      
      <NavBar />

      <Container>
          <Header/>
          <Category filterByCategory= {filterByCategory} />
          <ItemsList stateData={stateData}/>
 
      </Container>
    </div>
  );
}

export default App;
