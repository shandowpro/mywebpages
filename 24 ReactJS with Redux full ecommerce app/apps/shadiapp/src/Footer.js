// ...  This is the {Footer} component file  : 
 
// Import [Directly] the [private css files] {footerStyle.css} : 
   import '../src/css/footerStyle.css' ;  

// Import the {Fragment} object for muliple elements  :
    import {Fragment} from 'react'; 
 


// Define the main component function {Footer} , with the : 
    // -- Using  Fragment imported library [for multiple elements]   
    // -- Using defined RefVar to passs through a element contents   
    // -- Using Direct JS codes by using {}    

const Footer = () => {
    const refVar1 = 'This is the container of JSX Styling properties   ' ;
    const refVar2 = 'This is the container of JSX Syntax properties  ' ;
    const contRefVar = 'This is the  contents come from the defined RefVar  ' ;
    
    return (
        <Fragment>
           
            <div className='borderCont'>
                <h1 className='headerStyle'> 
                   {refVar1}
                </h1>
                
                <h2 className="style2"> Helloo from the Footer component 'using private css file  '     </h2>
                
                <h2 className="mainStyle"> Helloo from the Footer component 'using public css file '     </h2>        
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
                        alert( contRefVar + ' from the direct JS ' ) 
                    }
                </h2>
            
            </div>





            <div style ={{ border:'solid red 3px'  }}>

                <h1 className='headerStyle'> 
                   {refVar2}    
                </h1>
            
            </div>
            <hr></hr>
    
        </Fragment>

    ); 
}

// Exporting the main Defined component function : 
    export default Footer ;


