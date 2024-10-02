
//  [ orientation map ]  :   {App} <- {Nav}

/*  This component of form of ad new post  , and  will include :
  - [props] => 
    -- {setSearch} :  will be used inside the onChange event function of the  [saerch input] to set the [search] state by the current value of this input  
   -- {search} : the  [saerch input]  'value'  attribute  will be set by  it's value after being have been set by it's setter function     
 
  - [return] => including the next (2) points : 
    --  Searching Form for current Posts in the project                   
    --  Main list of links for the inner routes pages of the project => using [Link] react router hook , as following  :    
      --- [Home] =>  to navigate  into the home page 
      --- [New Post] => to navigate  into the creating new post page 
      --- [About] => to navigate  into the about page 

 */

import React from 'react';


// Importing the link class from the  react router  library :   
  import { Link } from 'react-router-dom';


// [remove when usnig the {redux-easy-peasy} method]  importing requrired hook to use the DataContext :
  // import {useContext} from 'react' ;
  
// [remove when usnig the {redux-easy-peasy} method] importing the DataContext file to be used in this component :
  // import  DataContext  from './context/DataContext';


// Import the required importings for using the {redux-easy-peasy}   : 
  import  { useEffect}  from 'react' ;
  


/* the required imporotings from the [easy-peasy] to apply the redux state management        : 
  - [useStoreActions] => to pull store defined actions methods  
  - [useStoreState]   => to pull store defined states           
*/
 import  { useStoreActions , useStoreState  }  from 'easy-peasy' ;

 
const Nav = () => {
  
  // Define both of {search, setSearch} accordging to the [context] :   
  // const {search, setSearch} = useContext(DataContext); 
  
  // Define both of {posts , search} states &  {setSearch , setSearchResult} actions according to the [redux easy-peasy] :   
    const  posts  =  useStoreState( (state) =>  state.posts ) ;
    const  search  =  useStoreState( (state) =>  state.search ) ;
    const  setSearch  =  useStoreActions( (actions) =>  actions.setSearch ) ;
    const  setSearchResults =  useStoreActions( (actions) =>  actions.setSearchResults ) ;
    
  // use the defined useEffect from the context file to use it inside the related useEffect hook function - due we can not use any hook it inside the redux -  :
    useEffect(() => {

    // a- Define a variable of filtered posts according to the inserted value in the search box with including both of lowercase and uppercase text : 
    const filteredResults = posts.filter(post =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      || ((post.body).toUpperCase()).includes(search.toUpperCase())
      || ((post.dateTime)).includes(search)
    );

    // b- setting the [searchResults] state by the value of the of the filtered resultes [reversed for descending  display  ]  => to be set inside the [Home] as a value  of the [posts] prop       :  
    setSearchResults(filteredResults.reverse());

  }, [posts, search , setSearchResults])


  return (
    <nav className='Nav' >

      <form calssName="searchForm" onSubmit={(e) => e.preventDefault()}    >
        <label htmlFor="search" >
          Search Post :
        </label>

        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </form>

      <ul>
        <li>  <Link to='/'>  Home   </Link>    </li>
        <li>  <Link to='/post'>  New Post  </Link>    </li>
        <li>  <Link to='/about'>  About   </Link>    </li>
      </ul>

    </nav>
  )
}

export default Nav;
