
import Link  from 'next/link' ;
import styles from '../../styles/Home.module.css'

function Contact() {
    return (
        <>    
            
            <header className={styles.header} style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" }}> Welcome to Contact US page  </header>

            <ul> 
                <li> <Link href='/'> Go to Home page </Link> </li>
                <li> <Link href='/portfolio'> Go to Portfolio page 'This page Router made by using file Method' </Link> </li>
                <li> <Link href='/products'> Go to Products page 'This page Router made by using Folder method , including a Dynamic Router' </Link> </li>
            </ul>
        </>
    ) ;
}   


export default Contact;