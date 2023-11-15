<!-- control page [This page is recieving data from {login Form get.php page}  + {Adding new Admin Form} ]  -->

<?php

    // (*) => First Example => Predefined Variables - GET - { $ _ GET['inputName'] } => [ Getting information from the [login html page] and sent it to  another procceesing php ] :
        $ha1 = "Predefined Variables - GET - { $ _ GET['inputName'] } => [ Getting information from the [login html page] and sent it to  another procceesing php ] :  as following : " . "<br>" ;
        
            // Using { $ _ GET['InputFieldName'] } to => Printing out the get informtaion form the [Login From] page into the current php page: 
                echo 'Your User Name is : ' . "<br>" . $_GET['username']  . '<br>' ; 
                echo 'Your Password is : ' . "<br>" . $_GET['password']  . '<br>' ; 

            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>" ;
            // ---------------------------------------------
            
    // (*) => Second Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login html page] and sent it to another procceesing php ] :
        $ha2 = "Predefined Variables - GET - { $ _ GET['Variable Name'] } => [ Getting the Current GET Address ] :  as following : " . "<br>" ;
            
        // Declaring the variables of inputs in the login from page using { $ _ GET[InputName] }: 
            $username = $_GET['username'];
            $password = $_GET['password'];
        
        // Using { $ _ GET[Variable] } to => Printing out the get informtaion form the [Login From] page into the current php page: 
            echo 'Your User Name is : ' . "<br>" . $username  . '<br>' ; 
            echo 'Your Password is : ' . "<br>" . $password  . '<br>' ; 
            
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------        
                        
    // (*) => Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login html page] and sent it to another procceesing php {If condition Check && array database Simulation}] :
        $ha3 = "Predefined Variables - GET - { $ _ GET['Variable Name'] } => [ Getting the Current GET Address ] :  as following : " . "<br>" ;
        
        // Declaring the Admins array [Simulation Database] : 
            $admins = array('Shadi' , 'Sayed' . 'Mohammed');
        
        // Declaring the variables of inputs in the login from page using { $ _ GET[] }: 
            $username = $_GET['username'];
            $password = $_GET['password'];

        // Checking for Valid Adiminstrator in Username field : 
            if (in_array($username, $admins)) {
                echo 'Welcome ' . $username . '<br>' .
                'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
                'Your password is ' . $password ;

            } else {                
                echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
            }
                            
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                
    // ====================================================================================        

    // (*) => Fourth Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login html page] and Add it to another procceesing php {If condition Check && array database Simulation}] :
        $ha4 = "Predefined Variables - GET - { $ _ GET['Variable Name'] } => [ Getting the Current GET Address ] :  as following : " . "<br>" ;
                
        // Declaring the Admins array [Simulation Database] : 
            $admins = array('Shadi' , 'Sayed' , 'Mohammed');
        
        // Declaring the variables of input [admin] in the Add new From page using { $ _ GET[] }:             
            $admin = $_GET['admin2'];            
            
        // Adding new admin to the DB Array :             
            array_push($admins, $admin);
            echo 'Welcome ' . $admin . '<br>' . 'Your new account has been added to DB administration successfuly! ' . '<br>' . '<br>';                        
        
        // Displaying DB Array after updating :             
            echo 'Your Admin DB after updating as following : ' . '<br>' ; 
            echo '<pre>'; 
            print_r($admins);
            echo '</pre>'; 

        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
  
    // (*) => Fifth Example => Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] :
        $ha5 = "Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] :  as following : " . "<br>" ;
        
        // Declaration of the main (2) Numbers Variables & Main Calculations : 
            $num1 = $_GET['num12'];
            $num2 = $_GET['num22'];
            
            $Sum = $num1 + $num2;
            $Sub = $num1 - $num2;
            $Mult = $num1 * $num2;
            $Div = $num1 / $num2;

        // Printing the main (2) Numbers : 
            echo 'Number 1 is : ' . $num1 . '<br>'; 
            echo 'Number 2 is : ' . $num2 . '<br>';
        
        // Printing the main Caculations : 
            echo 'Summition Result is : ' . '<br>' . $Sum . '<br>';
            echo 'Substraction Result is : ' . '<br>' . $Sub . '<br>';
            echo 'Multiply Result is : ' . '<br>' . $Mult . '<br>';
            echo 'Divsion Result is : ' . '<br>' . $Div . '<br>';
                    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                

?>