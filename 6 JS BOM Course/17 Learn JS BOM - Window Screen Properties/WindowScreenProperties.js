/* 17 Learn JS BOM - Window Screen Properties */

    // A]  Decleration of Button will be used to process the Window screen Properties :
        // btn1 =>  Screen main information method             
        // elem => Display all screen properties Values of each Function

        var btn1 = document.getElementById('btn1'),                                
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {Screen main information} Method :                     
            function mainInfo() {                                        
            
                // 1] Get the {Screen Total Height} : 
                    console.log('Screen Total Height: ' + screen.height);
                    alert('Screen Total Height: ' + screen.height);
                    elem.innerHTML += 'Screen Total Height: ' + screen.height + '<br>' ;                    

                // 2] Get the {Screen Total Width} : 
                    console.log('Screen Total Width : ' + screen.width);
                    alert('Screen Total Width : ' + screen.width);
                    elem.innerHTML += 'Screen Total Width : ' + screen.width + '<br>' ;
                
                // 3] Get the {Screen Net Height} : 
                    console.log('Screen Net Height: ' + screen.availHeight);
                    alert('Screen Net Height: ' + screen.availHeight);
                    elem.innerHTML += 'Screen Net Height: ' + screen.availHeight + '<br>' ;                                    
                
                // 4] Get the {Screen Net width} : 
                    console.log('Screen Net width: ' + screen.availWidth);
                    alert('Screen Net width: ' + screen.availWidth);
                    elem.innerHTML += 'Screen Net width: ' + screen.availWidth + '<br>' ;                    
                                
                // 5] Get the {Color Depth}  : 
                    console.log('Screen Color Depth:' + screen.colorDepth);
                    alert('Screen Color Depth: ' + screen.colorDepth);
                    elem.innerHTML += 'Screen Color Depth:0 ' + screen.colorDepth + '<br>' ; 
                
                // 6] Get the {Screen Pixel Depth} :
                    console.log('Screen Pixel Depth : ' + screen.pixelDepth);
                    alert('Screen Pixel Depth :  ' + screen.pixelDepth);
                    elem.innerHTML += 'Screen Pixel Depth : ' + screen.pixelDepth + '<br>' ;                 
                                
            }                    
        // -------------------------------                            
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1] onclick event =>   :                    
        
        // First Button {btn1} => Getting main information {screen}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {screen main information} Method ..');
                console.log('Welcome to {screen main information} Method ..');
                                
                mainInfo();                
            };
        // ==============================================================                                                                    
        
 
        // ==============================================================                                                                    
    //=================================================
// =============================================================================================================

function test() {            
 
    // A]  Decleration of Button will be used to process the Window screen Properties :
        // btn1 =>  Screen main information method             
        // elem => Display all screen properties Values of each Function

        var btn1 = document.getElementById('btn1'),                                
            elem = document.getElementById('elem');        
            

    // B] Main Functions :
        // 1) {Screen main information} Method :                     
            function mainInfo() {                                        
            
                // 1] Get the {Screen Total Height} : 
                    console.log('Screen Total Height: ' + screen.height);
                    alert('Screen Total Height: ' + screen.height);
                    elem.innerHTML += 'Screen Total Height: ' + screen.height + '<br>' ;                    

                // 2] Get the {Screen Total Width} : 
                    console.log('Screen Total Width : ' + screen.width);
                    alert('Screen Total Width : ' + screen.width);
                    elem.innerHTML += 'Screen Total Width : ' + screen.width + '<br>' ;
                
                // 3] Get the {Screen Net Height} : 
                    console.log('Screen Net Height: ' + screen.availHeight);
                    alert('Screen Net Height: ' + screen.availHeight);
                    elem.innerHTML += 'Screen Net Height: ' + screen.availHeight + '<br>' ;                                    
                
                // 4] Get the {Screen Net width} : 
                    console.log('Screen Net width: ' + screen.availWidth);
                    alert('Screen Net width: ' + screen.availWidth);
                    elem.innerHTML += 'Screen Net width: ' + screen.availWidth + '<br>' ;                    
                                
                // 5] Get the {Color Depth}  : 
                    console.log('Screen Color Depth:' + screen.colorDepth);
                    alert('Screen Color Depth: ' + screen.colorDepth);
                    elem.innerHTML += 'Screen Color Depth:0 ' + screen.colorDepth + '<br>' ; 
                
                // 6] Get the {Screen Pixel Depth} :
                    console.log('Screen Pixel Depth : ' + screen.pixelDepth);
                    alert('Screen Pixel Depth :  ' + screen.pixelDepth);
                    elem.innerHTML += 'Screen Pixel Depth : ' + screen.pixelDepth + '<br>' ;                 
                                
            }                    
        // -------------------------------                            
    // ===========================================================================================
    // ===========================================================================================
            
    // C] Decleration of Buttons [btn1] onclick event =>   :                    
        
        // First Button {btn1} => Getting main information {screen}: 
            btn1.onclick = function() {
                'use strict';                 
                
                alert('Welcome to {screen main information} Method ..');
                console.log('Welcome to {screen main information} Method ..');
                                
                mainInfo();                
            };
        // ==============================================================                                                                    
        
 
        // ==============================================================                                                                    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}