// import logo from './logo.svg';
// import './App.css';


// Importing the Reusable components   :         
import Nav from "./comps/Nav";
import Lesson4 from "./comps/Lesson4";
import Lesson56 from "./comps/Lesson56";
import Lesson7 from "./comps/Lesson7";
import Lesson8 from "./comps/Lesson8";


// Importing 'react router  dom' library elements :
// import { Routes, Route  } from "react-router-dom"; 

// Importing the inner pages components  :
// import Home from "./pages/Home";
// import Html from "./pages/Html";
// import Css from "./pages/Css";
// import Javascript  from "./pages/Javascript";


function App() {
  return (
    <div>

      <Nav />

      <Lesson4 />
      <br></br>
      <hr></hr>
      <br></br>

      <Lesson56 />
      <br></br>
      <hr></hr>
      <br></br>

      <Lesson7 />
      <br></br>
      <hr></hr>
      <br></br>

      <Lesson8 />
      <br></br>
      <hr></hr>
      <br></br>

      
      </div>
    );
  }
  
  export default App;
  
  
  // <Routes> 
  //   <Route path='/' element={<Home />} /> 
  //   <Route path='/Css' element={<Css />} /> 
  //   <Route path='/Html' element={<Html />} /> 
  //   <Route path='/Javascript' element={<Javascript />} /> 
  // </Routes>
