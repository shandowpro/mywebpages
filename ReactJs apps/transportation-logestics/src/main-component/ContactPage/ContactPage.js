
import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage';
import SubscribeSectionS2 from '../../components/SubscribeSectionS2/SubscribeSectionS2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg';


const ContactPage = () => {
  return (
    <Fragment>
      <HeaderTop />
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
      <Contactpage />
      <SubscribeSectionS2 />
      <Footer hclass={'wpo-site-footer-s3'} NewsletterShow={false} InstagramShow={true} FooterShape={false} />
      <Scrollbar />
    </Fragment>
  )
};
export default ContactPage;





