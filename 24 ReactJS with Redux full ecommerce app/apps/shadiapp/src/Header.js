// ...  This is the {Header} component file  : 

// Import Directly the [private css files] {headerStyle.css} : 
    import  '../src/css/headerStyle.css' ;  

// Import  Fragment object for multiple assinging elements : 
    import { Fragment } from 'react';


// Define the main component function {Header} , with using following   : 
    // --- direct using JS  by using {} 
    // --- using {RefVar} to pass through element content  
    // --- using inline style attribute  


const Header = () => {
    const refVar1 = 'This is the container of JSX Styling properties   ' ;
    const refVar2 = 'This is the container of JSX Syntax properties  ' ;
    const contRefVar = 'This is the  contents come from the defined RefVar ' ;
    const btnSecRefVar = 'This  Section about the bootstrap buttons ' ;
     
    
    return (
        <Fragment>
        
            <div style={{ border: 'solid red 2px'  }} > 
             
               <h1 className = 'headerStyle'>
                   {refVar1}
               </h1>
              
               <h2 className='style1'>
                    Hello from the Header component formated by using the private css file 'headerStyle.css' 
                </h2>
            
                <h2 className='mainStyle'>
                    Helloo from the Header component   
                </h2>
            
            </div>
            <hr></hr>

            <div className='borderCont'> 
             
                <h1 style ={{fontSize: '30 px' ,textDecoration:'underline' , color: 'gold', textAlign: 'center'}}> 
                     {refVar2}
                </h1>
                
                <h2 className='style1'> 
                     {contRefVar}
                </h2>
            
                <h2 className='mainStyle'>
                    {
                         alert(contRefVar + ' form the direct Js ') 
                    }
                </h2>
            
            </div>
        </Fragment>
    )
}

//Exporting the main defined component function : 
    export default Header ;


