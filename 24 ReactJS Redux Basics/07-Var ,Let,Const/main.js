//  7 var , let , const : 

/* Main lessons functions :
    - Main differenece between [var . let , const]
        1- Scope accessibilty  [Global , Block]
        2- Acceess before Definition/Initializing    
        3- Re-Decleration after definition     
        4- Re-Assingnment after definition
*/
// ---------------------------------------------------------------------

//  7 var , let , const defniition Operators   :
function myTest() {
    'use strict' ;
    alert('Welcome to 7 var , let , const defniition Operators ') ;
    
    var dis = document.getElementById('note');
     
    var x = prompt(' Please choose one of functions from below options : \n  1] Testing {Scope accessibilty}  [Global , Block]  \n  2] Testing {Acceess before Definition/Initializing} \n  3] Testing {Re-Decleration after definition} \n 4] Testing {Re-Assingnment af-ter definition} ');    

    if (x == 1 ) {
        
        scopeAccess();

    } else if (x == 2) {
    
        accessBeforeDefine();
        
    } else if (x == 3) {
    
        reDeclerate();       
    
    } else if (x == 4) {

        reAssign();
    
    // } else if (x == 5) {

    //     arrowShortFunc3();

    } else {
        alert('No option has been selected !');
    } 

    // =========================================================================

    // 1] Testing {Scope accessibilty}  [Global , Block]  :
    function scopeAccess() {
        alert('Welcome to Testing {Scope accessibility}  [Global , Block]');

        dis.innerHTML = '';
        
        // A] Accessing the variables from outside it's Definition Scope [Access from Global] :
            console.log(x , 'accessed from Block scope') ;
            console.log(y , 'accessed from Block scope') ;
            console.log(z , 'accessed from Block scope') ;
            
        
        // B] Define a BlockScope , and Testing access the defined variables in BlockScope funcction  from  Global scope  :
        function blockScope() {

            // A] Defining different variables using differnet types of operators [inside the Assumed Global  Scope ] :
                var x = 'variable defined by [var]';        
                let y = 'variable defined by [let]';        
                const z = 'variable defined by [const]';        
                
        }

        // Pringting  fucntion of accessing block :
        console.log(blockScope()) ;
          
        // console.log('Regular Function Syntax by using Default method : '  ,  regFuncVal1 ) ;
        
        dis.innerHTML = 'Testing {Scope accessibilty}  [Global , Block] : ' +  scopeAccess + '<br>' ;

        // ------------------------

    }
    // =============================================================

    // 2] Testing {Acceess before Definition/Initializing} :
    function accessBeforeDefine() {
        alert('Welcome to Testing {Acceess before Definition/Initializing} ');

        dis.innerHTML = '';

        function accessVarBDefine() {
            // 1] Define a variable with [var] operator :
                // Access the varaible before decleration :
                console.log(x);
                
                // Declare the variable : 
                var x = 'This variable declaered by using {var}';  
        }
            
        function accessLetBDefine() {
            // 2] Define a variable with  [let] operator :
                // Access the varaible before decleration :
                console.log(y);
                
                // Declare the variable : 
                let y = 'This variable decalered by using {let}'; 
        } 

        function accessConstBDefine() {    
            // 3] Define a variable with [const] operator :
                // Access the varaible before decleration :
                console.log(z);
                    
                // Declare the variable : 
                const z = 'This variable decalered by using {const}' ; 
        }
         
        accessVarBDefine(); 
        accessLetBDefine(); 
        accessConstBDefine(); 
          
        // console.log('Regular Function Syntax by using this solution Method [assigning (this) to another variable ] : '  , regFuncThisApp ) ;
       
        dis.innerHTML = 'Testing {Acceess before Definition/Initializing}  ' + accessBeforeDefine + '<br>' ;
        
    }
    // =========================================================
    
    // 3] Testing {Re-Decleration after definition} :
    function reDeclerate() {
        alert('Welcome to Testing {Re-Decleration after definition}  ');

        dis.innerHTML = '';
        
        function reDeclerateVar() {
            
            // A] First decleration of the variable :   
                var x = 'First Decleration value by [var]' ;
            
            // B] Second decleration of the variable :
                var x = 'Re-Decleration variable defined by [var]';        
          
                console.log(x);
        }


        function reDeclerateLet() {
             
            // A] Define the First decleration of the variable :   
            let y = 'First Decleration value by [let]' ;        
            
            // B] Define the First decleration of the variable :   
            // let y = 'Second Decleration value by [let] [not acceptable] ' ;                     
            
            console.log(y , 'not acceptable in the [let] tov re-declaertate varailbe ');
        }
        
        function reDeclerateConst() {
            
            // A] Define the First decleration of the variable :   
            const z = 'First Decleration value by [const]' ;        
            
            // B] Define the Second decleration of the variable :   
            // const z = 'Second Decleration value by [const] [not acceptable] ' ;                     
            
            console.log(z , 'not acceptable in the [const] to  Re-declaertate varailbe ');
         
        }
        
        reDeclerateVar() ;
        reDeclerateLet() ;
        reDeclerateConst() ;
        
        dis.innerHTML = 'Testing {Re-Decleration after definition} : '  + reDeclerate + '<br>' ;
        
    }
    // =========================================================
    // 4] Testing {Re-Assignment after definition} :
    function reAssign() {
        alert('Welcome to Testing {Re-Assingnment after definition} ');

        dis.innerHTML = '';


        function reAssignVar() {
            // A] Defining & Assingment frist varialble using  [var] :
                var x = 'First Assignment value by [var]' ;
                  
            // B] Second Assingnemt : 
                x = 'Second Assignment value by [var]' ;
         
                console.log(x , ' | var operaotor => accept to re-assignment');
        } 

        
        function reAssignLet() {
            // A] Defining & Assingment frist varialble using  [let] :
                let y = 'Second Assignment value by [let]' ;
                  
            // B] Second Assingnemt : 
                y = 'Second Assignment value by [let] ' ;
         
                console.log(y ,  ' | let operaotor => accept to re-assignment');
        } 
 
        function reAssignConst() {
            // A] Defining & Assingment frist varialble using  [const] :
                const z = 'Second Assignment value by [const]' ;
                  
            // B] Second Assingnemt : 
                z = 'Second Assignment value by [const]' ;
         
                console.log(z ,  ' | const operator => NOT accept to re-assignment');
        } 

        reAssignVar() ; 
        reAssignLet() ; 
        reAssignConst() ; 
     
 
        // console.log('Regular Function : ' , regFuncThisApp() ) ;
        // console.log('Arrow Function Syntax by using directly [this] Method : '  , arrowFuncThisApp ) ;
       
        dis.innerHTML = 'Testing {Re-Assingnment after definition} : '  + reAssign + '<br>' ;
        
    }
    // =========================================================

   //===========================================================
    
    function display() {
        document.getElementById("note").innerHTML = myTest + "\n\n" + "=".repeat(90) + "\n\n";
    }

}