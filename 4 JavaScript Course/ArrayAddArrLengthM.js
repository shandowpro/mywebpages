/* global alert, prompt */

// Array Add Element Funcstion [Array length Method ]:

function AddM2() {
    alert("Welcome to Array Add New Element by [Array Length Method]");
    var Names = ["Shadi", "Sayed", "Mohammed"],
        NewIndex = Names.length;
    
    alert("Your Array Before Adding new Element as following :" + Names +
          "\n" + "Your Array's Length Before Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeAdd2").innerHTML =
        "Your Array before Adding new Element as following :" + Names + "<br>" +        
        "Your Array's Length before Adding new Element as following :" + Names.length;
    
    
    Names[NewIndex] = prompt("Enter your New Element");    
    
    alert ("Your new Element Value = \n " + NewIndex );            
    
    alert("Your Array After Adding new Element as following :" + Names +
          "\n" + "Your Array's Length After Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayAfterAdd2").innerHTML =
        "Your Array After Adding new Element as following :" + Names + "<br>" +       
        "Your Array's Length After Adding new Element as following :" + Names.length + "<br>" +
        "Your New Element Value = " + Names[NewIndex];
            
}

