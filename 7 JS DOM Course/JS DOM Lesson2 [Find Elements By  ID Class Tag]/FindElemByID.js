
/* global document, alert, prompt */                    
/* JSOOP [Find Elements By ID, TagName, ClassName, QuerrySelector] */ 
/*template-string-converter.enable;*/

// There a problem in Reaching Child inside a parent Element >>> {Need more knwowledge}

function test() {


    alert("Welcome to {Add new Element(s) + Find Elements By ID, Tag Name, Class Name, Querry Selector} application ");

    var w = prompt("Press (1) to Start the application>>>\n Press any other key to Abort>>>");

    if (w!= "1") {

        alert("Good bye!");
        
    } else {


        do {
            
            alert(" There will be Default test Elements {section} in [section Element with ID ='sec' & class='secClass'] ");
            
            var path = prompt("Please Choose your Main Path\n"+
            " Press(1) to Add new Child Elements to default parent element \n "+
            " Press(2) to Get (Access/find) any of web page Elements]\n"+
            " press (3) for get accessed to pre-Defined child elements inside Default Parent Section Element... "); 
            
            if (path == "1") {
                
                                                
                alert("Welcome to [(Add new child Elements) (header, paragraph, div, textarea, h1) to Default Parent Element {section} ]\n Please Choose your Path");

                do {
                                                                        
                    var func = prompt("Press (1) for Adding new header(s) <header> elements\n "+
                    " Press (2) for Adding new <p> paragraph element\n "+
                    "Press (3) for Adding new Div(s) <div> element\n"+
                    "Press (4) for Adding new textArea(s) <textarea> element \n"+
                    "Press (5) for Adding new h1(s) <h1> element");
                    
                    if (func == "1") {

                                                
                        alert("Welcome to [ Adding New Header(s)]\n Please optimize your header Properties");                                    
                                                                        
                        var headerCount = prompt("Enter count of <header> Element you wish to add ");
        
                        for (i=0; i < headerCount; i++) {
                            
                            var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                            
                            var HElem = document.createElement('header');
                                                            
                            var HTxt = document.createTextNode(Txt1);                                    
                            
                            HElem.appendChild(HTxt);    
                            
                            document.getElementById("sec").appendChild(HElem);
                                                                    
                            alert("your <" , HElem.tagName , ">  Number [" + (i+1) + "] has Been Added Succesfully!");
                        }

                        var headerCountN = document.getElementById('sec').getElementsByTagName('header').length;
                        
                        alert("Your Current count of <" + HElem.tagName + "> elements inside the section element =[" , headerCountN, "]");
                                            
                        console.log("Your Current count of <" + HElem.tagName + ">  elements inside the section element =[" + headerCountN + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your Current count of <" + HElem.tagName + "> child elements inside the <section> parent element =[" + headerCountN + "]\n";
                                                                            
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
                                                                    
                            alert("your Header <p> Number [" + (i+1) + "] has Been Added Succesfully!");
                        }

                        var pCountN = document.getElementById('sec').getElementsByTagName('p').length;
                        
                        alert("Your Current count of <" + PElem.tagName + "> elements inside the section element =[" , pCountN , "]");
                                            
                        console.log("Your Current count of <" + PElem.tagName + "> elements inside the section element =[" + pCountN + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your Current count of <" + PElem.tagName + "> child elements inside the <section> parent element =[" + pCountN + "]\n";

                    // =================================================================================================
                    
                                
                    } else if (func == "3")  {
                        
                        alert("Welcome to [ Adding New Div(s) <div>]\n Please optamize your {Div} Properties");
        
                        var divCount = parseInt(prompt("Enter count of <div> Element you wish to add "));
        
                        for (i=0; i < divCount; i++) {
                            
                            var Txt1 = prompt("Enter your Content Text of {div} number [" + (i+1) + "]: ");
                                                                            
                            var divElem = document.createElement('div');
                                                            
                            var divTxt = document.createTextNode(Txt1);                                    
                            
                            divElem.appendChild(divTxt);    
                            
                            document.getElementById("sec").appendChild(divElem);
                                                                    
                            alert("your div(s) <" + divElem.tagName + "> Number [" + (i+1) + "] has Been Added Succesfully!");
                        }                 

                        var divCountN = document.getElementById('sec').getElementsByTagName('div').length;
                        
                        alert("Your Current count of <" + divElem.tagName + "> elements inside the section element =[" , divCountN , "]");
                                            
                        console.log("Your Current count of <" + divElem.tagName + "> elements inside the section element =[" + divCountN + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your Current count of <" + divElem.tagName + "> child elements inside the <section> parent element =" + divCountN + "\n";    
                                        
                    } else if (func == "4")  {
                        
                        alert("Welcome to [ Adding New text area(s) <textarea>]\n Please optamize your {textarea} Properties");
        
                        var textareaCount = parseInt(prompt("Enter count of <textarea> Element you wish to add "));
        
                        for (i=0; i < textareaCount; i++) {
                            
                            var Txt1 = prompt("Enter your Content Text of {textarea} number [" + (i+1) + "]: ");
                                                                            
                            var txtareaElem = document.createElement('textarea');
                                                            
                            var txtareaTxt = document.createTextNode(Txt1);                                    
                            
                            txtareaElem.appendChild(txtareaTxt);    
                            
                            document.getElementById("sec").appendChild(txtareaElem);
                                                                    
                            alert("your text area(s) <" + txtareaElem.tagName + "> Number [" + (i+1) + "] has Been Added Successfully!");
                        }                 

                        var txtareaCountN = document.getElementById('sec').getElementsByTagName('textarea').length;
                        
                        alert("Your Current count of <" + txtareaElem.tagName + "> elements inside the section element =[" , txtareaCountN , "]");
                                            
                        console.log("Your Current count of <" + txtareaElem.tagName + "> elements inside the section element =[" + txta1reaCountN + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your Current count of <" + txtareaElem.tagName + "> child elements inside the <section> parent element =[" + txtareaCountN + "]\n";    
                    
                        
                    } else if (func == "5")  {

                        alert("Welcome to [ Adding New h1(s) <h1>]\n Please optamize your {h1} Properties");
        
                        var h1Count = prompt("Enter count of <h1> Element you wish to add ");
        
                        for (i=0; i < h1Count; i++) {
                            
                            var Txt1 = prompt("Enter your Content Text of {h1} number [" + (i+1) + "]: ");
                                                                            
                            var h1Elem = document.createElement('h1');
                                                            
                            var h1Txt = document.createTextNode(Txt1);                                    
                            
                            h1Elem.appendChild(h1Txt);    
                            
                            document.getElementById("sec").appendChild(h1Elem);
                                                                    
                            alert("your h1(s) <" + h1Elem.tagName + "> Number [" + (i+1) + "] has Been Added Succesfully!");
                        }                 

                        var h1CountN = document.getElementById('sec').getElementsByTagName('h1').length;
                        
                        alert("Your Current count of <" + h1Elem.tagName + "> elements inside the section element =[" , h1CountN , "]");
                                            
                        console.log("Your Current count of <" + h1Elem.tagName + "> elements inside the section element =[" + h1CountN + "]");
                        
                        document.getElementById('txtarea').innerHTML += 
                        "\n Your Current count of <" + h1Elem.tagName + "> child elements inside the <section> parent element =[" + h1CountN + "]\n";    
                        
                    }  else {
                        alert("Error Entry!");
                    }

                    var z =prompt("Press (1) to restart the [Add new Child Elements to default parent element]\n or any other key to Abort!");
                } while (z == "1");
        // =================================================================================================

            } else if (path == "2") {                
                
                alert("Welcome to [(Find default Elements - in the Whole Page Document) By (ID, Tag Name, Class Name, Querry Selector)] + \n" +
                 " Add new element(s) to Default Parent [Section]\n "+
                 " Please Choose your Path from Below...");            

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
                
                do {                    
                                        
                    alert("Default Parent Element [section - id =sec] + [child Elements: {Header, paragraph, textarea, h1, div}] has been Created Sucessfully!");

                    var Mthd = prompt("Press (1) for finding Parent Element by [ID] \n "+
                    " Press (2) for finding Parent Element by [Tag Name]\n "+
                    "Press (3) for finding Parent Element by [Class Name]\n" +
                    "Press (4) for finding Parent Element by [Querry Selector]");
                    
                    // Finding Element {any of given type} by [id] Method inside all Web Page Document:
                    if (Mthd == "1") {                                     
                                                                                                                
                        alert("Welcome to [finding Child elements >> inside Parent Element {section}by [ID]]");

                        var ElemFuncs = prompt("Choose your Sub-function \n"+
                        " Press (1) for [displaying count of child Elements of each types inside all Web Page Document {Section}\n"+ 
                        " Press (2) for [Adding new child Elements] to Parent element {Section}\n "); 

                        if (ElemFuncs == "1") {    
                                                                                                            
                            // This function will not run {due to using ID which has unique value}:                       
                            // {id Method => Will Not Return count (due to there is only [1] id for The Element}:
                            
                            alert("Welcome to [Displaying child element(s) {COUNT} by {id}] inside whole [page Document]");
                            alert("{id Method => Will Not Return count (due to there is only [1] id for The Element}");
                        
                            var UElemId = prompt("Enter user [Id] of your Element to get Its count:");

                            var elemId = document.getElementById(UElemId),
                                userElemCount = elemId.length; 

                            alert("Your element <" , elemId.tagName , "> count [accessed by Id] in whole Page = [" + userElemCount + "]");
                            
                            console.log("Your element <" + elemId.tagName + "> count [accessed by Id] in whole Page = [" + userElemCount + "]");
                            
                            document.getElementById("txtarea").innerHTML +=
                             "\nYour element <" + elemId.tagName + "> count [accessed by Id] in whole Page = [" + userElemCount + "]\n";


                    //=====================================================================================================
                        } else if (ElemFuncs == "2") {
                                                                         
                            alert("Welcome to [Adding new child element(s) to {certain Parent Element accessed by [id]} from the whole [page Document]");
                        
                            var ParUElemId = prompt("Enter user [Id] Name of your parent Element to Add new Child Element(s) inside it:"),
                                ParElemById = document.getElementById(ParUElemId),                    
                                ChildElemName = prompt("Enter your New Child Element's {Tag Name} to Add in to the Parent Element"),// Note that you need to the Tag Name to create And Append it to the Parent Element
                                ChildElem = document.createElement(ChildElemName),
                                ChildUElemT = prompt("Enter your New Element's {Text/Content} to Append it to new Child Element"),
                                ChildElemTxt = document.createTextNode(ChildUElemT);

                            // Appending Text of Child Element:                    
                            ChildElem.appendChild(ChildElemTxt);
                            
                            // Appending Child Element to User Parent Child:
                            ParElemById.appendChild(ChildElem);

                            alert("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully! ");
                            
                            console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully! ");

                            document.getElementById("txtarea").innerHTML +=
                             "Your new child element <" + ChildElem.tagName +
                             "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully!";
                            
                        //=====================================================================================================

                        } else {
                            alert("Error Entry!");
                        }
                            
                                                                
                    // =================================================================================================
                    // =================================================================================================
                    
                    } else if (Mthd == "2")  {                    

                        // Finding Element by [Tag Name] Method: 
                        alert("Welcome to Element-finding by {Tag Name}, the Parent element will be accessed by {Tag Name}");                    
                        
                        var ElemFuncs = prompt("Choose your Sub-function \n"+
                        " Press (1) for [displaying count of child Elements nay each types inside whole web Page \n"+ 
                        " Press (2) for [Adding new child Elements] to Parent element {Section- with id ='sec'}\n "); 

                        if (ElemFuncs == "1") {                            
                                                                                    
                            alert("Welcome to [Displaying child element(s) {COUNT} by {Tag Name}] inside whole [page Document] function ...");
                        
                            var UElemId = prompt("Enter [Tag Name] of your child Element to get Its count:");

                            var Elem = document.getElementsByTagName(UElemId),
                                x = parseInt(prompt("Enter the count of you element :"))-1,
                                userElemCount = Elem.length;

                            alert("Your element <" , Elem[x].tagName , "> count [accessed by Tag Name] = [" + userElemCount + "]");
                            
                            console.log("Your element <" + Elem[x].tagName + "> count [accessed by Tag Name] = [" + userElemCount + "]");
                            
                            document.getElementById("txtarea").innerHTML +=
                             "\nYour element <" + Elem[x].tagName +
                              "> count [accessed by Tag Name] = [" + userElemCount + "]\n";


                    //=====================================================================================================
                        } else if (ElemFuncs == "2") {
                                                                            
                            alert("Welcome to [Adding new child element(s) to certain Parent Element accessed by [Tag Name] from the whole [page Document]");
                        
                            var ParUElemId = prompt("Enter parent Element's [Tag Name] to Add new Child Elements inside it:"),
                                ParElemById = document.getElementsByTagName(ParUElemId),                    
                                ChildElemName = prompt("Enter your New Child Element's {Tag Name} to Create & Add in to the Parent Element"),
                                ChildElem = document.createElement(ChildElemName),
                                ChildUElemT = prompt("Enter your New child Element's {Text/Content} to Append it to Child Element"),
                                ChildElemTxt = document.createTextNode(ChildUElemT);

                            // Appending Text of Child Element:                    
                            ChildElem.appendChild(ChildElemTxt);
                            
                            // Appending Child Element to User Parent Child:
                            ParElemById.appendChild(ChildElem);

                            alert("Your new child element <" , ChildElem.tagName , "> has been Added to user Parent Element <" , ParElemById.tagName , "> Successfully!");
                            
                            console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully!");

                            document.getElementById("txtarea").innerHTML +=
                             "Your new child element <" + ChildElem.tagName +
                             "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully!";
                                                    
                        //=====================================================================================================

                        } else {
                            alert("Error Entry!");
                        }
                        
                    // =================================================================================================
                                    
                    } else if (Mthd == "3")  {                    
                                                                                
                        // Class Name Method :
                        alert("Welcome to Element-finding by {Class Name}, the Child element's Class Name will be accessed by");                    

                        // Choosing sub Function to executed on Element {which accessed by Class Name} :
                        var ElemFuncs = prompt("Choose your Sub-function \n"+
                        " Press (1) for [displaying count of child Elements of certain type with in the whole weg page\n"+ 
                        " Press (2) for [Adding new child Elements] to Parent element {Section}\n "); 

                        if (ElemFuncs == "1") {                                                    
                            
                            alert("Welcome to [Displaying child element(s) {COUNT} by {Class Name}] inside whole [page Document]");
                        
                            var UElemId = prompt("Enter user [Class Name] of your Element to get Its count:");

                            var Elem = document.getElementsByClassName(UElemId),
                                x = parseInt(prompt("Enter your child element's index Nubmer"))-1,
                                userElemCount = Elem.length;

                            alert("Your element <" + Elem[x].tagName + "> count [accessed by Class Name] = [" + userElemCount + "]");
                            
                            console.log("Your element <" + Elem[x].tagName + "> count [accessed by Class Name] = [" + userElemCount + "]");
                            
                            document.getElementById("txtarea").innerHTML +=
                             "\nYour element <" + Elem[x].tagName + "> count [accessed by Class Name] = [" + userElemCount + "]\n";


                    //=====================================================================================================
                        } else if (ElemFuncs == "2") {
                                                                                
                            alert("Welcome to [Adding new child element(s) to certain Parent Element {section with id ='sec'} accessed by [Class Name] from the whole [page Document]");
                        
                            var ParUElemId = prompt("Enter user Parent Element's [Class Name] to Add new Elements inside it:"),
                                ParElemById = document.getElementsByClassName(ParUElemId),                    
                                ChildElemName = prompt("Enter your New Child Element's {Class Name} to Add in to the Parent Element"),
                                ChildElem = document.createElement(ChildElemName),
                                ChildUElemT = prompt("Enter your New Element's {Text/Content} to Append it to Child Element"),
                                ChildElemTxt = document.createTextNode(ChildUElemT);

                            // Appending Text of Child Element:                    
                            ChildElem.appendChild(ChildElemTxt);
                            
                            // Appending Child Element to User Parent Child {Section}:
                            ParElemById.appendChild(ChildElem);

                            alert("Your new child element <" , ChildElem.tagName , "> has been Added to user Parent Element <" , ParElemById.tagName , "> Successfully! ");
                            
                            console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully! ");
                                                    
                            document.getElementById("txtarea").innerHTML +=
                             "Your new child element <" + ChildElem.tagName +
                             "> has been Added to user Parent Element <" + ParElemById.tagName + "> Successfully!";
                        //=====================================================================================================

                        } else {
                            alert("Error Entry!");
                        }
                    // =================================================================================================
                    } else if (Mthd == "4")  {                                        
                        // querry Selector Main Function:
                        alert("Welcome to Element-finding by {querry Selector}, the Child element will be accessed by {Querry Selector} ");                    
                        
                        // Choosing sub Function to executed on Element {which accessed by Querry Selector (different Methods for each sub-Function)} :
                        var ElemFuncs = prompt("Choose your Sub-function \n"+
                        " Press (1) for [displaying count of child Elements of certain type inside Whole web Page {with all querry Seclector sub-method} \n"+ 
                        " Press (2) for [Adding new child Elements] inside the Parent element {Section} {with all querry Seclector sub-method} "); 

                        if (ElemFuncs == "1") {
                                                                                                                            
                            // querry Selector - id sub Method - {get Count Function} :
                            alert("Welcome to [Displaying child element(s) {COUNT} by {Querry Selector}] inside whole [page Document]");
                                                
                            var countPropMthd = prompt("Choose your Element's Querry Selector - accessing Mehtod to get count from below \n "+
                            "  Press (1) to access by {querry Selector - Element id} ...\n "+
                            " Press (2) to access by {querry Selector - Element(s)'s Class Name}... \n "+
                            "Press (3) to access by {querry Selector - Element(s)'s Tag Name}...  "); 
                            
                            if (countPropMthd == "1") {                                                                
                                                                
                                // A) Count Function / 1) Querry selector - (Id) sub Method:
                                // Due to using Querry Selector - id Method {There is only one element has one [id]}:
                                var UElemId = prompt("Enter Element's [[Id Name]] to access by {querry Selector Method } through the {Whole Document} to get Its count :");
        
                                var ElemId = document.querySelectorAll("#" + UElemId),
                                    x = parseInt(prompt("Enter your Element index"))-1,
                                    userElemCount = ElemId.length;
        
                                alert("Your element <" , ElemId.tagName , "> count [accessed by Querry Selector - Id Mehtod] = [" , userElemCount , "]");
                                
                                console.log("Your element <" + ElemId.tagName + "> count [accessed by Querry Selector - Id Method] = [" + userElemCount + "]");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\nYour element <" + ElemId.tagName + "> count [accessed by Querry Selector - Id Method] = [" + userElemCount + "]\n";
                                                                
                            } else if (countPropMthd == "2") {
                                
                                // A) Count Function / 2) Querry selector - (Class) sub Method:
                                var UElemClass = prompt("Enter Element's [[Class Name]] to access by {querry Selector Method-Class } \n "+
                                " through the {Whole Document} to get Its count :");                                        

                                var ElemClass = document.querySelectorAll("." + UElemClass),
                                    x  = parseInt(prompt("Enter your Element index to get it's Count"))-1,
                                    userElemCount = ElemClass[x].length;
        
                                alert("Your element <" , ElemClass[x].tagName , "> count [accessed by Querry Selector - Class Name Mehtod] = [" , userElemCount , "]");
                                
                                console.log("Your element <" + ElemClass[x].tagName + "> count [accessed by Querry Selector - Class Name Method] = [" + userElemCount + "]");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\nYour element <" + ElemClass[x].tagName + "> count [accessed by Querry Selector - Class Name Method] = [" + userElemCount + "]\n";
                                
                                
                            } else if (countPropMthd == "3") {
                                
                                // A) Count Function / 3) Querry selector - (Tag Name) sub Method:
                                var UElemTagN = prompt("Enter Element's [[Tag Name]] to access by {querry Selector - Tag Name Method } through the {Whole Document} to get Its count :");
        
                                var ElemTagN = document.querySelectorAll(UElemTagN),
                                    x = parseInt(prompt("Enter your Element index number:"))-1,
                                    userElemCount = ElemTagN[x].length;
        
                                alert("Your element <" , ElemTagN[x].tagName , "> count [accessed by Querry Selector - Tag Name Mehtod] = [" , userElemCount , "]");
                                
                                console.log("Your element <" + ElemTagN[x].tagName + "> count [accessed by Querry Selector - Tag Name Mehtod] = [" + userElemCount + "]");
                                
                                document.getElementById("txtarea").innerHTML +=
                                 "\n Your element <" + ElemTagN[x].tagName + "> count [accessed by Querry Selector - Tag Name Mehtod] = [" + userElemCount + "]\n";
                                                            
                            } else {
                                alert("Error Entry!");
                            }

                        //=====================================================================================================
                        } else if (ElemFuncs == "2") {                        
                                
                            // B) Adding New element(s) function - Querry Selector Method :
                            alert("Welcome to [Adding new child element(s) to certain Parent Element {Section} ", 
                            "accessed by [querry Selector] from the whole [page Document]");
                        
                            var addPropMthd = prompt("Choose your method to add new property to the parent Element{Section}\n "+
                             " Press (1) to add by {Element id}...\n "+
                             " Press (2) to add by {Element(s)'s Class Name}... \n" +
                             " Press (3) to add by {Element Tag Name}... ");
                            
                            // Choosing {Querry Selector - Sub Method} -  Adding Function: 
                            if (addPropMthd == "1") {
                                                                
                                // B) Adding New element(s) Function / 1) Querry selector - (Id) sub Method:
                                alert("Welcome to Add new Child Element , to defualt Parent Element {section} {Accessed by querry Selector - Id} ");
                                
                                var ParUElemId = prompt("Enter Parent Element's [ID Name] to Add new Child Elements inside it:"),
                                    ParElemById = document.querySelectorAll("#" + ParUElemId),                    
                                    ChildElemName = prompt("Enter your New Child Element's {Tag Name Type} to create & Add in to the Parent Element"),
                                    ChildElem = document.createElement(ChildElemName),
                                    ChildUElemT = prompt("Enter your New Element's {Text/Content} to Append it to new Child Element"),
                                    ChildElemTxt = document.createTextNode(ChildUElemT);

                                // Appending Text of Child Element:                    
                                ChildElem.appendChild(ChildElemTxt);
                                
                                // Appending Child Element to User Parent Child {Section with id = 'sec'}:
                                ParElemById.appendChild(ChildElem);

                                alert("Your new child element <" , ChildElem.tagName , "> has been Added to user Parent Element <" , ParElemById.tagName , "> (accessed by querry Selector - Id Method) {Section} Successfully!");
                                
                                console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> (accessed by querry Selector - Id Method) {Section} Successfully!");
    
                                document.getElementById('txtarea').innerHTML +=
                                 "Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName + "> (accessed by querry Selector - Id Method) {Section} Successfully!";
                                                        
                            } else if (addPropMthd =="2") {                                                    

                                // B) Adding New element(s) Function / 2) Querry selector - (Class Name) sub Method:
                                alert("Welcome to Add new Child Element , to defualt Parent Element {section} {Accessed by querry Selector - Class Name} ");

                                var ParUElemId = prompt("Enter user [Class Name] of your parent Element to Add new Elements inside it:"),  
                                    ParElemById = document.querySelectorAll("." + ParUElemId),                    
                                    ChildElemName = prompt("Enter your New Child Element's {Tag Name} to create & Add in to the Parent Element"),
                                    ChildElem = document.createElement(ChildElemName),
                                    ChildUElemT = prompt("Enter your New Child Element's {Text/Content} to Append it to Child Element"),
                                    ChildElemTxt = document.createTextNode(ChildUElemT);

                                // Appending Text of Child Element:                    
                                ChildElem.appendChild(ChildElemTxt);
                                
                                // Appending Child Element to User Parent Child {Section}:
                                ParElemById.appendChild(ChildElem);

                                alert("Your new child element <" , ChildElem.tagName , "> has been Added to user Parent Element <" , ParElemById.tagName ,
                                 ">  (accessed by querry Selector - Class name Method) {Section} Successfully!");
                                
                                console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName +
                                ">  (accessed by querry Selector - Class name Method) {Section} Successfully!");                        
                                
                                document.getElementById('txtarea').innerHTML +=
                                 "Your new child element <" + ChildElem.tagName +
                                 "> has been Added to user Parent Element <" + ParElemById.tagName +
                                ">  (accessed by querry Selector - Class name Method) {Section} Successfully!";                        
                                                    
                            } else if (addPropMthd =="3") {                        

                            // B) Adding New element(s) Function / 3) Querry selector - (Tag Name) sub Method:
                            
                                var ParUElemId = prompt("Enter user [Tag Name] of your Parent Element to Add new Elements inside it:"),  
                                    ParElemById = document.querySelectorAll(ParUElemId),                    
                                    ChildElemName = prompt("Enter your New Child Element's {Tag Name} to Add in to the Parent Element"),
                                    ChildElem = document.createElement(ChildElemName),
                                    ChildUElemT = prompt("Enter your New Element's {Text/Content} to Append it to Child Element"),
                                    ChildElemTxt = document.createTextNode(ChildUElemT);

                                // Appending Text of Child Element:                    
                                ChildElem.appendChild(ChildElemTxt);
                                
                                // Appending Child Element to User Parent Child {Section}:
                                ParElemById.appendChild(ChildElem);

                                alert("Your new child element <" , ChildElem.tagName , "> has been Added to user Parent Element <" , ParElemById.tagName ,
                                 "> (accessed by querry Selector - Tag name Method) {Section} Successfully!");
                                
                                console.log("Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" + ParElemById.tagName +
                                "> (accessed by querry Selector - Tag name Method) {Section} Successfully!");                        
                                
                                document.getElementById('txtarea').innerHTML +=
                                 "Your new child element <" + ChildElem.tagName + "> has been Added to user Parent Element <" +
                                  ParElemById.tagName + "> (accessed by querry Selector - Tag name Method) {Section} Successfully!";                        

                            } else {
                                alert("Error Entry!");
                            }

                        //=====================================================================================================

                        } else {
                            alert("Error Entry!");
                        }
                    //=====================================================================================================
                    } else {                    
                        alert("Error Entry!");
                    }
                        
                    var z2 = prompt("Press (1) to restart the [Full Path of _{Find only default Elements}]\n or Press any other key to abort!");
                
                } while(z2 =="1");                                                                

            } else if (path == "3") {
                
                // Third Path :
                alert("Welcome to [get accessed to pre-Defined (Specifc child elements) inside Default Parent Section Element]\n",
                "Defined child Elments as following:");
                                                
                // Child Elements information:                
                alert("child Elements [to find]'s (Class , id, Tag Name) As following\n" +
                "<header> => id='headerId' class='headerClass' \n"+
                "<p> => id='pId' class='pClass' \n"+
                "<div> => id='divId' class='divClass' \n"+
                "<textarea> => id='txtId' class='txtClass' \n"+
                "<h1> => id='h1Id' class='h1Class' \n");
                
                // choosing [Accessing Methods]:
                var accMthd = prompt("Choose your Accessing Method to Child Elements \n"+
                " Press (1) for acceess {by [Id] Method} \n"+                
                " Press (2) for acceess {by [Class Name] Method} \n"+ 
                " Press (3) for acceess {by [Tag Name] Method} \n"+
                " Press (4) for acceess {by [Querry Selector] Method}");
                
                if (accMthd == "1") {
                                                                            
                    // Accessing Child Element by it's ID Method:
                    
                    alert("Welcome to [Accessing to Child Element by it's [id] ]");

                    var func = prompt("Choose your functions to Perform from Below \n" +
                     "Press (1) => Get the Element's Count in the page\n" +
                     "Press (2) => Edit the Element's Content/Text\n" +
                     "Press (3) => Display the Element in the page");

                    if (func == "1") {                        
                                                                                                
                        alert("Welcome to [Get the Child Element's Count] - Accessed by [id]");
                        
                        var elemId = prompt("Enter your element's ID"),
                            elem = document.getElementById(elemId),
                            elemCount = elem.length;

                        alert("your element's Name is <" , elem.tagName , ">\n its count = [" , elemCount , "]");
                        
                        console.log("your element's Name is <" + elem.tagName + ">\n Element count = <" + elemCount + ">");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Element's Name is <" + elem.tagName + "> \n Element count = [" + elemCount + "]\n";
                                                    
                    } else if (func == "2") {                                            
                        
                        alert("Welcome to [Editing the Child Element's Text/content] - Accessed By [Id]");
                        
                        var elemId = prompt("Enter your element ID"),
                            elem = document.getElementById(elemId),
                            txt = prompt("Enter your new Text of your element");
                            //elemTxt = document.createTextNode(txt);

                        elem.innerHTML = txt;
                        
                        //elem.appendChild(elemTxt);

                                                                                            
                        alert("your element with Name  [" , elem.tagName , "] has changed it's content with = [" , elem.textContent , "]");
                        
                        console.log("your element with Name  [" + elem.tagName + "] has changed it's content with = [" + elem.innerHTML + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n your element with Name  [" + elem.tagName +
                          "] has changed it's content with = [" + elem.textContent + "]\n";


                    } else if (func == "3") {                        
                        alert("Welcome to [Displaying Element] - Accessed by [id]");
                        
                        var elemId = prompt("Enter your element ID"),
                            elem = document.getElementById(elemId);
                            //elemTxt = elem.textContent, // This code need for Assuring??
                            //elemCount = elem.length;

                        alert("your element's Name is [" , elem.tagName , "]\n with Content  = [" ,elem.TEXT_NODE, "]\n with count [" ,elem.length , "]");
                        
                        console.log("your element's Name is [" + elem.tagName + "]\n with Content  = [" + elem.TEXT_NODE + "]\n with count [" + elem.length + "]");                        
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your element's Name is [" + elem.tagName +
                          "]\n with Content  = [" + elem.TEXT_NODE + "]\n with count [" + elemCount + "]\n";

                    } else {
                        alert("Error Enrty!");
                    }
                                        
                } else if (accMthd =="2") {
                    
                    // Accessing Child Element by it's {Class Name Method}:

                    alert("Welcome to [Accessing to Child Element by it's [Class Name] ]");
                    
                    var func = prompt("Choose your functions to Perform from Below \n" +
                     "Press (1) => Get the child Element's Count in the page\n" +
                     "Press (2) => Edit the Child Element's Content/Text\n" +
                     "Press (3) => Display the Child Element in the page");

                    if (func == "1") {                        
                                                                                                
                        alert("Welcome to [Get the Child Element's Count] - Accessed by [Class Name]");
                        
                        var elemClass = prompt("Enter your Child Element Class Name"),
                            elem = document.getElementsByClassName(elemClass),
                            x = parseInt(prompt("Enter your Element index"))-1,
                            elemCount = elem[x].length;

                        alert("your Child element's Name is [" , elem[x].tagName , "]\n its count = [" , elemCount , "]");
                        
                        console.log("your Child element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Element's Name is [" + elem[x].tagName +
                          "]\n Element count = [" + elemCount + "]\n";
                                                    
                    } else if (func == "2") {                    
                                                
                        alert("Welcome to [Editing the Child Element's Text/content] - Accessed By [Class Name]");
                        
                        var elemClass = prompt("Enter your Child element Class Name"),
                            elem = document.getElementsByClassName(elemClass),
                            x = parseInt(prompt("Enter your Child Element index Number"))-1,
                            txt = prompt("Enter your new Text of your element");
                            //elemTxt = document.createTextNode(txt);

                        elem[x].innerHTML = txt;

                        //elem.appendChild(elemTxt);
                                                                        
                        
                        alert("your element with Name  [" , elem[x] , "] has changed it's content with = [" , txt , "]");
                        
                        console.log("your element with Name  [" + elem[x] + "] has changed it's content with = [" + txt + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n your element with Name  [" + elem[x] +
                          "] has changed it's content with = [" + txt + "]\n";


                    } else if (func == "3") {                    
                                                    
                        alert("Welcome to [Displaying Element] - Accessed by [Class Name]");
                        
                        var elemClass = prompt("Enter your Child element Class Name"),
                            elem = document.getElementsByClassName(elemClass),
                            x = parseInt(prompt("Enter your Child Element index Number"))-1,
                            elemTxt = elem[x].textContent,
                            elemCount = elem[x].length;

                        alert("your element's Name is [" , elem[x].tagName , "]\n with Content  = [" ,elemTxt, "]\n with count [" ,elemCount , "]");
                        
                        console.log("your element's Name is [" + elem[x].tagName + "]\n with Content  = [" +
                         elemTxt + "]\n with count [" + elemCount + "]");                        
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your element's Name is [" + elem[x].tagName +
                          "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]\n";

                    } else {
                        alert("Error Enrty!");
                    }

                //==============================================================================
                //==============================================================================
                } else if (accMthd =="3") {
                
                    // Accessing Child Element by it's Tag Name Method:

                    alert("Welcome to [Accessing to Child Element by it's [Tag Name] ]");
                    
                    var func = prompt("Choose your functions to Perform from Below \n" +
                     "Press (1) => Get the Element's Count in the page\n" +
                     "Press (2) => Edit the Element's Content/Text\n" +
                     "Press (3) => Display the Element in the page");


                    if (func == "1") {                                                
                                                
                        alert("Welcome to [Get the Element's Count] - Accessed by [Tag Name]");
                        
                        var elemTag = prompt("Enter your Child element Tag Name"),
                            x = parseInt(prompt("Enter your Child Element index"))-1,
                            elem = document.getElementsByTagName(elemTag),
                            elemCount = elem[x].length;

                        alert("your element's Name is [" , elem[x].tagName , "]\n its count = [" ,elemCount, "]");
                        
                        console.log("your element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]\n";
                                                    
                    } else if (func == "2") {                    
                                                                        
                        alert("Welcome to [Editing the Element's Text/content] - Accessed By [Tag Name]");
                        
                        var elemTag = prompt("Enter your Child element's Tag Name"),
                            elem = document.getElementsByTagName(elemTag),
                            x = parseInt(prompt("Enter your child Element index nubmer"))-1,
                            txt = prompt("Enter your new Text of your Child element");
                            //elemTxt = document.createTextNode(txt);

                        //elem.appendChild(elemTxt);
                        // Changing Element's Text:
                        elem[x].innerHTML = txt;                                                                        
                        
                        alert("your element with Name  [" , elem[x].tagName , "] has changed it's content with = [" , elem[x].textContent , "]");
                        
                        console.log("your element with Name  [" + elem[x].tagName + "] has changed it's content with = [" + elem[x].textContent + "]");
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n your element with Name  [" + elem[x].tagName + "] has changed it's content with = [" + elem[x].textContent + "]\n";


                    } else if (func == "3") {                        

                        alert("Welcome to [Displaying Element] - Accessed by [Tag Name]");
                        
                        var ElemTagN = prompt("Enter your element Tag Name"),
                            elem = document.getElementsByTagName(ElemTagN),
                            x = parseInt(prompt("Enter your Element index number"))-1,
                            elemTxt = elem[x].textContent,
                            elemCount = elem[x].length;

                        alert("your element's Name is [" , elem[x].tagName , "]\n with Content  = [" ,elemTxt, "]\n with count [" ,elemCount , "]");
                        
                        console.log("your element's Name is [" + elem[x].tagName + "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]");                        
                        
                        document.getElementById('txtarea').innerHTML +=
                         "\n Your element's Name is [" + elem[x].tagName +
                          "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]\n";

                    } else {
                        alert("Error Enrty!");
                    }
                                        
                //==============================================================================
                //==============================================================================                    
                } else if (accMthd =="4") {

                    // Accessing Child Element by it's Querry Selector Method:

                    alert("Welcome to [Accessing to Child Element by it's [Querry Selector] ]");
                    
                    var func = prompt("Choose your functions to Perform from Below \n" +
                     "Press (1) => Get the Element's Count in the page\n" +
                     "Press (2) => Edit the Element's Content/Text\n" +
                     "Press (3) => Display the Element in the page");


                    if (func == "1") {             
                                                           
                        // first Function [Get the Element's Count] with 4th Method [Querry Selector - (3 Sub methods)] :
                        
                        alert("Welcome to [Get the Element's Count] - Accessed by [Querry Selector]");
                        
                        var subMthd = prompt("Choose Querry Selector Sub Method \n "+
                        "(1) for [Querry Selector - Id Sub Method]... \n" +
                        "(2) for [Querry Selector - Class Name Sub Method].. \n "+
                        "(3) for [Querry Selector - Tag Name Sub Method]..");

                        
                        if (subMthd == "1") {                            
                            
                            // A) Get Element Count / 1) Querry Selector - Id sub Method:
                        
                            var elemId = prompt("Enter your element Id:"),
                            //x = parseInt(prompt("Enter your Element index"))-1,
                                elem = document.querySelectorAll("#" + elemId),                                                        
                                elemCount = elem.length;

                            alert("your element's Name is [" , elem.tagName , "]\n its count = [" ,elemCount, "]");
                            
                            console.log("your element's Name is [" + elem.tagName + "]\n Element count = [" + elemCount + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Element's Name is [" + elem.tagName + "]\n Element count = [" + elemCount + "]\n";    
                            
                            
                        } else if (subMthd == "2"){

                            // A) Get Element Count / 2) Querry Selector - Class Name sub Method:                            
                        
                            var elemClass = prompt("Enter your element Class Name:"),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                elem = document.querySelectorAll("." + elemClass),                                                        
                                elemCount = elem[x].length;

                            alert("your element's Name is [" , elem[x].tagName , "]\n its count = [" ,elemCount, "]");
                            
                            console.log("your element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]\n";    
                                                        
                        } else if (subMthd == "3"){
                            // A) Get Element Count / 3) Querry Selector - Tag Name sub Method:                                                        
                            
                            var elemTag = prompt("Enter your element Tag Name:"),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                elem = document.querySelectorAll(elemTag),                                                        
                                elemCount = elem[x].length;

                            alert("your element's Name is [" , elem[x].tagName , "]\n its count = [" ,elemCount, "]");
                            
                            console.log("your element's Name is [" + elem[x].tagName + "]\n Element count = [" + elemCount + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Element's Name is [" + elem[x].tagName +
                              "]\n Element count = [" + elemCount + "]\n";    
                                                        

                        } else {
                            alert("Error Entry!");
                        }
                        
                    // ======================================================================================================
                    } else if (func == "2") {                    
                        // Second Function [Edit the Element's Content/Text] - 4th Method [Querry Selector - (3 Sub-methods)]:
                        var subMthd = prompt("Choose Querry Selector Sub Method \n "+
                        "(1) for [Querry Selector - Id Sub Method]... \n" +
                        "(2) for [Querry Selector - Class Name Sub Method].. \n "+
                        "(3) for [Querry Selector - Tag Name Sub Method]..");

                        
                        if (subMthd == "1") {

                            // B) Edit element's Content/text / 1) Querry Selector - Id sub Method:

                            alert("Welcome to [Editing the Element's Text/content] - Accessed By [querry Selector - Id]");
                        
                            //  We dont Need Index(x) {because we are using [id] Method}:
                            
                            var elemId = prompt("Enter your element Id"),
                                elem = document.querySelectorAll("#" + elemId),
                                //x = parseInt(prompt("Enter your Element index"))-1,
                                txt = prompt("Enter your new Text of your element");
                                //elemTxt = document.createTextNode(txt);
    
                            elem.innerHTML = txt;
                                                                            
                            
                            alert("your element with Name  [" , elem , "] has changed it's content with = [" , txt , "]");
                            
                            console.log("your element with Name  [" + elem + "] has changed it's content with = [" + txt + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n your element with Name  [" + elem +
                              "] has changed it's content with = [" + txt + "]\n";    
                            
                        } else if (subMthd == "2"){

                            // B) Edit element's Content/text / 2) Querry Selector - Class Name sub Method:                            

                            alert("Welcome to [Editing the Element's Text/content] - Accessed By [querry Selector - Class Name]");
                        
                            var elemClass = prompt("Enter your element Class Name"),
                                elem = document.querySelectorAll("." + elemClass),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                txt = prompt("Enter your new Text of your element");
                                //elemTxt = document.createTextNode(txt);
    
                            elem[x].innerHTML = txt;
                                                                            
                            
                            alert("your element with Name  [" , elem[x] , "] has changed it's content with = [" , txt , "]");
                            
                            console.log("your element with Name  [" + elem[x] + "] has changed it's content with = [" + txt + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n your element with Name  [" + elem[x] + "] has changed it's content with = [" + txt + "]\n";    

                                                        
                        } else if (subMthd == "3"){                            
                            
                            // B) Edit element's Content/text / 3) Querry Selector - Tag Name sub Method:
                            
                            alert("Welcome to [Editing the Element's Text/content] - Accessed By [querry Selector - Tag Name]");
                        
                            var elemTag = prompt("Enter your element Tag Name"),
                                elem = document.querySelectorAll(elemTag),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                txt = prompt("Enter your new Text of your Child element");
                                //elemTxt = document.createTextNode(txt);
    
                            elem[x].innerHTML = txt;
                                                                            
                            
                            alert("your element with Name  [" , elem[x] , "] has changed it's content with = [" , txt , "]");
                            
                            console.log("your element with Name  [" + elem[x] + "] has changed it's content with = [" + txt + "]");
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n your element with Name  [" + elem[x] +
                              "] has changed it's content with = [" + txt + "]\n";    
                                                    
                                                        
                        } else {
                            alert("Error Entry!");
                        }
                        
                    // ======================================================================================================

                    } else if (func == "3") {                        

                        // C / [Displaying Child element Function] with 4th Method [Querry Selector - (3 Sub methods)] :
                                                                                            
                        alert("Welcome to [Displaying child Element Function] - Accessed by [Querry Selector - (3) sub methods]");
                        
                        var subMthd = prompt("Choose Querry Selector Sub Method \n "+
                        "(1) for [Querry Selector - Id Sub Method]... \n" +
                        "(2) for [Querry Selector - Class Name Sub Method].. \n "+
                        "(3) for [Querry Selector - Tag Name Sub Method]..");

                        
                        if (subMthd == "1") {
                            // C) Displaying Child element / 1) Querry Selector - Id sub Method:
                        
                            // We dont need to use Element's index(x) {because of using [id]}:
                            var elemId = prompt("Enter your element Id to Display:"),
                                elem = document.querySelectorAll("#" + elemId),
                                //x = parseInt(prompt("Enter your Element index"))-1,
                                elemTxt = elem.textContent,
                                elemCount = elem.length;

                            alert("your element's Name is [" , elem , "]\n with Content  = [" ,elemTxt, "]\n with count [" ,elemCount , "]");
                            
                            console.log("your element's Name is [" + elem + "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]");                        
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Your element's Name is [" + elem +
                              "]\n with Content  = [" + elemTxt +
                               "]\n with count [" + elemCount + "]\n";
                            
                        } else if (subMthd == "2"){
                            
                            // C) Displaying child Element / 2) Querry Selector - Class Name sub Method:                            
                            
                            var elemClass = prompt("Enter your element Class Name"),
                                elem = document.querySelectorAll("." + elemClass),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                elemTxt = elem[x].textContent,
                                elemCount = elem[x].length;

                            alert("your element's Name is [" , elem[x] , "]\n with Content  = [" ,elemTxt, "]\n with count [" ,elemCount , "]");
                            
                            console.log("your element's Name is [" + elem[x] + "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]");                        
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Your element's Name is [" + elem[x] +
                              "]\n with Content  = [" + elemTxt +
                               "]\n with count [" + elemCount + "]\n";
                                                    
                            
                        } else if (subMthd == "3"){

                            // C) Displaying child Element / 3) Querry Selector - Tag Name sub Method:                                                        
                            var elemTag = prompt("Enter your Child element's Tag Name"),
                                elem = document.querySelectorAll(elemTag),
                                x = parseInt(prompt("Enter your Element index"))-1,
                                elemTxt = elem[x].textContent,
                                elemCount = elem[x].length;

                            alert("your Child element's Name is [" , elem[x] , "]\n with Content  = [" ,elemTxt, "]\n with count [" ,elemCount , "]");
                            
                            console.log("your Child  element's Name is [" + elem[x] + "]\n with Content  = [" + elemTxt + "]\n with count [" + elemCount + "]");                        
                            
                            document.getElementById('txtarea').innerHTML +=
                             "\n Your element's Name is [" + elem[x] +
                              "]\n with Content  = [" + elemTxt +
                               "]\n with count [" + elemCount + "]\n";
                            
                        
                        } else {
                            alert("Error Entry!");
                        }


                    } else {
                        alert("Error Enrty!");
                    }

                } else {
                    alert("Good Bye!");                    
                }
                
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

function test00() {
    var elem = document.getElementById('sec'),
        Utxt = prompt("Enter you Content Text of Element:"),
        elemTxt = document.createTextNode(Utxt);

    elem.innerHTML = Utxt;
    
    var mthd = prompt("Press (1) for Testing Content Methods \n Press (2) for Testing Tag Name Methods \n");

    if (mthd == "1") {
        alert("Welcome to [Testing Content Methods]");
        
        // A) Testing Content Methods:
        
        var zz = prompt("press(1) to display element by {Element.Text_Node(); Method} [Will Return The Nubmer only] \n "+
        "press(2) to display element by {Element.innerHTML(); Method} [True]\n"+ 
        'press(3) to display element by {Element.textContent(); Method} [True]');
                    
        if (zz == "1") {
            // This Method Will Return {Inder of content} [False String]:
            var elemContent = elem.TEXT_NODE;
            
            alert("Your Element Text Node-content by [element.Text_Node] as following : \n " , elemContent );
                    
            console.log("Your Element Text Node-content by [element.Text_Node] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.Text_Node] as following : \n " + elemContent;
            
            
        } else if (zz=="2") {
            // This Method Will Return {The String content of the Elenemt } [True]:
            var elemContent = elem.innerHTML;
            
            alert("Your Element Text Node-content by [element.innerHTML] as following : \n " , elemContent );
                    
            console.log("Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent;
    
        } else if (zz=="3") {
            // This Method Will Return {The String content of the Elenemt } [True]:
            var elemContent = elem.textContent;
            
            alert("Your Element Text Node-content by [element.textContent] as following : \n " , elemContent );
                    
            console.log("Your Element Text Node-content by [element.textContent] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.textContent] as following : \n " + elemContent;
            
    
        } else{
            alert("Error Entry!");
        }
        
    } else if (mthd == "2"){
        alert("Welcome to [Testing Tag Name Methods]");
        
        var zz =prompt("press(1) to display element by {Element.tagName(); Method} \n ");
                    
        if (zz == "1") {
            var elemContent = elem.tagName;
            
            alert("Your Element tag Name by [element.tagName] as following : \n " , elemContent );
                    
            console.log("Your Element tag Name by [element.tagName] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element tag Name by [element.tagName] as following : \n " + elemContent;
            
            
        } else if (zz=="2") {
            
            var elemContent = Finder.innerHTML;
            
            alert("Your Element Text Node-content by [element.innerHTML] as following : \n " , elemContent );
                    
            console.log("Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.innerHTML] as following : \n " + elemContent;
    
        } else if (zz=="3") {
            
            var elemContent = Finder.textContent;
            
            alert("Your Element Text Node-content by [element.textContent] as following : \n " , elemContent );
                    
            console.log("Your Element Text Node-content by [element.textContent] as following : \n " + elemContent );
            
            document.getElementById('txtarea').innerHTML += "Your Element Text Node-content by [element.textContent] as following : \n " + elemContent;
            
    
        } else{
            alert("Error Entry!");
        }
        
    } else {
        alert("Error Entry!");
    }
    
    
    // creating new Header element:
    // var newHead = document.createElement("header"),
    //     headTxt = prompt("Enter your header content:"),
    //     headCont = document.createTextNode(headTxt);
         
    // newHead.appendChild(headCont);

    // document.getElementById("sec").appendChild(newHead);

    // var newHeadTxt = prompt("Enter your new header Text :"); 
    
    // newHead.innerHTML = newHeadTxt;    

    // // Get Access to header by Class name :
    // var Finder = document.getElementsByClassName('secClass');

    // // Changing Tag Content by {innerHTML} Method:
    // Finder[0].innerHTML += prompt('enter new text of sector element [accessed by Class Name]>>> ');

    
}

// ==================================================================================================


function testDiv() {
    
    var newHead = document.createElement("div"),
        headTxt = prompt("Enter your div content:"),
        headCont = document.createTextNode(headTxt);
         
    newHead.appendChild(headCont);

    document.getElementById("sec").appendChild(newHead);

    var newHeadTxt = prompt("Enter your new div Text :"); 
    
    newHead.innerHTML = newHeadTxt;

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
                        */