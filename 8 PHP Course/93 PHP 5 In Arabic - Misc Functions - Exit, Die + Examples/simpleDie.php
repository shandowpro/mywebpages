
<?php 

    $ha2 = 'Second Example => [Simple die()]  : Stop executing the next script as following : ' . "<br>" ; 
    echo 'Welcome to ' . $ha2 ; 
    
    
    // Declaring Simple variable :  
        $name= 'Shadi';
        echo $name;

    //  Printing a message of stoping executing following script by usign exit() : 
        echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
        
    // Using [die()] method to stop exectuting the following Script: 
        die;        


    //  Printing a message for testing the exit() running code : 
        echo "If you see this script => This mean that the die function is not working  " ;            
                        
        
    echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                        

?>