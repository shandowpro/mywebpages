<!-- [Login Display] PHP Page => Directed from [Login From] PHP Page : Using [Post] Methpd --> 

<?php
    
    // (*) => Second Example => Posting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation} :
        $ha2 = "Posting information from the [login php page] and sent it  Directed to => [Login Display.php] page to another by {post} Method for procceesing php {If condition Check && array database Simulation} :  as following : " . "<br>" ;
            
        // Declaring the Admins array [Simulation Database] : 
            $admins = array('Shadi' , 'Sayed' , 'Mohammed');
        
        // Declaring the variables of inputs in the login from page using { $ _ Post[] }: 
            $username = $_POST['username'];
            $password = $_POST['password'];
        
        // Checking for Valid Adiminstrator in Username field : 
            if (in_array($username, $admins)) {
                echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
                'Your password is ' . $password ;

            } else {                
                echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
            }

        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ====================================================================================        
    
?>