
import React from "react";

 const Lesson4 = () => {
  return (
    <div>
      <h1> The C4A.dev course project website </h1>
      <h2> Lesson 4 How React works concept : </h2>
      <p> This lesson about React Working mechanism , as following : </p>
      <ol>
        <li>
          index.html file the browser displayer :
          <p> The first and main file is being run by browser </p>
          <p>
            This file include the HTML document that contains one main contianer
            parent element 'div' with 'id = root'
          </p>
          <p>
            This main contianer parent element 'div' will be included by all
            files project , by Rendering from the index.js file
          </p>
        </li>

        <li>
          index.js file the react system controler :
          <p>
            This file include mainly on defined variable of root that
            responsible for assinging the contianer parent element 'div' with
            'id = root' with it's extracted rendered function
          </p>
          <p>
            Also this file include the main [CSS file] and other main components
            files including the main assembling component 'App.js'
          </p>
          <p>
            The extracted render function of the defiend variable 'root' ,
            contians the imported main assembling component 'App.js'
          </p>
          <p>
            The main imported assemgling component 'App.js' includes all other
            created and defined coponenets from other seperated files
          </p>
        </li>

        <li>
          App.js file main assembling component must be imported inside the main
          index.js to be assinged the deinfed root's render function
        </li>
      </ol>
    </div>
  );
};


export default Lesson4 ;