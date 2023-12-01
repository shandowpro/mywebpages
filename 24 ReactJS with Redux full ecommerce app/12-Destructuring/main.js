// 12-Destructuring  :
/* Main lessons functions :
    1- Destructuring Array  
    2- Destructuring Object  
       
*/
// ---------------------------------------------------------------------

// 12-Destructuring :
function myTest() {
    'use strict' ;
    alert('Welcome to 12-Destructuring   ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Destructuring Array  function \n  2] Destructuring Object   function  ');    

    if (x == 1 ) {
        
        destArr();

    } else if (x == 2) {
    
        destObj();
        
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

    // 1] Test Destructuring Array  :       
    function destArr() {
        alert('Welcome to Test Destructuring Array   ');

        dis.innerHTML = '';

        // Define an array :
            const arr =  [1 , 2 , 3 ,  4  , 5 ,  6 ] ;

         // Destructuring only (2) not in order elements the defined array into (2) varaibles only :  
            const [n1 , , , n2]  = arr          

        // printing the destructured variables : 
            console.log(  'The destructured not in order variables from the array are : ', n1 , n2) ;
 
        // ---------------------------------------
        
        
        dis.innerHTML = 'Destructred Array method : ' +  destArr  + '<br>' ;
        
        // ------------------------
        
    }
    // =============================================================

    // 2]  Testing Destructuring Object Function  :
    function destObj  () {
        alert('Welcome to Test Destructuring Object ');

        dis.innerHTML = '';
        
        // Define an Object :
            const obj =   {
                id : '1' ,
                name: 'shadi' ,
                age : '33' ,             
                city : 'cairo'  
            } ;

        // Destructuring only (2) elements[keys : id , name] of the defined object into (2) varaibles only :  
            const {id , name}  = obj  ;          

        // printing the destructured variables : 
            console.log( 'The Destructured variables from object are : ' , id , name) ;
    
        // ---------------------------------------
                
        dis.innerHTML = ' Destructuring Object Function  : ' +  destObj + '<br>' ;
        
    }   
    // =========================================================
      
   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}