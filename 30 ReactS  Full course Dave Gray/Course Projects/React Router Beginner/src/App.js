
//  The main app component to represent the main home page of the app :     

// importing the reqiurd hooks       :
import react, { useState, useEffect } from 'react';

// Importing the main Fixed components : 
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';


// Importing the inner Routers pages components : 
import Home from './Home';          // the main Router page 
import About from './About';        // the About Router page  
import NewPost from './NewPost';    // the new post adding Router page  
import PostPage from './PostPage';  // the detailed post Router page  
import Missing from './Missing';  // the 404 Error  Router page  

// importing the required classses and hooks for the routering  : 
import { Route, Switch, useHistory } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <Header  />

      <Nav />
       
      <Switch>
        <Route exact path="/"  >
          <Home />
        </Route>

        <Route exact path="/post"  >
          <NewPost />
        </Route>

        <Route  path="/post/:id"  >
          <PostPage />
        </Route>

        {/*  Creating a Router for the component   */}
        <Route path="/about" component={About} />
        
        {/*  Creating a Router for the component   */}
        <Route path="*" component={Missing}  />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
