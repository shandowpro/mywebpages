
// [EditPost] component to handle the edit post operation :

import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Define the main component  functions wth sending the porps to be recived in [App.js]  : 
const EditPost = ({
  posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody
}) => {

  // Define the Router id :
  const { id } = useParams();

  // Define the dynamic item post [according to of this id value ]   :
  const post = posts.find(post => (post.id).toString() === id)

  /* Define the  useEffect of handling the modificaiton operation with assign [dependencies of each : 
    post : to allow modificaiton incsace  of  [full object]  
    setEditTitle   : to allow  modificaiton incsace  of  [title  of object ]  
    setBodyTitle   : to allow  modificaiton incsace  of  [body   of object ]  
  ] :     */

  useEffect(() => {
    //  setting the both of prop  [EditTitle]  &  [EditBody ]  with the returned  of find [post]      :
    if (post) {
      setEditTitle(post.title)
      setEditBody(post.body)
    }
  }, [post, setEditTitle, setEditBody])


  //  return the main form of modifying/edit the currnet post item  : 
  return (
    <main className='NewPost' >

      {editTitle &&
        <Fragment>
          <h2> Edit Post </h2>

          {/*  creating for with stopped defualt but with passgin through the [post.id]  inside the submit button  */}
          <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='postTitle' >
              Title:
            </label>

            <input
              id='postTitle'
              type='text'
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
            />

            <label htmlFor='postBody' >
              Body:
            </label>

            <textarea
              id='postBody'
              type='text'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
            />

            <button type='submit'
              onClick={() => handleEdit(post.id)}
            >
              Edit Post
            </button>
          </form>
        </Fragment>
      }

      {!editTitle &&
        <Fragment>
          <p> No page found!    </p>
          <p>
            <Link to='/' >
              Return to Home page
            </Link>
          </p>
        </Fragment>
      }
    </main>
  )
}

export default EditPost;


