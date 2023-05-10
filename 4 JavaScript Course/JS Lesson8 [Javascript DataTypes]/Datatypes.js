// Declaration of Some Vars:
    var Case1 = "Good",
        Case2 = "Bad",
        myCase = true, 
        myWebsites = {Site1: "Google.com", Site2: "YouTube.com", Site3: "Facebook.com"},
        myName = ["Shadi", "Sayed", "Mohammed"],
        myFullName1 = "Shadi Sayed Mohammed 'Shindow' ",
        myFullName2 = "Shadi Sayed Mohammed \"Shindow\"",
        textualNumber = "30",
        numericNumber = 30;
        

// Funcitons :<br>
if (myCase === true) {
    document.getElementById("testboolean").innerHTML = Case1;
} else {
    document.getElementById("testboolean").innerHTML = Case2;                                 
} 


// Calling First Element of Object (using Key) ,  with in HTML Element ====================================
document.getElementById("testobject").innerHTML =  myWebsites.Site1;


// Calling First Element of Array (using Index) , with in HTML Element ====================================
document.getElementById("testarray").innerHTML =  myName[0];// Calling First Element of Array (using Index) , 

// Calling Textual Value by mixing between two types of Quotations signs (Different & Same) with in HTML Element 
document.getElementById("teststring1").innerHTML =  myFullName1;
document.getElementById("teststring2").innerHTML =  myFullName2;


// Calling Textual Number Value & Numeric Number Value Concatenated with Textual Number Value within HTML Element: 
document.getElementById("testnumber1").innerHTML =  numericNumber;
document.getElementById("testnumber2").innerHTML =  textualNumber;
document.getElementById("testnumber3").innerHTML =  numericNumber + textualNumber;