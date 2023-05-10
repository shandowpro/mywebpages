<!--  81 PHP 5 In Arabic - Predefined Variables - Get --> 
<?php

    $lessonName  ='Predefiend Variables - Get ';
    $title = '81 PHP5 - ' . $lessonName;
    $css = '81 PHP 5 In Arabic - Predefined Variables - Get.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (2) Application :
        // 1- Login page Form (In This main lesson php page) Directed to This page (Main lesson page [control.php ])
        // 2- Login page Form (In Other php page [Get.php]) Directed to This page (Main lesson page)        
        // 3- Login page Form Directed to Other PHP page (control.php)
    
    $main =  'In this lesson will be (3) Application : ' . '<br>' . '<ul>' .
    '<li>' . '1- Login page Form (In This main lesson php page) Directed to This page (Main lesson page [control.php ])' . '</li>' .  
    '<li>' . '2- Login page Form (In Other php page [Get.php]) Directed to This page (Main lesson page)' . '</li>' .  
    '<li>' . '3- Login page Form Directed to Other PHP page (control.php)' . '</li>' .      
    '</ul>';        
    
    // ============================================================================
    // // (*) Variable Definitions & Decleration :                          
    //         $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // ============================================================================
    // // (*)  Decleration Array as database simulation  :                          
    //         $adimins  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                            
    
    // (*) => First Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] :

        $ha1 = "Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] :  as following : " . "<br>" ;

        // // Declaring the Admins array [Simulation Database] : 
        //     $admins = array('Shadi' , 'Sayed' . 'Mohammed');
            
        // // Declaring the variables of inputs in the login from page using { $ _ GET[] }: 
        //     $username = $_GET['username'];
        //     $password = $_GET['password'];
            
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
                    
    // (*) => Second Example => Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page :
        $ha2 = "Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page :  as following : " . "<br>" ;
            
        // // Declaring the Admins array [Simulation Database] : 
        //     $admins = array('Shadi' , 'Sayed' , 'Mohammed');
        
        // // Declaring the variables of input [admin] in the Add new From page using { $ _ GET[] }: 
        //     // $username = $_GET['username'];
        //     // $password = $_GET['password'];
        //     $admin = $_GET['admin']; 
            
        // // Adding new admin to the DB Array :             
        //     array_push($admins, $admin);
        //     echo 'Welcome ' . $admin . '<br>' . 'Your new account has been added to DB administration successfuly! ' . '<br>' . '<br>';                        
        
        // // Displaying DB Array after updating :             
        //     echo 'Your Admin DB after updating as following : ' . '<br>' ; 
        //     echo '<pre>'; 
        //     print_r($admins);
        //     echo '</pre>'; 
            
        //     echo 'Your Admins DB count after updating as following : ' . '<br>' ; 
        //     echo array_count_values($admins);
    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                
    // ---------------------------------------------                
    
    // (*) => Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] :
        $ha3 = "Predefined Variables - GET - { $ _ GET[Input Name Variable] } => [Recieving data from [Caculation Form] ]  :  as following : " . "<br>" ;
            
        // echo "Predefined Variables - GET - { $ _ GET[Input Name Variable] } => [Recieving data from [Caculation Form] ] :  as following : " . "<br>" ;
        
        // // Declaration of the main (2) Numbers Variables & Main Calculations : 
        //     $num1 = $_GET['num1'];
        //     $num2 = $_GET['num2'];
            
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

    // ---------------------------------------------                
    // ====================================================================================        
      
    // ---------------------------------------------                

    // =================================================================================        
    
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
            
            <!-- (*) => First Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] : -->
                        
                    <header>
                        First Example => First Example => Predefined Variables - GET - { $ _ GET[Variable] } => [ Getting information from the [login php page] and sent it to another procceesing php {If condition Check && array database Simulation}] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <section id=sec class=txtarea >                                  
                            <p> =&gt; {Go to Application page}:</p> <br>
                                <a href="http://localhost/PHP%20Course/81%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Get/Login%20Form.php">  
                                    Adding new Admin page Form [Login From.php] page Directed to => [Login Display.php] page
                                </a> <br>              
                                
                            <p> =&gt; {Go to Source page [Form] }:</p> <br> 
                                <form method="get" action="Login Form.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                

                            <p> =&gt; {Go to Source page [Display] }:</p> <br> 
                                <form method="get" action="Login Display.php">
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
                            <a href="http://localhost/PHP%20Course/81%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Get/Adding%20Admin%20Form.php">  
                                Adding new Admin page Form [Adding Admin From.php] page Directed to => [Adding Admin Display.php] page
                            </a> <br>

                        <p> =&gt; {Go to Source page [Form] ]}:</p> <br> 
                            <form method="get" action="Adding Admin Form.php">
                                <input type="submit" value="Preview the source codes"   > 
                            </form>                
                            
                        <p> =&gt; {Go to Source page [Display] ]}:</p> <br> 
                            <form method="get" action="Admin Display.php">
                                <input type="submit" value="Preview the source codes"   > 
                            </form>                        
                        </section> <br> 
                        
                        <?php                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation] : -->
                        
                    <header>
                        Third Example => Predefined Variables - GET - { $ _ GET[Variable] } => [Recieving data from Form for Caculation]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <section id=sec class=txtarea >                                  
                            <p> =&gt; {Go to Application page}:</p> <br>
                                <a href="http://localhost/PHP%20Course/81%20PHP%205%20In%20Arabic%20-%20Predefined%20Variables%20-%20Get/Calculation%20Form.php">  
                                    Calculation Application page Form Calculation From.php] page Directed to => [Calculation Display.php] page
                                </a>             
                            
                            <p> =&gt; {Go to Source page [Form] }:</p> <br> 
                                <form method="get" action="Login Form.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                

                            <p> =&gt; {Go to Source page [Display] }:</p> <br> 
                                <form method="get" action="Login Display.php">
                                    <input type="submit" value="Preview the source codes"   > 
                                </form>                
                        </section>
           
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