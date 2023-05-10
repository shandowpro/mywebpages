<?php 

    // Resuming the latest Session : {note that the session_start will be difined once thiis page is included to a nother page} : and will throw an Error if it redefinded        
        session_start();

    if (empty($_SESSION['counter'])) {
     
        $_SESSION['counter'] = 1;
        
    } else {
        
        $_SESSION['counter']++  ;
        
    }    
    
    echo 'Your current count number = [' . $_SESSION['counter'] . ']';
    
?>