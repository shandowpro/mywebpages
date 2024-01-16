// This file will use the {fetch()} &  {axios()} method to deal with the API data from the asisnged url : 


import React ,{useState , useEffect} from 'react'

// This library need to be installed first : 
import axios  from 'axios'


 
const FetchAxios = () => {
    
    const  url = 'https://jsonplaceholder.typicode.com/posts' ; 
    
    // Define the state : 
    const [state , setState]  = useState([]);   
  
    // Define a function of using {axios()} to get data from  the assinged url API :
    // const fetchMthd = async () => {
    //     const fetchVar = await fetch.get('') ;      
    //     setState(fetchVar) ;
    // }

    // Define a function of using {fetch()} to get data from the assinged url API :
    const axiosMthd = async () => {
        const axiosVar = await axios.get(url) ;      
        setState(axiosVar.data) ;
    }


    // Define a {useEffect} to inmplement the defined axios() fetching function :  
    useEffect(() => {
        axiosMthd();
    } , [])
 
 
    
    return (
        <div>
            
            {state[0].title}

            {state.map( (item) =>{
                return (
                    <h3>
                        {item.title}
                    </h3>
                )
            })}
        
        </div>
  )
}


export default FetchAxios ; 