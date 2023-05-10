
<!--  7 PHP Examples In Arabic - Measure Page Loading Time --> 
<!-- =============================================================== -->

<?php
    $lessonName ='Measure Page Loading Time';
    $title = '7 PHP Tutorials - ' . $lessonName;
    $css = '7 PHP Examples In Arabic - Measure Page Loading Time.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (1) Application [Measuring the page loading time by]  :
        // 1- First Example : [{Loading page Time Calculating} => using {microtime() || round() || range() } with other functions .
        */    
        
        $main = 'In this lesson will be (1) Application [Printing, Include, Embeding all files in a certain Directory/Folder] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example : [{Loading page Time Calculating} => using {microtime() || round() || range() } with other functions ' . '</li>'  .  
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example : [{Loading page Time Calculating} => using {microtime() || round() || range() } with other functions  :
        $ha1 = 'First Example : [{Loading page Time Calculating} => using {microtime() || round() || range() } with other functions  : as following : ' . "<br>" ;             
        
        // // Defining starting time [microtime(true)] :
        //     $startTime = microtime(true);
        
        // // Testing Generating of ranndom elements [printing range()] :
        //     $range = range(1 , 100000);
            
        // // Printing the Generated of ranndom elements [as an array] :
        //     echo "<pre>";
        //     print_r($range);
        //     echo "</pre>";                                                                                        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
        // // Defining starting time [microtime(true)] :
        //     $endTime = microtime(true);
            
        // // Calculating Loading Time between the (Starting time) and the (End Time) [round()] :
        //     $loadTime = $endTime - $startTime ;
        //     $loadTime = round($loadTime, 5);
        //     echo 'The loading page time is [' . $loadTime  . "] Seconds" . "<br>";
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
        // =================================================================================                                                        
            
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
            
            <!-- (*) => First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} : -->
                        
                    <header>
                        First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               
                            // Defining starting time [microtime(true)] :
                                $startTime = microtime(true);
                            
                            // Testing Generating of random Array elements [printing range()]:
                                $range = range(1 , 100000);
                                
                            // Printing the Generated of ranndom elements [as an array]:
                                echo "<pre>";
                                print_r($range);
                                echo "</pre>";                                                                                        
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                
                            // Defining Ending time [microtime(true)] :
                                $endTime = microtime(true);
                                
                            // Calculating Loading Time between the (Starting time) and the (End Time) + [round()] :
                                $loadTime = $endTime - $startTime ;
                                $loadTime = round($loadTime, 3);

                            // Printing the loading time to the user ; 
                                echo 'The loading page time is [' . $loadTime . "] Seconds" . "<br>";
                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
             <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 