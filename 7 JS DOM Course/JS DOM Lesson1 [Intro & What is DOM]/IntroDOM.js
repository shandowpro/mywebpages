
/* global document, alert, prompt */                    
/* JSOOP [Intro & What is DOM] */ 
/*template-string-converter.enable;*/

function test() {
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
                                
                var hSize = prompt("Choose your header Size from Below\n"+
                " Press (1) for <h1> header Size\n"+
                " Press (2) for <h2> header Size\n"+
                " Press (3) for <h3> header Size\n"+
                " Press (4) for <h4> header Size\n"+
                " Press (5) for <h5> header Size\n"+
                " Press (6) for <h6> header Size\n"+                
                " Press (7) for <h7> header Size\n");
                
                switch (hSize) {
                    
                    case "1":

                        var h1Count = prompt("Enter count of <h1> Element you wish to add ");

                        for (i=0; i < h1Count; i++) {
                            
                            var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                            
                            var HElem = document.createElement('h1');
                                                            
                            var HTxt = document.createTextNode(Txt1);                                    
                            
                            HElem.appendChild(HTxt);    
                            
                            document.getElementById("sec").appendChild(HElem);
                                                                    
                            alert("your Header <h1> Number " + (i+1) + "has Been Added Succesfully!");
                        }
                    
                    break;
                        
                case "2" :
                    
                    var h2Count = prompt("Enter count of <h2> Element you wish to add ");

                    for (i=0; i < h2Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h2');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h2> Number " + (i+1) + "has Been Added Succesfully!");
                    }   
                            
                    break;
                            
                case "3" :
                    var h3Count = prompt("Enter count of <h3> Element you wish to add ");

                    for (i=0; i < h2Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h3');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h3> Number " + (i+1) + "has Been Added Succesfully!");
                    }          
                            
                    break;                    

                case "4" :

                    var h4Count = prompt("Enter count of <h4> Element you wish to add ");

                    for (i=0; i < h4Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h4');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h4> Number " + (i+1) + "has Been Added Succesfully!");
                    }                               
                    break;                    
                            
                case "5" :
                    var h5Count = prompt("Enter count of <h5> Element you wish to add ");

                    for (i=0; i < h5Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h5');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h5> Number " + (i+1) + "has Been Added Succesfully!");
                    }                               
                    break;

                case "6" :
                                    
                    var h6Count = prompt("Enter count of <h6> Element you wish to add ");

                    for (i=0; i < h6Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h6');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h6> Number " + (i+1) + "has Been Added Succesfully!");
                    }   
                                
                    break;
                                    
                case "7" :

                    var h7Count = prompt("Enter count of <h7> Element you wish to add ");

                    for (i=0; i < h7Count; i++) {
                        
                        var Txt1 = prompt("Enter your Content Text of Header number [" + (i+1) + "]: ");
                                                                        
                        var HElem = document.createElement('h2');
                                                        
                        var HTxt = document.createTextNode(Txt1);                                    
                        
                        HElem.appendChild(HTxt);    
                        
                        document.getElementById("sec").appendChild(HElem);
                                                                
                        alert("your Header <h7> Number " + (i+1) + "has Been Added Succesfully!");
                    }   
                    break;
                                        
                default:
                    alert("Error Entry!");
                    
                    break;
                        
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
function display() {
    document.getElementById("SourceCode").innerHTML = test;
}
                
//==============================================================================
/*function test(){
    var Txt2 = prompt("Enter your Content Text of Header"),
        Txt1 = prompt("Enter your Content Text of Paragraph...");
        
    
    var PElem = document.createElement('p'),
        HElem = document.createElement('header');
                                    
    var PTxt = document.createTextNode(Txt1),
        HTxt = document.createTextNode(Txt2);

    PElem.appendChild(PTxt);
    HElem.appendChild(HTxt);    
    
    document.getElementById("sec").appendChild(HElem);
    
    document.getElementById("sec").appendChild(PElem);
}
*/