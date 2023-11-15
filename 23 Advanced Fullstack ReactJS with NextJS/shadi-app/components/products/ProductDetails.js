 

// Create the page of displaying the product's details 
// This functional component will import use also the [Card] as a container    
// This functional component will use the props parameter to pass through the products data properites  

import Card from '../ui/Card' ;

// importing hte buyiltin imaghe incase of using [Image]  of next :
// import Image from 'next/image' ;

import classes from './ProductDetails.module.css' ;


function ProductDetails(props) {
    return (
        <>
            <section className={classes.detail }> 
                <div> 
                    <img src={props.image} alt={props.name} className = {classes.img}  />
                    {/* <Image src={props.image} alt={props.name}  /> */}
                </div>
                <h1> {props.name} </h1>
                <span> LE {props.price}</span>
                <p> {props.desc}</p>
            </section>
        
        </>
    );
}

export default ProductDetails ;