// Define a Footer page functional Component  , with using different of navigating , as  following :
// a- {Link} imported object of navigating to the [Home page] , with nested button element
// b- {Link} of navigating to the Home page

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Footer = () => {
  // Define a Navigating variable extracted from imported [useNavigate] object :
  const navigator = useNavigate();

  // Define a function of calling defiend Navigating variable   :
  const callHomeNavigator = () => {
    navigator("/");
  };

  return (
    <div>
      <h1> This is a Footer </h1>
      <a href='/'>  home page default Method link </a>  
 
      <Button onClick={callHomeNavigator}>
        Go Home using functional Navigator of using the extracted object of
        'useNavigate' imported from 'react-router-dom'{" "}
      </Button>
    </div>
  );
};

export default Footer;

      // <Link to="/">
      //   <Button style={{ margin: "10px" }}>
      //     Go Home using defined Link's nested button{" "}
      //   </Button>
      // </Link>