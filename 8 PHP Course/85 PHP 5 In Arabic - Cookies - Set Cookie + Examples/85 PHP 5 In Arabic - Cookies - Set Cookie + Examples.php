<!--  85 PHP 5 In Arabic - Cookies - Set Cookie + Examples --> 

<?php

    $lessonName  ='Cookies - Set cookies ';
    $title = '85 PHP5 - ' . $lessonName;
    $css = '85 PHP 5 In Arabic - Cookies - Set Cookie + Examples.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (5) Application :
        // 1- Setting Cookies file with default Ssettings => (1) Example + Printing  .
        // 2- Setting Cookies with cusotmized settings -> (4) Examples + Printing.
    
    $main =  'In this lesson will be (5) Application : ' . '<br>' . '<ul>' .
    '<li>' . '1- Setting Default Cookies files [Name , value , time() + 3600 , "/" , "localhost" ]' . '</li>' .  
    '<li>' . '2- Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24) , "/" , "localhost" , TRUE , TRUE ] ' . '</li>' . 
    '<li>' . '3- Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10) , "/" , "localhost" , FALSE , TRUE ]' . '</li>' . 
    '<li>' . '4- Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) , "/" , "localhost" , TRUE , FALSE ]' . '</li>' . 
    '<li>' . '5- Setting Cookies with cusotmized settings4 [Name , value , time() + (86400 * 30) , "/" , "localhost" , FALSE , FALSE ]' . '</li>' . 
    '</ul>';
    
    // ============================================================================
    // // (*) Variable Definitions & Decleration :                          
    //         $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                                
    // ============================================================================    
    
    // (*) => First Example => Setting Default Cookies files [Name , value , time() + 3600 , "/" , "localhost" ]  :
        $ha1 = 'Setting Default Cookie file [Name , value , time() + 3600 , "/" , "localhost" ] :  as following : ' . "<br>" ; 
            
        // // Setting Default Cookies files in the localhost server { setcookie('Cookie Name', 'Cookie Value', time() + 3600 , '/')) } : 
        //     setcookie("DefaultSetting" , "Shadi Cookies Value by dafault" , time() + 3600, "/" , "localhost");
        
        // // Printing the Cookies basic information [Cookie Name, Cooke Contents / Value] : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                            
    
    // (*) => Second Example => Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24){1 Day} , "/" , "localhost" , TRUE , TRUE ] :

        $ha2 = "Second Example => Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24) {1 Day} , '/' , 'localhost' , TRUE , TRUE ]  :  as following : " . "<br>"  ;
                
        // // Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24){1 Day} , "/" , "localhost" , TRUE , TRUE ] : 
        //     setcookie("CusotmizedSetting1" , "Shadi Cookies Value by costomized Setting 1" , time() + (3600 * 24) , "/" , "localhost", TRUE , TRUE );
        
        // // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                                            
    // ====================================================================================            
    
    // (*) => Third Example => Setting Cookies with cusotmized settings1 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ]  :

        $ha3 = "Third Example => Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , '/' , 'localhost' , TRUE , FALSE ] :  as following : " . "<br>"  ;
                
        // // Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ] : 
        //     setcookie("CustomizedSetting2" , "Shadi Cookies Value by costomized Setting 2 " , time() + (86400 * 10), "/" , "localhost" , TRUE , FALSE);
        
        // // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                                            
    // ====================================================================================        
    
    // (*) => Fourth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , TRUE ]  :

        $ha4 = "Fourth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , '/' , 'localhost' , FALSE , TRUE ] :  as following : " . "<br>"  ;
                
        // // Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30){Month} , "/" , "localhost" , False , TRUE ] : 
        //     setcookie("CustomizedSetting3" , "Shadi Cookies Value by costomized Setting 3" , time() + (86400 * 30), "/" , "localhost", FALSE , TRUE );
        
        // // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                                            
    // ====================================================================================        

    // (*) => Fifth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , FALSE ]  :

        $ha5 = "Fifth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , '/' , 'localhost' , FALSE , FALSE ] :  as following : " . "<br>"  ;
                
        // // Setting Cookies with cusotmized settings4 [Name , value , time() + (86400 * 30){Month} , "/" , "localhost" , FALSE , FALSE ] : 
        //     setcookie("CustomizedSetting4" , "Shadi Cookies Value by costomized Setting 4" , time() + (86400 * 30), "/" , "localhost" , FALSE , FALSE);
        
        // // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
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
                
                <!-- (*) => First Example => Setting Default Cookies files [Name , value , time() + 3600 , "/" , "localhost" ]  : -->
                            
                        <header>
                            First Example => Setting Default Cookies files [Name , value , time() + 3600 , "/" , "localhost" ] : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                            <?php       
                                
                                // Setting Default Cookies files in the localhost server { setcookie('Cookie Name', 'Cookie Value', time() + 3600 , '/')) } : 
                                    setcookie("DefaultSetting" , "Shadi Cookies Value by dafault" , time() + 3600, "/" , "localhost");
        
                                // Printing the Cookies basic information [Cookie Name, Cooke Contents / Value] : 
                                    echo "<pre>";
                                    print_r($_COOKIE);
                                    echo "</pre>";
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->    
                
                <!-- (*) => Second Example => Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24){1 Day} , "/" , "localhost" , TRUE , TRUE ]: -->                            
                        <header>
                            Second Example => Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24){1 Day} , "/" , "localhost" , TRUE , TRUE ]: <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                                                                    
                            <?php                                    
                               // Setting Cookies with cusotmized settings1 [Name , value , time() + (3600 * 24){1 Day} , "/" , "localhost" , TRUE , TRUE ] : 
                                    setcookie("CusotmizedSetting1" , "Shadi Cookies Value by costomized Setting 1" , time() + (3600 * 24) , "/" , "localhost", TRUE , TRUE );
        
                            // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
                                echo "<pre>";
                                print_r($_COOKIE);
                                echo "</pre>";
                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                
            
                <!-- (*) => Third Example => Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ]  : -->
                            
                        <header>
                            Third Example => Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ] : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                                                                    
                            <?php                                    
                               // Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30){Month} , "/" , "localhost" , False , TRUE ] : 
                                   setcookie("CustomizedSetting2" , "Shadi Cookies Value by costomized Setting 2" , time() + (86400 * 30), "/" , "localhost", TRUE , FALSE );
                                
                               // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
                                   echo "<pre>";
                                   print_r($_COOKIE);
                                   echo "</pre>";                                                    
                               
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                            
                        
                <!-- (*) => Fourth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , TRUE ] : -->
                            
                        <header>
                            Fourth Example => Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , TRUE ]  : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                                                                    
                            <?php                                    
                               // Setting Cookies with cusotmized settings3 [Name , value , time() + (86400 * 30){Month} , "/" , "localhost" , False , TRUE ] : 
                                   setcookie("CustomizedSetting3" , "Shadi Cookies Value by costomized Setting 3" , time() + (86400 * 30), "/" , "localhost", FALSE , TRUE );
                                
                                // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
                                    echo "<pre>";
                                    print_r($_COOKIE);
                                    echo "</pre>";                                                    
                                
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                
                        
                <!-- (*) => Fifth Example => Setting Cookies with cusotmized settings4 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , FALSE ] : -->
                            
                        <header>
                            Fifth Example => Setting Cookies with cusotmized settings4 [Name , value , time() + (86400 * 30) {Month} , "/" , "localhost" , FALSE , FALSE ] : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>  
                                                                                    
                            <?php                                    
                               // Setting Cookies with cusotmized settings4 [Name , value , time() + (86400 * 30){Month} , "/" , "localhost" , FALSE , FALSE ] : 
                                  setcookie("CustomizedSetting4" , "Shadi Cookies Value by costomized Setting 4" , time() + (86400 * 30) , "/" , "localhost" , FALSE , FALSE); 
        
                                // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
                                    echo "<pre>";
                                    print_r($_COOKIE);
                                    echo "</pre>";
                                                    
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                            
                    
            
                <!-- ================================================================================= -->            
                </section>
                                                                        
            </body>
    </html> 