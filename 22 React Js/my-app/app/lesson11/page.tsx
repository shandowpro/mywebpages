//  Child page of [lesson11 : '11 Hocks and useEffect in ReactJS' ]

'use client' ; 

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link' 
import React, { useState , useEffect } from 'react' 
 
/*  Application concepts and features :
   
 */

function lesson11() {
     //  Define the main (2) varialbles before the return of component function [before the component return] :
      const [counter1 , setCounter1] = useState<number>(0)        
      const [success , setSuccess] = useState<boolean>(false)        
      
    // Defining the variable handler function of  [increament of counter1 +1]  & [conditional rendering of related defined (2) variables  ] :
      const clickHandler = () => {
        setCounter1(counter1 + 1)
        // adding a condition of [setting the value of another variable when the first vairable is reahed 10]
        if (counter1 == 10) {
          setSuccess(true)
        }
      } 
     
    // 1] Define a useEffect of [Triggered a message for every time the page is being rendering ] :
    // useEffect( () =>{
    //   console.log('this First message is triggered every time the page is being rendered ')
    //   alert('this First message is triggered every time the page is being rendered ')
    // } )
      
    // 2] Define a useEffect of [Triggered a message for only the First time the page is being rendering ] :
    // useEffect( () =>{
    //   console.log('this Second  message is Triggered for only the First time the page is being rendering ')
    //   alert('this Second  message is Triggered for only the First time the page is being rendering ')
    // } , [] )
      
    // 3] Define a useEffect of [Triggered a message according a condition of the changing in another variable  ] :
    useEffect( () =>{
      console.log('this Third message is Triggered a message according a condition of the changing in another variable ')
      alert('this Third message is Triggered a message according a condition of the changing in another variable ')
    } , [success] )
       
    
    // 4] Define a useEffect of [Triggered a message according a condition of the changing in (2) variables values  ] :
    // useEffect( () =>{
    //   console.log('this Fourth message is Triggered a message according a condition of the changing in (2) variables values ')
    //   alert('this Fourth message is Triggered a message according a condition of the changing in (2) variables values ')
    // } , [success , counter1] )
       
    
   return (
     <>
        <header style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" , textAlign:"center" }}> 
          Welcome to Lesson11 :  Hocks and useEffect in ReactJS      
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
          {/* <li style={{listStyle:"none"}}> <Link href="/lesson11"> Go to lesson11 : '11 Hocks and useState in ReactJS' </Link>  </li> */}
          <li style={{listStyle:"none"}}> <Link href="/lesson12"> Go to lesson12 : '12 Hocks and useIf in ReactJS' </Link>  </li>
        </ul>


        {/* Lessons(11) Application Container */}
        <h1 style={{color:"green"}} > Lesson 11 Application "Using 'useEffect' Application" :  </h1>
        <div style={{ textAlign:"center", border:"solid blue 3px" , padding:"5px", margin:"5px", width:"100%", marginTop:"10px" }} >
      
        {/* main Numbers container */}
        <div style={{ width:"100%", display:"flex"}} >

          {/* First Number */}
          <div style={{border:"solid red 3px" , padding:"5px", margin:"5px", width:"50%", textAlign:"center"}} >
          
            {/* Display the defiend variable  */}
            <label> Number = {counter1} </label>  
            <br></br>
            <br></br>
          

            {/*  Assigning a button to call and process the  defiend variable handler function  */}
            <button onClick={clickHandler} > Click to Number1 + 1 &  activating the triggerd events of the useEffect   </button>  
            <br></br>
            <br></br>
            <br></br>
            
          </div>
           
        </div>     

      </div>


      {/* Functions buttons container  */}
      <div style={{ textAlign:"center", border:"solid red 3px" , padding:"5px", margin:"5px", width:"100%" }} >
        
    
    </div>
          
     </>
  ) ;
}
 

export default lesson11 ;