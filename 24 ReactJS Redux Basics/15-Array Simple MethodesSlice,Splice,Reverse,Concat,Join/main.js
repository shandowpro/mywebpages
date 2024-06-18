//   15-Array Simple MethodesSlice,Splice,Reverse,Concat,Join :
/* Main lessons functions :
    1- slice() 
    2- splice()
    3- reverse() 
    4- concat() & spread operator {...} 
    5- join() 
*/
// ---------------------------------------------------------------------

// 15-Array Simple MethodesSlice,Splice,Reverse,Concat,Join :
function myTest() {
    'use strict' ;
    alert('Welcome to  15-Array Simple Methodes Slice,Splice,Reverse,Concat,Join  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1]  using slice() to assign a copy of aray inside another array \n  2]  using splice() to assign a cutten part of a given array inside another array   \n  3] using reverse() to assign a reversed array value of a given array inside another array \n 4] using concat() & (spreading operator)  to merge between (2) arrays  inside another array  \n 5]  using join() to insert a special string between array\' elements ');    

    if (x == 1 ) {
        
        sliceArr();

    } else if (x == 2) {
    
        spliceArr();
        
    } else if (x == 3) {
    
        reverseArr();       
    
    } else if (x == 4) {

        concatArr();
    
    } else if (x == 5) {

        joinArr();

    // } else if (x == 6) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Test using slice() to assign a copy of aray inside another array  :
    function sliceArr() {
        alert('Welcome to Test using slice() to assign a copy of aray inside another array    ');

        dis.innerHTML = '';
        
        // Define the main Array :
        let arr = [ 1 , 2 , 3 , 4 , 5] ;  
 
        // Define a new Array with value of sliced of the main array  [with starting index] :
        let arr1 = arr.slice(1) ;  
 
        // Define a new Array with value of sliced of the main array  [with starting index & ending index] :
        let arr2 = arr.slice(1 , 3) ;  
 
        // Define a new Array with value of sliced of the main array  [with negative index -1] :
        let arr3 = arr.slice(-1) ;  
 
        // Define a new Array with value of sliced of the main array  [with negative index -2] :
        let arr4 = arr.slice(-2) ;  
 

        // printing all sliced arrays :
        console.log(`new Array with value of sliced of the main array  [with starting index] ${arr1}
        new Array with value of sliced of the main array  [with starting index & ending index]  ${arr2}
        new Array with value of sliced of the main array [with negative index -1]  ${arr3}
        new Array with value of sliced of the main array  [with negative index -2] ${arr4}
        `   );
        // ---------------------------------------
         
        
        dis.innerHTML = ' using slice() to assign a copy of aray inside another array: ' +  sliceArr + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] using splice() to assign a cutten part of a given array inside another array :
    function spliceArr() {
        alert('Welcome to Test using splice() to assign a cutten part of a given array inside another array ');

        dis.innerHTML = '';

        // Define the main Array :
           let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9] ;  
 
        // Define a new Array with value of spliced of the main array  [with starting index] :
           let arr1 = arr.splice(5) ;  
 
        // Define a new Array with value of spliced of the main array  [with starting index & ending index] :
            let arr2 = arr.splice(1 , 2) ;  
 
        // Define a new Array with value of spliced of the main array  [with negative index -1] :
            let arr3 = arr.splice(-1) ;  
 
        // Define a new Array with value of spliced of the main array  [with negative index -2] :
            let arr4 = arr.splice(-2) ;  
 

        // printing all spliced arrays :
            console.log(`new Array with value of spliced of the main array  [with starting index] ${arr1}
            new Array with value of spliced of the main array  [with starting index & ending index]  ${arr2}
            new Array with value of spliced of the main array [with negative index -1]  ${arr3}
            new Array with value of spliced of the main array  [with negative index -2] ${arr4}
            `   );
        // ---------------------------------------
         
        dis.innerHTML += '  using splice() to assign a cutten part of a given array inside another array : ' + spliceArr + '<br>' ;
        
    }
    // =========================================================
    
    // 3] using reverse() to assign a reversed array value of a given array inside another array :
    function reverseArr() {
        alert('Welcome to Test using reverse() to assign a reversed array value of a given array inside another array ');

        dis.innerHTML = '';

        // Define the main Array :
        let arr = [ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9] ;  
            
        // Define an array with reversed main array  :
        let arr1 =  arr.reverse();  


        // printing reversed array and main array :
        console.log(` The main array is :  ${arr}
        new Array with value of reversed of main array  :  ${arr1}
        `   );
        // ---------------------------------------
        

        dis.innerHTML += '  using reverse() to assign a reversed array value of a given array inside another array : '  + reverseArr + '<br>' ;
        
    }
    // =========================================================

    // 4] using concat() & (spreading operator)  to merge between (2) arrays  inside another array   :
    function concatArr() {
        alert('Welcome to Test using concat() & (spreading operator)  to merge between (2) arrays  inside another array    ');

        dis.innerHTML = '';
 
        // Define (2) arrays  : 
            let arr1 = [ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9] ;    
            let arr2 = [ 'a' , 'b' , 'c' ,'d' ,'e'] ;    
            
        
        // Define new array of value of merged (2) arrays [using conct()  ]  : 
            let arr3 = arr1.concat(arr2) ; 
        
         // Define new array of value of merged (2) arrays [using spreading operatar()  ]  : 
            let arr4 = [arr1, ...arr2]; 

        // printing main (2) arrays +  merged array :
            console.log(`main first  Array  :  ${arr1}           
            main second Array  :  ${arr2}
            Final merged Array [using concat() method]  :  ${arr3}
            Final merged Array [using  spreading operator{...} method]  :  ${arr4}
            ` );
        // ---------------------------------------
              
        dis.innerHTML += 'using both concat() & (spreading operator) to merge between (2) arrays  inside another array  Method : '  + concatArr + '<br>' ;
        
    }
    // =========================================================

    // 5] using join() to insert a special string between array  elements :

    function joinArr() {
        alert('Welcome to Test using join() to insert a special string between array\' elements     ');

        dis.innerHTML = '';
 

        // Define  the main array :
        let arr1 = [ 1 , 2 , 3 , 4 , 5 , 6 , 7, 8 , 9] ;    

        // Define a new array with inserted special stirng  : 
        let arr2 = arr1.join('-') ;
        
        // printing main (2) arrays [main array + joined array] :
            console.log(`main Array  :  ${arr1}           
            joined Array  :  ${arr2}
            ` );
        // ---------------------------------------


        dis.innerHTML += 'using join() to insert a special string between array\' elements : '  + joinArr + '<br>' ;
        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}