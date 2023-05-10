<!--  92 PHP 5 In Arabic - Misc Functions - Sleep, uSleep + Examples --> 
<!-- =============================================================== -->

<?php
    
    $lessonName  ='Sleep() || usleep()  || time_sleep_until - Simple Login ';
    $title = '92 PHP5 - ' . $lessonName;
    $css = '92 PHP 5 In Arabic - Misc Functions - Sleep, uSleep + Examples.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    // In this lesson will be (4) Applications [Simple & Advnanced ] [Using (3) types of sleep functions ] :
        // 1- First [Simple sleep()]  : Delaying printing variable for certain time [Seconds]
        // 2- Second [Simple usleep()]  : Delaying printing variable for certain time [MicroSeconds] 
        // 3- Third [Simple time_sleep_until()]  : Delaying printing variable for certain time [Time Function] 
        // 4- Fourth [Advnaced all sleep methods types()]  : Delaying Exectuiung certain function 
    
    $main =  'In this lesson will be (4) Applications [Simple & Advnanced ] [Using (3) types of sleep functions ] as following  : ' . '<br>' . '<ul>' .
    '<li>' . '1- First [Simple sleep()]  : Delaying printing variable for certain time [Seconds]' . '</li>' .  
    '<li>' . '2- Second [Simple usleep()]  : Delaying printing variable for certain time [MicroSeconds] ' . '</li>' . 
    '<li>' . '3- Third [Simple time_sleep_until()]  : Delaying printing variable for certain time [Time Function]' . '</li>' . 
    '<li>' . '4- Fourth [Advnaced all sleep methods types()]  : Delaying Exectuiung certain function for different time of delay for each method' . '</li>' . 
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example =>  [Simple sleep()]  : Delaying printing variable for certain time [Seconds] :
        $ha1 = '[Simple sleep()]  : Delaying printing variable for certain time [Seconds]  as following :  ' . "<br>" ; 

        // // Declaring Simple varaible :  
        //     $name= 'Shadi';
        //     echo $name;
                        
        // // Using [sleep()] method for 3 seconds : 
        //     sleep(3);
        
        // //  Printing a message about delaying : 
        //     echo 'Sorry [' . $name . '] ' . "For Delaying for (3 Seconds) !" . "<br>" ;            
        
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                

    // (*) => Second Example =>  [Simple usleep()]  : Delaying printing variable for certain time [MiroSeconds] :
        $ha2 = '[Simple usleep()]  : Delaying printing variable for certain time (3000000) [MicroSeconds]  as following :  ' . "<br>" ; 

        // // Declaring Simple varaible :  
        //     $name= 'Shadi';
        //     echo $name;
                        
        // // Using [usleep()] method for 3 MicroSeconds : 
        //     sleep(3000000);
        
        // //  Printing a message about delaying : 
        //     echo 'Sorry [' . $name . '] ' . "For Delaying for (3000000 Microseconds)!" . "<br>" ;            
        
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    
    // =================================================================================                                

    // (*) => Third Example =>  [Simple time_sleep_until()]  : Delaying printing variable for certain time [Seconds] :
        $ha3 = '[Simple time_sleep_until(time() + 3 )]  : Delaying printing variable for certain time [time function] for 3 seconds as following :  ' . "<br>" ; 

        // // Declaring Simple varaible :  
        //     $name= 'Shadi';
        //     echo $name;
                        
        // // Using [time_sleep_until()] method for 3 seconds : 
        //     sleep(3);
        
        // //  Printing a message about delaying :  
        //     echo 'Sorry [' . $name . '] ' . "For Delaying (3 Seconds) !" . "<br>" ;            
        
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                
          
    // (*) => Forth Example =>  [Advnaced all sleep methods types()]  : Delaying Exectuiung certain function for different time of delay for each method :
        $ha4 = '[Advnaced all sleep methods types()]  : Delaying Exectuiung certain function for different time of delay for each method as following :  ' . "<br>" ; 
    
        // // Declaring Functions1 [sleep()] :  
        //     function checkFileSleep() {
        //         if (file_exists('shadi.txt')) {                    
        //             echo 'file had been found {After using the sleep() for [3] seconds Method}'; 
        //         } else {                    
        //             // Using [sleep()] method for 3 seconds : 
        //                 sleep(3);
                        
        //             // Repeating the same function to loop searching [in case not found the file] : 
        //                 checkFileSleep();
        //         }
        //     }
        
        // // Declaring Functions2 [usleep()] :  
        //     function checkFileUsleep() {
        //         if (file_exists('shadi.txt')) {                    
        //             echo 'file had been found {After using the sleep() for [4] Microseconds Method}'; 
        //         } else {                    
        //             // Using [usleep()] method for 4 Microseconds : 
        //                 usleep(4000000);
                        
        //             // Repeating the same function to loop searching [in case not found the file] : 
        //                 checkFileUsleep();
        //         }
        //     }
            
        // // Declaring Functions3 [time_sleep_until()] :  
        //     function checkFileTsleep() {
        //         if (file_exists('shadi.txt')) {                    
        //             echo 'file had been found {After using the time_sleep_until() for [5] seconds Method}'; 
        //         } else {                    
        //             // Using [checkFileUsleep()] method for 5 seconds : 
        //                 time_sleep_until(time() + 5);
                        
        //             // Repeating the same function to loop searching [in case not found the file] : 
        //                 checkFileTsleep();
        //         }
        //     }

        //     // Executing the Sleep function1 [by using the sleep()] :
        //         echo checkFileSleep();
                                            
        //     // Executing the USleep function2 [by using the usleep()] :
        //         echo checkFileUsleep();
            
        //     // Executing the TSleep function3 [by using the time_sleep_until()] :
        //         echo checkFileTsleep();
                                            
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
            
            <!-- (*) => First Example =>  [Simple sleep()]  : Delaying printing variable for certain time [Seconds] : -->
                        
                    <header>
                        First Example =>  [Simple sleep()]  : Delaying printing variable for certain time [Seconds]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            // Declaring Simple varaible :  
                                    $name= 'Shadi';
                                    echo $name . '<br>';
                                                
                            // Using [sleep()] method for 3 seconds : 
                                sleep(3);
                            
                            //  Pringting a message about delaying 
                                echo 'Sorry [' . $name . '] ' . "For Delaying for (3 Seconds) !" . "<br>" ;            
                                                                                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
            <!-- (*) => Second Example =>  [Simple usleep()]  : Delaying printing variable for certain time [MiroSeconds] : -->
                        
                    <header>
                        Second Example =>  [Simple usleep()]  : Delaying printing variable for certain time [MiroSeconds] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        <?php       

                            // Declaring Simple varaible :  
                                $name= 'Shadi';
                                echo $name . '<br>';
                                            
                            // Using [usleep()] method for 3 MicroSeconds : 
                                usleep(3000000);
                            
                            //  Pringting a message about delaying 
                                echo 'Sorry [' . $name . '] ' . "For Delaying for (3000000 Microseconds)!" . "<br>" ;                                                                
                                                                                                                                        
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            

            <!-- (*) => Third Example =>  [Simple time_sleep_until()]  : Delaying printing variable for certain time [Seconds] : -->
                                    
                    <header>
                        Third Example =>  [Simple time_sleep_until()]  : Delaying printing variable for certain time [Seconds] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                        <?php       

                            // Declaring Simple varaible :  
                                $name= 'Shadi';
                                echo $name . '<br>';
                                            
                            // Using [time_sleep_until()] method for 3 seconds : 
                                time_sleep_until(time() + 3);
                            
                            //  Pringting a message about delaying :  
                                echo 'Sorry [' . $name . '] ' . "For Delaying (3 Seconds) !" . "<br>" ;                                    

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
            <!-- (*) => Forth Example =>  [Advnaced all sleep methods types()]  : Delaying Exectuiung certain function for different time of delay for each method : -->
                                    
                    <header>
                        Forth Example =>  [Advnaced all sleep methods types()]  : Delaying Exectuiung certain function for different time of delay for each method : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                        <?php       
                            // Declaring Functions1 [sleep()] :  
                                function checkFileSleep() {
                                    if (file_exists('shadi.txt')) {                    
                                        echo 'file had been found {After using the sleep() for [3] seconds Method}' . '<br>'; 
                                    } else {                    
                                        // Using [sleep()] method for 3 seconds : 
                                            sleep(3);
                                            
                                        // Repeating the same function to loop searching [in case not found the file] : 
                                            checkFileSleep();
                                    }
                                }
                            
                            // Declaring Functions2 [usleep()] :  
                                function checkFileUsleep() {
                                    if (file_exists('shadi.txt')) {                    
                                        echo 'file had been found {After using the sleep() for [4] Microseconds Method}' . '<br>'; 
                                    } else {                    
                                        // Using [usleep()] method for 4 Microseconds : 
                                            usleep(4000000);
                                            
                                        // Repeating the same function to loop searching [in case not found the file] : 
                                            checkFileUsleep();
                                    }
                                }
                                
                            // Declaring Functions3 [time_sleep_until()] :  
                                function checkFileTsleep() {
                                    if (file_exists('shadi.txt')) {                    
                                        echo 'file had been found {After using the time_sleep_until() for [5] seconds Method}' . '<br>'; 
                                    } else {                    
                                        // Using [checkFileUsleep()] method for 5 seconds : 
                                            time_sleep_until(time() + 5);
                                            
                                        // Repeating the same function to loop searching [in case not found the file] : 
                                            checkFileTsleep();
                                    }
                                }

                                // Executing the Sleep function1 [by using the sleep()] :
                                    echo checkFileSleep();
                                                                
                                // Executing the USleep function2 [by using the usleep()] :
                                    echo checkFileUsleep();
                                
                                // Executing the TSleep function3 [by using the time_sleep_until()] :
                                    echo checkFileTsleep();


                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 