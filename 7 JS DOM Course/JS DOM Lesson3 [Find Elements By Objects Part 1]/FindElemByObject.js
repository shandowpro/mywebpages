 
/* global document, alert, prompt */                    
/* JSOOP [Find Elements By Object] */ 
/*template-string-converter.enable;*/

function test() {


    alert("Welcome to {Find Elements By Object} application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
        
        do {
            
            alert("Welcome to Find Elements By Object} \n Choose your pathe main Path from below");
            
            var path = prompt("Press(1) to Get (Access/find) certain element's & change it's content by {page title} value \n "+
            " Press(2) to Get (Access/find) certain element's & Change it's content by images Element(s) properties-Attributes]\n"+
            " Press(3) to Get (Access/find) certain element's & Change it's content by certain Forms's Element(s) properties-Attributes]\n"); 
            
            if (path == "1") {                
                                                                
                alert("Welcome to [Get (Access/find) certain element's & change it's content by {page title} value ]\n"+
                " Please Choose your Function");

                do {

                    var uElem = prompt("Enter your element's Id Name "),
                        elem = document.getElementById(uElem);

                    elem.innerHTML ='<br>' + document.title + "<br>";

                    alert("your Element Name is : " , elem.tagName, "\n your new content of your Element is :" , elem.textContent);
                    
                    console.log( "\nyour  Element Name is :" + elem.tagName + "\n your new content of your Element is: " + elem.textContent + "\n");
                    
                    document.getElementById('txtarea').innerHTML = "\n your Element Name is :" + elem.tagName  +
                     "\n your new content of your Element is: " + elem.textContent + "\n";

                    var z =prompt("Press (1) to restart the [Get (Access/find) certain element's & change it's content by {page title} value]\n"+
                    " or any other key to Abort!");
                } while (z == "1");
        // =================================================================================================

            } else if (path == "2") {                
                                
                alert("Welcome to [Get (Access/find) certain element's & Change it's content by images Element(s) properties-Attributes]]");                            
                
                do {                    
                                        
                    var uElem = prompt("Enter your parent element's Id Name :  "),
                        elem = document.getElementById(uElem);
                                                            
                    var func = prompt("Press (1) for [adding all images {count} in whole page ]\n "+
                    " Press (2) for [adding one certain image Property] \n "+
                    " Press (3) for [adding All certain image Properties] ");
                    
                    // adding all images {count} in whole page {inside the parent Element}:                    
                    if (func == "1"){

                        elem.innerHTML += '<br>' + document.images.length + "<br>";
    
                        alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                        console.log("\n Your new content of your Element is : " + elem.textContent + "\n");
                        
                        document.getElementById('txtarea').innerHTML +=  "\nyour new content of your Element is : " + elem.textContent + "\n";
    

                    // Adding one certain image Property inside the Parent element: 
                    } else if (func == "2") {                        

                        var x = parseInt(prompt("Enter your Child Element's index to Perform sub-function"))-1,
                            subfunc = prompt("Press (1) for adding {image's source} sub-function \n"+
                            " Press (2) for adding {image's title} sub-function \n "+
                            "Press (3) for adding {image's alt} sub-function ...");   

                        if (subfunc == "1") {

                            elem.innerHTML += '<br>' + document.images[x].src + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + "\n";
                            
                            
                        }   else if (subfunc =="2"){                            
                            
                            elem.innerHTML += '<br>' + document.images[x].title + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\nyour new content of your Element is : " + elem.textContent + "\n";
                        
                        }   else if (subfunc =="3"){
                                                        
                            elem.innerHTML += '<br>' + document.images[x].alt + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + "\n";
                            

                        }   else {
                            alert("Error Entry!");
                        }

                    } else if (func == "3") {

                    // Adding (All) certain image Properties inside the Parent Element:
                        alert("Welcome to display all Images Properties\n your images properties as following :");                                                
                        var strAll = '';
                        for(i=0; i<document.images.length; i++) {
                            
                            strAll += "<br>" + "image number [" + (i+1) + '] properties as following :' + '\n' + ('-'.repeat(15)) + '\n' + 
                            (''.repeat(15)) +  'image source is:\'' + document.images[i].src + '\'' + '\n' +
                            (''.repeat(15)) + 'image title is : [' + document.images[i].title + ']' + '\n' +
                            (''.repeat(15)) + 'image alt is [' + document.images[i].alt + "]" + "\n" ;                                                        
                            
                        }

                        elem.innerHTML +=  "<br>" + strAll + "<br>";

                        alert("your parent element's new Content is  : " , elem.textContent , "\n");
                        
                        console.log("\nyour parent element's new Content is : " + elem.textContent + "\n");
                        
                        document.getElementById("txtarea").innerHTML += "\n your parent element's new Content is : " + elem.textContent + "\n";

                                        
                    } else {

                        alert("Error Entry!");
                    }

                    var z2 = prompt("Press (1) to restart the [Full Path of _{Find only default Elements}]\n or Press any other key to abort!");
                
                } while(z2 =="1");                                                                

            } else if (path == "3") {
                
                alert("Welcome to [Get (Access/find) certain element's + Change it's content by form's Element(s) properties-Attributes]]");                            
                
                do {                    
                                        
                    var uElem = prompt("Enter your parent element's Id Name : "),
                        elem = document.getElementById(uElem);
                                                            
                    var func = prompt("Press (1) for [Adding all Forms {count} in whole page ]\n "+
                    " Press (2) for [adding one certain form Property] \n" +
                    "  Press (3) for [adding All certain Forms Properties] \n" +
                    "  Press (4) for [adding All certain Child 's Properties in certian Form ] ");
                    
                    
                    if (func == "1"){
                                                                        
                        // path 3 / a) Adding all Forms {count} in whole page inside the Parent element:
                        elem.innerHTML += '<br>' + document.forms.length + '<br>';
    
                        alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                        console.log("\nYour new content of your Element is : " + elem.textContent + '\n');
                        
                        document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + '\n';
    

                    } else if (func == "2") {
                        
                        
                        //path 3 / b) adding one certain form Property inside the Parent Element:
                        var x = parseInt(prompt("Enter your Child {FORM} Element's index to Perform sub-function"))-1;

                        var subfunc = prompt("Press (1) for adding {form's (title) Attrtibute-property} sub-function \n",
                            " Press (2) for adding {form's (action) Attrtibute-property} sub-function \n"+
                            " Press (3) for adding {form's (ID)  Attrtibute-property} sub-function \n"+
                            " Press (4) for adding {form's (Class)  Attrtibute-property} sub-function \n"+
                            " Press (5) for adding {form's (target)  Attrtibute-property} sub-function ...");                                                

                        if (subfunc == "1") {
                                                        
                            // path 3 / b1) adding {form's (title) Attrtibute-property} sub-function  :                       
                            elem.innerHTML += 'br' + document.forms[x].title + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + "\n";
                            
                            
                        }   else if (subfunc =="2"){

                            // path 3 / b2) adding {form's (action) Attrtibute-property} sub-function  :                       
                            elem.innerHTML += 'br' + document.forms[x].action + '<br>';

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is  : " + elem.textContent + "\n") ;
                            
                            document.getElementById('txtarea').innerHTML += "\n your new content of your Element is : " + elem.textContent + '\n';
                        
                        }   else if (subfunc =="3"){
                            
                            //path 3/ b3) adding {form's (ID)  Attrtibute-property} sub-function iside the Parent Element:
                            elem.innerHTML += '<br>' + document.forms[x].id + '<br>' ;

                            alert("Your new content of your Element is : " , elem.textContent , "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + '\n';
                            
                        }   else if (subfunc =="4"){
                        
                            //path 3/ b3) adding {form's (Class Name)  Attrtibute-property} sub-function iside the Parent Element:
                            elem.innerHTML += '<br>' + document.forms[x].className + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent + "\n");
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + "\n";
                            
                        }   else if (subfunc =="5"){
                        
                            //path 3/ b3) adding {form's (target)  Attrtibute-property} sub-function iside the Parent Element:
                            elem.innerHTML += '<br>' + document.forms[x].target + "<br>";

                            alert("Your new content of your Element is : " , elem.textContent, "\n") ;
                        
                            console.log("\nYour new content of your Element is : " + elem.textContent + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.textContent + "\n";
                            

                        }   else {
                            alert("Error Entry!");
                        }

                    } else if (func == "3") {                        


                        // path 3 / c) Adding all Forms {properties} in whole page inside the Parent element:
                        alert("Welcome to display all Forms Properties\n your forms properties as following :");                                                
                        var strAll = '';

                        for(i=0; i<document.forms.length; i++) {
                            
                            strAll += '\n' + "form number [" + (i+1) + '] properties as following :' + '\n' + ('-'.repeat(15)) + '\n' + 
                            (''.repeat(15)) + 'form title is: \'' + document.forms[i].title + '\'' + '\n' +
                            (''.repeat(15)) + 'form action is : [' + document.forms[i].action + ']' + '\n' +
                            (''.repeat(15)) + 'form id is : [' + document.forms[i].id + "]" + '\n' +
                            (''.repeat(15)) + 'form class Name is : [' + document.forms[i].className + "]" + '\n' +
                            (''.repeat(15)) + 'form target is : [' + document.forms[i].target + "]" + '\n' ;
                            
                        }

                        elem.innerHTML = '<br>' + strAll;
                        strAll = '';

                        alert("your parent element's new Content is  : " , elem.textContent , "\n" );
                        
                        console.log("\nyour parent element's new Content is :  " + elem.textContent + "\n");
                        
                        document.getElementById("txtarea").innerHTML += "\n your parent element's new Content is : " + elem.textContent + "\n";

                    } else if (func == "4") {                        
                                            
                        // path 3 / d) Adding all Forms {properties} in whole page inside the Parent element: 
                        
                        // there are A problem in this Method & needs  More konwledge [finding the Child element inside the parent {by Object Mode - variables}] >>>>>

                        alert("Welcome to [adding All certain Child 's element Properties of certian parent Form ]"+
                        " \n your forms's input child's properties as following :");                                                
                        
                        //var x = pareseInt(prompt("Enter Child Element's Index number: "))-1;
                        elem.innerHTML += '\n' + "First Form properties as following :" + '\n';

                        var strAll = '',                            
                            form = document.getElementsByTagName('form'),
                            input = document.getElementsByTagName('input');
                            //inputCount = form[0].input.length;
                            //inputV = input.value,

                        for (i=0; i<document.forms.length; i++) {                            
                                strAll += "\nForm Number [" + (i+1) + "] inputs childs as follwoing:\n" ; 
                            
                            for (a = 0 ; a < form[i].input[a].length; a++) {
                                strAll += '\n' + "Input number [" + (a+1) + '] properties as following :' + '<br>' + ('-'.repeat(15)) + '\n' + 
                                (''.repeat(15)) + 'input value is: \'' + input[a].value + '\'' + '\n' +
                                (''.repeat(15)) + 'input name is : [' + input[a].name + ']' + '\n' +
                                (''.repeat(15)) + 'input type is : [' + input[a].type + "]" + '\n' +
                                (''.repeat(15)) + 'input class Name is : [' + input[a].className + "]" + '\n' +
                                (''.repeat(15)) + 'input id is : [' + input[a].id + "]" + "\n";                                      
                                
                            }
                        }
                                                
                        elem.innerHTML += '\n' + strAll;
                        
                        strAll = '';

                        alert("your parent & Child element's new Content is : " , elem.textContent , "\n");
                        
                        console.log("\nyour parent element's new Content is : " + elem.textContent + "\n");
                        
                        document.getElementById("txtarea").innerHTML += "\n your parent element's new Content is :  " + elem.textContent + "\n";
                                        
                    } else {

                        alert("Error Entry!");
                    }

                    var z2 = prompt("Press (1) to restart the [Full Path of _{Find only default Elements}]\n "+
                    "or Press any other key to abort!");
                
                } while(z2 =="1");                                                                


            } else {
                alert("Good Bye!");
            }
        
            var z = prompt("Press (1) to Restart the whole Application \n or press any other key to abort!");
        } while (z=="1");        
    
    }            
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


function test00000() {
 
    var parent = document.getElementById('sec');        
        
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

function display() {
    document.getElementById("SourceCode").innerHTML = test;
}
//==============================================================================

/*
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
*/

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



