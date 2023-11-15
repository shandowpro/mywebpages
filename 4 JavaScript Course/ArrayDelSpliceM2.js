/* global alert, prompt */

// Array Delete Element(s) Function [Splice Method / Delete Sub Function / Delete one / more Elemenet(s) ]:

function AddM52() {
    alert("Welcome to Array Delete Existened Element(s) by using [Splice Method / Delete Sub Function]\n This Method will Delete Element(s) from a default array Starting from Specific Position inserted by user");
    
    var Names = ["Shadi", "Sayed", "Mohammed"];        
    
    alert("Your Array Before Deleting Element(s) as following :" + Names +
          "\n" + "Your Array's Length Before Deleting new Elements as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeDelM52").innerHTML =
        "Your Array before Deleting new Elements as following :" + Names + "<br>" +        
        "Your Array's Length before Deleting new Elements as following :" + Names.length;
    
    var pass = prompt("Press (1) to delete one Element from the array \n Press (2) to delete more than one element ...");
    
    
    switch (pass){
        case "1":
            alert("Welcome to Delete one Element application ...");            
            var ItemPosition = prompt("Enter Element postion to delete : "),
                PositionIndex = ItemPosition - 1 ;

            Names.splice(PositionIndex, 1);

            alert ("Your new Array Length = " + Names.length + "\n Your Array After Deleting the Element as following : " + Names);                                   

            document.getElementById("DisplayAfterDelM52").innerHTML =
                "Your Array's Length After Deleting Element as following :" + Names.length + "<br>" +       
                "Your Array After Deleting Element as following : " + Names;         
            break;
        
        case "2":
            alert("Welcome to Delete multiple Element(s) application ...");
            var Count = prompt("How many items do you wish to delete from the Array ? "),
                DelPositon = prompt("Enter Element postion to start Deleting Elements from : "),
                PositionIndex = (DelPositon - 1) ;

            Names.splice(PositionIndex, Count);                                
                        
            alert("Your Array After Deleting Elements as following :" + Names +
                  "\n" + "Your Array's Length After Deleting Elements as following :" + Names.length);    

            document.getElementById("DisplayAfterDelM52").innerHTML =
                "Your Array After Deleting Elements as following :" + Names + "<br>" +       
                "Your Array's Length After Deleting Elements as following :" + Names.length ;                           
            break;
        
        default:
            alert ("You Did not enter any correct Choice");
            break;
    }     
}
