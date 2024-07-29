
import React from "react";

const Lesson8 = () => {
  return (
    <div>
      <h2>Lesson 8 : Creating React Router of project inner pages  , using  'React Router Dom' library   </h2>
      <p>
        A- Main steps of to create inner pages of react project , by follow the next steps :
      </p>
      <ol>
        <li>
          Download and Install the 'React Router Dom' library , by using the
          next code : 
          <code style ={{color:'red' }} > 
             npm i react-router-dom 
          </code>
        </li>  
        
        <li> Visit the offical website of  the 'react router dom' and copy the green neccessary codes  - inside the 'index.js' , which is including : 
            <ol>
                <li>  Importings of 'react router dom' library      </li>  
                <li>  Define the main 'router' variable, which is a function of the imported 'createBrowserRouter' of array of objects </li>  
                <li>  Each object - inside the createBrowserRouter  of the router variable  -  is represent an a router  , and each router object is including some of the router properties as following :    
                  <ul> 
                    <li> path: the defined inner page's path value       </li>
                    <li> element: the inner page's element compoenent    </li>
                    <li> errorElement : 'only in the main router page' the inner page's output incase of error of calling the path inside  the browser address bar </li> 
                  </ul>                
                </li>  
                <li>  inside the render function of  'root' must add the 'RouterProvider' with attribute 'router and value with router ' wrapped by 'React.StrictMode'   </li>
            </ol>  
        </li> 
      </ol>
    </div>
  );
};

export default Lesson8;
