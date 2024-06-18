//  11-Spread Operators :
/* Main lessons functions :
    1- using spread operators with arrays 
    2- using spread operators with objects 
    3- using spread operators with functions  
       
*/
// ---------------------------------------------------------------------

// 5 Arrow Function And [This] operator  :
function myTest() {
    'use strict' ;
    alert('Welcome to 11-Spread Operators  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] using spread operators with defining Arrays function \n  2]   using spread operators with defining Objects function  \n  3] using spread operators with functions\' parameters   ');    

    if (x == 1 ) {
        
        spreadArr();

    } else if (x == 2) {
    
        spreadObj();
        
    } else if (x == 3) {
    
        spreadFunc();       
    
    // } else if (x == 4) {

    //     arrowShortFunc2();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Test using spread operators with defining Arrays function :
    function spreadArr() {
        alert('Welcome to Test using spread operators with defining Arrays function   ');

        dis.innerHTML = '';
 
        //  Defining old array :
            let oldArr = [2 , 3 , 4]  ; 

        //  Defining new array [adding new elements into the spreaded array elements - before the spreaded array and after   -] :
            let newArr = [1, ...oldArr  , 5 , 6]  ; 
   
  
        //  Printing new Array after adding sereaded old array :
            console.log(newArr) ;
        
        // ---------------------------------------
         
        dis.innerHTML = 'spread operators with defining Arrays function : ' +  spreadArr + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Testing using spread operators with defining Objects function :
    function spreadObj() {
        alert('Welcome to Test using spread operators with defining Objects function ');

        dis.innerHTML = '';
 
        //  Defining old Object :
           let oldObj = {id:'1' , name: 'ali'}  ; 

        //  Defining new object [ Adding new elements into the spreaded object elements - before the spreaded object and after   -] :
            let newObj1 = { ip:'100' , ...oldObj , age: '35'  }  ; 
    
    
        //  Defining new object [ Adding new elements into the spreaded object elements - before the spreaded object and after and modify one of the  element   -] :
            let newObj2 = { ip:'100' , ...oldObj , name:'shadi' , age: '35'  }  ; 
    
    
        //  Printing new Object after adding spreaded old object :
            console.log(` New Object after adding spreaded old object  : ` ) ;
            console.log(newObj1) ;
        
        
        //  Printing new Object after adding spreaded old object :
            console.log(` New Object after adding & Editing spreaded old object  : ` ) ;
            console.log(newObj2) ;
        
        
        dis.innerHTML = ' using spread operators with defining Objects function   : ' + spreadObj + '<br>' ;
        
    }
    // =========================================================
    
    // 3] Testing  using spread operators with functions's parameters  :
    function spreadFunc() {
        alert('Welcome to Test using spread operators with function\'s parameter ');

        dis.innerHTML = '';

        let funcSpreadFilter = (...args) =>  {
            // Retruning certain value according to the assigned conditon [argument value = 5] {using filter method} :
            return  args.filter(item  => item === 5 )   ; 
        }
    
         
        let funcSpreadIndex = (...args) =>  {
            // Retruning certain value according to the assigned condition [argument value = 5] {using array index: 2 } :
            return  args[2]   ; 
        }
    
         
        // funcSpreadFilter(1  , 2 , 3 , 4 ,  5 ,  6  ) ;

        // funcSpreadIndex(1  , 2 , 3 , 4 ,  5 ,  6  ) ;

        // printing the fuction of [Returning certain value according to the assigned conditon [argument value = 5] {using filter method}]  :  
            console.log(' Function return according [using Filter] Method : '  , funcSpreadFilter(1  , 2 , 3 , 4 ,  5 ,  6  ) ) ;
        
        
        // printing the  function of [Returning certain value according to the assigned condition [argument value = 5] {using array index: 2 }   :  
            console.log(' Function return according [using Index] Method : '  , funcSpreadIndex(1  , 2 , 3 , 4 ,  5 ,  6  ) ) ;
 

        dis.innerHTML += 'using spread operators with function\'s parameter : '  + spreadFunc + '<br>' ;
        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}