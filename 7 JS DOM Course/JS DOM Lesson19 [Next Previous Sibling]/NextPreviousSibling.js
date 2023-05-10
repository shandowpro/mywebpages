
/* global document, alert, prompt */                    
/* JSDOM [Next Previous Sibling Node & Element] */ 
/*template-string-converter.enable;*/

function test() {

    'use Strict';

    alert("Welcome to {Element's [Next/Previous] / [Sibling/ElementSibling] }  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to Element's { [Next/Previous] / [Sibling/ElementSibling] } \n Choose your main {application} from below");
                                                            
            var path = prompt("Press(1) for Get Element's { [Next/Previous] Node Sibling }} Path ...\n " +             
            "Press(2) for Get Element's { [Next/Previous] Element Sibling }} Path ...\n ");
                                                
            // [A]  Get Element's { [Next/Previous] Node Sibling }} Path :
        
            if (path == "1") {                 
            
                alert("Welcome to { Get Element's { [Next/Previous] Node Sibling }}  } Path ...\n Choose your method from below...");
                                                
                var mthd = prompt("Press(1) for { Get Element's { [Next] Node Sibling } }  Method ...\n " +
                "Press(2) for { Get Element's { [Previous] Node Sibling } }  Method  ..."  );
                
                if (mthd == "1"){                    
                                                            
                    // [A1] { Get Element's { [Next] Node Sibling } Method :
                                                                            
                    do {
                                                                        
                        alert("Welcome to {Get Element's { [Next] Node Sibling} Method..") ;
                        
                        var elemN = parseInt(prompt('Enter your Elememt index number inide it\'s parent:')) +1 ;
    
                        var elem = document.getElementById('sec').childNodes[elemN],
                            disp = document.getElementById('txtareaTest'); 
 
                        console.log('Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextSibling.textContent);
                        
                        alert('Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextSibling.textContent);

                        disp.innerHTML = 'Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextSibling.textContent;
                    
                        var z0 = prompt("Press (1) to restart the { Get Element's [ Element node Sibliing ] } Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                // =================================================================================================
                                        
                } else if (mthd =="2") {                                                            
                    // [A2] { Get Element's { [Previous] Node Sibling } Method :

                    do {
                                                                        
                        alert("Welcome to {Get Element's { [Previous] Node Sibling} Method..") ;

                        var elemN = parseInt(prompt('Enter your Elememt index number inside it\'s parent:')) +1 ;
    
                        var elem = document.getElementById('sec').childNodes[elemN],
                            disp = document.getElementById('txtareaTest'); 
 
                        console.log('Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousSibling.textContent);
                        
                        alert('Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousSibling.textContent);

                        disp.innerHTML = 'Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousSibling.textContent;
                    
                        var z0 = prompt("Press (1) to restart the { Get Element's { [Previous] Node Sibling} Method \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                }
                                                                                                                            
        // =================================================================================================    
        // =================================================================================================

            } else if (path == "2") {               
                alert("Welcome to { Get Element's { [Next/Previous] Element Sibling }}  } Path ...\n Choose your method from below...");
                                                
                var mthd = prompt("Press(1) for { Get Element's { [Next] Element Sibling } }  Method ...\n " +
                "Press(2) for { Get Element's { [Previous] Element Sibling } }  Method  ..."  );
                
                if (mthd == "1"){                    
                                                            
                    // [B1] { Get Element's { [Next] Element Sibling} Method :
                                                                            
                    do {
                                                                        
                        alert("Welcome to {Get Element's { [Next] Element Sibling} Method..") ;

                        var elemN = parseInt(prompt('Enter your Element index number inside it\'s parent:')) +1 ;
    
                        var elem = document.getElementById('sec').childNodes[elemN],
                            disp = document.getElementById('txtareaTest') ;                             

                        console.log('Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextElementSibling.textContent);
                        
                        alert('Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextElementSibling.textContent);

                        disp.innerHTML = 'Your Element ' +  elem.tagName + ' Next Node Sibling is: ' + elem.nextElementSibling.textContent;
                        
                        
                        var z0 =prompt("Press (1) to restart the { Get Element's Next Element Sbiling } Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                // =================================================================================================
                                        
                } else if (mthd =="2") {                                                            
                    // [B2] { Get Element's { [Previous] Element Sibling } Method :

                    do {
                                                                        
                        alert("Welcome to {Get Element's { [Previous] Element Sibling} Method..") ;
    
                        var elemN = parseInt(prompt('Enter your Element index number inside it\'s parent:')) +1 ;

                        var elem = document.getElementById('sec').childNodes[elemN],
                            disp = document.getElementById('txtareaTest') ;         

                        console.log('Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousElementSibling.tagName);
                        
                        alert('Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousElementSibling.tagName);

                        disp.innerHTML = 'Your Element ' +  elem.tagName + ' Previous Node Sibling is: ' + elem.previousElementSibling.tagName;
                                                        
                                                
                        var z0 =prompt("Press (1) to restart the { Get Element's Previous Sibling] } Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                }                                                                                                                                                                        
            } else {

                alert("No Entry!");
            }        
    
            var z = prompt("Press (1) to Restart the whole Application \n or press any other key to abort!");
        } while (z=="1");        
    
    }            
}

//==============================================================================
//==============================================================================

function hideBtn() {
    alert('Function alert');
    
    var myButton = document.getElementById('btnT'),
    
    elemParent = myButton.parentElement;

    alert('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    console.log('The Button Parent Tag Name is [' + myButton.parentElement.tagName + ']');
    
    myButton.parentElement.style.display = 'None';
        
}

//==============================================================================
// ==================================================================================

function test1(){
    
    // Show - hide function:
    
    'use strict';
    
    var elem = document.getElementById('pId'),
        elemBtn = document.getElementById('btn0');
                                            
    alert("Welcome to {Show-Hide} Function... ");
                
    elem.classList.toggle("hidden");


    if (elem.classList.contains('hidden')) {
        elemBtn.textContent = 'Show Paragraph';        
    } else {        
        elemBtn.textContent = 'Hide Paragraph';
    }
                                                                                        
}

// ==================================================================================
// ===================================================================================
//==============================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = test + "\n\n" + "=".repeat(90) + "\n\n";    
}

//==============================================================================
