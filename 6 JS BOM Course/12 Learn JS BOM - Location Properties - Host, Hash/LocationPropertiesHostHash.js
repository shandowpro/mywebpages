/* 12 Learn JS BOM - Location Properties - Host, Hash */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get/Set => location.host Function
        // btn2 => Get/Set => location.hash Function
        // btn3 => Get/Set => Checking the customized location.hash Function
        // elem => Display the Get Value of the Href

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.host} Get/Set Value Function : 
        function getsetHost() {        

            // 1) Getting Host Value : 
                console.log('You current web page Host Value is ' + location.host);
                alert('You current web page Host Value is ' + location.host);
                elem.innerHTML = 'You current web page Host Value is [ ' + location.host + ']<br>' ;


            // 2) Setting Host new Value :
                var hostV = prompt('Enter your Host value : ');
                
                console.log('Your new Customized Host Value of current web page is ' + hostV);
                alert('Your new Customized Host Value of current web page is ' + hostV);
                elem.innerHTML = 'Your new Customized Host Value of current web page is[] ' + hostV + ']<br>' ;
                
                location.host += hostV;
                
            }
            
        // 2) {location.hash} Get/Set Value Function : 
        function getsetHash() {            
            
            // 1) Getting Hash Value : 
                console.log('You current web page Hash Value is ' + location.hash);
                alert('You current web page Hash Value is ' + location.hash);
                elem.innerHTML = 'You current web page Hash Value is [ ' + location.hash + ']<br>' ;


            // 2) Setting Hash new Value :
                var hashV = prompt('Enter your new Hash value : ');
                
                console.log('Your new Customized Hash Value of current web page is ' + hashV);
                alert('Your new Customized Hash Value of current web page is ' + hashV);
                elem.innerHTML += 'Your new Customized Hash Value of current web page is[] ' + hashV + ']<br>' ;
                
                location.hash = hashV;
        }

     // 3) Checking the customized location.hash Function [Checking if the Currrent Hash is a certain value of an exsited element] :    
        function checkHash(){
            if (location.hash.indexOf('Chat') > -1) {

                alert('Your are come from [chat Hash Partition]');
                console.log('Your are come from [chat Hash Partition]');
            }

        }
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1 , btn2 ,btn3] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting/Settting the location Host value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location Host value] ..');
                console.log('Welcome to [Getting the location Host value] ..');                 
                
                getsetHost();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Getting/Settting the location Hash value] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Getting the location Hash value] ..');
                console.log('Welcome to [Getting the location Hash value] ..');                 
                
                getsetHash();                
            };
                        
    // ==============================================================                                
        // Third Button {btn3} => Open Fuction of [Checking the Customized location Hash value] :
            btn3.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Checking the Customized location Hash value] ..');
                console.log('Welcome to [Checking the Customized location Hash value] ..');                 
                
                checkHash();                
            };
                        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
     // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get/Set => location.host Appilcation
        // btn2 => Get/Set => location.hash Appilcation
        // elem => Display the Get Value of the Href

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.host} Get/Set Value Function : 
        function getsetHost() {        

            // 1) Getting Host Value : 
                console.log('You current web page Host Value is ' + location.host);
                alert('You current web page Host Value is ' + location.host);
                elem.innerHTML = 'You current web page Host Value is [ ' + location.host + ']<br>' ;


            // 2) Setting Host new Value :
                var hostV = prompt('Enter your Host value : ');
                
                console.log('Your new Customized Host Value of current web page is ' + hostV);
                alert('Your new Customized Host Value of current web page is ' + hostV);
                elem.innerHTML = 'Your new Customized Host Value of current web page is[] ' + hostV + ']<br>' ;
                
                location.host += hostV;
                
            }
            
        // 2) {location.hash} Get/Set Value Function : 
        function getsetHash() {            
            
            // 1) Getting Hash Value : 
                console.log('You current web page Hash Value is ' + location.hash);
                alert('You current web page Hash Value is ' + location.hash);
                elem.innerHTML = 'You current web page Hash Value is [ ' + location.hash + ']<br>' ;


            // 2) Setting Hash new Value :
                var hashV = prompt('Enter your new Hash value : ');
                
                console.log('Your new Customized Hash Value of current web page is ' + hashV);
                alert('Your new Customized Hash Value of current web page is ' + hashV);
                elem.innerHTML += 'Your new Customized Hash Value of current web page is[] ' + hashV + ']<br>' ;
                
                location.hash = hashV;
        }
    // =============================================================
           // Third Button {btn3} => Open Fuction of [Checking the Customized location Hash value] :
           btn3.onclick = function() {
            'use strict'; 
            
            alert('Welcome to [Checking the Customized location Hash value] ..');
            console.log('Welcome to [Checking the Customized location Hash value] ..');                 
            
            checkHash();                
        };
                    
    // ==============================================================                                
            
    // C] Decleration of Buttons [btn1 , btn2 , btn3] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting/Settting the location Host value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location Host value] ..');
                console.log('Welcome to [Getting the location Host value] ..');                 
                
                getsetHost();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Getting/Settting the location Hash value] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Getting the location Hash value] ..');
                console.log('Welcome to [Getting the location Hash value] ..');                 
                
                getsetHash();                
            };                        
    // ==============================================================                                    
        // Third Button {btn3} => Open Fuction of [Checking the Customized location Hash value] :
            btn3.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Checking the Customized location Hash value] ..');
                console.log('Welcome to [Checking the Customized location Hash value] ..');                 
                
                checkHash();                
            };                    
    // ==============================================================                                
    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}