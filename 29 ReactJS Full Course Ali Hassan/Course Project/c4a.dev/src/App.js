// The main assembling component [App] :  

// Importing the Reusable components   :         
import Nav from "./comps/Nav";
import Footer from "./comps/Footer";
import Home  from "./pages/Home";


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
        <Home />
        <Footer  desinger={'Eng Shadi'}    color={'green'} /> 
      
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
