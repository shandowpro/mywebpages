//  Child page of [lesson13  : '13 Hocks and useMemo in ReactJS' ]

'use client' ; 

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link' 
import React, { useState , useEffect , useRef , useMemo } from 'react' 
 
/*  Application concepts and features :
  --- Saving memeory spaces by assinging a condition inside  defined [useMemo varaible] to persue antother defined function   
  --- Saving  a defined function return inside a the defined useMemo function variable to be able to display or use    
  --- The saved functoin in the useMemo will be render only for the first time of page renderning , but will not render again untill the assingend condition in the [useMemo] is achieved  

 
/*  Application steps : 
    --- Define an exteranl function to be called and storedd  by using the  useMemo  variable function   
    --- Define a useState variable [counter] with number datatype of  to be increasing by onclick of button using a handler function 
    --- Define a handler function of hte inpreaing the number , used by a oncllck event button
    --- Define a useState variable [shouldCalc] with boolean datatype to be used a conditon by the useMemo function   
  */

// Define a function outside the component function , to be persued by useMemo function , according to a defined varaible condition dependency  :
const incomeCalc  = () => {
  
  let number = 0 ; 
 
  for ( let i = 0 ; i< 100 ; i++) {
    number = number  + 1; 
  }
  
  // Adding a test printing of proceesing this function : 
  console.log('calculating ....') ;
  
  return number ; 

}

 
function lesson13() {
    // 1] Define the [useState] variable counter for increasment function  :
      const [counter , setCounter] = useState(0) ;       


    // 2] Define the [useState] variable [shouldCalc] for conditioning of [useMemo] parameter dependency function  :
      const [shouldCalc , setShouldCalc] = useState(false) ;        

    // 3] Define the [useMemo] variable function [shouldCalc] for conditioning of [shouldCalc] parameter dependency function :
      const income = useMemo( () =>  incomeCalc() , [shouldCalc] ) ;
    

    // 4] Define the function to persue the increasment function by clicking on a button :     
      const clickHandler = () => {
        // increasing the variable [coutner ] by + 1
        setCounter(counter + 1);
        
        // Resetting the conidtional variable by [true] if the counter value is reached 10 :
        if (counter === 10 ) {
          setShouldCalc(true) 
        }
  
      }
       
      
   return (
     <>
        <header style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" , textAlign:"center" }}> 
          Welcome to Lesson13 :  Hocks and useMemo in ReactJS      
        </header>

        {/* Lessons(13) Application Container */}
        <h1 style={{color:"green"}} > Lesson 13 Application "Using 'useMemo' Application" :  </h1>
      
        <div style={{ textAlign:"center", border:"solid blue 3px" , padding:"5px", margin:"5px", width:"100%", marginTop:"10px" }} >
       
            {/*  => Adding an input element of [dispalying the result of the useRef variable] with useRef varaible only  */}
            <label>  Income : {income} </label>
            <label>  Counter : {counter} </label>
            <button onClick = {clickHandler} > Click to increase number by + 1 </button> 
              
        </div>

 
        <h1 style={{color:"green"}} > Links of current project :  </h1>
        <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}> 
          <li style={{listStyle:"none"}}> <Link href="/"> Go to Home page </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/mail"> Go to mail page </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/shop"> Go to shop page </Link>  </li>
        </ul>
        <br></br>


        <h1 style={{color:"green"}} > Links of Course lessons :  </h1>
        <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}>  
          <li style={{listStyle:"none"}} > <Link href="/lesson1"> Go to lesson1 : '1 ReactJS  Introduction' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson2"> Go to lesson2 : '2 Setup and Installation' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson3"> Go to lesson3 : '3 Initializing ReactJS App by VScode' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson4"> Go to lesson4 : '4 Main ReatJS Syntax with page.tsx file' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson5"> Go to lesson5 : '5 using props or Params and type object with children components' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson6"> Go to lesson6 : '6 Arrange Syntax of page.tsx  with other children components' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson7"> Go to lesson7 : '7 conditaional Rendering with Including Compoenents' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson8"> Go to lesson8 : '8 Styling in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson9"> Go to lesson9 : '9 Routers and Routing  in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson10"> Go to lesson10 : '10 Hocks and useState in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson11"> Go to lesson11 : '11 Hocks and useState in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson12"> Go to lesson12 : '12 Hocks and useRef in ReactJS' </Link>  </li>
          {/* <li style={{listStyle:"none"}}> <Link href="/lesson13"> Go to lesson12 : '13 Hocks and useMemo in ReactJS' </Link>  </li> */}
        </ul>


     </>
  ) ;
}
 

export default lesson13 ;