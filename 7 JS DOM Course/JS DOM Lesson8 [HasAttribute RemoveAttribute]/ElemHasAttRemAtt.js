
/* global document, alert, prompt */                    
/* JSOOP [Has Attribute & Remove Attribute] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Has Attribute & Remove Attribute} application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Has Attribute} & {Remove Attribute} Methods} \n Choose your main {Path} from below");
                                                            
            var path = prompt("Press(1) for {hasAttribute();} Method Path\n " +
            "Press(2) for {removeAttribute();} Method Path\n "); 
            
            if (path == "1") {                
                                            
                alert("Welcome to [{hasAttribute();} Method]");
                
                var mthd = prompt('Press (1) for {Checking only} Function \n Press (2) for {Checking + Editing} Function');

                if (mthd == "1" ) {


                    alert("Welcome to {Checking only} Function")
                    do {                                                                    
                        var elemT = prompt("Enter {Element Tag Name}"),
                            elem = document.getElementsByTagName(elemT),                            
                            x = parseInt(prompt("Enter {Element's index} number"))-1,
                            attN = prompt("Enter {Attribute Name} to performe Checking Only Function");                                                      
                        
                        if (elem[x].hasAttribute(attN)) {
                            
                            alert("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            console.log("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n";                            
                                                        
                        } else {
                            
                            alert("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n");
                            
                            console.log("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n";                            
                        }
                                                                                                                                                                                
                        var z0 =prompt("Press (1) to restart the [Checking only Function of Element Attribute ] \n"+
                        " or any other key to Abort!");
    
                    } while (z0 == "1");
                                                                
                } else if (mthd == "2") {                
                    
                    alert("Welcome to {Checking only + Editing - if Existed} Function")
                    
                    do {                                                                    
                        var elemT = prompt("Enter {Element Tag Name }"),
                            elem = document.getElementsByTagName(elemT),                            
                            x = parseInt(prompt("Enter {Element's index} number"))-1,
                            attN = prompt("Enter {Attribute Name} to performe - [ Checking & Editing] Function");                                                      
                        
                        if (elem[x].hasAttribute(attN)) {
                            
                            // Displaying the current Value of Attribute:
                            alert("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            console.log("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n";                            

                            var attTxt = prompt("Enter the Attribute new Value [To performe Editing] :");

                            elem[x].setAttribute(attN , attTxt);

                            // Displaying the Value of Attribute after Editing :

                            alert(" The Attribute [" + attN + "]  Value after Editing is : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            console.log(" The Attribute [" + attN + "]  Value after Editing is : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            " The Attribute [" + attN + "]  Value after Editing is : [" + elem[x].getAttribute(attN) + "]\n";                            

                                                        
                        } else {
                            
                            alert("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n");
                            
                            console.log("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]" + "]\n";                            
                        }
                                                                                                                                                                                
                        var z0 =prompt("Press (1) to restart the [Checking + Editing Function of Element Attribute ] \n"+
                        " or any other key to Abort!");
    
                    } while (z0 == "1");
                    
                } else  {
                    alert("Error Entry!");
                }

                                                                                                                
        // =================================================================================================

            } else if (path == "2") {    
                                                                                
                alert("Welcome to {Removing Attribute - Conitional & Non-Conditional} Function")
                
                var mthd = prompt("Press (1) for {Conditional Removing} Function\n Press (2) for {Non - Conditional Removing} Function\n ");

                if (mthd == "1") {

                    alert("Welcome to {Removing Attribute - if Existed & Null Value} Function");
                    
                    do {          
                                                                                                          
                        var elemT = prompt("Enter {Element Tag Name }"),
                            elem = document.getElementsByTagName(elemT),                            
                            x = parseInt(prompt("Enter {Element's index} number"))-1,
                            attN = prompt("Enter {Attribute Name} to performe - [ Removing - Deleting] if {existed + null Value} Function");                                                      
                        
                        // Checking if the Attribute is Existed Or Not with the defined Element's Attributes :
                        if (elem[x].hasAttribute(attN)) {                            
                            
                            alert("the Attribute is Existed !");

                            // Displaying the current Value of Attribute - if Existed :
                            alert("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            console.log("Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "Yes, the Element " + elem[x].tagName + " has the Attribute [" + attN +
                             "] with Value : [" + elem[x].getAttribute(attN) + "]\n";                            

                            // Checking if the Attribute has a null value {Removing if has Null Value [nothing-empty]} :
                            if (elem.attN ==  null){

                                alert("the Attribute has Null-empty Value ! \n The Deleting - Removing will be proceesed");
                                // Removing Function:
                                elem[x].removeAttribute(attN);

                                // Displaying the current Value of Attribute after Deleing - Removing Function :
                                alert("The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n");
                                
                                console.log("The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n");
                                
                                document.getElementById('txtarea').textContent =
                                "The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n";                            
                                
                            } else {
                                                                
                                alert("The Attribute Value is Not A null Value [has A value] & "+
                                " will Not be Deleted! [removing has been Canceled]");
                                
                                alert("The Attribute [" + attN + "] value is : [" + elem[x].getAttribute(attN) + "]\n");
                                
                                console.log("The Attribute [" + attN + "] value is : [" + elem[x].getAttribute(attN) + "]\n");
                                
                                document.getElementById('txtarea').textContent =
                                "The Attribute [" + attN + "] value is : [" + elem[x].getAttribute(attN) + "]\n";                            
                            }                                                        

                        // The Attriubte is not Existed with the Element's Attributes {removing canceled}!:
                        } else {
                            
                            alert("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "] \n" +
                             "The Removing Process has been Canceled!" + "\n[because the Attribute is Not Existed !]");
                            
                            console.log("No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]\n" +
                             "The Removing Process has been Canceled!" + "\n[because the Attribute is Not Existed !]") ;
                            
                            document.getElementById('txtarea').textContent =
                            "No, the Element " + elem[x].tagName + " has Not the Attribute [" + attN + "]\n" +
                             "The Removing Process has been Canceled!" + "\n[because the Attribute is Not Existed !]";                            
                        }
                                                                                                                                                                                
                        var z0 =prompt("Press (1) to restart the [Removing - deleting {if Existed & Null value}] Element Attribute ] \n"+
                        " or any other key to Abort!");
    
                    } while (z0 == "1");


                } else if (mthd == "2"){

                    alert("Welcome to {Removing Attribute - by {Non-Conditinal Removing} Function")
                    
                    do {    
                        
                        var elemT = prompt("Enter {Element Tag Name }"),
                            elem = document.getElementsByTagName(elemT),                            
                            x = parseInt(prompt("Enter {Element's index} number"))-1,
                            attN = prompt("Enter {Attribute Name} to performe - [ Removing - Deleting] by non Conditional Function");                                                      
                            
                        if (elem[x].hasAttribute(attN)) {
                            
                            alert("Attribute is Existed - removing will be processed ");

                            elem[x].removeAttribute(attN);

                            // Displaying the current Value of Attribute after Deleing - Removing Function :
                            alert("The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            console.log("The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n");
                            
                            document.getElementById('txtarea').textContent =
                            "The Attribute [" + attN + "] value (after Deleting) is : [" + elem[x].getAttribute(attN) + "]\n";                            


                        } else {
                            alert("Attribute is not Existed - Removing has Been Canceled!");
                        }
                        
                                                                                                                                                                                
                        var z0 =prompt("Press (1) to restart the [Removing - deleting {if Existed & Null value}] Element Attribute ] \n"+
                        " or any other key to Abort!");
    
                    } while (z0 == "1");

                } else {
                    alert("Error Entry!");
                }


    
    // ================================================================================================================        
                                                                                                                 
            } else {

                alert("Good Bye!");
            }
        
            var z = prompt("Press (1) to Restart the whole Application \n or press any other key to abort!");
        } while (z=="1");        
    
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



                        /*
                         >>> {With out using certain Type of Element => Due we use [id] attribute}
                        var Element = prompt("Choose your child element type to get it's count form Below\n "+
                        "Press(1) for finding <header> child element(s)\n"+
                        " Press(2) for finding <p> element \n"+
                        " Press(3) for finding <textarea> element \n"+
                        " Press(4) for finding <h1> element \n"+
                        " Press(5) for finding <div> element");



                        if (Element == "1"){
                                                        
                            alert("Welcome to Press(1) for finding <header> child element(s) [by {id}]...");                    

                            var UElemId = prompt("Enter user [Id] Name of your Element :");


                            // getting the Header Element inside var [by id]:                            
                            var headerElem = document.getElementById(UElemId);

                            var hFunc = prompt("Choose one of following functions\n Press (1) for Change element's Content\n Press (2) for get element's count in all Page doucment ");
                            
                            if (hFunc == "1") {
                                                            
                                alert("Welcome to [Changing header Content Task]");
                                
                                var hNewCont = prompt("Enter your New Text content of Header Element:"),
                                    hTxt = document.createTextNode(hNewCont);
                                
                                headerElem.appendChild(hTxt);
                                
                                alert("Header Content has been Changed Successfully, please check it out!");
                                
                                
                            } else if (hFunc == "2") {

                                alert("Welcome to [get Element {with same [id]} count]");
                                
                            } else {                            
                                alert("Error Entry!");
                            }
                            
                            
                        } else if (Element == "2") {
                            
                            alert("Welcome to (paragraph) Element-finding by {id}, the default element's id will be accessed by");                    

                            // getting the Header Elelement inside var [by id]:
                            var headerElem = document.getElementById(hElemI);

                            var hFunc = prompt("Choose one of following functions\n Press (1) for Change element's Content\n Press (2) for get element's count in all Page doucment ");
                            
                            if (hFunc == "1") {
                                                            
                                alert("Welcome to [Changing header Content Task]");
                                
                                var hNewCont = prompt("Enter your New Text content of Header Element:"),
                                    hTxt = document.createTextNode(hNewCont);
                                
                                headerElem.appendChild(hTxt);
                                
                                alert("Header Content has been Changed Successfully, please check it out!");
                                
                                
                            }  else if (hFunc == "2") {

                                alert("Welcome to [get Element {with same [id]} count]");
                                
                            } else {                            
                                alert("Error Entry!");
                            }
                            
                        } else if (Element == "3") {
                            
                            alert("Welcome to (div) Element-finding by {id}, the default element's id will be accessed by");                    

                            // getting the Header Elelement inside var [by id]:
                            var headerElem = document.getElementById(hElemI);

                            var hFunc = prompt("Choose one of following functions\n Press (1) for Change element's Content\n Press (2) for get element's count in all Page doucment ");
                            
                            if (hFunc == "1") {
                                                            
                                alert("Welcome to [Changing header Content Task]");
                                
                                var hNewCont = prompt("Enter your New Text content of Header Element:"),
                                    hTxt = document.createTextNode(hNewCont);
                                
                                headerElem.appendChild(hTxt);
                                
                                alert("Header Content has been Changed Successfully, please check it out!");
                                
                                
                            }  else if (hFunc == "2") {

                                alert("Welcome to [get Element {with same [id]} count]");
                                
                            } else {                            
                                alert("Error Entry!");
                            }
                            
                        } else {
                            alert("Error Entry!");
                        }
                        
                        
                        
                        // Defining new elements + their Text-content:
                var hElem = document.createElement('header'),
                    hElemT = document.createTextNode('This is A Default header'),            
                    pElem = document.createElement('p'),
                    pElemT = document.createTextNode('This is A  Default Paragraph'),
                    txtAreaElem = document.createElement('textarea'),
                    txtAreaElemT = document.createTextNode('This is A Default text Area'),
                    h1Elem = document.createElement('h1'),
                    h1ElemT = document.createTextNode('This is A Default h1 '),
                    divElem = document.createElement('div'),
                    divElemT = document.createTextNode('This is A Default Div');

                // Appending new Elements Text-content to it's elements variables :
                hElem.appendChild(hElemT);            
                
                pElem.appendChild(pElemT);
                
                txtAreaElem.appendChild(txtAreaElemT);                        
                
                h1Elem.appendChild(h1ElemT);            
                
                divElem.appendChild(divElemT);                
                
                    
                // Appending the Created Elements to the Parent Element {section- with id='sec'}: 
                document.getElementById('sec').appendChild(hElem);
                
                document.getElementById('sec').appendChild(pElem);
                            
                document.getElementById('sec').appendChild(txtAreaElem);
                
                document.getElementById('sec').appendChild(h1Elem);
                
                document.getElementById('sec').appendChild(divElem);
                        
                        
                        
                        
                        */



