
/* global document, alert, prompt */                    
/* JSOOP [Elements Children append Child] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements Append (Children - Child Nodes)}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements child element - Child Nodes  }  \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Append Tree (childs elements & Text Nodes) to a certain already Defined one parent element}  Path ...\n " +
             "Press(2)  for  {Append child elements to a several already Defined parents elements   } Path ...\n");
                        
            if (path == "1") {                 
                                                                                      
                alert("Welcome to {Append Tree (childs elements & Text Nodes) to a certain one parent element} Path");
                
                var mthd = prompt("Press (1) to {Append Tree (childs elements & Text Nodes) to a certain aleady defined one parent element} ... \n " +
                " Press (2) to {Append child elements to a several aleady defined parents elements  }   ... ");
                
                if (mthd == "1"){

                                        
                    // {Append child elements to a certain already Defined one parent element:                
                    do {                                                   
                                                
                        alert("Welcome to (Append child elements to a certain already Defined one parent element} ");
    
                        var elemId = prompt("Enter {Parent Element id } to Append children Elements in it :"),
                            elemP = document.getElementById(elemId),
                            CElemsC  = parseInt(prompt("Enter nubmer of Children Element desired"))-1,
                            childsNames = [],
                            childsTxt = [];
    
                        // Recieving Child Elements Names & Text Nodes & Appending it to the Parent Element:
                        for (i=0; i<CElemsC; i++) {
    
                            childsNames[i] = prompt('Insert your Child Element Name Number[' + (i+1) + "]");
                            childsTxt[i] = prompt('Insert your Child Text Node of Child Elment nubmer [' + (i+1) + "]") ;
                            
                            var childElem =document.createElement(childsNames[i]),
                                childElemTxt = document.createTextNode(childsTxt[i]);
    
                            // Appending Text Node to Child Element:
                            childElem.appendChild(childElemTxt);
                            
                            alert("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                            
                            console.log("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                            
                            
                            // Appending  Child Element to Parent Element:
                            elemP.appendChild(childElem);
                            
                            alert("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "]");
                            
                            console.log("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "]");
    
                        }
                        
                        // Displaying All Child elements after have been Added-appended To The parent Element:
                        alert("Your Parent Element's Childs as following :");
    
                        for (i=0; i<elemP.children.length ;  i++) {
                            
                            alert("Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n");                            
                            
                            console.log("Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n";                                                        
    
                        }
                        
                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Append Tree of (childs elements & Text Nodes) to a certain one parent element} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                    
                } else if (mthd =="2") {
                    
                    // {Append child elements to a certain already several Defined multiple parents elements:                
                    do {                                             
                    
                        alert("Welcome to {Append child elements to (3) certain already several Defined parents elements} ");
    
                        var elemPs = ['sec', 'sec2' , 'sec3'],                            
                            CElemsC  = parseInt(prompt("Enter number of Children Element desired")),
                            childsNames = [],
                            childsTxt = [];
    
                        // Recieving Child Elements Names & Text Nodes & Appending it to the Parent Element:
                        alert("your Parent Elmeents count = " + elemPs.length);

                        for (a=0 ; a<elemPs.length ; a++) {

                            var  elemP = document.getElementById(elemPs[a]);


                            for (i=0; i < CElemsC; i++) {

                                alert("lets insert Children Elements of parent Element " + elemP.id);
                                
                                console.log("lets insert Children Elements of parent Element " + elemP.id + "\n");
                                                                                                
                                childsNames[i] = prompt('['+elemP.id +'] Parent Element => Insert your Child Element Name Number[' + (i+1) + "]");
                                
                                childsTxt[i] = prompt('Insert your Child Text Node of Child ' + elemP.id + ' Element nubmer [' + (i+1) + "]") ;
                                
                                // Defining child Elements & their Text nodes :
                                var childElem = document.createElement(childsNames[i]),
                                    childElemTxt = document.createTextNode(childsTxt[i]);
        
                                // Appending Text Node to Child Element + assuring: 
                                childElem.appendChild(childElemTxt);
                                
                                alert("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                                
                                console.log("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                                
                                
                                // Appending  Child Element to Parent Element + assuring:
                                elemP.appendChild(childElem);
                                
                                alert("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Parent element [" + elemP.tagName + "] with id: [" + elemP.id + "]"); 
                                
                                console.log("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "] with id: [" + elemP.id + "]");
        
                            }                                                                                    
                            
                            alert("Displaying Your Parent Element" + elemP.tagName + "'s with id : [" + elemP.id + "]'s Children as following :");

                        
                            //Displaying All Child elements after have been Added-appended To The current parent Element:    
                            for (o=0; o<elemP.children.length ;  o++) {                                
                                
                                alert("Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n");                            
                                
                                console.log("Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n";                                                        
        
                            }                        
                            

                        }
                        
                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Append child elements to a certain already several Defined (3) parents elements} Method (2) \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                            
                } else {

                    alert('Error Entry!');
                }


        // =================================================================================================
        // =================================================================================================

            } else if (path == "2") {                    
                alert("Welcome to {Append Tree (childs elements & Text Nodes) to a new created one parent element} Path");
                
                var mthd = prompt("Press (1) to {Append Tree (childs elements & Text Nodes) to a new Created one parent element} ... \n " +
                " Press (2) to {Append Tree (childs elements & Text Nodes) to a several new created parents elements  }   ... ");
                
                if (mthd == "1"){
                                                            
                    // {Append Tree (childs elements & Text Nodes) to a new Created one parent element}:                
                    do {                                                                           
                                                
                        alert("Welcome to (Append (child elements  & Text Nodes) to a certain new Created one parent element} ");
    
                        var elemMain = document.getElementById('post'),
                            elemT = prompt("Insert your parent Element tag Name to define"),
                            elemP = document.createElement(elemT),
                            CElemsC  = parseInt(prompt("Enter nubmer of Children Element desired")),
                            childsNames = [],
                            childsTxt = [];
    
                        // Recieving Child Elements Names & Text Nodes & Appending it to the Parent Element:
                        for (i=0; i<CElemsC; i++) {
    
                            childsNames[i] = prompt('Insert your Child Element Name Number[' + (i+1) + "]");
                            childsTxt[i] = prompt('Insert your Child Text Node of Child Elment nubmer [' + (i+1) + "]") ;
                            
                            var childElem =document.createElement(childsNames[i]),
                                childElemTxt = document.createTextNode(childsTxt[i]);
    
                            // Appending Text Node to Child Element:
                            childElem.appendChild(childElemTxt);
                            
                            alert("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                            
                            console.log("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                            
                            
                            // Appending  Child Element to Parent Element:
                            elemP.appendChild(childElem);
                            
                            alert("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "]");
                            
                            console.log("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "]");
                            
                            
                            // Appending  Parent Element to Main Parent Element:
                            elemMain.appendChild(elemP);
                            
                            alert("Parent Element Name [" + elemP.tagName + "] has been appended Successfully to the Main Parent element [" + elemMain.tagName + "]");
                            
                            console.log("Parent Element Name [" + elemP.tagName + "] has been appended Successfully to the Main Parent element [" + elemMain.tagName + "]");

                        }
                        
                        // Displaying All Child elements after have been Added-appended To The parent Element:
                        alert("Your Parent Element's Childs as following :");
    
                        for (i=0; i<elemP.children.length ;  i++) {
                            
                            alert("Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n");                            
                            
                            console.log("Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Child Element number [ " + (i+1) + "] tag name is " + elemP.children[i].tagName + "]\n";                                                        
    
                        }
                        
                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Append Tree of (childs elements & Text Nodes) to a certain one parent element} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                //==================================================================================================================                        
                    
                } else if (mthd =="2") {
                    
                    // {Append Tree (childs elements & Text Nodes) to a several new created parents elements}:                
                    do {                                             
                                            
                        alert("Welcome to {Append Tree (childs elements & Text Nodes) to a several new created parents elements }");
    
                        var elemMain = document.getElementById('post'),
                            elemPs = [],                            
                            PElemsC  = parseInt(prompt("Enter number of Parent Elements desired")),
                            CElemsC  = parseInt(prompt("Enter number of Children Element desired for each Parent element")),
                            childsNames = [],
                            childsTxt = [];
    
                        // Recieving Child Elements Names & Text Nodes & Appending it to the Current Parent Element:                        

                        for (a=0 ; a < PElemsC ; a++) {

                             elemPs[a] = prompt("Enter parent Element Tag name number :[" + (a+1) + "]");
                            
                             var elemP = document.createElement(elemPs[a]);

                             // Appending  Parent Element to Main Parent Element:
                                elemMain.appendChild(elemP);


                            for (i=0; i < CElemsC; i++) {

                                alert("lets insert Children Elements of parent Element {" + elemP.tagName + "}");
                                
                                console.log("lets insert Children Elements of parent Element " + elemP.tagName + "\n");
                                                                                                
                                childsNames[i] = prompt('[' + elemP.tagName + '] Parent Element => Insert your Child Element Name Number[' + (i+1) + "]");
                                
                                childsTxt[i] = prompt('Insert your Child Text Node of Child ' + elemP.tagName + ' Element number [' + (i+1) + "]") ;
                                
                                // Defining child Elements & their Text nodes :
                                var childElem = document.createElement(childsNames[i]),
                                    childElemTxt = document.createTextNode(childsTxt[i]);
        
                                // Appending Text Node to Child Element + assuring: 
                                childElem.appendChild(childElemTxt);
                                
                                alert("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                                
                                console.log("Child Text Node [" + childElem.textContent + "] has been appended Successfully to the Child element [" + childElem.tagName + "]");
                                
                                
                                // Appending  Child Element to Parent Element + assuring:
                                elemP.appendChild(childElem);
                                
                                alert("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Parent element [" + elemP.tagName + "] with id: [" + elemP.id + "]"); 
                                
                                console.log("Child Element Name [" + childElem.tagName + "] has been appended Successfully to the Child element [" + elemP.tagName + "] with id: [" + elemP.id + "]");

                            }                                                                                    
                                                                                            
                            
                            alert("Parent Element Name [" + elemP.tagName + "] has been appended Successfully to the Main Parent element [" + elemMain.tagName + "]");
                            
                            console.log("Parent Element Name [" + elemP.tagName + "] has been appended Successfully to the Main Parent element [" + elemMain.tagName + "]");
                            
    
                            
                            alert("Displaying Your Parent Element" + elemP.tagName + "'s Children as following :");
                        
                            //Displaying All Child elements after have been Added-appended To The current parent Element:    
                            for (o=0; o<elemP.children.length ;  o++) {                                
                                
                                alert("Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n");                            
                                
                                console.log("Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Child Element number [ " + (o+1) + "] tag name is [" + elemP.children[o].tagName + "]\n";                                                        
        
                            }                        
                            
                        }                        
                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Append tree child elements to a new created parents elements } Method (2) \n"+
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
