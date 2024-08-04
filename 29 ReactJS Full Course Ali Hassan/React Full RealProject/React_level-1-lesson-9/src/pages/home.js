import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

const Home = () => {
  return (
    <div>
      <Header />

      <MainContent pageName="HOME Page" />

      <Footer />
    </div>
  );
};

export default Home;
