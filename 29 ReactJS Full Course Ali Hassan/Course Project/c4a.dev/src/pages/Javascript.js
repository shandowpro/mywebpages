/* The Javscript inner page including :
    1- Fixed Reusable  components :
      - {Nav}  reusable component
      
    2- Dynamic Reusable  components :
      - {Footer}  reusable component => with several props 
      - {Main}    reusable component => with several props 
*/

import React from 'react'

import  Nav  from "../comps/Nav";
import  Footer   from "../comps/Footer";
import  Main   from "../comps/Main";

const Javascript = () => {
  return (
    <div>
      <Nav />
         
      <Main content={'HTML'}  designer={'SHADI'}  />
      
      <Footer  desinger={'ShandowPro'}   color ={'green'}    />

    </div>
  )
}

export default Javascript ;
