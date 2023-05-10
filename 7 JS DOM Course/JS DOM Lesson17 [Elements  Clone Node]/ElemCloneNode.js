
/* global document, alert, prompt */                    
/* JSOOP [Elements Clone Node ] */ 
/*template-string-converter.enable;*/

function test() {

    'use Strict';

    alert("Welcome to {Element Clone Node}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Element Clone Node} \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Copy} Path ...\n " +             
            "Press(2) for {Cut} Path ...\n ");
                                                
            // [A] copy (Clone) Path:
        
            if (path == "1") {                 
            
                alert("Welcome to {Clone Node - Copy} Path ...\n Choose your method from below...");
                                                
                var mthd = prompt("Press(1) for {Partial Copy}-[Default] of [child Node] from a specific Element to another}  Path ...\n " +             
                "Press(2) for {Partial Copy}-[Determined] of [child Node] from a specific Element to another}  Path ...\n "  +
                "Press(3) for {Full Copy}-[Determined] of [child Node] from a specific Element to another}  Path ..."  );
                
                if (mthd == "1"){                    
                                                            
                    // {Partial Copy} [Default] of [child Node] from a specific Element to another} Method:                
                                                                            
                    do {
                                                
                        
                        alert("Welcome to {Partial Copy}-[Default] Method of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Partial Copy] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Copy] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                // [A] Clone Child Node by {Partial copy} / 1) Access to Child Node by (FirstElementNode) : 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node }");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode();
                                  
                                newElem.appendChild(cloneElem);
                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                


                            } else if (func == "2") {

                                // [A] Clone Child Node by {Partial copy} / 2) Access to Child Node by (LastElementNode) : 
                                
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node }");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode();
                                  
                                newElem.appendChild(cloneElem);
                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                

                                
                            
                            } else if (func == "3") {
                                
                                // [A] Clone Child Node by {Partial copy} / 3) Access to Child Node by (Index child Element Node) : 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode();
                                  
                                                newElem.appendChild(cloneElem);
                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                
                                                            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial copy}-[default] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                // =================================================================================================
                                        
                } else if (mthd =="2") {                                                            
                    // {Partial Copy} [Default] of [child Node] from a specific Element to another} Method:                

                    do {                        
                                                
                        alert("Welcome to {Partial Copy} [Determined] of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Partial Copy]-[determined] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Copy]-[Determined] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                // [B] Clone Child Node by {Partial copy}-[Determined] / 1) Access to Child Node by (FirstElementNode) : 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node }");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode(false);
                                  
                                newElem.appendChild(cloneElem);
                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                


                            } else if (func == "2") {

                                // [B] Clone Child Node by {Partial copy}-[Determined] / 2) Access to Child Node by (LastElementNode) : 
                                
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node }");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode(false);
                                  
                                newElem.appendChild(cloneElem);
                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                

                                
                            
                            } else if (func == "3") {
                                
                                // [B] Clone Child Node by {Partial copy}-[Determined] / 3) Access to Child Node by (Index child Element Node) : 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode(false);
                                  
                                                newElem.appendChild(cloneElem);
                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n";                                                                                                                
                                                            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial copy}-[Determined]  of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                                    
            // =================================================================================================

            // [C] Clone Child Node by {Full copy}-[Determined]: 

                } else if (mthd =="3") {                                        
                    
                    do {
                        
                        // [C] Clone Child Node by {Full copy}-[Determined]  :
                        
                        alert("Welcome to {Full Copy}-[Determined] of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Full Copy] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Copy] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                                                                                
                                // [C] Clone Child Node by {Full copy}-[Determined] / (1) firstElementChild Access Method: 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node }");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode(true);
                                  
                                newElem.appendChild(cloneElem);
                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "Cloned After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n";                                                                                                                


                            } else if (func == "2") {

                                // [C] Clone Child Node by {Full copy}-[Determined] / (2) lastElementChild Access Method: 
                            
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node }");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode(true);
                                  
                                newElem.appendChild(cloneElem);

                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "Cloned After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Cloned element as following \n" + cloneElem + "\n";                                                                                                                

                                
                            
                            } else if (func == "3") {
                                
                                // [C] Clone Child Node by {Full copy}-[Determined] / (3) certain index of Child Node  Access Method: 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode(true);
                                  
                                                newElem.appendChild(cloneElem);
                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Cloned element as following \n" + cloneElem + "\n" );                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Cloned element as following \n" + cloneElem + "\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "Cloned After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Cloned element as following \n" + cloneElem + "\n";                                                                                                                
            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial copy}-[default]  of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                                                                                                                                                       
                } else {

                    alert('Error Entry!');
                }


        // =================================================================================================
        // =================================================================================================

            } else if (path == "2") {               

                alert("Welcome to {Clone Node - Cut} Path ...\n Choose your method from below...");
                                                
                var mthd = prompt("Press(1) for {Partial Cut}-[Default] of [child Node] from a specific Element to another}  Path ...\n " +             
                "Press(2) for {Partial Cut}-[Determined] of [child Node] from a specific Element to another}  Path ...\n "  +
                "Press(3) for {Full Cut}-[Determined] of [child Node] from a specific Element to another}  Path ..."  );
                
                if (mthd == "1"){                    
                                                            
                    // A] {Partial Cut} [Default] of [child Node] from a specific Element to another} Method:                
                                                                            
                    do {
                                                
                        alert("Welcome to {Partial Cut} [Default] of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Partial Cut] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Cut] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 1) Access to Child Node by (FirstElementNode) : 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node} Clone-Cut Partial Default");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode();
                                
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                


                            } else if (func == "2") {

                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 2) Access to Child Node by (lastElementNode) : 
                                
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node} Clone-Cut Partial Default ");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode();
                                  
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                                                
                            
                            } else if (func == "3") {
                                
                                // [A] Clone Child Node by {Partial copy} / 3) Access to Child Node by (Index child Element Node) : 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning-cut Partial process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode();
                                  
                                                // Appending the Clone node into the new Element:                                  
                                                newElem.appendChild(cloneElem);
                                                
                                                // Removing the Clone node from the old Element:                                  
                                                elemP.firstElementChild.remove();

                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                
                                                            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial Cut}-[default]  of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    

                // =================================================================================================
                                        
                } else if (mthd =="2") {                                   

                    // B] {Partial Cut}-[Determined] of [child Node] from a specific Element to another} Method:                

                    do {
                                                                        
                        alert("Welcome to {Partial Cut} [Default] of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Partial Cut] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Cut] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 1) Access to Child Node by (FirstElementNode) : 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node} Clone-Cut Partial Default");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode();
                                
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                


                            } else if (func == "2") {

                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 2) Access to Child Node by (lastElementNode) : 
                                
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node} Clone-Cut Partial Default ");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode();
                                  
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                                                
                            
                            } else if (func == "3") {
                                
                                // [A] Clone Child Node by {Partial copy} / 3) Access to Child Node by (Index child Element Node) : 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning-cut Partial process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode();
                                  
                                                // Appending the Clone node into the new Element:                                  
                                                newElem.appendChild(cloneElem);
                                                
                                                // Removing the Clone node from the old Element:                                  
                                                elemP.firstElementChild.remove();

                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                
                                                            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial Cut}-[default]  of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                    
                // =================================================================================================
                    
                } else if (mthd =="3") {                                        

                    // B] {Full Cut}-[Determined] of [child Node] from a specific Element to another} Method:                

                    do {
                                                
                        alert("Welcome to {Partial Cut} [Default] of [child Node] from a specific Element to another} Method ");                                                            
    
                        var elemP = document.getElementById('sec'),
                            newElem = document.getElementById('newId');                             

                        if (elemP.childNodes.length == 0) {
                                                        
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [Partial Cut] Function has been Canceled!');
                            
                        } else {
                            
                            alert('Get [Partial Cut] Function has been confirmed , choose your Accessing Method to your Child Element to be cloned....');
                        
                            var func = prompt("Press (1) for [first Element child] Accessing Method\n" +                            
                            "Press (2) for [last child element] Accessing Method\n" +                                                        
                            "Press (3) for [certain index child element Node] Accessing Method\n" );


                            if (func == "1") {                                       
                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 1) Access to Child Node by (FirstElementNode) : 
                                                                
                                alert("Welcome to {[first Element Child] Accessing Method to Child Node} Clone-Cut Partial Default");                            
                                                                
                                var cloneElem = elemP.firstElementChild.cloneNode();
                                
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                


                            } else if (func == "2") {

                                // [A] Clone-Cut Child Node by {Partial Cut} Function / 2) Access to Child Node by (lastElementNode) : 
                                
                                alert("Welcome to {[Last Element Child] Accessing Method to Child Node} Clone-Cut Partial Default ");
                                
                                var cloneElem = elemP.lastElementChild.cloneNode();
                                  
                                // Appending the Clone node into the new Element:                                  
                                newElem.appendChild(cloneElem);
                                
                                // Removing the Clone node from the old Element:                                  
                                elemP.firstElementChild.remove();

                                                                                                                                    
                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                
                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                                                
                            
                            } else if (func == "3") {
                                
                                // [A] Clone Child Node by {Partial copy} / 3) Access to Child Node by (Index child Element Node) : 

                                alert("Welcome to { [certain index child element Node]  Node Accessing Method}");                            
                            
                                do {

                                    var x = prompt('Enter the index of Child element node to be cloned');
                                                                    
                                    if (x == "") {
                                            
                                        alert("Child Element Node index is Not Valid or empty value!");                            
                                        
                                        console.log("Child Element Node index is Not Valid or empty value! \n");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid or empty value! \n";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;
    
                                        if (!isNaN(x)) {
    
                                            if (x+1 > elemP.children.length) {
    
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning-cut Partial process has been Canceled! `);
                                                                                            
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Cloning process has been Canceled! `);
                                                
                                                
                                            } else  {
                                    
                                                var cloneElem = elemP.children[x].cloneNode();
                                  
                                                // Appending the Clone node into the new Element:                                  
                                                newElem.appendChild(cloneElem);
                                                
                                                // Removing the Clone node from the old Element:                                  
                                                elemP.firstElementChild.remove();

                                                                                                                                                    
                                                alert("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                            
                                                
                                                console.log("Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" );                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Cloned node's Name is  [ " + cloneElem.nodeName  + "]\n" + 
                                                "new element After Cloning as following :\n" + newElem.textContent + "\n" +
                                                "Old element After (Removing Cloned Node) as following :\n" + elemP.textContent + "\n" ;                                                                                                                
                                                            
                                            }
    
                                        } else {
                                            alert('index is not a number!');
    
                                        }
                                        
                                    }
                                                                                                
                                    var z = prompt('press (1) to restart the ');
                                } while(z == "1");
                                                                                            
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the Get { [A] Clone Child Node by {Partial Cut}-[default]  of Main child Node} Method  \n"+
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

function testNullOps() {

    do {
        alert('Welcome to testing Variable Appliction...');

        var fun = prompt("press (1) to [test Not a Number] function... \n " +
        "press (2) to [test empty number value] function...\n" + 
        "press (3) to [test empty string value] function...");
        
        
        if (fun == "1") {
            
            // testing Not a Numeric value / [isNaN] function :
            
            do {

                var a = prompt('Enter a number (numeric value)');
                
                if (a == "") {
                    alert('your value is empty!');
                            
                } else {
                    a = parseInt(a);
                    
                    if (!isNaN(a)) {
                        
                        alert("Yes, The Inserted Value is a [Number]... ");                    
                        
                    } else {                    
                        alert("No, inserted value is [NOT a number]!");
                    }
                }

                var x1 = prompt('press (1) to restart the testing\n or press any other key to exit...');

            }  while (x1 == "1");
                            
        // =====================================================================================================        

        } else if (fun == "2") {        
            
            // testing an empty Numeric value / [(number == "").toString();] function :
            
            do {            
                
                var a = prompt ('Enter a number (numeric value)');
                
                if (a == "") {
                    alert('your value is empty! \n please re-insert a valid value');
                            
                } else {
                    a = parseInt(a);
                    
                    if (!isNaN(a) ) {
                        
                        alert("Yes, The Inserted Value is a [Number]... ");
                        
                    } else {                    
                        alert("No, inserted value is [NOT a Number]!");                    
                    }

                }

                var x2 = prompt('press (1) to restart the testing\n or press any other key to exit...');

            }  while (x2 == "1");
                                    
        // =====================================================================================================

        } else if (fun == "3") {
            
            // testing an empty string value / [string == ""] function :
            
            do {
                    
                    var a = prompt('Enter a string (textual value)');
                    
                    if (a == "") {
                        
                        alert('your value is empty! ... please re-insert a valid value');
                                
                    } else {
                        
                        if (!isNaN(a)) {
        
                            alert("The Inserted Value is a {number} (numeric value)... ");
        
                        } else {
                            
                            alert("The Inserted Value is a {String} (texual value)... ");
        
                        }
                                            
                    }
        
                    var x3 = prompt('press (1) to restart the testing\n or press any other key to exit...');
        
            }  while (x3 == "1");                        
                
                
        } else {
            alert('Error Entry!');
        }    

        var z = prompt('press (1) to restart the full testing...');
    } while(z =="1");
        
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
    document.getElementById("SourceCode").innerHTML = test + "\n\n" + "=".repeat(90) + "\n\n" +  test1;    
}

//==============================================================================
