<?php 

    // (*) => First Example => In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number  ]:
        $ha1 = 'In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying the fixed Number  ] :  as following : ' . "<br>" ; 

        // Resuming the latest Session :
            session_start();            
            
        //  User Welcome to the current page  :            
            echo 'Hello [' . $_SESSION['username'] . '] ' . '<br>' . ' Welcome to the web application : [Session Simple Counter]  => {Main Page} '  . "<br>" . "<br>" ;
            echo 'You are in the display page [display.php] '  . "<br>" . "<br>" ;
            echo 'Your latest counter value is [ '. $_SESSION['counter'] . ' ]'  . "<br>" . "<hr>" ;
            
        // Link to the [about] inner page : 
            echo '<h2> Click on the link below to go the About inner page  </h2>' . "<br>" ;
            echo '<a href="about.php"> ِAbout </a>' . "<br>" ;
            
        // Link to the [counter Home] main page :     
            echo '<h2> Click on the link below to go the [90 PHP 5 In Arabic - Session Training - Simple Counter.php] Main page  </h2>' . "<br>" ;
            echo '<a href="90 PHP 5 In Arabic - Session Training - Simple Counter.php"> Home </a>' . "<br>" ;
    
            
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                        
    // =================================================================================                            
        
?>