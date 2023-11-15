
// Importing the used child component function file :  
import List from './LIst' ;

// Define an [type object] of datatype :
type DescParams = { 
    desc1 : string , 
    desc2 : string  
}
 

// Define a Sub main component & [including another child component] by using [Nesting Method] :
function Des({desc1 , desc2} : DescParams ) {
  return (
    <>
      {/* Including a single element : */}
      <p> Good Morning Decription  </p>
      
      {/* Including and defining datatypes defined props inside an element by using  [by using Re-destruction  ] : */}
      <p> The first defined prop value (by using Re-destruction method)  is {desc1}  </p>
      <p> The second defined prop value [by using Re-destruction method] value is {desc2}  </p>
      
      {/* including a child component inside a submain component , with assignment values of passed props */}      
      < List list1 =' This the value of list1 prop after passed prop from the defined child function' list2 ={'This the value of list2 prop after passed prop from the defined child function '} /> 

    </>
  ); 
}

export default Des ;
