

<?php 

    $ha1 = '[Simple exit()] : Stop executing the next script as following : ' . "<br>" ; 
    echo 'Welcome to ' . $ha1  ;
    

    // Declaring Simple varaible :  
        $name= 'Shadi';
        echo 'Hello ' . $name . "<br>";
                    
    //  Printing a message of stoping executing following script by usign exit() : 
        echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using exit()" . "<br>" ;
    
    // Using [exit()] method to stop exectuting the following Script: 
        exit();
    

    //  Printing a message for testing the exit() running code : 
        echo "If you see this script => This mean that the exit() function is not working  " ;            
            
    
    echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                        

?>