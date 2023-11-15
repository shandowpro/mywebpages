<!--  84 PHP 5 In Arabic - Cookies - Check If Cookie Is Enabled --> 

<?php

    $lessonName  ='Cookies - Check if cookies Enabled ';
    $title = '84 PHP5 - ' . $lessonName;
    $css = '84 PHP 5 In Arabic - Cookies - Check If Cookie Is Enabled.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (3) Application :
        // 1- Setting Default Cookies files.
        // 2- Checking if Cookies is enabled or Not {In case if cookies Settings is by default/[Blocked] choice}        // 3- Checking if Cookies is enabled or Not {In case if cookies Settings is by default choice}
    
    $main =  'In this lesson will be (3) Application : ' . '<br>' . '<ul>' .
    '<li>' . '1- Setting Default Cookies files ' . '</li>' .  
    '<li>' . '2- Checking if Cookies is enabled or Not {In case if cookies Settings is by default choice}' . '</li>' .      
    '</ul>';
    
    // ============================================================================
    // // (*) Variable Definitions & Decleration :                          
    //         $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                                
    // ============================================================================    
    
    // (*) => First Example => Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + #number , "Cookies Accessibility Method" 0: '/')) }  :
        $ha1 = "Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + #number , Cookies Accessibility Method 0: '/')) } :  as following : " . "<br>" ;
            
        // // Setting Default Cookies files in the localhost server { setcookie('Cookie Name', 'Cookie Value', time() + 3600 , '/')) } : 
        //     setcookie('Shadi' , 'Shadi Cookies Value' , time() + 3600, '/' );
    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // ---------------------------------------------                        
    // =================================================================================                            

    // (*) => Second Example => Setting Default Cookies files { if(count($ _ COOKIE) > 0){} } :

        $ha2 = "Second Example => Testing if the Cookies files is Enabled or Not { if(count($ _ COOKIE > 0) } : as following : " . "<br>" ;
                
        // // Checking if the the Cookies files is Enabled or Not : 
        //     if (count($_COOKIE) > 0) {
        //         echo 'Good Cookies is Enabled' ;
        //     } else {
        //         echo 'Sorry Cookies is Disabled, please enable it for better Browsing';
        //     }
        
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
                
                <!-- (*) => First Example => Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + #number , "Cookies Accessibility Method" 0: '/')) }  : -->
                            
                        <header>
                            First Example => Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + #number , "Cookies Accessibility Method" 0: '/')) }  : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                            <?php       
                                
                                $ha1 = "Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + #number , Cookies Accessibility Method 0: '/')) } :  as following : " . "<br>" ;
            
                                // Setting Default Cookies files { setcookie('Cookie Name', 'Cookie Value', time() + 3600 , '/')) } : 
                                    setcookie('Shadi' , 'Shadi Cookies Value' , time() + 3600, '/' );
                                    
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->    
                
                <!-- (*) => Second Example => Setting Default Cookies files { if(count($ _ COOKIE) > 0){} }  : -->
                            
                        <header>
                            Second Example => Setting Default Cookies files { if(count($ _ COOKIE) > 0){} }  : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                                                                    
                            <?php                                    
                               // Checking if the the Cookies files is Enabled or Not : 
                                    if (count($_COOKIE) > 0) {
                                        echo 'Good Cookies is Enabled' ;
                                    } else {
                                        echo 'Sorry Cookies is Disabled, please enable it for better Browsing';
                                    }
                                                                                                                
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                
                <!-- ================================================================================= -->            
                </section>
                                                                        
            </body>
    </html> 