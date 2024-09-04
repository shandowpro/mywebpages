

/*  This component of form of ad new post  , and  will include :
  - [props] => 
    -- {search} : the value of the searching pattern   
    -- {setSearch} :
 
  - [return] => including the next (2) points : 
    --  Searching Form for current Posts in the project                   
    --  Main list of links for the inner routes pages of the project => using [Link] react router hook , as following  :    
      --- [Home] =>  to navigate  into the home page 
      --- [New Post] => to navigate  into the creating new post page 
      --- [About] => to navigate  into the about page 


 */


import React from 'react';


// Impornting the link class from the  react router  library :   
import { Link } from 'react-router-dom';


const Nav = ({ search, setSearch }) => {
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