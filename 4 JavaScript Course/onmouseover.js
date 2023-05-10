// Onmouseover Event :
 var myDiv1 = document.getElementById("div1"),
     myDiv2 = document.getElementById("div2"),
     myDiv3 = document.getElementById("div3");


myDiv1.onmouseover = function () {
    "use strict";
    myDiv1.innerHTML = "You just overed on div ..";    
}

myDiv2.onmouseout = function () {
    "use strict";
    myDiv2.innerHTML = "You just out on div ..";    
}

myDiv3.onmouseover = function () {
    "use strict";
    myDiv3.innerHTML = "You just overed on div ..";    
}

myDiv3.onmouseout = function () {
    "use strict";
    myDiv3.innerHTML = "You just gone out of div ..";    
}

                    
