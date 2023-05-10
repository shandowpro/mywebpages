
/* global document, alert, prompt */                    
/* JSOOP [Elements Child / Child Nodes] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements Children Child Nodes}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements child element - Child Nodes  }  \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {dealing with (first-last) elements child  of Parent Element  }  Path ...\n " +
             "Press(2)  for  {dealing with (first-last) of child Nodes Parent Element  } Path ...\n");
                        
            if (path == "1") {                 

                                                                      
                alert("Welcome to {dealing with (first-last) of Parent Element's child elements } Path");
                
                var mthd = prompt("Press (1) to {get the (first) elements child of certain Parent Element  } ... \n "+
                " Press (2) to {get the (last) elements child  of certain Parent Element  }   ... ");
                
                if (mthd ==  "1") {                                        


                    // {get the (first) elements child of certain Parent Element} method by (2) methods:
                    
                    do {                                                   



                        var elemId = prompt("Enter {Parent Element id } to get it's children Elements:"),
                            elemP = document.getElementById(elemId);                                                        
                       
                        var func = prompt("Press (1) to {get the (First Elements child) of  the parent using new method {elem.firstElementChild};  Method... \n "+
                        "Press (2) to {get the (First Elements child) of  the parent using old Method {elem.children[0]};  Method...  ");

                        if (func == "1") {
                            // Getting first Element child of parent element by New Method {elem.firstElementChild}:

                            alert("Welcome to (getting element child by new method) {elem.firstElementChild} ");
                            var fChild = elemP.firstElementChild;
                        
                            alert("Parent Element  [ " + elemP.tagName + "]'s first Child Element  is  " + fChild.tagName + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "]'s first Child Element  is = " + fChild.tagName + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "]'s first Child Element  is" + fChild.tagName + "]\n";                            
                            
                            
                        } else if (func == "2"){ 
                            // Getting first child Element of parent elenmet by old Method {elem.children[0]}:

                            alert("Welcome to (getting element child by Old method) {elem.children[0]} ");

                            var fChild = elemP.children[0];

                        
                            alert("Parent Element  [ " + elemP.tagName + "] 's first Child Element  is" + fChild.tagName + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "]'s first Child Element  is" + fChild.tagName + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "]'s first Child Element  is " + fChild.tagName + "]\n";                            

                        } else {

                            alert("Error Entry!");
                        }

                        var z0 =prompt("Press (1) to restart the Getting first child Element of parent elenmet by old - new Methods  Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

        // =================================================================================================
                } else if (mthd == "2") { 
                                        
                    // Get the Last Element Child of certain Parent Element Method by New Method {elem.lastElementChild} only: 
             
                    do {                                                   

                        var elemId = prompt("Enter {Parent Element id } to get it's children Elements:"),
                            elemP = document.getElementById(elemId);                                                                               

                        // Getting last Element child of parent element :

                        alert("Welcome to (getting element child by new method) {elem.lastElementChild} ");
                        var lChild = elemP.lastElementChild;
                    
                        alert("Parent Element  [ " + elemP.tagName + "] Children Count = " + lChild.tagName + "]\n");
                        
                        
                        console.log("Parent Element  [ " + elemP.tagName + "] Children Count = " + lChild.tagName + "]\n");                                                        
                                                
                        
                        document.getElementById('txtarea').textContent +=
                        "Parent Element  [ " + elemP.tagName + "] Children Count = " + lChild.tagName + "]\n";                                                        
                            
                       
                        var z0 =prompt("Press (1) to restart the Getting first child Element of parent elenmet by old - new Methods  Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                   

                } else  {

                    alert("Error Entry!");
                }
                
        // =================================================================================================


            } else if (path == "2") {                    

                alert("Welcome to {dealing with (first-last) of Parent Element's child Nodes} Path");
                
                var mthd = prompt("Press (1) to {get the (first) child Nodes of certain Parent Element  } ... \n "+
                " Press (2) to {get the (last) child Nodes of certain Parent Element  }   ... ");
                
                if (mthd ==  "1") {      
                                  
                    // {get the (first) child Nodes of certain Parent Element  } :

                    do {                                                                                                                
                        var elemId = prompt("Enter {Parent Element id } to get it's child Nodes:"),
                            elemP = document.getElementById(elemId);                                                        
                       
                        var func = prompt("Press (1) to {get the First parent element's Child Node using new method {elem.firstChild};  Method... \n "+
                        "Press (2) to {get the First parent element's Child Node using old method {elem.childNodes[0]};  Method...  ");


                        if (func == "1") {
                            // Getting first child Nodes of parent elenmet by New Method {elem.firstElementChild}:
                            
                            alert("Welcome to Getting first child Nodes of parent elenmet by New Method {elem.firstChild} ");
                            
                            var fChild = elemP.firstChild;
                        
                            alert("Parent Element  [ " + elemP.tagName + "] first Child Node  is " + fChild + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "] first Child Node  is " + fChild + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] first Child Node  is" + fChild + "]\n";                            
                            
                            
                        } else if (func == "2"){ 
                            // Getting first child Element of parent elenmet by old Method {elem.ChildNodes[0]}:
                            var fChild = elemP.childNodes[0];
                        
                            alert("Parent Element  [ " + elemP.tagName + "] first Child Node  is  = " + fChild + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "] first Child Node  is  " + fChild + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] first Child Node  is  " + fChild + "]\n";                            

                        } else {

                            alert("Error Entry!");
                        }

                        var z0 =prompt("Press (1) to restart the {get First child Nodes by new - old Methods Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

        // =================================================================================================
                } else if (mthd == "2") { 


                    // Get the Last Child Nodes of certain Parent Element by new methods only: 
                    
                    do {    

                        var elemId = prompt("Enter {Parent Element id } to get it's last child Nodes:"),
                            elemP = document.getElementById(elemId);                                                                                                       

                        var lChild = elemP.lastChild;
                    
                        alert("Parent Element  [ " + elemP.tagName + "] last Child Node is = " + lChild + "]\n");
                        
                        
                        console.log("Parent Element  [ " + elemP.tagName + "] last Child Node  is " + lChild + "]\n");                                                        
                                                
                        
                        document.getElementById('txtarea').textContent +=
                        "Parent Element  [ " + elemP.tagName + "] last Child Node  is " + lChild + "]\n";                            

                                                                                                                                                                                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {get last child Node by new Method only} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                        

                } else  {

                    alert("Error Entry!");
                }
                                                
                                                                                                                                               
    // ================================================================================================================                    
    //==================================================================================================================
                                                                                                                                                                                                                                                                                                                                                                
            } else {

                alert("Good Bye!");
            }        
    
            var z = prompt("Press (1) to Restart the whole Application \n or press any other key to abort!");
        } while (z=="1");        
    
    }            
}

//==============================================================================


//==============================================================================
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

//==============================================================================

function display() {
    document.getElementById("SourceCode").innerHTML = test + "\n\n" + "=".repeat(90) + "\n\n" +  test1;    
}

//==============================================================================
