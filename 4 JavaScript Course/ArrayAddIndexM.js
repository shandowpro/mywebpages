/* global alert, prompt */

// Array Add Element Funcstion [Index Method ]:
function AddM1() {
    alert("Welcome to Array Add New Element by [Index Method]");
    var Names = ["Shadi", "Sayed", "Mohammed"];
    
    alert("Your Array Before Adding new Element as following :" + Names +
          "\n" + "Your Array's Length Before Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeAdd1").innerHTML =
        "Your Array before Adding new Element as following :" + Names + "<br>" +        
        "Your Array's Length before Adding new Element as following :" + Names.length;
    
    
    Names[3] = prompt("Enter your New Element");    
    
    alert ("Your new Element Value = \n " + Names[3] );            
    
    alert("Your Array After Adding new Element as following :" + Names +
          "\n" + "Your Array's Length After Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayAfterAdd1").innerHTML =
        "Your Array After Adding new Element as following :" + Names + "<br>" +       
        "Your Array's Length After Adding new Element as following :" + Names.length + "<br>" +
        "Your New Element Value = " + Names[3];
            
}



