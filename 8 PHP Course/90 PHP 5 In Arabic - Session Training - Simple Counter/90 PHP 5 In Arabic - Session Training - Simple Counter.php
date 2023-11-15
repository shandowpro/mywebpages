<!--  90 PHP 5 In Arabic - Session Training - Simple Counter --> 
<!-- =============================================================== -->

<?php

    include 'c.php' ;
    
    $lessonName  ='Session Training - Simple Counter ';
    $title = '90 PHP5 - ' . $lessonName;
    $css = '90 PHP 5 In Arabic - Session Training - Simple Counter.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number  ] :
        // 1- First [Main page] : {counter.php} => Will start the session Definition + and declaring some of session varaibles + Link to the Display page.
        // 2- Second [Counter page] : {c.php}  => The page will count the visiting traffic [including the Reloading times] , inside a Session Variable .
        // 2- Third [Normal page] : {about.php}  => The page will include the counter processing page + link to the Home page .        
        // 3- Fourth [Display page] : {test.php} => The page will display the current fixed number of the counter .    
    
    $main =  'In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number  ], with (4) pages] as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First [Main page] : {counter.php} => Will start the session Definition + and declaring some of session varaibles + Link to the Display page' . '</li>' .  
    '<li>' . 'Second [Counter page] : {c.php}  => The page will count the visiting traffic [including the Reloading times] , inside a Session Variable ' . '</li>' . 
    '<li>' . 'Third [Normal page] : {about.php}  => The page will include the counter processing page + link to the Home page' . '</li>' .     
    '<li>' . 'Fourth [Display page] : {test.php} => The page will display the current fixed number of the counter' . '</li>' .         
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example => In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number  ]:
        $ha1 = 'In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number  ] :  as following : ' . "<br>" ; 

        // Declaring the main Session : => [We will not define the session start , due to it is already defined in the included page ]  
            // session_start();
        
        // Declaring  Session Variables  :
            $_SESSION['username'] = "Shadi";                        

        //  User Welcome to the current page  :            
            echo 'Hello [' . $_SESSION['username'] . '] ' . "<br>" . ' Welcome to the web application : [Session Simple Counter] => {Main Page} : [counter.php]'  . "<br>" . "<br>" ;
            echo 'Your latest counter value is [ '. $_SESSION['counter'] . ']'  . "<br>" . "<br>" ;
        
        // Link to the [about] inner page : 
            echo '<h2> Click on the link below to go the About inner page  </h2>' . "<br>" . "<br>"  ;
            echo '<a href="about.php"> ِAbout </a>' . "<br>" ;
                        
        // Link to the [Display] inner page : 
            echo 'Go to Counter variable in the next link :' . '<br>' ;             
            echo '<a href="display.php"> Display </a>' . "<br>" ;                    
            
        
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
            
            <!-- (*) => First Example => In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number   : -->
                        
                    <header>
                        First Example => In this lesson will be (1) Application [Creating multiple connected pages to counting the user visiting +  Displaying thge fixed Number: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            // Declaring the main Session :
                                // session_start();
                                // $_SESSION['username'];
                                // $_SESSION['password'];                    
                                
                            //  User Welcome to the current page  :            
                                echo 'Hello ' . $_SESSION['username'] . ' Welcome to the web application : [Session Simple Counter] => {Main Page} : [counter.php]'  . "<br>" ;
        
                            // Link to the [about] inner page : 
                                echo '<h2> Click on the link below to go the About inner page  </h2>' . "<br>" ;
                                echo '<a href="about.php"> ِAbout </a>' . "<br>" ;
                                            
                            // Link to the [Display] inner page : 
                                echo 'Go to Counter variable in the next link :' . '<br>' ;             
                                echo '<a href="display.php"> Display Counter </a>' . "<br>" ;                    
                                                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 