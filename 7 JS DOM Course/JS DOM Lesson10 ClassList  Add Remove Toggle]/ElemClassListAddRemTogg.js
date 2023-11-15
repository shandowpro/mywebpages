
/* global document, alert, prompt */                    
/* JSOOP [Elements ClassList  Add, remove, toggle] {part2}*/ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements ClassList  Add, remove, toggle} [part2] application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements ClassList Add, remove, toggle } [part2] \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {Add a new Class Name to the certain Element by (elem.classList.add()); Method} Path ...\n " +
            "Press(2) for {remove a class Name(s) from certain element by (elem.classList.remove()); Method} Path ...\n"+
            "Press(3) for {Toggle a class Name(s) To/from certain element by (elem.classList.toggle()); Method} Path ...\n");
                        
            if (path == "1") {                

                
                alert("Welcome to {Add a new Class Name to the certain Element by (elem.classList.add()); Method} Path");
                
                var mthd = prompt("Press (1) to add a single Class Name... \n Press (2) to add a Multiple Class Names... ");
                
                if (mthd ==  "1") {

                    
                    // Adding one Single Class Name to the Element's Class List:
                    do {                                        

                                                                        
                        var elemId = prompt("Enter {Element id } to put the reslut in:"),
                            elemP = document.getElementById(elemId),                            
                            cElemId = prompt("Enter {Child element Id} to performe Add new Class Name to it's Class names Function"),
                            elem =  document.getElementById(cElemId),
                            classTxt = prompt("Enter your new Class Name:");
        
                        elem.classList.add(classTxt);
                        
                        alert("Class Name [ " + classTxt + "] has been Added successfully to the element = " + elem.tagName + "]\n" + "The new count of Element's Class list = " + elem.classList.length);
                        
                        console.log("Class Name [ " + classTxt + "] has been Added successfully to the element = " + elem.tagName + "]\n" + "The new count of Element's Class list = " + elem.classList.length);
                        
                        document.getElementById('txtarea').textContent =
                        "Class Name [ " + classTxt +
                         "] has been Added successfully to the element = " + elem.tagName + "]\n" +
                          "The new count of Element's Class list = " + elem.classList.length;                            

                        elemP.textContent = "Element's Current ClassList as following: \n" + elem.classList.value;

                        var z0 =prompt("Press (1) to restart the {Add a new Class Name to the certain\n"+
                        " Element by (elem.classList.add()); Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

        // =================================================================================================
                } else if (mthd == "2") { 
                    // Adding Multiple Single Class Name to the Element's Class List:
                    
                    do {                                        
                                                                        
                        var elemId = prompt("Enter {Element id } to put the reslut in:"),
                            elemP = document.getElementById(elemId),                            
                            cElemId = prompt("Enter {Child element Id} to performe Add new Class Name to it's Class names Function"),
                            elem =  document.getElementById(cElemId),
                            x = parseInt(prompt("insert te Count of desired Classes to be Added to the elemnet:")),
                            classArr = [];
        
                        for (i=0 ; i<x ; i++) {

                            classArr[i] = prompt("Enter the Class Name number" + (i+1));

                            elem.classList.add(classArr[i]);
                        
                            alert("Class Name [ " + classArr[i] + "] has been Added successfully to the element = " + elem.tagName + "]\n" +
                             "The new current count of Element's Class list = " + elem.classList.length);
                            
                            console.log("Class Name [ " + classArr[i] + "] has been Added successfully to the element = " + elem.tagName + "]\n" + "The new current count of Element's Class list = " + elem.classList.length);
                            
                            document.getElementById('txtarea').textContent =
                            "Class Name [ " + classArr[i] +
                             "] has been Added successfully to the element = " + elem.tagName + "]\n" +
                              "The new current count of Element's Class list = " + elem.classList.length;                            

                        }

                        elemP.textContent = "Element's Current Class List as following :\n"+ elem.classList.value;
                                                                                                                                                                                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Add a new Class Name to the certain Element by \n"+
                        " (elem.classList.add()); Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                        

                } else  {
                    alert("Error Entry!");
                }
                
        // =================================================================================================

            } else if (path == "2") {    
                                                                                
                alert("Welcome to {remove a class Name(s) from certain element by (elem.classList.remove()); Method}  Path");
                
                var mthd = prompt("Press (1) to remove a single Class Name... \n Press (2) to remove a Multiple Class Names... ");
                
                if (mthd ==  "1") {
                    
                    // Remove one Single Class Name to the Element's Class List:
                    do {                                        
                                                                        
                        var elemId = prompt("Enter {Element id } to put the reslut in:"),
                            elemP = document.getElementById(elemId),                            
                            cElemId = prompt("Enter {Child element Id} to performe Remove Class Name from it's Class names Function"),
                            elem =  document.getElementById(cElemId),
                            classTxt = prompt("Enter your Class Name to remove:"),
                            l = elem.classList.length;
                                
                        for(i=0; i<l; i++) {

                            if (elem.classList.contains(classTxt)){

                                alert("Class Name [ " + classTxt + "] has been found in the element's ClassList and removing process has been confirmed !");
                                
                                elem.classList.remove(classTxt);
                                
                                alert("Class Name [ " + classTxt + "] has been removed successfully to the element = " + elem.tagName + "]\n" + "The new count of Element's Class list = " + elem.classList.length);
                                
                                console.log("Class Name [ " + classTxt + "] has been removed successfully to the element = " + elem.tagName + "]\n" + "The new count of Element's Class list = " + elem.classList.length);
                                                                
                                document.getElementById('txtarea').textContent =
                                "Class Name [ " + classTxt +
                                 "] has been removed successfully to the element = " + elem.tagName + "]\n" +
                                  "The new count of Element's Class list = " + elem.classList.length;                            
                            }
                        }

                        elemP.textContent = "Element's Current Class List as following :\n"+ elem.classList.value;
                                                                                                                                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Remove a single Class Name from the certain Element \n"+
                         " by (elem.classList.remove()); Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                                                                                                                    

        // =================================================================================================
                } else if (mthd == "2") { 
                    // Removing Multiple Class Names from the Element's Class List:
                    
                    do {                                        
                                                                        
                        var elemId = prompt("Enter {Element id } to put the reslut in:"),
                            elemP = document.getElementById(elemId),                            
                            cElemId = prompt("Enter {Child element Id} to performe Removing new Class Name to it's Class names Function"),
                            elem =  document.getElementById(cElemId),
                            remArr = [],
                            classL = elem.classList.length;                                                        
                        
                        do {

                            arrL = parseInt(prompt("insert the Count of desired Classes to be Removed from element [" + elem.tagName + "]"));
    
                            if (arrL > classL) {
                                alert("your Count of removing Class Names is Greater than the elements's count ");    

                            } else {                                                        

                                // receiving the Class Names to be delete form the User:
                                for (i=0 ; i<arrL ; i++) {
                                    remArr[i] = prompt("Enter the Class Name number [" + (i+1) + "] to Remove");                                
                                }                            

                                // Porcessing Removing Class Names:
                                for( i=0; i<arrL; i++) {
                                    
                                    if (elem.classList.contains(remArr[i])){
        
                                        elem.classList.remove(remArr[i]);
                                
                                        alert("Class Name [ " + remArr[i] + "] has been found with in Element Classlist & removed successfully from the element = " + elem.tagName + "]\n" 
                                        + "The new current count of Element's Class list = " + elem.classList.length);
                                        
                                        console.log("Class Name [ " + remArr[i] + "] has been found with in Element Classlist & removed successfully from the element = " + elem.tagName + "]\n" +
                                        "The new current count of Element's Class list = " + elem.classList.length);
                                        
                                        document.getElementById('txtarea').textContent =
                                        "Class Name [ " + remArr[i] + "] has been found with in Element Classlist & removed successfully from the element = " + elem.tagName + "]\n" +
                                        "The new current count of Element's Class list = " + elem.classList.length;                                    
                                        
                                    }
                                    
                                }

                                elemP.textContent = "Element's Current Class List as following :\n"+ elem.classList.value;

                            }        

                        }  while (arrL > classL);
                                                
                                                                                                                                                                                                                                                                                                                                    
                        var z0 =prompt("Press (1) to restart the {Removing multiple ClassNames from the certain Element\n"+
                        " by (elem.classList.remove()); Method} Path \n"+
                        " or any other key to Abort!");
        
                    } while (z0 == "1");                        

                } else  {
                    alert("Error Entry!");
                }
                
                                                                    
    // =================================================================================================
            } else if (path == "3") {                    
                                                                                
                alert("Welcome to {Toggle a class Name(s) To/from certain element by (elem.classList.toggle()); Method} Path ...");
                
                do {                                                                    
                    
                    var elemId = prompt("Enter {Element id } to put the reslut in:"),
                        elemP = document.getElementById(elemId),                            
                        cElemId = prompt("Enter {Child element Id} to performe Toggle a Class Name to/from it's Class names Function"),
                        elem =  document.getElementById(cElemId),
                        classTxt = prompt("Enter Class Name to {toggle}:");

                    elem.classList.toggle(classTxt);
                    
                    alert("Class Name [ " + classTxt + "] has been Toggled successfully to/from the element = " + elem.tagName + "]\n" +
                     "The new count of Element's Class list = " + elem.classList.length);
                    
                    console.log("Class Name [ " + classTxt + "] has been Toggled successfully to the element = " + elem.tagName + "]\n" +
                     "The new count of Element's Class list = " + elem.classList.length);
                    
                    document.getElementById('txtarea').textContent =
                    "Class Name [ " + classTxt +
                    "] has been Toggled successfully to the element = " + elem.tagName + "]\n" +
                    "The Current count of Element's Class list = " + elem.classList.length;                            

                    elemP.textContent = "Element's Current Class List as following :\n" + elem.classList.value;

                    var z0 =prompt("Press (1) to restart the {by (elem.classList.toggle(''); Method} Path \n"+
                    " or any other key to Abort!");

                
                } while (z0 == "1");                                                                                
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


function checkbtn2(){

    alert("Welcome to {Activate the Special application of [simmiler button's {class2} text Node , Paragraph's className] } Path... ");
                        
    var elemId = prompt("Enter {Element id } to put the result in:"),
        elemP = document.getElementById(elemId),                            
        elemClass = document.getElementById('pId'),
        elem = document.getElementById('btn2'),            
        btnTxt = elem.textContent,
        str ="";

    for (i=0; i<elemClass.classList.length; i++) {
        if (btnTxt == elemClass.classList.item(i)) {
            
            str = "Button [" + elem.tagName + "] Text Node  === one of paragaraph's ClassName";
            
            alert(str + "\n");
            
            console.log(str + "\n");
            
            document.getElementById('txtarea').textContent = str + "\n";                
            
            elemP.textContent = str + "\n";
            
        }        
    }                                                                    

}


//==============================================================================


function checkbtn3(){

    alert("Welcome to {Activate the Special application of [simmiler button's {class3} text Node , Paragraph's className] } Path... ");
                        
    var elemId = prompt("Enter {Element id } to put the result in:"),
        elemP = document.getElementById(elemId),                            
        elemClass = document.getElementById('pId'),
        elem = document.getElementById('btn3'),            
        btnTxt = elem.textContent,
        str ="";

    for (i=0; i<elemClass.classList.length; i++) {
        if (btnTxt == elemClass.classList.item(i)) {
            
            str = "Button [" + elem.tagName + "] Text Node  === one of paragaraph's ClassName";
            
            alert(str + "\n");
            
            console.log(str + "\n");
            
            document.getElementById('txtarea').textContent = str + "\n";                
            
            elemP.textContent = str + "\n";
            
        }        
    }                                                                    

}

//==============================================================================



//==============================================================================
//==============================================================================
//==============================================================================

function test0000() {
    
    var elem = document.getElementById('sec'),
        Utxt = prompt("Enter you Content Text of Element:");
        // elemTxt = document.createTextNode(Utxt);

    elem.innerHTML = "your Page Title is: " + document.title +
     '<br> your page overall images count: ' + document.images.length +
      '<br> your page overall forms count is ' + document.forms.length;
        
}

// ==================================================================================================


function test00() {
 
    var parent = document.getElementsByTagName('sec');        
        
   for (i=0; i<document.images.length; i++) {
       
        parent.innerHTML += '<br>' +  document.images[i].title + "<br>";

   }
    

 //   parent.innerHTML = document.images[0].width + "<br>"; 
    //parent.innerHTML = document.images[0].height;
}

// ==================================================================

function testH1() {

    var newHead = document.createElement("h1"),
        headTxt = prompt("Enter your h1 content:"),
        headCont = document.createTextNode(headTxt);
         
    newHead.appendChild(headCont);

    document.getElementById("sec").appendChild(newHead);

    var newHeadTxt = prompt("Enter your new h1 Text :"); 
    
    newHead.innerHTML = newHeadTxt;

}
//======================================================================================


function testTxtArea() {

    var newHead = document.createElement("textarea"),
        headTxt = prompt("Enter your textarea content:"),
        headCont = document.createTextNode(headTxt);
         
    newHead.appendChild(headCont);

    document.getElementById("sec").appendChild(newHead);

    var newHeadTxt = prompt("Enter your new textarea Text :"); 
    
    newHead.innerHTML = newHeadTxt;

}

// =================================================================================================

function testPar() {
    
    var newHead = document.createElement("paragraph"),
    headTxt = prompt("Enter your parqagraph content:"),
    headCont = document.createTextNode(headTxt);
    
    newHead.appendChild(headCont);
    
    document.getElementById("sec").appendChild(newHead);
    
    var newHeadTxt = prompt("Enter your new paragraph Text :"); 
    
    newHead.innerHTML = newHeadTxt;
    
}

// =================================================================================================

function test00(){

    alert("welcome to testing multiple Accessing by {querery Selector Method - Child Class} ");
    
    // var pElemTN = prompt("Enter your Parent Element's Tag name"),    
    //     cElemTN = prompt("Enter your child's Element Class Name"),
      
    var z = prompt("Choose your Path from Below \n (1) for find your Element by {id} \n (2) for find your Element by {Class} \n (3) for find your Element by {Tag Name}");

    if (z== "1"){

        var x = parseInt(prompt("Enter your Child Element's index number"))-1,
            elemId = prompt("Enter your Element Id"),
            elem = document.querySelectorAll('#'+ elemId);

        alert("Your child Element as following :\n Child Element Name is: " , elem[x].tagName , "\n" , elem.TEXT_NODE ,  "\n Child Element content is: " , elem[x].innerHTML );

        console.log("Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n"+ elem.TEXT_NODE +  "\n Child Element content is: " + elem[x].innerHTML );

        document.getElementById("txtarea").innerHTML += "\n Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n Child Element content is: " + elem[x].innerHTML ;
        
        
    } else if (z== "2") {
        
        var x = parseInt(prompt("Enter your Child Element's index number"))-1,
            elemClass = prompt("Enter your Element class"),
            elem = document.querySelectorAll('.'+ elemClass);

        alert("Your child Element as following :\n Child Element Name is: " , elem[x].tagName + "\n Child Element content is: " , elem[x].innerHTML );

        console.log("Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n Child Element content is: " + elem[x].innerHTML );

        document.getElementById("txtarea").innerHTML += "\n Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n Child Element content is: " + elem[x].innerHTML ;

    } else if (z== "3") {
        
        var x = parseInt(prompt("Enter your Element's index number"))-1,
            parElem = document.getElementById('secId'),
            elemName = prompt("Enter your Child Element Class Name "),
            elem = document.querySelectorAll( parElem + "." + elemName);

        alert("Your child Element as following :\n Child Element Name is: " , elem[x].tagName + "\n Child Element content is: " , elem[x].innerHTML );

        console.log("Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n Child Element content is: " + elem[x].innerHTML );

        document.getElementById("txtarea").innerHTML += "\n Your child Element as following :\n Child Element Name is: " + elem[x].tagName + "\n Child Element content is: " + elem[x].innerHTML ;
        
    } else {
        alert("Error Entry!");
    }


    
    // alert("Your child Element as following :\n Child Element Name is: " , elem[x]+ "\n Child Element content is: " , elem[x].innerHTML );
    
    // console.log("Your child Element as following :\n Child Element Name is: " + elem[x] + "\n Child Element content is: " + elem[x].innerHTML );
    
    // document.getElementById("txtarea").innerHTML = "\n Your child Element as following :\n Child Element Name is: " + elem[x] + "\n Child Element content is: " + elem[x].innerHTML ;

}

//==============================================================================
//==============================================================================


function test0000() {
    alert("Welcome to {Intro & What is DOM}");
    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
        alert("Welcome to [DOM Intro Application- Adding New Element(s)]\n Please Choose between Below Functions");

        do {
                                    
            var func = prompt("Press (1) for Adding new header(s) <h1>-<h5> element\n "+
            " Press (2) for Adding new <p> paragraph element\n "+
            "Press (3) for Adding new <a> link/ankor element");
            
            if (func == "1") {

                alert("Welcome to [ Adding New Header(s)]\n Please optimize your header Properties");
                                
                                                                
                var h1Count = prompt("Enter count of <header> Element you wish to add ");

                for (i=0; i < h1Count; i++) {
                    
                    var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                    
                    var HElem = document.createElement('header');
                                                    
                    var HTxt = document.createTextNode(Txt1);                                    
                    
                    HElem.appendChild(HTxt);    
                    
                    document.getElementById("sec").appendChild(HElem);
                                                            
                    alert("your Header <header> Number " + (i+1) + "has Been Added Succesfully!");
                }
                                        
                        
            // =================================================================================================
            
            } else if (func == "2")  {
                alert("Welcome to [ Adding New Paragraph(s)]\n Please optamize your {paragraph} Properties");                
                                                                                                                    
                var pCount = prompt("Enter count of <p> Element you wish to add ");

                for (i=0; i < pCount; i++) {
                    
                    var Txt1 = prompt("Enter your Content Text of {Paragraph} number [" + (i+1) + "]: ");
                                                                    
                    var PElem = document.createElement('p');
                                                    
                    var PTxt = document.createTextNode(Txt1);                                    
                    
                    PElem.appendChild(PTxt);    
                    
                    document.getElementById("sec").appendChild(PElem);
                                                            
                    alert("your Header <p> Number " + (i+1) + "has Been Added Succesfully!");
                }
            // =================================================================================================
            
                        
            } else if (func == "3")  {
                alert("Welcome to [ Adding New link/ankor(s)]\n Please optamize your {link/ankor} Properties");

                var aCount = prompt("Enter count of <a> Element you wish to add ");

                for (i=0; i < aCount; i++) {
                    
                    var Txt1 = prompt("Enter your Content Text of {link/ankor} number [" + (i+1) + "]: ");
                                                                    
                    var AElem = document.createElement('a');
                                                    
                    var ATxt = document.createTextNode(Txt1);                                    
                    
                    AElem.appendChild(ATxt);    
                    
                    document.getElementById("sec").appendChild(AElem);
                                                            
                    alert("your link/ankor(s) <a> Number " + (i+1) + "has Been Added Succesfully!");
                }
            // =================================================================================================

            } else {
                alert("Error Entry!");
            }
                
            var z = prompt("Press (1) to restart the Application\n or Press any other key to abort!");
        } while(z=="1");                                                                
    }            
}

//==============================================================================                
//==============================================================================

                  