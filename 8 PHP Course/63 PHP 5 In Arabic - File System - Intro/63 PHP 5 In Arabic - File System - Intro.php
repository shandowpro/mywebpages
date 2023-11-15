<!--  63 PHP 5 In Arabic - File System - Intro  --> 
<?php
    // include "global.php";
    
    // require "globalReq.php";
    
    // include_once "global.php";
    
    // require_once "globalReq.php";

    $lessonName  ='Control Structure - File System - Intro';
    $title = '63 PHP5 - ' . $lessonName;
    $css = '63 PHP 5 In Arabic - File System - Intro.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        // $str = "I Love PHP So Much Becase It Is Famous And Cool That is why PHP is the Best" ; 
        // $str1 = "Shadi" ; 
        // $str2 = "Shadi 1" ; 
        $brower1 = "Google Chrome" ; 
        $brower2 = "Opera" ; 
        
    // =================================================================================    
 
    // (*) => First Example => Controling Funtions  -  [switch(){}] => {one case for one condition} :
    
        $ha1 = "The following Switch case synatx to detect the current browser: {one case for one condition} " ; 
        
        // // Printing The Detected Browser  :
        //     switch ($brower1) {
        //         case "Google Chrome" :
        //             echo "Your Browser is Google Chrome";
        //         break;
                
        //         case "Opera" :
        //             echo "Your Browser is Opera";
        //         break;
               
        //         case "Firefox" :
        //             echo "Your Browser is Firefox";
        //         break;
               
        //         case "Edge" :
        //             echo "Your Browser is Microsoft";
        //         break;
                    
        //         default : 
        //             echo "Your Browser is Non of previous default browsers";                
        //     }    
                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        
    
    // (*) => Second Example => Controling Funtions  -  [switch(){}] => {Multiple cases for the same condition} :
    
        $ha2 = "The following Switch case synatx to detect the current browser: {Multiple cases for the same condition}" ; 
        
        // // Printing The Detected Browser  :
        //     switch ($brower) {
        //         case "Google Chrome" :
        //         case "Google" :
        //         case "Chromuim" :
        //             echo "Your Browser is Google Chrome";
        //         break;
                
        //         case "Firefox" :
        //             echo "Your Browser is Firefox";
        //         break;
               
        //         case "Opera" :
        //             echo "Your Browser is Opera";
        //         break;
               
        //         case "Edge" :
        //         case "Microsoft" :
        //             echo "Your Browser is Microsoft";
        //         break;
                
        //         default : 
        //             echo "Your Browser is Non of previous default browsers";                
        //     }    
                        
        //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                        

    //   ====================================================================================        
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
        
        <body class='body' style="background-color: gray">
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => Controling Funtions  -  [switch(){}] => {one case for one condition} : --> 

                            
                        <header>
                             (*) => First Example => Controling Funtions  -  [switch(){}] => {one case for one condition}  : <br> 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                                // Printing special Result according The Detected Browser variable value :
                                    switch ($brower1) {
                                        case "Google Chrome" :
                                            echo "Your Browser is Google Chrome";
                                        break;
                                        
                                        case "Opera" :
                                            echo "Your Browser is Opera";
                                        break;
                                    
                                        case "Firefox" :
                                            echo "Your Browser is Firefox";
                                        break;
                                    
                                        case "Edge" :
                                            echo "Your Browser is Microsoft";
                                        break;
                                            
                                        default : 
                                            echo "Your Browser is Non of previous default browsers";                
                                    }    
                                                
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
             <!-- (*) => Second Example => Controling Funtions  -  [switch(){}] => {Multiple cases for the same condition} : -->

                        <header>                                
                            (*) => // (*) => Second Example => Controling Funtions  -  [switch(){}] => {Multiple cases for the same condition : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                

                            <?php

                                // Printing special Result according The Detected Browser variable value  :
                                    switch ($brower2) {
                                        case "Google Chrome" :
                                        case "Google" :
                                        case "Chromuim" :
                                            echo "Your Browser is Google Chrome";
                                        break;
                                        
                                        case "Firefox" :
                                            echo "Your Browser is Firefox";
                                        break;
                                    
                                        case "Opera" :
                                            echo "Your Browser is Opera";
                                        break;
                                    
                                        case "Edge" :
                                        case "Microsoft" :
                                            echo "Your Browser is Microsoft";
                                        break;
                                        
                                        default : 
                                            echo "Your Browser is Non of previous default browsers";                
                                    }    
                                                
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
                <!-- ---------------------------------------------------------- -->                
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>