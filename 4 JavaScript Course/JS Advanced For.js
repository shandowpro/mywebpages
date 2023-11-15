/* global alert, document, prompt */
/* jslint plusplus: true evil: true */
/* [Adanaced For Loop Statement] */

function mthd1() {
    
    function mult(num, start, end, Mend) {        
        var all = "",
            x,
            i;                       
        for (i = num; i <= end; i++) {
         //   document.write("<textarea id='table' width='300'>" + "</textarea>");
            all += "Multiply table of ( " + i + " ) as Following: \n";
            //console.log("Multiply table of ( " + i + " ) as Following:");
            
            for (x = start; x <= Mend; x++) {
                //console.log(i + " X " + x + " = " + (i * x));
                if (x == Mend) {
                    all += i + " X " + x + " = " + (i * x) + "\n" + "=================================================\n";       
                } else {
                    all += i + " X " + x + " = " + (i * x) + "\n";                    
                }
            }            
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
        var x,
            year;                       
        
        document.write("<select id='MultChoices'>");
        
        for (year = start; year <= end; year++) {
            
            document.write("<option value='" + year + "'>" + year + "</option>");                        
            
        }        
        docment.write("</select>");
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
        
        var year;                       
        document.write("<select id='MultChoices'>");

        for (year = start; year <= end; year++) {

            document.write("<option value='" + year + "'>" + year + "</option>");                        
        }        
        
        docment.write("</select>");                                                                
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
                    if (uStart == NaN || uEnd == NaN) {
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
