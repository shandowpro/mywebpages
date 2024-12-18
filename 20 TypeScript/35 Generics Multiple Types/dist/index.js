"use strict";
// [TS] lesson =>  35 Generics Multiple Types :
/* This lesson including following methods  :
    1- Define a Generic Datatype Function with using {Arrow function Syntax}
    2- Define a Generic Multiple Datatypes Function
*/
function display() {
    let z = prompt(`Choose from the next methods  :
        1- Define a Generic Datatype Function with using {Arrow function Syntax}  
        2- Define a Generic Multiple Datatypes Function
    `);
    if (z == 1) {
        alert(`welcome to Test Define a Generic Datatype Function with using {Arrow function Syntax}   `);
        console.log(`welcome to Test Define a Generic Datatype Function with using {Arrow function Syntax}   `);
        // A] Define a main Generic Function with uainf {Arrow function syntax} of Returning value of certain felxible assigned datatype [with funcrion output : string] :
        const funcGenArrow = (val) => val;
        // B] Executing and printing the Arrow Type function of getting value of generic datatypes :
        console.log(` The value of the generic Arrow Type Function with assigned datatype [string] is :
          ${funcGenArrow('shadi')}`);
        console.log(` The value of the generic Arrow Type Function with assigned datatype [number] is :
         ${funcGenArrow(100)} `);
        console.log(` The value of the generic Arrow Type Function with assigned datatype [boolean] is :
         ${funcGenArrow(true)}`);
        console.log(` The value of the generic Arrow Type Function with assigned datatype [string Array] is : 
        ${funcGenArrow(['shadi', 'sayed', 'ali'])}`);
        console.log(` The value of the generic Arrow Type Function with assigned datatype [number Array] is :
         ${funcGenArrow([1, 2, 3])}`);
        console.log(` The value of the generic Arrow Type Function with assigned datatype [boolean Array] is :
         ${funcGenArrow([true, true, false])}`);
        console.log('#'.repeat(15));
        // ----------------------------------------------
    }
    else if (z == 2) {
        alert(`welcome to Test Define a Generic Multiple Datatypes Function  `);
        console.log(`welcome to Test Define a Generic Multiple Datatypes Function  `);
        // A] Define a main Generic Function with using {Multiple function (2) syntax} of Returning value of certain flexible assigned datatype [with function output : string] :
        function funcMultGen(val1, val2) {
            return `The first value is  ${val1} , and with assinged generic datatype is ${typeof (val1)} 
            The second value is ${val2} , and with assinged generic datatype is ${typeof (val2)}`;
        }
        // B] Executing and printing the Multiple Type (2) function of getting value of Multiple generic datatypes :
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [string & number] is :
          ${funcMultGen('shadi', 100)}`);
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [number & boolean] :
         ${funcMultGen(100, true)} `);
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [boolean  & string ] is :
         ${funcMultGen(true, 'shadi')}`);
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [string Array & number Array] is : 
        ${funcMultGen(['shadi', 'sayed', 'ali'], [100, 200, 300])}`);
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [number Array & string Array] is :
         ${funcMultGen([1, 2, 3], ['a', 'b', 'c'])}`);
        console.log(` The value of the Generic Multiple Types (2) Function with assigned datatype [boolean Array & number Array ] is :
         ${funcMultGen([true, true, false], [100, 200, 300])}`);
        console.log('#'.repeat(15));
        // ----------------------------------------------
    }
    else {
        console.log('No valid choice!');
    }
}
