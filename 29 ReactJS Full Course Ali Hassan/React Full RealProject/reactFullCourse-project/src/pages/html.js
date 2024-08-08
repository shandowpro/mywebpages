
/*  [Html] Static inner page  , inlucding :       
  -- imported fixed Re-usable component => [ Header , Footer ]
  -- imported Dynamic  Re-usable component => [ MainContent ]
  -- Helmet library of duynamic Head elements [title , meat of content and description , style ]    
*/
  
// importing  main reusable components : 
import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

// Importiong the  Helmet libaray to be used to set dynamic configuration of the  head element of this inner page
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <div>
      {/*  Inside thiss wrapper element Helmet we can write any of head element of the html to be customized for this iner page  */}
      <Helmet>
        <title> HTML page </title>
        <meta name=" HTML page" content="Website HTML page " />
        <style type="text/css">
          {`  
            h1 {color: blue ;  font-size: 33px }
          `}
        </style>
      </Helmet>

      <Header />
      <h1> Eng / Shadi</h1>

      <MainContent pageName="HTML Page" />
      <Footer />
    </div>
  );
};

export default Html;
