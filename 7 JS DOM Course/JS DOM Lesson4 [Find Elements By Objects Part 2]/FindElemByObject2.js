 
/* global document, alert, prompt */                    
/* JSOOP [Find Elements By Object {part2}] */ 
/*template-string-converter.enable;*/

function test() {


    alert("Welcome to {Find Elements By Object part2} application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
        
        do {
            
            alert("Welcome to Find Elements By Object part 2} \n Choose your main Path from below");
            
            var path = prompt("Press(1) to (print) All body element's Text Node inside certain element innerText \n Press(2) to Get (print) All body element's HTML coding Text inside certain element innerText \n Press(3) to Get All [Valid Links] properties in web Page \n Press(4) to search for certain Text in web Page's Elements"); 
            
            if (path == "1") {                
                                                                                                
                alert("Welcome to [(print) All body element's Text Node inside certain element innerText ]");

                do {

                    var uElem = prompt("Enter your element's Id Name "),
                        elem = document.getElementById(uElem);

                    elem.innerText ='<br>' + document.body.innerText + "<br>";

                    alert("your Element Name is : " , elem.tagName, "\n your new content of your Element is :" , elem.innerText);
                    
                    console.log( "\nyour  Element Name is :" + elem.tagName + "\n your new content of your Element is: " + elem.innerText + "\n");
                    
                    document.getElementById('txtarea').innerHTML = "\n your Element Name is :" + elem.tagName  +
                     "\n your new content of your Element is: " + elem.innerText + "\n";

                    var z =prompt("Press (1) to restart the [(print) All body element's Text Node inside certain element innerText] \n"+
                    " or any other key to Abort!");
                } while (z == "1");
        // =================================================================================================

            } else if (path == "2") {                                
                                                
                alert("Welcome to [Get (print) All body element's HTML coding Text inside certain element innerText]");                            
                
                do {                    
                                        
                    var uElem = prompt("Enter your element's Id Name "),
                        elem = document.getElementById(uElem);

                    elem.innerText ='\n' + document.body.innerHTML + "\n";

                    alert("your Element Name is : " , elem.tagName, "\n your new content of your Element is :" , elem.innerText);
                    
                    console.log( "\nyour  Element Name is :" + elem.tagName + "\n your new content of your Element is: " + elem.innerText + "\n");
                    
                    document.getElementById('txtarea').innerHTML = "\n your Element Name is :" + elem.tagName  +
                     "\n your new content of your Element is: " + elem.innerText + "\n";

                    var z =prompt("Press (1) to restart the [(print) All body element's {HTML} coding Text inside certain element innerText] \n"+
                    " or any other key to Abort!");
                
                } while(z2 =="1");                                                                

    // ================================================================================================================        

            } else if (path == "3") {
                                
                alert("Welcome to [Get All [Valid Links] Functions in web Page]");                            
                
                do {                    
                                        
                    var uElem = prompt("Enter your parent element's Id Name : "),
                        elem = document.getElementById(uElem);
                                                            
                    var func = prompt("Press (1) for [Getting all Defined links {count} in whole page] \n Press (2) for [Getting one certain links's one Property] \n Press (3) for [Getting All Defined links's properties] ");
                                        
                    if (func == "1"){                        
                                                                        
                        // path 3 / a) Get All [Valid Links] {count} in whole page inside the Parent element:
                        elem.innerText = '\n' + document.links.length + '\n';
    
                        alert("Your new content of your Element is : " , elem.innerText , "\n");
                        
                        console.log("\nYour new content of your Element is : " + elem.innerText + '\n');
                        
                        document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.innerText + '\n';
    

                    } else if (func == "2") {
                                                
                        // path 3 / b) Get [Getting one certain links's one Property] in whole page inside the Parent element:
                        var x = parseInt(prompt("Enter your {link} Element's index to Perform sub-function"))-1;

                        var subfunc = prompt("Press (1) for Getting {link's (href) Attrtibute-property} sub-function \n",
                            " Press (2) for Getting {link's (title) Attrtibute-property} sub-function \n",
                            " Press (3) for Getting {link's (id) Attrtibute-property} sub-function \n",
                            " Press (4) for Getting {link's (class Name) Attrtibute-property} sub-function \n",
                            " Press (5) for Getting {link's (target) Attrtibute-property} sub-function ...");                                                

                        if (subfunc == "1") {
                                                                                                                
                            // path 3 / b1) Getting {link's (href) Attrtibute-property} sub-function  :                       
                            elem.innerText += '\n' + document.links[x].href + "\n";

                            alert("Your link href is : " , elem.innerText , "\n");
                        
                            console.log("\nYour link href is : : " + elem.innerText + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n Your link href is : : " + elem.innerText + "\n";
                            
                            
                        }   else if (subfunc =="2"){
                            
                            // path 3 / b1) Getting {link's (title) Attrtibute-property} sub-function  :                       
                            elem.innerText += '\n' + document.links[x].title + '\n';

                            alert("Your link title is : " , elem.innerText , "\n");
                        
                            console.log("\nYour link title is : " + elem.innerText + "\n") ;
                            
                            document.getElementById('txtarea').innerHTML += "\n Your link title is : " + elem.innerText + '\n';
                        
                        
                        }   else if (subfunc =="3"){

                            // path 3 / b1) Getting {link's (id) Attrtibute-property} sub-function  :                       
                            
                            elem.innerHTML += '\n' + document.links[x].id + '\n' ;

                            alert("Your link id is : " , elem.innerText , "\n");
                        
                            console.log("\nYour link id is : " + elem.innerText + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your link id is : " + elem.innerText + '\n';
                            
                        }   else if (subfunc =="4"){
                        
                            // path 3 / b1) Getting {link's (Class Name) Attrtibute-property} sub-function  :                       
                            elem.innerText += '\n' + document.links[x].className + "\n";

                            alert("Your link class name is : " , elem.innerText + "\n");
                        
                            console.log("\nYour link class name is : " + elem.innerText + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\nYour link class name is : " + elem.innerText + "\n";
                            
                        }   else if (subfunc =="5"){
                                                    
                            // path 3 / b1) Getting {link's (target) Attrtibute-property} sub-function  :                       
                            elem.innerText += '\n' + document.links[x].target + "\n";

                            alert("Your link target is : " , elem.innerText, "\n") ;
                        
                            console.log("\nYour link target is : " + elem.innerText + "\n");
                            
                            document.getElementById('txtarea').innerHTML +=  "\n Your link target is : : " + elem.innerText + "\n";
                            

                        }   else {
                            alert("Error Entry!");
                        }

                    } else if (func == "3") {                        
                        
                        // path 3 / c) Getting all Links {properties} in whole page inside the Parent element:
                        alert("Welcome to display all Links Properties\n your links properties as following :");                                                
                        var strAll = '';

                        for(i=0; i<document.links.length; i++) {
                            
                            strAll += '\n' + "link number [" + (i+1) + '] properties as following :' + '\n' + ('-'.repeat(15)) + '\n' + 
                            (''.repeat(15)) + 'link hreperReference is: \'' + document.links[i].href + '\'' + '\n' +
                            (''.repeat(15)) + 'link title is : [' + document.links[i].title + ']' + '\n' +
                            (''.repeat(15)) + 'link id is : [' + document.links[i].id + "]" + '\n' +
                            (''.repeat(15)) + 'link class Name is : [' + document.links[i].className + "]" + '\n' +
                            (''.repeat(15)) + 'link target is : [' + document.links[i].target + "]" + ("#".repeat(20)) + '\n' ;
                            
                        }

                        elem.innerText = '\n' + strAll;
                        strAll = '';

                        alert("your parent element's new Content is  : " , elem.innerText , "\n" );
                        
                        console.log("\nyour parent element's new Content is :  " + elem.innerText + "\n");
                        
                        document.getElementById("txtarea").innerHTML += "\n your parent element's new Content is : " + elem.innerText + "\n";                    
                    
                                                                                                        
                    } else {

                        alert("Error Entry!");
                    }

                    var z2 = prompt("Press (1) to restart the [Full Path3 of _{Get All [Valid Links] function in web Page}]\n "+
                    "or Press any other key to abort!");
                
                } while(z2 =="1");                                                                                
            
            } else if (path == "4") {
                                
                alert("Welcome to [search for certain Text in web Page's Elements]");                            
                
                do {                    
                                                            
                    var uElem = prompt("Enter your parent element's Id Name - to put the searching result inside it - : "),
                        elem = document.getElementById(uElem),
                        searchTxt =prompt("Enter your [searching Text] :"),
                        searchRes = '';

                                                            
                    var func = prompt("Choose your Searching (spot- range)\n ",
                    "Press (1) for [in whole page (body Element) ]\n ",
                    " Press (2) for [certain Parent Element]" );                    
                    
                                        
                    if (func == "1"){
                                                                                                
                        // path 4 / a) search for certain Text {with in whole web Page's Elements [body element]} & print the search result inside the Parent element:
                                                                                
                        if (document.body.innerText.indexOf(searchTxt) > -1) {
                            searchRes = 'The Text \'' + searchTxt + '\'  is existeds with in ' + body.tagName;
                            
                        } else {
                            searchRes = 'The Text is Not existed!';
                        }

                        elem.innerText = '\n' + searchRes + '\n';
    
                        alert("Your new content of your Element is : " , elem.innerText , "\n");
                        
                        console.log("\nYour new content of your Element is : " + elem.innerText + '\n');
                        
                        document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.innerText + '\n';
    

                    } else if (func == "2") {                                                
                        // path 4 / b) search for certain Text {with in SPECIFIC web Page's Elements} & print the search result inside the Parent element:
                        
                        do {
                            var elemName = prompt("enter your Element tag Name:"),
                                elemChild = document.getElementsByTagName(elemName),
                                x = parseInt(prompt("Enter your {child} Element's index to Perform searching function with it:"))-1;

                            if (elemChild[x].innerText.indexOf(searchTxt) > -1) {
                                searchRes = 'The Text ' + searchTxt +  ' is existed with in Child element [' + elemChild[x].tagName + ']';
                                
                            } else {
                                searchRes = 'The Text is Not existed!';
                            }

                            elem.innerText = '\n' + searchRes + '\n';

                            alert("Your new content of your Element is : " , elem.innerText , "\n");
                            
                            console.log("\nYour new content of your Element is : " + elem.innerText + '\n');
                            
                            document.getElementById('txtarea').innerHTML +=  "\n your new content of your Element is : " + elem.innerText + '\n';


                            var z3 = prompt("Press (1) to restart [search for certain Text {with in SPECIFIC web Page's Elements}]\n or Press Any other key to Exit this function ... ")

                        } while (z3 == "1");
                        
                                                                                                        
                    } else {

                        alert("Error Entry!");
                    }

                    var z2 = prompt("Press (1) to restart Full path(4) the [search for certain Text in web Page's Elements]\n "+
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



