//  8 Normal Funcion Arrow Function  :
/* Main Creteria comparisoning  :
    1-  Overall syntax 
    2-  funcionm with one line of code
    3-  function with one paramaeter 
    4-  function with Returning calculation with paramater 
    5-  function with Returning calculation with NO paramater 
     
*/
// ---------------------------------------------------------------------

//  8 Normal Funcion Arrow Function     :
function myTest() {
    'use strict' ;
    alert('Welcome to 8 Normal Funcion Arrow Function  ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n 1] over all syntax functions  \n 2] Function with one line of Code  \n  3] Function with one Param  \n  4] Function Return calculation one Param \n 5] Function Return calculation with NO Param ');    

    if (x == 1 ) {
        
        overallSyntax();
        
    } else if (x == 2) {
        
        funcOnelineCode();
        
    } else if (x == 3) {
        
        funcOneParam();
        
    } else if (x == 4) {
        
        funcReturnParamCalc();       
        
    } else if (x == 5) {
        
        funcReturnNoParamCalc();
        
    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

// 1] Test {over all syntax comparisoning}  between  [Normal Function] & [Arrow Function]  :
    function overallSyntax() {
        alert('Welcome to Test {over all syntax} [Normal Function] & [Arrow Function]  ');

        dis.innerHTML = '';


        //  Define a [Normal Function] with [multiple lines and Paramters ]  :
        function Nfunc(a, b, c) {
            console.log('This is Normal function : ') ;             
            console.log('Hello : ' , a  ) ;             
            console.log('Age is : ' , b  ) ;             
            console.log(' phone is : ' , c ) ;             
        }
        
        // Executing the Normal Function :
        Nfunc('shadi' , 30  , '123456') ;
        
        
        
        //  Define a [Arrow  Function] with  [multiple lines and Paramters ]  :
        const Afunc = (a, b, c) => {
            console.log('This is an Arrow functoin ') ;             
            console.log('Hello : ' , a  ) ;             
            console.log('Age is : ' , b  ) ;             
            console.log(' phone is : ' , c ) ;             
        }
        
        
        // Executing the Arrow Function :
        Afunc('shadi' , 30  , '123456') ;
        
        // ---------------------------------------
        
          
        dis.innerHTML = '  : ' +  overallSyntax + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Test {Function with one line of Code}  between  [Normal Function] & [Arrow Function]  :
    function funcOnelineCode() {
        alert('Welcome to  Test Function with one line of Code  between  [Normal Function] & [Arrow Function]  ');

        dis.innerHTML = '';


        //  Define a [Normal Function] with [one line of code]  :
        function Nfunc() {
            console.log('This is a normal function :  Hello shadi' ) ;             
        }
        
        // Executing the Normal Function :
        Nfunc() ;
        
        // ---------------------------------------
                 
        //  Define a [Arrow Function] with [one line of code]  :
        const Afunc = () => console.log('This is an Arrow function : Hello shadi' ) ;             
 
        // Executing the Arrow Function :
        Afunc() ;
             
        // ---------------------------------------
                 
        dis.innerHTML = '  : ' +  funcOnelineCode + '<br>' ;
        // ------------------------

    }
    // =============================================================
  
    // 3] Test {Function with one parameter }  between  [Normal Function] & [Arrow Function]  :
    function funcOneParam() {
        alert('Welcome to  Test {Function with one parameter }  between  [Normal Function] & [Arrow Function]  ');

        dis.innerHTML = '';
 
        //  Define a [Normal Function] with [one parameter]  :
        function Nfunc(n) {
            console.log(' Hello ' , n ) ;             
        }
        
        // Executing the Normal Function :
        Nfunc('shadi') ;
        
        // ---------------------------------------
                 
        //  Define a [Arrow Function] with [one parameter]  :
        const Afunc = n =>  console.log(' Hello' , n ) ;             

        // Executing the [Arrow Function] :
        Afunc('shadi') ;
        
        // ---------------------------------------
                                   
        dis.innerHTML = '  : ' +  funcOneParam + '<br>' ;
        // ------------------------

    }
    // =============================================================
  
    // 4] Test {Function Return calculation one Param}  between  [Normal Function] & [Arrow Function]  :
    function funcReturnParamCalc() {
        alert('Welcome to  Test {Function Return calculation one Param  }  between  [Normal Function] & [Arrow Function]  ');

        dis.innerHTML = '';
 
        //  Define a [Normal Function] with [one parameter]  :
        function Nfunc(num) {
             return num * 3 ;
        }
        
        // Executing the Normal Function :
        console.log(Nfunc(2)) ;
        
        // ---------------------------------------
                 
        //  Define a [Arrow Function] with [one parameter]  :
        const Afunc = num => num * 3 ;             

        // Executing the [Arrow Function] :
        console.log(Afunc(2)) ;
        
        // ---------------------------------------
                                   
        dis.innerHTML = '  : ' +  funcReturnParamCalc  + '<br>' ;
        // ------------------------

    }
    // =============================================================
  
    // 5] Test {Function Return calculation NO Param}  between  [Normal Function] & [Arrow Function]  :
    function funcReturnNoParamCalc() {
        alert('Welcome to  Test {Function Return calculation NO Param  }  between  [Normal Function] & [Arrow Function]  ');

        dis.innerHTML = '';
 
        //  Define a [Normal Function] with [NO parameter]  :
        function Nfunc() {
            return 3 ;
        }
        
        // Executing the [Normal Function] :
        console.log(Nfunc()) ;
        
        // ---------------------------------------
                 
        //  Define a [Arrow Function] with [NO parameter]  :
        const Afunc = _ =>  3 ;             

        // Executing the [Arrow Function] :
        console.log(Afunc())  ;
        
        // ---------------------------------------
                                   
        dis.innerHTML = '  : ' +  funcReturnNoParamCalc  + '<br>' ;
        // ------------------------

    }
    // =============================================================
  
    //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}