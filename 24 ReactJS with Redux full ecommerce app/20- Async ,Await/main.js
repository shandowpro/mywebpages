// 20- Async ,Await
/* Main lessons functions :
    1- Testing using [Async , Await] & [try , Catch] with using {Arrow function}    
    2- Testing using [Async , Await] & [try , Catch] with using {Default function}      
*/
// ---------------------------------------------------------------------

// 20- Async ,Await :
function myTest() {
    'use strict' ;
    alert('Welcome to 20- Async ,Await  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Testing using [Async , Await] & [try , Catch] with using {Arrow function}  \n  2] Testing using [Async , Await] & [try , Catch] with using {Default function}  \n    ');    

    if (x == 1 ) {
        
        AsyncAwaitArrow();

    } else if (x == 2) {
    
        AsyncAwaitDef();
        
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

    // 1]  Testing using [Async , Await] & [try , Catch] with using {Arrow function}    :
    function AsyncAwaitArrow() {
        alert('Welcome to Testing using [Async , Await] & [try , Catch] with using {Arrow function}  ');

        dis.innerHTML = '';

        // Define several dependnecies variables  :     
            let eat = true  ; 
            let play  = false ; 
            let sleep = true ; 
        // -------------------------------


        // A] Define several promises : 
            // 1) Define the first promise [EATING]:
                // Define a constainer function to be callaed inside the async function :  
                const EATING = () => {
                    // adding the promise definition inside the return of the function :   
                    return new Promise( (success , failed) => {
                        if (eat) {
                            success('Im eating') ;
                        } else {
                            failed('Im not eating ') ;
                        }
                    });
                }

            // 2) Define the second promise [PLAYING]:
                const PLAYING = () => {
                    return new Promise( (success , failed) => {
                        if (play ) {
                            success('Im playing') ;
                        } else {
                            failed('Im not playing ') ;
                        }
                    });
                }

            // 3) Define the Third promise [SLEEPING]:
                const SLEEPING = () => {
                    return new Promise( (success , failed) => {
                        if (sleep) {
                            success('Im sleeping') ;
                        } else {
                            failed('Im not sleeping ') ;
                        }
                    });
                }
            // ----------------------------------------

        // B] Define the {Async} function p[using arrow function form]  :
            // Define an Async function with await , inside a try and catch [to catch the value of rejected value ] : 
            const run = async() => {
                try{
                    const eatMessage = await EATING();
                    console.log(eatMessage);
                    const playMessage = await PLAYING ();
                    console.log(playMessage);
                    const sleepMessage = await SLEEPING();
                    console.log(sleepMessage);
                }catch(e) { console.log(e); }
            } 
            
        // C] Execute the Async running function :
            run();
        // ---------------------------------------

 
            dis.innerHTML = 'Testing using [Async , Await] & [try , Catch] with using {Arrow function} : ' +  AsyncAwaitArrow + '<br>' ;


        // ------------------------

    }
    // =============================================================

    // 2] Testing using [Async , Await] & [try , Catch] with using {Default function}       :
    function AsyncAwaitDef() {
        alert('Welcome to Testing using [Async , Await] & [try , Catch] with using {Default function} ');

        dis.innerHTML = '';
 
        // Define several dependnecies variables  :     
            let eat = false ; 
            let play  = true  ; 
            let sleep = true ; 
        // -------------------------------
     
        // Define several promisees [using default fuction ] :
            // Define the first promise [EATING] : 
                const EATING = () => {
                    return new Promise( (success , failed) => {
                        if (eat) {
                            success('Eating done ');
                        } else {
                            failed('Eating failed ');
                       }
                    } ) ;
                } 
            //-------------------------------
            
            // Define the second promise [PLAYING] : 
                const PLAYING = () => {
                    return new Promise( (success , failed) => {
                        if (play) {
                            success('Playing Done ');
                        } else {
                            failed('Playing Failed ');
                       }
                    } ) ;
                } 
            //-------------------------------

            // Define the third promise [SLEEPING] : 
                const SLEEPING = () => {
                    return new Promise( (success , failed) => {
                        if (sleep) {
                            success('Sleeping Done ');
                        } else {
                            failed('Sleeping Failed ');
                       }
                    } ) ;
                } 
            //-------------------------------
            //-------------------------------

        //  Define the [Async] running function [using the default function form]:
            async function run() {
                try{
                    const eatMessage = await EATING() ;
                    console.log(eatMessage);
                    
                    const playMessage = await PLAYING() ;
                    console.log(playMessage);
                    
                    const sleepMessage = await SLEEPING() ;
                    console.log(sleepMessage);
                }
                catch (e) {
                    console.log(e);
                } 
            } 
        // ------------------------------          

        // Executing [Async] :
            run();            
        // ------------------------------


 
        dis.innerHTML += 'Testing using [Async , Await] & [try , Catch] with using {Default function} : ' + AsyncAwaitDef + '<br>' ;
        
    }
    // =========================================================
   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}