
<?php 
    // Defining the Session Start in this [check] page :
        session_start();
    
    // Declaring the array of Admins as database Simulation :
      $admins = array("Shadi" , "Sayed" , "Mohammed");
    
    // Checking if the user is comming to this page [check] by legal method OR NOT : 
        if ($_SERVER['REQUEST_METHOD']  = "POST") {

        // Putting the username come from the Login Form in a variable :
            $user = $_POST['username'] ;
            
        // Checking if the the username Variable is Existed in the Admins Array or not :
                
            if (in_array($user , $admins)) {
                    
                // Defining the username variable after checking as admin in Session Variable:
                    $_SESSION['user'] = $user;
                
                // Welcome to the user and Redirecting him to the control panel page:
                    echo 'Weclome [' . $_SESSION['user'] .  '] ' . '<br>'; 
                    echo 'You are Admin'; 
                
                    echo 'You will be located to your control panel with in (3 seconds)'  ; 

                header('REFRESH:3; URL=control.php');
            
            } else {
                // Printing an Error message to the user if he is not an admin: 
                echo 'Sorry , You are not admin!, and Not Permitted to access to the Control Panel!' ; 

            }

        } else {
            // Printing an Error message to the user if he come for the check page by Elligal Method : 
            echo 'Sorry , Your can NOT Access the Control Panel with out loging from From' ; 
        }

?>

