/*  This coponent of form of ad new post  , and  will include :
  - [props] => 
    -- {search} : the valiue of the searching pattern   
    -- {setSearch} :
 
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
          onClick={(e) => setSearch(e.target.value)}
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