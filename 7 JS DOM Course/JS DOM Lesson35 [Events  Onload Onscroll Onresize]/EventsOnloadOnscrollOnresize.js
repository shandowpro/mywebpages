
// JS DOM Lesson35 [Events  Onfocus OnBlur OnSubmit] :

// General Variables Definitions : 
    var formT = document.getElementById('mainT'),
        username = document.getElementById('username'),
        password = document.getElementById('password'),
        note = document.getElementById('note'),
        btnSubmit = document.getElementById('btnSubmit');

// First Event => {onfocus} Events :
    username.onfocus = function() {
        note.value = "Enter Your Username here with at least (5) letters ";    
    };
        
    password.onfocus = function() {
        note.value = "Enter Your Password here with at least (10) letters ";    
    };

// Second => {onblur} Events :    
    username.onblur = function() {        
        if(username.value.length < 5 ) {
            note.value = "Error !  Username must be more than 5 letters " ;    
        } else {                
            note.value = username.value + ' Is Correct Value!';    
        }
    };
    
    password.onblur = function() {        
        if(password.value.length < 10 ) {
            note.value = "Error !  Password must be more than 10 letters " ;    
        } else {                
            note.value = password.value + ' Is Correct Value !' + '<br>';    
        }
    };
                

// Third Event => {onsubmit} Event :     
    btnSubmit.onsubmit = function(e) {            
        e.preventDefault();                
        // if (username.value === '' || password.value === '' ) {
        
        //     console.log('There are one or More Input Fields is Empty!');
            
        //     alert('There are one or More Input Fields is Empty!');

        //     note.value = 'There are one or More Input Fields is Empty!'; 

        
        // } else {
        
        //     if (username.value.length < 5 || password.value.length < 10) {
                
        //         e.preventDefault();
                
        //         console.log('One or More of Fields Entries are Wrong !\n Check back your Form Inputs ');
                
        //         alert('One or More of Fields Entries are Wrong !\n Check back your Form Inputs ');
                
        //         note.value = 'One or More of Fields Entries are Wrong !\n Check back your Form Inputs !'; 
        
        //     } else {
        //         note.value = 'Form Validation Rules Passed Successflly! \n All Form Inputs fields are correctly inserted !'; 
        //     }
        // }        
    };

// =============================================================================================================
    
function test() {

    // General Variables Definitions : 
    var formT = document.getElementById('mainT'),
    username = document.getElementById('username'),
    password = document.getElementById('password'),
    note = document.getElementById('note'),
    btnSubmit = document.getElementById('btnSubmit');

    // First Event => {onfocus} Events :
        username.onfocus = function() {
        note.value = "Enter Your Username here with at least (5) letters ";    
    };
    
    password.onfocus = function() {
    note.value = "Enter Your Password here with at least (10) letters ";    
    };

    // Second => {onblur} Events :    
    username.onblur = function() {        
        if(username.value.length < 5 ) {
            note.value = "Error !  Username must be more than 5 letters " ;    
        } else {                
            note.value = username.value + ' Is Correct Value!';    
        }
    };

    password.onblur = function() {        
        if(password.value.length < 10 ) {
            note.value = "Error !  Password must be more than 10 letters " ;    
        } else {                
            note.value = password.value + ' Is Correct Value !' + '<br>';    
        }
    };
            

    // Third Event => {onsubmit} Event :     
    btnSubmit.onsubmit = function(e) {            
        e.preventDefault();                
        // if (username.value === '' || password.value === '' ) {
        
        //     console.log('There are one or More Input Fields is Empty!');
            
        //     alert('There are one or More Input Fields is Empty!');

        //     note.value = 'There are one or More Input Fields is Empty!'; 

        
        // } else {
        
        //     if (username.value.length < 5 || password.value.length < 10) {
                
        //         e.preventDefault();
                
        //         console.log('One or More of Fields Entries are Wrong !\n Check back your Form Inputs ');
                
        //         alert('One or More of Fields Entries are Wrong !\n Check back your Form Inputs ');
                
        //         note.value = 'One or More of Fields Entries are Wrong !\n Check back your Form Inputs !'; 
        
        //     } else {
        //         note.value = 'Form Validation Rules Passed Successflly! \n All Form Inputs fields are correctly inserted !'; 
        //     }
        // }        
    };

// =============================================================================================================
}

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";      
}