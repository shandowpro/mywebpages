// Scopes Applcation: 

function pass() {
    "use strict";
    var GName = prompt("Enter your Global Name ...."),
        GNum = prompt("Enter your Global Age ");

    function LScope() {
        var LName = "Welcome " + GName + " to Scope Application ...",
            LNum = "Hey " + GName + " You Are " + GNum;
        document.getElementById("ScopesApp").innerHTML = LName + LNum;
    }
    LScope();
}



