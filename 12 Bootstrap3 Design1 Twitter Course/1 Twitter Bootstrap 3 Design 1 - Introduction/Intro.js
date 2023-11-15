
// JS BOM Lesson1 [Intro & What is BOM] :

// General BOM Functions and Methods : 
    var outM = window.alert('Hello , This is an Output Message ...'),                
        inputM = window.prompt('Hello, please insert your name'),
        testM = confirm('Please Confirm Your Password'), 
        testM2 = window.confirm('Please Confirm Your Password'), 
        outM2 = alert('Hello ' + inputM);        

    // Displaying information about the Browser  [Inner Height + Outer Height] :
        alert('The Current Browser Inner Height is  ' + window.innerHeight);        
        alert('The Current Browser Outer Height is  ' + window.outerHeight);

    // Displaying information about the Browser  [Inner Width + Outer Width] :
        alert('The Current Browser Inner width is  ' + window.innerWidth);    
        alert('The Current Browser Outer width is  ' + window.outerWidth);

            
// =============================================================================================================
    
function test() {    
    // General BOM Functions and Methods : 
        var outM = window.alert('Hello , This is an Output Message ...'),                
        inputM = window.prompt('Hello, please insert your name'),
        testM = confirm('Please Confirm Your Password'), 
        testM2 = window.confirm('Please Confirm Your Password'), 
        outM2 = alert('Hello ' + inputM);        

    // Displaying information about the Browser  [Inner Height + Outer Height] :
        alert('The Current Browser Inner Height is  ' + window.innerHeight);        
        alert('The Current Browser Outer Height is  ' + window.outerHeight);

    // Displaying information about the Browser  [Inner Width + Outer Width] :
        alert('The Current Browser Inner width is  ' + window.innerWidth);    
        alert('The Current Browser Outer width is  ' + window.outerWidth);

}
// =============================================================================================================

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";}