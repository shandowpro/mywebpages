

// This componet is about {Form + controling events and handlers} , including the following : 
  // a- events => [onClick() for input form ] &  [onChange() for Form submit button]
  // b- handler controler =>  using with [user input handler function] 


import React from 'react'
// import Form from 'react-bootstrap/Form';
import {Form , Button  }  from 'react-bootstrap'

function FormInput() {

    // Define a default function to be used with [button onclick event] : 
    const printTitle = () => {
        console.log('hello from button onClick event ') ;
        // alert('hello from button onClick event ') ;
    }

    // Define a function used by [input element's onChange event] => (used for live display the output fo the element is using this functoin  ) :  
    const onChangeHandler = (e) => {
        console.log(e.target.value)
        alert(e.target.value)
    }

    // Define a function used by the {form's onSubmit} [with stop the default auto reloading the page +  preview the form input collected data in the console  ] :  
    const onSubmitHandler = (e) => {
        // use the [e] to Stop the auto reloading action of page by click on the form's submit button : 
        e.preventDefault() ;
        
        console.log(e) ;
        alert(e) ;
    }

    return (
    <Form onSubmit={onSubmitHandler}>
      
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Control onChange={onChangeHandler}  type="text" placeholder="Enter any text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
     
        <Button className='btn btn-info p-2 m-2'  onClick={printTitle}  > 
            Click to preview the message of the button onclick  
        </Button> 

        <Button type='submit' className='btn btn-info p-2 m-2'  > 
            Click to submit the form   
        </Button> 

    </Form>
  );
}

 
export default FormInput ; 