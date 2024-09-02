/* The dynamic single post details display , inluding  : 
   -  [props] :  
    -- { posts} => the single post git from the  datasource     
    -- { handleDelete } => the function respnsible for deleting the  post       
*/


import React, { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {

  //   Define dynamic parameter for id sub router for this inner page  router   :
  const { id } = useParams();

  //   Define single post value from the according to defined  [{id} sub router]  :
  const post = posts.find(post => (post.id).toString() === id);


  return (
    <main className='postPage'>

      <article className='post'>

        {/*  plugging in  the defined variable of the post  => incase of obtained data from datasource {post} prop     */}
        {
          post &&
          <Fragment>
            <h1> {post.title}  </h1>
            <p className="postDate" > {post.dateTime}  </p>
            <p className="postBody" >  {post.body}  </p>
            <button
              className="postBody"
              // using the  imported fuction of the {handleDelete} of the this post {post.id}  :
              onClick={() => handleDelete(post.id)}
            >
              Delete the Post
            </button>
          </Fragment>
        }
        
        {
          !post &&
            <Fragment>
              
              <p > No Post found!   </p>
              <p >
                <Link to ='/' >
                  Return to home page 
                </Link> 
              </p> 
              
            </Fragment>
        }
      </article>
    </main>
  )
}

export default PostPage;
