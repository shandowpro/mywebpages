
<!--  10 PHP Examples In Arabic - Using Short If Condition --> 
<!-- =============================================================== -->
<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
    <label> Insert your name : </label> 
    <input type="text" name="username" placeholder="Enter your name here ">
    <input type="nubmer" name="age" placeholder="Enter your age here ">
    <input type="submit" value="Send">
</form>

<?php
    $lessonName ='Use Short If Condition';
    $title = '10 PHP Tutorials - ' . $lessonName;
    $css = '10 PHP Examples In Arabic - Using Short If Condition.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (4) Application [Testing with shortcut form of If condition] :
        // 1- First Example : [Testing with the If Statement shortcut form with (1) Condition ] .
        // 2- Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] .        
        // 3- Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] .        
        // 4- Fourth Example : [Testing with the If Statement shortcut form with nested if Statements } ] .        
        */    
        
        $main = 'In this lesson will be (4) Application [Testing and Filtering by using Nested If condition]   :   as following  : ' . '<br>' . '<ul>' .
         '<li>' . 'First Example : [Testing with the If Statement shortcut form with (1) Condition ]  ' . '</li>'  .          
         '<li>' . 'Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] ' . '</li>'  . 
         '<li>' . 'Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] ' . '</li>'  . 
         '<li>' . 'Fourht Example : [Testing with the If Statement shortcut form with Nested if Statements } ] (needs Revision) ' . '</li>'  . 
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example : [Testing with the If Statement shortcut form with (1) Condition ]  : 
        $ha1 = 'First Example : [Testing with the If Statement shortcut form with (1) Condition ]  : as following : ' . "<br>" ;

            // // Defining the [inserted age input field ] variable in the form :
            //     $age = $_POST['age'];            
            //     // $username = $_POST['username'];
            
            // // Testing if the one condition by [Original Long From] of the if Statement :
            // if ($age > 30) {
            //     echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
            // } else {                
            //     echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
            // }
        
            // // Testing if the one condition by [Original Shortcut From] of the if Statement :
            // $var = $age > 30 ? '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>' : '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>'; 
                            
            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                       
    
    // (*)=> Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] : 
        $ha2 = 'Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] : as following : ' . "<br>" ;

        // // Defining the inserted variables in the Form : [ age input field] + [username input field] ||  [Admins Array] :
        //     $username = $_POST['username'];
        //     $age = $_POST['age'];            
        //     $admins = array('Shadi', 'Sayed' , 'Mohamed');
        
        // // Testing if the (2) conditions by [Original Long From] of the if Statement :
        // if ($age > 30 && in_array($username, $admins) ) {
        //     echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
        // } else {                
        //     echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
        // }
    
        // // Testing if the one condition by [Original Shortcut From] of the if Statement :
        // $var1 = $age > 30 ? '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>' : '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';         
        
        // echo $var1;
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                        
    // =================================================================================                                                       
                    
    // =================================================================================                                
    
    // (*)=> Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] : 
        $ha3 = 'Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] : as following : ' . "<br>" ;

        // // Defining the inserted variables in the Form : [ age input field] + [username input field] ||  [Admins Array] :
        //     $username = $_POST['username'];
        //     $age = $_POST['age'];            
        //     $admins = array('Shadi', 'Sayed' , 'Mohamed');
        
        // // Testing if the (2) conditions by [Original Long From] of the if Statement :
        // if ($age > 30 || in_array($username, $admins) ) {
        //     echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
        // } else {                
        //     echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
        // }
    
        // // Testing if the one condition by [Original Shortcut From] of the if Statement :
        // $var2 = $age > 30 || in_array($username , $admins) ? '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>' : '<br> Sorry, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';         
        
        // echo $var2;
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                        
    // =================================================================================                                                       
    
    // // (*)=> Fourth Example : [Testing with the If Statement shortcut form with nested if Statements } ] : 
    //     $ha4 = 'Fourth Example : [Testing with the If Statement shortcut form with nested if Statements } ] : as following : ' . "<br>" ;

    //     // Defining the [inserted username] variable in the form Allowed Array & [Forbidden Array] :
    //         $username = $_POST['username'];
    //         $vip = array('Pro', 'Shindow' , 'Shandow');                
    //         $forbidden = array('admin', 'god' , 'root', '');
        
    //         // Testing if the inserted username is one of the [forbidden list] :
    //         $var3 = in_array($username, $forbidden) ? '<br> Sorry , your inserted Name is in [Forbidden List] <br>' :
    //             '<br> Good , your inserted Name is Accepted! <br>'; in_array($username, $vip) ? '<br> YEA , your inserted Name is in [vip list] <br>' strlen($username) > 3  :             
    
    //         if (in_array($username, $forbidden) ) {
    //             echo '<br> Sorry , your inserted Name is in [Forbidden List] <br>';
                
    //         } else {
                
    //             echo '<br> Good , your inserted Name is Accepted! <br>'; 

    //             // Testing if the inserted username is one of the [vip list] :
    //             if (in_array($username, $vip)) {
    //                 echo '<br> YEA , your inserted Name is in [vip list] <br>' ;                        
                
    //                 // Testing if the inserted username is according to the length limit :
    //                 if (strlen($username) > 3 ) {
    //                     echo '<br> Marvelous! Your name IS according to the length limit <br>';
    //                 } else {
    //                     echo '<br> OH! Your name is NOT according to the length limit <br>';
    //                 }                    
    //             } else {
    //                 echo '<br> Sorry, your name is NOT in the vip list <br>';
    //             }                                        
    //         }
        
    //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                        
    // =================================================================================                                                       
                    
    // =================================================================================                                
                                                  
// ==================================================================================
?>

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
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
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
            
                <!-- (*) => First Example : [Testing with the If Statement shortcut form with (1) Condition ]  : -->

                    <header>
                        First Example : [Testing with the If Statement shortcut form with (1) Condition ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               
                            // Defining the [inserted age input field ] variable in the form :
                                $age = $_POST['age'];            
                                // $username = $_POST['username'];
                            
                            // Testing if the one condition by [Original Long From] of the if Statement :
                                if ($age > 30) {
                                    echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
                                } else {                
                                    echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
                                }
                        
                            // Testing if the one condition by [Original Shortcut From] of the if Statement :
                                $var = $age > 30 ? '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Short From of the if Statement] <br>' : '<br> Sorry, You are NOT Accepted! : your age is Smaller than 30 yaers [by Original Long From of the if Statement] <br>'; 
                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
                <!-- (*) => Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] : -->

                    <header>
                        Second Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [& &] sign} ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // Defining the inserted variables in the Form : [ age input field] + [username input field] ||  [Admins Array] :
                                $username = $_POST['username'];
                                $age = $_POST['age'];            
                                $admins = array('Shadi', 'Sayed' , 'Mohamed');
                            
                            // Testing if the (2) conditions by [Original Long From] of the if Statement :
                                if ($age > 30 && in_array($username, $admins) ) {
                                    echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
                                } else {                
                                    echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
                                }
                        
                            // Testing if the one condition by [Original Shortcut From] of the if Statement :
                                $var1 = $age > 30 ? '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Short From of the if Statement] <br>' : '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Short From of the if Statement] <br>';
                                echo $var1;

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
             <!-- ---------------------------------------------------------- --> 
                <!-- (*) => Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] : -->

                    <header>
                        Third Example : [Testing with the If Statement shortcut form with (2) Conditions {with and [| |] sign} ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>   </h1>  

                        <?php                                                                                               
                            // Defining the inserted variables in the Form : [ age input field] + [username input field] ||  [Admins Array] :
                                $username = $_POST['username'];
                                $age = $_POST['age'];            
                                $admins = array('Shadi', 'Sayed' , 'Mohamed');
                            
                            // Testing if the (2) conditions by [Original Long From] of the if Statement :
                                if ($age > 30 || in_array($username, $admins) ) {
                                    echo '<br> Great!, You are Accepted! : your age is greater than 30 yaers [by Original Long From of the if Statement] <br>';                
                                } else {                
                                    echo '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Long From of the if Statement] <br>';
                                }
                        
                            // Testing if the one condition by [Original Shortcut From] of the if Statement :
                                $var2 = $age > 30 || in_array($username , $admins) ? '<br> Great!, You are  Accepted! : your age is Greater than 30 yaers [by Original Short From of the if Statement] <br>' : '<br> Sorry, You are NOT Accepted! : your age is smaller than 30 yaers [by Original Short From of the if Statement] <br>'; 
                                echo $var2;
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
             <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 