/* global alert, prompt */

// Array Add Element Function [Push Method ]:

function AddM3() {
    alert("Welcome to Array Add New Element by [Push Method]");
    var Names = ["Shadi", "Sayed", "Mohammed"];        
    
    alert("Your Array Before Adding new Element as following :" + Names +
          "\n" + "Your Array's Length Before Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeAdd3").innerHTML =
        "Your Array before Adding new Element as following :" + Names + "<br>" +        
        "Your Array's Length before Adding new Element as following :" + Names.length;
    
    
    var NewElement = prompt("Enter your New Element Value");    
    Names.push(NewElement);
    
    alert ("Your new Element Value = \n " + Names[Names.length - 1] );            
    alert ("Your new Array Length = \n " + Names.length );            
    
    alert("Your Array After Adding new Element as following :" + Names +
          "\n" + "Your Array's Length After Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayAfterAdd3").innerHTML =
        "Your Array After Adding new Element as following :" + Names + "<br>" +       
        "Your Array's Length After Adding new Element as following :" + Names.length + "<br>" +
        "Your New Element Value = " + Names[Names.length - 1];
            
}

