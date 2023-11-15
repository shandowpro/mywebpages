 <!--  40 PHP 5 In Arabic - Array Methods - Sort Associative Array    --> 
<?php
    $lessonName  ='Array Methods - Sort Associative Array';
    $title = '40 PHP5 - ' . $lessonName;
    $css = '40 PHP 5 In Arabic - Array Methods - Sort Associative Array.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
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

        /*
            // $assoArr = array("html", "30" , "html5", 10 , "css", 15 , "js", 20 , "css3" , "php");
            // $assoArr1 = array("html", "30" , "html5", 10 , "css", 15 , "js", 20 , "css3" , "php");
            
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
    
// [I] : Sorting Associative Array's [Values] : 
    // (*) => First Example => {asort();} in => {Associative Array} :
                            
        // (a) => Sorting Elements in the [Associative array] default alphabatically by using => {asort();} :
                                    
                $hIa11 = "The main [Associative Array] before Default sorting as following: "; 
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIa12 = "The [Associative Array] After default alphabatically sorting Items's values by {asort(arrayName);} as following: ";
                // asort($assoArr);
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------
        
        // (b) => Advanced sorting Items from  the [Associative array] advanced alphabatically by using => {arsort(arrayName, sorting Type);} :
                $hIa21 = "The main [Associative Array] before Advanced sorting Items's values as following: ";
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIa22 = "The [Associative Array] After Advanced REGULAR sorting items's values by {arsort(arrayName, SORT_REGULAR);} as following: ";
                // asort($assoArr, SORT_REGULAR);                
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
                
                $hIa23 = "The [Associative Array] After Advanced STRING sorting items's values by {asort(arrayName, SORT_STRING);} as following: ";
                // asort($assoArr, SORT_STRING);                
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
                
        
    // ==================================================================================        
        
    // (*) =>  Second Example => {arsort()} in => {Associative Array} :
                            
        // (a) => Sorting Elements Reversely in the [Associative array] by default alphabatically sorting by using => {asort();} :
                                    
                $hIb11 = "The main [Associative Array] Before Reversely default sorting Items's values as following: "; 
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIb12 = "The [Associative Array] After sorting Reversely items's values by {rsort();} as following: ";
                // rsort($assoArr1);                
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
        
        // (b) => sorting Items Reversely in the [Associative array] by Advanced reverse default by using => {arsort();} :
                $hIb21 = "The main [Associative Array] before Advanced reverse default sorting as following:  "; 
                // echo "<pre>"
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIb22 = "The [Associative Array] After Advanced reverse REGULAR sorting items's values by {rsort(arrayName, SORT-REGULAR);} as following: ";
                // arsort($assoArr1, SORT-REGULAR);                
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
            
                $hIb23 = "The [Associative Array] After Advanced reverse STRING sorting items's values by {rsort(arrayName, SORT-STRING);} as following: ";
                // arsort($assoArr1, SORT_STRING);                
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
// ==================================================================================    

// [II] : Sorting Associative Array's [Keys] : 
    // (*) => First Example => {ksort();} in => {Associative Array} [keys - Assendingly] :
                            
        // (a) => Sorting Elements's keys in the [Associative array] default alphabatically by using => {ksort();} :
                                    
                $hIIa11 = "The main [Associative Array] before Default sorting as following: "; 
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIIa12 = "The [Associative Array] After default alphabatically sorting Items's keys by {ksort(arrayName);} as following: ";
                // ksort($assoArr);
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------
        
        // (b) => Advanced sorting Items's keys from  the [Associative array] advanced alphabatically by using => {krsort(arrayName, sorting Type);} :
                $hIIa21 = "The main [Associative Array] before Advanced sorting Items as following: ";
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIIa22 = "The [Associative Array] After Advanced REGULAR sorting items's keys by {arsort(arrayName, SORT-REGULAR);} as following: ";
                // ksort($assoArr, SORT_REGULAR);                
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
                
                $hIIa23 = "The [Associative Array] After Advanced STRING sorting items's keys by {asort(arrayName, SORT-STRING);} as following: ";
                // ksort($assoArr, SORT-STRING);                
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
                
        
    // ==================================================================================        
        
    // (*) =>  Second Example => {krsort();} in => {Associative Array} [keys-Decsendingly] :
                            
        // (a) => Sorting Elements's keys Reversely in the [Associative array] by default alphabatically sorting by using => {krsort();} :
                                    
                $hIIb11 = "The main [Associative Array] Before Reversely default sorting Items as following: "; 
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIIb12 = "The [Associative Array] After sorting Reversely items's keys by {krsort();} as following: ";
                // krsort($assoArr1);                
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
        // ---------------------------------------------                        
        
        // (b) => sorting Items Reversely in the [Associative array] by Advanced reverse default by using => {krsort();} :
                $hIIb21 = "The main [Associative Array] before Advanced reverse default sorting as following:  "; 
                // echo "<pre>"
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ----------------------------------------

                $hIIb22 = "The [Associative Array] After Advanced reverse REGULAR sorting items's keys by {krsort(arrayName, SORT-REGULAR);} as following: ";
                // krsort($assoArr1, SORT-REGULAR);                
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>" . "<br>" . "<hr>" . "<br>";
                // ---------------------------------------------                        
            
                $hIIb23 = "The [Associative Array] After Advanced reverse STRING sorting items's keys by {krsort(arrayName, SORT-STRING);} as following: ";
                // krsort($assoArr1, SORT-STRING);                
                // echo "<pre>";
                // print_r($assoArr1);
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
                
            <!-- [I] : Sorting [Values] -->
                <!-- // First Example => {asort()} in => {Associative Array} [Values - Assendingly - Default ] : 
                        // (a) => Default Sorting Elements's values in the [Associative array] default alphabatically by using => {asort();} : -->

                        <header>                                
                            (I) =>  Sorting Associative Array Elements's [Values] :
                        </header> <br>                                    
                        
                        <header>                                
                            (*) =>  First Example => {asort()} in => {Associative Array} => [Values - Assendingly - Default ]:  <br>
                                <span class="one"></span>  (a) => Default Sorting Elements's values in the [Associative array] default alphabatically by using => {asort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIa11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $ha12 ?>  </h1>                              

                                <?php 
                                    asort($assoArr);
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!-- // First Example => {asort()} in => {Associative Array} [Values - Assendingly - Advanced]  : 
                        (b) => Advanced sorting Items's values from  the [Associative array] advanced alphabatically by using => {asort(arrayName, sorting Type);} :-->

                        <header>                                                        
                            (*) =>  First Example => {asort();} in => {Associative Array} => [Values - Assendingly - Advanced]: <br>
                            <span class="one"></span> (b) => Advanced sorting Items's values from  the [Associative array] advanced alphabatically by using => {asort(arrayName, sorting Type);}  : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIa21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $hIa22 ?>  </h1>  
                            
                                <?php 
                                    asort($assoArr, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $hIa23 ?>  </h1>  
                            
                                <?php 
                                    asort($assoArr, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                                                                      
                
                <!-- ---------------------------------------------------------- -->                                            
                <!-- ---------------------------------------------------------- -->                            

                 <!-- // (*) => Second Example => {arsort();} in => {Associative Array} [Values - Dessendingly - Default] : 
                    // (a) => Sorting Elements's values Reversely in the [Associative array] by default alphabatically sorting by using => {arsort()} : -->

                        <header>                                
                            (*) =>  Second Example => {arsort();} in => {Associative Array} => [Values - Dessendingly - Default] :  <br>
                            <span class="one"></span>  (a) => Sorting Elements Reversely in the [Associative array] by default alphabatically sorting by using => {arsort()} : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIb11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $hIb12 ?>  </h1>                              

                                <?php 
                                    arsort($assoArr1);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!--// (*) =>  Second Example => {arsort();} in => {Associative Array} [Values - Dessendingly - Advanced] :
                        // (b) => Sorting Items's values Reversely in the [Associative array] by Advanced reverse default by using => {arsort();} : -->

                        <header>                                                        
                            (*) =>  Second Example => {arsort();} in => {Associative Array} => [Values - Dessendingly - Advanced] : <br>
                            <span class="one"></span> Sorting Items's values Reversely in the [Associative array] by Advanced reverse default by using => {arsort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIb21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>" ;
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $hIb22 ?>  </h1>  
                            
                                <?php 
                                    arsort($assoArr1, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $hIb23 ?>  </h1>  
                            
                                <?php 
                                    arsort($assoArr1, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                  
            <!-- ---------------------------------------------------------- -->                            
            <!-- ---------------------------------------------------------- -->                            
            
            <!-- [II] : Sorting [keys] -->
                <!-- // First Example => {ksort()} in => {Associative Array} [Keys - Assendingly - Default ] : 
                        // (a) => Default Sorting Elements's keys in the [Associative array] default alphabatically by using => {ksort();} : -->

                        <header>                                
                            (I) =>  Sorting Associative Array Elements's [Keys] :
                        </header> <br>                                    
                        
                        <header>                                
                            (*) =>  First Example => {ksort()} in => {Associative Array} => [Keys - Assendingly - Default ]:  <br>
                                <span class="one"></span>  (a) => Default Sorting Elements's keys in the [Associative array] default alphabatically by using => {ksort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIIa11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $hIIa12 ?>  </h1>                              

                                <?php 
                                    ksort($assoArr);
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!-- // First Example => {ksort()} in => {Associative Array} [Keys - Assendingly - Advanced]  : 
                        (b) => Advanced sorting Items's values from  the [Associative array] advanced alphabatically by using => {ksort(arrayName, sorting Type);} :-->

                        <header>                                                        
                            (*) =>  First Example => {ksort();} in => {Associative Array} => [Keys - Assendingly - Advanced]: <br>
                            <span class="one"></span> (b) => Advanced sorting Items's values from  the [Associative array] advanced alphabatically by using => {ksort(arrayName, sorting Type);}  : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIIa21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $hIIa22 ?>  </h1>  
                            
                                <?php 
                                    ksort($assoArr, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $hIIa23 ?>  </h1>  
                            
                                <?php 
                                    ksort($assoArr, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                                                                      
                
                <!-- ---------------------------------------------------------- -->                                            
                <!-- ---------------------------------------------------------- -->                            

                 <!-- // (*) => Second Example => {krsort();} in => {Associative Array} [Keys - Dessendingly - Default] : 
                    // (a) => Sorting Elements's values Reversely in the [Associative array] by default alphabatically sorting by using => {arsort()} : -->

                        <header>                                
                            (*) =>  Second Example => {krsort();} in => {Associative Array} => [Values - Dessendingly - Default] :  <br>
                            <span class="one"></span>  (a) => Sorting Elements Reversely in the [Associative array] by default alphabatically sorting by using => {arsort()} : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIIb11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>

                            <h1> <?php echo $hIIb12 ?>  </h1>

                                <?php 
                                    krsort($assoArr1);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!--// (*) =>  Second Example => {krsort();} in => {Associative Array} [Keys - Dessendingly - Advanced] :
                        // (b) => Sorting Items's values Reversely in the [Associative array] by Advanced reverse default by using => {krsort();} : -->

                        <header>                                                        
                            (*) =>  Second Example => {krsort();} in => {Associative Array} => [Keys - Dessendingly - Advanced] : <br>
                            <span class="one"></span> Sorting Items's values Reversely in the [Associative array] by Advanced reverse default by using => {krsort();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hIIb21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>" ;
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>
                            
                            <h1> <?php echo $hIIb22 ?>  </h1>  
                            
                                <?php 
                                    krsort($assoArr1, SORT_REGULAR);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                            
                            <h1> <?php echo $hIIb23 ?>  </h1>  
                            
                                <?php 
                                    krsort($assoArr1, SORT_STRING);                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<hr>" . "<br>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                  
            <!-- ---------------------------------------------------------- -->                            
                                    
            </section>
                                                                    
         </body>
</html>             