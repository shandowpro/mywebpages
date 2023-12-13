// ...  This is the {Header} component file  : 

// Import Directly the [private css files] {headerStyle.css} : 
    import  '../src/css/headerStyle.css' ;  
 

// Define the main component funciton {Header} : 
const Header = () => {
    return (
        <h1 className='style1'> Hello from the Header component formated by using the private css file </h1>
      
        // <h2 className='style1'> Helloo from the Header component   </h2>
    )
}

//Exporting the main defined component function : 
    export default Header ;


