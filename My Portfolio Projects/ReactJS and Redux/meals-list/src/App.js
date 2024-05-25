//  This is the main [App.js] file, and include the following :   
  // Children components : 
  // 1- {Header} 
  // 2- {NavBar} => life searching of the displayed menu list items   -> by using a functional prop sent to the  [NavBar/] component    
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

 
  // Define the metod of filteration by onClick event of each [category Bar buttons] => { Searching by categories buttons } :
  const filterByCategory =  (cat) => {
    
    // make a condtion according to recieved category param's value : 
    if( cat === 'الكل') {
      // Assinging the whole datasorurce array inside the state variable [incase the came value of parameter is 'الكل' ] :   
      setStateData(items);
    
    } else {
      // Define a new datasorce array of filtered items [full item]  according to the value of category came from the looped category property value :   
      const  newArr = items.filter((item) => item.category === cat);
      
      // Assinging the filtered datasorurce array elements inside the state variable [incase the came value of parameter not equal ['الكل'] ] :   
      setStateData(newArr);
    }
  }
  

  // Define the method of filteration by inserted input values of search box input + with using [parameter of came value of searching input ]  => {Searching by input search box } :
  const filterBySearch =  (word) => {
    // Start the filter by searching function just in case of the come value of parameter [which represent the searching input] is NOT empty  : 
    if( word !== '') {
      // define A new array of value of => filtered items of main datasource array  => according to the filteration condition of [it's item's name property value when equal to the inserted inside the input searching box ]  :
      const  newArr = items.filter((item) => item.name === word);    
      
      // Assinging the new Array [of filtered main datasource arary items - which it's name property is equal to inserted value in the input insert box- ] => in order to set it as the usestate variable => which is used for mapped insde the datasource variable :
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
