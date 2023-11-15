/* 7 Learn JS BOM - Window Methods - scrollBy, scrollTo */

// A]  Decleration of Button will be used to process the Scrolling Function  :
    // btn => ScrollBy positive Value
    // btn1 => ScrollBy negative Value    

    // btn2 => ScrollTo positive Value
    // btn3 => ScrollTo negative Value

    // home0 => ScrollTo the Top of the Page
    // end0 => ScrollTo the Button of the Page

    var btn = document.getElementById('btn'),
        btn1 = document.getElementById('btn1'),
        btn2 = document.getElementById('btn2'),
        btn3 = document.getElementById('btn3'),
        home0 = document.getElementById('home0'),
        end0 = document.getElementById('end0');

    
// B] Decleration of Button onclick event => [Window Scrolling functions]  :        
    // First Button {btn1} => [Scrolling By a certian Positive Pixels (Left , Top)] :
        btn.onclick = function() {
            'use strict';                                            
            window.scrollBy(300, 300);            
            
            console.log('Window Scrolled to the left by : ' + scrollX);
            console.log('Window Scrolled to the top by : ' + scrollY);
            alert('Window Scrolled to the left by : ' + scrollX);
            alert('Window Scrolled to the top by : ' + scrollY);
        };
        
    
    // Second Button {btn1} => [Scrolling By a certian Negative Pixels (-Left , -Top)] :
        btn1.onclick = function() {
            'use strict';        
            window.scrollBy(-300, -300);            
            console.log('Window Scrolled to the left by : ' + scrollX);
            console.log('Window Scrolled to the top by : ' + scrollY);                
            alert('Window Scrolled to the left by : ' + scrollX);
            alert('Window Scrolled to the top by : ' + scrollY);
        };

    // Third Button {btn2} => [Scrolling By a certian Positive Pixels (Left , Top)] :
        btn2.onclick = function() {
            'use strict';        
            window.scrollTo(300, 300);            
            console.log('Window Scrolled to the left to : ' + scrollX);
            console.log('Window Scrolled to the top to : ' + scrollY);
            alert('Window Scrolled to the left to : ' + scrollX);
            alert('Window Scrolled to the top to : ' + scrollY);
        };

    // Fourth Button {btn3} => [Scrolling By a certian Negative Pixels (-Left , -Top)] :
        btn3.onclick = function() {
            'use strict';        
            window.scrollTo(-300, -200);            
            console.log('Window Scrolled to the max left to: ' + scrollX);
            console.log('Window Scrolled to the max top to : ' + scrollY);
            alert('Window Scrolled to the max left to : ' + scrollX);
            alert('Window Scrolled to the max top to : ' + scrollY);
        };
            
    // Fifth Button {home0} => [Scrolling By a max Top and Left (0 ,0)] :
        home0.onclick = function() {
            'use strict';        
            window.scrollTo(0, 0);            
            console.log('Window Scrolled to the min left to: ' + scrollX);
            console.log('Window Scrolled to the min top to : ' + scrollY);
            alert('Window Scrolled to the min left to : ' + scrollX);
            alert('Window Scrolled to the min top to : ' + scrollY);
        };

    // Sixth Button {end0} => [Scrolling By a max Top and Left (0 ,0)] :
        end0.onclick = function() {
            'use strict';        
            window.scrollTo(10000, 10000);            
            console.log('Window Scrolled to the max left to: ' + scrollX);
            console.log('Window Scrolled to the max top to : ' + scrollY);
            alert('Window Scrolled to the max left to : ' + scrollX);
            alert('Window Scrolled to the max top to : ' + scrollY);
        };
                
    // ======================================================    
    //=================================================
// =============================================================================================================

function test() {            
    
 // A]  Decleration of Button will be used to process the Scrolling Function  :
    // btn => ScrollBy positive Value
    // btn1 => ScrollBy negative Value    

    // btn2 => ScrollTo positive Value
    // btn3 => ScrollTo negative Value
    
    // home0 => ScrollTo the Top of the Page
    // end0 => ScrollTo the Button of the Page

    var btn = document.getElementById('btn'),
        btn1 = document.getElementById('btn1'),
        btn2 = document.getElementById('btn2'),
        btn3 = document.getElementById('btn3'),
        home0 = document.getElementById('home0'),
        end0 = document.getElementById('end0');

    
// B] Decleration of Button onclick event => [Window Scrolling functions]  :        
    // First Button {btn1} => [Scrolling By a certian Positive Pixels (Left , Top)] :
        btn.onclick = function() {
            'use strict';                                            
            window.scrollBy(300, 300);            
            
            console.log('Window Scrolled to the left by : ' + scrollX);
            console.log('Window Scrolled to the top by : ' + scrollY);
            alert('Window Scrolled to the left by : ' + scrollX);
            alert('Window Scrolled to the top by : ' + scrollY);
        };
        

    // Second Button {btn1} => [Scrolling By a certian Negative Pixels (-Left , -Top)] :
        btn1.onclick = function() {
            'use strict';        
            window.scrollBy(-300, -300);            
            console.log('Window Scrolled to the left by : ' + scrollX);
            console.log('Window Scrolled to the top by : ' + scrollY);                
            alert('Window Scrolled to the left by : ' + scrollX);
            alert('Window Scrolled to the top by : ' + scrollY);
        };

    // Third Button {btn2} => [Scrolling By a certian Positive Pixels (Left , Top)] :
        btn2.onclick = function() {
            'use strict';        
            window.scrollTo(300, 300);            
            console.log('Window Scrolled to the left to : ' + scrollX);
            console.log('Window Scrolled to the top to : ' + scrollY);
            alert('Window Scrolled to the left to : ' + scrollX);
            alert('Window Scrolled to the top to : ' + scrollY);
        };

    // Fourth Button {btn3} => [Scrolling By a certian Negative Pixels (-Left , -Top)] :
        btn3.onclick = function() {
            'use strict';        
            window.scrollTo(-300, -200);            
            console.log('Window Scrolled to the max left to: ' + scrollX);
            console.log('Window Scrolled to the max top to : ' + scrollY);
            alert('Window Scrolled to the max left to : ' + scrollX);
            alert('Window Scrolled to the max top to : ' + scrollY);
        };
            
    // Fifth Button {home0} => [Scrolling By a max Top and Left (0 ,0)] :
        home0.onclick = function() {
            'use strict';        
            window.scrollTo(0, 0);            
            console.log('Window Scrolled to the min left to: ' + scrollX);
            console.log('Window Scrolled to the min top to : ' + scrollY);
            alert('Window Scrolled to the min left to : ' + scrollX);
            alert('Window Scrolled to the min top to : ' + scrollY);
        };

    // Sixth Button {end0} => [Scrolling By a max Top and Left (0 ,0)] :
        end0.onclick = function() {
            'use strict';        
            window.scrollTo(10000, 10000);            
            console.log('Window Scrolled to the max left to: ' + scrollX);
            console.log('Window Scrolled to the max top to : ' + scrollY);
            alert('Window Scrolled to the max left to : ' + scrollX);
            alert('Window Scrolled to the max top to : ' + scrollY);
        };
                
    // ======================================================    
    //=================================================
// =============================================================================================================

}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}