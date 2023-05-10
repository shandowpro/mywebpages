/* global document, alert, prompt */
/* JSOOP : Comparison between Bracket Notation VS Dot Notation */
function userObj() {
    alert("Welcome to [Object Creator] by user Application...\n This Assumed Texual Object will has (3) Prperties only...");


    // The folowoing Object is the Entries Names And Values of User Objects :
    let userEntries = {
        Name1 = prompt("Enter your Object Property Name Number (1) {Using Numeric Value}..."),
        Value1 = prompt("Enter your Object Property Value Number (1) ..."),
        Name2 = prompt("Enter your Object Property Name Number (2) {Using Special Charcter}..."),
        Value2 = prompt("Enter your Object Property Value Number (2)..."),
        Name3 = prompt("Enter your Object Property Name Number (3) {Using Ordinary Textual Value}..."),
        Value3 = prompt("Enter your Object Property Value Number (3)..."),
    };



    let userObj = {
        NObjProp1: userEntries["Name1"],
        NObjProp2: userEntries["Name2"],
        NObjProp3: userEntries["Name3"],

        DisNames: () => 'Your object properties Names as following :' + "\n Name of the First Property : " + userEntries.Name1 + "\n Name of the Second Property : " +
            userEntries.Name2 + "\n Name of the Third Property : " + userEntries.Name3,



        DisValues1: () => 'Your object properties Values [by Ordinary Method] as following :' + "Value of the First Property : " + userObj.NObjProp1 + "\n Value of the Second Property : " +
            userObj.NObjProp2 + "\n Value of the Third Property : " + userObj.NObjProp3,


        DisValues2: () => 'Your object properties Values [by Hybrid Method] as following :' + "Value of the First Property : " + userEntries["Name1"] + "\n Value of the Second Property : " +
            userEntries["Name2"] + "\n Value of the Third Property : " + userEntries["Name3"],
    };


    var order = prompt('Choose Function : \n Press (1) to display object Propeoreies "Names \n Prss (2) to display object Porperites Values');


    if (order == "1") {

        document.getElementById("txtarea").innerHTML = userObj.DisNames();

    } else if (order == "2") {
        var mthd = prompt("Press to get your object's Properites values using [Ordinary Method] \n Press to get your object's Properites values using [Hybrid Method]");

        if (mthd == "1") {
            document.getElementById("txtarea").innerHTML = userObj.DisValues1();

        } else if (mthd == "2") {
            document.getElementById("txtarea").innerHTML = userObj.DisValues2();

        } else {
            alert("Error Entry! ");
        }

    } else {
        alert("Error entry!");
    }

}
