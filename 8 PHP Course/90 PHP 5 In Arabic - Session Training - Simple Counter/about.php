<?php 

    // Including the {c.php} counting processing page to the current page : 
        include 'c.php' ;

    // Resuming the latest session : => [We will not define the session start , due to it is already defined in the included page ]  
        // session_start();

    // Welcome by the user :
        echo 'Hello ' . $_SESSION['username'] . " You are in [about inner page] "  ; 

    // Displaying the active value of the counter:
        echo $_SESSION['counter']; 
    
    
    // Link to the [about] inner page : 
        echo '<h2> Click on the link below to go the About inner page  </h2>' . "<br>" ;
        echo '<a href="about.php"> ِAbout </a>' . "<br>" ;
    
    // Link to the [counter Home] main page : 

        echo '<h2> Click on the link below to go the [90 PHP 5 In Arabic - Session Training - Simple Counter.php] Main page  </h2>' . "<br>" ;
        echo '<a href="90 PHP 5 In Arabic - Session Training - Simple Counter.php"> Home </a>' . "<br>" ;


?>