/* global alert, prompt */

// Array Add Element Function [Splice Method / Add Sub Function / Add one / more Element(s) ]:

function AddM51() {
    alert("Welcome to Array Add New Element(s) by [Splice Method / Add Sub Function]\n This Method will add new Element(s) to a default array at Specific Position inserted by user");
    
    var Names = ["Shadi", "Sayed", "Mohammed"];        
    
    alert("Your Array Before Adding new Element as following :" + Names +
          "\n" + "Your Array's Length Before Adding new Elements as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeAdd51").innerHTML =
        "Your Array before Adding new Elements as following :" + Names + "<br>" +        
        "Your Array's Length before Adding new Elements as following :" + Names.length;
    
    var pass = prompt("Press (1) to add one Element to the array \n Press (2) to add more than one element ...");
    
    
    switch (pass){
        case "1":
            
            var NewElement = prompt("Enter your New Element Value :"),
                AddPositon = prompt("Enter Element postion to add New Value(s) Before : "),
                PositionIndex = (AddPositon - 1) ;

            Names.splice(PositionIndex, 0, NewElement);

            alert ("Your new Element Value = \n " + Names[PositionIndex] + "\n Your new Array Length = " +
                   Names.length + "\n Your Array After Adding new Element as following : " + Names);                                   

            document.getElementById("DisplayAfterAdd51").innerHTML =
                "Your Array's Length After Adding new Element as following :" + Names.length + "<br>" +
                "Your New Element Value = " + Names[PositionIndex] + "<br>" +                
                "Your Array After Adding new Element as following : " + Names;         
            break;
        
        case "2":
            
            var Count = prompt("Enter your Count of new elements to Add to Main Default Array :"),
                AddPositon = prompt("Enter Element postion to start adding New Values Before : "),
                PositionIndex = (AddPositon - 1) ;

            
            for (i = 0; i < Count; i++) {
                var newValue = prompt("Enter your new Value Number" + (i + 1) + " : ");
                Names.splice((PositionIndex + i), 0, newValue);                                
            }
            

            alert ("Your new Array Length = \n " + Names.length );            

            alert("Your Array After Adding new Elements as following :" + Names +
                  "\n" + "Your Array's Length After Adding new Elements as following :" + Names.length);    

            document.getElementById("DisplayAfterAdd51").innerHTML =
                "Your Array After Adding new Elements as following :" + Names + "<br>" +       
                "Your Array's Length After Adding new Elements as following :" + Names.length ;                
            
            break;
        
        default:
            alert ("You Did not enter any correct Choice");
            break;
    } 
    
}