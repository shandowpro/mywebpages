
/// this is an external component of product's data container , to be used wihtin the [ProductItem] component function 
/// this  functional component has a parameters [props] to be able to recieve it's children elements from where another function using/imoprting it 


import  classes from './Card.module.css' ;


function Card(props) {
    return (
        <>
            <div className={classes.Card}>    
                {/* Returning all this components [elements contents : from where are they written in [ProductItem] component ]  */}
                {props.children}
            </div> 
        </> 
    ) ; 
}


export default Card ;



