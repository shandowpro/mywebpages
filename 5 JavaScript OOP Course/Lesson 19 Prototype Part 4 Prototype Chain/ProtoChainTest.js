function test2(){

    alert("Welcome to test application ,,,");
    
    var str= new String();

    alert("Portotype of String Varaible as following :");
    alert(str);

    console.log("Portotype of String Varaible as following :");
    console.log(str);
    console.log("--------------------------------------");
    
    
    console.log("Portotype of the Prototype of String Varaible as following :");
    console.log(str.prototype);
    console.log("--------------------------------------");
}
// =-------------------------------------------------------------------------------------------------

function Display2() {
    document.getElementById('txtarea2').textContent = test2;
}

