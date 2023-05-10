
// JSDOM Events  How To Write All Methods :

// Frist Method [ {Call the Function from the JS file within the HTML Element it's Self {HTML Calling + JS file Calling } ] : 
    // Getitng main Element to be delt with in all Methods :
        var btnFC = document.getElementById('btnFC'),
            elem = document.getElementById('mainT');


    // Decleration of the Main Function of {changing Font Color} :
        function changeFontColor() {
            'use strict';
            elem.style.color = 'red';
        }
// =======================================================================================================

// Second Method [ Set Event with Declaring the Function - Inside JS Script ]  {Long Method - JS Page} ] :     

    // Getitng main Element to be delt with in all Methods :    
        var elemBtn = document.getElementById('btnBC'),
            elem = document.getElementById('mainT');

    // Create a new {onclick} Event => to change Background color + Defining the Function inside the Event  :
        elemBtn.onclick = function() {
            'use strict';
            elem.style.backgroundColor = 'blue';
        }
// =======================================================================================================

// Third Method [ Call and process the already declared function {Short Method - JS Page} ] :     
    // Getitng main Element to be delt with in all Methods :    
        var elemBtn = document.getElementById('btnFS'),
            elem = document.getElementById('mainT');

    // Declaring the Function of {Changing the Font Size} : 
        function changeFontSize() {
            'use strict';
            elem.style.fontSize = '50px';
        }

    // Create a new {onclick} Event => to change color + Defining the Function inside the Event  :
        elemBtn.onclick = changeFontSize;        
            
// =============================================================================================================
    


function test() {                   

    // Frist Method [ {Call the Function from the JS file within the HTML Element it's Self {HTML Calling + JS file Calling } ] : 
        // Getitng main Element to be delt with in all Methods :
            var btnFC = document.getElementById('btnFC'),
                elem = document.getElementById('mainT');


        // Decleration of the Main Function of {changing Font Color} :
            function changeFontColor() {
                'use strict';
                elem.style.color = 'red';
            }
    // =======================================================================================================

    // Second Method [ Set Event with Declaring the Function - Inside JS Script ]  {Long Method - JS Page} ] :     

        // Getitng main Element to be delt with in all Methods :    
            var elemBtn = document.getElementById('btnBC'),
                elem = document.getElementById('mainT');

        // Create a new {onclick} Event => to {Change Background Color} + Defining the Function inside the Event  :
            elemBtn.onclick = function() {
                'use strict';
                elem.style.backgroundColor = 'blue';
            }
    // =======================================================================================================

    // Third Method [ Call and process the already declared function {Short Method - JS Page} ] :     
        // Getitng main Element to be delt with in all Methods :    
            var elemBtn = document.getElementById('btnFS'),
                elem = document.getElementById('mainT');

        // Declaring the Function of {Changing the Font Size} : 
            function changeFontSize() {
                'use strict';
                elem.style.fontSize = '50px';
            }

        // Create a new {onclick} Event => to {Change Font Size} + Defining the Function inside the Event  :
            elemBtn.onclick = changeFontSize;        
                
    // =============================================================================================================
                
}

// ====================================================================================


function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}