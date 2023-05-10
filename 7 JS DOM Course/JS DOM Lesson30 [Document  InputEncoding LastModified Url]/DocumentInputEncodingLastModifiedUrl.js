// JS DOM Lesson29 [Elements  Style] :

    var dis = document.getElementById('dis');

    console.log(document.inputEncoding);
    alert(document.inputEncoding);

    console.log(document.lastModified);
    alert(document.lastModified);
    
    console.log(document.URL);
    alert(document.URL);


    dis.innerHTML = 'Document Input Encoding is : ' + document.inputEncoding + '<br>' +'Document Last Modified Date and Time is : ' + document.lastModified + '<br>'  + 'Document URL is : ' + document.URL; 
// =============================================================================================================

    function test() {
        var dis = document.getElementById('dis');

        console.log(document.inputEncoding);
        alert(document.inputEncoding);
    
        console.log(document.lastModified);
        alert(document.lastModified);
        
        console.log(document.URL);
        alert(document.URL);
    
    
        dis.innerHTML = 'Document Input Encoding is : ' + document.inputEncoding + '<br>' +'Document Last Modified Date and Time is : ' + document.lastModified + '<br>'  + 'Document URL is : ' + document.URL; 
    
    }

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}