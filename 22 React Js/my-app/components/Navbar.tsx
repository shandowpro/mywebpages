
// Define an [type object] of datatype :
  type NavParams = { 
    item : string 
}
  
  

// Define a child component function prop's datatype => [item] :
function Navbar(props : NavParams ) {
  // Define a element with using prop [item] :
  return (
    <div> {props.item}  </div>
  );
}

export default Navbar ;