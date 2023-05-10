<!--  101  PHP 5 In Arabic - Date - Strtotime --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Filter - Date - Strtotime';
    $title = '101 PHP5 - ' . $lessonName;
    $css = '101  PHP 5 In Arabic - Date - Strtotime.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (9) Applications [Print Certain Customized time and date format (with using Texual Time Stamp Flags] :
        // 1- First Example [Printing the current date and Time using strtotime(now) ]
        // 2- Second Example [Printing the Next Year Date and Time using strtotime(+X year) ]
        // 3- Third Example [Printing the Next Month Date and Time using strtotime(+X month) ]
        // 4- Fourth Example [Printing the Next Week Date and Time using strtotime(+X week) ]        
        // 5- Fifth Example [Printing the Next Day Date and Time using strtotime(+X day) ]        
        // 6- Sixth Example [Printing the Next Hour Date and Time using strtotime(+X hours) ]        
        // 7- Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ]
        // 8- Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ] 
        // 9- Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ] 
    */    
        
    
    $main =  'In this lesson will be (9) Applications [Print Certain Customized time and date format (with using Texual Time Stamp Flags] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Printing the current date and Time using strtotime(now) ] ' . '</li>' . 
    '<li>' . 'Second Example [Printing the Next Year(s) Date and Time using strtotime(+X year) ]' . '</li>' . 
    '<li>' . 'Third Example [Printing the Next Month(s) Date and Time using strtotime(+X month) ]' . '</li>' .
    '<li>' . 'Fourth Example [Printing the Next Week(s) Date and Time using strtotime(+X week) ]' . '</li>' . 
    '<li>' . 'Fifth Example [Printing the Next Day(s) Date and Time using strtotime(+X day)] ' . '</li>' . 
    '<li>' . 'Sixth Example [Printing the Next Hour(s) Date and Time using strtotime(+X hours) ]' . '</li>' . 
    '<li>' . 'Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ]' . '</li>' . 
    '<li>' . 'Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ]' . '</li>' . 
    '<li>' . 'Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ]' . '</li>' .
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example [Printing the current date and Time using strtotime(now)] :
        $ha1 = 'First Example [Printing the current date and Time using strtotime(now) ]  : as following : ' . "<br>" ; 

        // Definging time stamp of textual flag variable : 
            $txtTimeStamp1 = strtotime('now');

        // Printing the current Date And Time : 
            echo 'The [current Date and Time {now}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp1) . "<br>";            
                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
            
    // (*) => Second Example [Printing the Next Year(s) Date and Time using strtotime(+X year)] :
        $ha2 = 'Second Example [Printing the Next Year(s) Date and Time using strtotime(+X year) ]  : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp21 = strtotime('+1 year');
            $txtTimeStamp22 = strtotime('+2 year');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {after +1 year}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp21) . "<br>";            
            echo 'The [current Date and Time {after +2 year}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp22) . "<br>";            
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  
    // (*) => Third Example [Printing the Next Month(s) Date and Time using strtotime(+X month)] :
        $ha3 = 'Third Example [Printing the Next Month(s) Date and Time using strtotime(+X month) ]  : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp31 = strtotime('+1 month');
            $txtTimeStamp32 = strtotime('+2 month');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {after +1 month}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp31) . "<br>";            
            echo 'The [current Date and Time {after +2 month}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp32) . "<br>";            
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Fourth Example [Printing the Next Week Date and Time using strtotime(+X week)] :
        $ha4 = 'Fourth Example [Printing the Next Week Date and Time using strtotime(+X week) ]  : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp41 = strtotime('+1 week');
            $txtTimeStamp42 = strtotime('+2 week');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {after +1 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp41) . "<br>";            
            echo 'The [current Date and Time {after +2 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp42) . "<br>";            
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Fifth Example [Printing the Next Week Date and Time using strtotime(+X Day)] :
        $ha5 = 'Fifth Example [Printing the Next Week Date and Time using strtotime(+X Day) ]  : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp51 = strtotime('+1 day');
            $txtTimeStamp52 = strtotime('+2 day');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {after +1 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp51) . "<br>";
            echo 'The [current Date and Time {after +2 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp52) . "<br>";
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  
    // (*) => Sixth Example [Printing the Next Hour(s) Date and Time using strtotime(+X hours) ] :
        $ha6 = 'Sixth Example [Printing the Next Hour(s) Date and Time using strtotime(+X hours) ]  : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp61 = strtotime('+1 hours');
            $txtTimeStamp62 = strtotime('+2 hours');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {after +1 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp61) . "<br>";
            echo 'The [current Date and Time {after +2 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp62) . "<br>";
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ] :
        $ha7 = 'Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ] : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp71 = strtotime('next Sunday');
            $txtTimeStamp72 = strtotime('next Monday');

        // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {next Sunday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp71) . "<br>";
            echo 'The [current Date and Time {next Monday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp72) . "<br>";
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  
    // (*) => Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ] :
        $ha8 = 'Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ] : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp81 = strtotime('last Sunday');
            $txtTimeStamp82 = strtotime('last Monday');

        // Printing the current Date And Time => using {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {last Sunday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp81) . "<br>";
            echo 'The [current Date and Time {last Monday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp82) . "<br>";
                                                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                

    // (*) => Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ] :
        $ha9 = 'Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ] : as following : ' . "<br>" ; 
            
        // Definging time stamp of textual flag variable : 
            $txtTimeStamp91 = strtotime('+1 year 1 month 1 week 1 hours');
            $txtTimeStamp92 = strtotime('+2 year 2 month 2 week 2 hours');            

        // Printing the current Date And Time => using {Definging time stamp of textual flag variable}: 
            echo 'The [current Date and Time {1 year 1 month 1 week 1 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp91) . "<br>";
            echo 'The [current Date and Time {2 year 2 month 2 week 2 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp92) . "<br>";
                                                                
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
            
            <!-- (*) => First Example [Printing the current date and Time using strtotime(now)] : -->
                        
                    <header>
                        First Example [Printing the current year after copyright sign + Printing current day and month and year ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                               
                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp1 = strtotime('now');

                            // Printing the current Date And Time : 
                                echo 'The [current Date and Time {now}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp1) . "<br>" ;

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Printing the Next Year(s) Date and Time using strtotime(+X year)]  : -->
                        
                    <header>
                        Second Example [Printing the Next Year(s) Date and Time using strtotime(+X year)]   :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp21 = strtotime('+1 year');
                                $txtTimeStamp22 = strtotime('+2 year');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {after +1 year}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp21) . "<br>";            
                                echo 'The [current Date and Time {after +2 year}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp22) . "<br>";                                        
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Third Example [Printing the Next Month(s) Date and Time using strtotime(+X month)]   : -->
                        
                    <header>
                        Third Example [Printing the Next Month(s) Date and Time using strtotime(+X month)]   :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp31 = strtotime('+1 month');
                                $txtTimeStamp32 = strtotime('+2 month');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {after +1 month}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp31) . "<br>";            
                                echo 'The [current Date and Time {after +2 month}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp32) . "<br>";            
                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Fourth Example [Printing the Next Week Date and Time using strtotime(+X week)] : -->
                        
                    <header>
                        Fourth Example [Printing the Next Week Date and Time using strtotime(+X week)] :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp41 = strtotime('+1 week');
                                $txtTimeStamp42 = strtotime('+2 week');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {after +1 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp41) . "<br>";            
                                echo 'The [current Date and Time {after +2 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp42) . "<br>";            
                                            
                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Fifth Example [Printing the Next Week Date and Time using strtotime(+X Day)] : -->
                        
                    <header>
                        Fifth Example [Printing the Next Week Date and Time using strtotime(+X Day)] :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp51 = strtotime('+1 day');
                                $txtTimeStamp52 = strtotime('+2 day');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {after +1 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp51) . "<br>";
                                echo 'The [current Date and Time {after +2 week}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp52) . "<br>";
                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Sixth Example [Printing the Next Hour(s) Date and Time using strtotime(+X hours) ]  : -->
                        
                    <header>
                        Sixth Example [Printing the Next Hour(s) Date and Time using strtotime(+X hours) ]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp61 = strtotime('+1 hours');
                                $txtTimeStamp62 = strtotime('+2 hours');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {after +1 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp61) . "<br>";
                                echo 'The [current Date and Time {after +2 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp62) . "<br>";
                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ]  : -->
                        
                    <header>
                        Seventh Example [Printing the Next Day Date and Time using strtotime(next Full Text Day) ]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha7; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp71 = strtotime('next Sunday');
                                $txtTimeStamp72 = strtotime('next Monday');

                            // Printing the current Date And Time => usign {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {next Sunday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp71) . "<br>";
                                echo 'The [current Date and Time {next Monday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp72) . "<br>";
                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ]  : -->
                        
                    <header>
                        Eigth Example [Printing the Last Day Date and Time using strtotime(last Full Text Day) ]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha8; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp81 = strtotime('last Sunday');
                                $txtTimeStamp82 = strtotime('last Monday');

                            // Printing the current Date And Time => using {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {last Sunday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp81) . "<br>";
                                echo 'The [current Date and Time {last Monday}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp82) . "<br>";
                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ] : -->
                        
                    <header>
                        Nineth Example [Printing the Multiple Flags Date and Time using strtotime(Mutiple Flags) ] :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha9; ?>  </h1>  
                        <?php                                           

                            // Definging time stamp of textual flag variable : 
                                $txtTimeStamp91 = strtotime('+1 year 1 month 1 week 1 hours');
                                $txtTimeStamp92 = strtotime('+2 year 2 month 2 week 2 hours');            

                            // Printing the current Date And Time => using {Definging time stamp of textual flag variable}: 
                                echo 'The [current Date and Time {1 year 1 month 1 week 1 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp91) . "<br>";
                                echo 'The [current Date and Time {2 year 2 month 2 week 2 hours}] using Texutaul time stamp is : ' . '<br>' . date('Y-m-d H:i:s', $txtTimeStamp92) . "<br>";
                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 