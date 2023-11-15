/* global alert, document, prompt, console */
/* jslint plusplus: true evil: true */
/* [While - Do While Loop Statement] */
function mthd1() {
    
    function mult(num, start, end, Mend) {        
        "use strict";
        
        var all = "",            
            pass = prompt("Press (1) for [While] Method... \n press (2) for [Do - while] Method... "),
            i = parseInt(num);                       
        
        if (pass == "1") {
            
            alert("Welcome to [While] Method...");
            
            while (i <= end) {
                                
                var x = parseInt(start);

                all += "Multiply table of ( " + i + " ) as Following: \n";

                while (x <= Mend) {

                  if (x == Mend) {
                      all += i + " X " + x + " = " + (i * x) + "\n" + "=================================================\n";       
                  } else {
                      all += i + " X " + x + " = " + (i * x) + "\n";                    
                  }
                  x++;
                }
                i++;
            }        
                                    
        } else if (pass == "2") {
            
            alert("Welcome to [While] Method...");
            
            do {
                                
                var x = parseInt(start);
                
                all += "Multiply table of ( " + i + " ) as Following: \n";

                do {

                  if (x == Mend) {
                      all += i + " X " + x + " = " + (i * x) + "\n" + "=================================================\n";       
                  } else {
                      all += i + " X " + x + " = " + (i * x) + "\n";                    
                  }
                  x++;
                } while (x <= Mend);
                
                i++;
            } while (i <= end);       
                        
        } else {
            alert("Error Entry !");
        }
        
        document.getElementById("txtarea").innerHTML = all;                                            
    }
    
    var uNum = parseInt(prompt("Enter your main Number to Create it's Multiply Time Table: ")), 
        uStart = parseInt(prompt("Enter your Start Multiplying Number: ")),
        uMEnd = parseInt(prompt("Enter your End Multiplying Number: ")),
        uEnd = parseInt(prompt("Enter your End Multiply Time Table Number: "));
    
    mult(uNum, uStart, uEnd, uMEnd);
        
}
// =====================================================================================================

function mthd2() {
    "use strict";
    
    function yearsGen(start, end) {        
        var pass = parseInt(prompt("Press (1) for [While] Method... \n press (2) for [Do - while] Method..."));
        
        document.write("<select id='MultChoices'>");

        if (pass == "1") {
            alert("Welcome to [While] Method...");
            
            var year = start;
            
            while (year <= end) {
                document.write("<option value='" + year + "'>" + year + "</option>");                        
                year++;
            }        
                                    
        } else if (pass == "2") {
            alert("Welcome to [Do - While] Method...");
            
            var year = start;
            
            while (year <= end) {
                document.write("<option value='" + year + "'>" + year + "</option>");                        
                year++;
            }        
                        
        } else {
            alert("Error Entry !");
        }
                                
        document.write("</select>");
    }
    
    var uStart = parseInt(prompt("Enter your Start Year : ")),
        uEnd = parseInt(prompt("Enter your End Year : "));
    
    yearsGen(uStart, uEnd);
        
}
// =====================================================================================================

function mthd3() {
    "use strict";
    
    function yearsGen(start, end) {        
        "use strict";
        
        var pass = prompt("Press (1) for [While] Method... \n press (2) for [Do - while] Method...");
                            
        document.write("<select id='MultChoices'>");

        if (pass == "1") {
            alert("Welcome to [while Methods]");
            
            var year = start;
            
            while (year <= end) {

                document.write("<option value='" + year + "'>" + year + "</option>");                        
                year++;
            }        
                        
            
        } else if (pass == "2") {
            
            alert("Welcome to [Do - while Methods]");
        
            var year = start;
            
            do {
                
                document.write("<option value='" + year + "'>" + year + "</option>");                        
                year++;
                
            } while (year <= end);       
            
            
        } else {
            alert("Error Entry!");
        }
        document.write("</select>");                                                                
    }
    
    
    var uStart = parseInt(document.getElementById("startY").value),
        uEnd = parseInt(document.getElementById("endY").value),
        StrStart = document.getElementById("startY").value,
        StrEnd = document.getElementById("endY").value;
            
        if (StrStart == "" || StrEnd == "") {
                alert("Can Not Accept Empty Value !");                                       
        } else {
            if (uStart === 0 || uEnd === 0) {
                alert("Can Not Accept Zero Value !");
            } else {
                if (uStart < 0 || uEnd < 0) {
                    alert("Can Not Accept Negative Value !");
                    document.getElementById("startY").value = 0;
                    document.getElementById("endY").value = 0;
                } else {
                    if (isNaN(uStart) || isNaN(uEnd)) {
                        alert("Can Not Accept Un Numeric Value !");                                                              
                        document.getElementById("startY").value = 0;
                        document.getElementById("endY").value = 0;
                    } else {                                        
                        if (uStart > uEnd) {
                            alert("Start Value must be smaller than End Value !");                                                     
                            document.getElementById("startY").value = 0;
                            document.getElementById("endY").value = 0;
                        } else {
                            yearsGen(uStart, uEnd);                
                        }                
                    }
                }
            }        
        }        
}
// =====================================================================================================
