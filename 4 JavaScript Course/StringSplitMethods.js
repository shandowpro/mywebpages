/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to String Spliting Method1 [.split(Seperator, Limit);]");
    
    var SplitMode = prompt("Press 1 for Character Spliting Mode \n Press 2 for Word spliting Mode. \n Press 3 for Customized Seperator mode "),
        myString = prompt("Enter your Main Text"),
        Limit = prompt("Enter the Limit of Spliting");        
    
    switch (SplitMode) {
        case "1" :
            var mySplitedString = myString.split("", Limit);

            alert("Your Main String Value is : " + myString + "\nYour Splited String as Following " + mySplitedString);

            document.getElementById("Mthd1").innerHTML = "Your Main String Value is : " + myString +
                "<br>" + "Your Splited String as Following" + "<br>" + mySplitedString;                                 
            break;
            
        case "2" :
            var mySplitedString = myString.split(" ", Limit);
            
            alert("Your Main String Value is : " + myString + "\nYour Splited String as Following " + mySplitedString);

            document.getElementById("Mthd1").innerHTML = "Your Main String Value is : " + myString +
                "Your Splited String as Following" + "<br>" + mySplitedString;                                           
            break;
            
        case "3" :
            var CustSep = prompt("Enter your Seperator"),
                mySplitedString = myString.split(CustSep, Limit);
            
            alert("Your Main String Value is : " + myString + "\nYour Splited String as Following " + mySplitedString);

            document.getElementById("Mthd1").innerHTML = "Your Main String Value is : " + myString +
                "<br>" + "Your Splited String as Following : " + mySplitedString;                                      
            break;

        default:
            alert("Error Entry!");
            break;
    }
}
// ===================================================================================================

function mthd2() {
    alert("Welcome to String Slicing Method2 [.slice(Start Index,End Index);]");    
    var myString = prompt("Enter your Main Text"),
        SIndex = prompt("Enter the Start Index"),        
        EIndex = prompt("Enter the End Index"),        
        mySlicedString = myString.slice(SIndex, EIndex);
    
        
    alert("Your Main String Value is : " + myString +
          "\nYour Sliced String as Following " + mySlicedString);
    
    document.getElementById("Mthd2").innerHTML = "Your Main String Value is : " + myString + "<br>" +
        "Your Sliced String as Following : " + mySlicedString;         
}
// ===================================================================================================

function mthd3() {
    alert("Welcome to String SubStraction Method3 [.substr(Start Index, Length);]");
    
    var myString = prompt("Enter your Main Text"),
        SIndex = prompt("Enter the Start Index"),        
        ELength = prompt("Enter Count of Extraction "),        
        mySubString = myString.substr(SIndex, ELength);
    
    
    alert("Your Main Text is : " + myString + "\nYour Extracted String as Following " + mySubString);
    
    document.getElementById("Mthd3").innerHTML = "Your Main Text is : " + myString + "<br>" +
        "Your Extracted String as Following" + mySubString;         
}

// ===================================================================================================

function mthd4() {
    alert("Welcome to String Substraction Method4 [.substring(Start Index, End Index);]");
    
    var swap = "press 1 for Normal mode, \n press 2 for Swap Mode";
    
    if (swap == 1) {
        var myString = prompt("Enter your Main Text"),
            SIndex = prompt("Enter the Start Index"),        
            EIndex = prompt("Enter the End Index"),        
            mySubString = myString.substring(SIndex, EIndex);


        alert("Your Main Text is : " + myString + "\nYour Extracted String as Following " + mySubString);

        document.getElementById("Mthd4").innerHTML = "Your Main Text is : " + mySubString +  "<br>" +
            "Your Extracted String as Following" + mySubString;           
    
    } else if (swap = 2) {     
        var myString = prompt("Enter your Main Text"),
            EIndex = prompt("Enter the End Index"),        
            SIndex = prompt("Enter the Start Index"),        
            mySubString = myString.substring(EIndex, SIndex);


        alert("Your Main Text is : " + myString + "\nYour Extracted String as Following " + mySubString);

        document.getElementById("Mthd4").innerHTML = "Your Main Text is : " + mySubString +  "<br>" +
            "Your Extracted String as Following" + mySubString;                                 
    
    } else {
        alert("Error Entry!");
    }    
}