//  19- Multi Promise :
/* Main lessons functions :
    1-  Using default Multi promises by {Asynchronous} concept using [seperated then()] {In-Dependency}  
    2-  Using default Multi promises by {Asynchronous} concept using [nested then()] {Dependency}
*/
// ---------------------------------------------------------------------

// 19- Multi Promise   :
function myTest() {
    'use strict' ;
    alert('Welcome to 19- Multi Promise  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1]  Using default Multi promises by {Asynchronous} concept [seperated then()] {In-Dependency}  \n  2] Using default Multi promises by {Asynchronous} concept [nested then)] {Dependency} ');    

    if (x == 1 ) {
        
        sepAsyncMultProms();

    } else if (x == 2) {
    
        nestAsyncMultProms();
        
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

    // 1] Test Using default Multi promises by {Asynchronous} concept [seperated then()]   {In-Dependency} :
    function sepSyncMultProms() {
        alert('Welcome to Test Using default Multi promises by {Synchronous} concept [seperated then()]    ');

        dis.innerHTML = '';

        //  Define serveral variables as dependencies    :
            let eat = true ; 
            let play = false ; 
            let sleep = true ; 
        // ---------------------------------
        
        // Define the first promise [eating] :
            let eating  = new Promise( (success , failed ) => {
                if (eat) {
                    success('Im eating ');
                } else {
                    failed('Im NOT eating ');
                }
            }); 

        // Define the second promise [playing ] :
            let playing  = new Promise( (success , failed ) => {
                if (play) {
                    success('Im playing ');
                } else {
                    failed('Im NOT playing ');
                }
            }); 

        // Define the third promise [sleeping] :
            let sleeping  = new Promise( (success , failed ) => {
                if (sleep) {
                    success('Im sleeping ');
                } else {
                    failed('Im NOT sleeping ');
                }
            }); 
        //---------------------------------- 
        //---------------------------------- 
 
        // Exceute the first promise :
            eating.then(
                (resolve) => console.log(resolve) ,
                (rejected) => console.log(rejected)
            );

            // Exceute the second promise :
            playing.then(
                (resolve) => console.log(resolve) ,
                (rejected) => console.log(rejected)
            );
            
            // Exceute the third promise :
            sleeping.then(
                (resolve) => console.log(resolve) ,
                (rejected) => console.log(rejected)
            );
        // ------------------------------

        dis.innerHTML = 'Test Using default Multi promises by {Synchronous} concept [seperated then()]   : ' +  sepSyncMultProms + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Test Using default Multi promises by {Asynchronous} concept [nested then()] {Dependency} :
    function nestAsyncMultProms() {
        alert('Welcome to Test Using default Multi promises by {Asynchronous} concept [nested then()]   ');

        dis.innerHTML = '';

        //  Define serveral variables as dependencies    :
            let eat = true ; 
            let play = false ; 
            let sleep = true ; 
        // ---------------------------------
    
        // Define the first promise [eating] :
            let eating  = new Promise( (success , failed ) => {
                if (eat) {
                    success('Im eating ');
                } else {
                    failed('Im NOT eating ');
                }
            }); 

        // Define the second promise [playing ] :
            let playing  = new Promise( (success , failed ) => {
                if (play) {
                    success('Im playing ');
                } else {
                    failed('Im NOT playing ');
                }
            }); 

        // Define the third promise [sleeping] :
            let sleeping  = new Promise( (success , failed ) => {
                if (sleep) {
                    success('Im sleeping ');
                } else {
                    failed('Im NOT sleeping ');
                }
            }); 
        //---------------------------------- 
        //---------------------------------- 

        // Exceute the all promise [using nested then() in order => {eating -> palying ->  sleeping } ] :
        // starting the first promise [eating] : 
        eating.then(
            (resolve) =>{
                console.log(resolve) ,
                // starting the second promise [playing] :
                playing.then(
                    (resolve) => {
                        console.log(resolve) ,
                        // starting the thired promise [sleeping] :
                        sleeping.then(
                            (resolve) => {console.log(resolve)} ,
                            (rejected) => {console.log(rejected)}
                        );
                    },
                    (rejected) => console.log(rejected)
                );
            } ,
            (rejected) => console.log(rejected)
        );
       // -------------------------------------------      

        dis.innerHTML += 'Test Using default Multi promises by {Asynchronous} concept [nested then()]  : ' + nestAsyncMultProms + '<br>' ;
        
    }
    // =========================================================
   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}