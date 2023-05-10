    /* global alert, prompt */

// Array Substitution Element(s) Function [Splice Method / Substitute Sub Function / Substitute one / more Elemenet(s) ]:

function AddM53() {
    alert("Welcome to Array Substitute Element(s) by using [Splice Method / Delete Sub Function And ADD Sub Function ]\n From a Default array Starting from Specific Position inserted by user And Replace them by another Elements Values");
    
    var Names = ["Shadi", "Sayed", "Mohammed"];        
    
    alert("Your Array Before Substituting Element(s) process as following :" + Names +
          "\n" + "Your Array's Length Substituting Element(s) process as following :" + Names.length);    
    
    document.getElementById("DisplayBeforeSubsM53").innerHTML =
        "Your Array before Susbstituting new Elements as following :" + Names + "<br>" +        
        "Your Array's Length before Susbstituting new Elements as following :" + Names.length;
    
    var pass = prompt("Press (1) to Sustitute one Element from the array \n Press (2) to Sustitute more than one element ...");
    
    
    switch (pass){
        case "1":
            alert("Welcome to Substitue one Element Application ...");            
            var ItemPosition = prompt("Enter Element Postion to Substitue it: "),
                NewValue = prompt("Enter your new Item Value"),
                PositionIndex = ItemPosition - 1 ;

            Names.splice(PositionIndex, 1, NewValue);

            alert ("Your new Array Length = " + Names.length +
                   "\n Your Array After Substituting the Element as following : " + Names);                                   

            document.getElementById("DisplayAfterSubsM53").innerHTML =
                "Your Array's Length After Substituting Element as following :" + Names.length + "<br>" +       
                "Your Array After Substituting Element as following : " + Names;         
            break;
        
        case "2":
            alert("Welcome to Substitute multiple Element(s) Application ...");
            var Count = prompt("How many items do you wish to Substitute from the Array ? ");
                
            if (parseInt(Count) <= Names.length) {                                                
                if (parseInt(Count) == Names.length){
                    var SubPositon = 1,
                    PositionIndex = (SubPositon - 1) ,
                    NewSubIndex = PositionIndex + Count ;
                    
                    Names.splice(PositionIndex, Count);                                

                    for (i = 0; i < Count; i++) {
                        var NewValue = prompt("Enter your new Substituter Value Number :" + (i + 1) + " : ");
                        Names.splice((PositionIndex + i), 0, NewValue);                                
                    }
                    
                    alert("Your Array After Substituting Elements as following :" + Names +
                      "\n" + "Your Array's Length After Substituting Elements as following :" + Names.length);    
                    
                    document.getElementById("DisplayAfterSubsM53").innerHTML =
                        "Your Array After Substituting Elements as following :" + Names + "<br>" +       
                        "Your Array's Length After Substituting Elements as following :" + Names.length ;                                                                                                                        
                } else {
                                    
                    var SubPositon = prompt("Enter Element postion to start Substituting Elements from : "),
                        PositionIndex = (SubPositon - 1) ,
                        NewSubIndex = PositionIndex + Count ;
                
                    Names.splice(PositionIndex, Count);                                

                    for (i = 0; i < Count; i++) {
                        var NewValue = prompt("Enter your new Substituter Value Number :" + (i + 1) + " : ");
                        Names.splice((PositionIndex + i), 0, NewValue);                                
                    }

                    alert("Your Array After Substituting Elements as following :" + Names +
                          "\n" + "Your Array's Length After Substituting Elements as following :" + Names.length);    

                    document.getElementById("DisplayAfterSubsM53").innerHTML =
                        "Your Array After Substituting Elements as following :" + Names + "<br>" +       
                        "Your Array's Length After Substituting Elements as following :" + Names.length ;                               
                }
                
                                
            } else {
                alert("The Count is Greater than the Array Length!");
                document.getElementById("DisplayAfterSubsM53").innerHTML =
                    "The Count is Greater than the Array Length!";             
            }            
            break;
        default:
            alert ("You Did not enter any correct Choice");
            break;
    }             
}
