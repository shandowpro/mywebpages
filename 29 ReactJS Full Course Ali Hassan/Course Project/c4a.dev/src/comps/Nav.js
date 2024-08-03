/* Nav Reusable component , including :
  All defined inner pages links Routes  with using special React [Link] & [NavLink] elements
*/
import React from "react";

import {Link , NavLink  } from "react-router-dom";

import './Nav.css' ; 


const Nav = () => {
  return (
    <div>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div>
          <Link to={"/"}>  c4a.dev </Link>
        </div>
        
        <div>
          <NavLink to={"/Html"}> HTML page </NavLink>
        </div>

        <div>
          <NavLink to={"/Css"}> CSS page </NavLink>
        </div>

        <div>
          <NavLink to={"/Javascript"}> Javascript page </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Nav;
