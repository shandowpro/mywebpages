
// JS DOM Lesson38 Outro  References :

// General Variables Definitions : 
    var myElem = document.getElementById('inp'),                
        note1 = document.getElementById('note1'),
        note2 = document.getElementById('note2'),
        note3 = document.getElementById('note3');

    // First Event => {onkeydown} Event :
    myElem.onkeydown = function() {
        'use strict';
        note1.textContent = this.value ;    
    };
    
    // Second Event => {onkeypress} Events :
    myElem.onkeypress = function() {
        'use strict';
        note2.textContent = this.value ;    
    };
    
    // Third Event => {onkeyup} Events :
    myElem.onkeyup = function() {
        'use strict';        
        note3.textContent = this.value ;    
    };
                    
// =============================================================================================================
    
function test() {
    // General Variables Definitions : 
    var myElem = document.getElementById('inp'),                
        note1 = document.getElementById('note1'),
        note2 = document.getElementById('note2'),
        note3 = document.getElementById('note3');

    // First Event => {onkeydown} Event :
    myElem.onkeydown = function() {
        'use strict';
        note1.textContent = this.value ;    
    };
    
    // Second Event => {onkeypress} Events :
    myElem.onkeypress = function() {
        'use strict';
        note2.textContent = this.value ;    
    };
    
    // Third Event => {onkeyup} Events :
    myElem.onkeyup = function() {
        'use strict';        
        note3.textContent = this.value ;    
    };

}
// =============================================================================================================

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}