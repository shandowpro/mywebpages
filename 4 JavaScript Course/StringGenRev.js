/*global document, alert, prompt*/
// General Revision - Multiple Functions :

function mthd1() {
    
    alert("Welcome to (General Revision - First Mode [Fixed Functions]...");        
    alert("In this Application the user will Apply (all) Methods and Functions by Choosing From (2) of Modes"); 
    
    
}
// ===============================================================================================================


function mthd2() {
    
    alert("Welcome to (General Revision - First Mode [Fixed Functions]...");        
    
    
}
// ===============================================================================================================

    
    
    var pass = prompt("Press (1) for Running the First Mode [Fixed Functions]... \n Press (2) for Running the Second Mode [Flixible String-Functions] ");
    
    if (pass == "1") {
        
        alert("Welcome to the First group of [Fixed Functions],\n Staring with Numeric Variable, and the runing Fuctions Will be as Following \n 1- Converting Numeric to String\n 2- Concatenation With other String \n 3- Replacing one number(0 , 1)\n 4- Spliting All Numbers and letters by Words Seperators\n 5- Converting All Letters to Small Case \n 6- Creating a Link in The String");              


        var myNumber  = prompt("Enter your Main Number including 0 and 1:"),        
            userString = prompt("Enter your Second String To Be Concatenated With String"),
            myString = myNumber.toString().replace(/0/gi, 1).concat(userString).split(" ").toLowerCase().link("http://google.com");


        alert("Your Original Number is :\n" + myNumber +
              "\nYour Variable after applying multiple Functions is: \n" + myString);            

        document.getElementById("Mthd1").innerHTML = "Your Original Number is :" + "<br>" + 
            myNumber + "<br>" + "Your Variable after applying multiple Functions is :" + "<br>" + myString;                                                    
        
    } else if (pass == "2") {
        
        alert("Welcome to the Second mode [Flexible String-Functions],\n Starting with Random Variable, and the running Fuctions Will be as User Choice [including All categories of String Methods]");              

        var userVar = prompt("Enter your Variable... "),
            userFunction = prompt("Choose your Function Category \n 1- Basic Category [ Special Signs - Typeof ]\n 2- Converting To String [ .toSring() - .toLocaleSting() - .string() ] \n 3- Spliting/ Slicing/Substraction [ .split() - .slice() - .substr() - subString() ]\n 4- Getting Index by Searching it's Value [.indexOf() - lastIndexOf() - .search() ]\n 5- Getting Value, Unicode of Elements by it's Index [.charAt() - charCodeAt() ]\n 6- Converting Letter Case to Lower & Upper Case [.lowerCase() - .UpperCase() ] \n 7- Replacement Function [ .replace() ]\n 8- Concatenation And Merging [ .concat() ] \n 9- Other Category [ .trim() - .link() ]... ");
                              
        switch (userFunction) {
            
            case "1" :          
            
                alert("Welcome to Basic Category [Special Signs - TypeOf] ");
                
                var FChoose = parseInt(prompt("Press (1) to Apply [Special Signs] Function... \n Press (2) to Apply [Typeof] Function..."));                                        
                
                if (FChoose == 1) {

                    alert("Welcome to Basic Category [Special Signs] Function ...");
                    
                    var UserName = prompt("Enter your Name ..."),
                        UserAge = prompt("Enter your Age ..."),
                        UserNation = prompt("Enter your Nationality ...");
                        
                    alert("Welcome \"" + UserName + "\" \n" + "Your are \\" + UserAge + "\\\n" + "You Are From '" + UserNation + "'" );
                    
                    Document.getElementById("Mthd2").innerHTML = "Welcome \"" + UserName + "\""  + "<br>" +
                        "Your are \\" + UserAge + "\\" + "<br>" + "You Are From '" + UserNation + "'";                        
                                                                
                } else if (FChoose == 2) {
                    
                    alert("Welcome to Basic Category [Typeof] Function ...");
                    
                    var UserType = prompt("Enter your Variable");
                   
                    alert("Your Variable type is: \n" + typeof (UserType));
                    
                    Document.getElementById("Mthd2").innerHTML = "Your Variable type is: \n" + typeof (UserType);                                                                       
                } else {
                    alert("Error Entry!");                                    
                }
                                                
                break;
                                                            
            case "2" :          

                alert("Welcome to Converting To String Category [ .toSring() - .toLocaleSting() - .String() ] ");
                
                if (typeof userVar === "string") {
                    
                    alert("Your Inserted Variable Type is String already! ");
                                                                            
                } else {
                    
                    var FChoose = parseInt(prompt("Press (1) to Apply toString(); Function... \n Press (2) to Apply toLocaleString(); Function\n Press (3) to Apply String() Function ..."));                                        
                
                    if (FChoose == 1) {

                        alert("Welcome to Converting To String Category [.toString()] Function ...");

                        alert("Your Variable After Conversion is : " + userVar.toString());

                        Document.getElementById("Mthd2").innerHTML = "Your Variable After Conversion is : " + userVar.toString();                        

                    } else if (FChoose == 2) {

                        alert("Welcome to Converting To String Category [.toLocaleString()] Function ...");

                        alert("Your Variable After Conversion is : \n" + userVar.toLocaleString());

                        Document.getElementById("Mthd2").innerHTML = "Your Variable After Conversion is : \n" +
                            userVar.toLocaleString();                   
                                        
                    } else if (FChoose == 3) {
                        
                        var NewString = String(userVar);
                        
                        alert("Welcome to Converting To String Category [String(StringVar);] Function ...");

                        alert("Your Variable After Conversion is : " + NewString);

                        Document.getElementById("Mthd2").innerHTML = "Your Variable After Conversion is : " + "<br>" + NewString;                   
                                                                        
                    } else {
                        alert("Error Entry!");                                    
                    }                                                                                
                }                                                                                                                        
            
                break;
                                            
            case "3" :          

                alert("Welcome to Spliting/Slicing/Substraction Category [ .split() - .slice() - .subStr() - subString() ] ");
                
                var FChoose = parseInt(prompt("Press (1) to Apply split(); Function... \n Press (2) to Apply slice(); Function\n Press (3) to Apply subStr() Function\n Press (4) to Apply substring() Function ..."));                                        
                
                if (FChoose == 1) {

                    alert("Welcome to Spliting Category [.split()] Function ...");

                    var SplitMode = prompt("Press (1) for [Character Spliting Mode]\n Press (2) for [Word Spliting Mode]\n Press (3) for [Customized Spliting Mode]... ");
                    
                    switch (SplitMode) {
                                            
                        case "1" :
                            alert("Welcome to [Character Spliting Mode] [.split("")] ");
                                                                                    
                            var newString = userVar.toString().split("");
                                                            
                            alert("Your String After [Character Spliting Mode] is : " + newString );

                            Document.getElementById("Mthd2").innerHTML = "Your String After [Character Spliting Mode] is : " + "<br>" +
                                newString;                                                   
                            
                            break;
                        
                        case "2" :
                            alert("Welcome to [Word Spliting Mode] [.split(" ")] ");
            
                            var newString = userVar.split(" ");
                            
                            alert("Your String After [Word Spliting Mode] is : " + newString );

                            Document.getElementById("Mthd2").innerHTML = "Your String After [Word Spliting Mode] is : " + newString;                                                   
                            break;
                        
                        case "3" :
                            alert("Welcome to [Customized Spliting Mode] [.split("")] ");
                            
                            var custSep = prompt("Enter your Customized Seperator"),
                                newString = userVar.split(custSep);
                                                            
                            alert("Your String After [Customized Spliting Mode] is : \n" + newString );

                            Document.getElementById("Mthd2").innerHTML = "Your String After [Customized Spliting Mode] is  " + "<br>" +
                                newString;         
                            
                            break;
                            
                        default :
                            alert("Error Entry !");
                            break;
                    }        
                                                                                                                          
                
                } else if (FChoose == 2) {

                    alert("Welcome to Spliting/Slicing/Substraction Category [.slice()] Function ...");

                    var StartIndex = parseInt(prompt("Enter your Start Slicing Index ...")),
                        EndIndex = parseInt(prompt("Enter your End Slicing Index")),
                        slicedString = userVar.slice(StartIndex, EndIndex);

                    alert("Your Sliced String by [.slice()] Function is : \n" + slicedString);

                    Document.getElementById("Mthd2").innerHTML = "Your Sliced String by [.slice()] Function is :" + "<br>" +
                        slicedString;                                 
                
                } else if (FChoose == 3) {

                    alert("Welcome to Spliting/Slicing/Substraction Category [.SubStr()] Function ...");

                    var StartIndex = parseInt(prompt("Enter your Start Sustraction Index : ")),
                        SubCount = parseInt(prompt("Enter Character's Substracted Count : ")),
                        SubStracted = userVar.substr(StartIndex, SubCount);

                    alert("Your Substracted String by [.subStr()] Function is : \n" + SubStracted);

                    Document.getElementById("Mthd2").innerHTML = "Your Substracted String by [.subStr()] Function is :" + "<br>" +
                        SubStracted;         
                    
                                
                } else if (FChoose == 4) {

                    alert("Welcome to Spliting/Slicing/Substraction Category [.subString()] Function ...");

                    var StartIndex = parseInt(prompt("Enter your Start Index ...")),
                        EndIndex = parseInt(prompt("Enter your End Index ...")),
                        SubString = userVar.substring(StartIndex, EndIndex);
                        

                    alert("Your Substracted String by [.subString()] Function is : \n" + SubString);

                    Document.getElementById("Mthd2").innerHTML = "Your Substracted String by [.substring()] Function is :" +
                        "<br>" + SubString;                                 

                } else {
                    alert("Error Entry!");                                    
                }                                                                                
                                
                break;
                      
            case "4" :          
                
                alert("Welcome to Category Getting Index by Searching it's Value [.indexOf() - lastIndexOf() - .search() ] ");
                                
                var FChoose = parseInt(prompt("Press (1) to Apply indexOf(); Function... \n Press (2) to Apply lastIndexOf(); Function\n Press (3) to Apply search() Function ..."));                                        
                
                if (FChoose == 1) {

                    alert("Welcome to Getting Index by Searching it's Value Category [.indexOf()] Function ...");

                    var searchItem = prompt("Enter your Searching Item in Your String Variable to Find it's Index ..."),
                        SearchIndex = parseInt(prompt("Enter your Starting Searching Index")),
                        ResultIndex = userVar.indexOf(searchItem, SearchIndex);

                    alert("Your Item's Index by [.indexOf()] Function is : \n" + ResultIndex);

                    Document.getElementById("Mthd2").innerHTML = "Your Item's Index by [.indexOf()] Function is : " + "<br>" +
                        ResultIndex;                                 
                
                } else if (FChoose == 2) {

                    alert("Welcome to Getting Index by Searching it's Value Category [.lastIndexOf()] Function ...");

                    var searchItem = prompt("Enter your Searching Item in Your String Variable to Find it's Index ..."),
                        SearchIndex = parseInt(prompt("Enter your Starting Searching Index")),
                        ResultIndex = userVar.lastIndexOf(searchItem, SearchIndex);

                    alert("Your Item's Index by [.lastIndexOf()] Function is : \n" + ResultIndex);

                    Document.getElementById("Mthd2").innerHTML = "Your Item's Index by [.lastIndexOf()] Function is : " + "<br>" +
                        ResultIndex;                                 
                    
                } else if (FChoose == 3) {

                    alert("Welcome to Getting Index by Searching it's Value Category [.search()] Function ...");

                    var searchItem = prompt("Enter your Searching Item in Your String Variable to Find it's Index ..."),
                        ResultIndex = userVar.search(searchItem);

                    alert("Your Item's Index by [.search()] Function is : \n" + ResultIndex);

                    Document.getElementById("Mthd2").innerHTML = "Your Item's Index by [.search()] Function is : " + "<br>" +
                        ResultIndex;                                 
                    
                } else {
                    alert("Error Entry!");                                    
                }                                                                                
                                                                
                break;
                                  
            case "5" :          
                
                alert("Welcome to Category Getting Value, Unicode of Elements by it's Index [.charAt() - charCodeAt() ] ");
                
                var FChoose = parseInt(prompt("Press (1) to Apply charAt(); Function... \n Press (2) to Apply charCodeAt(); Function ..."));                                        
                
                if (FChoose == 1) {
                
                    alert("Welcome to Getting Value of Elements by it's Index Category by [ .charAt() ] ");
                    
                    var SIndex = parseInt(prompt("Enter your Searching Character's Index")),
                        SChar = userVar.charAt(SIndex);
                        
                    alert("Your Item's value by [.CharAt()] Function is : \n" + SChar);

                    Document.getElementById("Mthd2").innerHTML = "Your Item's value by [.charAt()] Function is :" + "<br>" + SChar;         
                    
                } else if (FChoose == 2) {
                    
                    alert("Welcome to Getting UniCode of Elements by it's Index Category by [ .charCodeAt() ] ");
                    
                    var SIndex = parseInt(prompt("Enter your Searching Character's Index")),
                        SUniCode = userVar.charCodeAt(SIndex);
                        
                    alert("Your Item value's UniCode by [.charCodeAt()] Function is : \n" + SUniCode);

                    Document.getElementById("Mthd2").innerHTML = "Your Item value'S UniCode by [.CharCodeAt()] Function is :" +
                        "<br>" + SUniCode;         
                                        
                } else {
                    alert("Error Entry !");
                }
                
                break;
                                            
            case "6" :          
                
                alert("Welcome to Converting Letter Case to Lower & Upper Case Category [.toLowerCase() - .toUpperCase() ] ");
                
                var FChoose = parseInt(prompt("Press (1) to Apply [.toLowerCase();] Function... \n Press (2) to Apply [.toUpperCase();] Function ..."));                                                        
                
                if (FChoose == 1) {
                
                    alert("Welcome to Converting Letter Case to Lower Category by [ .toLowerCase() ] ");
                    
                    var StrSmallCase = userVar.toLowerCase();
                        
                    alert("Your String by [.toLowerCase()] Function is : \n" + StrSmallCase );

                    Document.getElementById("Mthd2").innerHTML = "Your String with Small Cased letters by [.toLowerCase()] Function is :" +
                        "<br>" + StrSmallCase ;         
                    
                } else if (FChoose == 2) {
                    
                    alert("Welcome to Converting Letters Case to Capital Category by [ .toUpperCase() ]");
                                    
                    var StrUppCase = userVar.toUpperCase();
                        
                    alert("Your String with Capital Cased Letters by [ .toUpperCase() ] Function is : \n" + StrUppCase );

                    Document.getElementById("Mthd2").innerHTML = "Your String by [ .toUpperCase() ] Function is :" + "<br>" +
                        StrUppCase;         
                                        
                } else {
                    alert("Error Entry !");
                }
                                
                break;
            
            case "7" :          
                
                alert("Welcome to Replacement Category by [ .replace() ] Function ");                                
                
                var oldValue = prompt("Enter your old Value to Replace : "),
                    newValue = prompt("Enter your New Value to replace the old Value with : "),
                    ReplacedStr = useVar.replace(oldValue, newValue);
                
                alert("Your New String After Replacement by [.replace()] Function is : \n" + ReplacedStr );

                Document.getElementById("Mthd2").innerHTML = "Your New String After Replacement by [.replace()] Function is : "  +
                    "<br>" + ReplacedStr );      
                break;
                
            case "8" :          
                
                alert("Welcome to Concatenation And Merging Category by [ .concat() ] Function ");
        
                var newStr = prompt("Enter your New String to be Concatenated With your old String "),
                    AllStr = userVar.concat(newStr);
                    
                alert("Your New String After Concatenated by [.concat()] Function is : \n" + AllStr );

                Document.getElementById("Mthd2").innerHTML = "Your New String After Concatenation by [.concat()] Function is : "  +
                    "<br>" + AllStr );
                break;
            
            case "9" :          
                
                alert("Welcome to Category Other Category [ .trim() - .link() ] ");
                
                var FChoose = parseInt(prompt("Press (1) to Apply [.trim();] Function... \n Press (2) to Apply [.link();] Function ..."));                                        
                
                if (FChoose == 1) {
                
                    alert("Welcome to Other Category [ .trim() ] Function ");
                    
                    var trimedStr = userVar.trim();
                    
                    alert("Your String After trimed by [.trim()] Function is : \n" + trimedStr );

                    Document.getElementById("Mthd2").innerHTML = "Your String After trimed by [.trim()] Function is : " + "<br>" +
                        trimedStr );
                
                } else if (FChoose == 2) {
                    
                    alert("Welcome to Other Category [ .link() ] Function ");
                    
                    var urlStr = prompt("Enter your Url Site : "),
                        linkedStr = userVar.trim().link("urlStr");
                    
                    alert("Your String After linked by [.link()] Function is : \n" + linkedStr );

                    Document.getElementById("Mthd2").innerHTML = "Your String After linked by [.link()] Function is : " + "<br>" +
                        linkedStr);
                                                      
               } else {
                    alert("Error Entry!");            
               }                                
                                                                
                break;
            
            default :                                
                alert("Error Entry!");
                break;
        }
                                             
    } else {
        alert("Error Entry!");
    }

