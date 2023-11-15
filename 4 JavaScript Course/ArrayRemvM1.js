    /* global alert, prompt */

// Array Remove Array Last Element Function [Pop Method/ Remove one / more Element(s) ]:

function RemvM1() {
    alert("Welcome to Array Removing/Deleting Element(s) by [ Pop Method / Remove Function]\n This Method will Remove Last Element(s) from a default array");
    
    var Names = ["Shadi", "Sayed", "Mohammed"];
        
    alert("Your Array Before Removing Array Element Process as following :" + Names +
          "\n Your Array's Length Before Removing Array Element Process as following  :" + Names.length  ) ;        
    document.getElementById("DisplayBeforeRemv1").innerHTML =
            "Your Array Before Removing Array Element Process as following :" + Names + "<br>" +        
            "Your Array's Length Before Removing Array Element Process as following  :" + Names.length;                        
    var pass = prompt("Press (1) to Remove one Element to the array \n Press (2) to Remove more than one element ...");
    
    
    switch (pass){
        case "1":                        
            
            var lastElement = Names.pop();
    
            alert("Your Array After Removing Array Element Process as following :" + Names +
                  "\n" + "Your Array's Length After Removing Array Element Process as following :" + Names.length + "The Deleted Last Element Value is :" + lastElement);        
    
            document.getElementById("DisplayAfterRemv1").innerHTML =
                  "Your Array After Removing Array Element Process as following :" + Names + "<br>" +        
                  "Your Array's Length After Removing Array Element Process as following :" + Names.length +
                  "<br>" + "The Deleted Last Element Value is :" + lastElement;     
            break;
        
        case "2":
            
            var Count = prompt("Enter your Count of elements to be Deleted / Removed from Main Default Array :"); 
            
            
            for (i = 0; i < Count; i++) {                 
                Names.pop();                
            }                    
            
            alert("Your Array After Removing Array Element Process as following :" + Names +
                  "\n" + "Your Array's Length After Removing Array Element Process as following  :" + Names.length);        
    
            document.getElementById("DisplayAfterRemv1").innerHTML =
                "Your Array After Removing Array Element Process as following :" + Names + "<br>" +        
                "Your Array's Length After Removing Array Element Process as following  :" + Names.length;     
            
            break;
        
        default:
            alert ("You Did not enter a valid Choice");
            break;
    } 
    
}