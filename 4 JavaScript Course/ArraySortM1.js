    /* global alert, prompt */

// Array Sort Array Elements Function [Sort Method] {Assingle Sorting of Array Elements}:

function SortM1() {
    alert("Welcome to Array Sorting Element(s) by [ Sort Method ] \n This Method will Sort Array Element(s) Assingly");
    
    var Names = ["Shadi", "Sayed", "Mohammed", "Ahemed", "Badawi"];
        
    alert("Your Array Before Sorting Array Element Process as following :" + Names +
          "\n Your Array's Length Before Sorting Array Element Process as following  :" + Names.length  ) ;        
    document.getElementById("DisplayBeforeSort1").innerHTML =
            "Your Array Before Sorting Array Element Process as following :" + Names + "<br>" +        
            "Your Array's Length Before Sorting Array Element Process as following  :" + Names.length;                                
    Names.sort();
    
    
    alert("Your Array After Sorting Array Element Process as following :" + Names +
          "\n" + " Your Array's Length After Sorting Array Element Process as following :" + Names.length);        

    document.getElementById("DisplayAfterSort1").innerHTML =
          "Your Array After Sorting Array Element Process as following :" + Names ;
        
}