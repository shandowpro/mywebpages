<!-- [Adding Admin Display] => Directed from [Adding Admin Form]  --> 

<?php

// (*) => Fourth Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login html page] and Add it to another procceesing php {If condition Check && array database Simulation}] :
    $ha4 = "Predefined Variables - GET - { $ _ GET['Variable Name'] } => [ Getting the Current GET Address ] :  as following : " . "<br>" ;
            
    // Declaring the Admins array [Simulation Database] : 
        $admins = array('Shadi' , 'Sayed' , 'Mohammed');
    
    // Declaring the variables of input [admin] in the Add new From page using { $ _ GET[] }: 
        // $username = $_GET['username'];
        // $password = $_GET['password'];
        $admin = $_GET['admin']; 
        
    // Adding new admin to the DB Array :             
        array_push($admins, $admin);
        echo 'Welcome ' . $admin . '<br>' . 'Your new account has been added to DB administration successfuly! ' . '<br>' . '<br>';                        
    
    // Displaying DB Array after updating :             
        echo 'Your Admin DB after updating as following : ' . '<br>' ; 
        echo '<pre>'; 
        print_r($admins);
        echo '</pre>'; 
        
        echo 'Your Admins DB count after updating as following : ' . '<br>' ; 
        echo array_count_values($admins);

    echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
// ---------------------------------------------                
    // ====================================================================================        
?>