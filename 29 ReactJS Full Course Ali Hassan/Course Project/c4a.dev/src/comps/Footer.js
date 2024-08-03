/* This is the Footer Dynamic functional Component inlcuding : 
  several sent props :  single Text & css property value  
*/

import React from 'react'

import  './Footer.css'  ;

const Footer = ({desinger , color}) => {
  return (
    <div>   
         This is a Footer designed by &nbsp; 
        
        <span style={{ color: `${color}` }}> 
          {desinger}  
        </span>  

    </div>
  )
}
 
export default Footer ; 
