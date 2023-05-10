/* global alert, prompt */

// Array Add Element Function [UnShift Method ]:

function AddM4() {
    alert("Welcome to Array Add New Element by [UnShift Method]\n This Method will add new Element to your array  at First Postion ");
    
    var Names = ["Shadi", "Sayed", "Mohammed"];        
    
    alert("Your Array Before Adding new Element as following :" + Names +
          "\n" + "Your Array's Length Before Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeAdd4").innerHTML =
        "Your Array before Adding new Element as following :" + Names + "<br>" +        
        "Your Array's Length before Adding new Element as following :" + Names.length;
    
    
    var NewElement = prompt("Enter your New Element Value");    
    Names.unshift(NewElement);
    
    alert ("Your new Element Value = \n " + Names[0] );            
    alert ("Your new Array Length = \n " + Names.length );            
    
    alert("Your Array After Adding new Element as following :" + Names +
          "\n" + "Your Array's Length After Adding new Element as following :" + Names.length);    
    
    document.getElementById("DisplayAfterAdd4").innerHTML =
        "Your Array After Adding new Element as following :" + Names + "<br>" +       
        "Your Array's Length After Adding new Element as following :" + Names.length + "<br>" +
        "Your New Element Value = " + Names[0];
            
}

