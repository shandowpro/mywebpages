
/* global document, alert, prompt */                    
/* JSOOP [Get Set element Attributes Values] */ 
/*template-string-converter.enable;*/

function test() {

    alert("Welcome to {Get Set element Attributes Values - Direct Method} application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {
        alert("Good bye!");
        
    } else {
                
        do {            
            
            alert("Welcome to {Get Set element Attributes Values - Direct Method} \n Choose your main {Path} from below");
            
            var path = prompt("Press(1) to {Get - Function} certain element's Attribute's Value [group of Elements] \n " +
            "Press(2) to to {Set-Function} certain element's Attribute's Value [group of Elements]  "); 
            
            if (path == "1") {                
                                
                alert("Welcome to [{Get} certain Element's Attribute's Value Path [group of Elements] ]");
                
                do {                                    

                    var mthd = prompt("Choose your Element to Performe the Get Function on it's Attribute's Value by direct method  \n "+
                    " Press (1) for {div} element \n "+
                    " Press (2) for {img} element \n "+
                    " Press (3) for {link-anchor} element \n "+
                    " Press (4) for {h2} element \n "+
                    " Press (5) for {p} element ");
                    
                    if (mthd == "1") {

                        alert("Welcome to [Get certain Element's Attribute's Value - of [div] Element ]");
                        
                        do {
                            // Div element Attributes values:
                            var elem = document.getElementsByTagName('div'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            alert("your Element[div] Attributes Values as following: ");
                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n");
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";                                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Get [div] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                        
                                        
                    } else if (mthd == "2") {          
                                
                        alert("Welcome to [Get certain Element's Attribute's Value - of [img] Element ]");
                        
                        do {
                            // img element Attributes values:
                            var elem = document.getElementsByTagName('img'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            alert("your Element[img] Attributes Values as following: ");
                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's source Value is : [" + elem[x].src + "]\n" +
                            "Element Attribute's alt Value is : [" + elem[x].alt + "]\n" +
                            "Element Attribute's title Value is : [" + elem[x].title + "]\n");
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's source Value is : [" + elem[x].src + "]\n" +
                            "Element Attribute's alt Value is : [" + elem[x].alt + "]\n" +
                            "Element Attribute's title Value is : [" + elem[x].title + "]\n";                                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Get [img] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                            
                        
                    } else if (mthd == "3") {          
                                
                        alert("Welcome to [Get certain Element's Attribute's Value - of [link- Anchor] Element ]");
                        
                        do {
                            // Anchor-link element Attributes values:
                            var elem = document.getElementsByTagName('a'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            alert("your Element[link - anchor] Attributes Values as following: ");
                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's target Value is : [" + elem[x].target + "]\n" +
                            "Element Attribute's heperReference Value is : [" + elem[x].href + "]\n" );                         
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's target Value is : [" + elem[x].target + "]\n" +
                            "Element Attribute's hyprReference Value is : [" + elem[x].href + "]\n";
                                                    
                            var z0 =prompt("Press (1) to restart the [Get [anchor-link] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                            

                    } else if (mthd == "4") {          
                                
                        alert("Welcome to [Get certain Element's Attribute's Value - of [h2] Element ]");
                        
                        do {
                            // h2 element Attributes values:
                            var elem = document.getElementsByTagName('h2'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            alert("your Element[h2] Attributes Values as following: ");
                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" );
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";
                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Get [h2] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                    
                        
                    } else if (mthd == "5") {          
                                
                        alert("Welcome to [Get certain Element's Attribute's Value - of [p] Element ]");
                        
                        do {
                            // p element Attributes values:
                            var elem = document.getElementsByTagName('p'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            alert("your Element[paragragh] Attributes Values as following: ");
                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" );
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";
                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Get [paragraph] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");                                            

                    } else {
                        alert("Error Entry!");
                    }

                    var z1 = prompt ("Press (1) to restart the [{Get} certain Element's Attribute's Value Path [group of Elements]]\n or any other key to abort!");
                } while (z1=="1");

        // =================================================================================================

            } else if (path == "2") {                                
                                                                
                alert("Welcome to [{Set-Function} certain element's Attribute's value]");                            
                
                do {                                    

                    var mthd = prompt("Choose your Element to Performe the [Set] Function on it's Attribute's Value by direct method  \n "+
                    " Press (1) for {div} element \n "+
                    " Press (2) for {img} element \n "+
                    " Press (3) for {link-anchor} element \n "+
                    " Press (4) for {h2} element \n "+
                    " Press (5) for {p} element ");
                    
                    if (mthd == "1") {

                        alert("Welcome to [Set certain Element's Attribute's Value - of [div] Element ]");
                        
                        do {
                            // Div element Attributes values:
                            var elem = document.getElementsByTagName('div'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            var elemId =  prompt("Enter New Value of id Attribute to be set :"),                            
                                elemClass = prompt("Enter New Value of Class Name Attribute to be set :");

                            // Changing Attribute Vlaues sricpt:                            
                            elem[x].id = elemId;
                            elem[x].className = elemClass;
                            
                            // Displaying Attributes Values after Changing:
                            alert("your Element[div] Attributes Values after Setting as following: ");                            

                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n");
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";                                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Set [div] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                        
                                        
                    } else if (mthd == "2") {          
                                
                        alert("Welcome to [Set certain Element's Attribute's Value - of [img] Element ]");
                        
                        do {
                            // img element Attributes values:
                            var elem = document.getElementsByTagName('img'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                            
                            var elemId =  prompt("Enter New Value of {id Attribute} to be set :"),                            
                                elemClass = prompt("Enter New Value of {Class Name} Attribute to be set :"),
                                elemSrc = prompt("Enter New Value of {Source} Attribute to be set :"),
                                elemAlt = prompt("Enter New Value of {Alt} Attribute to be set :"),
                                elemTitle = prompt("Enter New Value of {Title} Attribute to be set :");

                            // Changing Attribute Vlaues sricpt:                                                        
                            elem[x].id = elemId;
                            elem[x].className = elemClass;
                            elem[x].src = elemSrc;
                            elem[x].alt = elemAlt;
                            elem[x].title = elemTitle;
                            
                            // Displaying Attributes Values after Changing:
                            alert("your Element[img] Attributes Values after Setting as following: ");                            

                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's source Value is : [" + elem[x].src + "]\n" +
                            "Element Attribute's alt Value is : [" + elem[x].alt + "]\n" +
                            "Element Attribute's title Value is : [" + elem[x].title + "]\n");
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's source Value is : [" + elem[x].src + "]\n" +
                            "Element Attribute's alt Value is : [" + elem[x].alt + "]\n" +
                            "Element Attribute's title Value is : [" + elem[x].title + "]\n";                                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Set [img] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                            
                        
                    } else if (mthd == "3") {          
                                
                        alert("Welcome to [Set certain Element's Attribute's Value - of [link- Anchor] Element ]");
                        
                        do {
                            // Anchor-link element Attributes values:
                            var elem = document.getElementsByTagName('a'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            var elemId =  prompt("Enter New Value of id Attribute to be set :"),                            
                                elemClass = prompt("Enter New Value of Class Name Attribute to be set :"),
                                elemTarget = prompt("Enter New Value of Target Attribute to be set :"),
                                elemHref = prompt("Enter New Value of HyperReference Attribute to be set :");


                            // Changing Attribute Vlaues sricpt:                                                        
                            elem[x].id = elemId;
                            elem[x].className = elemClass;
                            elem[x].target = elemTarget;
                            elem[x].href = elemHref;
                            
                            // Displaying Attributes Values after Changing:
                            alert("your Element[anchor - link] Attributes Values after Setting as following: ");                            

                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's target Value is : [" + elem[x].target + "]\n" +
                            "Element Attribute's heperReference Value is : [" + elem[x].href + "]\n" );                         
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" +
                            "Element Attribute's target Value is : [" + elem[x].target + "]\n" +
                            "Element Attribute's hyprReference Value is : [" + elem[x].href + "]\n";
                                                    
                            var z0 =prompt("Press (1) to restart the [Set [anchor-link] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                            

                    } else if (mthd == "4") {          
                                
                        alert("Welcome to [Set certain Element's Attribute's Value - of [h2] Element ]");
                        
                        do {
                            // h2 element Attributes values:
                            var elem = document.getElementsByTagName('h2'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            var elemId =  prompt("Enter New Value of id Attribute to be set :"),                            
                                elemClass = prompt("Enter New Value of Class Name Attribute to be set :");

                            // Changing Attribute Vlaues sricpt:
                            elem[x].id = elemId;
                            elem[x].className = elemClass;
                            
                            // Displaying Attributes Values after Changing:
                            alert("your Element[h2] Attributes Values after Setting as following: ");                            

                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" );
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";
                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Set [h2] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");
                    
                        
                    } else if (mthd == "5") {          
                                
                        alert("Welcome to [Set certain Element's Attribute's Value - of [p] Element ]");
                        
                        do {
                            // p element Attributes values:
                            var elem = document.getElementsByTagName('p'),                            
                                x = parseInt(prompt("Enter your Element's index number"))-1;                                                       
                                    
                            var elemId =  prompt("Enter New Value of id Attribute to be set :"),                            
                                elemClass = prompt("Enter New Value of Class Name Attribute to be set :");
                                
                            // Changing Attribute Vlaues sricpt:
                            elem[x].id = elemId;
                            elem[x].className = elemClass;
                                
                            // Displaying Attributes Values after Changing:
                            alert("your Element[paragraph] Attributes Values after Setting as following: ");                            

                            
                            console.log("Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n" );
                            
                            document.getElementById('txtarea').textContent = "Element Attribute's Id Value is : [" + elem[x].id + "]\n" +
                            "Element Attribute's Class Name Value is : [" + elem[x].className + "]\n";
                            
                                                    
                            var z0 =prompt("Press (1) to restart the [Set [paragraph] Element Attributes Value - of ] \n"+
                            " or any other key to Abort!");
                        } while (z0 == "1");                                            

                    } else {
                        alert("Error Entry!");
                    }

                    var z1 = prompt ("Press (1) to restart the [{Set} certain Element's Attribute's Value Path [group of Elements]]\n or any other key to abort!");
                } while (z1=="1");
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



