/*global document, alert, prompt*/

function mthd1() {
    alert("Welcome to String Searching Method1 [.indexOf();]");
    
    var myString = prompt("Enter your Main Text"),
        word = prompt("Enter The Word to Search And Find"),        
        IndexStart = prompt("Enter your Search Start index... "),
        IndexW = myString.indexOf(word, IndexStart);
    
    if (IndexW == -1) {
        alert("Your Word Is Not Exsistened in the main Word!");
        document.getElementById("Mthd1").innerHTML = "Your Word Is Not Existened in the main Word!";
                        
    } else {
        alert("Your Word has Been found Successfuly!");
        alert("Your Word's Index is {" + IndexW + "}");
        document.getElementById("Mthd1").innerHTML = "Your Word has Been found Successfuly!" + "<br>" +
            "Your Word's Index is : " + IndexW;        
    }    
}
// ===================================================================================================

function mthd2() {
    alert("Welcome to String Searching Method2 [.lastIndexOf();]");
    
    var myString = prompt("Enter your Main Text"),
        word = prompt("Enter The Word to Search And Find"),        
        IndexStart = prompt("Enter your Search Start index... "),
        IndexW = myString.lastIndexOf(word, IndexStart);
    
    
    if (IndexW == -1) {
        alert("Your Word Is Not Exssistened in the main Word!");
        document.getElementById("Mthd2").innerHTML = "Your Word Is Not Existened in the main Word!";
                        
    } else {
        alert("Your Word has Been found Successfuly!");
        alert("Your Word's Index is {" + IndexW + "}");
        document.getElementById("Mthd2").innerHTML = "Your Word has Been found Successfuly!" + "<br>" +
            "Your Word's Index is : " + IndexW;        
    }    
}
// ===================================================================================================

function mthd3() {
    alert("Welcome to String Searching Method3 [.search();]");
    
    var myString = prompt("Enter your Main Text"),
        word = prompt("Enter The Word to Search And Find"),                
        IndexW = myString.search(word);
    
    
    if (IndexW == -1) {
        alert("Your Word Is Not Exsistened in the main Word!");
        document.getElementById("Mthd3").innerHTML = "Your Word Is Not Existened in the main Word!";
                        
    } else {
        alert("Your Word has Been found Successfuly!");
        alert("Your Word's Index is {" + IndexW + "}");
        document.getElementById("Mthd3").innerHTML = "Your Word has Been found Successfuly!" + "<br>" +
            "Your Word's Index is :" + IndexW;        
    }    
}