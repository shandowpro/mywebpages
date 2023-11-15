<!--  91 PHP 5 In Arabic - Session Training - Simple Login --> 
<!-- =============================================================== -->

<!--  Login Form --> 
    <form action="check.php" method="POST">
        <input type="text" name="username"> 
        <input type="submit" name="Login"> 
    </form>

<?php
    
    $lessonName  ='Session Training - Simple Login ';
    $title = '91 PHP5 - ' . $lessonName;
    $css = '91 PHP 5 In Arabic - Session Training - Simple Login.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    // In this lesson will be (1) Application [Simple Login] [Creating Simple Login Page +  Check Page + Control Page ] :
        // 1- First [Form Login] page : {Current Page} => Will provide a login form to the user to insert his username + Submit.
        // 2- Second [Check] page : {check.php}  => The page will provide A checking for the username ligality and provide a legal gate to the control panel {control page} .
        // 3- Third [Admin Control panel ] page : {control.php}  => The Admin Control Panel .                
    
    $main =  'In this lesson will be (1) [Simple Login] Application [Creating Simple Login Page +  Check Page + Control Page ]  , with (3) pages] as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First [Form Login] page : {Current Page} => Will provide a login form to the user to insert his username + Submit' . '</li>' .  
    '<li>' . 'Second [Check] page : {check.php}  => The page will provide A checking for the username ligality and provide a legal gate to the control panel {control page}' . '</li>' . 
    '<li>' . 'Third [Admin Control panel ] page : {control.php}  => The Admin Control Panel' . '</li>' . 
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example => In this lesson will be (1) Application [Simple Login] [Creating Simple Login Page +  Check Page + Control Page ]  :
        $ha1 = 'In this lesson will be (1) Application [Simple Login] [Creating Simple Login Page +  Check Page + Control Page ]  :  as following : ' . "<br>" ; 

        // Declaring the main Session : => [We will not define the session start , due to it is already defined in the included page ]  
            session_start();
            
            
        //Unsetting one of  Session Variable defined in the previous Lesson: 
            unset($_SESSION['counter']); 
        

        //  User Welcome to the current page  :            
            echo 'Hello [' . $_SESSION['username'] . '] ' . "<br>" . ' Welcome to the web application : [Session Simple Login] => {Main Page} : [current page]'  . "<br>" . "<br>" ;            
        
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
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
            
            <!-- (*) => First Example => In this lesson will be (1) Application [Simple Login] [Creating Simple Login Page +  Check Page + Control Page ]    : -->
                        
                    <header>
                        First Example => In this lesson will be (1) Application [Simple Login] [Creating Simple Login Page +  Check Page + Control Page ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            // Declaring the main Session :
                                // session_start();
                                // $_SESSION['username'];
                                // $_SESSION['password'];                    
                                
                            //  User Welcome to the current page  :            
                            echo 'Hello [' . $_SESSION['username'] . '] ' . "<br>" . ' Welcome to the web application : [Session Simple Login] => {Main Page} : [current page]'  . "<br>" . "<br>" ;            
                                                                                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 