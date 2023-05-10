/* global document, alert, prompt */
// String converting Methods 

function mthd1 (){
    alert("Welcome to { Typeof (Variable Name); } Method ... ");
    
    prompt("Enter your Variable Value:");
    
    var myVar = prompt();
    
    console.log("Your Variable Data type is :\n"  +
                 typeof (myVar));    
    
    document.getElementById("Mthd1").innerHTML = ("Your Variable Data Type is :" + "<br>" +
                "<span style='color:red; font-weight:bold'>" + typeof (myVar) + "</span>");
}
// ===================================================================================================

function mthd2 (){    
    
    alert("Welcome to { Length of String } Method ... ");
    
    
    var myVar = prompt("Enter your Entry...");
    
    alert("Your Entry Count (length) is :\n"  +
                 myVar.length);    
    
    document.getElementById("Mthd2").innerHTML = ("Your Entry Count (length) is :" + "<br>" +
                "<span style='color:red; font-weight:bold'>" + myVar.length + "</span>");            
    
}
// ===================================================================================================

function mthd3 (){

    alert("Welcome to { Special Signs inside String TextSpecial Signs inside String Text } ... ");
        
    var myVar1 = ("This is First \" Double Quoting String Value \" "),
        myVar2 = ('This is Second \' Single Quoting String Value \' '),
        myVar3 = ("This is Third \\ Back Slash String Value\\ ");
    
    
    alert("First Special Sign is : "  +
                 myVar1 + "\n Second Special Sign is : " + myVar2 +
                "\n Third Special Sign is :" + myVar3);    
    
    document.getElementById("Mthd3").innerHTML = ("First Special Sign is : " +
                "<span style='color:red; font-weight:bold'>" + myVar1 + "</span>" + "<br>" +
                                                  "Second Special Sign is : " + "<span style='color:blue; font-weight:bold'>" + myVar2 + "</span>" + "<br>" +
                                                  "Third Special Sign is :" + "<span style='color:green; font-weight:bold'>" + myVar3 + "</span>" );            
    
        
}
// ===================================================================================================

function mthd4 (){
    alert("Welcome to { VName.toString(); } Convert to Method ... ");
    
    var num1 = parseInt(prompt("Enter Number 1")),
        num2 = parseInt(prompt("Enter Number 2")),
        Result = num1 + num2;
    
    alert("Your Summition Result as Number = " + Result +
          "\n Your Summition Result as Text [ Using Method .toSting() ] = " + Result.toString());                           
    document.getElementById("Mthd4").innerHTML = "Your Summition Result as Number = " + "<br>" +
        "<span style='color:red; font-weight:bold'>" + Result + "</span>" + "<br>" +
        "Your Summition Result as Text [ Using Method .toSting() ] = " + "<br>" +
        "<span style='color:green; font-weight:bold'>" + Result.toString() + "</span>";    
    
}
// ===================================================================================================

function mthd5 (){
    alert("Welcome to { VName.toLocaleString(); } Convert to Method ... ");
    
    var myDate = new Date();
        
    
    alert("Date Value as Original Format is " + myDate +
          "\n Date Value as Text [ Using Method .toLocaleSting() ] = " + myDate.toLocaleString());                           
    
    document.getElementById("Mthd5").innerHTML = "Date Value as Original Format is " + "<br>" +
        "<span style='color:red; font-weight:bold'>" + myDate + "</span>" + "<br>" +
        "Date Value as Text [ Using Method .toLocaleString() ] is " + "<br>" +
        "<span style='color:green; font-weight:bold'>" + myDate.toLocaleString() + "</span>";    
            
}
// ===================================================================================================

function mthd6 (){
    alert("Welcome to { String(Variable Name);} Convert to Method ... ");    
    
    var num1 = parseInt(prompt("Enter Number 1")),
        num2 = parseInt(prompt("Enter Number 2")),
        Result = num1 + num2;
    
    alert("Your Summition Result as Number = " + Result +
          "\n Your Summition Result as Text [ Using Method String(VName) ] = " + String(Result));                           
    document.getElementById("Mthd6").innerHTML = "Your Summition Result as Number = " + "<br>" +
        "<span style='color:red; font-weight:bold'>" + Result + "</span>" + "<br>" +
        "Your Summition Result as Text [ Using String(VName) Method ] = " + "<br>" +
        "<span style='color:green; font-weight:bold'>" + String(Result) + "</span>";            
}
// ===================================================================================================
// ===================================================================================================








