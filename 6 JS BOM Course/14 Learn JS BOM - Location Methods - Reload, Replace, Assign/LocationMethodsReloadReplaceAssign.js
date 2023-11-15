/* 14 Learn JS BOM - Location Methods - Reload, Replace, Assign */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn11 =>  location.reload(false) method 
        // btn12 =>  location.reload(true) method
        // btn2  =>  location.assign method
        // btn3  =>  location.replace method
        // elem => Display the Get Value of each Function

        var btn11 = document.getElementById('btn11'),
            btn12 = document.getElementById('btn12'),
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // a) {Reload Method} :
            // 1) {location.reload(false)} Method : 
                function reloadF() {        
                    // Activating Reload Method [with keeping History] : 
                        location.reload(false);                
                }

            // 2) {location.reload(true)} Method : 
                function reloadT() {        
                    // Activating Reload Method [with Replacing History] : 
                        location.reload(false);                
                }
        
        // -------------------------------
        
        // b) {Assign Method} :                                        
            function assignM() {        
                var assignV = prompt('Insert the new value of the location href with in the [Assign Method] : ');
                // Activating Reload Method : 
                    location.assign(assignV);                
            }
            
        // -------------------------------

        // c) {Replace Method} :                                        
            function replaceM() {        
                var replaceV = prompt('Insert the new value of the location href with in the [Replace Method] : ');
                // Activating Reload Method : 
                    location.replace(replaceV);                
            }                         
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn11 , btn12 , btn2 ,btn3] onclick event =>   :                    
        // First Button {btn11} => Open Reload Method [false Mode] :
            btn11.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Reloading(false) ] Method ..');
                console.log('Welcome to  [Reloading(false) ] Method ..');                 
                
                reloadF();                
            };
        // ==============================================================
        
        // Second Button {btn12} => Open Reload Method [True Mode] :
            btn12.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Reloading(true) ] Method ..');
                console.log('Welcome to  [Reloading(true) ] Method ..');                 
                
                reloadT();                
            };
                        
    // ==============================================================                                
        // Third Button {btn2} => Open [Assign Method] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [assign() ] Method ..');
                console.log('Welcome to [assign() ] Method ..');                
                
                assignM();                
            };
                        
    // ==============================================================                                
        // Fourth Button {btn3} => Open [Replace Method] :
            btn3.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [replace() ] Method ..');
                console.log('Welcome to [replace() ] Method ..');                
                
                replaceM();                
            };
                        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
     
    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}