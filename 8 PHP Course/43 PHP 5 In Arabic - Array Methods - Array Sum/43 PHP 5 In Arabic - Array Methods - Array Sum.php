 <!--  43 PHP 5 - Array Methods - Array Sum    --> 
<?php
    $lessonName  ='Array Methods - Array Sum';
    $title = '43 PHP5 - ' . $lessonName;
    $css = '43 PHP 5 In Arabic - Array Methods - Array Sum.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        
        $indArr = array(10 , 20 , 50 , 1.5 , 100);
    
        $indArr1 = array("html", 10 ,"html5", 50 ,"css", 1.5 , "js", "css3", 100 ,"php");
       
        
        $assoArr = array(
            0   => 10,
            1   => 20,
            2   => 50,
            3   => 1.5,            
            4   => 100,            
        );

        $assoArr1 = array(
            0   => "html",
            1   => 10,
            2   => "html5",
            3   => 50,
            4   => "css",
            5   => 1.5,
            6   => "js",
            7   => "css3",
            8   => 100,
            9   => "php",
        );
                                    
                
        /*    
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
    
    // (*) => First Example => Summition of [Indexed Array]'s elements by [array_sum(arrayName)] :
                            
        // (a) => Summmition of Indexed Array with [All numeric values] :
                                    
            $ha1 = "Summmition of [Indexed Array] with [All numeric values] as following: "; 
                 
                // $sumInd = array_sum($indArr);
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<br>";
            
                // echo $sumInd;                            
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
        // ----------------------------------------                                        
        
        // (b) => Summmition of [Indexed Array] with [Mixed (String && Integer && Float) Values ] :
 
           $ha2 = "Summmition of [Indexed Array] with [Mixed (String && Integer && Float) Values ] as following:  ";                
                
                // $sumInd1 = array_sum($indArr1);
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<br>";
            
                // echo $sumInd1;                            
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
        // ----------------------------------------
    // ==================================================================================        
        
    // (*) => Second Example => Summition of [Associative Array]'s elements's values by [array_sum(arrayName)] => :
            
        // (a) => Summmition of Accociative Array with [All numeric values] :
        
            $hb1 = "Summmition of [Associative Array] with [All numeric values] as following: "; 
                // $sumAsso = array_sum($assoArr);
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<br>";
            
                // echo $sumAsso;                            
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
        // ----------------------------------------
        
        // (b) => Summmition of Associative Array with [Mixed (String && Integer && Float) Values] :
            
            $hb2 = "Summmition of [Associative Array] with [Mixed (String && Integer && Float) Values] as following: "; 
                // $sumAsso1 = array_sum($assoArr1);
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<br>";
            
                // echo $sumAsso1;                            
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
        // ----------------------------------------
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
            
            <!-- (*) => First Example => Summition of [Indexed Array]'s elements by [array_sum(arrayName)] : -->
                <!-- // (a) => Summmition of Indexed Array with [All numeric values] : -->

                        <header>                                
                            (*) => First Example => Summition of [Indexed Array]'s elements by [array_sum(arrayName)]  =>   <br>
                                <span class="one"></span>  (a) => Summmition of Indexed Array with [All numeric values] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                                <?php 
                                    $sumInd = array_sum($indArr);
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<br>";
                                
                                    echo $sumInd;                            
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                      
                <!-- // (b) => Summmition of [Indexed Array] with [Mixed (String && Integer && Float) Values ] : -->

                        <header>                                                        
                            (*) => First Example => Summition of [Indexed Array]'s elements by [array_sum(arrayName)] :  => <br>
                            <span class="one"></span>  (b) => Summmition of [Indexed Array] with [Mixed (String && Integer && Float) Values ] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                            
                                <?php 
                                    $sumInd1 = array_sum($indArr1);
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                
                                    echo $sumInd1;                            
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                                                         
                        </div>                
                        <br> <br> <br> <hr>
                                                                                                    
                <!-- ---------------------------------------------------------- -->                                            
                <!-- ---------------------------------------------------------- -->                            
            <!-- ================================================================================= -->
            
            <!-- // (*) => Second Example => Summition of [Associative Array]'s elements's values by [array_sum(arrayName)] => -->            
                
                <!-- // (a) => Summmition of Accociative Array with [All numeric values] -->
                        <header>                                
                            Second Example => Summition of [Associative Array]'s elements's values by [array_sum(arrayName)] => : <br>
                                <span class="one"></span>  (a) => Summition of Accociative Array with [All numeric values] :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb1 ?>  </h1>                              

                                <?php 
                                    $sumAsso = array_sum($assoArr);
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<br>";
                                
                                    echo $sumAsso;                            
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->                                            
                
                <!-- // (b) => Solo Fill with [positive index] : -->
                        <header>                                
                            Second Example => Filling Multidimensional-Indexed Array by [Array values] => [array_fill(ArrayName, array("","","") )] => : <br>                            
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb2 ?>  </h1> 

                                <?php 
                                    $sumAsso1 = array_sum($assoArr1);
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                
                                    echo $sumAsso1;                            
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->                                                                                                                            
            <!-- ============================================================================= -->

            <!-- ---------------------------------------------------------- -->                            
            <!-- ---------------------------------------------------------- -->                            
                                                
            </section>
                                                                    
         </body>
</html>             