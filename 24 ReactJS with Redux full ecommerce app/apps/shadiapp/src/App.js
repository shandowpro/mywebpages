// --> This is main App file [App component] :
// 1- Sending/passiing a function with parameter into the child component {with using the totall [props] object }

// 2- Sending/passiing a function with parameter into the child component {with using the Destructured [props] }

// 3- Sending/passiing a function with parameter into the child component {with using the Destructured [props] + childrern }

// 4- using conditional operator to :
// {true} => display the [CardDetails] component
// {false} => display the [NotFound] component
// Type of conditions used => [if the data varaible is existed {data.length?}] & [if a value of boolean varaible is true]

// 5- calling a defined Form , including the following :
// a- events => [onClick() for input form ] &  [onChange() for Form submit button]
// b- handler controler =>  using with [user input handler function]

// 6- Define multiple routers [2] pages and call them in the [App.js] with using the imported {react-router-dom}, including hte following pages routers , except [2] fixed components {NavBar & Footer )  } :
// a- NavBar     => [fixed component]
// b- About      => [Router component]
// c- Content    => [Router component]
// d- Footer     => [Router component]
// e- FormInput  => [fixed component]

// 7- Define another (2) Pages Routers , and Adding them into the Routers list in the [App.js] main page , with using different method to call :
// a- Home       =>  [Router Component : incase of using only the '/' in the url ]
// b- Error404   =>  [Router Component : incase of using wronge or unexisted url  ]


// 8- Calling the [defined context variable] from the imported context file {UseContext} , by using the procedures  : 
  // a- importing the main original defined coext from the main context file  
  // b- importing {UseContext}  object to able to extracting a new context variable 
  // c- Define a {new custom context variable} from the main {imported original context variable} => inside the main functional component   

// 9- Calling a {useMemo} application of [changing the color of label + increase the defiend counter by using the state ] by click on button

// 10- calling  a useReducer method from functional  commponent that imported a seperrtated reducer variable  from a sepertarted file , to implemejnt the following app  :
// controling of a count value by using several buttons calling several experssions from the defined reducer functional varaible , by [3] expressions => [increament , decreament , reset]       
 
// ------------------------------------------------

// Importing the React required libraries :
import React , {useRef , useContext } from "react";
import { Fragment } from "react";

// Importing the [reactJS bootstrap] library link :
import "bootstrap/dist/css/bootstrap.min.css";

//importing the images pathes :
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

// Importing the [reactJS router] library link and all it's objects :
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";

// importing the children components -=> to insert them inside this component :
import NavBar from "./component/NavBar.js";
import CardDetails from "./component/CardDetails.js";
import NotFound from "./component/NotFound.js";
import FormInput from "./component/FormInput.js";
import About from "./component/About.js";
import Content from "./component/Content.js";
import Footer from "./component/Footer.js";
import Error404 from "./component/Error404.js";
import Home from "./component/Home.js";
 
import UseEffectExp from "./component/UseEffectExp";

import UseMemoFunc from "./component/UseMemo.js";

import UseReducerFunc from "./component/UseReducer.js"; 

// Importing {useContext} objecty from the main 'react' library => to able to use the imported {Context Variable}  :
// import {useRef , useContext } from "react";

// Import the original defined and exported {Context Variable : ColorContext} from {useContext} file : 
import {ColorContext}  from './component/UseContext.js' ;

import useCustomHook from "./component/CustomHook.js";

import NewHook from './component/NewHook' ;

// Import thecoimponet of using [fetch , axios] methods  to get data from API : 
import FetchAxios from "./component/FetchAxios.js";




// Import the original defined and exported {Context Variable :  } from {useContext} file : 
// import {UseContext2}  from './component/Context2.js' ;
// import UseEffectExp from './component/UseEffectExp';
// import UseEffectExp from './component/UseEffectExp';
// import UseEffectExp from './component/UseEffectExp';

 
 
// Define the main file of Home page , with   :
const App = () => {
  // Define the data variable to be sent into each component [without define  Id property]  :
  const data = [
    { title: "title1", decs: "Description1", img: img1 },
    { title: "title2", decs: "Description2", img: img2 },
    { title: "title3", decs: "Description3", img: img3 },
  ];

  // Define the data variable to be sent into each component [with define Id property] :
  const data1 = [
    { id: "1", title: "title1", decs: "Description1", img: img1 },
    { id: "2", title: "title2", decs: "Description2", img: img2 },
    { id: "3", title: "title3", decs: "Description3", img: img3 },
  ];

  // Extracting a new Context Variable from the Imported & recieved context {ColorContext} => [by using both State variable &  State parent handler function   ]   : 
  const {stateData , ParentHandler} = useContext(ColorContext) ;
    
  // Defining a  useRef variables to use it in setting new value of the context :
    // The Ref of input element in [context application] : 
    const elem = useRef(null) ; 
    
      
    // The Ref of input element in [UseRef application] : 
    const elem1 = useRef(null) ; 
    const elem2 = useRef(null) ; 


  // Define a function to change the context value [by calling the context parent handler function ]  :
  const changeContext =  () => {
    ParentHandler(elem.current.value); 
  }
  
  // Define a function to  display the value of the ref element :
  const displayRef =  () => {
    alert(elem1.current.value); 
    console.log(elem1.current.value); 
    
    // setting the second input by the of the first Input value :
    elem2.current.value = elem1.current.value  ;
  }
 
  // Define a Boolean variable to be used as a condition :
  // const condVar = false;
  const condVar = true;

  // Define the main function to be sent to the children component {CardDetails} -with paremter to be assinged by a string value in the parent component  -  :
  const printString = (message) => {
    alert("Hello from pareamter simple string form the App page " + message);
    console.log(
      "Hello from pareamter simple string form the App page " + message
    );
  };

  // Define the main function to be sent to the children component {CardDetails} -with paremter will be assigned by another sent props in the parent component -  :
  const printTitle = (message) => {
    alert("Hello from parameter title prop from the App page " + message);
    console.log("Hello from parameter title prop from the App page " + message);
  };
 
  
  // Returning the app function with using the new extracted context variable  {ContextData} :  
  // <UseRefExps />
  // {ParentHandler('red')}
 return (
    <Fragment>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <br></br>
        <br></br>

        <FetchAxios />
        
        <NewHook/>

        <useCustomHook />

        <UseReducerFunc />       

        <UseMemoFunc />

        <h3> The following is the Context application with using useState and useRef :    </h3>
        <label> The current value of the context is : </label>
        {stateData}
        <p> -------------------------------------------------------------------- </p>
        <br></br>
        <br></br>
        
        
        <label> Insert the new value of the context   </label>
        <input type='text' ref={elem}  /> 
        
        <Button onClick={changeContext} > Click to change context </Button>
         <p> -------------------------------------------------------------------- </p>
        <br></br>
        <br></br>
        <br></br>
        
        
        <h3> The following is the UseEffect application :  </h3>
        <UseEffectExp />
        <p> -------------------------------------------------------------------- </p>
        <br></br>
        <br></br>
        <br></br>
        
        
        <h3> The following is the UseRef application :  </h3>
        <label>  Insert a value inside the input to be used inside another input value  </label>
        <input type ='text' ref={elem1}   />

        <Button onClick={displayRef}> Click to Assign the inserted value inside another input field using useRef Hook    </Button>
        <br></br>
        <br></br>
        <textarea ref={elem2}> </textarea>
        <p> -------------------------------------------------------------------- </p>
        
        <br></br>
        <br></br>
        <br></br>
        
        
        
        <h3> The following is the Form Input application :  </h3>
        <FormInput />

        {data.length ? (
          data.map((item, index) => {
            return (
              <CardDetails
                key={index}
                title={item.title}
                decs={item.decs}
                img={item.img}
                clickMe1={printTitle}
                clickMe2={printString}
              />
            );
          })
        ) : (
          <NotFound
            message="No data found  from a called DataFound component !!!"
            color="danger"
          />
        )}

        {condVar ? (
          data1.map((item) => {
            return (
              <CardDetails
                key={item.id}
                title={item.title}
                decs={item.decs}
                img={item.img}
                clickMe1={printTitle}
                clickMe2={printString}
              >
                <h1>
                  {" "}
                  This is a header sent from the parent component as a 'children
                  element'{" "}
                </h1>
                <h1> This is a header as a 'children element' </h1>
              </CardDetails>
            );
          })
        ) : (
          <h1>
            {" "}
            No Data found from a single header element by a 'false case' and
            condition used of defined boolean varaible with false value{" "}
          </h1>
        )}
      </div>
    </Fragment>
  );
};

export default App;

// <Header/>
// <BootstrapComps/>
// <Footer/>
// <h1 className='headerStyle'>  {refVar} </h1>

// <h2 className='mainStyle '> Hello this is Element  - formatted by using public css file 'style.css'    </h2>

// <h2 className='style1'> Hello this is Element -  formatted by using private css file 'headerStyle.css'    </h2>

// <h2 className='headerStyle'> Hello this is Element  - formatted by using private css file 'footerStyle.css'    </h2>

// <Link to="/about">
// <Button>   Go About  </Button>
// </Link>
