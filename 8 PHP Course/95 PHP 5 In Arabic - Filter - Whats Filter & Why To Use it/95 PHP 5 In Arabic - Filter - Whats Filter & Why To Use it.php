<!--  95 PHP 5 In Arabic - Filter - Whats Filter & Why To Use it --> 
<!-- =============================================================== -->

<!-- This Form will be sent to the [Check.php] File-->
    <form action="check.php" method="POST">    
        <input type="text" name="username"> <br>
        <input type="submit" value="Send"> <br>
    </form>

<?php
    
    $lessonName  ='Filter - what is Filter and why to use it ';
    $title = '95 PHP5 - ' . $lessonName;
    $css = '95 PHP 5 In Arabic - Filter - Whats Filter & Why To Use it.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
    
    /* In this lesson will be (2) Applications [Simple and intro] [Using Filter PHP to filter data from a single Form] :
        // 1- First Example [Default] Filtering data from form method 
        // 2- Second Example [Printing the Filter list] from the Filter list built-in method  
    */
        
    
    $main =  'In this lesson will be (2) Applications [Simple and intro] [Using Filter PHP to filter data from a single Form] as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Default] Filtering data from form method ' . '</li>' .      
    '<li>' . 'Second Example [Printing the Filter list] from the Filter list built-in method {by foreach && print_r()}  ' . '</li>' .      
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example [Default] Filtering data from form method:
        $ha1 = 'First Example [Default] Filtering data from form method as following : ' . "<br>" ; 
        
        // Application External Link :
            echo '<a href="check.php"> Go to the application page [ It is Recommended to go through The Form ] </a>';
        
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                    
    // =================================================================================                                
              
    // (*) => Second Example [Printing the Filter list] from the Filter list built-in method :
        $ha2 = 'Second Example [Printing the Filter list] from the Filter list built-in method as following : ' . "<br>" ; 
                                
        // Printing the All filter List by using {foreach} :
            foreach(filter_list() as $filter) {
                echo $filter . "<br>";
            }        
                    
        // Printing the All filter List [as Array] by using {print_r())} :
            echo '<pre>';
            print_r(filter_list());
            echo '</pre>';
                    
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
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
            
            <!-- (*) => First Example [Default] Filtering data from form method : : -->
                        
                    <header>
                        First Example [Default] Filtering data from form method :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php                                           
                            // Application External Link :
                                echo '<a href="check.php"> Go to the application page [|It is Recommended to go through The Form ] </a>';
                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Printing the Filter list] from the Filter list built-in method  : : -->
                        
                    <header>
                        Second Example [Printing the Filter list] from the Filter list built-in method :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                        <?php                                           

                        // Printing the All filter List by using {foreach} :
                            foreach(filter_list() as $filter) {
                                echo $filter . "<br>";
                            }        
                                    
                        // Printing the All filter List [as Array] by using {print_r())} :
                            echo '<pre>';
                            print_r(filter_list());
                            echo '</pre>';
                                                                                                                                
                        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            </section>
                                                                    
        </body>
    </html> 