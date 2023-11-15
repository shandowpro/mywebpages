// Mail inner page 

import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link' ;
import React from 'react';
 

function Mail() {
  return (
     <>
         <header style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" }}> Welcome to Mail </header>
         
         <h1 style={{color:"green"}} > Links of current project :  </h1>
         <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}>  
          <li> <Link href="/"> Go to Home page </Link>  </li>
          <li> <Link href="/about"> Go to about page </Link>  </li>
          <li> <Link href="/shop"> Go to shop page </Link>  </li>
        </ul>
        <br></br>

        <h1 style={{color:"green"}} > Links of current project :  </h1>        
        <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}> 
          <li> <Link href="/lesson1"> Go to lesson1 : '1 ReactJS  Introduction' </Link>  </li>
          <li> <Link href="/lesson2"> Go to lesson2 : '2 Setup and Installation' </Link>  </li>
          <li> <Link href="/lesson3"> Go to lesson3 : '3 Initializing ReactJS App by VScode' </Link>  </li>
          <li> <Link href="/lesson4"> Go to lesson4 : '4 Main ReatJS Syntax with page.tsx file' </Link>  </li>
          <li> <Link href="/lesson5"> Go to lesson5 : '5 using props or Params and type object with children components' </Link>  </li>
          <li> <Link href="/lesson6"> Go to lesson6 : '6 Arrange Syntax of page.tsx  with other children components' </Link>  </li>
          <li> <Link href="/lesson7"> Go to lesson7 : '7 conditaional Rendering with Including Compoenents' </Link>  </li>
          <li> <Link href="/lesson8"> Go to lesson8 : '8 Styling in ReactJS' </Link>  </li>
          <li> <Link href="/lesson9"> Go to lesson9 : '9 Routers and Routing  in ReactJS' </Link>  </li>
          {/* <li> <Link href="/lesson10"> Go to lesson10 : '10 Hocks and useState in ReactJS' </Link>  </li> */}
        </ul>

     </>
  ) ;
}
 

export default Mail ;