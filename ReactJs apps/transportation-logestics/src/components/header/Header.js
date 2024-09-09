import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";



const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault()
  }

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  const { carts } = props;

  return (
    <header id="header">
      <div className={"" + props.hclass}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <MobileMenu />
              </div>
              <div className="col-md-6 col-6 d-lg-none dl-block">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={props.Logo}
                    alt="" /></Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">Home</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/home">Home style 1</Link></li>
                        <li><Link onClick={ClickHandler} to="/home-2">Home style 2</Link></li>
                        <li><Link onClick={ClickHandler} to="/home-3">Home style 3</Link></li>
                      </ul>
                    </li>
                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">Services</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/service">Service Style 1</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-s2">Service Style 2</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-s3">Service Style 3</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single/Air-Transport">Air Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single/Road-Transport">Road Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single/Ocean-Transport2">Ocean Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single/Train-Transport3">Train Transport</Link></li>
                        <li><Link onClick={ClickHandler} to="/service-single/Ocean-Transport2">Service Single</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">Pages</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/tracking">Tracking</Link></li>
                        <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
                        <li><Link onClick={ClickHandler} to="/shop-single/Fresh-key-Lime">Shop Single</Link></li>
                        <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
                        <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                        <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">Projects</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/project">Project Style 1</Link></li>
                        <li><Link onClick={ClickHandler} to="/project-s2">Project Style 2</Link></li>
                        <li><Link onClick={ClickHandler} to="/project-s3">Project Style 3</Link></li>
                        <li><Link onClick={ClickHandler} to="/project-single/Special-Transport-Solutions5">Project Single</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/#">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                        <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="#">Blog details</Link>
                          <ul className="sub-menu">
                            <li><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details right sidebar</Link>
                            </li>
                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details left
                              sidebar</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Blog details
                              fullwidth</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-2 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                        className={`fi ${menuActive ? "ti-close" : "flaticon-search"}`}></i></button>
                      <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input type="text" className="form-control"
                              placeholder="Search here..." />
                            <button type="submit"><i
                              className="fi flaticon-search"></i></button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="mini-cart">
                    <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                      {" "}
                      <i className="flaticon-shopping-cart-1"></i>
                      <span className="cart-count">{carts.length}</span>
                    </button>
                    <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                      <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                      <div className="mini-cart-items">
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <div className="mini-cart-item clearfix" key={crt}>
                              <div className="mini-cart-item-image">
                                <span>
                                  <img src={catItem.proImg} alt="icon" />
                                </span>
                              </div>
                              <div className="mini-cart-item-des">
                                <p>{catItem.title} </p>
                                <span className="mini-cart-item-price">
                                  ${catItem.price} x {" "} {catItem.qty}
                                </span>
                                <span className="mini-cart-item-quantity">
                                  <button
                                    onClick={() =>
                                      props.removeFromCart(catItem.id)
                                    }
                                    className="btn btn-sm btn-danger"
                                  >
                                    <i className="ti-close"></i>
                                  </button>{" "}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mini-cart-action clearfix">
                        <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                        <div className="mini-btn">
                          <Link to="/checkout" className="view-cart-btn s1">Checkout</Link>
                          <Link to="/cart" className="view-cart-btn">View Cart</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="close-form">
                    <Link onClick={ClickHandler} className="theme-btn" to="/tracking">Tracking now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};


export default connect(mapStateToProps, { removeFromCart })(Header);

















