function OutPut() {

    /* global console, alert */
    var myName = "Shadi",
        myAge = 33,
        x = 10,
        y = 20;
        myDiv1 = document.getElementById("testwrite");
    
    
    
    // Creating Span element(Tag) inside the Div [testwrite] Functions And Adding simple And Variables values formated by Css Code:
    
    myDiv1.innerHTML = "<span style='color:blue'> My Name is : </span>" + myName + "<br>" +
                 "<span style='color:blue'> My Age is : </span>" + myAge;  


}
// =======================================================================================================

function test() {
    document.getElementById('displayOut').textContent = OutPut;    

}


