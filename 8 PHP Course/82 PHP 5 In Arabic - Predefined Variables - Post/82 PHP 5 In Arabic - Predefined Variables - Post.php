<!--  81 PHP 5 In Arabic - Predefined Variables - Post --> 
<?php

    $lessonName  ='Predefiend Variables - Post ';
    $title = '81 PHP5 - ' . $lessonName;
    $css = '81 PHP 5 In Arabic - Predefined Variables - Post.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (4) Application :
        // 1- [Adding New Admin Form] page  => Directed to [Admin Display.php] page
        // 2- [Login From] page => Directed to [Login Display.php] page
        // 3- [Calculation Form] page => Directed to [Calculation Display.php] page
        // 4- [Login Method From] page => Directed to [Login Method Display.php] page
    
    $main =  'In this lesson will be (3) Application : ' . '<br>' . '<ul>' .
    '<li>' . '1- Adding New Admin Form] page  => Directed to [Admin Display.php] page' . '</li>' .  
    '<li>' . '2- Login From] page => Directed to [Login Display.php] page' . '</li>' .  
    '<li>' . '3- [Calculation Form] page => Directed to [Calculation Display.php] page' . '</li>' .      
    '<li>' . '4- [Login Method From] page => Directed to [Login Method Display.php] page' . '</li>' .      
    '</ul>';        
    
    // ============================================================================
    // // (*) Variable Definitions & Decleration :                          
    //         $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // ============================================================================
    // // (*)  Decleration Array as database simulation  :                          
    //         $adimins  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // (*) => First Example => Predefined Variables - Post - { $ _ Post[Variable] } => [ Posting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] :

        $ha1 = "Predefined Variables - Post - { $ _ Post[Variable] } => [ Posting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] :  as following : " . "<br>" ;

        // // Declaring the Admins array [Simulation Database] : 
        //     $admins = array('Shadi' , 'Sayed' . 'Mohammed');
            
        // // Declaring the variables of inputs in the login from page using { $ _ Post[] }: 
        //     $username = $_POST['username'];
        //     $password = $_POST['password'];
            
        // // Checking for Valid Adiminstrator in Username field : 
        //     if (in_array($username, $admins)) {
        //         echo 'Welcome ' . $username . '<br>' .
        //         'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
        //         'Your password is ' . $password ;
            
        //     } else {                
        //         echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
        //     }
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                
    // ====================================================================================        

    // ---------------------------------------------
                    
    // (*) => Second Example => Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page by {post} Method:
        $ha2 = "Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page by {post} Method :  as following : " . "<br>" ;
            
        // // Declaring the Admins array [Simulation Database] : 
        //     $admins = array('Shadi' , 'Sayed' , 'Mohammed');
        
        // // Declaring the variables of input [admin] in the Add new From page using { $ _ Post[] }: 
        //     $username = $_POST['username'];
        //     $password = $_POST['password'];
        //     $admin = $_POST['admin']; 
            
        // // Adding new admin to the DB Array:
        //     array_push($admins, $admin);
        //     echo 'Welcome ' . $admin . '<br>' . 'Your new account has been added to DB administration successfuly! ' . '<br>' . '<br>';
        
        // // Displaying DB Array after updating :             
        //     echo 'Your Admin DB after updating as following : ' . '<br>' ; 
        //     echo '<pre>'; 
        //     print_r($admins);
        //     echo '</pre>'; 
            
        //     echo 'Your Admins DB count after updating as following : ' . '<br>' ; 
        //     echo count($admins);
    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
    
    // (*) => Third Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Caculation] => using [POST]  Method :        $ha3 = "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from [Caculation Form] ]  => using [POST]  Method :  as following : " . "<br>" ;

        $ha3 = "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from [Caculation Form] ] :  as following : " . "<br>" ;
        // echo "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from [Caculation Form] ] :  as following : " . "<br>" ;
        
        // // Declaration of the main (2) Numbers Variables & Main Calculations => using [POST] Method : 
        //     $num1 = $_Post['num1'];
        //     $num2 = $_Post['num2'];
            
        //     $Sum = $num1 + $num2;
        //     $Sub = $num1 - $num2;
        //     $Mult = $num1 * $num2;
        //     $Div = $num1 / $num2;

        // // Printing the main (2) Numbers : 
        //     echo 'Number 1 is : ' . $num1 . '<br>'; 
        //     echo 'Number 2 is : ' . $num2 . '<br>';
        
        // // Printing the main Caculations : 
        //     echo 'Summition Result is : ' . '<br>' . $Sum . '<br>';
        //     echo 'Substraction Result is : ' . '<br>' . $Sub . '<br>';
        //     echo 'Multiply Result is : ' . '<br>' . $Mult . '<br>';
        //     echo 'Divsion Result is : ' . '<br>' . $Div . '<br>';
                    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
    
    // (*) => Fourth Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] :

        $ha4 = "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] :  as following : " . "<br>" ;
            
        // echo "Predefined Variables - Post - { $ _ Post[Input Name Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data]:  as following : " . "<br>" ;
        
        // // Declaring the Admins array [Simulation Database] : 
        //     $admins = array('Shadi' , 'Sayed' . 'Mohammed');
            
        // // Declaring the variables of inputs in the login from page using { $ _ Post[] }: 
        //     $username = $_POST['username'];
        //     $password = $_POST['password'];
    
        // // Checking for the used method , and respond to the user upon it : 
        //     if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                    
        //         echo 'Welcome ' . $username . ', You have been secured Request Method' . $_SERVER['REQUEST_METHOD'] ;
            
        //         // Checking for Valid Adiminstrator in Username field : 
        //             if (in_array($username, $admins)) {
        //                 echo 'Welcome ' . $username . '<br>' .
        //                 'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
        //                 'Your password is ' . $password ;
                    
        //             } else {                
        //                 echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
        //             }

        //     } elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
        //         echo 'Welcome ' . $username . ', You have been Not secured Request Method' . $_SERVER['REQUEST_METHOD'] ;

        //         // Checking for Valid Adiminstrator in Username field : 
        //             if (in_array($username, $admins)) {
        //                 echo 'Welcome ' . $username . '<br>' .
        //                 'Your Idenrify is [Adminsitrator] => The Admin Control Panel will be displaed below ' . '<br>' .
        //                 'Your password is ' . $password ;
                    
        //             } else {                
        //                 echo 'Welcome ' . $username . '<br>' . 'Your Idenrify is [Not Valid] => Please re Enter you username Correctly !' ;
        //             }
        //     }
                    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
    
    // ====================================================================================        
          
// ==================================================================================
?>
<!-- --------------------------------------------------------------------- -->

<!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= '<?php echo $css; ?>' media="all">            
            <!-- <style>
                .nice-frame {
                    padding: 10px;
                    text-align: center;
                    width: 400px;
                    margin: 20px auto;
                    border-radius: 10px;
                    background-color: #EEE;
                    border: 1px solid #CCC;
                    line-height: 2;
                    font-family: Tahoma, Arial;
                }
                
                .nice-frame span {
                    font-weight:bold;
            
                    color:#f00;
                }
            </style> -->
            <style>
                header {
                    font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;
                }

                .tag {
                    border: 3px solid red; 
                    border-radius: 50px;
                    margin: 50px auto;
                    font-size: 30px;
                    font-weight: bold;
                    text-decoration: underline;
                    display: block;
                    text-align: center;
                    width: 200px;
                }
            </style>
        </head>
        
        <body class='body' style="background-color: gray">
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            
            <?php
                echo $main;
             ?>

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => Predefined Variables - Post - { $ _ Post[Variable] } => [ Postting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] : -->
                        
                    <header>
                        First Example => First Example => Predefined Variables - Post - { $ _ Post[Variable] } => [ Postting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <section id=sec class=txtarea >                                  
                            <p> =&gt; {Go to Application page}:</p> <br>
                                <a href="http://localhost/PHP%20Course/82%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Post/Login%20Form.php">  
                                    Adding new Admin page Form [Login From.php] page Directed to => [Login Display.php] page
                                </a> <br>              
                                
                            <p> =&gt; {Go to Source page [Form] }:</p> <br> 
                                <form method="Post" action="Login Form.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                

                            <p> =&gt; {Go to Source page [Display] }:</p> <br> 
                                <form method="Post" action="Login Display.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                
                    
                        </section> <br> 

                        <?php       
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page : -->
                        
                    <header>
                        Second Example => Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        
                        <section id=sec class=txtarea >                                  

                        <p> =&gt; {Go to Application page}:</p> <br>
                            <a href="http://localhost/PHP%20Course/82%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Post/Adding%20Admin%20Form.php">  
                                Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page
                            </a> <br>

                        <p> =&gt; {Go to Source page [Form] ]}:</p> <br> 
                            <form method="Post" action="Adding Admin Form.php">
                                <input type="submit" value="Preview the source codes" > 
                            </form>                
                            
                        <p> =&gt; {Go to Source page [Display] ]}:</p> <br> 
                            <form method="Post" action="Admin Display.php">
                                <input type="submit" value="Preview the source codes" > 
                            </form>                        
                        </section> <br> 
                        
                        <?php                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Caculation] : -->
                        
                    <header>
                        Third Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Caculation]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <section id=sec class=txtarea >                                  
                            <p> =&gt; {Go to Application page}:</p> <br>
                                <a href="http://localhost/PHP%20Course/82%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Post/Calculation%20Form.php">  
                                    Calculation Application page Form Calculation From.php] page Directed to => [Calculation Display.php] page
                                </a>             
                            
                            <p> =&gt; {Go to Source page [Form] }:</p> <br> 
                                <form method="Post" action="Login Form.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                

                            <p> =&gt; {Go to Source page [Display] }:</p> <br> 
                                <form method="Post" action="Login Display.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                
                        </section>
           
                        <?php                                   
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                                                       

            <!-- (*) => Fourth Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] : -->
                        
                <header>
                    Fourth Example => Predefined Variables - Post - { $ _ Post[Variable] } => [Recieving data from Form for Login form] => using [POST] Method + [Checking for the method used for sending data] : <br> 
                </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                        
                        <section id=sec class=txtarea >                                  

                            <p> =&gt; {Go to Application page}:</p> <br>
                                <a href="http://localhost/PHP%20Course/82%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Post/Login%20Form%20Method%20Check.php">  
                                    Adding new Admin page Form [Login Form Method Check.php] page Directed to => [Login Display Method Check.php] page
                                </a> <br>

                            <p> =&gt; {Go to Source page [Form] ]}:</p> <br> 
                                <form method="Post" action="Login Form Method Check.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                
                                
                            <p> =&gt; {Go to Source page [Display] ]}:</p> <br> 
                                <form method="Post" action="Login Display Method Check.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                        

                        </section> <br> 
                        
                        <?php                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>