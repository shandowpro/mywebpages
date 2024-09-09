import React from 'react';
import { Link } from 'react-router-dom';


// image
import Ab from '../../images/about/img-1.jpg'
import Abd1 from '../../images/about/img-2.jpg'

const about = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  return (
    <section className={"" + props.hclass}>
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <div className="wpo-about-img">
                <div className="wpo-about-img-left">
                  <img src={Ab} alt="" />
                </div>
                <div className="about-img-inner">
                  <div className="about-img-inner-text">
                    <h2>38 <span>Years of <br /> experiecne.</span></h2>
                    <p>It was popularised with the release sheets and more recently.</p>
                  </div>
                  <img src={Abd1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <div className="wpo-about-content ">
                <div className="wpo-about-content-top">
                  <h2>We are best and trusted transportation company.</h2>
                  <p>It was popularised with the release sheets containing passages and more recently
                    with desktop publishing software.</p>
                </div>
                <div className="wpo-about-content-progress">
                  <div className="progress-inner">
                    <div className="progress yellow">
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">98%</div>
                      <div className="progress-name"><span>Success</span></div>
                    </div>
                  </div>
                  <p>Took a galley of type and scrambled it to make type specimen book it has survived
                    not only five centuries also the leap into electronic.</p>
                </div>
                <div className="wpo-about-check-wrap">
                  <div className="wpo-about-check-item">
                    <p>It was popularised with release sheet containing passages.</p>
                  </div>
                  <div className="wpo-about-check-item">
                    <p>It was popularised with release sheet containing passages.</p>
                  </div>
                </div>
                <Link onClick={ClickHandler} to="/service" className="theme-btn-s2">All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;

