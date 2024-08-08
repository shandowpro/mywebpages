/* The main component [App] , that include : 
  -- Helmet library configuration          
  -- React inner pages  Routers configuration - according to the previous version of the react router dom     - 
 */

// Importing 'react router  dom' library elements :
import { Routes, Route } from "react-router-dom";

// Importing the inner pages components => to be used in defing the routers according to the previous version of the react router dom :
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Css" element={<Css />} />
        <Route path="/Html" element={<Html />} />
        <Route path="/Javascript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default App;
