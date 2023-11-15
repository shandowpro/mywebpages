
// JSDOM Events  {Onload} || {Onscroll} || {Onresize} :

// Frist Method [ {Creating {onload} Event => To Display certain Message After fully loading Page / Window} ] :         
    window.onload = function() {
        'use strict';
        console.log('Window or Page has completly Loaded and is Ready '); 
    }
            
// =============================================================================================================

// Second Method [ {Creating {onscroll} Event => To Display certain Message When Page / Window is loading} ] :
    window.onscroll = function() {
        'use strict';
        console.log('Window or Page is being Scrolling now! '); 
    }
            
// =============================================================================================================

// Third Method [ {Creating {onresize} Event => To Display certain Message When Page / Window is being resizing} ] :
    window.onresize = function() {
        'use strict';
        console.log('Window or Page is being Resizing now! '); 
    }
            
// =============================================================================================================
    

function test() {                   
    // Frist Method [ {Creating {onload} Event => To Display certain Message After fully loading Page / Window} ] :         
    window.onload = function() {
        'use strict';
        console.log('Window or Page has completly Loaded and is Ready '); 
    }
            
    // =============================================================================================================

    // Second Method [ {Creating {onscroll} Event => To Display certain Message When Page / Window is loading} ] :
        window.onscroll = function() {
            'use strict';
            console.log('Window or Page is being Scrolling now! '); 
        }
                
    // =============================================================================================================

    // Third Method [ {Creating {onresize} Event => To Display certain Message When Page / Window is being resizing} ] :
        window.onresize = function() {
            'use strict';
            console.log('Window or Page is being Resizing now! '); 
        }
                
    // =============================================================================================================               
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}