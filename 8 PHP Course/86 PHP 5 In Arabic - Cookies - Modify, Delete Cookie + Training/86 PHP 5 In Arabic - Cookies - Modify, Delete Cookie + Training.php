<!--  86 PHP 5 In Arabic - Cookies - Modify, Delete Cookie + Training --> 

<!-- This Form is being to the current PHP file {by post method }   -->
    <form action ="<?php echo $_SERVER['PHP_SELF']?>" method ="POST">
        <input type="color" name="color" /> 
        <input type="submit" value="check" /> 
    </form>
<!-- =============================================================== -->

<?php
    $lessonName  ='Cookies - Modify, Delete Cookies ';
    $title = '86 PHP5 - ' . $lessonName;
    $css = '86 PHP 5 In Arabic - Cookies - Modify, Delete Cookie + Training.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    

    // ============================================================================
    // In this lesson will be (3) Application :
        // 1- Modifying Cookies File with new Settings => Simple Example + Printing .
        // 2- Modifying Cookies File with new Settings => Advanced Example + Printing .
        // 3- Deleting Cookies File with cusotmized settings => Simple Example + Printing.
    
    $main =  'In this lesson will be (3) Application : ' . '<br>' . '<ul>' .
    '<li>' . '1- Modifying Cookies File with new Settings => Simple Example + Printing' . '</li>' .  
    '<li>' . '2- Modifying Cookies File with new Settings => Advanced Example + Printing ' . '</li>' . 
    '<li>' . '3- Deleting Cookies File with cusotmized settings => Simple Example + Printing' . '</li>' .     
    '</ul>';
    
    // ============================================================================
    // // (*) Variable Definitions & Decleration :                          
    //         $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================                                
    // ============================================================================    
    
    // (*) => First Example =>  Modifying Cookies File with new Settings => Simple Example + Printing Cookie file Value :
        $ha1 = 'Modifying Cookies File with new Settings => Simple Example + Printing Cookie file Value :  as following : ' . "<br>" ; 
            
        // // Setting Main cookie file  :
        //     setcookie("DefaultSetting" , "Shadi Cookies Value by dafault" , time() + 3600, "/" , "localhost");
        
        // // Modifying the Pre-set cookie file [Simple modification] :
        //     setcookie("DefaultSetting" , "New Value of cookie file Modified " , time() + 86400 , "/" , "localhost");
        
        // // Printing the all Cookies basic information [Cookie Name, Cooke Contents / Value] After Modiying  : 
        //     echo "<pre>";
        //     print_r($_COOKIE);
        //     echo "</pre>";
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
    // =================================================================================                            
    
    // (*) => Second Example => Modifying Cookies File with new Settings => Advanced Example + Printing :
        
        $ha2 = "Second Example => Modifying Cookies File with new Settings => Advanced Example + Printing :  as following : " . "<br>"  ;
        
        // Main [Background] Cookie File [With empty value]:
            // setcookie("Background" , "Main Value of Background Cookie File" , time() + (3600 * 24) , "/" , "localhost"); 


        // Setting main Variable [mainColor] : 
            $mainColor = '#FFF' ; 
            
        // Checking if the posting method is {POST} +  Setting the [mainColor] variable by the picked color from the Form : 
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                                
                // Assinging the mainColor Variable with the picked up value of the {Form} sent by [POST] Method :
                    $mainColor = $_POST['color'] ; 
                
                // Setting New Cookies File by value of variable [maincolor] {Modifying if the Request method is post} : 
                    setcookie("Background" , $mainColor , time() + (3600 * 24) , "/" , "localhost");
                
                // Assinging the new variable of {body} color with Pre-Set Cookies file value || Assigning the new variable of {body} color with picked up color value from the [Form] :
                    $body = $_COOKIE['Background'];
                    $body = $_POST['color'] ;
            
            }
                        
            // Testing if the Cookie file [Background] is really existed :  
                if (isset($_COOKIE['Background'])) {                    
                    
                    // Printing the [MainColor] Test variable for testing {if the cookioe file [mainColor] is really existed} :
                        echo 'Printing the [MainColor] Test variable for testing {if the cookioe file [mainColor] is really existed}' . "<br>" ;
                        echo $mainColor . "<br>"; 
                        echo $body . "<br>";
                }
            
        // Printing over all browser Cookies basic information [Cookie Name, Cookie Contents / Value] : 
            echo "All current Cookies Files are as Following :" . "<br>";
            echo "<pre>";
            print_r($_COOKIE);
            echo "</pre>";
        
            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                                            
    // ====================================================================================            
    
    // (*) => Third Example =>  Deleting Cookies File with cusotmized settings => Simple Example + Printing  :

        $ha3 = "Third Example => Deleting Cookies File with cusotmized settings => Simple Example + Printing :  as following : " . "<br>"  ;
                
        // // Printing the main defined Cookie File [Shortcut method] : 
        //     echo 'The main certain defined cookie file [DefaultSetting] value as following : ' . "<br>" ;

        //     echo "<pre>";
        //     print_r($_COOKIE['DefaultSetting']) ;
        //     echo "</pre>";
            
        // // Unsetting the old cookie file : 
        //     setcookie("DefaultSetting" , "" , time() - 3600, "/" , "localhost");
        
        // // Printing the Cookies basic information [Cookie Name, Cookie Contents / Value] : 
        
        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                                                        
    // ====================================================================================        
          
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
            
            <!-- (*) => First Example =>  Modifying Cookies File with new Settings => Simple Example + Printing Cookie file Value   : -->
                        
                    <header>
                        First Example =>  Modifying Cookies File with new Settings => Simple Example + Printing Cookie file Value  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                        <?php       

                            // Setting Main cookie file  :         
                                setcookie("DefaultSetting" , "Shadi Cookies Value by dafault" , time() + 3600, "/" , "localhost");
                            
                            // Modifying the Pre-set cookie file [Simple modification]:             
                                setcookie("DefaultSetting" , "New Value of cookie file Modified " , time() + 86400 , "/" , "localhost");
                            
                            // Printing the all Cookies basic information [Cookie Name, Cooke Contents / Value] After Modiying  : 
                                echo "<pre>";
                                print_r($_COOKIE);
                                echo "</pre>";
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                                    

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => Modifying Cookies File with new Settings => Advanced Example + Printing : -->                            
                    <header>
                        Second Example => Modifying Cookies File with new Settings => Advanced Example + Printing: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                                                                                
                        <?php                                    

                            // // Setting main Variable [main color]  : 
                            //     $mainColor = '#FFF' ; 
        
                            // // Checking if the posting method is {POST} : 
                            //     if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                                    
                            //         $mainColor = $_POST['color'] ; 
                            //         $body = $_COOKIE['Background'];
                                
                            //         // Setting Cookies value with cusotmized settings  [main color ] {Modifying if the Request method is post}  : 
                            //         setcookie("Background" , $mainColor , time() + (3600 * 24) , "/" , "localhost");
                            //     }
                                
                            //     // printing the main color variable for testing :
                            //         echo $mainColor;
                                    
                            //     if (isset($_COOKIE['Background'])) {
                                        
                            //         // Defining a new variable with Setting Cookies Value ->  {this vVariable will be assingend in body element, and assinged by the cookies File value }: 
                            //             $body = $_COOKIE['Background'];
                            //     }
                    
                                
                            // // Printing over all browser Cookies basic information [Cookie Name, Cookie Contents / Value] : 
                            //     echo "All Cookies Files are as Following :" . "<br>";
                            //     echo "<pre>";
                            //     print_r($_COOKIE);
                            //     echo "</pre>";
                            
                            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
        
            <!-- (*) => Third Example => Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ]  : -->
                        
                    <header>
                        Third Example => Setting Cookies with cusotmized settings2 [Name , value , time() + (86400 * 10){10 Day} , "/" , "localhost" , TRUE , FALSE ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                                                                                
                        <?php                                    
                            // Unsetting/Cancel the old cookie file [DefaultSetting] : 
                                setcookie("DefaultSetting" , "" , time() - 86400 , "/" , "localhost");

                            // Printing the certain defined cookie file: {DefaultSetting} => [Shortcut method] => After Deleting the {DefaultSetting} : 
                                echo 'The main defined cookie file value as following : ' . "<br>" ;                                
                                echo "<pre>";
                                print_r($_COOKIE) ;
                                echo "</pre>";                            
                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                    
            <!-- ================================================================================= -->            
            </section>
                                                                    
        </body>
    </html> 