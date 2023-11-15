
import Link  from 'next/link' ;
import styles from '../../styles/Home.module.css'


function Products() {
    return (
        <>    
            <header className={styles.header} style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" }}>
                 Welcome to Our products page
            </header>

            <div>
                <h2> Our Products LIST   </h2> 
                <nav>
                {/* Creating dynmaic links of following items : */}
                    <ul> 
                        <li> 
                        <Link href={'/products/product1'} > Product1 </Link>
                        </li>

                        <li>
                        <Link href={'/products/product2'} > Product2 </Link>
                        </li>
                        
                        <li>
                        <Link href={'/products/product3'} > Product3 </Link>
                        </li>
                    </ul>  
                </nav> 

            </div>

            <div>
                <ul> 
                        <li> <Link href='/'> Go to Home page </Link> </li>
                        <li> <Link href='/portfolio'> Go to Portfolio page 'This page Router made by using file Method' </Link> </li>
                    </ul>
            </div>

        </>
    ) ;
}   


export default Products;