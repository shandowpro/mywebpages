// this is the {pagination} component of movieslist  , which include :
    // Methods used in creation :
        // 1- [react-paginate]  => this will be used in this application    
        // 2- [react-bootstrap] => will not be used 

    


// import Pagination from 'react-bootstrap' 

import React from 'react'
// import ReactPaginate from 'react-paginate' 
import { ReactPaginate } from 'reactPaginate';



 const PaginationComponent = () => {
  
    // Define the {onPageChange} method of the handling the ReactPaginate responding when click on one buttons of paniagtion :
    const handlePageClick = (data) => {
        console.log(data) ;
    } 

    // Define the count of total pages : 
    const pageCount = 500 ;

    return (

    <ReactPaginate
        breakLabel = '...'
        nextLabel = 'التالي'
        previousLabel = 'السابق'
        onPageChange = {handlePageClick}
        marginPagesDisplayed = {2}
        pagesRangeDisplayed = {2}
        pageCount = {pageCount}
        
        containerClassName= {'pagination justify-content-center p-3 '}
        
        pageClassName= {'page-item '}
        pageLinkClassName= {'link-item '}
        
        previousClassName= {'page-item '}
        nextClassName= {'page-item '}
        
        previousLinkClassName= {'link-item '}
        nextLinkClassName= {'link-item '}
        
        breakClassName= {'page-item '}
        breakLinkClassName= {'link-item '}
       
        activeClassName= {'active'}
 
    />
  
 )
}



export default PaginationComponent; 