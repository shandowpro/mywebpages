/* JavaScript Lesson 21 [Javascript Scope Part 2] ] */
// ================================================================================================================================

function test () {

    // Example 1 :  (Invoking & Using Global Variable inside Local Scope):
    function process1() {
        alert("Welcome to Multiply Application (Example1) ...");
        
        var x = prompt("Enter your First Global Number:"), // Global Variable
            z = prompt("Enter your Second Global Number:"); // Global Variable

        function testFunc() {
            "use strict";
            var calc = x * z;
            
            alert(calc + ": This is Multiply Result From a Local Scope");
            
            document.getElementById("Display").innerHTML = calc + " : This is Addition Result From a Local Scope";        
        }
        return testFunc();            
    }
}
// ========================================================================================================================
 function test1 () {

     // Example 2: (Reusing Global Variable's Name inside Local Scope as new Local Variable) :
     function process2() { 
         "use strict";
         alert("Welcome to Multiply & Division Application (Example2) ...");
         
         var x = 5, // Global Variable
             z = 6; // Global Variable
         
         function testFunc1() {
             var x = prompt("Enter your Main Global Number1 :"),  // using the same name of Global Variable as a local Variable 
                 z = prompt("Enter your Main Global Number2 :");  // using the same name of Global Variable as a local Variable
     
             document.getElementById("Display1").innerHTML = x + " : This is First Number (Local Variable) from Local Scope " + "<br>" + z + ": This is Second Number (Local Variable) form Local Scope";                
             
             alert(x + " : This is First Number (Local Variable) from Local Scope \n " + z + ": This is Second Number (Local Variable) from Local Scope");    
         }
         return testFunc1();
     }

 }


// ========================================================================================================================

function test2() {
    // Example 3: (Invoking & Re-Allocating Global Variable inside Local Scope) :
    function process3() { 

        "use strict";
        alert("Welcome to Modifiying Input Application (Example3) ...");
        
        var name = prompt("Enter a Name ..."),    // Global Variable 
            num = prompt("Enter a Number ...");   // Global Variable 
        
        function testFunc2() {
            name = "Shadi",   // Invoking the Global Variable and Re-Alocating it with different Value 
            num = 100 ;       // Invoking the Global Variable and Re-Alocating it with different Value 
            
            alert("Your Name has been modified to: " + name + " \n Your Number has been Modified to : " + num);    

            document.getElementById("Display2").innerHTML = "Your  Name has been modified to: " + name + "<br>" + "Your Number has been Modified to : " + num ;                 
            
        }
        return testFunc2();
    }
    
}

// ========================================================================================================================
function test3 () {

    // Example 4: (Function (Local Scope) Inside anothter Child Function Child (Local Scope) + Invoking & Re-Allocating Global Variable inside Local Scope) :
    function process4() { 

        "use strict";
        alert("Welcome to (2) Nested Scopes Application (Example4) ...");
        
        var fname = prompt("Enter your First Name ...");    // Global Variable         
        
        function testFunc3() {
            var sname = prompt("Enter your Second Name ...") ;   
                    
            alert("Your Full Name is :" + fname + " " + sname);    
    
            document.getElementById("Display3").innerHTML = "Your Full Name is :" + fname + " " + sname ;                 
            
        }
        return testFunc3();
        
    }

}


// ========================================================================================================================
 
function test4 () {

    // Example 5: (Function (Local Scope) Inside anothter Child Function Child (Local Scope) + Reusing Global Variable's Name inside Local Scope as new Local Variable) :
    function process5() { 
        "use strict";
        alert("Welcome to (2) Nested Scopes Application (Example5) ...");
        
        var fname = prompt("Enter your First Name ..."),    // Global Variable         
            age = 30; // Global Variable         
            age = 30; // Global Variable         
        function testFunc4() {
            
            var sname = prompt("Enter your Second Name ...") ,   
                age = prompt("Enter your Age"); // Using Global Variable's name & Re-Allocating it with different value...        
            
            alert("Your Full Name is :" + fname + " " + sname + "\n Your Age is :" + age);    

            document.getElementById("Display3").innerHTML = "Your Full Name is :" + fname + " " + sname + " Your Age is :" + age;                       
        }
        return testFunc4();    
    }
} 

// ========================================================================================================================
function test5() {
    
    // Example 6: ((3 Functions (3 Local Scopes) Inside anothter each other)) :
    function process6() { 
        "use strict";
        alert("Welcome to (3) Nested Scopes Application (Example6) ...");
        
        var fname = prompt("Enter your First Name ..."), // Global Variable
            age = 30; // Global Variable
        
        function parentFunc() {
            
            var sname = prompt("Enter your Second Name ...") ,   // Local Variable of Local Scope level 1 
                age = prompt("Enter your Age"); // Using Global Variable's name As a Local Variable (Parent Scope) & Re-Allocating it with different value...        
                    
            function childFunc() {
                var lname = prompt("Enter your Last Name ..."); // Local Variable of  Local Scope level 2                                         
                document.getElementById("Display5").innerHTML = "Your Full Name is :" + fname + " " + sname + " " + lname + "<br>" +
                    " Your Age is :" + age; // Invoking different Local Variabel form different Local Scope Levels [In one Element]

                alert("Your Full Name is :" + fname + " " + sname + " " + lname + "\n Your Age is :" + age);    
            }        
            return childFunc(); //Allocating the Parant Function Return as Child Function Invoking                             
        }
        return parentFunc(); //Allocating the Process Function Return as Parent Function Invoking                                
    }        
}

// ==============================================================================================
// ==============================================================================================

function display() {
    document.getElementById('SourceCode').textContent = test;
    document.getElementById('SourceCode1').textContent = test1;
    document.getElementById('SourceCode2').textContent = test2;
    document.getElementById('SourceCode3').textContent = test3;
    document.getElementById('SourceCode4').textContent = test4;
    document.getElementById('SourceCode5').textContent = test5;
}



