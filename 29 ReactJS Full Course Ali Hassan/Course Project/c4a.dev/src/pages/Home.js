/* The Home inner page including :
  a- Reusable  components :
    1- Fixed Reusable  components :
      - {Nav}  reusable component
      - {Lesson4}  reusable component
      - {Lesson56}  reusable component
      - {Lesson7}  reusable component
      - {Lesson8}  reusable component
       
    2- Dynamic Reusable  components :
      - {Footer}  reusable component => with several props 
      - {Main}    reusable component => with several props 
      
*/
 
// Importing reusable components    :
 import React from 'react'
 import  Main   from "../comps/Main";

 //  import  Footer   from "../comps/Footer";
 //  import  Nav  from "../comps/Nav";


//  
  import Lesson4 from "../comps/Lesson4";
  import Lesson56 from "../comps/Lesson56";
  import Lesson7 from "../comps/Lesson7";
  import Lesson8 from "../comps/Lesson8";
  
  import './Home.css' ;  


  const Home = () => {
     return (
     <div>    
       
       <Main content={'Home'}  designer={'Shandowpro'}  />

       <Lesson4 className='section'   />
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
    
     </div>
   )
  }
 
 export default Home; 
  