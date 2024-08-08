
/* [Javascript] inner page router include : 
  -- Reusable componets [Header , Footer , MainContent ]
  -- Helmet library of duynamic Head elements [title , meat of content and description , style ]    
*/


// importing  main reusable components : 
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

// Importiong the  Helmet libaray to be used to set dynamic configuration of the  head element of this inner page
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <div>
      <Helmet>
        <title> Javascript page </title>
        <meta name=" Javascript inner page" content="Website inner page of the Javascript "/>
        <style type="text/css">
          {`  
            h1 {color: brown ;  font-size: 33px }
          `}
        </style>
      </Helmet>


      <Header />
      <h1> Eng / Shadi</h1>
      
      <MainContent pageName="JAVASCRIPT Page" />

      <Footer />
    </div>
  );
};

export default Javascript;
