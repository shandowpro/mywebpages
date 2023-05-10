<!--  59 PHP 5 In Arabic - String Functions - SubStr  --> 
<?php
    $lessonName  ='String Functions - SubStr';
    $title = '59 PHP5 - ' . $lessonName;
    $css = '59 PHP 5 In Arabic - String Functions - SubStr.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        $str = "I Love PHP So Much Becase It Is Famous And Cool" ; 
        
    // =================================================================================    
 
    // (*) => First Example => String Functions -  {substr()} => Positive Default Method : [ Positive Starting index - Default] || [Length - Default - optional]  :

    
            $ha1 = "{substr()} => Positive Default Method : [ Positive Starting index - Default] || [Length - Default - optional] , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is " .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece1 = substr($str, 18);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [positive Starting Index] || [Length - Default - Optional] is  " . "<br>" . $piece1 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    
    // (*) => Second Example => String Functions -  {substr()} => Default Method : [Negative Starting index - Default] || [Length - Default - optional] :
    
            $ha2 = "{substr()} => Negative Default Method : [ Negative Starting index - Default] || [Length - Default - optional] , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is " .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece2 = substr($str, -18);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [Negative Starting Index] || [Length - Default - Optional] is  " . "<br>" . $piece2 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                

    // (*) => Third Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp1) :
    
            $ha3 = " {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp1)  , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is" .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece3 = substr($str, 18, 12);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [Positive Starting Index] & [Positive length Index] [Exp1]  is  " . "<br>" . $piece3 . "<br>" ;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    
    // (*) => Fourth Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp2) :
    
            $ha4 = "{substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp2) , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is" .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece4 = substr($str, 26, 4);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [Positive Starting Index] & [Positive length Index]  [Exp2] is  " . "<br>" . $piece4 . "<br>" ;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                

    // (*) => Fifth Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [positive length] :
    
            $ha5 = "{substr()} => Advanced Method : [Negative Start index] & [positive length]  as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is" .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece5 = substr($str, -6, 4);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [Negative Starting Index] & [Positive length Index]  is  " . "<br>" . $piece5 . "<br>" ;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    
    // (*) => Sixth Example => String Functions -  {substr()} => Advanced Method : [positive Start index] & [Negative length] :
    
            $ha6 = " {substr()} => Advanced Method : [positive Start index] & [Negative length] , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is" .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece6 = substr($str, 10, -1);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain  [positive Start index] & [Negative length]  is  " . "<br>" . $piece6 . "<br>" ;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    
    // (*) => Seventh Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [Negative length] :
    
            $ha7 = "{substr()} => Advanced Method : [Negative Start index] & [Negative length] , as following: " ; 
            
            // // Printing the main string variables before [Substraction] :
            //     echo "Main String value is" .  "<br>" . $str . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Substraction]  :
            //     $piece7 = substr($str, -10, -1);
            
            // // Printing the [Substracted String] :
            //     echo "The the [Substracted String] with certain [Negative Start index] & [Negative length] is  " . "<br>" . $piece7 . "<br>" ;

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                                        
    //   ====================================================================================        
    // =================================================================================        
    
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
            
            <!-- (*) => First Example => String Functions -  {substr()} => Positive Default Method : [ Positive Starting index - Default] || [Length - Default - optional] : -->                    

                        <header>                                
                            (*) => First Example => String Functions -  {substr()} => Positive Default Method : [ Positive Starting index - Default] || [Length - Default - optional] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is " .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece1 = substr($str, 18);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [positive Starting Index : 18] || [Length - Default - Optional] is  " . "<br>" . $piece1 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Second Example => String Functions -  {substr()} => Default Method : [Negative Starting index - Default] || [Length - Default - optional] : -->                    

                        <header>                                
                            (*) => Second Example => String Functions -  {substr()} => Default Method : [Negative Starting index - Default] || [Length - Default - optional]: <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is " .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece2 = substr($str, -18);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [Negative Starting Index : -18] || [Length - Default - Optional] is  " . "<br>" . $piece2 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => Third Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp1) : -->                    

                        <header>                                
                            (*) Third Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp1)  : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is" .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece3 = substr($str, 18, 12);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [Positive Starting Index : 18] & [Positive length Index : 12] [Exp1]  is  " . "<br>" . $piece3 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
    
            <!-- (*) => Fourth Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp2) : -->                    

                        <header>                                
                            (*)  Fourth Example => String Functions -  {substr()} => Advanced Method : [Positive Start index] & [positive length] (Exp2) : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is" .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece4 = substr($str, 26, 4);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [Positive Starting Index : 26] & [Positive length Index : 4]  [Exp2] is  " . "<br>" . $piece4 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
    
            <!-- (*) =>  Fifth Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [positive length] : -->                    
                        <header>                                
                            (*)  Fifth Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [positive length] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is" .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece5 = substr($str, -6, 4);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [Negative Starting Index : -6] & [Positive length Index : 4]  is  " . "<br>" . $piece5 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) =>  Sixth Example => String Functions -  {substr()} => Advanced Method : [positive Start index] & [Negative length]  : -->                    

                        <header>                                
                            (*)  Sixth Example => String Functions -  {substr()} => Advanced Method : [positive Start index] & [Negative length]  : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha6 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is" .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece6 = substr($str, 10, -1);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain  [positive Start index : 10] & [Negative length : -1]  is  " . "<br>" . $piece6 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
    
            <!-- (*) =>  Seventh Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [Negative length]  : -->                    

                        <header>                                
                            (*)  Seventh Example => String Functions -  {substr()} => Advanced Method : [Negative Start index] & [Negative length]  : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha7 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variables before [Substraction] :
                                    echo "Main String value is" .  "<br>" . $str . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Substraction]  :
                                    $piece7 = substr($str, -10, -1);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted String] with certain [Negative Start index : -10] & [Negative length : -1] is  " . "<br>" . $piece7 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
                    
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
            </section>
                                                                    
         </body>
</html>