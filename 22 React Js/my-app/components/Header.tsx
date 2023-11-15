import List from  "./LIst" ; 


// Define a child component [with using reactJs fragment] :
function Header()  {
    return ( 
      <>
        {/* // including a single element:   */}
        <div> Good Morning from Header  </div>
    
        {/* // including another defined child component function :   */}
        <  List list = "assigned value from parent component " />
      </>
    )
  }
  
  export default Header ;