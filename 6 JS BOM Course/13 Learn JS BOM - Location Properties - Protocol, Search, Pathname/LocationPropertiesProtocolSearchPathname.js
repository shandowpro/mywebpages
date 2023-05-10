/* 13 Learn JS BOM - Location Properties - Protocol, Search, Pathname */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get/Set => location.protocol Function
        // btn2 => Get/Set => location.search Function
        // btn3 => Get/Set => location.pathname Function
        // elem => Display the Get Value of each Function

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.protocol} Get/Set Value Function : 
        function getsetProtocol() {        

            // 1) Getting Protocol Value : 
                console.log('You current web page Protocol Type is ' + location.protocol);
                alert('You current web page Protocol Type is ' + location.protocol);
                elem.innerHTML = 'You current web page Protocol Type is [ ' + location.protocol + ']<br>' ;


            // 2) Setting Protocol Type new Type :
                var protocolV = prompt('Enter your Protocol Type : ');
                
                console.log('Your new Protocol Type of current web page is ' + protocolV);
                alert('Your new Protocol Type of current web page is ' + protocolV);                
                elem.innerHTML += 'Your new Protocol Type of current web page is [ ' + protocolV + '] <br>' ;
                
                location.protocol = protocolV;
                
            }
            
        // 2) {location.search} Get/Set Search Querry String Value Function : 
        function getsetSearch() {            
            
            // 1) Getting Search Value : 
                console.log('You current web page Search Querry String Value is ' + location.search);
                alert('You current web page Search Querry String Value is ' + location.search);
                elem.innerHTML = 'You current web page Search Querry String Value is  [ ' + location.search + ']<br>' ;


            // 2) Setting Search Querry String Value :
                var searchV = prompt('Enter your new Search Querry String Value : ');
                
                console.log('Your new Customized Search Querry String Value of current web page is ' + searchV);
                alert('Your new Customized Search Querry String Value of current web page is ' + searchV);
                elem.innerHTML += 'Your new Customized Search Querry String Value of current web page is[ ' + searchV + ' ]<br>' ;
                
                location.search = searchV;
        }

        // 3) {location.pathname} Get/Set pathname Value Function : 
        function getsetPathName() {            
            
            // 1) Getting pathname Value : 
                console.log('You current web page pathname Value is ' + location.pathname);
                alert('You current web page pathname Value is ' + location.pathname);
                elem.innerHTML = 'You current web page pathname Value is  [ ' + location.pathname + ']<br>' ;


            // 2) Setting pathname Value :
                var pathNameV = prompt('Enter your new pathname Value : ');
                
                console.log('Your new Customized Path Name Value of current web page is ' + pathNameV);
                alert('Your new Customized Path Name Value of current web page is ' + pathNameV);
                elem.innerHTML += 'Your new Customized Path Name Value of current web page is[ ' + pathNameV + ' ]<br>' ;
                
                location.pathname = pathNameV;
        }

     
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1 , btn2 ,btn3] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting/Settting the location Protocol value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location Protocol value] ..');
                console.log('Welcome to [Getting the location Protocol value] ..');                 
                
                getsetProtocol();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Getting/Settting the location searching Querry String value] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Getting the location searching Querry String value] ..');
                console.log('Welcome to [Getting the location searching Querry String value] ..');
                
                getsetSearch();                
            };
                        
    // ==============================================================                                
        // Third Button {btn3} => Open Fuction of [Checking the Customized location Path Name value] :
            btn3.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Checking the Customized location Path Name value] ..');
                console.log('Welcome to [Checking the Customized location Path Name value] ..');
                
                getsetPathName();                
            };
                        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
     
    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn1 => Get/Set => location.protocol Function
        // btn2 => Get/Set => location.search Function
        // btn3 => Get/Set => location.pathname Function
        // elem => Display the Get Value of each Function

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            btn3 = document.getElementById('btn3'),            
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {location.protocol} Get/Set Value Function : 
        function getsetProtocol() {        

            // 1) Getting Protocol Value : 
                console.log('You current web page Protocol Type is ' + location.protocol);
                alert('You current web page Protocol Type is ' + location.protocol);
                elem.innerHTML = 'You current web page Protocol Type is [ ' + location.protocol + ']<br>' ;


            // 2) Setting Protocol Type new Type :
                var protocolV = prompt('Enter your Protocol Type : ');
                
                console.log('Your new Protocol Type of current web page is ' + protocolV);
                alert('Your new Protocol Type of current web page is ' + protocolV);                
                elem.innerHTML += 'Your new Protocol Type of current web page is [ ' + protocolV + '] <br>' ;
                
                location.protocol = protocolV;
                
            }
            
        // 2) {location.search} Get/Set Search Querry String Value Function : 
            function getsetSearch() {            
                
                // 1) Getting Search Value : 
                    console.log('You current web page Search Querry String Value is ' + location.search);
                    alert('You current web page Search Querry String Value is ' + location.search);
                    elem.innerHTML = 'You current web page Search Querry String Value is  [ ' + location.search + ']<br>' ;


                // 2) Setting Search Querry String Value :
                    var searchV = prompt('Enter your new Search Querry String Value : ');
                    
                    console.log('Your new Customized Search Querry String Value of current web page is ' + searchV);
                    alert('Your new Customized Search Querry String Value of current web page is ' + searchV);
                    elem.innerHTML += 'Your new Customized Search Querry String Value of current web page is[ ' + searchV + ' ]<br>' ;
                    
                    location.search = searchV;
            }

        // 3) {location.pathname} Get/Set pathname Value Function : 
            function getsetPathName() {            
                
                // 1) Getting pathname Value : 
                    console.log('You current web page pathname Value is ' + location.pathname);
                    alert('You current web page pathname Value is ' + location.pathname);
                    elem.innerHTML = 'You current web page pathname Value is  [ ' + location.pathname + ']<br>' ;


                // 2) Setting pathname Value :
                    var pathNameV = prompt('Enter your new pathname Value : ');
                    
                    console.log('Your new Customized Path Name Value of current web page is ' + pathNameV);
                    alert('Your new Customized Path Name Value of current web page is ' + pathNameV);
                    elem.innerHTML += 'Your new Customized Path Name Value of current web page is[ ' + pathNameV + ' ]<br>' ;
                    
                    location.pathname = pathNameV;
            }
     
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1 , btn2 ,btn3] onclick event =>   :                    
        // First Button {btn1} => Open Fuction of [Getting/Settting the location Protocol value] :
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to [Getting the location Protocol value] ..');
                console.log('Welcome to [Getting the location Protocol value] ..');                 
                
                getsetProtocol();                
            };
        // ==============================================================
        
        // Second Button {btn2} => Open Fuction of [Getting/Settting the location searching Querry String value] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Getting the location searching Querry String value] ..');
                console.log('Welcome to [Getting the location searching Querry String value] ..');
                
                getsetSearch();                
            };
                        
    // ==============================================================                                
        // Third Button {btn3} => Open Fuction of [Checking the Customized location Path Name value] :
            btn3.onclick = function() {
                'use strict'; 
                
                alert('Welcome to [Checking the Customized location Path Name value] ..');
                console.log('Welcome to [Checking the Customized location Path Name value] ..');
                
                getsetPathName();                
            };
                        
    // ==============================================================                                
    //=================================================
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}