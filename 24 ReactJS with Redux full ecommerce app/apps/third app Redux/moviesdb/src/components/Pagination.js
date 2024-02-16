// This is the {pagination} component of movieslist  , which include :

// Methods used within creating the [Pagination]   :
  // 1- [react-paginate]  => this will be used in this application
  // 2- [react-bootstrap] => will not be used
  // 3- Receiving [Props] => 
    // a- {getPage}     =>  represent the function of assigning the current page  
    // b- {pagesCount}  =>  represent the  [dynamic / static] state variable value of current cards movies count in the current page , in both cases of :
      // I- The pages count in of First Rendering    
      // II- The pages count of Live searching working
      


import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = ({getPage , pagesCount }) => {

    // Define the {onPageChange} method of the handling the ReactPaginate responding when click on one buttons of paniagtion :
  const handlePageClick = (data) => {
    //  Testing printing  of the  page value [comming from the {ReactPaginate} pagination element
    console.log(data.selected + 1);
    console.log(pagesCount);
    
    // Assinging the value  of page value [with using the [+1] to prevent the array count]  :
      getPage(data.selected + 1);
       
  };


  // Define the count of total pages [static ] :
  const pageCount = pagesCount ;
  
  // Define the count of total pages [dynamic => error in api ] :
  // const pageCount = pagesCount ;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pagesRangeDisplayed={2}
      pageCount={pageCount}
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
