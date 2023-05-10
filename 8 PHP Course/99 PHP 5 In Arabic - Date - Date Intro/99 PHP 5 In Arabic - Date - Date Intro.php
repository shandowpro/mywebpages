<!--  99 PHP 5 In Arabic - Date - Date Intro --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Filter - Date - Date Intro ';
    $title = '99 PHP5 - ' . $lessonName;
    $css = '99 PHP 5 In Arabic - Date - Date Intro.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (3) Applications [Get Default T&D || Set customized Timezone of T&D|| Print Certain Customized time and date format] :
        // 1- First Example [Get the Server Default T&D]
        // 2- Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format] 
        // 3- Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format ]
    */    
        
    
    $main =  'In this lesson will be (3) Applications [Get Default T&D || Set customized Timezone of T&D|| Print Certain Customized time and date format]   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Get the Server Default T&D]' . '</li>' .      
    '<li>' . 'Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format] ' . '</li>' .     
    '<li>' . 'Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format ]' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*) => First Example [Get the Server Default T&D] :
        $ha1 = 'First Example [Get the Server Default T&D] : as following : ' . "<br>" ; 

        // Getting the current server Timezone : 
            echo 'The [current Default]  server Timezone is : ' . '<br>' . date_default_timezone_get() . "<br>";
            
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
            
    // (*) => Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format]  :
        $ha2 = 'Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format ]  : as following : ' . "<br>" ; 
            
        // Re-setting the current server Timezone  : 
            date_default_timezone_set('Africa/Cairo');
            
        // Getting the current server Timezone [after Adjusting]  : 
            echo 'The Current default Time zone is ' . '<br>'. date_default_timezone_get();

        // Printing the Current Date and Time according a certian Customized Format  : 
            echo 'The Current Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s');
                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format]  :
        $ha3 = 'Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format]  : as following : ' . "<br>" ; 
                                    
        // Printing the Current Date and Time according a certian Customized Format  : 
            echo 'The [Current] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s') . "<br>" ;
            
        // Definging Variables of next time periods :
            $nextM = time() + (30 * 24 * 60 * 60);
            $nextW = time() + (7 * 24 * 60 * 60);
            
        // Printing the Current Date and Time according a certian Customized Format  : 
            echo 'The [Next Month] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s', $nextM) . "<br>";
            echo 'The [Next Week] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s', $nextW) . "<br>";

                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
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
            
            <!-- (*) => First Example [Get the Server Default T&D] : : -->
                        
                    <header>
                        First Example [Get the Server Default T&D] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                               
                            // Getting the current server Timezone : 
                                echo 'The [current Default]  server Timezone is : ' . '<br>' . date_default_timezone_get() . "<br>";
                                                

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format]   : -->
                        
                    <header>
                        Second Example [Set the Server Default T&D + Printing Default Timezone after Re-setting + Print Certain Customized time and date format]   :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Re-setting the current server Timezone  : 
                                date_default_timezone_set('Africa/Cairo') . "<br>";
                                
                            // Getting the current server Timezone [after Adjusting]  : 
                                echo 'The Current default Time zone is ' . '<br>'. date_default_timezone_get() . "<br>";
                    
                            // Printing the Current Date and Time according a certian Customized Format  : 
                                echo 'The Current Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s') . "<br>";
                                
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format] : -->
                        
                    <header>
                        Third Example [Print Current Customized time and date format + Print timeStamped with certain Next Date by Customized time and date format]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           

                            // Printing the Current Date and Time according a certian Customized Format  : 
                                echo 'The [Current] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s') . "<br>";
                                
                                // Definging Variables of next time periods :
                                    $nextM = time() + (30 * 24 * 60 * 60);
                                    $nextW = time() + (7 * 24 * 60 * 60);
                                    
                                // Printing the Current Date and Time according a certian Customized Format  : 
                                    echo 'The [Next Month] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s', $nextM) . "<br>";
                                    echo 'The [Next Week] Date and Time with customized Format ' . '<br>'. date('Y-m-d h:i:s', $nextW) . "<br>";
    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 