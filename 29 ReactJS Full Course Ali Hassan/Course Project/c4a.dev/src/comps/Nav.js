// Nav Reusable component , including all defined inner pages links  : 

import React from "react";

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
          <a href={"/"}> Home page </a>
        </div>
        
        <div>
          <a href={"/Html"}> HTML page </a>
        </div>

        <div>
          <a href={"/Css"}> CSS page </a>
        </div>

        <div>
          <a href={"/Javascript"}> Javascript page </a>
        </div>
      </header>
    </div>
  );
};

export default Nav;
