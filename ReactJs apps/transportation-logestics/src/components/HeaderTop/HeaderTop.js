import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'

const HeaderTop = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-12 d-lg-block d-none">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-lg-9 col-12">
            <div className="contyact-info-wrap">
              <div className="contact-info">
                <div className="icon">
                  <i className="fi flaticon-phone-call"></i>
                </div>
                <div className="info-text">
                  <span>Call Us:</span>
                  <p>00 567 458 796 47</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="fi flaticon-email"></i>
                </div>
                <div className="info-text">
                  <span>E-mail Now:</span>
                  <p>infoorgco@gmail.com</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="icon">
                  <i className="fi flaticon-clock"></i>
                </div>
                <div className="info-text">
                  <span>Opening Hours:</span>
                  <p>09:00 am to 10:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;