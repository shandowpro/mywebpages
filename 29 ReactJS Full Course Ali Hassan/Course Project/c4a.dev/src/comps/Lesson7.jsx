import React from "react";

const Lesson7 = () => {
  return (
    <div>
      <h2>
        Lesson 7 : converting HTML Websites projects into JSX react websites
        projects
      </h2>
      <p>  A- Main steps of to convert the HTML project into the react JSX project , we need to
        follow the next steps :
      </p>
        <ol>
          <li> Copy the HTML elements of 'Body' main Tag - and paste inside the
            JSX element functional component ' wether the main component or any
            child components ' , with following considerations :
            <ul>
              <li>
                All copied HTML elements must be wrapped brackets and inside a
                parent container element inside the return of functional
                component, to be read prooperly{" "}
              </li>
              <li> Must convert the class attribute into className </li>
              <li>
                Must convert the style='' attribute into style= and values of css
                inside doubled curly brackets
              </li>
            </ul>
          </li>

          <li> Copy the HTML elements of 'Head' main Tag - and paste inside the 'Head' of 'index.html' of the react project , with followin considerations :  <br></br>
            <ul>
              <li>               
                All copied HTML elements must be direct link path  
              </li>     
            </ul>
          </li>
          
          <li>  Copy the CSS files 'from HTML old project folder '   and put them inside the   ' react project folder' beside the 'index.html'  inside the public    </li>
        </ol>


        <p> B- HTML codes into JSX converting methods : 
          <ul>
            <li> Manualy method    </li>
            <li> Shorten method :
              <p> By using one of the online converting websites   </p>
              <p> This method only including converting elements and script , but  not include  the file  arrangment              </p>             
            </li>          
          </ul>
        
        
        </p>
    </div>
  );
};

export default Lesson7;
