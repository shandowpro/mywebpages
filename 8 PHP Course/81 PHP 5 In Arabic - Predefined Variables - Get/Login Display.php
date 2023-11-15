<!-- [Login Display] Page => Directed from [Login From] Page --> 

<?php
    
    // (*) => Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login html page] and sent it to another procceesing php {If condition Check && array database Simulation}] :

        echo "Predefined Variables - GET - { $ _ GET['Input Name Variable'] } => [ Getting the input value && Check in the {Simulation Database Array} ] :  as following : " . "<br>" ;

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

    
?>