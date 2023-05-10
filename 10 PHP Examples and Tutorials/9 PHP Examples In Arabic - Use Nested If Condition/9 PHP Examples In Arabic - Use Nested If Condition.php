
<!--  9 PHP Examples In Arabic - Use Nested If Condition --> 
<!-- =============================================================== -->
<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
    <label> Insert your name : </label> 
    <input type="text" name="username" placeholder="Enter your name here ">
    <input type="submit" value="Send">
</form>

<?php
    $lessonName ='Use Nested If Condition';
    $title = '9 PHP Tutorials - ' . $lessonName;
    $css = '9 PHP Examples In Arabic - Use Nested If Condition.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (2) Application [Testing and Filtering by using Nested If condition]  :
        // 1- First Example : [ Testing if the a value is not in a forbidden Array && then testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition original Syntax]  .
        // 2- Second Example : [ Testing if the a value is not in a forbidden Array && then testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax] .
        */    
        
        $main = 'In this lesson will be (1) Application [Testing and Filtering by using Nested If condition]   :   as following  : ' . '<br>' . '<ul>' .
         '<li>' . 'First Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition original Syntax] ' . '</li>'  .          
         '<li>' . 'Second Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax] ' . '</li>'  . 
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition} : [according to the IF condition original Syntax] : 
        $ha1 = 'First Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition} : [according to the IF condition original Syntax] : as following : ' . "<br>" ;

            // // Defining the [inserted username] variable in the form Allowed Array & [Forbidden Array] :
            //     $username = $_POST['username'];
            //     $vip = array('Pro', 'Shindow' , 'Shandow');                
            //     $forbidden = array('admin', 'god' , 'root', '');
            
            //     // Testing if the inserted username is one of the [forbidden list] :
            //     if (in_array($username, $forbidden) ) {
            //         echo '<br> Sorry , your inserted Name is in [Forbidden List] <br>';
                    
            //     } else {
                    
            //         echo '<br> Good , your inserted Name is Accepted! <br>'; 

            //         // Testing if the inserted username is one of the [vip list] :
            //         if (in_array($username, $vip)) {
            //             echo '<br> YEA , your inserted Name is in [vip list] <br>';                        
                    
            //             // Testing if the inserted username is according to the length limit :
            //             if (strlen($username) > 3 ) {
            //                 echo '<br> Marvelous! Your name IS according to the length limit <br>';
            //             } else {
            //                 echo '<br> OH! Your name is NOT according to the length limit <br>';
            //             }                    
            //         } else {
            //             echo '<br> Sorry, your name is NOT in the vip list <br>';
            //         }                                        
            //     }
            
            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                       
    
    // (*)=> Second Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax] : 
        $ha2 = 'Second Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax] : as following : ' . "<br>" ;

            // // Defining the [inserted username] variable in the form Allowed Array & [Forbidden Array] :
            //     $username = $_POST['username'];
            //     $vip = array('Pro', 'Shindow' , 'Shandow');
                
            //     $forbidden = array('admin', 'god' , 'root', '');
            
            //     // Testing if the inserted username is one of the [forbidden list] :
            //     if (in_array($username, $forbidden) ): 

            //         echo '<br> Sorry , your inserted Name is in Forbidden List <br>';
                    
            //     else :
                    
            //         echo '<br> Good , your inserted Name is Accepted! <br>'; 
                    
            //         // Testing if the inserted username is one of the [vip list] :
            //         if (in_array($username, $vip)) :
            //             echo '<br> YEA , your inserted Name is in VIP List <br>';                        
                    
            //             // Testing if the inserted username is according to the length limit :
            //             if (strlen($username) > 3 ) :
            //                 echo '<br> Marvelous! Your name IS according to the length limit <br>';
            //             else :
            //                 echo '<br> OH! Your name is NOT according to the length limit <br>';
            //             endif;                    
            //         else :
            //             echo '<br> Sorry, your name is NOT in the vip list <br>';
            //         endif;                                        
            //     endif;
            
            // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
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
            
                <!-- (*) => First Example : [{Including Method} => [include ""] function for (1) Files : -->

                    <header>
                        First Example : [{Including Method} => [include ""] function for (1) Files: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               
                            // Defining the [inserted username] variable in the form Allowed Array & [Forbidden Array] :
                                $username = $_POST['username'];
                                $vip = array('Pro', 'Shindow' , 'Shandow');                
                                $forbidden = array('admin', 'god' , 'root', '');
                            
                                // Testing if the inserted username is one of the [forbidden list] :
                                if (in_array($username, $forbidden) ) {
                                    echo '<br> Sorry , your inserted Name is in [Forbidden List] <br>';
                                    
                                } else {
                                    
                                    echo '<br> Good , your inserted Name is Accepted! <br>'; 

                                    // Testing if the inserted username is one of the [vip list] :
                                    if (in_array($username, $vip)) {
                                        echo '<br> YEA , your inserted Name is in [vip list] <br>';                        
                                    
                                        // Testing if the inserted username is according to the length limit :
                                        if (strlen($username) > 3 ) {
                                            echo '<br> Marvelous! Your name IS according to the length limit <br>';
                                        } else {
                                            echo '<br> OH! Your name is NOT according to the length limit <br>';
                                        }                    
                                    } else {
                                        echo '<br> Sorry, your name is NOT in the vip list <br>';
                                    }                                        
                                }
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
                <!-- (*) => Second Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax] : -->

                    <header>
                        Second Example : [ Testing if the a value is not in a forbidden Array  && then  testing if it is in a certain Allow array] by using {Nested if condition } : [according to the IF condition Alternative Syntax]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // Defining the [inserted username] variable in the form Allowed Array & [Forbidden Array] :
                                $username = $_POST['username'];
                                $vip = array('Pro', 'Shindow' , 'Shandow');
                                
                                $forbidden = array('admin', 'god' , 'root', '');
                            
                                // Testing if the inserted username is one of the [forbidden list] :
                                if (in_array($username, $forbidden) ): 

                                    echo '<br> Sorry , your inserted Name is in Forbidden List <br>';
                                    
                                else :
                                    
                                    echo '<br> Good , your inserted Name is Accepted! <br>'; 
                                    
                                    // Testing if the inserted username is one of the [vip list] :
                                    if (in_array($username, $vip)) :
                                        echo '<br> YEA , your inserted Name is in VIP List <br>';                        
                                    
                                        // Testing if the inserted username is according to the length limit :
                                        if (strlen($username) > 3 ) :
                                            echo '<br> Marvelous! Your name IS according to the length limit <br>';
                                        else :
                                            echo '<br> OH! Your name is NOT according to the length limit <br>';
                                        endif;                    
                                    else :
                                        echo '<br> Sorry, your name is NOT in the vip list <br>';
                                    endif;                                        
                                endif;
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
             <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 