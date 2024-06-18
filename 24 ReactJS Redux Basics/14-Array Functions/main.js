//  14-Array Functions :
/* Main lessons functions :
    1-   using mapping function to return the array value inside another array [without changing] 
    2-   using mapping function to return the array value inside another array [with boolean values ]   
    3-   using mapping function to return the array value inside another array [with math calcuation values ]   
    4-   using mapping function to return the array value inside another array [with increament values ]   
        
*/
// ---------------------------------------------------------------------

// 14-Array Functions  :
function myTest() {
    'use strict' ;
    alert('Welcome to  Array Functions ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] using mapping function to return the array value inside another array [without changing]  \n  2] using mapping function to return the array value inside another array [with boolean values ] \n 3] using mapping function to return the array value inside another array [with  Math calculation  values ] \n   4] using mapping function to return the array value inside another array [with  increament  values ]  ');    

    if (x == 1 ) {
        
        mapSimpleValue();

    } else if (x == 2) {
    
        mapBooleanValue();
        
    } else if (x == 3) {
    
        mapMathCalcValue();       
    
    } else if (x == 4) {

        mapIncrementValue();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Test using mapping function to return the array value inside another array [without changing]  :
    function mapSimpleValue() {
        alert('Welcome to Test using mapping function to return the array value inside another array [without changing]  ');

        dis.innerHTML = '';
 
        //  Define the main array :
        let arr =  [ 1 , 2 , 3 ];  
         
        // Define another array with the value of main array after mapping [returing simple values]  :
        let newArr = arr.map( (item) => {
            return item; 
        } );        
        // ---------------------------------------
        
        // printing the new array after mapping :
            console.log(newArr) ;              
        

        dis.innerHTML = 'using mapping function to return the array value inside another array [without changing]  : ' + mapSimpleValue + '<br>' ;

        // ------------------------
    }
    // =============================================================

    // 2] Testing using mapping function to return the array value inside another array [with boolean values ]   :
    function mapBooleanValue() {
        alert('Welcome to Test  using mapping function to return the array value inside another array [with boolean values ]  ');

        dis.innerHTML = '';
 
        //  Define the main array :
           let arr =  [ 1 , 2 , 3 ];  
    
        // Define another array with the value of main array after mapping [returing boolean values]  :
            let newArr = arr.map( (item) => {
                return item === 3 ; 
            } );        
        // ---------------------------------------
 
        // printing the new array after mapping :
           console.log(newArr) ;              
            
        
        dis.innerHTML += 'using mapping function to return the array value inside another array [with boolean values ]   : ' +  mapBooleanValue + '<br>' ;
        
    }
    // =========================================================

    // 3] Testing using mapping function to return the array value inside another array [with math processing values ]   :
    function mapMathCalcValue() {
        alert('Welcome to Test  using mapping function to return the array value inside another array [with math processing values ]    ');

        dis.innerHTML = '';
 
        //  Define the main array :
           let arr =  [ 1 , 2 , 3 ];  
    
        // Define another array with the value of main array after mapping [returing math calculation values]  :
            let newArr = arr.map( (item) => {
                return item + 10 ; 
            } );        
        // ---------------------------------------
 
        // printing the new array after mapping :
           console.log(newArr) ;              
            
        
        dis.innerHTML += 'using mapping function to return the array value inside another array [with math processing values ]  : ' + mapMathCalcValue + '<br>' ;
        
    }
    // =========================================================
 
    //===========================================================
    // 4] Testing using mapping function to return the array value inside another array [with increment values ]   :
    function mapIncrementValue() {
        alert('Welcome to Test  using mapping function to return the array value inside another array [with increment values ]    ');

        dis.innerHTML = '';
 
        //  Define the main array :
           let arr =  [ 1 , 2 , 3 ];  
    
        // Define another array with the value of main array after mapping [returing math calculation values]  :
            let newArr = arr.map( (item) => {
                return item +=1  ; 
            } );        
        // ---------------------------------------
 
        // printing the new array after mapping :
           console.log(newArr) ;              
            
        
        dis.innerHTML += 'using mapping function to return the array value inside another array [with increament values ]  : ' + mapIncrementValue + '<br>' ;
        
    }
    // =========================================================
       //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}