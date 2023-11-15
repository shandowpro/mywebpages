
// 36 JS HTML Dom Events  {OnClick} {OnDblClick} {OnMousEnter} :

// General Variables Definitions : 
    var myElem = document.getElementById('elem'),                
        note = document.getElementById('note');

    // First Event => {onclick} Events :
    myElem.onclick = function() {
        'use strict';
        note.textContent = "You Clicked on the Element ";    
    };
    
    // Second Event => {ondblclick} Events :
    myElem.ondblclick = function() {
        'use strict';
        note.textContent = "You Doubled Clicked on the Element ";    
    };
    
    // Third Event => {oncontextmenu} Events :
    myElem.oncontextmenu = function(e) {
        'use strict';
        e.preventDefault();
        note.textContent = "You Right Clicked on the Element + Browser Context Default Menu Is Not Activated! ";    
    };
    
    // Fourth Event => {onmouseenter} Events :
    myElem.onmouseenter = function() {
        'use strict';
        note.textContent = "You Hovered on the Element ";    
    };
    
    // Fifth Event => {onmouseleave} Events :
    myElem.onmouseleave = function() {
        'use strict';
        note.textContent = "You Hoverd off the Element ";    
    };
        
            
// =============================================================================================================
    
function test() {
    // General Variables Definitions : 
    var myElem = document.getElementById('elem'),                
        note = document.getElementById('note');

    // First Event => {onclick} Events :
    myElem.onclick = function() {
        'use strict';
        note.textContent = "You Clicked on the Element ";    
    };
    
    // Second Event => {ondblclick} Events :
    myElem.ondblclick = function() {
        'use strict';
        note.textContent = "You Doubled Clicked on the Element ";    
    };
    
    // Third Event => {oncontextmenu} Events :
    myElem.oncontextmenu = function(e) {
        'use strict';
        e.preventDefault();
        note.textContent = "You Right Clicked on the Element + Browser Context Default Menu Is Not Activated! ";    
    };
    
    // Fourth Event => {onmouseenter} Events :
    myElem.onmouseenter = function() {
        'use strict';
        note.textContent = "You Hovered on the Element ";    
    };
    
    // Fifth Event => {onmouseleave} Events :
    myElem.onmouseleave = function() {
        'use strict';
        note.textContent = "You Hoverd off the Element ";    
    };
        
}
// =============================================================================================================

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}