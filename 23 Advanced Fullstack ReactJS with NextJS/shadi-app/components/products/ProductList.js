

// This functional component will use then imported component [ProductItem] inside  loop statement [map()] to loop insie the passed props 
// Loop mechansim to asccess to the impoettd productItem's properties , as following : 
    // using [props] of the this function [ProductList] as the receiver of the imported component 
    // using [map()]  looping statment with assinging following  => 
    // assign Array default name  : [products]  
    // assign Array Item default name :  [product]  
// using  Array Item default name [product] to accees to the sent array items's properties as value of component props [properties names] 

// importing the functional component [ProductItem] as {li} to use it inside the this component as loopewd item insdiee a [ul] element   :
import ProductItem from './ProductItem' ; 

import classes from './ProductList.module.css' ; 


function ProductList(props)  {
    return (
        <>
            <ul className={classes.list}> 
                {/* Looping inside the functional components props to get all imported [productItem] component */}
                { props.products.map( (product) => (
                    // this Component represent the [li] of this [ul] :
                   <ProductItem 
                        //all these next properties of the each product :     
                        key={product.id}                    
                        id={product.id}                    
                        image={product.image}                    
                        price={product.price}    
                    />
                ))}
            </ul>
        </>
    ); 

}

export default ProductList;