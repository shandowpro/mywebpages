/* [MainContent] Re-usable Component - with sent props - , include :
  -- Importing seperated CSS file      
  --       

*/        


import React from "react";
import  './MainContent.css';

const MainContent = ({ pageName }) => {
  return (
    <main>
      {pageName}
      <br />
    </main>
  );
};

export default MainContent;
