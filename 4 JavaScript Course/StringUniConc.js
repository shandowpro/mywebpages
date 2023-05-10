/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to (Converting Unicode to Strings) Method [.fromCharCode(UniCode(s));]");        
    
    var charCount = parseInt(prompt("Enter the number of your Characters to Convert:")),
        UniArr = new Array(),
        StrArr = new Array(),
        AllStr = "";
    
    for (i = 0; i < charCount; i++) {
        //This is The first Numeric Array to Gather the UniCodes Inserted by user:
        UniArr[i] = prompt("Enter your UniCode of Character Number (" + (i+1) + ")");            
        // This is The String Converted Unicodes to Characters Array :
        StrArr[i] = String.fromCharCode(UniArr[i]);
        // This is the Concatenated Array of converted unicodes To String :
        AllStr = AllStr.concat(StrArr[i]);
    }
    
    alert("Your Full Converted String is :" + "\n" + AllStr);            

    document.getElementById("Mthd1").innerHTML = "Your Full Converted String is :" + "<br>" + AllStr;              
    
}
// ===================================================================================================

function mthd2() {
    alert("Welcome to String (Concatenation / Merging) Method [.concat(String(s));]");        
      
    var strCount = parseInt(prompt("Enter the number of String to Concatenate:")),
        strArr = new Array(),
        AllStr = "";
        
    
    for (i = 0; i < strCount; i++) {
        strArr[i] = prompt("Enter your String Number (" + (i+1) + ")");            
        AllStr = AllStr.concat(strArr[i], " ");
    }
    
    alert("Your Full Concatenated String is :" + "\n" + AllStr);            

    document.getElementById("Mthd2").innerHTML = "Your Full Concatenated String is :" + "<br>" + AllStr;          
}
// ===================================================================================================
      