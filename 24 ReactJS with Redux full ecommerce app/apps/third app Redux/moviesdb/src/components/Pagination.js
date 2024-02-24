// This is the {pagination} component of movieslist  , which include :

// Methods used within creating the [Pagination]   :
  // 1- [react-paginate]  => this will be used in this application
  // 2- Receiving [Props] => 
    // a- {getPage}     =>  represent the function of assigning the current page  
    // b- {pagesCount}  =>  represent the  [dynamic / static] state variable value of current cards movies count in the current page , in both cases of :
      // I- The pages count in of First Rendering    
      // II- The pages count of Live searching working
      

// A ] Importing section : 
  import React, { useState, useEffect } from "react";
  import ReactPaginate from "react-paginate";
  import { useDispatch , useSelector } from 'react-redux';
  import { getPage } from "../redux/actions/movieAction";
  
  // import axios from "axios" => [ we not need it here  - because we used it action method  ] 


// B] Define the main fuctional conponent section : 
   const PaginationComponent = () => {

  // [Third function] => Define a seperated pagination function [with parameter of recieved value of current page ] of getting the curent page from pagination to send it the {MoviesList} component :
  
  // 1] Define a state variable to store the current pages count as a state variable [to be used later to store the extracted store value inside it , with ability to  change it , as a dynamic state value  ]  : 
    const [pagesCount, setPagesCount] = useState(0)   


  // 2] Extracting a dispatch metod from the {useDispatch} :
    const dispatch = useDispatch() ; 
  
  // Extracting current [pageCount]  value extracted from {store} 's [pageCount] extesnion  as a Define a variable , before assinging  it inside defiend state {pagesCount} below  : 
    const pages = useSelector( (state) => state.pageCount )


  // Use the {useEffect} to assign the value of [state.pageCount] extracted from store inside the defined state  {pagesCount} by [the first rendering of the page] :
    useEffect(()=> {
      // Assigning {pages - the Extracted current [total_pages] from store , which represent : [total_pages] porp - }  inside the defined state  [pagesCount] => for the only first rendering :
        setPagesCount(pages) ;
    } , [] )

    // Dispatching the action method of { getPage(data.selected + 1) } within the handling function the ReactPaginate responding when click on one buttons of pagination [according to {data} paramater - the gotten value of selected page -]  :
    const handlePageClick = (data) => { 
      //  Dispatching the imported action method {getPage()} with assigning  parameter {current page} - gotten from pagination component -   [by  using the [+1] to prevent the array count]   :
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
