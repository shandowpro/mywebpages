
/* 6 Learn JS BOM - Window Methods - Open */

    /* A] Basic Application ->
        *) Open new Window by different properties [4 Main Properties] => {by using (5)Buttons} :  
        1) URL => [Empty || url website]
        2) Name / Attribute => [Name: Progragming Ref Name || Attribute : (_blank , _self , _top) ]
        3) Specifications => [
            new Window Dimensions: (width, height)  
            new Window Position: (left, top)  
            new Window MenuBar: (yes, no)  
            new Window StausBar: (yes, no)  
        ] 
        4) History Replace Menu => [display: true || false} ]     
    */    
    
    /* Getting all Required Variables: 
        btn1 : Open New Window {URL : Empty} [blank Window]
        btn2 : Open New Window {URL: user} 
        btn3 : Open New Window {URL: Google} + {Name: by User}
        btn4 : Open New Window {URL: Google} + {Attribute: User}
        btn5 : Open New Window {URL: Google} + {Name: by User} + {Attribute: User} + {Specifications: User}
        btn6 : Open New Window {URL: Google} + {Name: by User} + {Attribute: User} + {Specifications: User} + {History Replace}
    */

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3'),
            btn4 = document.getElementById('btn4'),
            btn5 = document.getElementById('btn5'),
            btn6 = document.getElementById('btn6');
        
    //  Decleration of Button onclick event  :
    
    
    // First Button {btn1} => [Empty URL] :
        btn1.onclick = function() {
            'use strict';                                
            btn1.textContent = 'Blank New Window';
            window.open('','','','');            
        }
        
    // Second Button {btn2} => [User URL] :
        btn2.onclick = function() {
            'use strict';
            var urlU = prompt('Enter your URL to locate to :');                                                    
            
            btn2.textContent = 'User URL';
            
            window.open(urlU,'','','');            
            // window.open('https://www.google.com','','','');            
        }
    // =======================================================


    // Third Button {btn3} => [User URL + User WebPage Name] :
        btn3.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',
                nameU = prompt('Enter your New Window Name : ');
            
            btn3.textContent = 'User URL + User WebPage Name';
                
            // window.open(urlU,nameU,'','');
            window.open('https://www.google.com',nameU,'','');
        }
    // =======================================================

    // Fourth Button {btn4} => [Fixed URL + User Attribute] :
        btn4.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',
                att = prompt('Press 1 for new [Blank Attribute] window\nPress 2 for [Self Attribute] Window\nPress 3 for new [Top Attribute] window:');
                // nameU = prompt('Enter your New Window Name : '),
            
            if (att == 1) {

                btn4.textContent = 'Fixed URL + Use Attribute : Blank';
                window.open(urlU,'_blank','','');
                
            } else if(att= 2) {
                
                btn4.textContent = 'Fixed URL + Use Attribute : Self';
                window.open(urlU,'_self','','');            
                
            } else if(att= 3) {
                
                btn4.textContent = 'Fixed URL + Use Attribute : Top';
                window.open(urlU,'_top','','');            
            }

        }
    //=================================================


    // Fifth Button {btn5} => [Fixed URL + Fixed Attribute + User Spcifications ] :
        btn5.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',                
                att = '_blank',
                specs = prompt('Press 1 to Assign New Window Dimensions [width || Heigth]\nPress 2 to Assign New Window Position [Left || Top]\nPress 3 to Assign New Window MenuBar Display [Yes || No]\nPress 4 to Assign New Window StatusBar [Yes || No]');
            
            if (specs == 1) {
                var w = parseInt(prompt('Enter new Window Width:')),
                    h = parseInt(prompt('Enter new Window Height: '));

                btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window Dimensions [width || Heigth]';
                // window.open(urlU,att,"width=" + w + ",height=" + h + '"' , "");
                window.open(urlU,att,"width=" + w + ",height=" + h , "");
                
            } else if (specs == 2) {
                
                var l = parseInt(prompt('Enter new Window Left: ')),
                    t = parseInt(prompt('Enter new Window Top: '));
                
                btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window Position [Left || Top]';
                window.open(urlU,att,"left=" + l + ",top=" + t , "");
                
            } else if (specs == 3) {
                
                var c = prompt('Press (1) to Display MenuBar in New window\nPress (2) to Hide MenuBar in New window ');                

                if (c == 1) {

                    window.open(urlU,att,"menubar=yes","");                        

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window MenuBar Display [Yes]';
                    
                } else if (c == 2) {
                    
                    window.open(urlU,att,"menubar=no","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window MenuBar Display [No]';
                }

            
            } else if (specs == 4) {
                var d = prompt('Press (1) to Display Status Bar in New window\nPress (2) to Hide Status Bar in New window ');                

                if (d == 1) {

                    window.open(urlU,att,"status=yes","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window status Bar Display [Yes]';
                    
                } else if (d == 2) {
                    
                    window.open(urlU,att,"status=no","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window status Bar Display [No]';
                }
            
            } else {                
                alert('Error Choice');
                btn5.textContent = 'Error Choice';
            }

        }
    // ====================================================================


// Sixth Button {btn6} => [Fixed URL + Fixed Attribute + Default Specifications ] :
    btn6.onclick = function() {
        'use strict';
        var urlU = 'https://www.google.com',
            att = '_blank',     
            hs = prompt('Press 1 for new window with Display History Replace \nPress 2 for Hidden History Replace:');
            // nameU = prompt('Enter your New Window Name : '),
        
        if (hs == 1) {
            
            btn6.textContent = 'Fixed URL + Fixed Attribute : Blank + Default Specifications + User History Replace';
            window.open(urlU, att, '','true');
            
        } else if(att= 2) {
            
            btn6.textContent = 'Fixed URL + Fixed Attribute : Blank + Default Specifications + User History Replace';
            window.open(urlU, att, '','false');
                    
        } else {
            alert('Error Entry!');
            btn6.textContent = 'Error Entry!';
        }

    }

    //=================================================

// =============================================================================================================

function test() {            
    /* A] Basic Application ->
        *) Open new Window by different properties [4 Main Properties] => {by using (5)Buttons} :  
            1) URL => [Empty || url website]
            2) Name / Attribute => [Name: Progragming Ref Name || Attribute : (_blank , _self , _top) ]
            3) Specifications => [
                new Window Dimensions: (width, height)  
                new Window Position: (left, top)  
                new Window MenuBar: (yes, no)  
                new Window StausBar: (yes, no)  
            ] 
            4) History Replace Menu => [display: true || false} ]     
    */    
    
    /* Getting all Required Variables: 
        btn1 : Open New Window {URL : Empty} [blank Window]
        btn2 : Open New Window {URL: user} 
        btn3 : Open New Window {URL: Google} + {Name: by User}
        btn4 : Open New Window {URL: Google} + {Attribute: User}
        btn5 : Open New Window {URL: Google} + {Name: by User} + {Attribute: User} + {Specifications: User}
        btn6 : Open New Window {URL: Google} + {Name: by User} + {Attribute: User} + {Specifications: User} + {History Replace}
    */

        var btn1 = document.getElementById('btn1'),
            btn2 = document.getElementById('btn2'),
            btn3 = document.getElementById('btn3'),
            btn4 = document.getElementById('btn4'),
            btn5 = document.getElementById('btn5'),
            btn6 = document.getElementById('btn6');
        
    //  Decleration of Button onclick event  :
        
    // First Button {btn1} => [Empty URL] :
        btn1.onclick = function() {
            'use strict';                                
            btn1.textContent = 'Blank New Window';
            window.open('','','','');            
        }
        
    // Second Button {btn2} => [User URL] :
        btn2.onclick = function() {
            'use strict';
            var urlU = prompt('Enter your URL to locate to :');                                                    
            
            btn2.textContent = 'User URL';
            
            window.open(urlU,'','','');            
            // window.open('https://www.google.com','','','');            
        }
    // =======================================================


    // Third Button {btn3} => [User URL + User WebPage Name] :
        btn3.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',
                nameU = prompt('Enter your New Window Name : ');
            
            btn3.textContent = 'User URL + User WebPage Name';
                
            // window.open(urlU,nameU,'','');
            window.open('https://www.google.com',nameU,'','');
        }
    // =======================================================

    // Fourth Button {btn4} => [Fixed URL + User Attribute] :
        btn4.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',
                att = prompt('Press 1 for new [Blank Attribute] window\nPress 2 for [Self Attribute] Window\nPress 3 for new [Top Attribute] window:');
                // nameU = prompt('Enter your New Window Name : '),
            
            if (att == 1) {

                btn4.textContent = 'Fixed URL + Use Attribute : Blank';
                window.open(urlU,'_blank','','');
                
            } else if(att= 2) {
                
                btn4.textContent = 'Fixed URL + Use Attribute : Self';
                window.open(urlU,'_self','','');            
                
            } else if(att= 3) {
                
                btn4.textContent = 'Fixed URL + Use Attribute : Top';
                window.open(urlU,'_top','','');            
            }

        }
    //=================================================


    // Fifth Button {btn5} => [Fixed URL + Fixed Attribute + User Spcifications ] :
        btn5.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',                
                att = '_blank',
                specs = prompt('Press 1 to Assign New Window Dimensions [width || Heigth]\nPress 2 to Assign New Window Position [Left || Top]\nPress 3 to Assign New Window MenuBar Display [Yes || No]\nPress 4 to Assign New Window StatusBar [Yes || No]');
            
            if (specs == 1) {
                var w = parseInt(prompt('Enter new Window Width:')),
                    h = parseInt(prompt('Enter new Window Height: '));

                btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window Dimensions [width || Heigth]';
                // window.open(urlU,att,"width=" + w + ",height=" + h + '"' , "");
                window.open(urlU,att,"width=" + w + ",height=" + h , "");
                
            } else if (specs == 2) {
                
                var l = parseInt(prompt('Enter new Window Left: ')),
                    t = parseInt(prompt('Enter new Window Top: '));
                
                btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window Position [Left || Top]';
                window.open(urlU,att,"left=" + l + ",top=" + t , "");
                
            } else if (specs == 3) {
                
                var c = prompt('Press (1) to Display MenuBar in New window\nPress (2) to Hide MenuBar in New window ');                

                if (c == 1) {

                    window.open(urlU,att,"menubar=yes","");                        

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window MenuBar Display [Yes]';
                    
                } else if (c == 2) {
                    
                    window.open(urlU,att,"menubar=no","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window MenuBar Display [No]';
                }

            
            } else if (specs == 4) {
                var d = prompt('Press (1) to Display Status Bar in New window\nPress (2) to Hide Status Bar in New window ');                

                if (d == 1) {

                    window.open(urlU,att,"status=yes","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window status Bar Display [Yes]';
                    
                } else if (d == 2) {
                    
                    window.open(urlU,att,"status=no","");

                    btn5.textContent = 'Fixed URL + Fixed Attribute + User Spcification: New Window status Bar Display [No]';
                }
            
            } else {                
                alert('Error Choice');
                btn5.textContent = 'Error Choice';
            }

        }
    // ====================================================================


    // Sixth Button {btn6} => [Fixed URL + Fixed Attribute + Default Specifications ] :
        btn6.onclick = function() {
            'use strict';
            var urlU = 'https://www.google.com',
                att = '_blank',     
                hs = prompt('Press 1 for new window with Display History Replace \nPress 2 for Hidden History Replace:');
                // nameU = prompt('Enter your New Window Name : '),
            
            if (hs == 1) {
                
                btn6.textContent = 'Fixed URL + Fixed Attribute : Blank + Default Specifications + User History Replace';
                window.open(urlU, att, '','true');
                
            } else if(att= 2) {
                
                btn6.textContent = 'Fixed URL + Fixed Attribute : Blank + Default Specifications + User History Replace';
                window.open(urlU, att, '','false');
                        
            } else {
                alert('Error Entry!');
                btn6.textContent = 'Error Entry!';
            }

        }

    //=================================================

}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}