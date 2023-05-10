/* global: cookie */ 
/* 19 Learn JS BOM - Cookies Part 2 */

    // A]  Decleration of Button will be used to process the Window Cookie Properties / Methods :
        // btn11 => Get Cookie by [Console] method 
        // btn12 => Get Cookie by [JS] method 

        // btn21 => Set Cookie by [Console] method 
        // btn22 => Set Cookie by [JS] method  

        // btn31 => Modify Cookie by [Console] method 
        // btn32 => Modify Cookie by [JS] method 

        // btn41 => Remove Cookie by [Console] method 
        // btn42 => Remove Cookie by [JS] method 

        // elem => Display all Cookie properties Methods  Values of each Function

        var btn11 = document.getElementById('btn11'),
            btn12 = document.getElementById('btn12'),                                
            btn21 = document.getElementById('btn21'),
            btn22 = document.getElementById('btn22'),
            btn31 = document.getElementById('btn31'),
            btn32 = document.getElementById('btn32'),
            btn41 = document.getElementById('btn41'),
            btn42 = document.getElementById('btn42'),
            elem = document.getElementById('elem');        
            
            

    // B] Main Functions :
        // 1) {Getting Cookie main information} Method [byt conosole & JS] :                     
            
            function testCookie() {
                var cookV = document.cookie;
                
                console.log(document.cookie);
                alert(document.cookie);
                                
                cookV = 'favColor=red';
                
                alert(document.cookie);
                console.log(document.cookie);
            }
                                        
            // function getCookieCons() {                                        
            
            //     // 1] Get the {Cookie file value} [Console] : 
            //         console.log('Cookie file value: ' + document.cookie);
            //         alert('Cookie file value: ' + document.cookie );
            //         elem.innerHTML += 'Cookie file value : ' + document.cookie + '<br>' ;
            // }       

            // function getCookieJS() {                                        
            
            //     // 2] Get the {Cookie file value} [JS] : 
            //         console.log('Cookie file value: ' + document.cookie());
            //         // alert('Cookie file value: ' + document.cookie );
            //         // elem.innerHTML += 'Cookie file value : ' + document.cookie + '<br>' ;
            // }                    
        // -------------------------------                            
        
        // 2) {Setting Cookie main information} Method :                     
            // function setCookie() {                                        
            
            //     // 2] Set the {Cookie flie value} : 
                
            //     var propName = prompt('Insert the proprety name :'),
            //         propValue = prompt('Insert the proprety name :'),
            //         dateEx = prompt('Insert the Cookie Expiry Date :', 'Enter date by string value'),
            //         path = prompt('Insert the Cookie Path: ');
                
            //     // var newCookie =  propName + ' = ' + propValue + '; date' + dateEx + '; path= ' + path ;
            //     var newCookie =  'color = #f00 ';
                
            //     document.cookie = newCookie; 

            //     console.log('New Full Cookie flie value is : ' + document.cookie);
            //     alert('Cookie flie value: ' + document.cookie );
            //     elem.innerHTML += 'Cookie flie value : ' + document.cookie + '<br>' ;                    
            // }                    
        // -------------------------------                            
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1] onclick event =>   :                    
        
        // First Button {btn0} => Getting main information {Cookie}: 
            btn0.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {Test Cookie } Method ..');
                console.log('Welcome to {Test Cookie } Method ..');
                                
                testCookie();                
            };
            


        //     btn1.onclick = function() {
        //         'use strict';                 
                
        //         alert('Welcome to {Get Cookie flie value} Method ..');
        //         console.log('Welcome to {Get Cookie flie value} Method ..');
                                
        //         getCookie();                
        //     };
        // // ==============================================================                                                                    
        
        // // Second Button {btn2} => Setting main information {Cookie}: 
        //     btn2.onclick = function() {
        //         'use strict';                 
                
        //         alert('Welcome to {Set Cookie flie values} Method ..');
        //         console.log('Welcome to {Set Cookie flie value} Method ..');
                                
        //         setCookie();                
        //     };
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