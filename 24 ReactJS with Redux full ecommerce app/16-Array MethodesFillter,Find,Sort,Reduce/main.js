// /16-Array MethodesFillter,Find,Sort,Reduce
/* Main lessons functions :
     1- filter() 
     2- find()
     3- sort()
     4- reduce()

*/
// ---------------------------------------------------------------------

// 16-Array Methodes Fillter,Find,Sort,Reduce   :
function myTest() {
    'use strict' ;
    alert('Welcome to 16-Array Methodes Fillter,Find,Sort,Reduce   ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] using the filter method to get a new array a given array  \n  2] using the find methoed to find certtain value inside a given array \n 3] using the sort method to sort a given array according to a certain sorting pattern  \n  4] using the reduce method to apply a accumulative/concatentating process on the given array ');    

    if (x == 1 ) {
        
        filterArr();

    } else if (x == 2) {
    
        findArr();
        
    } else if (x == 3) {
    
        sortArr();       
    
    } else if (x == 4) {

        reduceArr();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    //  1] using the {.filter()} method to get a new array a given array   :
    function filterArr() {
        alert('Welcome to Test using the {.filter()} method to get a new array a given array ');

        dis.innerHTML = '';


        //  Define a Main array : 
            const arr = [1 , 2 , 3 , 4 , 5 , 6] ;
 
        //  Define new array of filtered value of the main array [according to equal certain value ]  : 
            const arr1 = arr.filter(item=> item === 5  )  ;
        // ---------------------------------------
        
        //  Define new array of filtered value of the main array [according to biggrer than certain value ]  : 
            const arr2 = arr.filter( item => item > 3  )  ;

        // ---------------------------------------
        //  Define new array of filtered value of the main array [according to smaller than certain value ]  : 
            const arr3 = arr.filter( item => item < 5  )  ;

        // ---------------------------------------

        // printing the main array : 
        console.log(`The main array is 
         ${arr}`
         );
    
        // printing the filtered array by using [equality condition] : 
        console.log(`The filtered array by using [equality condition] :
         ${arr1}` 
         );
     
        // printing the filtered array by using [Bigger than condition] : 
        console.log(`The filtered array by using [equality condition] :
         ${arr2}` 
         );
     
        // printing the filtered array by using [Smaller than condition] : 
        console.log(`The filtered array by using [Smaller condition] :
         ${arr3}` 
         );
     
    
        dis.innerHTML = 'using the {.filter()} method to get a new array a given array   : ' +  filterArr + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] using the {.find()} method to find certtain value inside a given array :
    function  findArr() {
        alert('Welcome to Test using the find method to find certtain value inside a given array ');

        dis.innerHTML = '';
  
         // Define the main array :
            const arr = [1 , 2 , 3 , 4 , 5 , 6 ] ;

        // Define the find variable :
            const firstFindBiggerValue =  arr.find(item => item > 3   ) ;

        // Define the find variable :
            const firstFindSmallerValue =  arr.find(item => item < 3  ) ;

        // printing the first value is applying the assinged condition by using find() : 
            console.log(`
            The first value is applying the assinged condition [bigger than 3] by using find() is :
            ${firstFindBiggerValue} 
            
            The first value is applying the assinged condition [smaller than 3] by using find() is :
            ${firstFindSmallerValue} 
            
            The main array is :
            ${arr} 
            ` ) ;
        // ------------------------------------

        dis.innerHTML += 'using the {.find()} method to find certtain value inside a given array  : ' + findArr  + '<br>' ;
        
    }
    // =========================================================
    
    //  3]  using the {.sort()} method to sort a given array according to a certain sorting pattern :
    function sortArr() {
        alert('Welcome to Test using the {.sort()} method to sort a given array according to a certain sorting pattern  ');

        dis.innerHTML = '';
  
        // Define the main array [not ordered numeric array] :
            const arr1 = [1 ,5, 4, 10, 7, 6 , 2] ;
            const arr2 = [1 ,5, 4, 10, 7, 6 , 2] ;


        // Define new sorted array according to [{Assendingly pattern} -> (from smaller to the bigger) ]  : 
            const arrs1 = arr1.sort( (a , b) => {
                if (a > b) return 1
                if (b > a) return -1
            } );        

  
        // Define new sorted array according to [{Desendingly pattern} -> (from bigger to the smaller ) ]  : 
            const arrs2 = arr2.sort( (a , b) => {
                if (a < b) return 1 
                if (b < a) return -1 
            } );        

        // printing the both value of arrays after being sorted :  
            console.log(`
            The main first array is :
            ${arr1} 
            The sorted array by using [Assendengily] sorting pattern of first array is :
            ${arrs1} 
            The second array is :
            ${arr2} 
            The sorted array by using [Descendengily] sorting pattern of second array  is :
            ${arrs2} 
            ` ) ;
        // ---------------------------------------------
   
        dis.innerHTML += ' using the {.sort()} method to sort a given array according to a certain sorting pattern [Ascendingly] & [Descndingly]  : '  +  sortArr + '<br>' ;
        
    }
    // =========================================================

    //  4] using the {reduce()} method to apply a accumulative/concatentating process on the given array     :
    function reduceArr() {
        alert('Welcome to Test using the {reduce()} method to apply a accumulative/concatentating process on the given array      ');

        dis.innerHTML = '';


        // Define the main array [numeric array] :
            const arrNum = [1 ,2, 3, 4] ;
        
        // Define the main array [letters array] :
            const arrLetter = ['a' ,'b', 'c', 'd', 'e', 'f'] ;

        // Define a new reduced array from   main numeric array  : 
            const arrNumR = arrNum.reduce( (total, current) => total + current ,0   );
         
        // Define a new reduced array from  main letter array  : 
            const arrLetterR = arrLetter.reduce( (total, current) => total + current , 'z');
        
        //  printing reduced arrays : 
            console.log(`
                The main numeric array is :
                ${arrNum} 
                The main Letter array is :
                ${arrLetter} 
                --------
                The sorted numeric array is :
                ${arrNumR} 
                The sorted Letter array is :
                ${arrLetterR}  
            ` ) ;
        // ---------------------------------------------


        dis.innerHTML += 'using the {reduce()} method to apply a accumulative/concatentating process on the given array  : '  + reduceArr + '<br>' ;
        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}