    /* global alert, prompt */

// Array Sort Array Elements Function [Reverse Method] {Reversing Array Elements Wirt out Sorting }:

function SortM2() {
    alert("Welcome to Array Sorting/Deleting Element(s) by [ Reverse Method ]\n This Method will Sort Dessingly");
    
    var Names = ["Shadi", "Sayed", "Mohammed", "Ahemed", "Badawi"];
        
    alert("Your Array Before Sorting Array Element Process as following :" + Names +
          "\n Your Array's Length Before Sorting Array Element Process as following  :" + Names.length  ) ;        
    document.getElementById("DisplayBeforeSort2").innerHTML =
            "Your Array Before Sorting Array Element Process as following :" + Names + "<br>" +        
            "Your Array's Length Before Sorting Array Element Process as following  :" + Names.length;                                
    Names.reverse();
    
    
    alert("Your Array After Sorting Array Element Process as following :" + Names +
          "\n Your Array's Length After Sorting Array Element Process as following :" + Names.length);        

    document.getElementById("DisplayAfterSort2").innerHTML =
          "Your Array After Sorting Array Element Process as following :" + Names ;         
}