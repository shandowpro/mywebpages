
/* global document, alert, prompt */                    
/* JSOOP [Elements Node  Name Value Type ] */ 
/*template-string-converter.enable;*/

function test() {

    'use Strict';

    alert("Welcome to {Elements Node  Name Value Type}  application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {ChildNodes} properties \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {get {Name} of [child Node] (childName) }  Path ...\n " +             
            "Press(2) for {get {Value} of [child Node] (childValue) }  Path ...\n " +
            "Press(3) for {get {Type} of [child Node] (childType) }  Path ..." );
                                                
            if (path == "1") {                 
                                                                                                                      
                alert("Welcome to {get {node Name} Property of [child Node] }  Path ...\n Choose your method from below...");
                
                var mthd = prompt("Press (1) to {Get [Node Name] of Main child Node} Method ... \n " +
                " Press (2) to {Get [Node Name] of certain [internal child Node] of Selected child Node} Method ... \n");
                
                
                // {Get [Node Name] of Main child Node} Method:                
                if (mthd == "1"){                    
                                                                            
                    do {
                                                
                        alert("Welcome to {Get [Node Name] of Main child Node} Method ");                                                            
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            
                            alert('your Parent Child Nodes count = 0');
                            alert('Get [node Name] process has been Canceled!');
                            
                        } else {
                            
                            alert('Get [node Name] process has confirmed , choose your Accessing Method from below....');
                        
                            var func = prompt("Press (1) for [first child] Accessing Method\n" + 
                            "Press (2) for [first Element child] Accessing Method\n" +
                            "Press (3) for [last child Node] Accessing Method\n" +
                            "Press (4) for [last child element] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] Accessing Method\n" +
                            "Press (6) for [certain index child element] Accessing Method\n" );

                            if (func == "1") {                                       

                                                                
                                alert("Welcome to {get node Name by [first Child] Accessing Method}");                            
                                                                
                                var childElem = elemP.firstChild,
                                    childName = childElem.nodeName;
                                                                                                                                    
                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                


                            } else if (func == "2") {

                                
                                alert("Welcome to {get node Name by [First Element Child] Accessing Method}");                                                                                                                            
                                
                                var childElem = elemP.firstElementChild,
                                    childName = childElem.nodeName;
                                                                                                                                    
                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                                                
                                
                            } else if (func == "3") {
                                
                                alert("Welcome to {get node Name by [Last Child] Node Accessing Method}");                            
                                
                                var childElem = elemP.lastChild,
                                    childName = childElem.nodeName;
                                                                                                                                    
                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                



                            } else if (func == "4") {

                                
                                alert("Welcome to {get node Name by [Last Element Child] Accessing Method}");                            
                                
                                var childElem = elemP.lastElementChild,
                                    childName = childElem.nodeName;
                                                                                                                                    
                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                

                                
                            } else if (func == "5") {
                                
                                alert("Welcome to {get node Name by [certian index Child Node] Accessing Method}");                            
                                
                                do {
                                    
                                    var x = prompt("Enter Child node Number");
                                    
                                    if (x == "") {
                                        
                                        alert("Child Element index is Not Valid!");                            
                                        
                                        console.log("Child Element index is Not Valid!");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index is Not Valid!";                                                                                                                
                                        
                                        
                                    } else {
                                        x = parseInt(x)-1;

                                        if (!isNaN(x)) {

                                            if (x+1 > elemP.childNodes.length) {

                                                alert(`The Child Node's index > than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process Canceled! `);
                                                
                                                alert("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                console.log("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                document.getElementsByTagName("txtarea").textContent = "your parent element child Node's name is : [" + elemP.childName + "]\n";
                                                
                                            } else if (x+1 == 0 ) {                                                                                    
                                                
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
                                                
                                                alert("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                console.log("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                document.getElementsByTagName("txtarea").textContent = "your parent element child Node's name is : [" + elemP.childName + "]\n";
                                                
                                            } else  {
                                    
                                                var childElem = elemP.childNodes[x],
                                                    childName = childElem.nodeName;
                                                
                                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                                
                                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                
                                            }

                                        } else {
                                            alert('index is not a number!');

                                        }
                                        
                                    }
                                    
                                    var z = prompt('Press (1) for Restart the get Node child name {by ceratin Index of Child Node} ');
                                } while (z== "1");

                                
                            } else if (func == "6") {                                
                                
                                alert("Welcome to {get node Name by [certian index Child Element] Accessing Method}");                            

                                do {

                                    var x = prompt("Enter Child Element node Number");
                                    
                                    if (x == "") {

                                        alert("Child Element index number is not Valid!");                            
                                        
                                        console.log("Child Element index number is Not Valid!");                                                                                                            
                                        
                                        document.getElementById('txtarea').textContent +=
                                        "Child Element index number is Not Valid!";                                                                                                                
                                        
                                        alert("your parent element child Node's name is : [" + elemP.childName + "]");
                                        
                                        console.log("your parent element child Node's name is : [" + elemP.childName + "]");
                                        
                                        document.getElementsByTagName("txtarea").textContent = "your parent element child Node's name is : [" + elemP.childName + "]\n";
                                        
                                        
                                    } else {
                                        
                                        x = parseInt(x)-1;
                                        
                                        if (!isNaN(x)) {

                                            if (x+1 > elemP.childNodes.length) {
                                                
                                                alert(`The Child Node's index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process Canceled! `);
                                                
                                                alert("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                console.log("your parent element child Node's name is : [" + elemP.childName + "]");
                                                
                                                document.getElementsByTagName("txtarea").textContent = "your parent element child Node's name is : [" + elemP.childName + "]\n";
                                                
                                            } else if (x+1 == 0 ) {                                        
                                                
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                                                        
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
                                                
                                                alert("your parent element Node's name is : [" + elemP.childName + "]");
                                                
                                                console.log("your parent element Node's name is : [" + elemP.childName + "]");
                                                
                                                document.getElementById("txtarea").textContent = "your parent element Node's name is : [" + elemP.childName + "]\n";
                                                
                                            } else  {
                                                
                                                var childElem = elemP.childNodes[x],
                                                    childName = childElem.nodeName;
                                                
                                                alert("Main Child Node's Name is  [ " + childName + "]\n");                            
                                                
                                                console.log("Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                
                                            }

                                        } else {
                                            alert('index is not a number!');
                                        }

                                    
                                    }

                                    
                                    var z = prompt('Press (1) for Restart the get Node child name {by ceratin Index of Child Node} ');
                                } while (z == "1");

                                
                                
                            } else {                                
                                alert("Error Entry!");
                            }

                        }
                        
                        var z0 =prompt("Press (1) to restart the {Get [Node Name] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
                        
                    } while (z0 == "1");                                                                                                                    
                    // =================================================================================================
                    
                    
                } else if (mthd =="2") {                                        
                    
                    // {Get [Node Name] of {Internal child Node} of Selected child Node} Method  :                
                    
                    do {
                        
                        alert("Welcome to {Get [Node Name] of [Internal Child Node] of Main child Node} Method ");                                                            
                        
                        var elemP = document.getElementById('sec'),
                            ParName = elemP.nodeName;
                        

                        if (elemP.childNodes.length == 0) {
                            
                            alert("Parent Element's Main Child Nodes count = 0");
                            alert('{Get [node Name - internal Child Node]} process has been Canceled!');
                            
                            alert("your parent element's Node name is : [" + ParName + "]");
                            
                            console.log("your parent element's Node name is : [" + ParName + "]");
                            
                            document.getElementById("txtarea").textContent = "your parent element's name is : [" + ParName + "]\n";

                        } else {
                            
                            alert('{Get [Node Name- Interanl Child Node]} process has confirmed');
                                                        
                            var func = prompt("Press (1) for [first child] of [internal child node] Accessing Method\n" + 
                            "Press (2) for [first Element child] of [internal child node] Accessing Method\n" +
                            "Press (3) for [last child Node] of [internal child node] Accessing Method\n" +
                            "Press (4) for [last child element] of [internal child node] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] of [internal child node] Accessing Method\n" +
                            "Press (6) for [certain index child element] of [internal child node] Accessing Method\n" );

                            if (func == "1") {                                
                                
                                alert("Welcome to {get node Name by [ Main Child => first Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                
                                do  {                                    
                                                                                                                                            
                                    var childElem = elemP.firstChild,
                                        x = prompt("Enter your index of internal child Node");                                    
                                    
                                        if (x == "") {
                                            
                                            alert('Index value is Not a valid number or empty Value! , please re insert a valid number');

                                        } else {
                                                                                    
                                            x = parseInt(x)-1;

                                            if (!isNaN(x)){

                                                if (x+1 > childElem.childNodes.length) {
                                                                                                        
                                                    alert("Internal child node index > Main Child Node count!");
                                                    alert("Get internal child node's Name process cancled! ");
        
                                                    var childName = childElem.nodeName;                                            
                                            
                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                    
                                                } else {
                                                    
                                                    if (x+1 == 0) {
                                                        
                                                        alert("Internal child node index = 0 !");
                                                        alert("Get internal child node's Name process cancled! ");                                                                                                
                                                        
                                                        var childName = childElem.nodeName;                                            
                                                
            
                                                        alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                    
                                                        console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                        
                                                        document.getElementById('txtarea').textContent +=
                                                        " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                        
                                                    } else {
                                                        
                                                        var childName = childElem.nodeName, 
                                                            childIntName = childElem.childNodes[x].nodeName;      
                                                    
        
                                                        alert("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                            
                                    
                                                        console.log("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                        
                                                        document.getElementById('txtarea').textContent +=
                                                        "Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
        
                                                    }
                                                                                                        
                                                }

                                            } else {
                                                alert('index is not a number!');
                                            }

                                        }
                                        
                                    
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");
                            
                            } else if (func == "2") {
    
                                alert("Welcome to {get node Name by [ Main Child => first Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                                                                                                                            

                                do  {                                    
                                                                                                        
                                    var childElem = elemP.firstElementChild,
                                        x = prompt("Enter your index of internal child Node");                                    
                                        
                                    if (x == "") {

                                        alert('Index value is Not a valid number , please re insert a valid number');
                                        
                                    } else {

                                        x = parseInt(x)-1;

                                        if (!isNaN(x)) {

                                            if (x+1 > childElem.childNodes.length) {
                                                                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process cancled! ");
                                                
                                                var childName = childElem.nodeName;                                            
                                        
        
                                                alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                            
                                                console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                
                                                                                            
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Name process cancled! ");                                                                                                
        
                                                    var childName = childElem.nodeName;                                            
                                        
        
                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                    
                                                    
                                                } else {
        
                                                    var childName = childElem.nodeName, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                
        
                                                    alert("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    "Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
        
                                                }
                                                                                                    
                                            }

                                        } else {
                                            alert('index is not a nubmer!');
                                        }
                                    }
                                                                            
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");
 
                                
                            } else if (func == "3") {
                                                                
                                alert("Welcome to {get node Name by [ Main Child => last Child ] of [internal Child Node => Child Nodes index] Node Accessing Method}");                                                            

                                do  {                                    
                                                                                                        
                                    var childElem = elemP.lastChild,
                                        x =prompt("Enter the index of internal child Node");                                    
                                    
                                    if (x == "") {

                                        alert('Index value is Not a valid number or empty Value! \n , please re insert a valid number');                                    
                                        
                                    } else {

                                        x = parseInt(x)-1;

                                        if (!isNaN(x)) {

                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceld! ");
                                                
                                                var childName = childElem.nodeName;                                            
                                        
        
                                                alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                            
                                                console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                
                                                                                            
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Name process cancled! ");                                                                                                
        
                                                    var childName = childElem.nodeName;                                            
                                        
        
                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                    
                                                    
                                                } else {
        
                                                    var childName = childElem.nodeName, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                
        
                                                    alert("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    "Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
        
                                                }
                                                                                                    
                                            }

                                        } else {
                                            alert('index is not a nubmer!');
                                        }

                                    }
                                    

                                    var z = prompt("Press (1) to restart the {get internal child Node's Name by index}\n press any other key to exit...");
                                } while (z=="1");
    
                            } else if (func == "4") {
                                                                
                                alert("Welcome to {get node Name by [ Main Child => last Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                
                                do  {                                    

                                                                                                        
                                    var childElem = elemP.lastElementChild,
                                        x = prompt("Enter the index of internal child Node");                                    

                                        
                                    if (x == "") {

                                        alert('Index value is Not a valid number or Empty! \n, please re insert a valid number');

                                    } else {

                                        x = parseInt(x)-1;
                                        
                                        if (!isNaN(x)) {

                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceld! ");
                                                
                                                var childName = childElem.nodeName;                                            
                                        
        
                                                alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                            
                                                console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                
                                                                                            
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Name process cancled! ");                                                                                                
        
                                                    var childName = childElem.nodeName;                                            
                                        
        
                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                    
                                                    
                                                } else {
        
                                                    var childName = childElem.nodeName, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                
        
                                                    alert("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                            
                                
                                                    console.log("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    "Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
        
                                                }
                                                                                                    
                                            }

                                        } else{

                                            alert('index is not a number!')
                                        }

                                    }

                                    
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name by index}\n press any other key to exit...");
                                } while (z=="1");

                            } else if (func == "5") {
                                                            
                                alert("Welcome to {get node Name by [ Main Child =>  Child Node Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {
                                                                                                                                                
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                
                                    
                                    if (xMain == "") {
                                        
                                        alert('Index value is Not a valid number or empty! \n , please re insert a valid number');   

                                    } else {

                                        xMain = parseInt(xMain)-1;
                                        
                                        if (!isNaN(xMain)) {

                                            if (xMain+1 > elemP.childNodes.length) {
                                                
                                                alert(`The Main Child Node's index is Greater than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                
                                                alert(`Get Node Name process has Canceled! `);
                                                
                                                
                                                alert("your parent element's Node name is : [" + ParName + "]");
                                
                                                console.log("your parent element's Node name is : [" + ParName + "]");
                                
                                                document.getElementById("txtarea").textContent = "your parent element's name is : [" + ParName + "]\n";
                                                    
                                            } else {
                                                
    
                                                if (xMain+1 == 0 ) {                                            
                                                                                                
                                                    alert(`The Main Child Node's index is Greater than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
        
                                                    
                                                    alert("your parent element's Node name is : [" + ParName + "]");
                                
                                                    console.log("your parent element's Node name is : [" + ParName + "]");
                                                    
                                                    document.getElementById("txtarea").textContent = "your parent element's name is : [" + ParName + "]\n";    
                                                        
                                                } else {
                                                                                            
                                                    var childElem = elemP.childNodes[xMain],                                        
                                                        childName = childElem.nodeName,
                                                        x = prompt('Enter internal child node index'); 
                                            
                                                    if (x == "") {

                                                        alert('Index value is Not a valid number or an empty Value! \n , please re insert a valid number');
                            
                                                    } else {
        
                                                        x = parseInt(x)-1;
                                                        
                                                        if (!isNaN(x)) {

                                                            if (x+1 > elemP.childNodes[xMain].childNodes.length ) {
    
                                                                
                                                                alert(`The internal Child Node's index is > Main Child Node Count! \n please re-Enter the interal Child Node index`);
                                                                
                                                                alert(`Get Node Name process has Canceled! `);
            
                
                                                                alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                            
                                                                console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                
                                                                document.getElementById('txtarea').textContent +=
                                                                " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                            
                                                                                                            
                                                            } else {
                                                                
                                                                if  (x+1 == 0) {
                                                                    
                                                                    alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                    
                                                                    alert(`Get Node Name process has Canceled! `);
                
                                                                    var childName = childElem.nodeName;                                            
                                                    
                
                                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                                
                                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                                                                                                                            
                                                                    
                                                                } else {
                                                                                                                        
                                                                    var x = parseInt(prompt("Enter your index of internal child Node")) -1,
                                                                        childIntName = childElem.childNodes[x].nodeName;                                              
                                                                    
                                                                    alert("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                            
                                                                
                                                                    console.log("Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    "Interanl child Node's Name is " + childIntName + " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                                                                                                    
                                                                }                                                                                                                                                        
                    
                                                            }

                                                        } else {

                                                            alert('index is not a number!');
                                                        }
                                                    
                                                    }
                                                }
        
                                            }                                     

                                        } else {
                                            alert('index is not a number!');
                                        }
     
                                    }
                                    
                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Name by index}");

                                } while (z == "1");
                                                                                                                                    
                                
                            } else if (func == "6") {


                                alert("Welcome to {get node Name by [ Main Child =>  Child Element Node Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                
                                do  {
                                    
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                
                                    
                                    if (xMain == "") {                                        

                                        alert('Index value is Not a valid number or empty value! , please re insert a valid number');

                                    } else {                                        
 
                                        xMain = parseInt(xMain)-1;

                                        if (!isNaN(xMain)) {                                            

                                            if (xMain+1 > elemP.children.length) {                                                
    
                                                alert(`The Main Child elements's index is Greater than Parent child Element's count! \n please re-Enter the Child Element Node index`);
                                                
                                                alert(`Get Node Name process has Canceled! `);
            
                                                alert("your parent element's Node name is : [" + ParName + "]");
                                                
                                                console.log("your parent element's Node name is : [" + ParName + "]");
                                                
                                                document.getElementById("txtarea").textContent = "your parent element's name is : [" + ParName + "]\n";            
                                                
                                            } else {
                                                    
                                                if (xMain+1 == 0 ) {                                            

                                                                                                
                                                    alert(`The Main Child Node's index is Greater than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
            
            
                                                    alert("your parent element's Node name is : [" + ParName + "]");
                                
                                                    console.log("your parent element's Node name is : [" + ParName + "]");
                                                    
                                                    document.getElementById("txtarea").textContent = "your parent element's name is : [" + ParName + "]\n";
                                                                            
                                                } else {
                                                                                            
                                                    var childElem = elemP.children[xMain],                                        
                                                        childName = childElem.nodeName,
                                                        x = prompt('Enter internal Child index:');
            
                                                    if (x == "") {
    
                                                        alert('Index value is Not a valid number or Empty value! , please re insert a valid number');
                            
                                                    } else {        

                                                        x = parseInt(x)-1;

                                                        if (!isNaN(x)) {
                                                            
                                                            if  (x+1 > elemP.children[xMain].childNodes.length ) {
        
                                                                alert(`The internal Child Node 's index is > Main Child Element's Count! \n please re-Enter the interal Child Node index`);
                                                                
                                                                alert(`Get Node Name process has Canceled! `);
                            
                    
                                                                alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                            
                                                                console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                
                                                                document.getElementById('txtarea').textContent +=
                                                                " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                        
                                                                                                        
                                                            } else {

                                                                if  (x+1 == 0) {
                                                                    
                                                                    alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                    
                                                                    alert(`Get Node Name process has Canceled! `);
                                                    
                    
                                                                    alert(" Main Child Node's Name is  [ " + childName + "]\n");                            
                                                
                                                                    console.log(" Main Child Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    " Main Child Node's Name is  [ " + childName + "]\n";                                                                                                                
                                                                    
                                                                                                                                                                    
                                                                } else {
                                                                                                                        
                                                                    var x = parseInt(prompt("Enter your index of internal child Node")) -1,
                                                                        childIntName = childElem.childNodes[x].nodeName;                                              
                                                                    
                                                                    alert("Interanl child Node's Name is " + childIntName + " Main Child Element Node's Name is  [ " + childName + "]\n");                            
                                                                
                                                                    console.log("Interanl child Node's Name is " + childIntName + " Main Child Element Node's Name is  [ " + childName + "]\n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    "Interanl child Node's Name is " + childIntName + " Main Child Element Node's Name is  [ " + childName + "]\n";
                                                                }                                                                                                                                                        
                    
                                                            }
                                                        } else {
                                                            alert('index is not a number!');
                                                        }
    
                                                        
                                                    }
            
                                                }
            
                                            }                                     

                                        } else {

                                            alert('index is not a number!');

                                        }
                                        

                                    }
                                
                                        
                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Name }");

                                } while (z == "1");                                                                                                

                                                                                            
                            } else {

                                alert("Error Entry!");
                            }                                                                                                          

                        }
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Get [Node Name] of [internal child Node] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                                                                                                                                       
                                                                                                                                                       
                } else {

                    alert('Error Entry!');
                }


        // =================================================================================================
        // =================================================================================================

            } else if (path == "2") {               

                                                     
                alert("Welcome to {get {Value} of [child Node] (childValue) }  Path  ...\n Choose your method from below...");
                
                var mthd = prompt("Press (1) to {Get [Node Value] of Main child Node} Method ... \n " +
                " Press (2) to {Get [Node Value] of certain internal child Node of Selected child Node} Method ... \n");
                
                
                // {Get [Node Value] property of Main child Node} Method:                

                if (mthd == "1"){
                                                                                                
                    do {                        
                                                
                        alert("Welcome to {Get [Node Value] of Main child Node} Method ");                                                            
    
                        var elemP = document.getElementById('sec');                            


                        if (elemP.childNodes.length == 0) {

                            
                            alert('your Parent Main Child Nodes count = 0');
                            alert('Get [node Value] process has been Canceled!');
                            
                        } else {

                            
                            alert('Get [node Value] process has confirmed , choose your Accessing Method from below....');
                        
                            var func = prompt("Press (1) for [first child] Accessing Method\n" + 
                            "Press (2) for [first Element child] Accessing Method\n" +
                            "Press (3) for [last child Node] Accessing Method\n" +
                            "Press (4) for [last child element] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] Accessing Method\n" +
                            "Press (6) for [certain index child element] Accessing Method\n" );

                            if (func == "1") {                                                                
                                
                                alert("Welcome to {get Main node Value by [first Child] Accessing Method}");                            
                                                                
                                var childElem = elemP.firstChild,
                                    childValue = childElem.nodeValue;
                                                                                                                                    
                                alert("Main Child Node's Value is  [ " + childValue + "]\n");                            
                                
                                console.log("Main Child Node's Value is  [ " + childValue + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Value is  [ " + childValue + "]\n";                                                                                                                



                            } else if (func == "2") {
                                
                                alert("Welcome to {get Main node Value by [First Element Child] Accessing Method}");                                                                                                                            
                                
                                var childElem = elemP.firstElementChild,
                                    childValue = childElem.nodeValue;
                                                                                                                                    
                                alert("Main Child Node's Value is  [ " + childValue + "]\n");                            
                                
                                console.log("Main Child Node's Value is  [ " + childValue + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Value is  [ " + childValue + "]\n";                                                                                                                
                                
                                
                            } else if (func == "3") {
                                
                                alert("Welcome to {get Main node value by [Last Child] Node Accessing Method}");                            
                                
                                var childElem = elemP.lastChild,
                                    childValue = childElem.nodeValue;
                                                                                                                                    
                                alert("Main Child Node's Value is  [ " + childValue + "]\n");                            
                                
                                console.log("Main Child Node's Value is  [ " + childValue + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Value is  [ " + childValue + "]\n";                                                                                                                


                            } else if (func == "4") {
                                
                                alert("Welcome to {get Main node Value by [Last Element Child] Accessing Method}");                            
                                
                                var childElem = elemP.lastElementChild,
                                    childValue = childElem.nodeValue;
                                                                                                                                    
                                alert("Main Child Node's Value is  [ " + childValue + "]\n");                            
                                
                                console.log("Main Child Node's Value is  [ " + childValue + "]\n");                                                                                                            
                                
                                document.getElementById('txtarea').textContent +=
                                "Main Child Node's Value is  [ " + childValue + "]\n";                                                                                                                

                            } else if (func == "5") {
                                
                                alert("Welcome to {get Main node Value by [certian index Child Node] Accessing Method}");                            
                                
                                do {
                                                                        
                                    var x = prompt("Enter Child node Number");
                                
                                    if (x == "") {                                    

                                        alert('Index value is Not a valid number or Empty , please re insert a valid number');
            
                                    } else {
                       
                                        x = parseInt(x)-1;

                                        if (!isNaN(x)) {

                                            if (x+1 > elemP.childNodes.length) {
                                                
                                                alert(`The Child Node's index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process Canceled! `);
                                                
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                            
                                            
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n";                                            
                                                
                                            } else if (x+1 == 0 ) {             
                                                
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
    
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                            
                                            
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n";                                            
        
                                            } else  {
    
                                                var x = parseInt(prompt("Enter Child node Number")) - 1,
                                                    childElem = elemP.childNodes[x],
                                                    childName = childElem.nodeName,
                                                    childValue = childElem.nodeValue;
                                                                                                                                            
                                                alert("Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n");                            
                                            
                                                console.log("Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n";                                                                                                                
                                                
                                            }

                                         } else {
                                             alert('index is not a number!');
                                         }

                                    }
            
                                    var z = prompt('Press (1) for Restart the get Node child name {by ceratin Index of Child Node} ');
                                } while (z== "1");
                                
                            } else if (func == "6") {
                                                                                                
                                alert("Welcome to {get Main Node Value by [certian index Child Element] Accessing Method}");                                             

                                do {


                                    var x = prompt("Enter Child node Number");
                                        
                                    if (x == "") {

                                        alert('Index value is Not a valid number or Empty Value, please re insert a valid number');
            
                                    } else {
                                    
                                        x = parseInt(x)-1;
                                        
                                        if (!isNaN(x)) {
                                        
                                            if (x+1 > elemP.childNodes.length) {

                                                
                                                alert(`The Child Node's index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process Canceled! `);
                                                
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                            
                                            
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n";                                            
                                                
    
                                            } else if (x+1 == 0 ) {

                                                    
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
    
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                            
                                        
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n");                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n";                                            
                                            
                                            } else  {

                                                var childElem = elemP.childNodes[x],
                                                    childName = childElem.nodeName,
                                                    childValue = childElem.nodeValue;
                                                                                                                                            
                                                alert("Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n");                            
                                            
                                                console.log("Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Child Node's Name is  [ " + childName +
                                                 "]\n with value : [ " + childValue + "]\n";                                                                                                                
                                                
                                            }

                                        } else {
                                            alert('index is not a number!');
                                        }


                                    }

                                    var z = prompt('Press (1) for Restart the get Node child name {by ceratin Index of Child Node} ');
                                } while (z == "1");

                                          
                            } else {
                                alert("Error Entry!");
                            }

                        }
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Get [Node Name] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                // =================================================================================================
                            
                    
                } else if (mthd =="2") {                                                            
                    
                    // {Get [Node Value] of {Internal child Node} of Selected child Node} Method  :                
                    
                    do {
                                                                        
                        alert("Welcome to {Get [Node Value] of [Internal Child Node] of Main child Node} Method ");                                                            
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            
                            alert("Parent Element's Main Child Nodes count = 0");
                            alert('{Get [node Value - internal Child Node]} process has been Canceled!');
                            
                        } else {
                            
                            alert('{Get [Node Value - Interanl Child Node]} process has confirmed');

                            
                            var func = prompt("Press (1) for [first child] of [internal child node] Accessing Method\n" + 
                            "Press (2) for [first Element child] of [internal child node] Accessing Method\n" +
                            "Press (3) for [last child Node] of [internal child node] Accessing Method\n" +
                            "Press (4) for [last child element] of [internal child node] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] of [internal child node] Accessing Method\n" +
                            "Press (6) for [certain index child element] of [internal child node] Accessing Method\n" );

                            if (func == "1") {

                                
                                alert("Welcome to {get node Value by [ Main Child => first Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                

                                do  {
                                                                                                                                                                                
                                    var childElem = elemP.firstChild,
                                        x = parseInt(prompt("Enter your index of internal child Node"))-1;                                    
 
                                        if (isNaN(x)) {

                                            alert('Index value is Not a valid number , please re insert a valid number');
                
                                        } else {
                                    
                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
    
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName;                                                                                        
                                        
    
                                                alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
                                                
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childName = childElem.nodeName,
                                                        childValue = childElem.nodeValue; 
    
                                                
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
    
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                        childIntValue = childElem.childNodes[x].nodeValue;      
    
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";                                                                                                                                                                                                                                                                                                             
    
                                                }
                                                                                                    
                                            }
                                              
                                        }
                                        
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");

                            } else if (func == "2") {                                
                                
                                alert("Welcome to {get node value by [ Main Child => first Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                                                                                                                            
                                
                                do  {
                                                                                                                                                                                
                                    var childElem = elemP.firstElementChild,
                                        x = parseInt(prompt("Enter your index of internal child Node"))-1;                                    
                                    
                                        if (isNaN(x)) {

                                            alert('Index value is Not a valid number , please re insert a valid number');
                
                                        } else {

                                            if (x+1 > childElem.childNodes.length) {

                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
    
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName;                                                                                        
                                        
    
                                                alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
                                                
                                            } else {

                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childName = childElem.nodeName,
                                                        childValue = childElem.nodeValue; 
    
                                                
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
    
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                        childIntValue = childElem.childNodes[x].nodeValue;      
    
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";                                                                                                                                                                                                                                                                                                             
    
                                                }
                                                                                                    
                                            }
                                        
                                        }
 
                                    
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");                                
                            
                            } else if (func == "3") {
                                
                                alert("Welcome to {get node value by [ Main Child => last Child ] of [internal Child Node => Child Nodes index] Node Accessing Method}");                            
                                

                                do  {
                                                                                                                                                                                                                    
                                    var childElem = elemP.lastChild,
                                        x = parseInt(prompt("Enter your index of internal child Node"))-1;                                    
   
                                        if (isNaN(x)) {

                                            alert('Index value is Not a valid number , please re insert a valid number');
                
                                        } else {
                                            
                                            if (x+1 > childElem.childNodes.length) {

                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
    
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName;                                                                                        
                                        
    
                                                alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
                                                
                                            } else {

                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childName = childElem.nodeName,
                                                        childValue = childElem.nodeValue; 
    
                                                
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
    
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                        childIntValue = childElem.childNodes[x].nodeValue;      
    
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";                                                                                                                                                                                                                                                                                                             
    
                                                }
                                                                                                    
                                            }                                        
                                
                                        }

                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z == "1");                                
    
                            } else if (func == "4") {
                                
                                alert("Welcome to {get node value by [ Main Child => last Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {
                                                                                                                                                                                
                                    var childElem = elemP.lastElementChild,
                                        x = parseInt(prompt("Enter your index of internal child Node"))-1;                                    
                                    
                                     
                                        if (isNaN(x)) {

                                            alert('Index value is Not a valid number , please re insert a valid number');
                
                                        } else {

                                        
                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
    
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName;                                                                                        
                                        
    
                                                alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
                                                
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childName = childElem.nodeName,
                                                        childValue = childElem.nodeValue; 
    
                                                
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] \n";  
    
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childIntName = childElem.childNodes[x].nodeName;      
                                                        childIntValue = childElem.childNodes[x].nodeValue;      
    
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";                                                                                                                                                                                                                                                                                                             
    
                                                }
                                                                                                    
                                            }
                                        
    
                                        } 
                                     
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");                                
                                
                            } else if (func == "5") {                                
                                                                                                
                                alert("Welcome to {get node Value by [ Main Child =>  {Child Node} Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {                                    
                                                                    
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                
                                    
                                    if (xMain == "") {

                                        alert('Index value is Not a valid number or empty Value! \n , please re insert a valid number');
            
                                    } else {
                                        xMain = parseInt(xMain)-1;
                                        
                                        if (!isNaN(xMain)) {

                                            if (xMain+1 > elemP.childNodes.length) {
                                                    
                                                alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                
                                                alert(`Get Node value process has Canceled! `);
        
                                                var childName = elemP.nodeName,
                                                    childValue = elemP.nodeValue;
        
                                                alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                            
                                                console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                
                                                
                                                    
                                            } else {
    
                                                if (xMain+1 == 0 ) {                                            
                                                                                                
                                                    alert(`The Main Child Node's index is Greater than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
        
                                                    var childName = elemP.nodeName,
                                                        childValue = elemP.nodeValue;
        
                                                    alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                
                                                    console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                    
                                                        
                                                } else {
                                                                                            
                                                    var childElem = elemP.childNodes[xMain],                                        
                                                        childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue,
                                                        x = prompt("Enter your index of internal child Node");
        
                                                    if (x == "") {
    
                                                        alert('Index value is Not a valid number or Empty Value! \n , please re insert a valid number');
                            
                                                    } else {
                
                                                        x = parseInt(x)-1;

                                                        if (!isNaN(x)) {

                                                            if  (x+1 > elemP.childNodes[xMain].childNodes.length ) {
                                                                
                                                                alert(`The internal Child Node's index is > Main Child Node Count! \n please re-Enter the interal Child Node index`);
                                                                
                                                                alert(`Get Node Name process has Canceled! `);
                                                                                                                                                      
                
                                                                alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                            
                                                                console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );
                                                                
                                                                document.getElementById('txtarea').textContent +=
                                                                " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                    
                                                                                                            
                                                            } else {
                                                                
                                                                if  (x+1 == 0) {
                                                                    
                                                                    alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                    
                                                                    alert(`Get Node Name process has Canceled! `);
                                                                    
                
                                                                    alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                                
                                                                    console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                   
                                                                                                                                                                
                                                                    
                                                                } else {
                                                                                                                        
                                                                    var childIntName = childElem.childNodes[x].nodeName,
                                                                        childIntValue = childElem.childNodes[x].nodeValue;                                                    
                                                                    
                                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                                    
                                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                    "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                    "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";
                
                                                                }                                                                                                                                                        
                    
                                                            }

                                                        } else {

                                                            alert('index is not a number!');
                                                        }

                
                                                    }
                                                }
        
                                            }                                     

                                        } else {

                                            alert('index is not a number!');
                                        }

                                    }
                                        
                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Name by index}");

                                } while (z == "1");
                                                                                                                                    
                            } else if (func == "6") {                                

                                                                
                                alert("Welcome to {get child node value by [ Main Child =>  {Child Element Node} Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {
                                
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                

                                    if (xMain == "") {

                                        alert('Index value is Not a valid number or Empty value! \n , please re insert a valid number');
            
                                    } else {
                                    
                                        xMain = parseInt(xMain);

                                        if (!isNaN(xMain)) {

                                            if (xMain+1 > elemP.childNodes.length) {

                                                
                                                alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                
                                                alert(`Get Node value process has Canceled! `);
        
                                                var childName = elemP.nodeName,
                                                    childValue = elemP.nodeValue;
        
                                                alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                            
                                                console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                
    
                                                    
                                            } else {
        
                                                if (xMain+1 == 0 ) {                                            
                                                                                                
                                                    alert(`The Main Child Node's index is Greater than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
        
                                                    var childName = elemP.nodeName,
                                                        childValue = elemP.nodeValue;
        
                                                    alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                
                                                    console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                    
                                                        
                                                } else {
                                                                                            
                                                    var childElem = elemP.children[xMain],                                        
                                                        childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue,
                                                        x = prompt("Enter your index of internal child Node");
        
                                                        if (x == "") {
     
                                                            alert('Index value is Not a valid number or Empty Value! \n, please re insert a valid number');
                                
                                                        } else {
                                                            x = parseInt(x);

                                                            if (!isNaN(x)) {

                                                                if  (x+1 > elemP.childNodes[xMain].childNodes.length ) {
                                                                                                                                            
                                                                    alert(`The internal Child Node's index is > Main Child Node Count! \n please re-Enter the interal Child Node index`);
                                                                    
                                                                    alert(`Get Node Name process has Canceled! `);
                                                                                                                                                          
                    
                                                                    alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                                
                                                                    console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                    
                                                                                                                
                                                                } else {                                                                

                                                                    
                                                                    if  (x+1 == 0) {
                                                                        
                                                                        alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                        
                                                                        alert(`Get Node Name process has Canceled! `);
                                                                        
                    
                                                                        alert(" Main Child Node's Name is  [" + childName + "] with Value  is : [" + childValue + "] \n");                            
                                                    
                                                                        console.log(" Main Child Node's Name is  [" + childName + "] with Value  : [" + childValue + "] \n" );                                                                                                            
                                                                        
                                                                        document.getElementById('txtarea').textContent +=
                                                                        " Main Child Node's Name is  [" + childName + "] with Value : [ " + childValue + "]\n";                                                                                                                   
                                                                                                                                                                    
                                                                        
                                                                    } else {
                                                                                                                            
                                                                        var childIntName = childElem.childNodes[x].nodeName,
                                                                            childIntValue = childElem.childNodes[x].nodeValue;                                                    
                                                                        
                                                                        alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                        "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                            
                                                                        
                                                                        console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                        "] \n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n");                                                                                                            
                                                                        
                                                                        document.getElementById('txtarea').textContent +=
                                                                        "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue +
                                                                        "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] \n";
                    
                                                                    }                                                                                                                                                        
                        
                                                                }        

                                                            } else {
                                                                alert('index is not a number!');
                                                            }

                                                        }
            
                                                }
        
                                            }                                     

                                        } else {
                                            alert('index is not a number!');
                                        }

                                    }

                                    
    
                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Value by index}");

                                } while (z == "1");                                

                                                                                            
                            } else {
                                alert("Error Entry!");
                            }                                                                                                          

                        }
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Get [Node Value] of [internal child Node] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                                                                                                                                       
                                                                                                                                                       
                } else {

                    alert('Error Entry!');
                }


    // =================================================================================================
    // =================================================================================================
       
            } else if (path == "3") {                    
                                                
                alert("Welcome to {get {Type} of [child Node] (childType) }  Path  ...\n Choose your method from below...");
                
                var mthd = prompt("Press (1) to {Get [Node Type] of Main child Node} Method ... \n " +
                " Press (2) to {Get [Node Type] of certain internal child Node of Selected child Node} Method ... \n");                                
                // {Get [Node Type] of Main child Node} Method:                
                
                if (mthd == "1"){                                        
                                                                                                                    
                    do {
                                                                        
                        alert("Welcome to {Get [Node Type] of Main child Node} Method ");                                                            
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            
                            alert('your Parent Main Child Nodes count = 0');
                            alert('Get [node Type] process has been Canceled!');

                            var parentName = elemP.nodeName,
                                parentValue = elemP.nodeValue,
                                parentType = elemP.nodeType;

                            alert("Main Parent elelement's Name is  [" + parentName +
                              "]\n with Value [" + parentValue +
                                "] \n with type [" + parentType + "]\n");                            
                            
                            console.log("Main Parent elelement's Name is  [" + parentName +
                              "]\n with Value [" + parentValue +
                                "] \n with type [" + parentType + "]\n");                                                                                                            
                            
                            document.getElementById('txtarea').textContent +=
                            "Main Parent elelement's Name is  [" + parentName +
                              "]\n with Value [" + parentValue +
                                "] \n with type [" + parentType + "]\n";                                                                                                                

                            
                        } else {
                            
                            alert('Get [node Type] process has confirmed , choose your Accessing Method from below....');
                        
                            var func = prompt("Press (1) for [first child] Accessing Method\n" + 
                            "Press (2) for [first Element child] Accessing Method\n" +
                            "Press (3) for [last child Node] Accessing Method\n" +
                            "Press (4) for [last child element] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] Accessing Method\n" +
                            "Press (6) for [certain index child element] Accessing Method\n" );

                            if (func == "1") {                                
                                                                                                
                                alert("Welcome to {get Main node Type by [first Child] Accessing Method}");                            
                                                                
                                var childElem = elemP.firstChild,
                                    childName = childElem.nodeName,
                                    childValue = childElem.nodeValue,
                                    childType = childElem.nodeType;
                                                                                                                                    
                            
                                alert("Main child element's Name is  [" + childName +
                                 "]\n with Value [" + childValue +
                                  "] \n with type [" + childType + "]\n");                            
                                  
                                console.log("Main child element's Name is  [" + childName +
                                 "]\n with Value [" + childValue +
                                  "] \n with type [" + childType + "]\n");                                                                                                            
                                                                  
                                document.getElementById('txtarea').textContent +=
                                 "Main child element's Name is  [" + childName +
                                  "]\n with Value [" + childValue +
                                   "] \n with type [" + childType + "]\n";                                                                          

                            } else if (func == "2") {
                                                                                            
                                alert("Welcome to {get Main node Type by [First Element Child] Accessing Method}");                                                                                                                            
                                
                                var childElem = elemP.firstElementChild,
                                    childName = childElem.nodeName,
                                    childValue = childElem.nodeValue,
                                    childType = childElem.nodeType;
                                                                                                                                    
                        
                                alert("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                            
                                
                                console.log("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                                                                                                            
                                                                
                                document.getElementById('txtarea').textContent +=
                                "Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n";                                                                          
                                    
                            } else if (func == "3") {                                
                                
                                alert("Welcome to {get Main node Type by [Last Child] Node Accessing Method}");                            
                                
                                var childElem = elemP.lastChild,
                                    childName = childElem.nodeName,
                                    childValue = childElem.nodeValue,
                                    childType = childElem.nodeType;
                                                                                                                                    
                        
                                alert("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                            
                                
                                console.log("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                                                                                                            
                                                                
                                document.getElementById('txtarea').textContent +=
                                "Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n";                                                                          

                            } else if (func == "4") {
                                
                                alert("Welcome to {get Main node Type by [Last Element Child] Accessing Method}");                            
                                
                                var childElem = elemP.lastElementChild,
                                    childName = childElem.nodeName,
                                    childValue = childElem.nodeValue,
                                    childType = childElem.nodeType;
                                                                                                                                
                            
                                alert("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                            
                                
                                console.log("Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n");                                                                                                            
                                                                
                                document.getElementById('txtarea').textContent +=
                                "Main child element's Name is  [" + childName +
                                "]\n with Value [" + childValue +
                                "] \n with type [" + childType + "]\n";                                                                          

                            } else if (func == "5") {                                
                                
                                alert("Welcome to {get Main node [Type] by [certian index Child Node] Accessing Method}");                            
                                
                                var x = prompt("Enter Main Child node Number");

                                if (x == "") {

                                    alert('Index value is Not a valid number or empty value! , please re insert a valid number');
        
                                } else {

                                    x = parseInt(x)-1;
                                    
                                    if  (!isNaN(x)) {

                                        if (x+1 > elemP.childNodes.length) {
                                                
                                                
                                            alert(`The Child Node's index > than Parent Element's count! `);
                                            
                                            alert(`Get Node Name process Canceled! `);
                                            
                                            alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                             "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                            
                                        
                                            console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                            "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                                                                                                            
                                            
                                            document.getElementById('txtarea').textContent +=
                                            "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" + 
                                            "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n";                                            
                                             
                                        } else if (x+1 == 0 ) {                                        

                                                                                                
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
                                                
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                                 "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                            
                                            
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                                "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" + 
                                                "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n";                                            
                                                                                            
                                        } else  {
                                                
                                            var childElem = elemP.childNodes[x],
                                                childName = childElem.nodeName,
                                                childType = childElem.nodeType,
                                                childValue = childElem.nodeValue;
                                                                                                                                        
                                            alert("Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                              "Main Child Node's Type is  [ " + childType + "]\n");                            
                                        
                                            console.log("Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                             "Main Child Node's Type is  [ " + childType + "]\n");                                                                                                            
                                            
                                            document.getElementById('txtarea').textContent +=
                                            "Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                             "Main Child Node's Type is  [ " + childType + "]\n" ;                                                                                                                
                                            
                                        }

                                    } else {

                                        alert('index value is not a number !');
                                    }                                    
                                    
                                }
                                                                                          
                            } else if (func == "6") {
                                                                                                                            
                                alert("Welcome to {get Main Node Type by [certian index Child Element] Accessing Method}");                            
                                
                                var x = prompt("Enter Main Child Element node index Number");
                            
                                if (x == "") {

                                    alert('Index value is Not a valid number or empty value\n , please re insert a valid number');
        
                                } else {
                                    x = parseInt(x)-1;

                                    if (!isNaN(x)) {
                                    
                                        if (x+1 > elemP.children.length) {
                                                    
                                            alert(`The Child Node's index is Greater than Parent Element's count! `);
                                            
                                            alert(`Get Node Name process Canceled! `);
                                            
                                            alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                            "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                            
                                        
                                            console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                            "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                                                                                                            
                                            
                                            document.getElementById('txtarea').textContent +=
                                            "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" + 
                                            "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                             "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n";                                            
                                             
                                        } else if (x+1 == 0 ) {                                                                                    
                                                                                            
                                                alert(`The Child Node's Index is Greater than Parent Element's count! `);
                                                
                                                alert(`Get Node Name process {by certain Index Child Node} Canceled! `);
                                                
                                                alert("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                                 "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                            
                                            
                                                console.log("Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" +
                                                "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                "Main Parent Element Node's Name is  [ " + elemP.nodeName + "]\n" + 
                                                "Main Parent Element Node's value is  [ " + elemP.nodeValue + "]\n" +
                                                 "Main Parent Element Node's Type is  [ " + elemP.nodeType + "]\n";                                            
                                                                                            
                                        } else  {
                                            
                                            var childElem = elemP.children[x],
                                                childName = childElem.nodeName,
                                                childType = childElem.nodeType,
                                                childValue = childElem.nodeValue;
                                                                                                                                        
                                            alert("Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                              "Main Child Node's Type is  [ " + childType + "]\n");                            
                                        
                                            console.log("Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                             "Main Child Node's Type is  [ " + childType + "]\n");                                                                                                            
                                            
                                            document.getElementById('txtarea').textContent +=
                                            "Main Child Node's Name is  [ " + childName +
                                             "]\n with value : [ " + childValue + "]\n" +
                                             "Main Child Node's Type is  [ " + childType + "]\n" ;                                                                                                                
                                            
                                        }

                                    } else {
                                        alert('index value is not A Number!');
                                    }
                                }

                            } else {

                                alert("Error Entry!");
                            }

                        }
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Get [Node Type] of Main child Node} Method  \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    
                // =================================================================================================
                            
                    
                } else if (mthd =="2") {                                        
                                        
                    // {Get [Node Type] of {Internal child Node} of Selected child Node} Method  :                
                    
                    do {                        
                                                                        
                        alert("Welcome to {Get [Node Type] of [Internal Child Node] of Main child Node} Method ");                                                            
    
                        var elemP = document.getElementById('sec');                            

                        if (elemP.childNodes.length == 0) {
                            
                            alert("Parent Element's Main Child Nodes count = 0");
                            alert('{Get [node Type - internal Child Node]} process has been Canceled!');
                            
                        } else {
                            
                            alert('{Get [Node Type - Interanl Child Node]} process has confirmed');

                            
                            var func = prompt("Press (1) for [first child] of [internal child node] Accessing Method\n" + 
                            "Press (2) for [first Element child] of [internal child node] Accessing Method\n" +
                            "Press (3) for [last child Node] of [internal child node] Accessing Method\n" +
                            "Press (4) for [last child element] of [internal child node] Accessing Method\n" +                            
                            "Press (5) for [certain index child Node] of [internal child node] Accessing Method\n" +
                            "Press (6) for [certain index child element] of [internal child node] Accessing Method\n" );

                            if (func == "1") {                                       
                                                                                         
                                alert("Welcome to {get node [Type] by [ Main Child => first Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                                                     
                                do  {                                                                        
                                                                                                                                                                                                                    
                                    var childElem = elemP.firstChild,
                                        x = prompt("Enter your index of internal child Node");                                    
                                    
                                    if (x == "") {

                                        alert('index is empty !\n please re Insert the child Node index!');

                                    } else {
                                        x = parseInt(x)-1;

                                        if (!isNaN(x)) {

                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
        
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName,                                                                                        
                                                    childType = childElem.nodeType;                                                                                        
                                        
        
                                                alert("Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue + "] \n" +
                                                 "]\n with Type : [" + childType + "] \n" );                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue +
                                                "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue +
                                                 "]\n with Type : [" + childType + "] \n" ;  
                                                
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName,                                                                                        
                                                    childType = childElem.nodeType;                                                                                        
                                        
        
                                                    alert("Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue + "] \n" +
                                                    "]\n with Type : [" + childType + "] \n" );                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" ;  
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childType = childElem.nodeType, 
                                                        childIntName = childElem.childNodes[x].nodeName,      
                                                        childIntValue = childElem.childNodes[x].nodeValue,      
                                                        childIntType = childElem.childNodes[x].nodeType;      
        
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n";
        
                                                }
                                                                                                    
                                            }

                                        } else {

                                            alert('index is not a number!');

                                        }
                                    }
                                    
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");

                            } else if (func == "2") {                                                               
                                
                                alert("Welcome to {get node Name by [ Main Child => first Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                                                                                                                            

                                do  {                                               

                                                                                                                                                                                
                                    var childElem = elemP.firstElementChild,
                                        x = parseInt(prompt("Enter your index of internal child Node"))-1;                                    
                                    

                                        if (x == "") {

                                            alert('index is empty !\n please re Insert the child Node index!');
    
                                        } else {
                                            x = parseInt(x)-1;
    
                                            if (!isNaN(x)) {
                                                                                                
                                                if (x+1 > childElem.childNodes.length) {
                                                    
                                                    alert("Internal child node index > Main Child Node count!");
                                                    alert("Get internal child node's Name process canceled! ");
        
                                                    var childValue = childElem.nodeValue,
                                                        childName = childElem.nodeName,                                                                                        
                                                        childType = childElem.nodeType;                                                                                        
                                            
        
                                                    alert("Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue + "] \n" +
                                                     "]\n with Type : [" + childType + "] \n" );                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue +
                                                     "]\n with Type : [" + childType + "] \n" ;  
                                                    
                                                } else {
                                                    
                                                    if (x+1 == 0) {
                                                        
                                                        alert("Internal child node index = 0 !");
                                                        alert("Get internal child node's Value process cancled! ");                                                                                                
                                                        
                                                        var childValue = childElem.nodeValue,
                                                        childName = childElem.nodeName,                                                                                        
                                                        childType = childElem.nodeType;                                                                                        
                                            
        
                                                        alert("Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue + "] \n" +
                                                        "]\n with Type : [" + childType + "] \n" );                            
                                                    
                                                        console.log("Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue +
                                                        "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                    
                                                        document.getElementById('txtarea').textContent +=
                                                        "Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue +
                                                        "]\n with Type : [" + childType + "] \n" ;  
                                                        
                                                    } else {
                                                        
                                                        var childName = childElem.nodeName, 
                                                            childValue = childElem.nodeValue, 
                                                            childType = childElem.nodeType, 
                                                            childIntName = childElem.childNodes[x].nodeName,      
                                                            childIntValue = childElem.childNodes[x].nodeValue,      
                                                            childIntType = childElem.childNodes[x].nodeType;      
        
                                                            
                                                        alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                            
                                                    
                                                        console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                                                                                                            
                                                    
                                                        document.getElementById('txtarea').textContent +=
                                                        "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n";
        
                                                    }
                                                                                                        
                                                }
                                            
                                            } else {
    
                                                alert('index is not a number!');
    
                                            }
                                        }


                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");

                            
                            } else if (func == "3") {
                                                                
                                alert("Welcome to {get node Name by [ Main Child => last Child ] of [internal Child Node => Child Nodes index] Node Accessing Method}");                            
                                
                                do  {                                    
                                                                                                                                                                                                                    
                                    var childElem = elemP.lastChild,
                                        x = prompt("Enter your index of internal child Node");                                    
                                    
                                    if (x  == "") {
                                        alert('index is an empty value!');
                                    } else {

                                        x = parseInt(x)-1;
                                        
                                        if  (!isNaN(x)) {

                                            if (x+1 > childElem.childNodes.length) {
                                                
                                                alert("Internal child node index > Main Child Node count!");
                                                alert("Get internal child node's Name process canceled! ");
        
                                                var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName,                                                                                        
                                                    childType = childElem.nodeType;                                                                                        
                                        
        
                                                alert("Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue + "] \n" +
                                                 "]\n with Type : [" + childType + "] \n" );                            
                                            
                                                console.log("Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue +
                                                "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                            
                                                document.getElementById('txtarea').textContent +=
                                                "Main Selected Child Node's Name : [" + childName +
                                                 "]\n with value : [" + childValue +
                                                 "]\n with Type : [" + childType + "] \n" ;  
                                                
                                            } else {
                                                
                                                if (x+1 == 0) {
                                                    
                                                    alert("Internal child node index = 0 !");
                                                    alert("Get internal child node's Value process cancled! ");                                                                                                
                                                    
                                                    var childValue = childElem.nodeValue,
                                                    childName = childElem.nodeName,                                                                                        
                                                    childType = childElem.nodeType;                                                                                        
                                        
        
                                                    alert("Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue + "] \n" +
                                                    "]\n with Type : [" + childType + "] \n" );                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName +
                                                    "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" ;  
                                                    
                                                } else {
                                                    
                                                    var childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue, 
                                                        childType = childElem.nodeType, 
                                                        childIntName = childElem.childNodes[x].nodeName,      
                                                        childIntValue = childElem.childNodes[x].nodeValue,      
                                                        childIntType = childElem.childNodes[x].nodeType;      
        
                                                        
                                                    alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                    "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n";
        
                                                }
                                                                                                    
                                            }



                                        }


                                    }
                                    
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");

                            } else if (func == "4") {
                                
                                alert("Welcome to {get node Name by [ Main Child => last Element Child ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {                                                                        
                                                                                                                                                                                
                                    var childElem = elemP.lastElementChild,
                                        x = prompt("Enter your index of internal child Node");                                    
                                    
                                        if (x  == "") {
                                            alert('index is an empty value!');
                                        } else {
    
                                            x = parseInt(x)-1;
                                            
                                            if  (!isNaN(x)) {
    
                                                if (x+1 > childElem.childNodes.length) {
                                                    
                                                    alert("Internal child node index > Main Child Node count!");
                                                    alert("Get internal child node's Name process canceled! ");
            
                                                    var childValue = childElem.nodeValue,
                                                        childName = childElem.nodeName,                                                                                        
                                                        childType = childElem.nodeType;                                                                                        
                                            
            
                                                    alert("Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue + "] \n" +
                                                     "]\n with Type : [" + childType + "] \n" );                            
                                                
                                                    console.log("Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue +
                                                    "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                
                                                    document.getElementById('txtarea').textContent +=
                                                    "Main Selected Child Node's Name : [" + childName +
                                                     "]\n with value : [" + childValue +
                                                     "]\n with Type : [" + childType + "] \n" ;  
                                                    
                                                } else {
                                                    
                                                    if (x+1 == 0) {
                                                        
                                                        alert("Internal child node index = 0 !");
                                                        alert("Get internal child node's Value process cancled! ");                                                                                                
                                                        
                                                        var childValue = childElem.nodeValue,
                                                            childName = childElem.nodeName,                                                                                        
                                                            childType = childElem.nodeType;                                                                                        
                                            
            
                                                        alert("Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue + "] \n" +
                                                        "]\n with Type : [" + childType + "] \n" );                            
                                                    
                                                        console.log("Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue +
                                                        "]\n with Type : [" + childType + "] \n" );                                                                                                            
                                                    
                                                        document.getElementById('txtarea').textContent +=
                                                        "Main Selected Child Node's Name : [" + childName +
                                                        "]\n with value : [" + childValue +
                                                        "]\n with Type : [" + childType + "] \n" ;  
                                                        
                                                    } else {
                                                        
                                                        var childName = childElem.nodeName, 
                                                            childValue = childElem.nodeValue, 
                                                            childType = childElem.nodeType, 
                                                            childIntName = childElem.childNodes[x].nodeName,      
                                                            childIntValue = childElem.childNodes[x].nodeValue,      
                                                            childIntType = childElem.childNodes[x].nodeType;      
            
                                                            
                                                        alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                            
                                                    
                                                        console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n");                                                                                                            
                                                    
                                                        document.getElementById('txtarea').textContent +=
                                                        "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with type : [" + childType +
                                                        "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with type : [" + childIntType + "] \n";
            
                                                    }
                                                                                                        
                                                }
    
    
    
                                            }
    
    
                                        }
                                        
                                    var z = prompt("Press (1) to restart the {get internal child Node's Name}\n press any other key to exit...");
                                } while (z=="1");
   
                            } else if (func == "5") {
                                                                
                                alert("Welcome to {get node Name by [ Main Child =>  Child Node Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            

                                do  {
                                                                                                        
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                

                                    if (xMain == "") {

                                        alert('Index value is Not a valid number Or Empty value ! \n , please re insert a valid number');
            
                                    } else {
                                        xMain = parseInt(xMain)-1;

                                        if (!isNaN(xMain)) {

                                            if (xMain+1 > elemP.childNodes.length) {
                                                
                                                alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                
                                                alert(`Get Node value process has Canceled! `);
        
                                                var childName = elemP.nodeName,
                                                    childValue = elemP.nodeValue,
                                                    childType = elemP.nodeType;
        
                                                alert(" Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n");                            
                            
                                                console.log(" Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                
                                                    
                                            } else {
            
                                                if (xMain+1 == 0 ) {                                            
                                                                                                
                                                    alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
        
                                                    var childName = elemP.nodeName,
                                                        childValue = elemP.nodeValue,
                                                        childType = elemP.nodeType;
        
                                                    alert(" Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n");                            
                                
                                                    console.log(" Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                        
                                                } else {
                                                                                            
                                                    var childElem = elemP.childNodes[xMain],                                        
                                                        childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue,
                                                        childType = childElem.nodeType,
                                                        x = prompt("Enter your index of internal child Node");
    
                                                        if (x == "") {
    
                                                            alert('Index value is Not a valid number or Empty Value! \n , please re insert a valid number');
                                
                                                        } else {
                                                            x = parseInt(x)-1;
                                                            
                                                             if (!isNaN(x)) {

                                                                 if  (x+1 > elemP.childNodes[xMain].childNodes.length ) {
                                                                     
                                                                     alert(`The internal Child Node's index is > Main Child Node Count! \n please re-Enter the interal Child Node index`);
                                                                     
                                                                     alert(`Get Node Name process has Canceled! `);
                                                                                                                                                           
                     
                                                                     alert(" Main child Element's Name is  [" + childName +
                                                                     "] \n with Value  is : [" + childValue +
                                                                     "] \n with Type : [" + childType + "] \n");                            
                                                 
                                                                     console.log(" Main child Element's Name is  [" + childName +
                                                                     "] \n with Value  is : [" + childValue +
                                                                     "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                                     
                                                                     document.getElementById('txtarea').textContent +=
                                                                     " Main child Element's Name is  [" + childName +
                                                                     "] \n with Value  is : [" + childValue +
                                                                     "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                                                                                 
                                                                 } else {                                                                     
                                                                     
                                                                     if  (x+1 == 0) {
                                                                         
                                                                         alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                         
                                                                         alert(`Get Node Name process has Canceled! `);
                                                                         
                     
                                                                         alert(" Main child Element's Name is  [" + childName +
                                                                         "] \n with Value  is : [" + childValue +
                                                                         "] \n with Type : [" + childType + "] \n");                            
                                                     
                                                                         console.log(" Main child Element's Name is  [" + childName +
                                                                         "] \n with Value  is : [" + childValue +
                                                                         "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                                         
                                                                         document.getElementById('txtarea').textContent +=
                                                                         " Main child Element's Name is  [" + childName +
                                                                         "] \n with Value  is : [" + childValue +
                                                                         "] \n with Type : [" + childType + "] \n";                                                                                                                                                                                                                
                                                                         
                                                                     } else {
                                                                                                                             
                                                                         var childIntName = childElem.childNodes[x].nodeName,
                                                                             childIntValue = childElem.childNodes[x].nodeValue,                                                    
                                                                             childIntType = childElem.childNodes[x].nodeType;                                                    
                                                                         
                                                                         alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                         "]\n has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] with Type : [" + childIntType + "] \n");                            
                                                                         
                                                                         console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                         "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with Type : [" + childIntType + "] \n");                                                                                                            
                                                                         
                                                                         document.getElementById('txtarea').textContent +=
                                                                         "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                         "]\n has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] with Type : [" + childIntType + "] \n";
                     
                                                                     }                                                                                                                                                        
                         
                                                                 }

                                                             } else {
                                                                 alert('index is not a number!');
                                                             }

                                                        
                                                        }                                                        
            
                                                }
        
                                            }                                     

                                        } else {

                                            alert('index is not a number!');
                                        }


                                    }

                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Name by index - child Nodes}");

                                } while (z == "1");
                                
                            } else if (func == "6") {
                                                                
                                alert("Welcome to {get node Name by [ Main Child =>  Child Element Node Index ] of [internal Child Node => Child Nodes index] Accessing Method}");                            
                                     
                                do  {                
                                                                                         
                                    var xMain = prompt("Enter Main Child Node Number");                                                                                
                                                                        
                                    if (xMain == "") {                                        
                                        
                                        alert('Index value is Not a valid number or Empty value! \n, please re insert a valid number');
            
                                    } else {                                        

                                        xMain = parseInt(xMain)-1;
 
                                        if (!isNaN(xMain)) {
                                            
                                            if (xMain+1 > elemP.childNodes.length) {
    
                                                alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                
                                                alert(`Get Node value process has Canceled! `);
        
                                                var childName = elemP.nodeName,
                                                    childValue = elemP.nodeValue,
                                                    childType = elemP.nodeType;
        
                                                alert(" Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n");                            
                            
                                                console.log(" Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                
                                                document.getElementById('txtarea').textContent +=
                                                " Main Parent Element's Name is  [" + childName +
                                                 "] \n with Value  is : [" + childValue +
                                                  "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                
                                                    
                                            } else {
        
                                                if (xMain+1 == 0 ) {                                            
                                                                                                
                                                    alert(`The Main Child Node's index is > than Parent child Element's count! \n please re-Enter the Child Node index`);
                                                    
                                                    alert(`Get Node Name process has Canceled! `);
        
                                                    var childName = elemP.nodeName,
                                                        childValue = elemP.nodeValue,
                                                        childType = elemP.nodeType;
        
                                                    alert(" Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n");                            
                                
                                                    console.log(" Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                    
                                                    document.getElementById('txtarea').textContent +=
                                                    " Main Parent Element's Name is  [" + childName +
                                                    "] \n with Value  is : [" + childValue +
                                                    "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                        
                                                } else {
                                                                                            
                                                    var childElem = elemP.children[xMain],
                                                        childName = childElem.nodeName, 
                                                        childValue = childElem.nodeValue,
                                                        childType = childElem.nodeType,
                                                        x = prompt("Enter your index of internal child Node");
        
                                                        if (x == "") {
    
                                                            alert('Index value is Not a valid number or empty value , please re insert a valid number');
                                
                                                        } else {        

                                                            x = parseInt(x)-1;
                                                            
                                                            if (!isNaN(x)) {
                                                                if  (x+1 > elemP.childNodes[xMain].childNodes.length ) {
                                                                        
                                                                    alert(`The internal Child Node's index is > Main Child Node Count! \n please re-Enter the interal Child Node index`);
                                                                    
                                                                    alert(`Get Node Name process has Canceled! `);                                                                                                                               
                    
                                                                    alert(" Main child Element's Name is  [" + childName +
                                                                    "] \n with Value  is : [" + childValue +
                                                                    "] \n with Type : [" + childType + "] \n");                            
                                                
                                                                    console.log(" Main child Element's Name is  [" + childName +
                                                                    "] \n with Value  is : [" + childValue +
                                                                    "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                                    
                                                                    document.getElementById('txtarea').textContent +=
                                                                    " Main child Element's Name is  [" + childName +
                                                                    "] \n with Value  is : [" + childValue +
                                                                    "] \n with Type : [" + childType + "] \n";                                                                                                                
                                                                                                                
                                                                } else {

                                                                    
                                                                    if  (x+1 == 0) {
                                                                        
                                                                        alert(`The internal Child Node's index is = 0! \n please re-Enter the interal Child Node index`);
                                                                        
                                                                        alert(`Get Node Name process has Canceled! `);
                                                                        
                    
                                                                        alert(" Main child Element's Name is  [" + childName +
                                                                        "] \n with Value  is : [" + childValue +
                                                                        "] \n with Type : [" + childType + "] \n");                            
                                                    
                                                                        console.log(" Main child Element's Name is  [" + childName +
                                                                        "] \n with Value  is : [" + childValue +
                                                                        "] \n with Type : [" + childType + "] \n");                                                                                                            
                                                                        
                                                                        document.getElementById('txtarea').textContent +=
                                                                        " Main child Element's Name is  [" + childName +
                                                                        "] \n with Value  is : [" + childValue +
                                                                        "] \n with Type : [" + childType + "] \n";                                                                                                                                                                                                                
                                                                        
                                                                    } else {
                                                                                                                            
                                                                        var childIntName = childElem.childNodes[x].nodeName,
                                                                            childIntType = childElem.childNodes[x].nodeType,                                                    
                                                                            childIntValue = childElem.childNodes[x].nodeValue;                                                    
                                                                        
                                                                        alert("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                        "]\n" +
                                                                        " has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] " + 
                                                                        " with Type : [" + childIntType + "] \n");                            
                                                                        
                                                                        console.log("Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                        "]\n" +
                                                                        " has Interanl child Node with Name " + childIntName + " with Value : [" + childIntValue + "] " + 
                                                                        " with Type : [" + childIntType + "] \n");                                                                                                            
                                                                        
                                                                        document.getElementById('txtarea').textContent +=
                                                                        "Main Selected Child Node's Name : [" + childName + "] with value : [" + childValue + "] with Type : [" + childType +
                                                                        "]\n" +
                                                                        " has Interanl child Node with Name [" + childIntName + "] with Value : [" + childIntValue + "] " + 
                                                                        " with Type : [" + childIntType + "] \n";
                    
                                                                    }                                                                                                                                                        
                        
                                                                }

                                                            } else {
                                                                alert('index is not a number!');
                                                            }

                                                        }        
            
                                                }
        
                                            }                                     
                                        
                                        } else {
                                            alert('index is not a number!');
                                        }
                                    }
    
                                    var z = prompt ("Press (1) to restart the {Get internal child Node's Name by index - child Element Nodes}");

                                } while (z == "1");

                                                                                            
                            } else {
                                alert("Error Entry!");
                            }                                                                                                          

                        }
                                                                                                                                                                                            
                        var z0 =prompt("Press (1) to restart the {Get [Node Type] of [internal child Node] of Main child Node} Method {by diffrent functions} \n"+
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
