/* 9 Learn JS BOM - Window Properties - innerHeight, innerWidth */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => innerHeight 
        // btn1 => innerWidth
        // btn2 => outerHeight
        // btn3 => outerWidth

        var btn = document.getElementById('btn'),
            btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3'),
            elem = document.getElementById('elem');
            
        
    // B] Decleration of Button onclick event => [Getting the properties values]  :                    
        // First Button {btn1} => [Getting value of innerHeight] :
            btn.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page inner Height is  = ' + window.innerHeight);
                elem.innerHTML += 'The Current Page inner Height is  = ' + window.innerHeight + '<br>' ;

            };
        // ==============================================================
        
        // Second Button {btn2} => [Getting value of innerWidth] :
            btn1.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page inner Width is  = ' + window.innerWidth);
                elem.innerHTML += 'The Current Page inner Width is  = ' + window.innerWidth + '<br>';

            };
        // ==============================================================
        
        // Third Button {btn3} => [Getting value of outerHeight] :
            btn2.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page outer Height is  = ' + window.outerHeight);
                elem.innerHTML += 'The Current Page outer Height is  = ' + window.outerHeight + '<br>';

            };
        // ==============================================================
        
        // Fourth Button {btn3} => [Getting value of outerWidth] :
            btn3.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page outer Width is  = ' + window.outerWidth);
                elem.innerHTML += 'The Current Page outer Width is  = ' + window.outerWidth + '<br>';

            };
        // ==============================================================
            
    //=================================================
// =============================================================================================================

function test() {            
     // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => innerHeight 
        // btn1 => innerWidth
        // btn2 => outerHeight
        // btn3 => outerWidth

        var btn = document.getElementById('btn'),
            btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3'),
            elem = document.getElementById('elem');
            
        
    // B] Decleration of Button onclick event => [Getting the properties values]  :                    
        // First Button {btn1} => [Getting value of innerHeight] :
            btn.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page inner Height is  = ' + window.innerHeight);
                elem.innerHTML += 'The Current Page inner Height is  = ' + window.innerHeight + '<br>' ;

            };
        // ==============================================================
        
        // Second Button {btn2} => [Getting value of innerWidth] :
            btn1.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page inner Width is  = ' + window.innerWidth);
                elem.innerHTML += 'The Current Page inner Width is  = ' + window.innerWidth + '<br>';

            };
        // ==============================================================
        
        // Third Button {btn3} => [Getting value of outerHeight] :
            btn2.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page outer Height is  = ' + window.outerHeight);
                elem.innerHTML += 'The Current Page outer Height is  = ' + window.outerHeight + '<br>';

            };
        // ==============================================================
        
        // Fourth Button {btn3} => [Getting value of outerWidth] :
            btn3.onclick = function() {
                'use strict';                                                            
                
                console.log('The Current Page outer Width is  = ' + window.outerWidth);
                elem.innerHTML += 'The Current Page outer Width is  = ' + window.outerWidth + '<br>';

            };
        // ==============================================================
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}