 <!--  46 PHP 5 In Arabic - String Functions - Explode    --> 
<?php
    $lessonName  ='String Functions - Explode';
    $title = '46 PHP5 - ' . $lessonName;
    $css = '46 PHP 5 In Arabic - String Functions - Explode.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        $str1 = "Hello,I,Love,PHP,So,Much";
        $str2 = "Hello I Love PHP So Much";
        $str3 = "Hello, I, Love, PHP, So, Much";
        
        $strCssFiles = "header,clock,footer,widjet,article";                            
    // =================================================================================
    
    // (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps : 
                            
        // (a) => Explode Method :{Comma Separator type} && {None Limit} :
                                    
            $ha1 = "Explode Method :{Comma Separator type} && {None Limit} as following: "; 
                 
                $arrComma = explode(",", $str1);
                
                // echo "<pre>";
                // print_r($str1);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrComma);                
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------

        // (b) => Explode Method :{empty Space Separator type} && {None Limit} :
                                    
            $ha2 = "Explode Method :{Empty Space Separator type} && {None Limit} as following: "; 
                 
                $arrSpace = explode(" ", $str2);
                                
                // print_r($str2);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrSpace);                
                // echo "</pre>" . "<br>" . "<br>" . "hr" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (c) => Explode Method :{Comma & Empty Space Separator type} && {None Limit} :
                                    
            $ha3 = "Explode Method :{Empty Space Separator type} && {None Limit} as following: "; 
                 
                $arrCommaSpace = explode(", ", $str3);
                                
                // print_r($str3);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrCommaSpace);                
                // echo "</pre>" . "<br>" . "<br>" . "hr" . "----------------------------------" ;
        // ---------------------------------------------
        
    // ==================================================================================        

    // (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  :
                            
        // (a) => {Positive Value} => different values [3||4||5] : Number of splited elements :
                                    
            $hb1 = "{Positive Value} : Number of splited elements with different values [3||4||5] as following: "; 
                 
                $arrPos3 = explode( "," , $str1, 3);
                $arrPos4 = explode( "," , $str1, 4);
                $arrPos5 = explode( "," , $str1, 5);

                // print_r($str1);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrPos3);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // echo "<pre>";
                // print_r($arrPos4); 
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // echo "<pre>";
                // print_r($arrPos5);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
      // ---------------------------------------------
        
      // (b) => {Negative Value} : Number of splited elements :
                                    
            $hb2 = "{Negative Value} : Number of exceptioned elements from spliting as following: "; 
                 
                $arrNeg3 = explode( "," , $str1, -1);
                $arrNeg4 = explode( "," , $str1, -2);
                $arrNeg5 = explode( "," , $str1, -3);                

                // print_r($str1);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrNeg3);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // echo "<pre>";
                // print_r($arrNeg4); 
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // echo "<pre>";
                // print_r($arrNeg5);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;

      // ---------------------------------------------

      // (c) => {Zero Value} : Only one splited element :
                                    
            $hb3 = "{Zero Value} : Only one splited element as following: "; 
                 
                $arrZero = explode( "," , $str1, 0);
                                
                // print_r($str1);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrZero);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;                                                                

      // ---------------------------------------------
    // ==================================================================================        
            
    // (*) => Third Example => String Functions - Explode : Advanced applications : contains (2)Exps  :
                            
        // (a) => Autoloading Multiple [css files] by spliting||exploding one string variable of css files got from the database, into the Html page :
                                    
            $hc1 = "Autoloading Multiple [css files] by spliting||exploding one string variable of css files got from the database, into the Html page as following: "; 
                 
                $arrCssFiles = explode( "," , $strCssFiles);
                
                // print_r($strCssFiles);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrCssFiles);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // for ($i=0; $i<count($arrCssFiles); $i++) {
                //     echo "<link rel='stylesheet' href='css/" . $arrCssFiles[$i] . ".css'>" ;
                // }

      // ---------------------------------------------
        
      // (b) => Autoloading [Multiple spans name] textnodes by spliting||exploding [one string variable of spans textnodes] got from the database, into the Html page :
                                    
            $hc2 = "Autoloading [Multiple spans name] textnodes by spliting||exploding [one string variable of spans textnodes] got from the database, into the Html page as following: "; 
                 
                $arrTagsNodes = explode( "," , $strCssFiles);
                    
                // print_r($strCssFiles);
                // echo "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arrTagsNodes);
                // echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                
                // for ($i=0; $i<count($arrTagsNodes); $i++) {
                //     echo "<span class='tag'>" . $arrTagsNodes[$i] . "</span>" ;
                // }
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
            
            <!--  (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3) Exps :
                    (a) => Explode Method :{Comma Separator type} && {None Limit}: -->

                        <header>                                
                            (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps   : => <br>
                                <span class="one"></span>  (a) => Explode Method :{Comma Separator type} && {None Limit} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                echo "<pre>";
                                print_r($str1);
                                echo "</pre>" . "<br>" . "<br>";
                                
                                echo "<pre>";
                                print_r($arrComma);                
                                echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps  :
                     (b) => Explode Method :{empty Space Separator type} && {None Limit} :-->
                        <header>                                
                            / (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps    : => <br>
                                <span class="one"></span> (b) => Explode Method :{empty Space Separator type} && {None Limit} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                                <?php                                     
                                     print_r($str2);
                                     echo "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($arrSpace);                
                                     echo "</pre>" . "<br>" . "<br>" . "<hr>" . "----------------------------------" ;
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!--  (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps  :
                     (c) => Explode Method :{Comma & Empty Space Separator type} && {None Limit} : :-->
                        <header>                                
                            / (*) => First Example => String Functions - Explode :{Various Separator types} && {None Limit} : contains (3)Exps    : => <br>
                                <span class="one"></span> (c) => Explode Method :{Comma & Empty Space Separator type} && {None Limit} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                                <?php                                     
                                     print_r($str3);
                                     echo "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($arrCommaSpace);                
                                     echo "</pre>" . "<br>" . "<br>" . "<hr>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->
            
            
            <!--   // (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  :            
                      (a) => {Positive Value} => different values [3||4||5] : Number of splited elements :  -->
                            
                        <header>                                
                            (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  :            
                                <span class="one"></span> (a) => {Positive Value} => different values [3||4||5] : Number of splited elements :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb1 ?>  </h1>                              

                                <?php 
                                    print_r($str1);
                                    echo "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($arrPos3);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    echo "<pre>";
                                    print_r($arrPos4); 
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    echo "<pre>";
                                    print_r($arrPos5);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                    
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
            <!-- ---------------------------------------------------------- -->                                                                                    
            
            <!--  //  (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  :            
                        (b) => {Negative Value} : Number of splited elements :-->
                                                  
                        <header>                                
                            (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  : <br>
                                <span class="one"></span>  (b) => {Negative Value} : Number of splited elements :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb2 ?>  </h1>                              

                                <?php 
                                    print_r($str1);
                                    echo "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($arrNeg3);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    echo "<pre>";
                                    print_r($arrNeg4); 
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    echo "<pre>";
                                    print_r($arrNeg5);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                                        
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->                                                                        
            <!--  //  (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  :            
                        (c) => {Zero Value} : Number of splited elements :-->
                                                  
                        <header>                                
                            (*) => Second Example => String Functions - Explode :{Various Separator types} && {Various Limit types} : contains (3)Exps  : <br>
                                <span class="one"></span>   (c) => {Zero Value} : Only one splited element :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hb3 ?>  </h1>

                                <?php 
                                    $arrZero = explode( "," , $str1, 0);
                                
                                    print_r($str1);
                                    echo "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($arrZero);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;                                     
                                ?>
                        </div>                
                        <br> <br> <br> <hr>
                <!-- ---------------------------------------------------------- -->                                                                        
                <!-- ---------------------------------------------------------- -->                                                                                                                            
            <!-- ============================================================================= -->

            <!--  // (*) => Third Example => String Functions - Explode : Advanced applications : contains (2)Exps  :
                        (a) => Autoloading Multiple [css files] by spliting||exploding one string variable of css files got from the database, into the Html page : -->
                                                  
                        <header>                                
                            (*) => Third Example => String Functions - Explode : Advanced applications : contains (2)Exps  <br>
                                <span class="one"></span>  (a) => Autoloading Multiple [css files] by spliting||exploding one string variable of css files got from the database, into the Html page :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hc1 ?>  </h1>

                                <?php 
                                    print_r($strCssFiles);
                                    echo "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($arrCssFiles);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    for ($i=0; $i<count($arrCssFiles); $i++) {
                                        echo "<link rel='stylesheet' href='css/" . $arrCssFiles[$i] . ".css'>" ;
                                    }

                                ?>
                        </div>                
                        <br> <br> <br> <hr>
            <!-- ---------------------------------------------------------- -->                                                                        
            
            <!--  // (*) => Third Example => String Functions - Explode : Advanced applications : contains (2)Exps  :
                    (b) => Autoloading [Multiple spans name] textnodes by spliting||exploding [one string variable of spans textnodes] got from the database, into the Html page : -->
                                                  
                        <header>                                
                        (*) => Third Example => String Functions - Explode : Advanced applications : contains (2)Exps  :  <br>
                                <span class="one"></span> (b) => Autoloading [Multiple spans name] textnodes by spliting||exploding [one string variable of spans textnodes] got from the database, into the Html page :
                        </header>                                    
                        
                        <div>

                            <h1> <?php echo $hc2 ?>  </h1>

                                <?php 
                                    print_r($strCssFiles);
                                    echo "<br>" . "<br>";
                                    
                                    echo "<pre>";
                                    print_r($arrTagsNodes);
                                    echo "</pre>" . "<br>" . "<br>" .  "----------------------------------" ;
                                    
                                    for ($i=0; $i<count($arrTagsNodes); $i++) {
                                        echo "<span class='tag'>" . $arrTagsNodes[$i] . "</span>" ;
                                    }

                                ?>
                        </div>                
                        <br> <br> <br> <hr>
            <!-- ---------------------------------------------------------- -->                                                                                    

            <!-- ---------------------------------------------------------- -->                                                                       
            <!-- ============================================================================= -->                                                
            </section>
                                                                    
         </body>
</html>             