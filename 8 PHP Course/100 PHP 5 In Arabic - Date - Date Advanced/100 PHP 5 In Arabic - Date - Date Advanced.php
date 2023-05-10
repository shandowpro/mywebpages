<!--  100 PHP 5 In Arabic - Date - Date Advanced --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Filter - Date - Date Advanced';
    $title = '100 PHP5 - ' . $lessonName;
    $css = '100 PHP 5 In Arabic - Date - Date Advanced.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (4) Applications [Print Certain Customized time and date format (with using different date flags)] :
        // 1- First Example [Printing the current year after copyright sign + Printing current day and month and year ]
        // 2- Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ] 
        // 3- Third Example [Print Certain + Next Customized Full current time and date format (with using different date flags)]
        // 4- Fourth Example [Print all common date flag seperatly ]
    */    
        
    
    $main =  'In this lesson will be (4) Applications [Print Certain Customized time and date format (with using different date flags)] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Printing the current year after copyright sign + Printing current day and month and year ]' . '</li>' .      
    '<li>' . 'Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ] ' . '</li>' .     
    '<li>' . 'Third Example [Print Certain Customized + Next Full current time and date format (with using different date flags)]' . '</li>' .     
    '<li>' . 'Fourth Example [Print all common date flag seperatly ]' . '</li>' .     
    '</ul>';            
    // ============================================================================    

    // (*) => First Example [Printing the current year after copyright sign + Printing current day and month and year ] :
        $ha1 = 'First Example [Printing the current year after copyright sign + Printing current day and month and year ] : as following : ' . "<br>" ; 

        // Printing the current day , month , year seperatly: 
            echo 'The [current day] is : ' . '<br>' . date('d') . "<br>";
            echo 'The [current Month] is : ' . '<br>' . date('m') . "<br>";
            echo 'The [current Year] is : ' . '<br>' . date('Y') . "<br>";
            
        // Printing the current year after copyright sign: 
            echo 'copyright with &copy; 2010- ' . date('Y') . "<br>";            
            
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
            
    // (*) => Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ] :
        $ha2 = 'Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ]  : as following : ' . "<br>" ; 
            
        // Printing the current day , month , year in one code using backslash sign: 
            echo 'The current [day] is : ' . date('d') . " /of" . ' [Month] : ' . date('m') . ' /of ' . ' [Year] : ' . date('Y') ;            
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Third Example [Print Certain Customized Full [Current + Next] time and date format (with using different date flags)]  :
        $ha3 = 'Third Example [Print Certain Customized Full current time and date format (with using different date flags)]  : as following : ' . "<br>" ;
        
        // Definging Variables of next time periods :
            $nextM = time() + (30 * 24 * 60 * 60);
            $nextW = time() + (7 * 24 * 60 * 60);

        // Printing the Current Full Customized Date and Time according a certian Customized Format  : 
            echo 'The [Current] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u') . "<br>" . '<br>';
            echo 'The [Next Week] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u', $nextW) . "<br>" . '<br>' ;
            echo 'The [Next Month] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u', $nextM) . "<br>" . '<br>' ;
                                        
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  
    // (*) => Fourth Example [Print all common date flag seperatly] :
        $ha4 = 'Fourth Example [Print all common date flag seperatly] : as following : ' . "<br>" ;
        
        // Printing the Current Full Customized Date and Time according a certian Customized Format  :             
            echo 'A) Date Advanced Flags : '. "<br>" . "<br>" ;
                                    
            echo '{d} => The [Day] with [Digit with zero] format is : ' . date('d') . "<br>" ;                                
            echo '{S} => The [Day] with [Digit Suffex] format is : ' . date('S') . "<br>" ;
            echo '{j} => The [Day] with [Digit withno zero] format is : ' . date('j') . "<br>" ;
            echo '{D} => The [Day] with [Shortcut Text] format is : ' . date('D') . "<br>"  ;
            echo '{l} => The [Day] with [Full Text] format is : ' . date('l') . "<br>" . '<hr>' . '<br>' . '<br>' ;            
            
            echo '{m} => The [Month] with [Digit] format is : ' . date('m') . "<br>" ;            
            echo '{M} => The [Month] with [Shortcut Text] format is : ' . date('M') . "<br>"  ;
            echo '{F} => The [Month] with [Full Text] format is : ' . date('F') . "<br>" . '<hr>' . '<br>' . '<br>' ;                                
            
            echo '{y} => The [Year] with [2 Digit shortcut] format is : ' . date('y') . "<br>" ;            
            echo '{Y} => The [Year] with [4 Digit Full] format is : ' . date('Y') . "<br>" . '<hr>' . '<br>' . '<br>' . '<br>' ;
            
            
            echo 'B) Time Advanced Flags : '. "<br>"  ;
            
            echo '{h} => The [Hour] with [12 Hour] format is : ' . date('h') . "<br>" ;            
            echo '{H} => The [Hour] with [24 Hour] format is : ' . date('H') . "<br>" . '<hr>' . '<br>' . '<br>' ;
            
            echo '{A} => The [AM-PM] with [Capital] format is : ' . date('A') . "<br>" ;
            echo '{a} => The [am-pm] with [Small] format is : ' . date('a') . "<br>" . '<hr>' . '<br>' . '<br>' ;
            
            echo '{i} => The [Minute] with [Digit] format is : ' . date('i') . "<br>" . '<hr>' . '<br>' . '<br>';            
            
            echo '{s} => The [Second] with [Digit] format is : ' . date('s') . "<br>" . '<hr>' . '<br>' . '<br>' ;
            
            echo '{u} => The [Micro Second] with [Digit] format is : ' . date('u') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                        
            echo '{e} => The [TimeZone] with [Default] format is : ' . date('e') . "<br>" . '<hr>' . '<br>' . '<br>' ;                                    
            date_default_timezone_set('Africa/Cairo');                        
            echo '{e} => The [TimeZone] with [After Resetting] format is : ' . date('e') . "<br>" . '<hr>' . '<br>' . '<br>' ;

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
            
            <!-- (*) => First Example [Printing the current year after copyright sign + Printing current day and month and year ] : -->
                        
                    <header>
                        First Example [Printing the current year after copyright sign + Printing current day and month and year ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                               
                            // Printing the current day , month , year seperatly: 
                                echo 'The [current day] is : ' . '<br>' . date('d') . "<br>";
                                echo 'The [current Month] is : ' . '<br>' . date('m') . "<br>";
                                echo 'The [current Year] is : ' . '<br>' . date('Y') . "<br>";
                                
                            // Printing the current year after copyright sign: 
                                echo 'copyright with &copy; 2010- ' . date('Y') . "<br>";                                

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ]  : -->
                        
                    <header>
                        Second Example [Print Certain Customized time and date format (using backslash sign for customized textual sign) ]   :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Printing the current day , month , year in one code using backslash sign: 
                                echo 'The current [day] is : ' . date('d') . " /of" . ' [Month] : ' . date('m') . ' /of ' . ' [Year] : ' . date('Y') ;                
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Third Example [Print Certain Customized Full [Current + Next] time and date format (with using different date flags)]  : -->
                        
                    <header>
                        Third Example [Print Certain Customized Full [Current + Next] time and date format (with using different date flags)]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           

                            // Definging Variables of next time periods :
                                $nextM = time() + (30 * 24 * 60 * 60);
                                $nextW = time() + (7 * 24 * 60 * 60);

                            // Printing the Current Full Customized Date and Time according a certian Customized Format  : 
                                echo 'The [Current] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u') . "<br>" . '<br>';
                                echo 'The [Next Week] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u', $nextW) . "<br>" . '<br>' ;
                                echo 'The [Next Month] Full Date and Time with customized Format is : ' . '<br>'. date('l jS m Y h:i:s:u', $nextM) . "<br>" . '<br>' ;
                        
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Fourth Example [Print all common date flag seperatly] : -->
                        
                    <header>
                        Fourth Example [Print all common date flag seperatly] :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           

                            // Printing the Current Full Customized Date and Time according a certian Customized Format  :             
                                echo 'A) Date Advanced Flags : '. "<br>" . "<br>" ;
                                
                                echo '{d} => The [Day] with [Digit with zero] format is : ' . date('d') . "<br>" ;                                
                                echo '{S} => The [Day] with [Digit Suffex] format is : ' . date('S') . "<br>" ;
                                echo '{j} => The [Day] with [Digit withno zero] format is : ' . date('j') . "<br>" ;
                                echo '{D} => The [Day] with [Shortcut Text] format is : ' . date('D') . "<br>"  ;
                                echo '{l} => The [Day] with [Full Text] format is : ' . date('l') . "<br>" . '<hr>' . '<br>' . '<br>' ;            
                                
                                echo '{m} => The [Month] with [Digit] format is : ' . date('m') . "<br>" ;            
                                echo '{M} => The [Month] with [Shortcut Text] format is : ' . date('M') . "<br>"  ;
                                echo '{F} => The [Month] with [Full Text] format is : ' . date('F') . "<br>" . '<hr>' . '<br>' . '<br>' ;                                
                                
                                echo '{y} => The [Year] with [2 Digit shortcut] format is : ' . date('y') . "<br>" ;            
                                echo '{Y} => The [Year] with [4 Digit Full] format is : ' . date('Y') . "<br>" . '<hr>' . '<br>' . '<br>' . '<br>' ;
                                
                                
                                echo 'B) Time Advanced Flags : '. "<br>"  ;
                                
                                echo '{h} => The [Hour] with [12 Hour] format is : ' . date('h') . "<br>" ;            
                                echo '{H} => The [Hour] with [24 Hour] format is : ' . date('H') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                                
                                echo '{A} => The [AM-PM] with [Capital] format is : ' . date('A') . "<br>" ;
                                echo '{a} => The [am-pm] with [Small] format is : ' . date('a') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                                
                                echo '{i} => The [Minute] with [Digit] format is : ' . date('i') . "<br>" . '<hr>' . '<br>' . '<br>';            
                                
                                echo '{s} => The [Second] with [Digit] format is : ' . date('s') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                                
                                echo '{u} => The [Micro Second] with [Digit] format is : ' . date('u') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                                            
                                echo '{e} => The [TimeZone] with [Default] format is : ' . date('e') . "<br>" . '<hr>' . '<br>' . '<br>' ;                                    
                                date_default_timezone_set('Africa/Cairo');                        
                                echo '{e} => The [TimeZone] with [After Resetting] format is : ' . date('e') . "<br>" . '<hr>' . '<br>' . '<br>' ;
                        
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 