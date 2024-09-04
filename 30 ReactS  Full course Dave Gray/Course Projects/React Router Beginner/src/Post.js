

/* The public Single Post display inner router component , including   : 
  - [return] => general display of [Each Post]               
  - 
  - 

*/
 


import React from 'react'
import { Link } from 'react-router-dom';


const Post = ({ post }) => {
  
  return (
    <article>
      
      <Link to={`/post/${post.id}`}>
        <h2>
          {post.title}
        </h2>

        <p className="postDate" >
          {post.dateTime}
        </p>
      </Link>

      {/*  Rendering the post body after slicing it when its length is graeter than 25 letters  */}
      <p className='postBody' >
        {
          (post.body).length <= 20 ?
          post.body : 
          `${(post.body).slice(0,20)}...`
        }   
      </p>
    </article>
  )
}

export default Post; 