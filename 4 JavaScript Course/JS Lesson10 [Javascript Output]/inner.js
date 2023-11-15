
function test2() {
    
    /* global document */
    var myName = "Shadi",
        myAge = 33,
        myDiv = document.getElementById("testinner");
        
    
    // Using Short Cut Method to Call Element & Add specific content inside:
    myDiv.innerHTML = "<span style='color:blue'> My Name is : </span>" + myName + "<br>" +               
                 "<span style='color:blue'> My Age is : </span>" + myAge;
    
}    


// ===============================================================================================================
function display2() {
    document.getElementById('SourceCode').textContent = test2;    

}
