
/*  The [Feed] component to be called inside the [Home] component : 
    - [props] :  {posts} =>   using the defined array of the datasorurce [posts] for mapping through and get each item of [post] with all it's details 
    - [parent Components]  to use this component -> {Home}         
    - [Child Components] imported and called : {Post}    
    - [return] :     
      
*/

import React from 'react';

import Post from './Post';


const Feed = ({ posts }) => {
  return (
    <main style={{ color: 'green', fontSize: '20px' }} >
      {
        posts.length !== 0 ? (
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
          // <p> Data is available </p>
        ) : (
          <p style={{ color: 'red', fontSize: '20px' , textDecoration: 'underline'}}> No Data available ! </p>
        )
      }
    </main>
  )
}

export default Feed;


// {
//  Object.entries(posts)
// }