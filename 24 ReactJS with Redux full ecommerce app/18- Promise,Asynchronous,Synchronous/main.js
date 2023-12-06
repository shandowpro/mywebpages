//  18- Promise,Asynchronous,Synchronous :
/* Main lessons functions :
    1- Defining [Defualt form] promise object and then function  
    2- Defining [Shorted chain form] promise object and then function   
*/
// ---------------------------------------------------------------------

// 18- Promise,Asynchronous,Synchronous  :
function myTest() {
    'use strict' ;
    alert('Welcome to 18- Promise,Asynchronous,Synchronous ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Defining [Defualt form] promise object and then function   \n  2] Defining [Shorted chain form] promise object and then function ');    

    if (x == 1 ) {
        
        defPromise();

    } else if (x == 2) {
    
        shortPromise();
        
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

    // 1] Defining [Defualt form] promise object and then function :
    function defPromise() {
        alert('Welcome to Test  Defining [Defualt form] promise object and then function  ');

        dis.innerHTML = '';

        const x = 1 ;

        // Defining the promise as extracted object froim the main promise Class :
        let myPromise = new Promise( (success , error) => {
            if (x === 1) { 
                console.log('Correct');
                success('Fethcing data from API has Done') ;
                console.log('Suceess'); 
            } else {
                console.log('Wrong'); 
                error('Fetching Data from API is Failed ') 
                console.log('Fialed'); 
            }
        } ) ;
        // ------------------------------------
        
        // Executing the defined promise :     
            myPromise.then(
                (resolve) => console.log(resolve) , 
                (rejected) => console.log(rejected)  
            ) ; 
        // ---------------------------------------
          
        dis.innerHTML = 'Defining [Defualt form] promise object and then function : ' + defPromise + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Defining [Shorted chain form] promise object and then function    :
    function shortPromise() {
        alert('Welcome to Test Defining [Shorted chain form] promise object and then function ');

        dis.innerHTML = '';

        // Define a testing variable in the promise :
            const x = 0 ;
        // --------------------


        // Define a new promise object  :
        let myPromise = new Promise ( ( success , failed ) =>  {
            if (x === 1) {
                 console.log('Correct');
                success('Fethcing data from API has Done') ;
                console.log('Suceess'); 
            } else {
                console.log('Wrong'); 
                failed('Fetching Data from API is Failed ') 
                console.log('Fialed'); 
            }

        }).then(
            // Returning resolve value with custom value :  
            (resolve) => console.log('Promise Success'),
            // Returning rejected value with exact value :  
            (rejected) => console.log(rejected)  
        ) ; 

         
        
        
        dis.innerHTML += 'Defining [Shorted chain form] promise object and then function  : ' + shortPromise + '<br>' ;
        
    }

    // =========================================================

       //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(20) + "\n\n";
    }

}