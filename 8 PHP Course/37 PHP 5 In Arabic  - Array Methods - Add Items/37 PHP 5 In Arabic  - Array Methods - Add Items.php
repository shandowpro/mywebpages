 <!--  37 PHP 5  - Array Methods - Add Items    --> 
<?php
    $lessonName  ='Array Methods - Add Items';
    $title = '37 PHP5 - ' . $lessonName;
    $css = '37 PHP 5 In Arabic  - Array Methods - Add Items.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        $indArr = array("html", "css", "js", "php");
    
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
    // =================================================================================
        
    // (*) => First Example => {array_push();} in => {Indexed Array} && {Associative Array}:
                            
        // (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_push();} :
                                    
                $ha11 = "The main [Indexed Array] before adding new Items as following: "; 
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>";
                // ----------------------------------------

                $ha12 = "The [Indexed Array] After adding new items by {array_push();} as following: ";
                // array_push($indArr,  "mySql", "ruby", "python");
                // echo "<pre>";
                // print_r($indArr);
                // echo "</pre>";
        // ---------------------------------------------
        
        // (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_push();} :
                $ha21 = "The main [Associative Array] before adding new Items as following: ";
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>";
                // ----------------------------------------

                $ha22 = "The [Associative Array] After adding new items by {array_push();} as following: ";
                // array_push($assoArr,  "mySql", "ruby", "python");                
                // echo "<pre>";
                // print_r($assoArr);
                // echo "</pre>";
        // ---------------------------------------------                        
        
    // ==================================================================================        
        
    // (*) =>  Second Example => {array_unshift();} in => {Indexed Array} && {Associative Array}:
                            
        // (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_unshift();} :
                                    
                $hb11 = "The main [Indexed Array] before adding new Items as following: "; 
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>";
                // ----------------------------------------

                $hb12 = "The [Indexed Array] After adding new items by {array_unshift();} as following: ";               
                // array_unshift($indArr1,  "mySql", "ruby", "python");                
                // echo "<pre>";
                // print_r($indArr1);
                // echo "</pre>";
        // ---------------------------------------------                        
        
        // (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_unshift();} :
                $hb21 = "The main [Associative Array] before adding new Items as following: "; 
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>";
                // ----------------------------------------

                $hb22 = "The [Associative Array] After adding new items {array_unshift()} as following: ";
                // array_unshift($assoArr1,  "mySql", "ruby", "python"); 
                // echo "<pre>";
                // print_r($assoArr1);
                // echo "</pre>";
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
                <!--// (*) =>  First Example => {array_push();} in => {Indexed Array} && {Associative Array}:
                        // (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_push();} -->

                        <header>                                
                            (*) =>  First Example => {array_push();} in => {Indexed Array} && {Associative Array}: <br>
                            <span class="one"></span>  (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_push();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>";
                                ?>

                            <h1> <?php echo $ha12 ?>  </h1>                              

                                <?php 
                                    array_push($indArr,  "mySql", "ruby", "python");
                                    echo "<pre>";
                                    print_r($indArr);
                                    echo "</pre>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!--// (*) =>  First Example => {array_push();} in => {Indexed Array} && {Associative Array}:
                        // (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_push();} -->

                        <header>                                                        
                            (*) =>  First Example => {array_push();} in => {Indexed Array} && {Associative Array}: <br>
                            <span class="one"></span>  (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_push();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>";
                                ?>
                            
                            <h1> <?php echo $ha22 ?>  </h1>  
                            
                                <?php 
                                    array_push($assoArr,  "mySql", "ruby", "python");                
                                    echo "<pre>";
                                    print_r($assoArr);
                                    echo "</pre>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                    
                
                    
                                  
                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            

                <!-- (*) =>  Second Example => {array_unshift();} in => {Indexed Array} && {Associative Array}:
                        // (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_unshift();} -->

                        <header>                                
                            (*) =>  Second Example => {array_unshift();} in => {Indexed Array} && {Associative Array}: <br>
                            <span class="one"></span>  (a) => Adding new Items to the [Indexed array] at the End of it's items by using => {array_unshift();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb11 ?>  </h1>  
                                
                                <?php 
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>";
                                ?>

                            <h1> <?php echo $hb12 ?>  </h1>                              

                                <?php 
                                    array_unshift($indArr1,  "mySql", "ruby", "python");
                                    echo "<pre>";
                                    print_r($indArr1);
                                    echo "</pre>";
                                ?>

                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!--// (*) =>  Second Example => {array_unshift();} in => {Indexed Array} && {Associative Array}:
                        // (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_unshift();} -->

                        <header>                                                        
                            (*) =>  Second Example => {array_unshift();} in => {Indexed Array} && {Associative Array}: <br>
                            <span class="one"></span>  (b) => Adding new Items to the [Associative array] at the End of it's items by using => {array_unshift();} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb21 ?>  </h1>  
                            
                                <?php 
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>";
                                ?>
                            
                            <h1> <?php echo $hb22 ?>  </h1>  
                            
                                <?php 
                                    array_unshift($assoArr1,  "mySql", "ruby", "python");                
                                    echo "<pre>";
                                    print_r($assoArr1);
                                    echo "</pre>";
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>
                                  
                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            
            </section>
                                                                    
         </body>
</html>             