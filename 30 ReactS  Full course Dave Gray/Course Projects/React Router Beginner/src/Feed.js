
/*
  --  
  --  
  
*/

import React from 'react';

import Post from './Post';



const Feed = ({ posts }) => {
  return (
    <main style={{ color: 'green', fontSize: '20px' }} >
      data is avialable
      {
        posts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
    </main>
  )
}

export default Feed;


// {
//  Object.entries(posts)
// }