
/* 5 Learn JS BOM - Window Methods - setInterval */

    /* A] First Basic Application ->
        1) [SetInteval() Method to write a text inside an Element {every #Time upon user Desire }] 
        2) Create Button to stop the working of setInterval() Method by [clearInterval]            
    */
    
    // setInterval() : 
        // Getting all Required Variables: 
            var elem = window.document.getElementById('elem'),
                a = parseInt(prompt('Insert the Time Amount by seconds'))*1000,
                btn = window.document.getElementById('btn');        


        // Displaying the {Time Inserted value}  :
            alert('Your inserted value is \n' + (a /1000) + ' Seconds' );
            console.log('Your inserted value is \n' + (a/1000) + ' Seconds');
            
        //  Declaring the Function to be called :
            function writeMsg() {
                'use strict';
                console.log('This Text written every ' + (a/1000) + ' Second') ;
                // elem.textContent += 'This Text written every ' + (a/1000) + ' Second' + '\n\n' ;    
                elem.innerHTML += 'This Text written every ' + (a/1000) + ' Second' + '<br>' ;    
            }
                
        //  Defining the Declared setInterval() Function inside the Variable :
            var myTime = setInterval(writeMsg, a);

    // ===============================================================

    // clearInterval() : 
        // Creating A Button to Stop Working with the setInterval() Function => by clearTimeout() : 
        btn.onclick =  function() { 
            clearInterval(myTime);
            alert('The setInterval Looping Has been De-Activated Successfully!');
            console.log('The setInterval Looping Has been De-Activated Successfully!');
        };            
    // =============================================================================================================
    
    /* B] Second CountDown Application ->
        1) [SetInteval() Method to Change a text Numeric value inside an Element {every 1 Second}] 
        2) Create Button to stop the working of setInterval() Method by [clearInterval]            
    */

    // Getting all Required Variables: 
        var elem1 = window.document.getElementById('elem1'),            
            btn1 = window.document.getElementById('btn1'),
            myTime1;

    // Declaring CountDown Function :
        function countDown() {
            'use strict';
            if (elem1.textContent <= 0 ) {

                elem1.textContent = 'Done ...';
                clearInterval(myTime1);

            } else {
                elem1.textContent -= 1 ;                
            }

        }

    var myTime1 = setInterval(countDown,1000);


    btn1.onclick = function() {
        'use strict';
        clearInterval(myTime1);
        elem1.textContent = 'Countdown Stopped';
    }

// =============================================================================================================
    
function test() {            
    
    /* A] First Basic Application ->
        1) [SetInteval() Method to write a text inside an Element {every #Time upon user Desire }] 
        2) Create Button to stop the working of setInterval() Method by [clearInterval]            
    */
    
    // setInterval() : 
        // Getting all Required Variables: 
        var elem = window.document.getElementById('elem'),
            a = parseInt(prompt('Insert the Time Amount by seconds'))*1000,
            btn = window.document.getElementById('btn');        


    // Displaying the {Time Inserted value}  :
        alert('Your inserted value is \n' + (a /1000) + ' Seconds' );
        console.log('Your inserted value is \n' + (a/1000) + ' Seconds');
        
    //  Declaring the Function to be called :
        function writeMsg() {
            'use strict';
            console.log('This Text written every ' + (a/1000) + ' Second') ;
            // elem.textContent += 'This Text written every ' + (a/1000) + ' Second' + '\n\n' ;    
            elem.innerHTML += 'This Text written every ' + (a/1000) + ' Second' + '<br>' ;    
        }
            
    //  Defining the Declared setInterval() Function inside the Variable :
        var myTime = setInterval(writeMsg, a);

    // ===============================================================

    // clearInterval() : 
        // Creating A Button to Stop Working with the setInterval() Function => by clearTimeout() : 
            btn.onclick =  function() { 
                clearInterval(myTime);
                alert('The setInterval Looping Has been De-Activated Successfully!');
                console.log('The setInterval Looping Has been De-Activated Successfully!');
            };            
    // =============================================================================================================

    /* B] Second CountDown Application ->
        1) [SetInteval() Method to Change a text Numeric value inside an Element {every 1 Second}] 
        2) Create Button to stop the working of setInterval() Method by [clearInterval]            
     */

    // Getting all Required Variables: 
    var elem1 = window.document.getElementById('elem1'),            
        btn1 = window.document.getElementById('btn1'),
        myTime1;

    // Declaring CountDown Function :
        function countDown() {
            'use strict';
            if (elem1.textContent <= 0 ) {

                elem1.textContent = 'Done ...';
                clearInterval(myTime1);

            } else {
                elem1.textContent -= 1 ;                
            }

        }

    var myTime1 = setInterval(countDown,1000);


    btn1.onclick = function() {
        'use strict';
        clearInterval(myTime1);
        elem1.textContent = 'Countdown Stopped';
    }
    
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";
}