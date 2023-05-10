 <!--  42 PHP 5 - Array Methods - Array Fill    --> 
<?php
    $lessonName  ='Array Methods - Array Fill';
    $title = '42 PHP5 - ' . $lessonName;
    $css = '42 PHP 5 - Array Methods - Array Fill.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
    
    /*    
            $indArr = array("html", "html5", "css", "js", "css3", "php");
            $indArr1 = array("html", "html5", "css", "js", "css3", "php");        

            $assoArr = array(
                "html"  => "10%",
                    "css"   => "20%",
                    "js"    => "30%",
                    "php"   => "40%",            
            );
                
            
            $assoArr1 = array(
                "html"  => "10%",
                "css"   => "20%",
                "js"    => "30%",
                "php"   => "40%",            
            );
                
             $assoArr1 = array("html", "css", "js", "php");
        


             $mulArrInd = array(
                 array("HTML4", "HTML5", "HTMLX"),
                 array("CSS1", "CSS2", "CSS3"),
                 array("JS", "JS DOM", "JS BOM")
             );
                    

             $mulArrAsso = array(
                 "first"     => array("HTML4", "HTML5", "HTMLX"),
                 "second"    => array("CSS1", "CSS2", "CSS3"),
                 "third"     => array("JS", "JS DOM", "JS BOM"),
             );
        */
    // =================================================================================
    
    // (*) => First Example => Filling Indexed Array by [solo value] => [array_fill(ArrayName, "value")] => :
                            
        // (a) => Solo Fill with [positive index] :
                                    
            $ha1 = "Solo Fill with [positive index] as following: "; 
                
                // $soloArrP = array_fill(1 , 5 , "value of element with positive index");
                // echo "<pre>";
                // print_r($soloArrP);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
        // ----------------------------------------                                        
        
        // (b) => Solo Fill with [negative index] :
            $ha2 = "Solo Fill with [positive index] as following: ";                
                
                // $soloArrN = array_fill(-5 , 5 , "value of element with negative index");
                // echo "<pre>";
                // print_r($soloArrN);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";                
        // ----------------------------------------
    // ==================================================================================        
        
    // (*) => Second Example => Filling Multidimensional-Indexed Array by [Array values] => [array_fill(ArrayName, array("","","") )] => :
                                                                        
            $hb = "Multiple Fill of [Multidimensional-Indexed Array] by [Array values] as following: "; 
                // $multArr1 = array_fill(1 , 5 , array("Shadi", "Sayed", "Mohammed"));
                // echo "<pre>";
                // print_r($multArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";            
    // ==================================================================================        
        
    // (*) => Third Example => Filling Multidimensional-Indexed Array by [Array Filling Mthod] => [array_fill(ArrayName, array_fill() )] => :
                                                                        
            $hc = "Multiple Fill of [Multidimensional-Indexed Array] by [Array Filling Mthod] as following: "; 
                // $multArr2 = array_fill(1 , 5 , array_fill(3 , 5 , "shadi" ));
                // echo "<pre>";
                // print_r($multArr2);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";            
    // ==================================================================================                
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
                            
            <!-- (*) => First Example => Filling Indexed Array by [solo value] => [array_fill(ArrayName, "value")] => : -->
                <!-- // (a) => Solo Fill with [positive index] : -->

                        <header>                                
                            (*) => First Example => Filling Indexed Array by [solo value] => [array_fill(ArrayName, "value")] =>   <br>
                                <span class="one"></span>  (a) => Solo Fill with [positive index] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                                <?php 
                                    $soloArrP = array_fill(1 , 5 , "value of element with [positive index]");
                                    echo "<pre>";
                                    print_r($soloArrP);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                      
                <!-- // (b) => Solo Fill with [negative index] : -->

                        <header>                                                        
                            (*) => First Example => Filling Indexed Array by [solo value] => [array_fill(ArrayName, "value")] => <br>
                            <span class="one"></span> (b) => Solo Fill with [negative index] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                            
                                <?php 
                                    $soloArrN = array_fill(-5 , 5 , "value of element with negative index");
                                    echo "<pre>";
                                    print_r($soloArrN);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                
                                ?>                                                         
                        </div>                
                        <br> <br> <br> <hr>
                                                                                      
                
                <!-- ---------------------------------------------------------- -->                                            
                <!-- ---------------------------------------------------------- -->                            
            <!-- ================================================================================= -->

            <!-- // (*) => Second Example => Filling Multidimensional-Indexed Array by [Array values] => [array_fill(ArrayName, array("","","") )] => -->            

                        <header>                                
                            Second Example => Filling Multidimensional-Indexed Array by [Array values] => [array_fill(ArrayName, array("","","") )] => : <br>                            
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb ?>  </h1>                              

                                <?php 
                                    $multArr1 = array_fill(1 , 5 , array("Shadi", "Sayed", "Mohammed"));
                                    echo "<pre>";
                                    print_r($multArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";            
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                                    
            <!-- ============================================================================= -->
                                  
            
            <!-- // (*) => Third Example => Filling Multidimensional-Indexed Array by [Array Filling Mthod] => [array_fill(ArrayName, array_fill() )]  => -->

                        <header>                                
                            Third Example => Filling Multidimensional-Indexed Array by [Array Filling Mthod] => [array_fill(ArrayName, array_fill() )] => : <br>
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hc ?>  </h1>

                                <?php 
                                    $multArr2 = array_fill(1 , 5 , array_fill(3 , 5 , "shadi" ));
                                    echo "<pre>";
                                    print_r($multArr2);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                                                                                
                                ?>
                        </div>                
                        <br> <br> <br> <hr>                                    
            <!-- ============================================================================= -->

            <!-- ---------------------------------------------------------- -->                            
            <!-- ---------------------------------------------------------- -->                            
                                                
            </section>
                                                                    
         </body>
</html>             