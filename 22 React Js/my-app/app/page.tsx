// Home main page of the project 

'use client' ;

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link' 
import useRef from 'react' 
import React, { useState , useEffect } from 'react' 
 

export default function Home() {  

  //  Define the varialble before the return of component function [before the component return] :
    const [counter1 , setCounter1] = useState<number>(0) ;
    const [counter2 , setCounter2] = useState<number>(0) ;
  
  // Defining the processes results variables :
    const [addResult , setAddResult] = useState<number>(0) ;
    const [subResult , setSubResult] = useState<number>(0) ;
    const [multResult , setMultResult] = useState<number>(0) ;
    const [divResult , setDivResult] = useState<number>(0) ;


  // Define useEffect functions   : 
  // useEffect(() => {
  // })  



  // A] {Single Numbers} arithmetic operations :
  // First Number operations : 
      // 1) Single arithmetic operations [addition] for the first Define variable [counter1] ,by using it's dealer function [setCounter1{}] :
        const add1 = () =>{
          setCounter1(counter1 + 1) ; 
        }  

      // 2) Single arithmetic operations [substraction] for the [first Define variable] [counter1] ,by using it's dealer function [setCounter1{}] :
        const sub1 = () =>{
          setCounter1(counter1 - 1) ; 
        }  

      // 3) Single arithmetic operations [multiplay] for the first Define variable [counter1] ,by using it's dealer function [setCounter1{}] :
        const mult1 = () =>{
          setCounter1(counter1 * 1) ; 
        }  
        
      // 4) Single arithmetic operations [divsion] for the first Define variable [counter1] ,by using it's dealer function [setCounter1{}]:
        const div1 = () =>{
          setCounter1(counter1 / 1) ; 
        }  
  // --------------------------------


  // Second Number operations : 
      // 1) Single arithmetic operations [addition] for the [second Define variable]  ,by using it's dealer function [setCounter2{}]:
        const add2 = () =>{
          setCounter2(counter2 + 1) ; 
        }  

      // 2) Single arithmetic operations [substraction] for the second Define variable ,by using it's dealer function [setCounter2{}]:
        const sub2 = () =>{
          setCounter2(counter2 - 1) ; 
        }  

      // 3) Single arithmetic operations [multiplay] for the second Define variable ,by using it's dealer function [setCounter2{}]:
        const mult2 = () =>{
          setCounter2(counter2 * 1) ; 
        }  
        
      // 4) Single arithmetic operations [divsion] for the second Define variable ,by using it's dealer function [setCounter2{}]:
        const div2 = () =>{
          setCounter2(counter2 / 1) ; 
        }  
  // --------------------------------

 
  // B] {Both Numbers} arithmetic operations  :
    
    // Define the function of handling/using [Adding -> First var + Second var]  : 
      const addition = () =>{
        setAddResult(counter1 + counter2) ; 
      }  

    // Define the function of handling/using [substraction-> First var - Second var]  : 
      const substracion = () =>{
        setSubResult(counter1 - counter2) ; 
      }  

    // Define the function of handling/using [ Multiply -> First var * Second var]  : 
      const multiplay = () =>{
        setMultResult(counter1 * counter2) ; 
      }  
      
    // Define the function of handling/using [ Divsion -> First var / Second var]  : 
      const divison  = () =>{
        setDivResult(counter1 / counter2) ; 
      }  

  return (
    <main className={styles.main}>

      <div> 
        <header className={styles.header}> Welcome to Home page  </header>
      </div>
      
      
      {/* Lessons(12) Application Container */}
      <h1 style={{color:"green"}} > Using 'useRef' Application :  </h1>
      
      
      {/* Lessons(11) Application Container */}
      <h1 style={{color:"green"}} > Using 'useEffect' Application :  </h1>
      
      {/* Lessons(10) Application Container */}
      <h1 style={{color:"green"}} > Using 'useState' Application :  </h1>
      <div style={{ textAlign:"center", border:"solid blue 3px" , padding:"5px", margin:"5px", width:"100%" }} >
      
        {/* main Numbers container */}
        <div style={{ width:"100%", display:"flex"}} >

          {/* First Number */}
          <div style={{border:"solid red 3px" , padding:"5px", margin:"5px", width:"50%", textAlign:"center"}} >
          
            {/* Display the defiend variable  */}
            <label> Number1 = {counter1} </label>  
            <br></br>
            <br></br>
          

            {/*  Assigning a button to call and process the  defiend variable handler function  */}
            <button onClick={add1} > Click to Number1 + 1  </button>  
            <br></br>
            <br></br>
            
            <button onClick={sub1} > Click to Number1 - 1   </button>  
            <br></br>
            <br></br>
            
            <button onClick={mult1} > Click to Number1 * 1  </button>  
            <br></br>
            <br></br>
            
            <button onClick={div1} > Click to Number1 / 1   </button>  
            <br></br>
            <br></br>
            <br></br>
            
          </div>
          
          {/* Second Number */}
          <div style={{ textAlign:"center", border:"solid red 3px" , padding:"5px", margin:"5px", width:"50%" }} >
            
            {/* Display the defiend variable  */}
            <label> Number2 = {counter2} </label>  
            <br></br> 
            <br></br>

            {/*  Assigning a button to call and process the  defiend variable handler function  */}
            <button onClick={add2} > Click to Number2 + 1  </button>  
            <br></br>
            <br></br>
            
            <button onClick={sub2} > Click to Number2 - 1   </button>  
            <br></br>
            <br></br>
            
            <button onClick={mult2} > Click to Number2 * 1  </button>  
            <br></br>
            <br></br>
            
            <button onClick={div2} > Click to Number2 / 1   </button>  
            <br></br>
            <br></br>
            <br></br>


          </div>     

        </div>


        {/* Functions buttons container  */}
        <div style={{ textAlign:"center", border:"solid red 3px" , padding:"5px", margin:"5px", width:"50%" }} >
  
          {/* All Numbers Addition process button  */}
          <button onClick={addition}> Addition Process </button>
          <br></br>
          <br></br>
          
          {/* All Numbers Substraction process button  */}
          <button onClick={substracion}> Substraction Process </button>
          <br></br>
          <br></br>
          
          {/* All Numbers Multiple process button  */}
          <button onClick={multiplay}> Multiplay Process </button>
          <br></br>
          <br></br>
          
          {/* All Numbers Divsion process button  */}
          <button onClick={divison}> Divsion Process </button>
          <br></br>
          <br></br>
        </div>
          

        {/* Results container  */}
        <div style={{ textAlign:"center", border:"solid red 3px" , padding:"5px", margin:"5px", width:"50%" }} >
          {/* Display the Addition Result  */}
          <label> Addition Result =  {addResult} </label>  
          <br></br> 
          <br></br> 

          {/* Display the Substracton Result  */}
          <label> Substracton Result =  {subResult} </label>  
          <br></br> 
          <br></br> 

          {/* Display the Mutiple Result  */}
          <label> Multiple Result =  {multResult} </label>  
          <br></br> 
          <br></br> 

          {/* Display the Divsion Result  */}
          <label> Divsion Result =  {divResult} </label>  
          <br></br> 
          <br></br> 

        </div>
      
      </div>

      {/* Importing child components */}
      <div className={styles.description}>
        <p className={styles.myClass} >
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
 
      {/* Project's Inner Pages Routes  */}
      <div>
         <h1 style={{color:"green"}} > Links of project's inner pages  :  </h1>
        <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}>  
            <li style={{listStyle:"none"}}> <Link href="/about"> Go to about page </Link>  </li>
            <li style={{listStyle:"none"}}> <Link href="/shop"> Go to shop page </Link>  </li>
            <li style={{listStyle:"none"}}> <Link href="/mail"> Go to mail page </Link>  </li>
         </ul>
      </div>
      <br></br>

      {/* Project's Course Lessons Routes  */}
      <div>
      <h1 style={{color:"green"}} > Links of current project's Lessons Inner pages  :  </h1>
      <ul style={{ border:"solid red 3px", margin:"10px" , padding:"5px"  }}>  
          <li style={{listStyle:"none"}}> <Link href="/lesson1"> Go to lesson1 : '1 ReactJS  Introduction' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson2"> Go to lesson2 : '2 Setup and Installation' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson3"> Go to lesson3 : '3 Initializing ReactJS App by VScode' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson4"> Go to lesson4 : '4 Main ReatJS Syntax with page.tsx file' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson5"> Go to lesson5 : '5 using props or Params and type object with children components' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson6"> Go to lesson6 : '6 Arrange Syntax of page.tsx  with other children components' </Link>  </li>
          <li style={{listStyle:"none"}}>  <Link href="/lesson7"> Go to lesson7 : '7 conditaional Rendering with Including Compoenents' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson8"> Go to lesson8 : '8 Styling in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson9"> Go to lesson9 : '9 Routers and Routing  in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson10"> Go to lesson10 : '10 Hocks and useState in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson11"> Go to lesson11 : '11 Hocks and useEffect in ReactJS' </Link>  </li>
          <li style={{listStyle:"none"}}> <Link href="/lesson12"> Go to lesson12 : '12 Hocks and useRef in ReactJS' </Link>  </li>
        </ul>
      </div>
      <br></br>

      {/* ReactJs Styling Methods   */}
      <div className={styles.grid}>
        {/* using 'Inline CSS code format' method */}
        <p style= {{ color:"#fff" ,fontSize:"20px", border:"solid 5px #fff "}} > This span formated by using 'Inline CSS code format' method </p>
        
        {/* using 'imported file with ClassName CSS code format' method */}
        <p className= {styles.myClass} > This span formated by using 'ClassName CSS code format' method  </p>
        
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* the next element formated by usng the inline style method  */}
          <h2 style={{ fontSize:"50px", color:"blue"}} >
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.sha} >
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>


    </main>
  )
}
