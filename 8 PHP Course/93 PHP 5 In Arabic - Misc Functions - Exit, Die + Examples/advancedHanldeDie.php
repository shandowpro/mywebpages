<?php 

    $ha6 = 'Sixth [Handling file open with die() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized Error Message + using [or] syntax  as following : ' . "<br>" ; 
    echo 'Welcome to ' . $ha6 ; 
    

    // Declaring Simple variable :  
        $name= 'Shadi';
        echo 'Hello ' . $name . "<br>";


    // Declaring Simple varaible of unexited file  :  
        $file = 'shadi.txt';

    // Declaring a Handler of opining the file for read mode & Using [die()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
        $handle = @fopen($file, 'r')
            or die("{die Method} Customized Error: Unable to open the $file");
    
    //  Printing a message of stoping executing following script by usign exit() : 
        echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
    
    
    //  Printing a message for testing the die() Running code : 
        echo "If you see this script => This mean that the die() function is not working "; 

        
    echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

?>
        