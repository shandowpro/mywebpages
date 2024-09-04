
/* This is the main home page component , including   :  
  - [props] => 
    -- {posts} : the defined datasource variable in the {App} element  

  - [returns] => return conditional rendering according to the existed elements in the assinged {posts} prop , to display the imported {Feed} component or error text 
*/

import React from 'react'

import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className='Home' >
      {posts.length ?
        (<Feed posts={posts} />) :
        (<p style={{ color: 'red', marginTop: '2rem' }} > No Posts  avaialable  </p>)
      }
    </main>
  )
}

export default Home;