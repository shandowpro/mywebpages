/* 16 Learn JS BOM - Window Navigator Properties */

    // A]  Decleration of Button will be used to process the Window Navigator Properties :
        // btn1 =>  Navigator main information method     
        // btn0 =>  [Checking for Using the Cookies in the Brower] method     
        // elem => Display all Navigator properties Values of each Function

        var btn1 = document.getElementById('btn1'),                        
            btn0 = document.getElementById('btn0'),                        
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {Navigator main information} Method :                     
            function mainInfo() {                                        
                
                // 1] Get the {Application Browser Code name} [Deprecated] : 
                    console.log('Application Browser Code name [Deprecated]: ' + navigator.appCodeName);
                    alert('Application Browser Code name [Deprecated]: ' + navigator.appCodeName);
                    elem.innerHTML += 'Application Browser Code name [Deprecated]: ' + navigator.appCodeName + '<br>' ;                    

                // 2] Get the {Application Browser name} [Deprecated] : 
                    console.log('Application Browser name [Deprecated]: ' + navigator.appName);
                    alert('Application Browser name [Deprecated]: ' + navigator.appName);
                    elem.innerHTML += 'Application Browser name [Deprecated]: ' + navigator.appName + '<br>' ;
                
                // 3] Get the {Application Browser Version} [Deprecated] : 
                    console.log( 'Application Browser Version [Deprecated] '  + navigator.appVersion);
                    alert('Application Browser Version [Deprecated] ' + navigator.appVersion);
                    elem.innerHTML += 'Application Browser Version [Deprecated]: ' + navigator.appVersion + '<br>' ;
                
                // 4] Get the {Application Browser Platform} [Deprecated] : 
                    console.log('Application Browser Platform [Deprecated] '  + navigator.platform);
                    alert('Application Browser Platform [Deprecated] '  + navigator.platform);
                    elem.innerHTML += 'Application Browser Platform [Deprecated]: ' + navigator.platform + '<br>' ;                

                // 5] Get the {Application Browser Product} [Deprecated] : 
                    console.log('Application Browser Product [Deprecated] ' + navigator.product);
                    alert('Application Browser Product [Deprecated] ' + navigator.product);
                    elem.innerHTML += 'Application Browser product [Deprecated]: ' + navigator.product + '<br>' ;                
                
                // 6] Get the {Browser PC Geo Location Coodination} [Available] : 
                    console.log('Browser PC Geo Location Coodination [Available] ' + navigator.geolocation);
                    alert('Browser PC Geo Location Coodination [Available] ' + navigator.geolocation);
                    elem.innerHTML += 'Browser PC Geo Location Coodination [Available]: ' + navigator.geolocation + '<br>' ; 
                
                // 7] Get the {Browser Language} [Available] :                     
                    console.log( 'Browser Language [Available] ' + navigator.language);
                    alert('Browser Language [Available] ' + navigator.language);
                    elem.innerHTML += 'Browser Language [Available] ' + navigator.language + '<br>' ; 
                
                // 8] Get the {Chencking if the Browser is using the Cookies [Cookies Status] } [Available] : 
                    alert('Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled);
                    console.log('Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled);
                    elem.innerHTML += 'Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled + '<br>' ; 
                                
            }                    
        // -------------------------------
                
        function checkCookie() {

            if(navigator.cookieEnabled) {
                alert('The Cookies is Activated in your Browser');
                console.log('The Cookies is Activated in your Browser');
                elem.innerHTML += 'The Cookies is Activated in your Browser' + '<br>' ; 
                
            } else {                
                alert('The Cookies is NOT Activated in your Browser');
                console.log('The Cookies is NOT Activated in your Browser');
                elem.innerHTML += 'The Cookies is NOT Activated in your Browser' + '<br>' ; 
            }

        }
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1] onclick event =>   :                    
        
        // First Button {btn1} => Getting main information {Navigator}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {Navigator main information} Method ..');
                console.log('Welcome to {Navigator main information} Method ..');
                                
                mainInfo();                
            };
        // ==============================================================                                                                    
        
        // Second Button {btn0} => Checking for Cookies in Brower {Navigator.cookieEnabled}: 
            btn0.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {Checking for Cookies in Brower} Method ..');
                console.log('Welcome to {Checking for Cookies in Brower} Method ..');                
                                
                checkCookie();                
            };
        // ==============================================================                                                                    
    //=================================================
// =============================================================================================================

function test() {            
 
        // A]  Decleration of Button will be used to process the Window Navigator Properties :
        // btn1 =>  Navigator main information method     
        // btn0 =>  [Checking for Using the Cookies in the Brower] method     
        // elem => Display all Navigator properties Values of each Function

        var btn1 = document.getElementById('btn1'),                        
            btn0 = document.getElementById('btn0'),                        
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {Navigator main information} Method :                     
        function mainInfo() {                                        
                
            // 1] Get the {Application Browser Code name} [Deprecated] : 
                console.log('Application Browser Code name [Deprecated]: ' + navigator.appCodeName);
                alert('Application Browser Code name [Deprecated]: ' + navigator.appCodeName);
                elem.innerHTML += 'Application Browser Code name [Deprecated]: ' + navigator.appCodeName + '<br>' ;                    

            // 2] Get the {Application Browser name} [Deprecated] : 
                console.log('Application Browser name [Deprecated]: ' + navigator.appName);
                alert('Application Browser name [Deprecated]: ' + navigator.appName);
                elem.innerHTML += 'Application Browser name [Deprecated]: ' + navigator.appName + '<br>' ;
            
            // 3] Get the {Application Browser Version} [Deprecated] : 
                console.log( 'Application Browser Version [Deprecated] '  + navigator.appVersion);
                alert('Application Browser Version [Deprecated] ' + navigator.appVersion);
                elem.innerHTML += 'Application Browser Version [Deprecated]: ' + navigator.appVersion + '<br>' ;
            
            // 4] Get the {Application Browser Platform} [Deprecated] : 
                console.log('Application Browser Platform [Deprecated] '  + navigator.platform);
                alert('Application Browser Platform [Deprecated] '  + navigator.platform);
                elem.innerHTML += 'Application Browser Platform [Deprecated]: ' + navigator.platform + '<br>' ;                

            // 5] Get the {Application Browser Product} [Deprecated] : 
                console.log('Application Browser Product [Deprecated] ' + navigator.product);
                alert('Application Browser Product [Deprecated] ' + navigator.product);
                elem.innerHTML += 'Application Browser product [Deprecated]: ' + navigator.product + '<br>' ;                
            
            // 6] Get the {Browser PC Geo Location Coodination} [Available] : 
                console.log('Browser PC Geo Location Coodination [Available] ' + navigator.geolocation);
                alert('Browser PC Geo Location Coodination [Available] ' + navigator.geolocation);
                elem.innerHTML += 'Browser PC Geo Location Coodination [Available]: ' + navigator.geolocation + '<br>' ; 
            
            // 7] Get the {Browser Language} [Available] :                     
                console.log( 'Browser Language [Available] ' + navigator.language);
                alert('Browser Language [Available] ' + navigator.language);
                elem.innerHTML += 'Browser Language [Available] ' + navigator.language + '<br>' ; 
            
            // 8] Get the {Chencking if the Browser is using the Cookies [Cookies Status] } [Available] : 
                alert('Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled);
                console.log('Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled);
                elem.innerHTML += 'Chencking if the Browser is using the Cookies [Cookies Status] } [Available]: ' + navigator.cookieEnabled + '<br>' ; 
                            
        }                    
    // -------------------------------
            
    function checkCookie() {

        if(navigator.cookieEnabled) {
            alert('The Cookies is Activated in your Browser');
            console.log('The Cookies is Activated in your Browser');
            elem.innerHTML += 'The Cookies is Activated in your Browser' + '<br>' ; 
            
        } else {                
            alert('The Cookies is NOT Activated in your Browser');
            console.log('The Cookies is NOT Activated in your Browser');
            elem.innerHTML += 'The Cookies is NOT Activated in your Browser' + '<br>' ; 
        }

    }
// ===========================================================================================
// ===========================================================================================
        
// C] Decleration of Buttons [btn1] onclick event =>   :                    
    
    // First Button {btn1} => Getting main information {Navigator}: 
        btn1.onclick = function() {
            'use strict';                 
            
            alert('Welcome to {Navigator main information} Method ..');
            console.log('Welcome to {Navigator main information} Method ..');
                            
            mainInfo();                
        };
    // ==============================================================                                                                    
    
    // Second Button {btn0} => Checking for Cookies in Brower {Navigator.cookieEnabled}: 
        btn0.onclick = function() {
            'use strict';                 
            
            alert('Welcome to {Checking for Cookies in Brower} Method ..');
            console.log('Welcome to {Checking for Cookies in Brower} Method ..');                
                            
            checkCookie();                
        };
    // ==============================================================                                                                    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}