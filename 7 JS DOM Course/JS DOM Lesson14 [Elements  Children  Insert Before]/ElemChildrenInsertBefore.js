
/* global document, alert, prompt */                    
/* JSOOP [Elements Children Insert Before] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements Children Insert Before}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements Children Insert Before}  \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Insert [child Element] Before (childs elements & Text Nodes) with in Parent Emement}  Path ...\n " +
             "Press(2)  for  {insert [Child Node] Before (childs elements & Text Nodes) with in Parent Emement} Path ...\n");
                        
            if (path == "1") {                 
                                                                                      
                alert("Welcome to {Insert [Child Element] Before (childs elements & Text Nodes) with in Parent Element} Path");
                
                var mthd = prompt("Press (1) to {Insert [child Element] Before (Child Element) with in Parent Element} Method ... \n " +
                " Press (2) to {Insert [child Element] Before (Text Nodes) with in Parent Element} Method  ... ");
                
                if (mthd == "1"){
                                                        
                    // {Insert [child Element] Before (childs elements) with in Parent Element:                
                    
                    do {
                                                
                        alert("Welcome to {Insert [child Element] Before (childs elements) with in Parent Element} ");
    
                        var elemId = prompt("Enter {Parent Element id } to Insert children Elements in it :"),
                            elemP = document.getElementById(elemId),
                            childTag = prompt("Enter your new child Element Tag name:"),
                            childElem = document.createElement(childTag),
                            UchildTxt = prompt("enter your New Child text Content:"),
                            childTxt = document.createTextNode(UchildTxt),
                            cIndex = parseInt(prompt("Enter your child Element Number to insert new Child element before :"))-1;                         

                            
                        // Appeding new Child's TextNode Element to the Child Element
                        childElem.appendChild(childTxt);
                            
                        // Appeding new Child Elements to the parent Element
                        elemP.appendChild(childElem);
                        
                        // Inserting new Child Element to the before certian Child element with in parent Element:
                        elemP.insertBefore(childElem , elemP.children[cIndex]);
                        
                                                
                        
                        alert("New Child Element  [ " + childElem.tagName + "] has Been inserted Before [" + elemP.children[cIndex+1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                            
                        
                        console.log("New Child Element  [ " + childElem.tagName + "] has Been inserted Before [" + elemP.children[cIndex+1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                                                                                                            
                        
                        document.getElementById('txtarea').textContent +=
                        "New Child Element  [ " + childElem.tagName + "] has Been inserted Before [" + elemP.children[cIndex+1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n";                                                        
                        
                        // Displaying All {Child elements} after have been Added-inserted before the child of The parent Elsement:
                                                                        
                        elemP.children;
                        elemP.childNodes;
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Insert [child Element] Before (Child Element) with in Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                    
                } else if (mthd =="2") {
                    
                    // {Insert [child Element] Before (Text Nodes) with in Parent Element} :                
                    do {                                                   
                                                
                        alert("Welcome to {Insert [child Element] Before (childs node) with in Parent Element} ");
    
                        var elemId = prompt("Enter {Parent Element id } to Insert child Element in it :"),
                            elemP = document.getElementById(elemId),
                            childTag = prompt("Enter your new child Element Tag name:"),
                            childElem = document.createElement(childTag),
                            UchildTxt = prompt("enter your New Child text Content:"),
                            childTxt = document.createTextNode(UchildTxt),
                            cIndex = parseInt(prompt("Enter your {child Node Number} to insert new Child Element before :"))-1;                         

                            
                        // Appeding new Child's TextNode Element to the Child Element
                        childElem.appendChild(childTxt);
                            
                        // Appeding new Child Elements to the parent Element
                        elemP.appendChild(childElem);
                        
                        // Inserting new {"Child Element"} to the before certian {Child Node} with in parent Element:
                        elemP.insertBefore(childElem , elemP.childNodes[cIndex]);
                        
                                                                        
                        alert("New Child Element  [ " + childElem.tagName + "] has Been inserted Before Child Node [" + elemP.childNodes[cIndex + 1].textContent +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                            
                        
                        console.log("New Child Element  [ " + childElem.tagName + "] has Been inserted Before Child Node [" + elemP.childNodes[cIndex + 1].textContent +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                                                                                                            
                        
                        document.getElementById('txtarea').textContent +=
                        "New Child Element  [ " + childElem.tagName + "] has Been inserted Before Child Node [" + elemP.childNodes[cIndex + 1].textContent +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n";                                                        

                        
                        // Displaying All Child elements after have been Added-inserted berore the child of The parent Element:
                        elemP.children;
                        elemP.childNodes;

        
                        var z0 =prompt("Press (1) to restart the {Insert [child Element] Before (Child Node) with in Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                                                                                                           
                            
                } else {

                    alert('Error Entry!');
                }


        // =================================================================================================
        // =================================================================================================

            } else if (path == "2") {                    
                
                alert("Welcome to {Insert [Child Node] Before (childs elements & Text Nodes) with in Parent Element} Path");
                
                var mthd = prompt("Press (1) to {Insert [child Node] Before (Child Element) with in Parent Element} Method ... \n " +
                " Press (2) to {Insert [child Node] Before (Text Nodes) with in Parent Element} Method  ... ");
                
                if (mthd == "1"){
                                    
                    // {Insert [child Node] Before (childs elements) with in Parent Element:                
                    
                    do {                                                   
                                                                        
                        alert("Welcome to {Insert new [child Node] Before (Childs Element) with in Parent Element} ");
    
                        var elemId = prompt("Enter {Parent Element id } to Insert child Node in it :"),
                            elemP = document.getElementById(elemId),
                            childNTxt = prompt("Enter your new child node Content:"),
                            childN = document.createTextNode(childNTxt),                            
                            cIndex = parseInt(prompt("Enter your {child Element Number} to insert new Child Node before :"))-1;                         
                                                
                            
                        // Appending new Child Node to the parent Element
                        elemP.appendChild(childN);
                        
                        // Inserting new Child Element the before {certian Child element} with in parent Element:
                        elemP.insertBefore(childN , elemP.children[cIndex]);
                        
                                                                        
                        alert("New Child Node  [ " + childN.textContent + "] has Been inserted Before child Element [" + elemP.children[cIndex + 1].tagName + "] with in Parent Element ["  + elemP.tagName +  "]\n");                            
                        
                        console.log("New Child Node  [ " + childN.textContent + "] has Been inserted Before child Element [" + elemP.children[cIndex + 1].tagName + "] with in Parent Element ["  + elemP.tagName +  "]\n");                                                                                                            
                        
                        document.getElementById('txtarea').textContent +=
                        "New Child Node  [ " + childN.textContent + "] has Been inserted Before child Element [" + elemP.children[cIndex + 1 ].tagName + "] with in Parent Element ["  + elemP.tagName +  "]\n";                                                        
                        
                        // Displaying All {Child Nodes} after have been Added-inserted before the child Elements of The parent Element:
                        elemP.children;
                        elemP.childNodes;

                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Insert [child Node] Before (Child Element) with in Parent Element} Method \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                    
                } else if (mthd =="2") {
                    
                    // {Insert [child Node] Before certian (Child Node) with in Parent Element} :                
                    
                    do {                                                   
                                                
                        alert("Welcome to {Insert new [Child Node] Before cetian (Childs  Node) with in Parent Element} ");
    
                        var elemId = prompt("Enter {Parent Element id } to Insert child Node in it :"),
                            elemP = document.getElementById(elemId),
                            childNTxt = prompt("Enter your new {Child Node} Content:"),
                            childN = document.createTextNode(childNTxt),                            
                            cIndex = parseInt(prompt("Enter your {child Node Number} to insert new Child Node before :"))-1;                         
                                                
                            
                        // Inserting new {Child Node} to the parent Element:
                        elemP.appendChild(childN);
                        
                        // Inserting new {Child Node} the before {certian Child Node} with in parent Element:
                        elemP.insertBefore(childN , elemP.childNodes[cIndex]);
                        
                                                                        
                        alert("New Child Node  [ " + childN.textContent + "] has Been inserted Before child Node [" + elemP.childNodes[cIndex + 1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                            
                        
                        console.log("New Child Node  [ " + childN.textContent + "] has Been inserted Before child Node [" + elemP.childNodes[cIndex + 1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n");                                                                                                            
                        
                        document.getElementById('txtarea').textContent +=
                        "New Child Node  [ " + childN.textContent + "] has Been inserted Before child Node [" + elemP.childNodes[cIndex + 1].tagName +
                         "] with in Parent Element ["  + elemP.tagName +  "]\n";                                                        
                        
                        // Displaying All {Child Nodes} after have been Added-inserted before the cetian child Nodes of The parent Element:
                        elemP.children;
                        elemP.childNodes;
                                                
                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Insert [child Node] Before (Child Node) with in Parent Element} Method \n"+
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
