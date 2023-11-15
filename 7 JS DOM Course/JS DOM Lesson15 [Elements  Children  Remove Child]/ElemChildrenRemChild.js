
/* global document, alert, prompt */                    
/* JSOOP [Elements Children Remove Child ] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements Children Remove Child}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements Children - child Nodes Remove Child}  \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Remove [child Element] from Parent Element}  Path ...\n " +
             "Press(2)  for  {Remove [Child Node] from Parent Element} Path ...\n");
                        
            if (path == "1") {                 
                                                                                                      
                alert("Welcome to {Remove [child Element] from Parent Element} Path");
                
                var mthd = prompt("Press (1) to {Remove [(First) child Element] from Parent Element} Method ... \n " +
                " Press (2) to {Remove [(Last) child Element] from Parent Element} Method  ... \n" +
                " Press (3) to {Remove [(Certain) child Element] from Parent Element} Method  ...");                                

                if (mthd == "1"){
                                                        
                    // Remove [(First) child Element] from Parent Element:                
                    
                    do {
                                                
                        alert("Welcome to {Remove [(First) Child Element] from Parent Element} ");
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.children.length == 0) {
                            alert('your Parent Element count = 0');
                            alert('Removing process has been Canceled!');
                            
                        } else {
                            
                            alert('Removing process has confirmed');
                            
                            var childElem = elemP.firstElementChild;

                            elemP.removeChild(elemP.firstElementChild);
                                                                            
                            
                            alert("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                            
                            console.log("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                            
                            // Displaying All {Child elements} after Removing the child element from The parent Element:
                                                                                                    
                            alert("Displaying All {Child elements} after Removing the child element from The parent Element as following");
                            
                            alert(elemP.childNodes);
                            
                            console.log(elemP.childNodes);
                            
                            document.getElementById('txtarea').textContent += elemP.childNodes + '\n';

                        }


                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Remove [(First) child Element] from Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                    
                } else if (mthd =="2") {                                        

                    // Remove [(Last) child Element] from Parent Element :                
                    do {                                                   
                                                
                        alert("Welcome to Remove [(Last) child Element] from Parent Element  ");
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.children.length == 0) {
                            alert('your Parent Element count = 0');
                            alert('Removing process has been Canceled!');
                            
                        } else {
                            
                            alert('Removing process has confirmed');
                            
                            var childElem = elemP.lastElementChild;

                            elemP.removeChild(elemP.lastElementChild);
                                                                            
                            
                            alert("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                            
                            console.log("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                            
                            // Displaying All {Child elements} after Removing the child element from The parent Element:
                                                                                                    
                            alert("Displaying All {Child elements} after Removing the child element from The parent Element as following");
                            
                            alert(elemP.childNodes);
                            
                            console.log(elemP.childNodes);
                            
                            document.getElementById('txtarea').textContent += elemP.childNodes + "\n";

                        }

        
                        var z0 =prompt("Press (1) to restart the {Remove [(Last) child Element] from Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                                                                                                           
                            
                } else if (mthd =="3") {                                        

                    
                    // Remove [(Certain) child Element] from Parent Element :                
                    do {
                                                
                        alert("Welcome to Remove [(certian) child Element] from Parent Element  ");
    
                        var elemP = document.getElementById('sec'),                                                        
                            cIndex = parseInt(prompt("Enter your {child Element Number} to remove form Parent Element  :"))-1;                         
                            
                        
                            if (elemP.children.length == 0) {
                                alert('your Parent Element count = 0 [Parent element has no childs Elements]');
                                alert('Element Removing process has been Canceled!');
                                
                            } else {
                                
                                if  (cIndex+1 > elemP.children.length) {
                                    
                                    alert("Child Element index inserted is out of it's parent element's children's length");
                                    alert('Element Removing process has been Canceled!');                                    
                                    
                                } else {
                                    
                                    if (cIndex + 1 == 0) {
                                        
                                        alert("the insereted Child Element index = 0");
                                        alert('Element Removing process has been Canceled!');

                                    } else {

                                        alert('Element Removing process has confirmed ...');
                                    
                                        var childElem = elemP.children[cIndex];
            
                                        elemP.removeChild(elemP.children[cIndex]);
                                                                                        
                                        
                                        alert("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                                        
                                        console.log("Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element  [ " + childElem.tagName + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                                        
                                        // Displaying All {Child elements} after child Element Removing from The parent Element:
                                                                                                                
                                        alert("Displaying All {Child elements} after Removing the child element from The parent Element as following");
                                        
                                        alert(elemP.childNodes);
                                        
                                        console.log(elemP.childNodes);
                                        
                                        document.getElementById('txtarea').textContent += elemP.childNodes + "\n";


                                    }
                                    
                                    
                                }
    
                            }    
                        
        
                        var z0 =prompt("Press (1) to restart the {Insert [child Element] Before (Child Node) with in Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                                                                                                                                                       
                } else {

                    alert('Error Entry!');
                }


        // =================================================================================================
        // =================================================================================================

            } else if (path == "2") {                    
                
                alert("Welcome to {Remove [child Node] from Parent Element} Path");
                
                var mthd = prompt("Press (1) to {Remove [(First) child Node] from Parent Element} Method ... \n " +
                " Press (2) to {Remove [(Last) child Node] from Parent Element} Method  ... \n" +
                " Press (3) to {Remove [(Certain) child Node] from Parent Element} Method  ...");                                

                if (mthd == "1"){
                                                        
                    // Remove [(First) child Node] from Parent Element:                
                    
                    do {
                                                
                        alert("Welcome to {Remove [(First) Child Node] from Parent Element} ");
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            alert("your Parent Element's Child Nodes count = 0");
                            alert('Child Node Removing process has been Canceled!');
                            
                        } else {
                            
                            alert('Removing process has confirmed');
                            
                            var childN = elemP.firstChild;

                            elemP.removeChild(elemP.firstChild);
                                                                            
                            
                            alert("Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                            
                            console.log("Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Element  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                            
                            // Displaying All {Child Nodes} after Removing the child Node from The parent Element:
                                                                                                    
                            alert("Displaying All {Child Nodes} after Removing the child Node from The parent Element as following");
                            
                            alert(elemP.childNodes);
                            
                            console.log(elemP.childNodes);
                            
                            document.getElementById('txtarea').textContent += elemP.childNodes + '\n';

                        }

                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Remove [(First) child Node] from Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                    
                } else if (mthd =="2") {                                        

                    // Remove [(Last) child Node] from Parent Element :                
                    do {                                                   
                                                
                        alert("Welcome to Remove [(Last) child Node] from Parent Element  ");
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            alert("Parent Element's child Nodes count = 0");
                            alert('Removing child Node process has been Canceled!');
                            
                        } else {
                            
                            alert('Removing child Node process has confirmed');
                            
                            var childN = elemP.lastChild;

                            elemP.removeChild(elemP.lastChild);
                                                                            
                            
                            alert("Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                            
                            console.log("Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                            
                            // Displaying All {Child Nodes} after Removing the child Node from The parent Element:
                                                                                                    
                            alert("Displaying All {Child Nodes} after Removing the child Node from The parent Element as following");
                            
                            alert(elemP.childNodes);
                            
                            console.log(elemP.childNodes);
                            
                            document.getElementById('txtarea').textContent += elemP.childNodes + '\n';

                            
                        }

        
                        var z0 =prompt("Press (1) to restart the {Remove [(Last) child Node] from Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                                                                                                           
                            
                } else if (mthd =="3") {                                        

                    // Remove [(Certain) child Node] from Parent Element :                
                    do {
                                                
                        alert("Welcome to Remove [(certian) child Node] from Parent Element  ");
    
                        var elemP = document.getElementById('sec'),                                                        
                            cIndex = parseInt(prompt("Enter your {child Node Number} to remove form Parent Element  :"))-1;                         
                            
                        
                            if (elemP.childNodes.length == 0) {
                                alert("Parent Element's child Nodes count = 0");
                                alert('Removing child Node process has been Canceled!');                                
                                
                            } else {
                                
                                if (cIndex+1 > elemP.childNodes.length ) {
                                    alert("your child Node is out of Parent Element Child Nodes length");
                                    alert('Removing child Node process has been Canceled!');
                                    
                                } else {
                                    if ( cIndex + 1 == 0) {
                                        alert("The inserted child Node's index = 0");
                                        alert('Removing child Node process has been Canceled!');                                        

                                    } else {
                                        alert('Element Removing process has confirmed ...');
                                
                                        var childN = elemP.childNodes[cIndex];
            
                                        elemP.removeChild(elemP.childNodes[cIndex]);
                                                                                        
                                        
                                        alert("Child Node [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                            
                                        
                                        console.log("Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Node  [ " + childN.textContent + "] has Been Removed form [" + elemP.tagName + "]\n";                                                        
                                        
                                        // Displaying All {Child elements} after Removing child Node from The parent Element:
                                                                                                                
                                        alert("Displaying All {Child elements} after Removing the child Node from The parent Element as following");
                                        
                                        alert(elemP.childNodes);
                                        
                                        console.log(elemP.childNodes);
                                        
                                        document.getElementById('txtarea').textContent += elemP.childNodes + "\n";


                                    }
                                    
        
                                }

                            }    
                        
        
                        var z0 =prompt("Press (1) to restart the {Removing certain [child Node] from  Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                                                                                                           
                                            
                } else {

                    alert('Error Entry!');
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
