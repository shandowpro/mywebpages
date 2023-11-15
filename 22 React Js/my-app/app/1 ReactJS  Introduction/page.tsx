import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link' ;
 

function lesson1() {
  return (
     <>
         <h1 style={{color:"green"}} > Links of current project :  </h1>
        <ul> 
          <li> <Link href="/"> Go to Home page </Link>  </li>
          <li> <Link href="/mail"> Go to mail page </Link>  </li>
          <li> <Link href="/shop"> Go to shop page </Link>  </li>
        </ul>
     </>
  ) ;
}
 

export default lesson1 ;