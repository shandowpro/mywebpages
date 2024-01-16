import React , {useEffect , useState} from 'react' ;


const  NewHook = () => {
    
    // Main API data => [need to online connecion ]  :  
    const url = 'https://jsonplaceholder.typicode.com/todos' ;
    
    // simulate API Data1:
    const data0 = [
        { title: "title1", decs: "Description1" },
        { title: "title2", decs: "Description2" },
        { title: "title3", decs: "Description3" }
      ];
     
    // simulate API Data2:    
    const data1 = [
         2  , 3 ,5 
      ];
     

    // Define the state varialbe to fill it with fetched data :
    const [state , setState]  =  useState([]) ;
    

 
    // Define useEffect to set fetch and then action => [using the first simulated data]  :  
    useEffect(async () => {
         await fetch(state ,{method:'GET'})
        .then(res => res.json()).then(data => setState(data) ) 
     } , [] )


    //  Returning with mapping the  main data vairalbe [state] :
    
    return (
        <div>
            This is a Custom Hook   
            {
                state.map( (item) => {
                    return (   
                        <h1> {item.title}  </h1> 
                     )
                } )
            }  
        </div>
    )
}


export default NewHook ; 