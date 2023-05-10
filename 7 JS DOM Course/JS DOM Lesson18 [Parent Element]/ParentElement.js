
/* global document, alert, prompt */                    
/* JSOOP [Parent Element && Parent Node] */ 
/*template-string-converter.enable;*/

function test() {

    'use Strict';

    alert("Welcome to {Element's [Parent Node] & [Parent Element]}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to Element's [Parent Node] & [Parent Element]}  \n Choose your main {application} from below");
                                                            
            var path = prompt("Press(1) for Get Element's [Parent Element] & [Parent Node]}  Path ...\n " +             
            "Press(2) for {Hide the Parent Button Display} Path ...\n ");
                                                
            // [A] Get Element's [Parent Element] & [Parent Node]} Path :
        
            if (path == "1") {                 
            
                alert("Welcome to { Get Element's [Parent Element] & [Parent Node] } Path ...\n Choose your method from below...");
                                                
                var mthd = prompt("Press(1) for { Get Element's [Parent Element] } Method ...\n " +
                "Press(2) for { Get Element's [Parent Node] } Method ..."  );
                
                if (mthd == "1"){                    
                                                            
                    // { Get Element's [Parent Element] } Method :
                                                                            
                    do {
                                                                        
                        alert("Welcome to { Get Element's [Parent Element] } Method..") ;
    
                        var elem = document.getElementById('elem1'),
                            disp = document.getElementById('txtareaTest') ;                             

                        if (elem.parentElement.tagName === 'BODY') {
                            console.log('Your Element' +  elem.tagName + ' has no Parent Element , becuase it\'s parent is Body directly');
                            
                            alert('Your Element' +  elem.tagName + ' has no Parent Element , becuase it\'s parent is Body directly');

                            disp.innerHTML = 'Your Element' +  elem.tagName + ' has no Parent Element , becuase it\'s parent is Body directly';
                                                                                                            
                        } else {

                            console.log('Your Element\'s Parent Element ' +  elem.parentElement.tagName );
                            
                            alert('Your Element\'s Parent Element ' +  elem.parentElement.tagName);

                            disp.innerHTML = 'Your Element\'s Parent Element ' +  elem.parentElement.tagName;
                        }
                        
                        var z0 =prompt("Press (1) to restart the { Get Element's [Parent Element] } Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                // =================================================================================================
                                        
                } else if (mthd =="2") {                                                            
                    // { Get Element's [Parent Node] } Method :

                    do {
                                                                        
                        alert("Welcome to { Get Element's [Parent Node] } Method..") ;
    
                        var elem = document.getElementById('elem1'),
                            disp = document.getElementById('txtareaTest') ;                             

                        if (elem.parentNode.tagName === 'Body') {
                            console.log('Your Element' +  elem.tagName + ' has no Parent Node , becuase it\'s parent is Body directly');
                            
                            alert('Your Element' +  elem.tagName + ' has no Parent Node , becuase it\'s parent is Body directly');

                            disp.innerHTML = 'Your Element' +  elem.tagName + ' has no Parent Node , becuase it\'s parent is Body directly';
                                                                                                            
                        } else {

                            console.log('Your Element\'s Parent Element ' +  elem.parentNode.tagName );
                            
                            alert('Your Element\'s Parent Element ' +  elem.parentNode.tagName);

                            disp.innerHTML = 'Your Element\'s Parent Element ' +  elem.parentNode.tagName;
                        }
                        
                        var z0 =prompt("Press (1) to restart the { Get Element's [Parent Node] } Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                }
                                                                                                                            
        // =================================================================================================    
        // =================================================================================================

            } else if (path == "2") {               

                alert("Welcome to {Hide the Parent Button Display} Path ...\n The Path script will be displayed below ...");
                console.log(hideBtn);
                alert(hideBtn);
                                                                                                                                                                                                                                                                                                                                                                                                                                            
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
    document.getElementById("SourceCode").innerHTML = test + "\n\n" + "=".repeat(90) + "\n\n" +  hideBtn;    
}

//==============================================================================
