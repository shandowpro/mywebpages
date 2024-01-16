// This page is dispalying an error content to the user in case of non exsisted router , provided with go home button 
 


import React from "react";
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Error404 = () => {
  return (
    <div>
      <h1>Error404</h1>

      <Link to="/">
        <Button> Go Home </Button>
      </Link>
    </div>
  );
};

export default Error404;
