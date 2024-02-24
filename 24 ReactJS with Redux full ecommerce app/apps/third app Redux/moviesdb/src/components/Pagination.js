// This is the {pagination} component of movieslist  , which include :

// Methods used within creating the [Pagination]   :
  // 1- [react-paginate]  => this will be used in this application
  // 2- [react-bootstrap] => will not be used
  // 3- Receiving [Props] => 
    // a- {getPage}     =>  represent the function of assigning the current page  
    // b- {pagesCount}  =>  represent the  [dynamic / static] state variable value of current cards movies count in the current page , in both cases of :
      // I- The pages count in of First Rendering    
      // II- The pages count of Live searching working
      

// A ] Importing section : 
  import React, { useState, useEffect } from "react";
  import ReactPaginate from "react-paginate";
  import { useDispatch , useSelector } from 'react-redux';
  import { getPage } from "../redux/actions/movieAction";
  // import axios from "axios"; 


  // B] Define the main fuctional conponent  section : 
   const PaginationComponent = () => {

  // [C: third function] => Define a seperated pagination function [with parmater of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component :
  
  // Define a state variable to store the current pages count as a state variable [to be later to store the extracted store value inside it]  : 
    const [pagesCount, setPagesCount] = useState(0)   


  // Extracting a dispatch metod from the {useDispatch} :
    const dispatch = useDispatch() ; 
  
  // Define a variable of current [pageCount] extension value extracted  from {store}  : 
    const pages = useSelector( (state) => state.pageCount  )


  // Use the {useEffect} to assign the extracted value of [state.pageCount] got from store :
    useEffect(()=> {
      // Dynamic Method of Assigning {total_pages} inside the [pagesCount] defined state [accorditng to defeined store variable ] => for the only first rendering :
        setPagesCount(pages) ;
    } , [] )
    

  // Define the main method  of getting the current page's count :  
    // const getPageMovie = async (page) => {      
    //   //  Dispatching the  importerd action method wiht using parameter of comming value of  [store current page's count]         :
    //   dispatch(getPage(page)); 
    // };


  // Dispatching the action method of { getPage(page)} via the handling the ReactPaginate responding when click on one buttons of pagination [according to the got value of selected page]  :
  const handlePageClick = (data) => { 
    //  Dispathcing the imported action method according to the got parameter value of pagination component  :
    // Assinging the value  of page value [with using the [+1] to prevent the array count]  :
    dispatch(getPage(data.selected + 1)); 
  };

 
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pagesRangeDisplayed={2}
      pageCount={pagesCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3 "}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default PaginationComponent;
