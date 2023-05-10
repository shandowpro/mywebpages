/* 8 Learn JS BOM - Window Methods - Stop, Close, Focus */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => Opening new window and Stop loading it
        // btn1 => Opening new window and close loading it
        // btn2 => Opening new window and focus on loading it

        var btn = document.getElementById('btn'),
            btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3');
            
        
    // B] Decleration of Button onclick event =>  :        

        // First Method [stop()] :
            // Defining variable of imported image ouside the page:   
                var img = document.createElement('img'),
                    att1 = document.createAttribute('src'),
                    newW = 'http://placeholder.it/4000/333';
            
        // First Button {btn1} => [Stoping the loading item] :
            btn.onclick = function() {
                'use strict';                                                            
                var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                w.stop();
                console.log('New opened window => Stop loading');
            };
        // ==============================================================
        
        // Second Method [close()] :         

            // Second Button {btn2} => [Close new Window by JS] :
                btn1.onclick = function() {
                    'use strict';                                            
                    var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                    w.close();                                   
                    console.log('New Opened window => closed ');
                };
        // =============================================================

        // Third Method [focus()] : 
            // Third Button {btn3} => [Focus on the new opened Window by JS] :
                btn2.onclick = function() {
                    'use strict';                                            
                
                    var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                    w.focus();
                    console.log('New opened window => Focus');
                };                                
        // ======================================================    
        
        // Fourth Method [open()] to open new test window :         
                btn3.onclick = function() {
                    'use strict';                                            
                
                    window.open(newW);
                    console.log('openning new window ');
                };                                
        // ======================================================    


    //=================================================
// =============================================================================================================

function test() {            
    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => Opening new window and Stop loading it
        // btn1 => Opening new window and close loading it
        // btn2 => Opening new window and focus on loading it

        var btn = document.getElementById('btn'),
            btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3');
            
        
    // B] Decleration of Button onclick event =>  :        

        // First Method [stop()] :
            // Defining variable of imported image ouside the page:   
                var img = document.createElement('img'),
                    att1 = document.createAttribute('src'),
                    newW = 'http://placeholder.it/4000/333';
            
        // First Button {btn1} => [Stoping the loading item] :
            btn.onclick = function() {
                'use strict';                                                            
                var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                w.stop();
                console.log('New opened window => Stop loading');
            };
        // ==============================================================
        
        // Second Method [close()] :         

            // Second Button {btn2} => [Close new Window by JS] :
                btn1.onclick = function() {
                    'use strict';                                            
                    var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                    w.close();                                   
                    console.log('New Opened window => closed ');
                };
        // =============================================================

        // Third Method [focus()] : 
            // Third Button {btn3} => [Focus on the new opened Window by JS] :
                btn2.onclick = function() {
                    'use strict';                                            
                
                    var w = window.open('http://placeholder.it/4000/333' , 'Google' , 'width=400, height=400');              
                    w.focus();
                    console.log('New opened window => Focus');
                };                                
        // ======================================================    
        
        // Fourth Method [open()] to open new test window :         
                btn3.onclick = function() {
                    'use strict';                                            
                
                    window.open(newW);
                    console.log('openning new window ');
                };                                
        // ======================================================                    

}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}