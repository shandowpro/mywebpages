<!--  88 PHP 5 In Arabic - Session - Modify Session --> 
<!-- =============================================================== -->

<?php
    $lessonName  ='Session - Modify Session ';
    $title = '88 PHP5 - ' . $lessonName;
    $css = '88 PHP 5 In Arabic - Session - Modify Session.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (1) Application [Creating 5 pages with session decleratiion , with (5) pages in overall] as following  :
        // 1- First [main page] => Session Defining & Sessions Variables decleration .
        // 2- Second [inner page] => Sessioins Variabes processing .
        // 3- Third [inner page] => Sessoins Variabes processing .
        // 4- Fourth [inner page] => Sessoins Variabes processing + Changing one of the Session Variable .
        // 5- Fifth [inner page] => Sessoins Variabes processing +  Printing all Defined Session variable with latest update .
    
    $main =  'In this lesson will be (1) Application [Creating 5 pages with session decleratiion , with (5) pages] as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First [main page] => Session Defining & Sessions Variables decleration ' . '</li>' .  
    '<li>' . 'Second [inner page] => Sessoins Variabes processing ' . '</li>' . 
    '<li>' . ' Third [inner page] => Sessoins Variabes processing ' . '</li>' .     
    '<li>' . ' Fourth [inner page] => Sessoins Variabes processing + Changing one of the Session Variable ' . '</li>' .     
    '<li>' . ' Fifth [inner page] => Sessoins Variabes processing +  Printing all Defined Session variable with latest update ' . '</li>' .     
    '</ul>';
    
    // ============================================================================        
    // ============================================================================    
    
    // (*) => First Example =>  Creating 5 pages with session decleratiion , with (5) pages in overall :
        $ha1 = 'Creating 5 pages with session decleratiion , with (5) pages in overall + Modifying in the page 4 + with overall printing Session variables :  as following : ' . "<br>" ; 

        // Declaring the main Session :
            session_start();
        
        // Declaring  Session Variables  :
            $_SESSION['username'] = "Shadi";
            $_SESSION['password'] = "01121";
            $_SESSION['favfood'] = "Pizza";


        //  User Welcome to the current page  :            
            echo 'Hello ' . $_SESSION['username'] . 'Weclome to the web application : [Session] => {Main Page}'  . "<br>" ;                                    
        
            echo '<h2> Click on the link below to go the Room 2 </h2>' . "<br>" ;

            echo 'Your Over all Session variables as following :' . '<br>' ; 

            
        // Printing all Session Varialbes :  
            echo '<pre>' ; 
            print_r($_SESSION);
            echo '</pre>' ; 
    
        //  Link to the Connected Inner page Number 2 :                 
            echo '<a href="page2.php"> Room 2 </a>' . "<br>" ;
        
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
            
            <!-- (*) => First Example =>  Creating 5 pages with session decleratiion , with (5) pages in overall   : -->
                        
                    <header>
                        First Example =>  Creating 5 pages with session decleratiion , with (5) pages in overall  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            // Declaring the main Session :
                                // session_start();
                                // $_SESSION['username'];
                                // $_SESSION['password'];
                    
                                
                            //  User Welcome to the current page  :            
                                echo 'Hello ' . $_SESSION['username'] . 'Weclome to the web application : [Session] => {Main Page}'  . "<br>" ;                                    
                            
                                echo '<h2> Click on the link below to go the Room 2 </h2>' . "<br>" ;

                                echo 'Your Over all Session variables as following :' . '<br>' ; 
                                
                            // Printing all Session Varialbes :  
                                echo '<pre>' ; 
                                print_r($_SESSION);
                                echo '</pre>' ; 
                        
                            //  Link to the Connected Inner page Number 2 :                 
                                echo '<a href="page2.php"> Room 2 </a>' . "<br>" ;
                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 