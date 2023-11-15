
// This page represent the [il] element of the [ul] of product's properites , with follwoing notes :
    // 1- This functional component's children will be exported to the [productList] component by importing 
    // 2- In this functional component include main item list [li] which including the [card] component element      
    // 3- The [card] component element => will include all it's elements inside it here 
    // 4- The card component element with all it's elements contents => will be looped inside the importing functional component [ProductList] 
    // 5- Inside the [Card] element will save the product data retreaved from backend => inside a [router] variables [using a hanlder function -by pushing the every detali inside the list of hte  ]  => to be able to used for displaying inside the router variable as functional component's props array   


// importing a sepresnted component of [Card] :
import Card from '../ui/Card' ; 

import classes from './ProductItem.module.css' ; 

// importing the router Hock built-in function to save the bringed data from the backend , to be able to use it to displaying data :   
import {useRouter} from 'next/router' ; 

// the function must include [props] inorder to pass through thw   
function ProductItem(props) {

    // Define the router from the imported hock{useRouter} :  
    const router = useRouter() ;

    // This is the function responsible to Get the product's Id property data , to use it to Dynmaic Navigation to product Id (which is being uysed in dynamic router) [by pushing it to the defined router varialbe array list]:  
    function showDetailsHandler() {
        // when click on the button [show more details] the product ID will be pushed into the router list => [to presenet hrte dynamic router of the current product ] :
        router.push(`/${props.id}`) ;
    }
    
    return (
        <li className={classes.item}> 
            
            {/* This is a external predefined component [represent the product details Data container ] (card for each product) */}
            <Card>
                {/* all following contents of this component is it's children */}
                
                {/* first part of the each product data [image] */}
                <div className={classes.image}  > 
                    <img 
                        src={props.image}   
                        alt={props.name}                        
                    />
                </div>

                {/* second part of the each product data [contents] */}
                <div className={classes.content}  > 
                    <h3> {props.name} </h3>
                    <span> {props.price} </span>
                </div>

                {/* third part of the each product data [show product details] button - according to the product Id property from backend data this function ] */}
                <div className={classes.actions} > 
                    <button onClick={showDetailsHandler} >
                        Show Details
                    </button>
                </div>
            </Card> 

         </li> 
    );

}

export default ProductItem ;
