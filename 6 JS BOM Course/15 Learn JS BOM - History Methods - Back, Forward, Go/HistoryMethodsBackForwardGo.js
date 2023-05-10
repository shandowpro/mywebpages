/* 15 Learn JS BOM - History Methods - Back, Forward, Go */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 =>  history.back() method 
        // btn2 =>  history.forward() method
        // btn3  =>  history.go() method        
        // elem => Display the Get Value of each Function

        var btn1 = document.getElementById('btn1'),            
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {history.back()} Method :             
            function Hback() {        
                
                // Go Back one Step in the  History: 
                history.back();                

                elem.innerHTML += location.href + '<br>' ;
            }                    
        // -------------------------------
        
        // 2) {history.forward()} Method :
            function Hforward() {                        
                
                // Go Next one Step in the  History:                 
                history.forward();                

                elem.innerHTML = location.href + '<br>';
            }            
        // -------------------------------

        // c) {Go Method} :                                        
            function Hgo() {        
                // var goInd = parseInt(prompt('Insert index Nubmer to go:'));
                var goInd = prompt('Insert index Nubmer to go:');
                
                // Go Next/Back customized Step(s) in the History:                 
                history.go(goInd);                

                elem.innerHTML = location.href + '<br>';
            }                         
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn11 , btn12 , btn2 ,btn3] onclick event =>   :                    
        
        // First Button {btn1} => Go Back one Step in the  History {histroy.back()}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Back one Step in the  History {histroy.back()}] Method ..');
                console.log('Welcome to [Go Back one Step in the  History {histroy.back()}] Method ..');
                                
                Hback();                
            };
        // ==============================================================
        
        
        // Second Button {btn2} => Go Next one Step in the  History {histroy.forward()}: 
            btn2.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Next one Step in the  History {histroy.forward()}] Method ..');
                console.log('Welcome to [Go Next one Step in the  History {histroy.forward()}] Method ..');
                                
                Hforward();                
            };
        // ==============================================================
        
        
        // Third Button {btn3} => Go Back/Next customized Step in the History {histroy.go(#+/-)}: 
            btn3.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Back/Next customized Step in the History {histroy.go(#+/-)}] Method ..');
                console.log('Welcome to [Go Back/Next customized Step in the History {histroy.go(#+/-)}] Method ..');
                                
                Hgo();                
            };
        // ==============================================================
        
        
                        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
 
    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 =>  history.back() method 
        // btn2 =>  history.forward() method
        // btn3  =>  history.go method        
        // elem => Display the Get Value of each Function

        var btn1 = document.getElementById('btn1'),            
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {history.back()} Method :             
            function Hback() {        
                
                // Go Back one Step in the  History: 
                history.back();                

                elem.innerHTML += location.href + '<br>' ;
            }                    
        // -------------------------------
        
        // 2) {history.forward()} Method :
            function Hforward() {                        
                
                // Go Next one Step in the  History:                 
                history.forward();                

                elem.innerHTML = location.href + '<br>';
            }            
        // -------------------------------

        // c) {Go Method} :                                        
            function Hgo() {        
                // var goInd = parseInt(prompt('Insert index Nubmer to go:'));
                var goInd = prompt('Insert index Nubmer to go:');
                
                // Go Next/Back customized Step(s) in the History:                 
                history.go(goInd);                

                elem.innerHTML = location.href + '<br>';
            }                         
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn11 , btn12 , btn2 ,btn3] onclick event =>   :                    
        
        // First Button {btn1} => Go Back one Step in the  History {histroy.back()}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Back one Step in the  History {histroy.back()}] Method ..');
                console.log('Welcome to [Go Back one Step in the  History {histroy.back()}] Method ..');
                                
                Hback();                
            };
        // ==============================================================
        
        
        // Second Button {btn2} => Go Next one Step in the  History {histroy.forward()}: 
            btn2.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Next one Step in the  History {histroy.forward()}] Method ..');
                console.log('Welcome to [Go Next one Step in the  History {histroy.forward()}] Method ..');
                                
                Hforward();                
            };
        // ==============================================================
        
        
        // Third Button {btn3} => Go Back/Next customized Step in the History {histroy.go(#+/-)}: 
            btn3.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Go Back/Next customized Step in the History {histroy.go(#+/-)}] Method ..');
                console.log('Welcome to [Go Back/Next customized Step in the History {histroy.go(#+/-)}] Method ..');
                                
                Hgo();                
            };
        // ==============================================================   
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}