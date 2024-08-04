
/*  [Html] Static Re-usable component , inlucding :       
  -- imported fixed Re-usable component => [ Header , Footer ]
  -- imported Dynamic  Re-usable component => [ MainContent ]
*/

import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

const Html = () => {
  return (
    <div>
      <Header />
      <MainContent pageName="HTML Page" />
      <Footer />
    </div>
  );
};

export default Html;
