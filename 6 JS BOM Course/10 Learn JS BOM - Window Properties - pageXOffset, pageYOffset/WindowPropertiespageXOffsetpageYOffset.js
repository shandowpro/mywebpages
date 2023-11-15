/* 10 Learn JS BOM - Window Properties - pageXOffset, pageYOffset */

    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => Current page Scroll X
        // btn1 => Current page Scroll Y
        // btn0 => Current Elejmkent Scroll      

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            elem = document.getElementById('elem');
        // btn0 = document.getElementById('btn0'),
            
        
    // B] Decleration of Button onclick event => [Getting the properties values]  :                    
        // First Button {btn1} => [Getting value of Current Scroll X] :
            btn1.onclick = function() {
                'use strict'; 
                
                alert('The Current Page X Scroll is  = ' + window.scrollX);
                console.log('The Current Page X Scroll is  = ' + window.scrollX);
                elem.innerHTML += 'The Current Page X Scroll is  = ' + window.scrollX + '<br>' ;
            };
        // ==============================================================
        
        // Second Button {btn2} => [Getting value of Current Scroll Y] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('The Current Page X Scroll is  = ' + window.scrollY);
                console.log('The Current Page X Scroll is  = ' + window.scrollY);
                elem.innerHTML += 'The Current Page X Scroll is  = ' + window.scrollY + '<br>' ;

            };
        // ==============================================================
        
        // Third Button {btn0} => [Getting value of Current Scroll Y] :
            // btn0.onclick = function() {
            //     'use strict';                                                                                   
            //     // console.log(elem.scrollTop);
            //     // alert(elem.scrollTop);
                
            //     console.log(elem.offsetTop);
            //     alert(elem.offsetTop);
                
            //     // alert(elem.clientTop);
            //     // console.log(elem.clientTop);
                                
            //     if (window.scrollY == elem.offsetTop) {
            //         alert('You Reached the Top Scroll of Element ' + elem.tagName);
            //         console.log('You Reached the Top Scroll of Element ' + elem.tagName);
            //         elem.innerHTML += 'You Reached the Top Scroll of Element ' + elem.tagName + '<br>' ;
            //     }
                
            // };
                                        
                // if (window.scrollY >= elem.offsetTop) {
                //     alert('You Reached the Top Scroll of Element ' + elem.tagName);
                //     console.log('You Reached the Top Scroll of Element ' + elem.tagName);
                //     elem.innerHTML += 'You Reached the Top Scroll of Element ' + elem.tagName + '<br>' ;
                // }        
    // ==============================================================                                
    //=================================================
// =============================================================================================================

function test() {            
 
    // A]  Decleration of Button will be used to process the Scrolling Function  :
        // btn => Current page Scroll X
        // btn1 => Current page Scroll Y
        // btn0 => Current Elejmkent Scroll      

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),            
            elem = document.getElementById('elem');
            
            // btn0 = document.getElementById('btn0'),
            
        
    // B] Decleration of Button onclick event => [Getting the properties values]  :                    
        // First Button {btn1} => [Getting value of Current Scroll X] :
            btn1.onclick = function() {
                'use strict'; 
                
                alert('The Current Page X Scroll is  = ' + window.scrollX);
                console.log('The Current Page X Scroll is  = ' + window.scrollX);
                elem.innerHTML += 'The Current Page X Scroll is  = ' + window.scrollX + '<br>' ;
            };
        // ==============================================================
        
        // Second Button {btn2} => [Getting value of Current Scroll Y] :
            btn2.onclick = function() {
                'use strict'; 
                
                alert('The Current Page X Scroll is  = ' + window.scrollY);
                console.log('The Current Page X Scroll is  = ' + window.scrollY);
                elem.innerHTML += 'The Current Page X Scroll is  = ' + window.scrollY + '<br>' ;

            };
        // ==============================================================
        
        // Third Button {btn0} => [Getting value of Current Scroll Y] :
            // btn0.onclick = function() {
            //     'use strict';                                                                                   
            //     // console.log(elem.scrollTop);
            //     // alert(elem.scrollTop);
                
            //     console.log(elem.offsetTop);
            //     alert(elem.offsetTop);
                
            //     // alert(elem.clientTop);
            //     // console.log(elem.clientTop);
                                
            //     if (window.scrollY == elem.offsetTop) {
            //         alert('You Reached the Top Scroll of Element ' + elem.tagName);
            //         console.log('You Reached the Top Scroll of Element ' + elem.tagName);
            //         elem.innerHTML += 'You Reached the Top Scroll of Element ' + elem.tagName + '<br>' ;
            //     }
                
            // };
                                        
                // if (window.scrollY >= elem.offsetTop) {
                //     alert('You Reached the Top Scroll of Element ' + elem.tagName);
                //     console.log('You Reached the Top Scroll of Element ' + elem.tagName);
                //     elem.innerHTML += 'You Reached the Top Scroll of Element ' + elem.tagName + '<br>' ;
                // }        
        // ==============================================================
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}