
/*  Main orientation Map  =>    
    a- [with props]:
      {App} <- {Home} <- {Feed} <- {Post}      
      {App} <- {PostPage} 
      {App} <- {Header} 
      {App} <- {Nav} 
      {App} <- {NewPost} 
      
    b- [without props]:
      {App} <- {About}       
      {App} <- {Missing} 
      {App} <- {Footer} 

*/

/*  The main [App] component to represent the main home page of the app :     
  a-  main functions : 
    1 --   display all current array of items [posts]              
    2 --   live Searching       
    3 --   Adding new post => with a sperate inner page route          
    4 --   display specific detailed post  + delete button =>  in a seprated inner route page                

   b-  main imported components   : 
    1 -- main Fixed components : 
        --- {Header} =>  header component   
        --- {Nav}    => nav component  
        --- {Footer} => footer component    
    
    
    2 -- main routers components    
       --- {Home}     -> the main Router page  
       --- {Nav}      -> the nav router page      
       --- {About}    -> the aboput router page 
       --- {NewPost}  -> the new post adding Router page
       --- {PostPage} -> the detailed post Router page
       --- {Missing}  ->   the 404 Error  Router page
      
*/

// Importing the reqiurd hooks :
import { useState, useEffect } from 'react';

// Importing the main Fixed components : 
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


// Importing the inner Routers pages components : 
import Home from './Home';          // the main Router page 
import About from './About';        // the About Router page  
import NewPost from './NewPost';    // the new post adding Router page  
import PostPage from './PostPage';  // the detailed post Router page  
import Missing from './Missing';    // the 404 Error  Router page  

// importing the required classses and hooks for the routering  : 
import { Route, Switch, useHistory } from 'react-router-dom';

// importing the required classes from [date-fns] library  : 
import { format } from 'date-fns';


function App() {


  //  Define a variable of some post data source array of objects => to hold [ object of data  ]     :
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
      dateTime: '2/1/2020',
      body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
      id: 2,
      title: 'Second Post',
      dateTime: '20/10/2021',
      body: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
    },
    {
      id: 3,
      title: 'Third Post',
      dateTime: '2/12/2022',
      body: 'ccccccccccccccccccccccc'
    }
  ]);


  //  Define a function  of the [search] state   :
  const [search, setSearch] = useState('');

  // Define a  state  of [Search result] as an empty array  :
  const [searchResults, setSearchResults] = useState([]);

  // Define a  state  of useHistory   :
  const history = useHistory();

  // Define the [useEffect()] requried for seraching operation =>  Rerendering the page by changing of [posts state]  OR  [search state]    :
  useEffect(() => {
    // Define a variable of filtered posts according to the inserted value in the search box with including both of lowercase and uppercase text : 
    const filteredResults = posts.filter(post =>
      ((post.title).toLowerCase()).includes(search.toLowerCase())
      || ((post.body).toUpperCase()).includes(search.toUpperCase())
      || ((post.dateTime)).includes(search)
    );

    // setting the [searchResults] state by the value of the of the filtered resultes :  
    setSearchResults(filteredResults.reverse());

  }, [posts, search])



  // Defining  required states for creating a new post  :
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');


  // Define a function to handle submit of [NewPost] component  -> of creating and adding new post  : 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get and Define the last [id] value of the current post [if there is a posts array is defined (has length) ] => to be used to get the current post : 
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;    // => getting the id value of the last item in the {posts} array & add 1 to use it for adding a new item 

    //  Define  a variable of date : 
    const dateTime = format(new Date(), 'MMMM dd , yyyy pp');

    //  Define a variable of full new post object  : 
    const newPost = { id, title: postTitle, dateTime, body: postBody };

    //  Define a variable of All post array after adding the new post    : 
    const allPosts = [...posts, newPost];

    //  Adding the new variable of all posts into the [posts] state using its setter fucntion: 
    setPosts(allPosts);

    //  Setting the [postTitle]  & [postBody] states into an empty values after adding the new post : 
    setPostTitle('');
    setPostBody('');

    // use the defined useHistory hook variable to route into a certain route  [home page]  :
    history.push('/');
  };


  // Define a function  of the handling post deletion operation  :
  const handleDelete = (id) => {
    // Define a list of posts that including  all items except the current filtered post - according to the current item by id  :  
    const postList = posts.filter(post => post.id !== id);

    // Setting the new post filtered list inside the post state [which will be displayed in the main home page]  :
    setPosts(postList);

    // use the defined useHistory hook variable to route into a certain route  [home page]  :
    history.push('/');
  }

  return (
    <div className="App">

      <Header title={'React js blog app '} />

      <Nav search={search} setSearch={setSearch} />

      {/*  Defining the main routers of the appliction */}
      <Switch>
        <Route exact path="/"  >
          <Home posts={searchResults} />
        </Route>

        <Route exact path="/post"  >
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>

        {/*  Define a dynamic Route of inner sub of 'post' route  :  */}
        <Route path="/post/:id"  >
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>

        {/*  Creating a Router for the component   */}
        <Route path="/about" component={About} />

        {/*  Creating a Router for the component   */}
        <Route path="*" component={Missing} />
      </Switch>


      <Footer />

    </div>
  );
}

export default App;

// <Route path="/about" component={About} />