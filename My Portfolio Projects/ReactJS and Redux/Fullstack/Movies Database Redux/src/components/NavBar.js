// The {NavBar} of the third  project { MoviesDB}
  // functions & links  used in this component  :  
    // 1- [live searching]  ->   using the redux system to defiene the livesarching method - without using props 
    // 2- [default link] to the main page within the logo image 
    // 3- Using the Redux system for the functions in this component files :
      // -  {useDispatch} from the [useSelector] => to  extract a dispatch method  used for dispataching the imported actions methods            
      // -  {getAllMovie} from the [movieAction.js] => to dispatch the {getAllMovie} in case the reutnred value of the insertred is = '' [empty]             
      // -  {getMovieSearch} from the [movieAction.js] => to dispatch the {getMovieSearch(word)} in case the reutnred value of the insertred is = 'certian value' 
    
      // import {Link} from  'react-router-dom' ;
      // import { useDispatch , useSelector } from 'react-redux';  
 
    // importing the [logo image] from the images folder for best pracitise => to be used in {NavBar} : 
      import logo from  '../images/logo.svg' ;

      import React from "react";
      import { Col, Container, Row } from "react-bootstrap";

    // importing the [useDisptach] class from [react-redux] to be sued in sendgin the recieved actions methods into the reducer and then store  :     
      import { useDispatch} from 'react-redux';  

    // importing the [getMovieSearch] defined action  method  from [ movieAction.js] to be used to send the dispatch mehtod to reducer method   :   
      import {  getAllMovie , getMovieSearch } from '../redux/actions/movieAction';
  // ------------------------------------------

  const NavBar = () => {
      
  // [B : Second function] => Define the [dynamic live searching] method :  
    
    // 1] Define the disptach extracted method : 
      const dispatch = useDispatch() ;
  
      
    // 2] Define the main method of the searching [according to the redux system ] :  
      const search = async (word) => {
        if (word === "") {
          //  Executing the first action method {getAllMovie} incase of inserted value of the input [if this value is empty] :        
          dispatch(getAllMovie());
        } else {
          //  Executing the second action method {getMovieSearch(word)} according to recived  value  of inserted value of the input [of this vallue is NOT empty] :        
          dispatch(getMovieSearch(word));
        }  
      };  

    // 3] Define the parent searching container =>  to prevent the infinite executive looping   :
      const onSearch = (word) => {
        // passing through the parameter (word) [comming from the input value element] of the parent function  into the  functional parameter {search}  :
        search(word);
      };
  // ------------------
  
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href='/'>
              <img className="logo" src={logo} alt="logo image" />
            </a>      
          </Col>

          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <i className="fa fa-search"></i>

              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث ..."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
