<?php 

    $ha3 = 'Third Example => [Handling file open with exit()]  : Stop executing the next script in case the file is not exited  as following : ' . "<br>" ; 
    echo 'Welcome to ' . $ha3 ; 
    
    // Declaring Simple varaible :  
        $name= 'Shadi';
        echo 'Hello ' . $name . "<br>";

    //  Declaring Simple varaible of unexited file  :          
        $file = 'shadi.txt';

    //  Declaring a Handler of opining the file for read mode :
        $handle = fopen($file, 'r');
     
     //  Printing a message of stoping executing following script by usign exit() : 
         echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
     
     
     // Using [exit()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
         exit("{exit Method} Customized Error: Unable to open the $file");


     //  Printing a message for testing the exit() running code : 
         echo "If you see this script => This mean that the exit() function is not working  " ;            
     
     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";




?>
        