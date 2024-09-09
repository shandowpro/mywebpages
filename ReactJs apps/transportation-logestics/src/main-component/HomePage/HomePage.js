import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import FunFact from '../../components/FunFact/FunFact';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'

const HomePage = () => {
  return (
    <Fragment>
      <HeaderTop />
      <Navbar hclass={'wpo-site-header'} Logo={Logo} />
      <HeroSlider />
      <FunFact hclass={'wpo-fun-fact-section'} />
      <About hclass={'wpo-about-section section-padding'} />
      <ServiceSection hclass={"wpo-service-area section-padding"} ServiceBtn={true} />
      <VideoSection />
      <ProjectSection hclass={'wpo-project-section section-padding'} SectionTitleShow={true} projectBtn={true} />
      <CtaSection />
      <Testimonial />
      <PartnersSection CollClass={'col col-xs-12'} />
      <BlogSection />
      <Footer hclass={'wpo-site-footer'} upperContactArea={true} />
      <Scrollbar />
    </Fragment>
  )
};
export default HomePage;