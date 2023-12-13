// App main file [App comonent ] :

// Importign the required libereies : 
    import React from 'react';
    import {Fragment} from 'react';

// import (directly) private css files  ; 
    import '../src/css/headerStyle.css' ;
    import '../src/css/footerStyle.css' ;
 
// importing the children components -=> to insert them inside this component :
    import Header from './Header'; 
    import Footer from './Footer.js';


// Define the main file of Home page : 
const App = () =>  {
    const refVar = 'Hello this is App file main page' ;    
    
    return (    
        <Fragment>
        
            <div className='borderCont'>

                <h1 className='headerStyle'>  {refVar} </h1>
                
                <h2 className='mainStyle '> Hello this is Element  - formatted by using public css file 'style.css'    </h2>
                
                <h2 className='style1'> Hello this is Element -  formatted by using private css file 'headerStyle.css'    </h2>
                
                <h2 className='style2'> Hello this is Element  - formatted by using private css file 'footerStyle.css'    </h2>
                
                <Header/>
                
                <Footer/>
            </div>
            
        </Fragment>
    ) 
    
}

 
export default App ; 