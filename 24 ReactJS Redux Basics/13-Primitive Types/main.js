// 13-Primitive Types :
/* Main lessons functions :
    1- {Primitive Types} & {spreading operator } with variables 
    2- {Primitive Types} & {spreading operator } with arrays 
    3- {Primitive Types} & {spreading operator } with objects
*/
// ---------------------------------------------------------------------

// 13-Primitive Types :
function myTest() {
    'use strict' ;
    alert('Welcome to 13-Primitive Types  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] {Primitive Types} & {spreading operator } with variables  \n  2] {Primitive Types} & {spreading operator } with arrays  \n  3] {Primitive Types} & {spreading operator } with objects \n   ');    

    if (x == 1 ) {
        
        primVars();

    } else if (x == 2) {
    
        primArrs();
        
    } else if (x == 3) {
    
        primObjs();       
    
    // } else if (x == 4) {

        // primSpr();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Test {Primitive Types} & {spreading operator } with variables   :
    function primVars() {
        alert('Welcome to Test {Primitive Types} & {spreading operator } with variables  ');

        dis.innerHTML = '';
        
        // Define a referenced variable : 
            let var1 = 'ali' ;

        // Assing a new varialbe with defined referenced variable [using the {primitivve Types} ] : 
            let var2 = var1 ;

        // Assing a new varialbe with defined referenced variable [using the {primitivve Types} ] : 
        // let var3 = ...var1 ;

        // Changing the value of the reference value of [var1] :
            var1 = 'shadi' ;

        // Printing the value of [var2] after changing the value of refernece [var1] :
            console.log('The value of the new variable after changing value of the Refernece variable ' , var2) ;

        dis.innerHTML = ' Test {Primitive Types} & {Spreading operator} with variables : ' +  primVars + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] {Primitive Types} & {spreading operator } with arrays :
    function primArrs() {
        alert('Welcome to Test {Primitive Types} & {spreading operator } with arrays  ');

        dis.innerHTML = '';

        // Define a referenced array : 
        let arr1 =  [1 , 2 , 3 ] ;

        // Assign a new array with defined referenced array [using the {primitive Types} ] : 
            let arr2 = [ arr1 ] ;

        // Assign a new array with defined referenced array [using the {spreading operator} ] : 
            let arr3 = [...arr1] ;

        // Changing the value of the reference value of [var1] :
            arr1 =  [4 ,  5 ,  6 ] ;

        // Printing the value of [arr2] after changing the value of its Refernece [arr1] :
            console.log('The value of the new array [assigned primitive operator] after changing value of the Referenece array ' , arr2) ;

        // Printing the value of [arr3] after changing the value of its Refernece [arr1] :
            console.log('The value of the new array [assigned Spreading operator] after changing value of the Referenece array ' , arr3) ;

  
        // Printing the value of [arr3] after changing the value of its Refernece [arr1] :
            console.log('The value of the main reference array  :  ' , arr1) ;

  
        dis.innerHTML = ' Test {Primitive Types} & {Spreading operator} with arrays : ' + primArrs + '<br>' ;
        
    }
    // =========================================================
       
    // 3] Testing {Primitive Types} & {Spreading operator} with the object  :
    function primObjs() {
        alert('Welcome to Test {Primitive Types} & {Spreading operator} with objects   ');

        dis.innerHTML = '';

        // Define a referenced object : 
            let obj1 =  {name:'ali'  } ;

        // Assign a new object with defined referenced object [using the {primitive Types} ] : 
            let obj2 = {obj1} ;
      
        // Assign a new object with defined referenced object [using the {spreading operator} ] : 
            let obj3 = {...obj1} ;
      
        // Changing the value of the reference value of [obj1] :
            obj1.name = "shadi"   ;

        // Printing the value of [obj2] after changing the value of its Refernece [obj1] :
            console.log('The value of the new object [assinged primitive operator] after changing value of the Referenece object ' , obj2) ;
 
        // Printing the value of [obj3] after changing the value of its Refernece [obj1] :
            console.log('The value of the new array [assigned Spreading operator] after changing value of the Referenece array ' , obj3) ;


        dis.innerHTML = ' Test {Primitive Types} & {Spreading operator} with objects : ' + primObjs + '<br>' ;
        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}