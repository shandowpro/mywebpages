<!-- [Login Display] php Page => Directed from [Login From] php Page : Using [Post] Methpd --> 

<?php
    
    // (*) => Fourth Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] :

        $ha4 = "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] :  as following : " . "<br>" ;
                
        echo "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data]:  as following : " . "<br>" ;
        
        // Declaring the Admins array [Simulation Database] : 
            $admins = array('Shadi' , 'Sayed' . 'Mohammed');
            
        // Declaring the variables of inputs in the login from page using { $ _ Post[] }: 
            $username = $_POST['username'];
            $password = $_POST['password'];
            
        // Printing the sending data Method to the user : 
            echo 'Welcome ' . $username . ', You have been secured Request Method {' . $_SERVER['REQUEST_METHOD'] . "}". '<br>' ;
            
        // Checking for the used method , and respond to the user upon it : 
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                            
            // Checking for Valid Adiminstrator in Username field : 
                if (in_array($username, $admins)) {
                    echo 'Welcome ' . $username . '<br>' .
                    'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
                    'Your password is ' . $password ;
                
                } else {                
                    echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
                }

        } elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
            echo 'Welcome ' . $username . ', You have been Not secured Request Method' . $_SERVER['REQUEST_METHOD'] ;
            
            // Checking for Valid Adiminstrator in Username field : 
                if (in_array($username, $admins)) {
                    echo 'Welcome ' . $username . '<br>' .
                    'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
                    'Your password is ' . $password ;
                    
                } else {                
                    echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
                }
        } else {                    
            echo 'Sorry' . $username . '<br>' . ' You can not access this page directly!' ;
        }
                    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
    // ====================================================================================        

    
?>