// This is the [Main] Dynamic Component , with using several [prop] :

import React from "react";

import  '../comps/Main.css'  ;

const Main = ({ content, designer }) => {
  return (
    <div>
      <div> This is {content} page</div>

      <div> Designed by {designer }</div>
    </div>
  );
};

export default Main;
