// App main file [App comonent ] :


import React from 'react';

// import (directly) private css files  ; 
    import '../src/css/headerStyle.css' ;
    import '../src/css/footerStyle.css' ;
 
// importing the children components -=> to insert them inside this component :
    import Header from './Header'; 
    import Footer from './Footer.js';


// Define the main file of Home page : 
const App = () =>  {
    return (    
        <div>
            <h1 className='mainStyle'> Hello this is App file main page -  formatted by using main css file    </h1>
            <h1 className='style1'> Hello this is Element -  formatted by using private css file 'headerStyle.css'    </h1>
            <h1 className='style2'> Hello this is Element  - formatted by using private css file 'footerStyle.css'    </h1>
            
            <Header/>
            <Footer/>
        </div>
    ) 
    
}

 
export default App ; 