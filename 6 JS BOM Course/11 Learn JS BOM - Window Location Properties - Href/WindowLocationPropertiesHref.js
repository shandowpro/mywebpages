/* 11 Learn JS BOM - Window Location Properties - Href */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get Appilcation
        // btn2 => Set Application
        // elem => Display the Get Value of the Href

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.href} Get Value Function : 
        function getHref() {        
            
            console.log('You current web page href Value is ' + location.href);
            alert('You current web page href Value is ' + location.href);
            elem.innerHTML += 'You current web page href Value is[ ' + location.href + ']<br>' ;
        }
        
        // 2) {location.href} Set Value Function : 
        function setHref() {
            var hrefV = prompt('Enter your Href value : ');

            
            console.log('Your new Customized href Value of current web page is ' + hrefV);
            alert('Your new Customized href Value of current web page is ' + hrefV);
            elem.innerHTML += 'Your new Customized href Value of current web page is[] ' + hrefV + ']<br>' ;
            
            location.href = hrefV;

        }
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1 , btn2] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting the location href value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location href value] ..');
                console.log('Welcome to [Getting the location href value] ..');                 
                
                getHref();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Setting the location href value (with different Methods)] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Setting the location href value] ..');
                console.log('Welcome to [Setting the location href value] ..');                 
                
                setHref();                                
            };
                        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
 
    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get Appilcation
        // btn2 => Set Application
        // elem => Display the Get Value of the Href

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.href} Get Value Function : 
        function getHref() {        
            
            console.log('You current web page href Value is ' + location.href);
            alert('You current web page href Value is ' + location.href);
            elem.innerHTML += 'You current web page href Value is[ ' + location.href + ']<br>' ;
        }
        
        // 2) {location.href} Set Value Function : 
        function setHref() {
            var hrefV = prompt('Enter your Href value : ');

            
            console.log('Your new Customized href Value of current web page is ' + hrefV);
            alert('Your new Customized href Value of current web page is ' + hrefV);
            elem.innerHTML += 'Your new Customized href Value of current web page is[] ' + hrefV + ']<br>' ;
            
            location.href = hrefV;

        }
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1 , btn2] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting the location href value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location href value] ..');
                console.log('Welcome to [Getting the location href value] ..');                 
                
                getHref();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Setting the location href value (with different Methods)] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Setting the location href value] ..');
                console.log('Welcome to [Setting the location href value] ..');                 
                
                setHref();                                
            };
                        
    // ==============================================================                                    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}