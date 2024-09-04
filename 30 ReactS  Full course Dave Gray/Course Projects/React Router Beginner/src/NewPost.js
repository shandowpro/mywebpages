
/*  Creating [New Post] component , including  :    
  -     
*/

import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main className='NewPost' >
      <h2> New Post </h2>


      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle' >
          Title:
        </label>

        <input
          id='postTitle'
          type='text'
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
          required
        />

        <label htmlFor='postBody' >
          Body:
        </label>

        <textarea
          id='postBody'
          type='text'
          onChange={(e) => setPostBody(e.target.value)}
          value={postBody}
          required
        />

        <button  type ='submit'    >
            Submit Post
        </button>

      </form>

 
    </main>
  )
}

export default NewPost;