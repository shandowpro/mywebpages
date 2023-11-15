
// 4 Learn JS BOM - Window Methods - setTimeout() & clearTimeout():

    // A] setTimeout() :

        // Getting all Required Variables: 
            var elem = window.document.getElementById('elem'),
                a = parseInt(prompt('Insert the Time Amount by seconds'))*1000,
                btn = window.document.getElementById('btn');        


        // Displaying the {Time Inserted value}  :
            alert('Your inserted value is \n' + (a /1000) + ' Seconds' );
            console.log('Your inserted value is \n' + (a/1000) + ' Seconds');
            
        //  Declaring the Function to be called  :
            function writeMsg() {
                'use strict';
                console.log('This Text written after ' + (a/1000) + ' Second') ;
                elem.textContent = 'This Text written after ' + (a/1000) + ' Second' ;    
            }
                
        //  Defining the Declared SetTimeout() Function inside the Variable :
            var myTime = setTimeout(writeMsg, a);

    // ===============================================================

    // B] clearTimeout() : 
        // Creating A Button to Stop Working with the SetTimeout() Function => by clearTimeout() : 
        btn.onclick =  function() { 
            clearTimeout(myTime);    
            alert('The SetTimeout Has been De-Activated Successfully!');        
            console.log('The SetTimeout Has been De-Activated Successfully!');  
        };            
    // =============================================================================================================
// =============================================================================================================
    
function test() {            
    
    // Getting all Required Variables:    
        var elem = window.document.getElementById('elem'),
            a = parseInt(prompt('Insert the Time Amount by seconds'))*1000,
            btn = window.document.getElementById('btn');        
            
    // A] setTimeout() :

        // Displaying the {Time Inserted value}  :
            alert('Your inserted value is \n' + (a /1000) + ' Seconds' );
            console.log('Your inserted value is \n' + (a/1000) + ' Seconds');
            
        //  Declaring the Function to be called  :
            function writeMsg() {
                'use strict';
                console.log('This Text written after ' + (a/1000) + ' Second') ;
                elem.textContent = 'This Text written after ' + (a/1000) + ' Second' ;    
            }
                
        //  Defining the Declared SetTimeout() Function inside the Variable :
            var myTime = setTimeout(writeMsg, a);

    // ===============================================================

    // B] clearTimeout() : 
        // Creating A Button to Stop Working with the SetTimeout() Function => by clearTimeout() : 
            btn.onclick =  function() { 
                clearTimeout(myTime);    
                alert('The SetTimeout Has been De-Activated Successfully!');        
                console.log('The SetTimeout Has been De-Activated Successfully!');  
            };            
    // =============================================================================================================   
    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}