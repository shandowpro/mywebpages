/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to (Trim - Removing After & Before Spaces) Method [mystring.trim();]");        
    
    var myString  = prompt("Enter your Main Text with Extra Spaces:"),        
        myNewString = myString.trim();
    
    
    alert("Your Original Text is :\n" + myString + "\nYour Text after Removing spaces is: \n" + myNewString);            

    document.getElementById("Mthd1").innerHTML = "Your Original Text is :" + "<br>" +
        myString + "<br>" +"Your Text after Removing spaces is:" + "<br>" + myNewString;              
    
}
// ===================================================================================================

function mthd2() {
    alert("Welcome to (Link - Create Hyperlink on the String) Method [.link(Url);]");        
    
    var myString  = prompt("Enter your Text to Convert A HyperLink :"),        
        myUrl = prompt("Enter your URL Link to be Allocated to your string: "),
        myLinkString = myString.link(myUrl);
    
    
    alert("Your HyperLink Text is :\n" + myString + "\n Your URL is: \n" + myUrl);            

    document.getElementById("Mthd2").innerHTML = "Your HyperLink Text is :" + "<br>" + myString + "<br>" +
        " Your URL is :" + "<br>" + myUrl + "<br>" + "Your Final Link is " + "<br>" + myLinkString;              
}
// ===================================================================================================
      