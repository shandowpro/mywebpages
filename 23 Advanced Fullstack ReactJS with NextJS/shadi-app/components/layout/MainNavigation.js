
// This is the main compoonent of the navigation section contents 

import classes from './MainNavigation.module.css' ;
import Link from 'next/link' ;


function MainNavigation () {
    return (
        <>
            <header className={classes.header}>
                
                {/* This link to navigate to the main page when click on the logo image    */}
                <div className={classes.logo} > 
                    <Link href="/"> Product </Link> 
                </div>
                
                {/*  Nav Bar Nenu */}
                <nav className={classes.nav}> 
                    <ul> 
                        <li>         
                            {/* This link to navigate to the inner page of [adding new product]   */}
                            <Link href="/new-product"> Add New Product </Link>   
                        </li>                       
                    </ul> 
                </nav>
            </header>      
        </>
    );
}


export default MainNavigation ;