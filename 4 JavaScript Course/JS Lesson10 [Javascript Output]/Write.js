
function test1() {    

    /* global document */
    var myName = "Shadi",
        myAge = 33;
            
    // Creating Span element(Tag) inside the Div [testwrite] Functions And Adding simple And Variables values formated by Css Code:
    // This Code must be written iside the desired Tag/Element (because it will be executed where it was directly):
    document.write("<span style='color:blue'> My Name is : </span>" + myName + "<br>" + 
    "<span style='color:blue'> My Age is : </span>" + myAge);                     

}
//================================================================================

function display1() {
    document.getElementById('SourceCode1').textContent = test1;    

}


