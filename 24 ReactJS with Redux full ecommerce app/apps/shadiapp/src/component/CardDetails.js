
// import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { Button, Card } from "react-bootstrap";

// const CardDetails = (props) => {
const CardDetails = ({ title, img, desc, clickMe1, clickMe2, children }) => {
  
  // Define a function => Inner function inside this file only    :
  const innerFunc = () => {
    console.log("Hello from defined inner function inside this file ");
  };

  // Define a function => of Receiving the sent {functional prop} inside a constainer function to be called inside the child  component + and using it's sent parameter value as simple string   :
  const clickHandlerStr = () => {
    clickMe1('Shadi');
  };

  // Define a function => of Receiving the sent {functional prop} inside a seperated function to be called inside the component + and using it's sent paramter value as another sent prop[prop.title]  :
  const clickHandlerProp = () => {
    clickMe2(title);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img varaint='top'  src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{desc}</Card.Text>

        {children}

        <Button
          onClick={() => {
            console.log("Hello from direct inline function");
          }}
          variant="primary"
        >
          Inline function
        </Button>

        <Button onClick={innerFunc} variant="primary">
          Inner defined function
        </Button>

        <Button onClick={clickHandlerStr} variant="primary">
          Calling recieved function from the parent 'App.js' by paramteter value of simple string  
        </Button>
      
        <Button onClick={clickHandlerProp} variant="primary">
        Calling recieved function from the parent 'App.js' by paramteter value of another sent prop value
        </Button>
      
      </Card.Body>
    </Card>    
  );
}


export default CardDetails;


// This is the offical bootstrap of the reactJS script of [Cards] component  :
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     export default BasicExample;