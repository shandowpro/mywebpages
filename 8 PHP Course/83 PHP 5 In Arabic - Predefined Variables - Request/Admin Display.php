<!-- [Adding Admin Display] => Directed from [Adding Admin Form] : Using {Post}  --> 

<?php

// (*) => First Example => Predefined Variables - Post - { $ _ Post[Variable] } => [ Posting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}]  :
    $ha1 = "Predefined Variables - Post - { $ _ Post[Variable] } => [ Posting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] :  as following : " . "<br>" ;

    // Declaring the Admins array [Simulation Database] : 
        $admins = array('Shadi' , 'Sayed' , 'Mohammed');
        
    // Declaring the variables of inputs in the login from page using { $ _ Post[] }: 
        $username = $_POST['admin'];
        // $password = $_POST['password'];

    // Printing the sending data Method to the user : 
        echo 'Welcome ' . $username . ', You have been secured Request Method {' . $_SERVER['REQUEST_METHOD'] . "}". '<br>' ;
        
    // Adding new Admin to the array database :                             
        array_push($admins , $username);
    
    // Printing the array Database after adding nbew Administrator :                             
        echo 'Your data base Array after adding new Admin' . '<br>';    
        echo '<pre>';    
        print_r($admins);        
        echo '</pre>';    
    
    // Printing the array Database [Count] after adding nbew Administrator :                             
        echo 'Your data base Array Elements count after adding new Admin = ' . '<br>';        
        // echo array_count_values($admins);
        echo count($admins);
    
    echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
// ---------------------------------------------                
    // ====================================================================================        
?>