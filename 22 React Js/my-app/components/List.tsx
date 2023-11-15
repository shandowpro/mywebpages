
// Define an [type object] of datatype :
type listParams = { 
    list1 : string ,  
    list2 : string  
}

 
// Define a child component [with defining a prop 'list' defined within {listParams} type object ] :
function List({list1 , list2} : listParams) {
    return (
        <>
            <div> First list props from child function & using redestructuion :  {list1} </div>
            <div> Second list props from child function & using redestructuion  :  {list2} </div>
        </>
    ) 
}
  
export default List ;