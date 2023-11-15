/* 18 Learn JS BOM - Cookies Part 1 */

    // A]  Decleration of Button will be used to process the Window Cookie Properties / Methods :
        // btn1 =>  Screen main information method             
        // elem => Display all Cookie properties Values of each Function

        var btn1 = document.getElementById('btn1'),                                
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {Getting Cookie main information} Method :                     
            function getCookie() {                                        
            
                // 1] Get the {Cookie flie value} : 
                    console.log('Cookie flie value: ' + document.cookie);
                    alert('Cookie flie value: ' + document.cookie );
                    elem.innerHTML += 'Cookie flie value : ' + document.cookie + '<br>' ;                    
            }                    
        // -------------------------------                            
        
        // 2) {Setting Cookie main information} Method :                     
            function setCookie() {                                        
            
                // 2] Set the {Cookie flie value} : 
                
                var propName = prompt('Insert the proprety name :'),
                    propValue = prompt('Insert the proprety name :'),
                    dateEx = prompt('Insert the Cookie Expiry Date :', 'Enter date by string value'),
                    path = prompt('Insert the Cookie Path: ');
                
                // var newCookie =  propName + ' = ' + propValue + '; date' + dateEx + '; path= ' + path ;
                var newCookie =  'color = #f00 ';
                
                document.cookie = newCookie; 

                console.log('New Full Cookie flie value is : ' + document.cookie);
                alert('Cookie flie value: ' + document.cookie );
                elem.innerHTML += 'Cookie flie value : ' + document.cookie + '<br>' ;                    
            }                    
        // -------------------------------                            
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1] onclick event =>   :                    
        
        // First Button {btn1} => Getting main information {Cookie}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {Get Cookie flie value} Method ..');
                console.log('Welcome to {Get Cookie flie value} Method ..');
                                
                getCookie();                
            };
        // ==============================================================                                                                    
        
        // Second Button {btn2} => Setting main information {Cookie}: 
            btn2.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {Set Cookie flie values} Method ..');
                console.log('Welcome to {Set Cookie flie value} Method ..');
                                
                setCookie();                
            };
        // ==============================================================                                                                    
        
 
        // ==============================================================                                                                    
    //=================================================
// =============================================================================================================

function test() {            
 

}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}