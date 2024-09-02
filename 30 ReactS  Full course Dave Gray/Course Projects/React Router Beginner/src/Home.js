
/* This is the main home page component , including   :  
  - [props] => 
    -- {posts} : 
    
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