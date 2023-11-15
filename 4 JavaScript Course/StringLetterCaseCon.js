/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to (Converting All String to Small Case) Method [.toLowerCase(String);]");        
    
    var myString  = prompt("Enter your Text to Convert all Letters to Small Case:"),        
        mySmallString = myString.toLowerCase();
    
    
    alert("Your Original Text is :\n" + myString + "Your Text after Conversion is: \n" + mySmallString);            

    document.getElementById("Mthd1").innerHTML = "Your Original Text is :" + "<br>" +
        myString + "<br>" +"Your Text after Conversion is:" + "<br>" + mySmallString;              
    
}
// ===================================================================================================

function mthd2() {
alert("Welcome to (Converting All String to Capital Case) Method [.toUpperCase(String);]");        
    
    var myString  = prompt("Enter your Text to Convert all Letters to Capital Case:"),        
        myCapitalString = myString.toUpperCase();
    
    
    alert("Your Original Text is :\n" + myString + "\n Your Text after Conversion is: \n" + myCapitalString);            

    document.getElementById("Mthd2").innerHTML = "Your Original Text is :" + "<br>" + myString + "<br>" +
        "Your Text after Conversion is:" + "<br>" + myCapitalString;              
}
// ===================================================================================================
      