 <!--  45 PHP 5  - Array Methods - Array Unique    --> 
<?php
    $lessonName  ='Array Methods - Array Unique';
    $title = '45 PHP5 - ' . $lessonName;
    $css = '45 PHP 5 In Arabic - Array Methods - Array Unique.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        
        $indArr1 = array(10 , 10 , 10 , 1.5 ,  20 , 50 , 50 , 100 , 1.5 , 100);
            
        $indArr2 = array("html", "html", "css", "js", "css", "php");
        
        $indArr3 = array("html", 10 ,"html", 50 ,"css", 1.5 , "js", "css", 100 ,"php");


        $assoArr1 = array(
            0   => 10,
            1   => 20,
            2   => 50,
            3   => 1.5,            
            4   => 100,            
        );
        
        $assoArr2 = array(
            0   => "html",
            1   => "html",
            2   => "css", 
            3   => "css",            
            4   => "js",            
            5   => "php",
        );                        
                            
        $assoArr3 = array(
            0   => "html",
            1   => 10,
            2   => "html",
            3   => 50,
            4   => "css",
            5   => 1.5,
            6   => "js",
            7   => "css",
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
    
    // (*) => First Example => Unique array  [index Array] & [associative array] :> {type: default} :
                            
        // (a) => Unique array of values of [Indexed array ] with default :
                                    
            $ha1 = "Unique array of (3) [Indexed array] [with default] as following: "; 
                 
                $uniqInd1 = array_unique($indArr1);
                $uniqInd2 = array_unique($indArr2);
                $uniqInd3 = array_unique($indArr3);                                
                
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>" . "<br>" . "<br>";
                            
                // echo "<pre>";
                // print_r($uniqInd1);
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
            // ---------------------------------------------

                // echo "<pre>";
                // print_r($indArr2);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($uniqInd2);
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
            // ---------------------------------------------
            
                // echo "<pre>";
                // print_r($indArr3);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($uniqInd3);
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";
            // ---------------------------------------------                                            
                // echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<br>";                        
        // ----------------------------------------

        // (b) => Unique array of values of [Associative array ] with default :

            $ha2 = "Unique array of (3) [Associative array] [with default] as following: "; 
                 
        //         $uniqAsso1 = array_unique($assoArr1);
        //         $uniqAsso2 = array_unique($assoArr2);
        //         $uniqAsso3 = array_unique($assoArr3);                                
                
        //         echo "<pre>";
        //         print_r($assoArr1);
        //         echo "</pre>" . "<br>" . "<br>" ;
                            
        //         echo "<pre>";
        //         print_r($uniqAsso1);
        //         echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        //     // ---------------------------------------------

        //         echo "<pre>";
        //         print_r($assoArr2);
        //         echo "</pre>" . "<br>" . "<br>";
                
        //         echo "<pre>";
        //         print_r($uniqAsso2);
        //         echo "</pre>" . "<br>" . "<br>". "----------------------------------" ; 
        //     // ---------------------------------------------
            
        //         echo "<pre>";
        //         print_r($assoArr3);
        //         echo "</pre>" . "<br>" . "<br>";
                
        //         echo "<pre>";
        //         print_r($uniqAsso3);
        //         echo "</pre>" . "<br>" . "<br>". "----------------------------------" ; 
        //     // ---------------------------------------------                                            
        //         echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
        // // ----------------------------------------        
                        
    // ==================================================================================        

    // (*) => Second Example => Unique array  [index Array] & [associative array] :> {type: String} :
                            
        // (a) => Unique array of values of [Indexed array ] with [Sort String] :
                                    
            $hb1 = "Unique array of (3) [Indexed array] with [Sort String] as following: "; 
                 
                $uniqInd11 = array_unique($indArr1, SORT_STRING);
                $uniqInd21 = array_unique($indArr2, SORT_STRING);
                $uniqInd31 = array_unique($indArr3, SORT_STRING);                                
                
            //     echo "<pre>";
            //     print_r($indArr1);
            //     echo "</pre>" . "<br>" . "<br>";
                            
            //     echo "<pre>";
            //     print_r($uniqInd11);
            //     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";
            // // ---------------------------------------------

            //     echo "<pre>";
            //     print_r($indArr2);
            //     echo "</pre>" . "<br>" . "<br>";
                
            //     echo "<pre>";
            //     print_r($uniqInd21);
            //     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>"  ;
            // // ---------------------------------------------
            
            //     echo "<pre>";
            //     print_r($indArr3);
            //     echo "</pre>" . "<br>" . "<br>";
                
            //     echo "<pre>";
            //     print_r($uniqInd31);
            //     echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
                                                     
            //     echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
        // ----------------------------------------

        // (b) => Unique array of values of [Associative array ] with [Sort String] :

            $hb2 = "Unique array of (3) [Associative array] with [Sort String] as following: "; 
                 
                $uniqAsso12 = array_unique($assoArr1, SORT_STRING);
                $uniqAsso22 = array_unique($assoArr2, SORT_STRING);
                $uniqAsso32 = array_unique($assoArr3, SORT_STRING);                                
                
            //     echo "<pre>";
            //     print_r($assoArr1);
            //     echo "</pre>" . "<br>" . "<br>";
                            
            //     echo "<pre>";
            //     print_r($uniqAsso12);
            //     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>" ;
            // // ---------------------------------------------

            //     echo "<pre>";
            //     print_r($assoArr2);
            //     echo "</pre>" . "<br>" . "<br>";
                
            //     echo "<pre>";
            //     print_r($uniqAsso22);
            //     echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ;
            // // ---------------------------------------------
            
            //     echo "<pre>";
            //     print_r($assoArr3);
            //     echo "</pre>" . "<br>" . "<br>";
                
            //     echo "<pre>";
            //     print_r($uniqAsso32);
            //     echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
            
            //     echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
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
            
            <!--     // (*) => First Example => Unique array  [index Array] & [associative array] :> {Sort: default}  :
                   // (a) Unique array of values of [Indexed array ] with default :-->

                        <header>                                
                            (*) => First Example => Unique array  [index Array] & [associative array] :> {Sort: default}  : => <br>
                                <span class="one"></span>  (a) Unique array of values of [Indexed array ] with default :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha11 ?>  </h1>  
                                
                                <?php                                     
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                                
                                    echo "<pre>";
                                    print_r($uniqInd1);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";


                                    echo "<pre>";
                                    print_r($indArr2);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqInd2);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";
                                // ---------------------------------------------
                                
                                    echo "<pre>";
                                    print_r($indArr3);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqInd3);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                                // ---------------------------------------------                                            
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>" . "<br>";                        

                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
            <!--     // (*) => First Example => Unique array  [index Array] & [associative array] :> {Sort: default}  :
                    // (b) Unique array of values of [Assoiciative array ] with default :-->
                        <header>                                
                            / (*) => First Example => Unique array  [index Array] & [associative array] :> {Sort: default}  : => <br>
                                <span class="one"></span>  (b) Unique array of values of [associative array ] with default :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha12 ?>  </h1>  
                                
                                <?php                                     
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<br>" ;
                                                
                                    echo "<pre>";
                                    print_r($uniqAsso1);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";
                                // ---------------------------------------------
                    
                                    echo "<pre>";
                                    print_r($assoArr2);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqAsso2);
                                    echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
                                // ---------------------------------------------
                                
                                    echo "<pre>";
                                    print_r($assoArr3);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqAsso3);
                                    echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
                                                      
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->
            
            <!--     // (*) => Second Example => Unique array  [index Array] & [associative array] :> {Sort: String}  :            
                      (a) => Unique array of values of [Indexed array ] with [Sort String]  -->
                            
                        <header>                                
                        (*) => Second Example =>  Unique array  [index Array] & [associative array] :> {Sort: String}   <br>
                                <span class="one"></span>  (a) => Unique array of values of [Indexed array ] with [Sort String]  :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb1 ?>  </h1>                              

                                <?php 
                                    $uniqInd11 = array_unique($indArr1, SORT_STRING);
                                    $uniqInd21 = array_unique($indArr2, SORT_STRING);
                                    $uniqInd31 = array_unique($indArr3, SORT_STRING);                                
                                    
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                                
                                    echo "<pre>";
                                    print_r($uniqInd11);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>";
                                // ---------------------------------------------

                                    echo "<pre>";
                                    print_r($indArr2);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqInd21);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>"  ;
                                // ---------------------------------------------
                                
                                    echo "<pre>";
                                    print_r($indArr3);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqInd31);
                                    echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
                                                                        
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                                                            
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
            <!-- ---------------------------------------------------------- -->                                                                        
            <!-- ---------------------------------------------------------- -->                                                                                                                            
            <!--     // (*) => Second Example => Unique array  [index Array] & [associative array] :> {Sort: String}  :            
                      (b) => Unique array of values of [Associative array ] with [Sort String] :  -->
                      
                            
                        <header>                                
                        (*) => Second Example =>  Unique array  [index Array] & [associative array] :> {Sort: String}   <br>
                                <span class="one"></span>  (b) => Unique array of values of [Associative array ] with [Sort String]  :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb2 ?>  </h1>                              

                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>" . "<br>" . "<br>";
                                                
                                    echo "<pre>";
                                    print_r($uniqAsso12);
                                    echo "</pre>" . "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                                // ---------------------------------------------
                    
                                    echo "<pre>";
                                    print_r($assoArr2);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqAsso22);
                                    echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ;
                                // ---------------------------------------------
                                
                                    echo "<pre>";
                                    print_r($assoArr3);
                                    echo "</pre>" . "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($uniqAsso32);
                                    echo "</pre>" . "<br>" . "<br>". "----------------------------------" . "<br>" ; 
                                
                                    echo "</pre>" . "<br>" . "<hr>" . "<br>";                        
                                // ----------------------------------------        
                                    
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