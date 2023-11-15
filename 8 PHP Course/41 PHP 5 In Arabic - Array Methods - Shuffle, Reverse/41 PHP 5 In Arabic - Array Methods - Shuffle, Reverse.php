 <!--  41 PHP 5 In Arabic - Array Methods - Shuffle, Reverse    --> 
<?php
    $lessonName  ='Array Methods - Shuffle, Reverse';
    $title = '41 PHP5 - ' . $lessonName;
    $css = '41 PHP 5 In Arabic - Array Methods - Shuffle, Reverse.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        $indArr = array("html", "html5", "css", "js", "css3", "php");
        $indArr1 = array("html", "html5", "css", "js", "css3", "php");        
    
    
    /*
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
    
    // (*) => First Example => Reversing Indexed Array's [array_reverse(ArrayName, Preserve)] => :
                            
        // (a) => Default Reversing for Indexed Array => [array_reverse(ArrayName)] :
                                    
                $ha11 = "The main [Indexed Array] before Default reversing as following: "; 
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $ha12 = "The [Indexed Array] After default Reversing Items's values by {array_reverse(ArrayName)} as following: ";
                // $reversed = array_reverse($indArr);
                // echo "<pre>";
                // print_r($reversed);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------
        
        // (b) => Advanced Reversing for Indexed Array => [array_reverse(ArrayName, preserve)] :
                $ha21 = "The main [Indexed Array] before Advanced reversing as following: ";
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $ha22 = "The [Indexed Array] After Advanced Reversing Items's values WITHOUT preserving by {array_reverse(ArrayName, false)} as following:";
                // $reversed1 = array_reverse($indArr, false);                
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
                
                $ha23 = "The [Indexed Array] After Advanced Reversing Items's values WITH preserving by {array_reverse(ArrayName, true)} as following: ";
                // $reversed2 = array_reverse($indArr, true);                
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                                            
    // ==================================================================================        
        
    // (*) => Second Example => Shuffling Indexed Array's [shuffle(ArrayName)] => :
                            
        // (a) => Default Shuffling for Indexed Array => [Shuffle(ArrayName)] :
                                    
                $hb11 = "The main [Indexed Array] before Default Shuffling as following: "; 
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hb12 = "The [Indexed Array] After default Shuffling Items's values by {Shuffle(ArrayName)} as following: ";
                // Shuffle($indArr1);
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
        
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
                
            
            <!-- (*) => First Example => Reversing Indexed Array's values [array_reverse(ArrayName, Preserve)] => : -->
                <!-- // (a) => [Default Reversing] for Indexed Array => [array_reverse(ArrayName)] : -->

                        <header>                                
                            (*) =>  First Example => Reversing Indexed Array's values [array_reverse(ArrayName, Preserve)] =>   <br>
                                <span class="one"></span>  (a) => [Default Reversing] for Indexed Array => [array_reverse(ArrayName)]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $ha12 ?>  </h1>                              

                                <?php 
                                    $reversed = array_reverse($indArr);
                                    echo "<pre>";
                                    print_r($reversed);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                                      
                <!-- // (b) => [Advanced Reversing] for Indexed Array => [array_reverse(ArrayName, preserve)] :-->

                        <header>                                                        
                            (*) => First Example => Reversing Indexed Array's values [array_reverse(ArrayName, Preserve)] => <br>
                            <span class="one"></span> (b) => Advanced Reversing for Indexed Array => [array_reverse(ArrayName, preserve)] : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $ha22 ?>  </h1>  
                            
                                <?php 
                                    
                                    $reversed1 = array_reverse($indArr, false);                
                                    echo "<pre>";
                                    print_r($reversed1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $ha23 ?>  </h1>  
                            
                                <?php 
                                    $reversed2 = array_reverse($indArr, true);                
                                    echo "<pre>";
                                    print_r($reversed2);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                                                                      
                
                <!-- ---------------------------------------------------------- -->                                            
                <!-- ---------------------------------------------------------- -->                            

            <!-- // (*) => Second Example => Shuffling Indexed Array's [shuffle(ArrayName)] => -->
                <!-- // (a) => Default Shuffling for Indexed Array => [Shuffle(ArrayName)]  -->

                        <header>                                
                            (*) => Second Example => Shuffling Indexed Array's [shuffle(ArrayName)] => : <br>
                            <span class="one"></span>  (a) => Default Shuffling for Indexed Array => [Shuffle(ArrayName)]   : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $hb12 ?>  </h1>                              

                                <?php 
                                    // $shuffled = shuffle($indArr);
                                    Shuffle($indArr1);
                                    echo "<pre>";
                                    print_r($indArr1);
                                    // print_r($shuffled);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                                  
            <!-- ---------------------------------------------------------- -->                            
            <!-- ---------------------------------------------------------- -->                            
                                                
            </section>
                                                                    
         </body>
</html>             