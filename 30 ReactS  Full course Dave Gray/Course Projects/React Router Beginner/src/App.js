
//  The main app component to represent the main home page of the app :     

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


function App() {


  //  Define a variable of some post data source array of objects => to hold [ object of data  ]     :
  const [ posts , setPosts] = useState([
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
    const [searchResult, setSearchResult] = useState([]); 

  // Define a  state  of useHistory   :
    const history = useHistory(); 


  //  Define a function  of the hanlding  post deletion   operation  :
    const handleDelete  = (id) => {
      // Define a list of posts that NOT including the current post   :  
      const postList  = posts.filter( post =>  post.id !== id ) ;
    
      //  Setting the new post filtered list inside the post state [which will be displayed in  them main  home  page  ]  :
      setPosts(postList) ;

      // use the defined useHistory variable to route into a home page  :
      history.push('/')  ;
    }


  return (
    <div className="App">

      <Header title={'React js blog app '} />

      <Nav search={search} setSearch={setSearch} />

      {/*   Defining  the main routers of the appliction    */}
      <Switch>
        <Route exact path="/"  >
          <Home  posts={posts}  />
        </Route>

        <Route exact path="/post"  >
          <NewPost   />
        </Route>

        <Route path="/post/:id"  >
          <PostPage posts={posts} handleDelete = { handleDelete}   />
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
