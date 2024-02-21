// The {NavBar} of the third  project { MoviesDB}
  // functions & links  used in this component  :  
    // 1- [live searching]  ->   using the redux system to defiene the livesarching method - without using props 
    // 2- [default link] to the main page within the logo image 
    
    // import {Link} from  'react-router-dom' ;
 
    // importing the [logo image] from the images folder for best pracitise => to be used in {NavBar} : 
      import logo from  '../images/logo.svg' ;

      import React , {useState, useEffect} from "react";
      import { Col, Container, Row } from "react-bootstrap";

    // importing the [useDisptach] class from [react-redux] to be sued in sendgin the recieved actions methods into the reducer and then store  :     
      import { useDispatch , useSelector } from 'react-redux';  

    // importing the [getMovieSearch] defined action  method  from [ movieAction.js] to be used to send the dispatch mehtod to reducer method   :   
      import {   getAllMovie , getMovieSearch } from '../redux/actions/movieAction';
  // ------------------------------------------

  const NavBar = () => {
    // Define the pageCount State varilabe [temprorly]   :
    // const [pagesCount, setPagesCount] = useState(0);  
    
    
  // [B : Second function] => Define the dynamic live searching method :  
    
    // 1] Define the parent searching container :
      const onSearch = (word) => {
        // passing through the parameter (word) [comming from the input value element] of the parent function  into the  functional parameter {search}  :
        search(word);
      };
    
    // 2] Define tghe disptach extreacted method : 
      const dispatch = useDispatch() ;

    // 3] Define the main metod of the seaerching [according to the  redux system ] :  
      const search = async (word) => {
      if (word === "") {
        dispatch(getAllMovie());
        } else {
          dispatch(getMovieSearch(word));
        }  
      };  
  // ------------------
 
  // const res = await axios.get(
  //   `https://api.themoviedb.org/3/search/movie?query=${word}&api_key=893adba5dca668458f2a181bcbd88e02`
  // );  
  // setMovies(res.data.results);

  // Dynamic Method of Assigning {total_pages} inside the [pagesCount] defined state  :
  // setPagesCount(res.data.total_pages);

  // Static Method of Assigning {total_pages} inside the [pagesCount] defined state  :
  // setPagesCount(500) ;


  
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
