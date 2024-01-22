//  This is the main [App.js] file, and include the following :   
  // Children components : 
  // 1- {Header} 
  // 2- {NavBar} => life searching of the displayed menu list items  
  // 3- {Category} => using recieved fitering method from the [app.js] with prop value to be filterd upon it + dynamic buttons values  
  // 4- {ItemsList} => to be repeated by using  [map()]
   
  
import React, {useState} from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Category  from './components/Category';
import ItemsList  from './components/ItemsList';
import { Container } from "react-bootstrap";
import { items } from "./data";

function App() {

  // Define a usestate variable to store the imported datasource inside it:
  const [stateData, setStateData] = useState(items);

  // Define a new Array of unique categories -> [to be used as dynamic values of buttons] -> by using {...net Set()} + {mapping the imported datasource varialbe  } :
  const allCats = ['الكل' , ...new Set( items.map( (i) => i.category) ) ] ;

 
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
  

  // Define the metod of filteration by inserging input values of search box input :
  const filterBySearch =  (word) => {
    // Start the filter by searching function just in case of the come value of parameter [which represent the searching input] is NOT empty  : 
    if( word !== '') {
      const  newArr = items.filter((item) => item.name === word);    
      setStateData(newArr);     
    }  
  }

  return (
    <div className="color-body font">
      
      <NavBar filterBySearch={filterBySearch} />

      <Container>
          <Header/>
          <Category filterByCategory= {filterByCategory}  allCats={allCats}  />
          <ItemsList stateData={stateData}/>
      </Container>
    </div>
  );
}

export default App;
