<!--  89 PHP 5 In Arabic - Session - End _ Destroy Session --> 
<!-- =============================================================== -->

<?php
    $lessonName  ='Session - End _ Destroy Session';
    $title = '89 PHP5 - ' . $lessonName;
    $css = '89 PHP 5 In Arabic - Session - End _ Destroy Session.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (1) Application [Creating 5 pages with session decleratiion , with (5) pages in overall] as following  :
        // 1- First [main page] => Session Defining & Sessions Variables decleration .
        // 2- Second [inner page] => Sessioins Variabes processing .
        // 3- Third [inner page] => Sessoins Variabes processing .
        // 4- Fourth [inner page] => Sessoins Variabes processing + Changing one of the Session Variable .
        // 5- Fifth [inner page] => Sessoins Variabes processing +  Printing all Defined Session variable with latest update  + Unset & Destroy Session File.
    
        $main =  'In this lesson will be (1) Application [Creating 5 pages with session decleratiion , with (5) pages] as following  : ' . '<br>' . '<ul>' .
        '<li>' . 'First [main page] => Session Defining & Sessions Variables decleration ' . '</li>' .  
        '<li>' . 'Second [inner page] => Sessoins Variabes processing ' . '</li>' . 
        '<li>' . ' Third [inner page] => Sessoins Variabes processing ' . '</li>' .     
        '<li>' . ' Fourth [inner page] => Sessoins Variabes processing + Changing one of the Session Variable ' . '</li>' .     
        '<li>' . ' Fifth [inner page] => Sessoins Variabes processing +  Printing all Defined Session variable with latest update + Unset & Destroy Session File' . '</li>' .     
        '</ul>';
        
    
    // ============================================================================        
    // ============================================================================    
  
    // (*) => First Example =>  Creating 5 pages with session decleration , with (5) pages in overall :
    
        $ha1 = 'Creating 5 pages with session decleratiion , with (5) pages in overall + Modifying in the page 4 + with overall printing Session variables + Unset & Destroy Session File :  as following : ' . "<br>" ; 
        
        // Resuming the main Session :
            session_start();

        // Modfying the Favfood Session Variable :
            echo 'Hello ' . $_SESSION['username'] . ' Weclome to the web application : [Session] => {Page5 - Room5} '  . "<br>" ;
            
        //  User Welcome to the current page  :   
            echo 'You password is ' . $_SESSION['password'] . "<br>" ;
            
            echo 'You Favourite Food is ' . $_SESSION['favfood'] . "<br>" ;            
            
            echo 'You in the last page '. "<br>" ;            
            
            
        // Printing all Session Varialbes :  
            echo '<pre>' ; 
            print_r($_SESSION);
            echo '</pre>' ; 
            
        //  Unseting the Session :
            session_unset();
        
        //  Destroying the Session :
            session_destroy();
        
        // Testing Print of Destroyed Session Variables :  
            echo 'Testing Print of Destroyed Session Variables : ' . "<br>" . "<br>" ; 
            echo '<pre>' ; 
            print_r($_SESSION);
            echo '</pre>' ; 
                        
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
            
            <!-- (*) => First Example =>  Creating 5 pages with session decleratiion , with (5) pages in overall + Unset & Destroy Session File    : -->
                        
                    <header>
                        First Example =>  Creating 5 pages with session decleratiion , with (5) pages in overall + Unset & Destroy Session File : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       
                    
                            // // Resuming the main Session :
                            //     session_start();

                            
                            // //  User Welcome to the current page  :   
                            //     echo 'You password is ' . $_SESSION['password'] . "<br>" ;
            
                            //     echo 'You Favourite Food is ' . $_SESSION['favfood'] . "<br>" ;            
                                
                            //     echo 'You in the last page '. "<br>" ;            
                                
            
                            // // Printing all Session Varialbes :  
                            //     echo '<pre>' ; 
                            //     print_r($_SESSION);
                            //     echo '</pre>' ; 
                                
                            // //  Unseting the Session :
                            //     session_unset();
                            
                            // //  Destroying the Session :
                            //     session_destroy();
                            
                            // Testing Print of Destroyed Session Variables :  
                                echo 'Testing Print of Destroyed Session Variables : ' . "<br>" . "<br>" ; 
                                echo '<pre>' ; 
                                print_r($_SESSION);
                                echo '</pre>' ; 
                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                            
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 