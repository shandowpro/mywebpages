// this is the {pagination} component of movieslist  , which include :
// Methods used in creation :
// 1- [react-paginate]  => this will be used in this application
// 2- [react-bootstrap] => will not be used

// import { ReactPaginate } from 'reactPaginate';

import Pagination from "react-bootstrap";
import React from "react";
import ReactPaginate from "react-paginate";

const PaginationComponent = () => {
  // Define the {onPageChange} method of the handling the ReactPaginate responding when click on one buttons of paniagtion :
  const handlePageClick = (data) => {
    console.log(data + 1);
  };

  // Define the count of total pages :
  const pageCount = 500;

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
