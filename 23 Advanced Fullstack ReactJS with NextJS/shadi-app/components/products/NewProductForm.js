
// Creating [] inner page for adding new products to the database [mongoDB]   
// This functjional component will import following componnts [Card ]   => to use it as container  
// Inside this function will use the [useRef()] built in [Hock] function to use it in saving coming values of inputs in the form     
// To save inputs values inside the useRef vars => we use to define another variables for stroing only the value property 

 
// importing the css file of this file [NewProeductFrom] :
import classes from './NewProductForm.module.css' ; 

// importing ther [Card] component to reuse it as container :  
import Card from '../ui/Card' ; 

// importing the useRef hock to use it to save inserted values of the inputs [one varialbe for each input]  
import { useRef } from 'react';

function NewProductForm(props) {
    const nameInputRef = new useRef() ;
    const imageInputRef = new useRef() ;
    const priceInputRef = new useRef() ;
    const descInputRef = new useRef() ;

    // Creating a function to handling the inputs values and asssign it inside a defined value olf useRef :   
    function submitHandler(event) {
        // 1] assign a prevent default function for the [event parameter [to prevent adding the data ] :  
        event.preventDefault();

        // 2] assinging the inserted input's [value property] only inside variables to use it inside  the script as ref variables [due to the useRef variable will recieve all element properties values , and we need only the value property ]  :
        const enteredName = nameInputRef.current.value; 
        const enteredPrice = priceInputRef.current.value; 
        const enteredDesc = descInputRef.current.value; 
        const enteredImage = imageInputRef.current.value; 
    
        // Assinging the inserted product data values to a new data object properties => to use in sending the data to database => [will be studied later with database ]  : 
        // const productData = {
        //     name : enteredName, 
        //     price: enteredPrice, 
        //     desc: enteredDesc , 
        //     image: enteredImage , 
        // } 
        props.onAddProduct(productData); 
    }

    return (
        <> 
            {/* We use [onSubmit] attribtue within the form element    */}
            <form className={ classes.form}  onSubmit={submitHandler}  >
                
                {/* We use subContainer for each input */}
                {/* First : Product Name input  */}
                <div className={classes.control}>
                    <label htmlFor='name'> Product Name </label>
                    <input type='text' required  id='name' ref={nameInputRef}  /> 
                </div>
                
                
                {/* Second : Product Image input  */}
                <div className={classes.control}>
                    <label htmlFor='image'> Product Image  </label>
                    
                    {/* asigning a url type for the image [to add product image via url only  */}
                    <input type='url' required  id='image' ref={imageInputRef}  /> 
                </div>
                
                
                {/* Third : Product Price input  */}
                <div className={classes.control}>
                    <label htmlFor='price'> Product Price </label>
                    <input type='text' required  id='price' ref={priceInputRef}  /> 
                </div>


                {/* Fourth : Product Description input  */}
                <div className={classes.control}>
                    <label htmlFor='desc'> Product Description </label>
                    <textarea type='text' rows='5' required  id='desc' ref={descInputRef}></textarea>  
                </div>

                {/* Fifth : Product submit button   */}
                
                <div className={classes.actions}>
                    {/* The Form submit function  this button is written in the Form itself  */}
                    <button> 
                        Add Product
                    </button>
                </div>
                    
            </form>        
         
        </>
    );
}

export default  NewProductForm  ;
