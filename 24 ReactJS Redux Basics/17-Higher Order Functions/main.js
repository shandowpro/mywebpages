//  17-Higher Order Functions
/* Main lessons functions :
    1- First type of higher order function [with functional parameter ] :
    2- Second type of higher order function [with functional return ]  : 
*/
// ---------------------------------------------------------------------

// 17-Higher Order Functions  :
function myTest() {
    'use strict' ;
    alert('Welcome to 17-Higher Order Functions ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Test First type of higher order function [with functional parameter ]    \n  2] Test Second type of higher order function [with functional return ] ');    

    if (x == 1 ) {
        
        hoFuncPar();

    } else if (x == 2) {
    
        hoFuncReturn();
        
    // } else if (x == 3) {
    
        // arrowFuncThis();       
    
    // } else if (x == 4) {

    //     arrowShortFunc2();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    //  1] Test First type of higher order function [with functional parameter ]   :  
     function hoFuncPar() {
        alert('Welcome to  Test First type of higher order function [with functional parameter ]   ');

        dis.innerHTML = '';


        //  Define a normal function of converting a given string value parameter in to lower case  :
            const  lowerCase = (str) => {
                return str.toLowerCase(str) ; 
            }
        // ------------------------------


        // Define a function of first type Higher order function [that using the perious defined normal  function as one of it's parameter ] :  
            const transform = ( fn , word) => {
                // returning the both [functional parameter {callback function}] & [ other parameter as it's functional parameter 's inner parameter] :   
                return fn(word) ;
            }
        // ---------------------------

        // calling and using the Higher Order Function [with assigning main higher order function's parameters => predefined callback function  & stringvalue ] :
            console.log(transform(lowerCase , 'SHADI' ) );    
        // ---------------------------------
       

        dis.innerHTML = 'Test First type of higher order function [with functional parameter ] app  : ' +  hoFuncPar + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Test Second type of higher order function [with functional return ] :
    function  hoFuncReturn() {
        alert('Welcome to Test Second type of higher order function [with functional return ] ');

        dis.innerHTML = '';
 
         // Define a function of second type Higher order function [that return a new fuction as the value of it's reutnrining    ] :  
         const sayHi = (welcome) => {
            // returning  a new function [arrow function] with it's own paramnter and the main funcion's parameter (to access to this function's return value -> must use the defined functional variable with it's value   )  :  
            return  (name) => {
                console.log(`${welcome} ${name} `) ;
            } 
        }
        // ---------------------------

        //  Define a new functional variable with the value of the main higher order fuction return value   :
             const hi = sayHi('welcome [from the functional variable ] ') ;
        // ---------------------------------


        // Trying the calling and using of the [direct high order function] -> (will throw an Error) or present no thing : 
            console.log( `The return value of [direct high order function] is : 
           : `);    
        
             sayHi('Welcome [from the main direct high order function ] ')  ;
            //  --------------------------------
             
        // calling and using of defined functional variable return value [with using the inner functinal return parameter ]   : 
            console.log( `The return value of [defined functional variable] is : 
             `);    
             
             hi('Shadi') ;
            
        // ---------------------------------
   
        dis.innerHTML += 'Test Second type of higher order function [with functional return ] app : ' + hoFuncReturn + '<br>' ;
        
    }
    // =========================================================
    
  
   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}