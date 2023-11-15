<!--  4 Learn Object Oriented PHP - Class and Object Advanced Examples --> 
<!-- =============================================================== -->


<?php
    
    $lessonName ='Class and Object Advanced Examples';
    $title = '4 PHP5 - ' . $lessonName;
    $css = '4 Learn Object Oriented PHP - Class and Object Advanced Examples.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (2) Applications [Practical Exmpales of creating new class and objects] :
        // 1- First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump]
        // 2- Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump]
    */    
        
    
    $main =  'In this lesson will be (2) Applications [Practical Exmpales of creating new class and objects] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump]' . '</li>' . 
    '<li>' . 'Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump]' . '</li>' . 
    '</ul>';            
    // ============================================================================    

    // (*)=>  First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump] :
        $ha1 = 'First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump] : as following : ' . "<br>" ; 

        // // Definging and Creating new Class [AppleDevice] : 
        //     class AppleDevice {                
        //     }
            
        // // Definging and Creating new Object [iphone6plus] => from the class {AppleDevice} : 
        //     $iphone6plus = new AppleDevice(); 
            
        // // Printing the the var Dump Object[iphone6plus] created from the class [AppleDevice] : 
        //     echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($iphone6plus);
        //     echo '</per>'. '<br>' . '<br>';            
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
            
    // (*) => Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump] :
        $ha2 = 'Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump] : as following : ' . "<br>" ; 
        
        // // Definging and Creating new Class [blog] : 
        //     class blog {                
        //     }
            
        // // Definging and Creating new First Object [newPost] => from class {blog} : 
        //     $newPost = new blog();  
        
        // // Definging and Creating new Second Object [newArtic] => from class {blog} : 
        //     $newArtic = new blog();  
            
        // // Printing the var Dump of First Object of the class [blog]  : 
        //     echo '<h3> First Object of the class [blog] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($newPost);
        //     echo '</per> <br> <hr> ' ;            

        // // Printing the var Dump of Second Object of the class [blog]  : 
        //     echo '<h3> Second Object of the class [blog] as following : </h3> <br>' ;
        //     echo '<per>';            
        //     var_dump($newArtic);
        //     echo '</per>';            

        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                    
        
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
            
            <!-- (*) => First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump] : -->
                        
                    <header>
                        First Example {Apple Devices} => [Creating new Class {Apple Device} + (1)Object  {iphone6plus} + Printing Object Dump] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>  </h1>  

                        <?php                                                                                               
                            // Definging and Creating new Class [AppleDevice] : 
                                class AppleDevice {                
                                }
                                
                            // Definging and Creating new Object [iphone6plus] => from the class {AppleDevice} : 
                                $iphone6plus = new AppleDevice(); 
                                
                            // Printing the Object[iphone6plus] created from the class [AppleDevice] : 
                                echo '<h3> The Object[iphone6plus] created from the class [AppleDevice] {by var dump} as following : </h3> <br>' ;    
                                echo '<per>';            
                                var_dump($iphone6plus);
                                echo '</per>'. '<br>' . '<br>';            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump] : -->
                        
                    <header>
                        Second Example {Blog System} => [Creating new Class {blog} + (2)Object {newPost} && {newArtic} + Printing Object Dump]  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           

                            // Definging and Creating new Class [blog] : 
                                class blog {                
                                }
                                
                            // Definging and Creating new First Object [newPost] => from class {blog} : 
                                $newPost = new blog();  
                            
                            // Definging and Creating new Second Object [newArtic] => from class {blog} : 
                                $newArtic = new blog();  
                                
                            // Printing thevar Dump of First Object of the class [blog] : 
                                echo '<h3> First Object of the class [blog] {by var dump} as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($newPost);
                                echo '</per> <br> <hr> ' ;            

                            // Printing the var Dump of Second Object of the class [blog]  : 
                                echo '<h3> Second Object of the class [blog] {by var dump} as following : </h3> <br>' ;
                                echo '<per>';            
                                var_dump($newArtic);
                                echo '</per>';            

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                    
                        ?>
        
            </section>
                                                                    
        </body>
    </html> 
