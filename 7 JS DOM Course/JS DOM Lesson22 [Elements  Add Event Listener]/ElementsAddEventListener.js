
// Decleration of the Buttons : 
var eatBtn = document.getElementById('main'),
    powerBtn = document.getElementById('powerup');


// Simple Event : 
eatBtn.onclick = function() {
    'use strict';        
    document.getElementById('monster1').style.display = 'none';
    document.getElementById('monster1').style.visibility = 'hidden';    
};

// External decleration of a function to be added later to the Add Event Listener :
function makePower() {
    'use strict';        
    document.getElementById('monster2').style.display = 'none';
    document.getElementById('monster2').style.visibility = 'hidden';    
}

// Adding an External Declared Function :
powerBtn.onclick = function() {
    'use strict';        
    eatBtn.addEventListener('click',makePower);
};

// Adding an Inner Declared Function :
// powerBtn.onclick = function() {
//     'use strict';        
//     eatBtn.addEventListener('click',function(){
//         'use strict';        
//         document.getElementById('monster2').style.display = 'none';
//         document.getElementById('monster2').style.visibility = 'hidden';
//     });
// };

// ====================================================================================
// ====================================================================================
function test1() {
    // Simple Event : 
    eatBtn.onclick = function() {
        'use strict';        
        document.getElementById('monster1').style.display = 'none';
        document.getElementById('monster1').style.visibility = 'hidden';    
    }
}
// ====================================================================================

function test2() {
    // Adding an External Declared Function :
    powerBtn.onclick = function() {
        'use strict';        
        eatBtn.addEventListener('click',makePower);
    }
}

function test3() {

    // Adding an External Declared Function :
    powerBtn.onclick = function() {
        'use strict';        
        eatBtn.addEventListener('click',function(){
            'use strict';        
            document.getElementById('monster2').style.display = 'none';
            document.getElementById('monster2').style.visibility = 'hidden';
        });
    }
}
// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = 'Adding an External Declared Function as following :' + '\n' + test1 + "\n\n" + "=".repeat(90) + "\n\n" + 
     'Adding an External Declared Function as following :' + '\n' + test2 +  "\n\n" + "=".repeat(90) + "\n\n" +
     'Adding an Inner Declared Function as following :' + '\n' + test3 +  "\n\n" + "=".repeat(90) + "\n\n" + 
     'External decleration of a function to be added later to the Add Event Listener as following :' + '\n' + makePower +  "\n\n" + "=".repeat(90) + "\n\n";
     
}