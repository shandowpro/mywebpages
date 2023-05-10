
<?php 

    session_start();        
    
    // Checking if the Session User variable is real existed or not = > To Garruttee a secured Method for logging in : 
    
        if (isset($_SESSION['user'])) {
  
            // Welcome with the user after confirming his admin   : 
                echo 'Welcome ' . $_SESSION['user'] . ' to your Control Panel' . "<br>" ; 
            
            // Displaying all inmformation to the user [as control Panel] : 
                echo 'All Your Information as following :  ' . "<br>" ;                 
            
                echo "<pre>" ; 
                print_r($_SESSION);
                echo "</pre>" ; 

        } else {
            // Printing an Error Message that the user is not Permitted to access to the Control Panel , due to he is not Admin or , Illegal Access : 
                echo 'Sorry , Your can NOT Access the Control Panel with out loging from From' ; 
        }

?>