 <!--  35 PHP 5 - Array Practice    --> 
<?php

    $lessonName  ='Array Practice';
    $title = '35 PHP5 - ' . $lessonName;
    $css = '35 PHP 5 In Arabic - Array Practice.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) =>  [A]: First Example => Indexed Array :
        // (*) =>  [1]: Defintion indexed array :                        
            $indArr = array("apple", "orange", "carrot", "tomato");
                            
        // (*) =>  [2]: Adding new Element :
            $indArr[] = "Bananah" ;            
            
        // (*) =>  [3]: Getting the Array count after adding new element :
            $h11 =" Printing all indexed array count after adding new element as following : " ;                                 
            // echo count($indArr);
            
        // (*) =>  [4]: Getting certain element of the indexed array :
            $h12 =" Printing certain element {Third element of index [2]} as following : " ;                                 
            // echo $indArr[2];
            
        // (*) =>  [5]: Getting the structural form of the indexed array :
            $h13 =" Printing All Elements of Defined Indexed Arrays by [Structural Form]:{print_r()} Method as following : " ;                                 
            //echo '<pre>';    
            //print_r($indArr); 
            //echo '</pre>';        
                
        // (*) =>  [6]: Getting customized all elements of the indexed array :
            $h14 =" Printing All Elements of Defined Indexed Arrays by {Foreach looping} Method as following : " ;                                 
            //echo '<ul>';    
            // foreach ($indArr as $val) {                
            //     echo '<li>' . $val . "</li>";
            // }            
            //echo '</ul>';        
                                                
    // ==================================================================================

    // (*) =>  [B]: Second Example => Associative Array :
        // (*) =>  [1]: Defintion associative Array  :                        
            $assoArr = array(
                "Shadi"     => "10000",
                "Ahemd"     => "5000",
                "Mohammed"  => "7000",
                "Ali"       => "6500"            
            );
                            
        // (*) =>  [2]: Adding new Element :
            $assoArr["Omar"] = "8000" ;
            
        // (*) =>  [3]: Getting the Array count after adding new element :
            $h21 =" Printing all associative array count after adding new element as following : " ;  
            // echo count($assoArr);
            
        // (*) =>  [4]: Getting certain element of the Associative array :
            $h22 =" Printing certain element {Third element of keyName ['Mohammed']} as following : " ; 
            // echo $assoArr["Mohammed"];
            
        // (*) =>  [4]: Getting certain element of the associative array :
            $h23 =" Printing All Elements of Defined associative Arrays by [Structural Form]:{print_r()} Method as following : " ; 
            // echo '<pre>';    
            // print_r($assoArr); 
            // echo '</pre>';        
                
        // (*) =>  [5]: Getting certain element of the associtive array :
            $h24 =" Printing All Elements of Defined associative Arrays by {Foreach looping} Method as following : " ;
            // echo '<ul>';    
            // foreach ($assoArr as $person => $salary ) {
            //     echo '<li>' . "The salary of " . $person . " is => " . $salary . "</li>";
            // }            
            // echo '</ul>';        
    
    // ==================================================================================
    
    // (*) =>  [C]: Third Example => Multidimensional Array :
        // (*) =>  [1]: Defintion Multidimensional Array  :                        
            $multArr = array(
                "First" => array("Tomato","Carrot","Bananah"),
                "Second" => array("Meat", "Rice", "Chicken"),    
                "Third" => array("Apple","Orange","Strawberry"),                       
            );                                    
            
        // (*) =>  [2]: Getting the Array count:
            $h31 =" Printing all Multidimensional array count after adding new element as following : " ;  
            // echo count($multArr);                    
            
        // (*) =>  [4]: Getting all elements of the Multidimensional array in [Structural form] :
            $h32 =" Printing All Elements of Defined Multidimensional array by [Structural Form]:{print_r()} Method as following : " ; 
            // echo '<pre>';    
            // print_r($multArr); 
            // echo '</pre>';        
                
        // (*) =>  [5]: Getting all elements of the Multidimensional array in [customized form] :
            $h33 =" Printing All Elements of Defined Multidimensional Arrays by {Nested Foreach looping} Method as following : " ;
            // echo '<ul>';    
            // foreach ($multArr as $day => $food ) {
                
            //     echo '<li>' . "The day " . $day . "food list as following " . "<br>" ;
               
            //     foreach($food as $val) {
            //         echo $val . "<br>";
            //     }
            // }            
            // echo '</ul>';        
    // 
    // ==================================================================================
        
        
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
            
                <!-- // (*) =>  [A]: First Example => Indexed Array : -->                    
                            <header>
                                    (*) =>  [A]: First Example => Indexed Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) =>  [1]: Getting the Array count after adding new element : 
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h11; ?>  </h1>                                            
                                <?php                                                                     
                                   echo count($indArr);                                                 
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->

                            <header>
                                    (*) =>  [A]: First Example => Indexed Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) =>  Getting certain element of the indexed array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h12; ?>  </h1>                                            
                                <?php                                                                     
                                   echo $indArr[2];
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
                            
                            <header>
                                    (*) =>  [A]: First Example => Indexed Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => Getting the structural form of the indexed array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h13; ?>  </h1>                                            
                                <?php                                                                     
                                   echo '<pre>';    
                                    print_r($indArr); 
                                    echo '</pre>';   
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
                            
                            <header>
                                    (*) =>  [A]: First Example => Indexed Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => Getting customized all elements of the indexed array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h14; ?>  </h1>
                                <?php                                                                     
                                    echo '<ul>';    
                                    foreach ($indArr as $val) {                
                                        echo '<li>' . $val . "</li>";
                                    }            
                                    echo '</ul>';        
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->

                <!-- // (*) =>  [B]: Second Example => Associative Array : -->                    
                            <header>
                                    (*) =>  [B]: Second Example => Associative Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) =>  [1]: Getting the Array count after adding new element : 
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h21; ?>  </h1>                                            
                                <?php                                                                     
                                    echo count($assoArr);
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->

                            <header>
                                    (*) =>  [B]: Second Example => Associative Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => [2] Getting certain element of the associative array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h22; ?>  </h1>                                            
                                <?php                                                                     
                                    echo $assoArr["Mohammed"];
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
                            
                            <header>
                                    (*) =>  [B]: Second Example => Associative Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => [3] Getting the structural form of the Associative array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h23; ?>  </h1>                                            
                                <?php                                                                     
                                    echo '<pre>';    
                                    print_r($assoArr); 
                                    echo '</pre>';                                                                         
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
                            
                            <header>
                                    (*) =>  [B]: Second Example => Associative Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => [4] Getting customized all elements of the Associative array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h24; ?>  </h1>
                                <?php                                                                     
                                    echo '<ul>';    
                                    foreach ($assoArr as $person => $salary ) {
                                        echo '<li>' . "The salary of " . $person . " is => " . $salary . "</li>";
                                    }            
                                    echo '</ul>';                                                                                               
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->

                <!-- // (*) =>  [C]: Third Example => Associative Array : -->                    
                            <header>
                                    (*) =>  [B]: Third Example => Multidimensional Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) =>  [1]: Getting the Array count after adding new element : 
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h31; ?>  </h1>                                            
                                <?php                                                                     
                                    echo count($multArr);                                
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->                                                        
                            <header>
                                    (*) =>  [C]: Third Example => Multidimensional Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => [3] Getting the structural form of the Multidimensional array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h32; ?>  </h1>                                            
                                <?php                                                                     
                                    echo '<pre>';    
                                    print_r($multArr); 
                                    echo '</pre>';                                                                            
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
                            
                            <header>
                                    (*) =>  [C]: Third Example => Multidimensional Array : <br>
                                        &nbsp;&nbsp;&nbsp; (*) => [4] Getting customized all elements of the Multidimensional array :
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h33; ?>  </h1>
                                <?php                                                                     
                                    echo '<ul>';    
                                    foreach ($multArr as $day => $food ) {
                                        
                                        echo '<li>' . "The day " . $day . "food list as following " . "<br>" ;
                                    
                                        foreach($food as $val) {
                                            echo $val . "<br>";
                                        }
                                    }            
                                    echo '</ul>';        
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->                            
            </section>
                                                                    
         </body>
</html>             