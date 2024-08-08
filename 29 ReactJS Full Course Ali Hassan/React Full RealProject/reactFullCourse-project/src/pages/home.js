

/* [Home] main  page router include : 
  -- Reusable componets [Header , Footer , MainContent ]
  -- Helmet library of duynamic Head elements [title , meat of content and description , style ]    
*/
 
//  importing reusble components    :    
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

// Importiong the  Helmet libaray to be used to set dynamic configuration of the  head element of this inner page
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      
      {/*  Inside thiss wrapper element Helmet we can write any of head element of the html to be customized for this iner page  */}
      <Helmet>
        <title> Home page </title>
        <meta name=" Home page" content="Website Home page " />
        <style type="text/css">
          {`  
            h1 {color: red ;  font-size: 33px }
          `}
        </style>
      </Helmet>

      <Header />
      <h1> Eng / Shadi</h1>

      <MainContent pageName="HOME Page" />

      <Footer />
    </div>
  );
};

export default Home;
