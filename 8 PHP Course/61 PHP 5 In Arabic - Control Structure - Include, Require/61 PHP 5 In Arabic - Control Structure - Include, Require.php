<!--  61 PHP 5 In Arabic - Control Structure - Include, Require  --> 
<?php
    include "global.php";
    
    require "globalReq.php";
    
    include_once "global.php";
    
    require_once "globalReq.php";

    $lessonName  ='Control Structure - Include, Require';
    $title = '61 PHP5 - ' . $lessonName;
    $css = '61 PHP 5 In Arabic - Control Structure - Include, Require.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        // $str = "I Love PHP So Much Becase It Is Famous And Cool That is why PHP is the Best" ; 
        // $str1 = "Shadi" ; 
        // $str2 = "Shadi 1" ; 
        
    // =================================================================================    
 
    // (*) => First Example => Controling Funtions  -  {include "The file name" } :
    
        $ha1 = "The following variables are included from another external file [global.php] : " ; 
        
        // Printing variables values included from external file  :
            // echo $msmInc . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
            // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Second Example => Controling Funtions  -  {include_once "The file name" } :
    
        $ha2 = "The following variables are included for one (inlude once) time from another external file [global.php] : " ; 
        
        // Printing variables values included for one (inlude once) from external file  :
            // echo $msmInc . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
            // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Thrid Example => Controling Funtions  -  {require "The file name" } :
    
        $ha3 = "The following variables are required from another external file [globalReq.php] : " ; 
        
        // Printing variables values required from external file  :
            // echo $msmReq . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
            // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Fourth Example => Controling Funtions  -  {required_once "The file name" } :
    
        $ha4 = "The following variables are required for one (required once) time from another external file [globalReq.php] : " ; 
        
        // // Printing variables values included for one (required once) from external file  :
        //     echo $msmReq . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
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
            
            <!-- (*) => First Example => Controling Funtions  -  {include "The file name" } : --> 

                        <header>                                
                            (*) => First Example => Controling Funtions  -  {include "The file name" } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php

                                // Printing variables values included from external file  :
                                    echo $msmInc . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                          
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => Controling Funtions  -  {include_once "The file name" } : -->                    

                        <header>                                
                            (*) => Second Example => Controling Funtions  -  {include_once "The file name" } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                

                            <?php

                                // Printing variables values included for one (inlude once) from external file  :
                                    echo $msmInc . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Thrid Example => Controling Funtions - {require "The file name" } : -->                    

                        <header>                                
                            (*) => Thrid Example => Controling Funtions  -  {require "The file name" } <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php
                                // Printing variables values required from external file  :
                                    echo $msmReq . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => Fourth Example => Controling Funtions  -  {required_once "The file name" } : -->                    

                        <header>                                
                            (*) => Fourth Example => Controling Funtions  -  {required_once "The file name" } : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                
                            <?php
                                // Printing variables values included for one (required once) from external file  :
                                    echo $msmReq . "<br>" . "<hr>" . $name . "<br>" . $age . "<br>" . $address;        
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>