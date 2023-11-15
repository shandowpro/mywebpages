/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to String (Finding Value by It's Index) Method1 [.charAt(Index);]");        
        
    var myString = prompt("Enter your Main Text"),
        CharIndex = parseInt(prompt("Enter the index of Value to Find")) - 1,
        myChar = myString.charAt(CharIndex);
        
    alert("Your Main String Value is : " + myString + "\nYour Charcter as Following " + myChar);

    document.getElementById("Mthd1").innerHTML = "Your Main String Value is : " + myString +
        "<br>" + "Your Splited String as Following" + "<br>" + myChar;                                         
}
// ===================================================================================================

function mthd2() {
    alert("Welcome to String (Finding Value's Unicode by It's Index) Method2 [.charCodeAt(Index);]");        
        
    var myString = prompt("Enter your Main Text"),
        CharIndex = parseInt(prompt("Enter the index of Value to Find it's Unicode")) - 1,        
        myChar = myString.charCodeAt(CharIndex),
        myChar1 = myString.charAt(CharIndex);
        
    alert("Your Main String Value is : " + myString + "\nYour Charcter as Following " + myChar1 +
          "\n your character's Unicode is : " + myChar);

    document.getElementById("Mthd2").innerHTML = "Your Main String Value is : " + myString +
        "<br>" + "Your Character as Following" + myChar1 + "<br>" +
        "Your Character's Unicode is : " + myChar;          
}
// ===================================================================================================


function mthd3() {
    alert("Welcome to String (Replacing partial Character(s) Value by another) Method3 [.replace(Value, NewValue);]");        
        
    var myString = prompt("Enter your Main Text"),
        Rmode = prompt("Press 1 to Defalut Replacment\n press 2 to RE Replacement");
     
    switch (Rmode) {
        case "1" :
            alert("Welcome to Default Replacment Mode");
            
            var FindV = prompt("Enter the Value to Find and Replace"),
                RepV = prompt("Enter the Value to Replace of"),
                myNewString = myString.replace(FindV, RepV);
            
            alert("Your Main String Before Replacement is : " + myString +
                  "\nYour String After Replcment as Following " + myNewString);

            document.getElementById("Mthd3").innerHTML = "Your Main String Before Replacement is  : " + myString +
                "<br>" + "Your String After Replcment as Following : " + myNewString;         
            break;
                                                            
        case "2" :
            alert("Welcome to [RE] Replacment Mode");
            
            var FindV = "/Shadi/gi",                
                //RepV = prompt("Enter the Value to Replace With"),
                myNewString = myString.replace(/Shadi/gi, "SHADI");
            
            alert("Your Main String Before Replacement is : " + myString +
                  "\nYour String After Replcment as Following : " + myNewString);

            document.getElementById("Mthd3").innerHTML = "Your Main String Before Replacement is  : " + myString +
                "<br>" + "Your String After Replcment as Following " + "<br>" + myNewString;         
            break;
            
        default :
            alert("Error Entry !");
            break;
    }
                        
}

// ===================================================================================================