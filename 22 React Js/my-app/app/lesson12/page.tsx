//  Child page of [lesson12  : '12 Hocks and useRef in ReactJS' ]

'use client' ; 

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link' 
import {useRef} from 'react' 
import React, { useState , useEffect   } from 'react' 
 
/*  Application concepts and features :
   first method application peruse action [onCick] event of a button : 
    ---Get focus on an Input element on click on the button   
    ---Get the input element value on the console  

   second method application peruse action [onChange] event on the element it self : 
    ---Get the input element value on the console  (no need to focus , due to we are already in the same element )
 */

function lesson12() {
    //  Define the main varialble of [useRef] to be ussed to get access to an [input]  :
      const useRefInput = useRef<HTMLInputElement>(null)        

    // First method applicaton -> [using a onclick event of button to persue action of Focus & Get value of  input element ] :    
  
      // Defining the variable Handler function of [get focus on the used input element] & [get the value of the input field on the console ] :
        const clickHandler = () => {
          // Adding a condition of [the useRef variable is defined => to persue the each focus and get value of input] :
          if (useRefInput.current) {
            useRefInput.current.focus() ;
            console.log(useRefInput.current?.value);
          }
        }
      
    // Second Appliation => [using a onChange event of the input field element to persue Get value of the input element   ]  : 
      // Defining the variable Handler function of [get the value of the input field on the console ] :
      const changekHandler = (e) => {
        console.log(e.target.value);
      }
     
   return (
     <>
        <header style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" , textAlign:"center" }}> 
          Welcome to Lesson12 :  Hocks and useRef in ReactJS      
        </header>

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
          {/* <li style={{listStyle:"none"}}> <Link href="/lesson12"> Go to lesson12 : '12 Hocks and useRef in ReactJS' </Link>  </li> */}
        </ul>


        {/* Lessons(12) Application Container */}
        <h1 style={{color:"green"}} > Lesson 12 Application "Using 'useRef' Application" :  </h1>
        <div style={{ textAlign:"center", border:"solid blue 3px" , padding:"5px", margin:"5px", width:"100%", marginTop:"10px" }} >
       
            {/*  First method => Adding an input element of [dispalying the result of the useRef variable] with useRef varaible only  */}
            <label> First method to get input value (onclick get)  </label>
            <input ref={useRefInput}  />
            
            {/*  Assigning a button to use the {onClick} to [call and process the defiend variable handler function]  */}
            <button onClick={clickHandler} > Click to  get focus on the input & Get it's value in console by using the first method of button onclick event</button>  
            <br></br>
            <br></br>
            <br></br>


            {/* Second metjod =>  Adding the handeler of onChange function to activate the live responding of get   */}
            <label> Second method to get input value live get using onChange attribute event  </label>
            <input onChange={changekHandler}  />


 
      </div>


      {/* Functions buttons container  */}
      <div style={{ textAlign:"center", border:"solid red 3px" , padding:"5px", margin:"5px", width:"100%" }} >
     
    </div>
          
     </>
  ) ;
}
 

export default lesson12 ;