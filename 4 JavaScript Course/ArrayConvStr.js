/* global alert, prompt, document */ 

// Converting Array Elements to String Value:
//  First Array Convertion to String Method :
function Conv1(){
    var arr = [];
    arr.length = prompt("Enter your Array Elements Count :");
    var arrCount = arr.length;
    
    for (i = 0; i < arrCount; i++){
        arr[i] = prompt("Enter your Array Element Number : " + (i + 1) );                
    }
    
    alert("Your Array elements [with Array Original Format] are: " + arr);
    
    var strArray = arr.toString();
            
    alert("Your Array elements [with String Format] are: " + strArray);    
    
    document.getElementById("DisplayArr1").innerHTML =
        "Your Array elements [with Array Original Format] are: " + arr + "<br>" +
        "Your Array elements [with String Format] are: " + strArray;
}
// -----------------------------------------------------------------------

//  Second Date Convertion to String Method :
function Conv2(){
    var myDate = new Date(),
        strDate = myDate.toLocaleString();
        
    alert("Current Date [with Original Date Format] is: " + myDate);    
    alert("Current Date [with your Locale PC Date Format] is: " + strDate);
        
    document.getElementById("DisplayArr2").innerHTML =
        "Current Date [with Original Date Format] is: " + myDate + "<br>" +
        "Current Date [with your Locale PC Date Format] is: " + strDate;
}
// -----------------------------------------------------------------------

function Conv21(){
    var arr = [];
    arr.length = prompt("Enter your Array Elements Count :");
    var arrCount = arr.length;
    
    for (i = 0; i < arrCount; i++){
        arr[i] = prompt("Enter your Array Element Number : " + (i + 1) );                
    }
    
    alert("Your Array elements [with Array Original Format] are: " + arr);
    
    var strArray = arr.toLocaleString();
            
    alert("Your Array elements [with String Format] are: " + strArray);    
    
    document.getElementById("DisplayArr21").innerHTML =
        "Your Array elements [with Array Original Format] are: " + arr + "<br>" +
        "Your Array elements [with String Format] are: " + strArray;
}
            
// -----------------------------------------------------------------------

//  Third Array Convertion to String Method [by Defualt Seperators]:
function ConvJoin1(){
    var arr = [];
    arr.length = prompt("Enter your Array Elements Count :");
    var arrCount = arr.length;
    
    for (i = 0; i < arrCount; i++){
        arr[i] = prompt("Enter your Array Element Number : " + (i + 1) );                
    }        
    
    alert("Your Array elements [with Array Original Format] are: " + arr);
    var strArray = arr.join();

    alert("Your Array elements [with String Format] are: " + strArray);    
    
    document.getElementById("DisplayArr31").innerHTML =
        "Your Array elements [with Array Original Format] are: " + arr + "<br>" +
        "Your Array elements [with String Customized Format (Default Seperators) ] are: " + strArray;
}
// -----------------------------------------------------------------------

//  Third Array Convertion to String Method [by Customized Seperators (-)]:
function ConvJoin2(){    
    var arr = [];
    arr.length = prompt("Enter your Array Elements Count :");
    var arrCount = arr.length;
    
    for (i = 0; i < arrCount; i++){
        arr[i] = prompt("Enter your Array Element Number : " + (i + 1) );                
    }                
    
    alert("Your Array elements [with Array Original Format] are: " + arr);
    var strArray = arr.join("-");

    alert("Your Array elements [with String Format] are: " + strArray);    
    
    document.getElementById("DisplayArr32").innerHTML =
        "Your Array elements [with Array Original Format] are: " + arr + "<br>" +
        "Your Array elements [with String Customized Format (-) Seperators] are: " + strArray;
}
// -----------------------------------------------------------------------

//  Third Array Convertion to String Method [by Customized Seperators (Empty Spaces)]:
function ConvJoin3(){
    var arr = [];
    arr.length = prompt("Enter your Array Elements Count :");
    var arrCount = arr.length;
    
    for (i = 0; i < arrCount; i++){
        arr[i] = prompt("Enter your Array Element Number : " + (i + 1) );                
    }                
            
    alert("Your Array elements [with Array Original Format] are: " + arr);
    var strArray = arr.join(" ");

    alert("Your Array elements [with String Format] are: " + strArray);    
    
    document.getElementById("DisplayArr33").innerHTML =
        "Your Array elements [with Array Original Format] are: " + arr + "<br>" +
        "Your Array elements [with String Customized Format (Empty Spaces) Seperators] are: " + strArray;
}
