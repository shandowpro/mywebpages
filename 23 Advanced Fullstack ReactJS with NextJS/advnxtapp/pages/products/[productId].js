

import Link  from 'next/link' ;
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router' ;


function ProductDetails() {
    // Define the useRouter hocks function in a variable :
    const router = useRouter() ; 

    // Define the [productId] dynamic router value from the query of the next/router list of the defined routers , and  assign it inside a varaible to be used inside the functional component using first method [normal variable] : 
    const productId1 = router.query.productId ;

    
    // Define the [productId] dynamic router value from the query of the next/router list of the defined routers , and  assign it inside a varaible to be used inside the functional component using Seocond method [Destructuring [reuter query list]  : 
    // const {productId2} = router.query.productId;
 
    return (
        <>              
            <header className={styles.header} style={{color:"blue" , fontSize:"50px" , border:"solid red 3px", marginBottom:"10px" }}>
                Welcome to - {productId1} - Inner page - using the first method : Normal Router Variable     
            </header> <br></br>
            
            {/* Welcome to  {productId2}  Inner page - using the second method : Destructuring Router Variable    <br></br> */}

            <h2> Project's other pages : </h2>
            <br></br>
            <ul> 
                <li> <Link href='/'> Go to Home page </Link> </li>
                <li> <Link href='/portfolio'> Go to Portfolio page 'This page Router made by using file Method' </Link> </li>
                <li> <Link href='/contact'> Go to Contact page 'This page Router made by using file Method' </Link> </li>
            </ul>
        </>
    ) ;
}   


export default ProductDetails ;