
// 3 Learn JS BOM - Window Methods - Alert, Prompt, Confirm :

// General BOM [Functions and Methods] Example: 
    var elem = window.document.getElementById('elem'),
        btn = window.document.getElementById('btn'),
        note = window.document.getElementById('note'),
        a = window.prompt('Input your element value / content to be inserted in the Element:');    
    
// Dispalying the {Inserted value}  :
    alert('Your inserted value is \n' + a);
    console.log('Your inserted value is \n' + a);
    
// Confirming the {Inserted value}  :
    inputS = confirm('Are you sure about the inserted value is \n' + a);

    if (inputS === true) {
    
        elem.textContent = a;
        note.textContent = elem.textContent;    
    
    } else {
        alert('Sorry have not Confirmed the Inserted value');
    }
                
        
        
// Creating A Button to Transport to another Website + with confirmation action   : 
   btn.onclick =  function() {        
        var x = confirm('Are you sure you want to go the Google Website?');
        
        if (x === true) {
            window.location.href = 'https://www.google.com'; 
        } else {
            alert('You Dis-Confirmed to Go to Google Website');
        }
   };            
// ===========================================

// =============================================================================================================
    
function test() {        
    // General BOM [Functions and Methods] Example: 
        var elem = window.document.getElementById('elem'),
            btn = window.document.getElementById('btn'),
            note = window.document.getElementById('note'),
            a = window.prompt('Input your element value / content to be inserted in the Element:');    
    
    // Dispalying the {Inserted value}  :
        alert('Your inserted value is \n' + a);
        console.log('Your inserted value is \n' + a);
        
    // Confirming the {Inserted value}  :
        inputS = confirm('Are you sure about the inserted value is \n' + a);

        if (inputS === true) {        
            elem.textContent = a;
            note.textContent = elem.textContent;    
        
        } else {
            alert('Sorry have not Confirmed the Inserted value');
        }
                        
                
                
    // Creating A Button to Transport to another Website + with confirmation action   : 
        btn.onclick =  function() {        
                var x = confirm('Are you sure you want to go the Google Website?');
                
                if (x === true) {
                    window.location.href = 'https://www.google.com'; 
                } else {
                    alert('You DisConfirmed to Go to Google Website');
                }
        };            

}
// =============================================================================================================

// ====================================================================================

function display() {
    document.getElementById("SourceCode").innerHTML =  test + "\n\n" + "=".repeat(90) + "\n\n";}