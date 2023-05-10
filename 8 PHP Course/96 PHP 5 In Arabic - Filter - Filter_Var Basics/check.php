<?php 
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        @$inputStr = $_POST['username']; 
        
        // Printing the posted variable from Form [without any filter] : 
            echo 'The posted value from the [Form] , without any filter is ' . "<br>";
            echo @$inputStr . "<br>" . "<hr>";
        
        // Printing the posted variable from Form [with using {FILTER_SANITIZE_STRING} filter] : 
            echo 'The posted value from the [Form] , by using [FILTER_SANITIZE_STRING] is ' . "<br>";
            echo @filter_var($inputStr, FILTER_SANITIZE_STRING) . "<br>" . "<hr>" ;    
        
        // echo 'The posted value from the [Form] , by using [FILTER_DEFAULT] is ' . "<br>";
        // echo filter_var($inputStr, FILTER_SANITIZE_URL) . "<br>" . "<hr>" ;    

    } else {
        echo 'Your have acessed to this page with Illegal Method !';
    }
    
?>

