
<!--  8 PHP Examples In Arabic - Require vs Include && Require_once vs Include_once --> 
<!-- =============================================================== -->

<?php
    $lessonName ='Require vs Include';
    $title = '8 PHP Tutorials - ' . $lessonName;
    $css = '8 PHP Examples In Arabic - Require vs Include.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (4) Application [Include & Require & Include_once & Require_once]  :
        // 1- First Example : [{Including Method} => [include ""] function .
        // 2- Second Example : [{Requiring Method} => [require ""] function .    
        // 3- Third Example : [{Including once Method} => [include_once ""] function .    
        // 4- Fourth Example : [{Requiring once Method} => [require_once ""] function .    
        */    
        
        $main = 'In this lesson will be (4) Application [Include & Require & Include_once & Require_once]   :   as following  : ' . '<br>' . '<ul>' .
         '<li>' . 'First Example : [{Including Method} => [include ""] function ' . '</li>'  .  
         '<li>' . 'Second Example : [{Requiring Method} => [require ""] function ' . '</li>'  .  
         '<li>' . 'Third Example : [{Including once Method} => [include_once ""] function ' . '</li>'  .  
         '<li>' . 'Fourth Example : [{Requiring once Method} => [require_once ""] function ' . '</li>'  .  
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example : [{Including Method} => [include ""] function  for (1) Files : 
        $ha1 = 'First Example : [{Including Method} => [include ""] function for (1) File : as following : ' . "<br>" ;             
        
        // // Including => a php file [test.php] by using [Include ''] :
        //     include 'test.php';
        
        // // Printing a variable [That defined in the included File {test.php}] :
        //     echo $myVar1;

        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                       
            
    // (*)=> Second Example : [{Requiring Method} => [require ""] function  for (1) Files :
        $ha2 = 'Second Example : [{Requiring Method} => [require ""] function for (1) File : as following : ' . "<br>" ;
        
        // // Requiring => a Format file [format.css] by using [require ''] :
        //     require 'format.css';

        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                                                
    // (*)=> Third Example : [{Including once Method} => [include_once ""] function for (2) Files :
        $ha3 = 'Third Example : [{Including once Method} => [include_once ""] function for (2) Files : as following : ' . "<br>" ; 
        
        // // Including once => PHP file [test.php] by using [include_once ''] => {Pre-Included File (by main include Method) in the same page} :
        //     include_once 'test.php';
            
        // // Printing a variable [That defined in the included File {test.php}] :
        //     echo $myVar1;
        
        // // Including once => PHP file [test2.php] by using [include_once ''] => {New Included File in the page} :
        //     include_once 'test2.php';
        
        // // Printing a variable [That defined in the included File {test2.php}] :
        //     echo $myVar2;

        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                
    // =================================================================================                                                                                
    // =================================================================================                                
    // (*)=> Fourth Example : [{Requiring once Method} => [require_once ""] function for (2) Files :
        $ha4 = 'Fourth Example : [{Requiring once Method} => [require_once ""] function for (2) Files : as following : ' . "<br>" ; 
        
        // // Requiring  once =>  Format file [format.css] by using [require_once ''] => {Pre-Required File (by main require Method) in the same page} :
        //     require_once 'format.css';
        
        // // Requiring  once =>  Format file [format2.css] by using [require_once ''] => {New Included File in the page} :
        //     require_once 'format2.css';

        //     echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                                         
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
                            // Including => a php file [test.php] by using [Include ''] :
                                include 'test.php';
                                echo $myVar1;

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                <!-- (*) => Second Example : [{Requiring Method} => [require ""] function for (1) Files: -->

                    <header>
                        Second Example : [{Requiring Method} => [require ""] function for (1) Files : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // Requiring => a Format file [format.css] by using [require ''] :
                                require 'format.css';

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
                <!-- (*) => Third Example : [{Including once Method} => [include_once ""] function for (2) Files : -->

                    <header>
                        Third Example : [{Including once Method} => [include_once ""] function for (2) Files : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // Including once => PHP file [test.php] by using [include_once ''] => {Pre-Included File in the same page} :
                                include_once 'test.php';
                                echo $myVar1;
                            
                            // Including once => PHP file [test2.php] by using [include_once ''] => {New Included File in the page} :
                                include_once 'test2.php';
                                echo $myVar2;

                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
                <!-- (*) => Fourth Example : [{Requiring once Method} => [require_once ""] function for (2) Files  : -->

                    <header>
                        Fourth Example : [{Requiring once Method} => [require_once ""] function for (2) Files  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4; ?>   </h1>  

                        <?php                                                                                               
                                                                
                            // Requiring  once =>  Format file [format.css] by using [require_once ''] => {Pre-Required File in the same page}:
                                require_once 'format.css';
                            
                            // Requiring  once =>  Format file [format2.css] by using [require_once ''] => {New Included File in the page}:
                                require_once 'format2.css';
                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
             <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 