
/* global document, alert, prompt */                    
/* JSOOP [Elements Children / Child Nodes] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements Children Child Nodes}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements Children - Child Nodes }  \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Parent element's Children} Path ...\n " +
             "Press(2)  for {Parent element's Child Nodes} Path ...\n");
                        
            if (path == "1") { 
                                                      
                alert("Welcome to {Parent element's Children} Path");
                
                var mthd = prompt("Press (1) to get {Count of Children elments of certain Parent element} ... \n "+
                " Press (2) to {get Aceess to certain child Element} ... ");
                
                if (mthd ==  "1") {                    


                    // Get Count of Children elements of certain Parent element:

                    do {                                                                                                                
                        var elemId = prompt("Enter {Parent Element id } to get it's children Elements:"),
                            elemP = document.getElementById(elemId);                                                        
                       
                        var func = prompt("Press (1) to get children Elements count by {ParentElem.children.length;} Method... \n "+
                        "Press (2) to get children Elements count by {ParentElem.childElementCount;} Method...  ");


                        if (func == "1") {

                            var x = elemP.children.length;
                        
                            alert("Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n";                            
                            
                            
                        } else if (func == "2"){ 

                            var x = elemP.childElementCount;
                        
                            alert("Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n");                                                        
                                                    
                            
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] Children Count = " + x + "]\n";                            


                        } else {

                            alert("Error Entry!");
                        }

                        var z0 =prompt("Press (1) to restart the {get children Elements count by {ParentElem.children.length;} Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

        // =================================================================================================
                } else if (mthd == "2") { 

                    // get Access to certain child Element:
                    
                    do {    

                        var elemId = prompt("Enter {Parent Element id } to get it's children Elements:"),
                            elemP = document.getElementById(elemId);                                     

                        var func = prompt("Press (1) to get All children Elements by {ParentElem.children;} Method... \n "+
                        "Press (2) to get ceratin children Element by {ParentElem.children[x];} Method...  ");

                        if (func == "1") {
                            // get All children of certian Parent element:
                            
                            alert("parent elements Children by {elem.children} method as following:");
                            
                            var childs = elemP.children;
                        
                            alert("Parent Element  [ " + elemP.tagName + "] Children as following \n" + childs + "] \n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "] Children as Following \n" + child + "] \n");                                                        
                                                                                
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] Children as following  \n" + child + "] - \n";                            

                            var x = elemP.childElementCount,
                                str = '';
                            
                            for (i=0; i<x; i++) {
                                
                                str += '\n Your child element Number (' + (i+1) + ") is " + elemP.children[i] + "] - " + elemP.children[i].tagName + "\n";
                            }

                            alert(str);
                                                        
                            console.log(str);                                                        
                                                                                
                            document.getElementById('txtarea').textContent += str + "\n";                            

                            
                        } else if (func == "2"){ 

                            // get Certain child element of certain Parent element:
                            var i = parseInt(prompt ("enter your child index:"))-1,
                                child = elemP.children[i];
                        
                            alert("Parent Element  [ " + elemP.tagName + "]'s Child is :\n" + child + "]\n");
                            
                            
                            console.log("Parent Element  [ " + elemP.tagName + "]'s Child is \n " + child + "]\n");
                                                        
                                                                                
                            document.getElementById('txtarea').textContent +=
                            "Parent Element  [ " + elemP.tagName + "] Child is :\n" + child + "]\n";                            


                        } else {

                            alert("Error Entry!");
                        }
                                                                                                                                                                                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {get certian child Element by {ParentElem.children[x];} Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                        

                } else  {

                    alert("Error Entry!");
                }
                
        // =================================================================================================

            } else if (path == "2") {    

                                                                
                alert("Welcome to {Parent element's Child Nodes}  Path");
                
                var mthd = prompt("Press (1) to get {Count of child Nodes of certain Parent element} ... \n "+
                " Press (2) to {get Aceess to child Node of parent Element} ... ");
                
                if (mthd ==  "1") {
                    
                    // get Count of Child Nodes of certain Parent Element:
                    do {                                        

                        alert('get Aceess to child Node of parent Element Method');

                        var elemId = prompt("Enter {Parent Element Id} "),
                            elemP = document.getElementById(elemId),
                            x = elemP.childElementCount;
                                
                        alert("Parent element [ " + elemP.tagName + "]'s child Nodes Count is " + x + "]\n");
                        
                        console.log("Parent element [ " + elemP.tagName + "]'s child Nodes Count is " + x + "]\n");
                        
                        document.getElementById('txtarea').textContent =
                        "Parent element [ " + elemP.tagName + "]'s child Nodes Count is " + x + "]\n";                                    
                        
                        
                        var z0 =prompt("Press (1) to restart the get {Count of child Nodes of certain Parent element}  \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

                    // =================================================================================================
                } else if (mthd == "2") { 
                    // {get Access to child Node of parent Element} Method  :

                    do  {

                        alert("Welcome to {get Aceess to child Node of parent Element } Method ");
    
                        var func = prompt ("Press (1) to get Access to Single certain child Node of Certain Parent Element Function...\n "+
                        " Press (2) to get Access to  All child Nodes of Certain Parent Element Function... ");
                         
                        if  (func == "1") {
                            // Get access to single certain child Node of certian Parent Elementm Function:
                            
                            var elemId = prompt("enter Parent Element's Id:"),
                                elem = document.getElementById(elemId),
                                x = parseInt(prompt("enter your Child Node index"))-1,
                                childNode = elem.childNodes[x];
    
                            alert("Parent element [ " + elemP.tagName + "]'s child Nodes is " + childNode + "]\n");
                            
                            console.log("Parent element [ " + elemP.tagName + "]'s child Nodes is " + childNode + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "Parent element [ " + elemP.tagName + "]'s child Nodes is " + childNode + "]\n";                                    
    
    
                        } else if (func =="2")  {

                            // Get access to All child Nodes of certian Parent Element Function: 
                            alert("Parent element's Child Nodes by {elem.childNodes} Method as following:");

                            var elemId = prompt("enter Parent Element's Id:"),
                                elemP = document.getElementById(elemId),
                                childNodes = elemP.childNodes;                        
    
                            alert("Parent element [ " + elemP.tagName + "]'s child Nodes are \n " + childNodes + "]\n");
                            
                            console.log("Parent element [ " + elemP.tagName + "]'s child Nodes are \n " + childNodes + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "Parent element [ " + elemP.tagName + "]'s child Nodes are: \n" + childNodes + "]\n";                                    
    
                            
                            alert("Parent element's Child Nodes by {Loop - elem.childNodes} Method as following:");


                            for  (i=0; i<elemP.childNodes.length; i++) {
                                
                                alert("Parent element [ " + elemP.tagName + "]'s child Node Nubmer [" + (i+1) + "] is \n" + elemP.childNodes[i]);
                            
                                console.log("Parent element [ " + elemP.tagName + "]'s child Node Nubmer [" + (i+1) + "] is \n" + elemP.childNodes[i]+ "\n");
                                
                                document.getElementById('txtarea').textContent =
                                "Parent element [ " + elemP.tagName + "]'s child Node Nubmer [" + (i+1) +
                                 "] is \n" + elemP.childNodes[i];                                    

                            }



                        } else {
                            alert('Error Entry!');
                        }                    
                                            
                        var z0 =prompt("Press (1) to restart the {child Node of parent Element Path} \n"+
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
