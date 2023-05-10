<!--  93 PHP 5 In Arabic - Misc Functions - Exit, Die + Examples --> 
<!-- =============================================================== -->

<?php
    
    $lessonName  ='Misc Functions - Exit, Die + Examples ';
    $title = '93 PHP5 - ' . $lessonName;
    $css = '93 PHP 5 In Arabic - Misc Functions - Exit, Die + Examples.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (6) Applications [Simple & Advnanced ] [Using (2) types of Stopign exectuting next functions + Error Management ] :
        // 1- First [Simple exit ()]  : Stop executing the next script 
        // 2- Second [Simple die ()]  : Stop executing the next script
        // 3- Third [Handling file open with exit ()]  : Stop executing the next script in case the file is not exited
        // 4- Fourth [Handling file open with die ()]  : Stop executing the next script in case the file is not exited
        // 5- Fifth [Handling file open with exit () + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized
        // 6- Sixth [Handling file open with die () + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized */
    
    
    $main =  'In this lesson will be (6) Applications [Simple & Advnanced ] [Using (2) types of Stopign exectuting next functions + Error Management ] as following  : ' . '<br>' . '<ul>' .
    '<li>' . '1- First [Simple exit ()]  : Stop executing the next script ' . '</li>' .  
    '<li>' . '2- Second [Simple die ()]  : Stop executing the next script ' . '</li>' . 
    '<li>' . '3- Third [Handling file open with exit ()]  : Stop executing the next script in case the file is not exited ' . '</li>' . 
    '<li>' . '4- Fourth [Handling file open with die ()]  : Stop executing the next script in case the file is not exited ' . '</li>' . 
    '<li>' . '5- Fifth [Handling file open with exit () + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized ' . '</li>' . 
    '<li>' . '6- Sixth [Handling file open with die () + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized ' . '</li>' . 
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First [Simple exit()]  : Stop executing the next script  :
        $ha1 = '[Simple exit()] : Stop executing the next script as following : ' . "<br>" ; 

        // echo '<a href="" >  First [Simple exit()]  : Stop executing the next script  </a>' ; 
        // // Declaring Simple varaible :  
        //     $name= 'Shadi';
        //     echo 'Hello ' . $name . "<br>";
                        
        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using exit()" . "<br>" ;
        
        // // Using [exit()] method to stop exectuting the following Script: 
        //     exit();
        

        // //  Printing a message for testing the exit() running code : 
        //     echo "If you see this script => This mean that the exit() function is not working  " ;            
                
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                

    // (*) => Second Example => [Simple die()]  : Stop executing the next script :
        $ha2 = '[Simple die ()]  : Stop executing the next script  as following :  ' . "<br>" ; 

        // // Declaring Simple variable :  
        //     $name= 'Shadi';
        //     echo $name;

        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
            
        // // Using [die()] method to stop exectuting the following Script: 
        //     die;
    

        // //  Printing a message for testing the exit() running code : 
        //     echo "If you see this script => This mean that the die function is not working  " ;            
                            
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    
    // =================================================================================                                

    // (*) => Third Example => [Handling file open with exit()]  : Stop executing the next script in case the file is not exited :
        $ha3 = ' [Handling file open with exit ()]  : Stop executing the next script in case the file is not exited   as following :  ' . "<br>" ; 

        // // Declaring Simple varaible of unexited file  :  
        //     $file = 'shadi.txt';

        // // Declaring a Handler of opining the file for read mode :
        //     $handle = fopen($file, 'r');
        
        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
        
        
        // // Using [exit()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
        //     exit("{exit Method} Customized Error: Unable to open the $file");


        // //  Printing a message for testing the exit() running code : 
        //     echo "If you see this script => This mean that the exit() function is not working  " ;            
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                
          
    // (*) => Fourth Example => [Handling file open with die()]  : Stop executing the next script in case the file is not exited  :
        $ha4 = '[Handling file open with die()]  : Stop executing the next script in case the file is not exited  as following :  ' . "<br>" ; 
        
        // // Declaring Simple varaible of unexited file  :  
        //     $file = 'shadi.txt';

        // // Declaring a Handler of opining the file for read mode :
        //     $handle = fopen($file, 'r');
        
        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
        
        
        // // Using [die()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
        //     die("{die Method} Customized Error: Unable to open the $file");


        // //  Printing a message for testing the die() running code : 
        //     echo "If you see this script => This mean that the die() function is not working  " ;            
    
        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                
    
    // (*) => Fifth [Handling file open with exit() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized  :
        $ha5 = ' [Handling file open with exit() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized,  as following :  ' . "<br>" ; 

        // // Declaring Simple varaible of unexited file  :  
        //     $file = 'shadi.txt';

        // // Declaring a Handler of opining the file for read mode :
        //     $handle = @fopen($file, 'r');
        
        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
        
        
        // // Using [exit()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
        //     exit("{exit Method} Customized Error: Unable to open the $file");


        // //  Printing a message for testing the exit() running code : 
        //     echo "If you see this script => This mean that the exit() function is not working  " ;            
                                    
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                                
          
    // (*) => Sixth [Handling file open with die() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized :
        $ha6 = '[Handling file open with die () + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized,  as following :  ' . "<br>" ; 
    
        // // Declaring Simple varaible of unexited file  :  
        //     $file = 'shadi.txt';

        // // Declaring a Handler of opining the file for read mode :
        //     $handle = @fopen($file, 'r');
        
        // //  Printing a message of stoping executing following script by usign exit() : 
        //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
        
        
        // // Using [die()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
        //     die("{die Method} Customized Error: Unable to open the $file");


        // //  Printing a message for testing the die() running code : 
        //     echo "If you see this script => This mean that the die() function is not working "; 


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
            
            <!-- (*) => First Example [Simple exit()]  : Stop executing the next script : -->
                        
                    <header>
                        First Example [Simple exit()] : Stop executing the next script ]:  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            echo '<a href="simpleExit.php" >  First Example [Simple exit()]  : Stop executing the next script by Exit()  </a>' . '<br>' ; 
                            

                            // // Declaring Simple varaible :  
                            //     $name= 'Shadi';
                            //     echo 'Hello ' . $name ;
                        
                            // //  Printing a message for testing the exit() running code : 
                            //     echo "If you see this script => This mean that the exit() function is not working  " ;            
                            
                            // // Using [exit()] method to stop exectuting the following Script: 
                            //     exit();
                            
                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using exit()" . "<br>" ;

                                                                
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                        

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
                        <!-- (*) => Second Example => [Simple die()]  : Stop executing the next script  : -->
                        
                        <header>
                            Second Example => [Simple die()]  : Stop executing the next script  : <br> 
                        </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        <?php       

                            echo '<a href="simpleDie.php" >  Second Example => [Simple die()]  : Stop executing the next script by die()  </a>' . '<br>' ; 

                            // // Declaring Simple variable :  
                            //     $name= 'Shadi';
                            //     echo 'Hello ' . $name;

                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
                                
                            // // Using [die()] method to stop exectuting the following Script: 
                            //     die;
                        

                            // //  Printing a message for testing the exit() running code : 
                            //     echo "If you see this script => This mean that the die function is not working  " ;            
                                                
                            
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            

            <!-- (*) => Third Example => [Handling file open with exit()]  : Stop executing the next script in case the file is not exited : -->
                                    
                    <header>
                        Third Example => [Handling file open with exit()]  : Stop executing the next script in case the file is not exited : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                        <?php       

                            echo '<a href="advancedExit.php" > Third Example => [Handling file open with exit()]  : Stop executing the next script in case the file is not exited </a>' . '<br>' ; 

                            // // Declaring Simple varaible of unexited file  :  
                            //     $file = 'shadi.txt';

                            // // Declaring a Handler of opining the file for read mode :
                            //     $handle = fopen($file, 'r');
                            
                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
                            
                            
                            // // Using [exit()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
                            //     exit("{exit Method} Customized Error: Unable to open the $file");
                    
                    
                            // //  Printing a message for testing the exit() running code : 
                            //     echo "If you see this script => This mean that the exit() function is not working  " ;            
                        
                            
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
            <!-- (*) => Fourth Example => [Handling file open with die()]  : Stop executing the next script in case the file is not exited : -->
                                    
                    <header>
                        Fourth Example => [Handling file open with die()]  : Stop executing the next script in case the file is not exited : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                        <?php       
                            echo '<a href="advancedDie.php" > Fourth Example => [Handling file open with die()]  : Stop executing the next script in case the file is not exited </a>' . '<br>' ; 
                            
                            // // Declaring Simple varaible of unexited file  :  
                            //     $file = 'shadi.txt';

                            // // Declaring a Handler of opining the file for read mode :
                            //     $handle = fopen($file, 'r');
                            
                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
                            
                            
                            // // Using [die()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
                            //     die("{die Method} Customized Error: Unable to open the $file");
                    
                    
                            // //  Printing a message for testing the die() running code : 
                            //     echo "If you see this script => This mean that the die() function is not working  " ;            
                        
                            
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            
            <!-- (*) => Fifth [Handling file open with exit() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized : -->
                                    
                    <header>
                        Fifth Example [Handling file open with exit() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                        <?php       
                            echo '<a href="advancedHanldeExit.php" > Fifth Example [Handling file open with exit() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized  </a>' . '<br>' ; 

                            // // Declaring Simple varaible of unexited file  :  
                            //     $file = 'shadi.txt';

                            // // Declaring a Handler of opining the file for read mode :
                            //     $handle = @fopen($file, 'r');
                            
                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
                            
                            
                            // // Using [exit()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
                            //     exit("{exit Method} Customized Error: Unable to open the $file");
                    
                    
                            // //  Printing a message for testing the exit() running code : 
                            //     echo "If you see this script => This mean that the exit() function is not working  " ;            
                                        
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                        
            <!-- (*) => Sixth Example [Handling file open with die() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized : -->
                                    
                    <header>
                        Sixth Example [Handling file open with die() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                        <?php       
                            echo '<a href="advancedHanldeDie.php" > Sixth Example [Handling file open with die() + Error Mangement with @ ] : Stop executing the next script in case the file is not exited + displaying customized  </a>' . '<br>' ; 
                            // // Declaring Simple varaible of unexited file  :  
                            //     $file = 'shadi.txt';

                            // // Declaring a Handler of opining the file for read mode :
                            //     $handle = @fopen($file, 'r');
                            
                            // //  Printing a message of stoping executing following script by usign exit() : 
                            //     echo 'Sorry [' . $name . '] ' . " You can not executing the followning scripts , by using die()" . "<br>" ;
                            
                            
                            // // Using [die()] method to stop exectuting the following Script + with customized Error messages [in case there is an Error in previous code]  : 
                            //     die("{die Method} Customized Error: Unable to open the $file");
                    
                    
                            // //  Printing a message for testing the die() running code : 
                            //     echo "If you see this script => This mean that the die() function is not working "; 
                    
                    
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            

            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 