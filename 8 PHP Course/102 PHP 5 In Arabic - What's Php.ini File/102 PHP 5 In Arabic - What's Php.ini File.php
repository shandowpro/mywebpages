<!--  102 PHP 5 In Arabic - What's Php.ini File --> 
<!-- =============================================================== -->

<?php
    
    $lessonName ="Filter - What/'s Php.ini File";
    $title = '102 PHP5 - ' . $lessonName;
    $css = "102 PHP 5 In Arabic - What/'s Php.ini File.css";

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Using advqanced options of the php to change some settings of this page] :
        // 1- First Example [Disable || Enable the Error Reporting] => {error_reporting()}
        // 2- Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()}
    */    
        
    
    $main =  'In this lesson will be (2) Applications [Using advqanced options of the php to change some settings of this page]  :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Disable || Enable the Error Reporting] => {error_reporting()} ' . '</li>' . 
    '<li>' . 'Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()}' . '</li>' . 
    '</ul>';            
    // ============================================================================    

    // (*)=> First Example [Disable || Enable the Error Reporting] => {error_reporting()} :
        $ha1 = 'First Example [Disable || Enable the Error Reporting] => {error_reporting()} : as following : ' . "<br>" ; 

        // // Definging Testing error of Undifined Error : 
        //     $num = 100;
        
        // // De-Activating(Disabling) the Function [Disabling the Error]: 
        //     error_reporting(0);
        
        // // Printing the undified variable [with disabled error_reporting function] : 
        //     echo $numL;
        
        // // Re-Activating(Enabling) the Function [Enabling the Error]: 
        //     error_reporting(1);
        
        // // Printing the undified variable [with Enabling error_reporting function] : 
        //     echo $numL;
        
                                
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
            
    // (*) => Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()} :
        $ha2 = 'Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()} : as following : ' . "<br>" ; 
                    
        // Activating the PHP Manual Displaying =>  {phpinfo()} :
            // phpinfo();


        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        
    // =================================================================================                                
                                                  

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
            
            <!-- (*) => First Example [Disable || Enable the Error Reporting] => {error_reporting()} : -->
                        
                    <header>
                        First Example [Disable || Enable the Error Reporting] => {error_reporting()} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                               
                            // Definging Testing error of Undifined Error : 
                                $num = 100;
        
                            // De-Activating(Disabling) the Function [Disabling the Error]: 
                                error_reporting(0);
                            
                            // Printing the undified variable [with disabled error_reporting function] : 
                                echo $numL;
                            
                            // Re-Activating(Enabling) the Function [Enabling the Error]: 
                                error_reporting(1); // This parameter need to revision
                            
                            // Printing the undified variable [with Enabling error_reporting function] : 
                                echo $numL;

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()}  : -->
                        
                    <header>
                        Second Example [Display the whole manula of the current Settigns of local version of PHP] => {phpinfo()}  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Activating the PHP Manual Displaying =>  {phpinfo()} :
                                phpinfo();
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                                
                                                    
            </section>
                                                                    
        </body>
    </html> 