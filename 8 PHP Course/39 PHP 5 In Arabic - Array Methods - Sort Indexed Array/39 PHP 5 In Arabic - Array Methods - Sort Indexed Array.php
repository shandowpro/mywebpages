 <!--  39 PHP 5 In Arabic - Array Methods - Sort Indexed Array    --> 
<?php
    $lessonName  ='Array Methods - Sort Indexed Array';
    $title = '39 PHP5 - ' . $lessonName;
    $css = '39 PHP 5 In Arabic - Array Methods - Sort Indexed Array.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :

        $indArr = array("html", "30" , "html5", 10 , "css", 15 , "js", 20 , "css3" , "php");
        $indArr1 = array("html", "30" , "html5", 10 , "css", 15 , "js", 20 , "css3" , "php");
    
        /*
             $assoArr = array(
                 "html"  => "10%",
                 "css"   => "20%",
                 "js"    => "30%",
                 "php"   => "40%",            
             );
            
             $indArr1 = array("html", "css", "js", "php");
        
             $assoArr1 = array(
                 "html"  => "10%",
                 "css"   => "20%",
                 "js"    => "30%",
                 "php"   => "40%",            
             );


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
        
    // (*) => First Example => {sort();} in => {Indexed Array} :
                            
        // (a) => Sorting Elements in the [Indexed array] default alphabatically by using => {sort();} :
                                    
                $ha11 = "The main [Indexed Array] before Default sorting as following: "; 
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $ha12 = "The [Indexed Array] After default alphabatically sorting Items by {sort(arrayName);} as following: ";
                // sort($indArr);
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------
        
        // (b) => Advanced sorting Items from  the [Indexed array] advanced alphabatically by using => {sort(arrayName, Sort Type);} :
                $ha21 = "The main [Indexed Array] before Advanced sorting Items as following: ";
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $ha22 = "The [Indexed Array] After Advanced REGULAR sorting items by {sort(arrayName, SORT-REGULAR);} as following: ";
                // sort($indArr, SORT_REGULAR);                
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
                
                $ha23 = "The [Indexed Array] After Advanced STRING sorting items by {sort(arrayName, SORT-STRING);} as following: ";
                // sort($indArr, SORT-STRING);                
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
                
        
    // ==================================================================================        
        
    // (*) =>  Second Example => {rsort();} in => {Indexed Array} :
                            
        // (a) => Sorting Elements Reversely in the [Indexed array] by default alphabatically sorting by using => {sort();} :
                                    
                $hb11 = "The main [Indexed Array] Before Reversely default sorting Items as following: "; 
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hb12 = "The [Indexed Array] After sorting Reversely items by {rsort();} as following: ";
                // rsort($indArr1);                
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
        
        // (b) => sorting Items Reversely in the [Indexed array] by Advanced reverse default by using => {rsort();} :
                $hb21 = "The main [Indexed Array] before Advanced reverse default sorting as following:  "; 
                // echo "<pre>"
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hb22 = "The [Indexed Array] After Advanced reverse REGULAR sorting items by {rsort(arrayName, SORT-REGULAR);} as following: ";
                // rsort($indArr1, SORT-REGULAR);                
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
            
                $hb23 = "The [Indexed Array] After Advanced reverse STRING sorting items by {rsort(arrayName, SORT-STRING);} as following: ";
                // rsort($indArr1, SORT-STRING);                
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
                header {font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;}
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
                    <!-- // (*) => First Example => {sort();} in => {Indexed Array} :                            
                            // (a) => Sorting Elements in the [Indexed array] default alphabatically by using => {sort();} : -->

                        <header>                                
                            (*) =>  First Example => {sort();} in => {Indexed Array} : <br>
                                <span class="one"></span>  (a) => Sorting Elements in the [Indexed array] default alphabatically by using => {sort();} :
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
                                    sort($indArr);
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                 <!-- ---------------------------------------------------------- -->
                      
                <!-- // (*) => First Example => {sort();} in => {Indexed Array} :                            
                    (b) => Advanced sorting Items from the [Indexed array] advanced alphabatically by using => {sort(arrayName, Sort Type);} : -->

                        <header>                                                        
                            (*) =>  First Example => {sort();} in => {Indexed Array} : <br>
                            <span class="one"></span> (b) => Advanced sorting Items from  the [Indexed array] advanced alphabatically by using => {sort(arrayName, Sort Type);} : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $ha22 ?>  </h1>  
                            
                                <?php 
                                    sort($indArr1, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $ha23 ?>  </h1>  
                            
                                <?php 
                                    sort($indArr1, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                                                                      
                
                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            

                 <!-- (*) =>  Second Example => {rsort();} in => {Indexed Array} :                            
                            (a) => Sorting Elements Reversely in the [Indexed array] by default alphabatically sorting by using => {sort();} : -->

                        <header>                                
                            (*) =>  Second Example => {rsort();} in => {Indexed Array} : <br>
                            <span class="one"></span>  (a) => Sorting Elements Reversely in the [Indexed array] by default alphabatically sorting by using => {sort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $hb12 ?>  </h1>                              

                                <?php 
                                    rsort($indArr);
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!--// (*) =>  Second Example => {rsort();} in => {Indexed Array} :
                        // (b) => sorting Items Reversely in the [Indexed array] by Advanced reverse default by using => {rsort();} : -->

                        <header>                                                        
                            (*) =>  Second Example => {rsort();} in => {Indexed Array} : <br>
                            <span class="one"></span>  (b) => Sorting Items Reversely in the [Indexed array] by Advanced reverse default by using => {rsort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $hb22 ?>  </h1>  
                            
                                <?php 
                                    rsort($indArr1, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $hb23 ?>  </h1>  
                            
                                <?php 
                                    rsort($indArr1, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                  
                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            
            </section>
                                                                    
         </body>
</html>             