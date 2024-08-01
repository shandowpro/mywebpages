// The lesson 5 & lesson 6 :   

import React from "react";

const Lesson56 = () => {
  return (
    <div>
      <h2>
        Lesson 5 & 6 How to share the project files with other , and after
        modifications 
      </h2>
      <p>
        How to use the Github to share the project files with other public ,by
        the next steps :
      </p>
      <ol>
        <li>
          Using github as a project repositories to upload all project files on
          my created github account
        </li>
        <li>
          There are 2 methods to use the github repos and procedures :
          <ul>
            <li>
              1- From the Inner Tool of the vscode application git tool in the
              side bar , using the next steps :
              <ol>
                <li>
                  publish button - allow the githbu permission to use my github
                  account
                </li>
                <li>
                  Write repo name to be saved by as as new repo in the github
                  account
                </li>
                <li>
                  Select repo publish type from Public || Private - and choose
                  the public incase to allow asccess and view for any visitor
                </li>
              </ol>
            </li>

            <li>
              2- From the Terminal of external or inner shell of Vscode and
              follow the default procedures
            </li>
          </ul>
        </li>

        <li>
          Download the shared project from the a Repo of github account , via
          using the next steps :
          <ol>
            <li> access the shared repo form the shared link </li>
            <li>
              download the current project files via using code button and
              download zip
            </li>
            <li> Extracting the dowlaoded folder extract here </li>
            <li> Open with the dowlaoded folder by vscode </li>
            <li>
              Open terminal of inner vscode , and install first the npm of this
              project according to the [package.json] of this project which will
              install all dependencies of the all installed libraries
              automatically
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};

export default Lesson56;
