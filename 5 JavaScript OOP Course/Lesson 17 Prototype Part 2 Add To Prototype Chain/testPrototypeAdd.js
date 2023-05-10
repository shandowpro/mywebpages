function testPro(){

    function constFunc(name) {
        this.name = name;
        this.welcome =  function() {
            return `Welcome ${this.name}`;
        }
    }


    var uFullName = prompt("Enter Your Full Name:");    

    constFunc.prototype.fullName = function() {
        return `Welcome ${uFullName}`;
    };

    var nObj = new constFunc('SHADI');


    /*    
    constFunc.fullName = function() {
        return `Welcome ${uFullName}`;
    };
*/

    alert("The [Main consturctor Function ]after adding new Method as Following :");
    alert(constFunc);

    console.log("The [Main consturctor Function] after adding new Method as Following :");
    console.log(constFunc);
    console.log("=======================================" );

    alert("The [Pototype of the consturctor Function] after adding new Method as Following :");
    alert(constFunc.prototype);
    
    console.log("The [Pototype of the consturctor Function] after adding new Method as Following :");
    console.log(constFunc.prototype);
    console.log("=======================================");
    //==========================================================================================
    
    
    alert("The [Extracted Object of consturctor Function] after adding new Method as Following :");
    alert(nObj);
    
    console.log("The [Extracted Object of consturctor Function] after adding new Method as Following :");
    console.log(nObj);
    console.log("=======================================");
        
// prototype is Not available for an Extracted Object form Constructor Function , but it is available for the Constructro Function it self...            
    alert("The [Pototype of the Extracted Object of consturctor Function] after adding new Method as Following :");
    alert(nObj.prototype);
    
    console.log("The [Pototype of the Extracted Object of consturctor Function] after adding new Method as Following :");
    console.log(nObj.prototype);
    console.log("=======================================");
     
}
// =========================================================================================


function Display2() {
    document.getElementById('txtarea2').textContent = testPro;
}