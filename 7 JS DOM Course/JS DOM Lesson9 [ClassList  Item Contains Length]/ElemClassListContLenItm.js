
/* global document, alert, prompt */                    
/* JSOOP [Elements ClassList  Item Contains Length] {part1}*/ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Elements ClassList  Item Contains Length} [part1] application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Elements ClassList  Item Contains Length} [part1] \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {get certain Element's className count (elem.classList.length); Method} Path ...\n " +
            "Press(2) for {get certain Element by one of it's classNames (elem.classList.item(#)); Method} Path ...\n"+
            "Press(3) for {Check if certain Element contain certain className with Class List by (elem.classList.contains(''); Method} Path ...\n " +
            "Press(4) for {Get all Class Names of certain element} Path..."); 
            
            if (path == "1") {                
                                                                        
                alert("Welcome to {get certain Element's className count (elem.classList.length); Method} Path");

                do {                                        
                                                                    
                    var elemId = prompt("Enter {Element id } to put the reslut in:"),
                        elemP = document.getElementById(elemId),                            
                        cElemId = prompt("Enter {Child element Id} to performe get count of it's Class names Function"),
                        elem =  document.getElementById(cElemId);

                    elemP.textContent = elem.classList.length;
                    
                    alert("Element [ " + elem.tagName + "]'s Class Names length = " + elemP.textContent + "]\n");
                    
                    console.log("Element [ " + elem.tagName + "]'s Class Names length = " + elemP.textContent + "]\n");
                    
                    document.getElementById('txtarea').textContent =
                    "Element [ " + elem.tagName + 
                    "]'s Class Names length = " + elemP.textContent + "]\n";                            
                                                                                                                                                                                                                                                            
                    var z0 =prompt("Press (1) to restart the {get certain Element's className count (elem.classList.length); Method} Path \n"+
                    " or any other key to Abort!");

                } while (z0 == "1");                                                                                                                    
                                                                                                                
        // =================================================================================================

            } else if (path == "2") {    
                                                                                
                alert("Welcome to {get certain Element by one of it's classNames (elem.classList.item(#)); Method} Path");
                
                do {                                                                    
                    
                    var elemId = prompt("Enter {Element id } to put the reslut in:"),
                        elemP = document.getElementById(elemId),                            
                        cElemId = prompt("Enter {Child element Id} to performe [get certain Class Name of it's ClassList] Function"),
                        elem =  document.getElementById(cElemId),
                        x = parseInt(prompt("Enter the element's {Class Name index number}"))-1;

                    elemP.textContent = elem.classList.item(x);
                    
                    alert("Element [ " + elem.tagName + "]'s Class Name with index [ " + (x+1) +"] is [" + elemP.textContent + "]\n");
                    
                    console.log("Element [ " + elem.tagName + "]'s Class Name with index [ " + (x+1) +"] is [" + elemP.textContent + "]\n");
                    
                    document.getElementById('txtarea').textContent =
                    "Element [ " + elem.tagName + "]'s Class Name with index [ " +
                     (x+1) +"] is [" + elemP.textContent + "]\n";                            
                                                                                                                                                                                                                                                            
                    var z0 =prompt("Press (1) to restart the {get certain Element by one of it's classNames (elem.classList.item(#)); Method} Path\n"+
                    " or any other key to Abort!");

                } while (z0 == "1");                                                                                
                                                                    
    // =================================================================================================
            } else if (path == "3") {                    
                                                                                
                alert("Welcome to {Check if certain Element contain certain className with Class List by (elem.classList.contains(''); Method} Path ...");
                
                do {                                                                    
                    
                    var elemId = prompt("Enter {Element id } to put the reslut in:"),
                        elemP = document.getElementById(elemId),                            
                        cElemId = prompt("Enter {Child element Id} to performe [get certain Class Name of it's ClassList] Function"),
                        elem =  document.getElementById(cElemId),
                        elemT = prompt("Enter your Text of Class Name to check");

                    if (elem.classList.contains(elemT)) {

                        alert("Yes, the elment [" + elem + "] has a Class name [ " + elemT + "]\n");
                        
                        console.log("Yes, the elment [" + elem + "] has a Class name [ " + elemT + "]\n");
                        
                        document.getElementById('txtarea').textContent =
                        "Yes, the elment [" + elem + "] has a Class name [ " + elemT + "]\n";                                                                                                                                                                                                                                                                                            

                    } else {

                        alert("No, the elment[" + elem + "]DO NOT has a Class name [ " + elemT + "]\n");
                        console.log("No, the elment[" + elem + "]DO NOT has a Class name [ " + elemT + "]\n");
                        document.getElementById('txtarea').textContent = "No, the elment[" + elem + "]DO NOT has a Class name [ " + elemT + "]\n";
                        
                    }
                                                            
                    
                    var z0 =prompt("Press (1) to restart the {Check if certain Element contain certain className with Class List by (elem.classList.contains(''); Method} Path \n"+
                    " or any other key to Abort!");

                
                } while (z0 == "1");                                                                                
    // ================================================================================================================        

            } else if (path == "4") {                   
                                                                                
            alert("Welcome to {Get all Class Names of certain element} Path... ");
                
                do {                                                                    
                    
                    var elemId = prompt("Enter {Element id } to put the reslut in:"),
                        elemP = document.getElementById(elemId),                            
                        cElemId = prompt("Enter {Child element Id} to performe [get All Class Names of it's ClassList] Function"),
                        elem =  document.getElementById(cElemId),
                        str = "";                        

                    alert("The elment [" + elem + "] All Class Name as following :");
                    
                    console.log("The elment [" + elem + "] All Class Name as following :");
                    
                    document.getElementById('txtarea').textContent =
                    "The elment [" + elem + "] All Class Name as following :";                                                                                                                                                                                                                                                                                            

                    for (i=0; i<elem.classList.length; i++ ) {
                        str += "Element's Class Name number (" + (i+1) + ") is [" + elem.classList.item(i) + "]\n";

                        alert(str);
                        console.log(str);
                        document.getElementById('txtarea').textContent = str;

                    }                    
                    
                    var z0 =prompt("Press (1) to restart the {Get all Class Names of certain element} Path...  \n"+
                    " or any other key to Abort!");

                
                } while (z0 == "1");                                                                                

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

function checkbtn1(){
    
    alert("Welcome to {Activate the Special application of [simmiler button's {class1} text Node , Paragraph's className] } Path... ");
                        
    var elemId = prompt("Enter {Element id } to put the result in:"),
        elemP = document.getElementById(elemId),                            
        elemClass = document.getElementById('pId'),
        elem = document.getElementById('btn1'),            
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

function display() {
    document.getElementById("SourceCode").innerHTML = test;
}

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
    
    //var mthd = prompt("Press (1) for Testing Content Methods \n Press (2) for Testing Tag Name Methods \n");

    // if (mthd == "1") {
    //     alert("Welcome to [Testing Content Methods]");
        
    //     // A) Testing Content Methods:
        
    //     var zz = prompt("press(1) to display element by {Element.Text_Node(); Method} [Will Return The Nubmer only] \n "+
    //     "press(2) to display element by {Element.innerHTML(); Method} [True]\n"+ 
    //     'press(3) to display element by {Element.textContent(); Method} [True]');
                    
    //     if (zz == "1") {
    //         // This Method Will Return {Inder of content} [False String]:
    //         var elemContent = elem.TEXT_NODE;
            
    //         alert("Your Element Text Node-content by [element.Text_Node] as following : \n " , elemContent );
                    
    //         console.log("Your Element Text Node-content by [element.Text_Node] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.Text_Node] as following : \n " + elemContent;
            
            
    //     } else if (zz=="2") {
    //         // This Method Will Return {The String content of the Elenemt } [True]:
    //         var elemContent = elem.innerHTML;
            
    //         alert("Your Element Text Node-content by [element.innerHTML] as following : \n " , elemContent );
                    
    //         console.log("Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent;
    
    //     } else if (zz=="3") {
    //         // This Method Will Return {The String content of the Elenemt } [True]:
    //         var elemContent = elem.textContent;
            
    //         alert("Your Element Text Node-content by [element.textContent] as following : \n " , elemContent );
                    
    //         console.log("Your Element Text Node-content by [element.textContent] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.textContent] as following : \n " + elemContent;
            
    
    //     } else{
    //         alert("Error Entry!");
    //     }
        
    // } else if (mthd == "2"){
    //     alert("Welcome to [Testing Tag Name Methods]");
        
    //     var zz =prompt("press(1) to display element by {Element.tagName(); Method} \n ");
                    
    //     if (zz == "1") {
    //         var elemContent = elem.tagName;
            
    //         alert("Your Element tag Name by [element.tagName] as following : \n " , elemContent );
                    
    //         console.log("Your Element tag Name by [element.tagName] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element tag Name by [element.tagName] as following : \n " + elemContent;
            
            
    //     } else if (zz=="2") {
            
    //         var elemContent = Finder.innerHTML;
            
    //         alert("Your Element Text Node-content by [element.innerHTML] as following : \n " , elemContent );
                    
    //         console.log("Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent;
    
    //     } else if (zz=="3") {
            
    //         var elemContent = Finder.textContent;
            
    //         alert("Your Element Text Node-content by [element.textContent] as following : \n " , elemContent );
                    
    //         console.log("Your Element Text Node-content by [element.textContent] as following : \n " + elemContent );
            
    //         document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.textContent] as following : \n " + elemContent;
            
    
    //     } else{
    //         alert("Error Entry!");
    //     }
        
    // } else {
    //     alert("Error Entry!");
    // }        
    
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


function test1() {
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

                  