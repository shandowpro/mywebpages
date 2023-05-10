 <!--  44 PHP 5 - Array Methods - Array Rand    --> 
<?php
    $lessonName  ='Array Methods - Array Rand';
    $title = '44 PHP5 - ' . $lessonName;
    $css = '44 PHP 5 In Arabic - Array Methods - Array Rand.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        
        $indArr = array(10 , 20 , 50 , 1.5 , 100);
    
        $indArr1 = array("html", 10 ,"html5", 50 ,"css", 1.5 , "js", "css3", 100 ,"php");
       
                        
        /*    
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
    
    // (*) => First Example => Random array's [Values] of [Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArray[index]]} :
                            
        // (a) => Random of values of [Indexed array ] :
                                    
            $ha = "Random of [values] of [Indexed array ]  as following: "; 
                 
                // $randVal = array_rand($indArr);
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo($indArr[$randVal[0]]);  // printing the first elemnent's value of the random array 
                // echo($indArr[$randVal[1]]);  // printing the second elemnent's value of the random array 
                // echo($indArr[$randVal[2]]);  // printing the third elemnent's value of the random array 
                
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
        // ----------------------------------------
    // ==================================================================================        
        
    // (*) => Second Example => Random array's [keys] of [Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArray]} :
            
        // (a) => Random of Keys of [Indexed array ] :
        
            $hb = "Random of [keys] of [Indexed array ]  as following: "; 

            // $randKey = array_rand($indArr1);

            // echo "<pre>";
            // print_r($indArr1);
            // echo "</pre>" . "<br>" . "<br>";
            
            // print_r($indArr1[$randKey]);  // printing the indexes array of [Random] :

            // // print_r($indArr[$randkey[1]]);
            // // print_r($indArr[$randkey[2]]);
            
            // echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
        // ----------------------------------------
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
            
            <!--     // (*) => First Example => Random array's [Values] of [Main Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArray[index]]} :
            `       // (a) => Random of values of [Indexed array ] :-->

                        <header>                                
                            (*) => First Example => Random array's [Values] of [Main Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArrayName[index]]} => <br>
                                <span class="one"></span>  (a) => [Random array values] extracted from [Main Indexed array ] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha ?>  </h1>  
                                
                                <?php 
                                    $randVal = array_rand($indArr);
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo($indArr[$randVal[0]]) . "<br>";
                                    echo($indArr[$randVal[1]]) . "<br>";
                                    echo($indArr[$randVal[2]]) . "<br>";
                                    
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                                                            
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->
            
            <!--     // (*) => Second Example => Random array's [keys] of [Main Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArray]} :            
                    // (a) => Random of Keys of [Indexed array ] : -->
                            
                        <header>                                
                        (*) => Second Example => Random array's [keys] of [Main Indexed Array]'s elements by {array_rand(arrayName)} && {mainArrayName[randomArray]}  : <br>
                                <span class="one"></span>  (a) => [Random array Keys] extracted from [Main Indexed array ] :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb ?>  </h1>                              

                                <?php 
                                    $randKey = array_rand($indArr1);
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    print_r($randKey);  // printing the indexes array of [Random] :
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->                                                                        
                <!-- ---------------------------------------------------------- -->                                                                                                                            
            <!-- ============================================================================= -->

            <!-- ---------------------------------------------------------- -->                            
            <!-- ---------------------------------------------------------- -->                            
                                                
            </section>
                                                                    
         </body>
</html>             