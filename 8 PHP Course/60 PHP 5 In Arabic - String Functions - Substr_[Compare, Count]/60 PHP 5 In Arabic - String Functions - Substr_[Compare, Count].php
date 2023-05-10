<!--  60 PHP 5 In Arabic - String Functions - Substr_[Compare, Count]  --> 
<?php
    $lessonName  ='String Functions - Substr_[Compare, Count]';
    $title = '60 PHP5 - ' . $lessonName;
    $css = '60 PHP 5 In Arabic - String Functions - Substr_[Compare, Count].css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        $str = "I Love PHP So Much Becase It Is Famous And Cool That is why PHP is the Best" ; 
        $str1 = "Shadi" ; 
        $str2 = "Shadi 1" ; 
        
    // =================================================================================    
 
    // (*) => First Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Default - optional/advanced] || [Length : Default - optional/advanced]  :
    
            $ha1 = "{substr_count(Main String , Sub String , Start Index, Length)} =>  Default Method : [Starting index : Default - optional/advanced] || [Length : Default - optional/advanced] , as following: " ; 
            
            // Printing the main string variable before [Counting Substraction] :
                echo "Main String value is " . "<br>" . $str . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Counting Substraction]  :
                $count1 = substr_count($str, "PHP");
            
            // Printing the [Substracted String] :
                echo "The the [Substracted count] with certain [Starting index : Default - optional/advanced] || [Length : Default - optional/advanced] is  " . "<br>" . $count1 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Second Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Default - optional/advanced]  :
    
            $ha2 = "{substr_count(Main String , Sub String , Start Index, Length)} =>  Advanced Method : [Starting index : Customized - optional/advanced] || [Length : Default - optional/advanced] , as following: " ; 
            
            // Printing the main string variable before [Counting Substraction] :
                echo "Main String value is " . "<br>" . $str . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Counting Substraction]  :
                $count2 = substr_count($str, "PHP", 10);
            
            // Printing the [Substracted String] :
                echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Default - optional/advanced] is  " . "<br>" . $count2 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Third Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized - optional/advanced]  :
    
            $ha3 = "{substr_count(Main String , Sub String , Start Index, Length)} =>  Advanced Method : [Starting index : Customized - optional/advanced] || [Length : Customized - optional/advanced] , as following: " ; 
            
            // Printing the main string variable before [Counting Substraction] :
                echo "Main String value is " . "<br>" . $str . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Counting Substraction]  :
                $count3 = substr_count($str, "PHP", 10, 30);
            
            // Printing the [Substracted String] :
                echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Customized(30) - optional/advanced] is  " . "<br>" . $count3 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                    
    
    // (*) => Fourth Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized(Main parent String length) - optional/advanced]  :    
            $ha4 = "{substr_count(Main String , Sub String , Start Index, Length)} =>  Advanced Method : [Starting index : Customized - optional/advanced] || [Length : Customized - optional/advanced] , as following: " ; 
            
            // Printing the main string variable before [Counting Substraction] :
                echo "Main String value is " . "<br>" . $str . "<br>";
                echo "<hr>" . "<br>";                                    

            $strLen = strlen($str);

            echo $strLen;
            
            // Processing [Counting Substraction]  :
                $count4 = substr_count($str, "PHP", 10, $strLen);
            
            // Printing the [Substracted String] :
                echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Customized(strlen(Main String Var)) - optional/advanced] is  " . "<br>" . $count4 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    // ---------------------------------------------                                                                
    

    // (*) => Fifth Example => String Functions -  { substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Default Method : [ Starting index : (10) - Obligatory] || [Length : default - optional/advanced] || [Letter case : default(false) - optional/advanced] :
    
        $ha5 = "{substr_compare(String1 , String2 , Start Index, Length , Letter Case )} =>  Advanced Method : [ Starting index : default(10) - optional/advanced] || [Length : default - optional/advanced] || [Letter case : default(false) - optional/advanced]  , as following: " ; 
        
        // Printing the both strings variable values before [Comparing Substracted strings] :
            echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
            echo "<hr>" . "<br>";                                    
        
        // Processing [Comparing Substracted strings] :
            $result1 = substr_compare($str1, $str2, 10);
        
        // Printing the [Substracted Strings Comparing Result] :
            echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : Default - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result1 . "<br>" ;

            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
        
    // (*) => Sixth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : default(false) - optional/advanced] :
        
            $ha6 = "{substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : default(false) - optional/advanced] , as following:" ; 
            
            // Printing the both strings variable values before [Comparing Substracted strings] :
                echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Comparing Substracted strings]  :
                $result2 = substr_compare($str1, $str2, 10, 30);
            
            // Printing the [Substracted Strings Comparing Result] :
                echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result2 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                       
    
    // (*) => Seventh Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(false) - optional/advanced] :
        
            $ha7 = "{substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default0(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : advanced(false) - optional/advanced] , as following:" ; 
            
            // Printing the both strings variable values before [Comparing Substracted strings] :
                echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Comparing Substracted strings]  :
                $result3 = substr_compare($str1, $str2, 10, 30 , false);
            
            // Printing the [Substracted Strings Comparing Result] :
                echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result3 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------                                                                
    
    // (*) => Eigth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(true) - optional/advanced] :
        
            $ha8 = "{substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : advanced(true) - optional/advanced] , as following:" ; 
            
            // Printing the both strings variable values before [Comparing Substracted strings] :
                echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                echo "<hr>" . "<br>";                                    
            
            // Processing [Comparing Substracted strings]  :
                $result4 = substr_compare($str1, $str2, 10, 30 , true);
            
            // Printing the [Substracted Strings Comparing Result] :
                echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(true) - optional/advanced]  is  " . "<br>" . $result4 . "<br>" ;

                echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
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
            
            <!-- (*) => First Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Default - optional/advanced] || [Length : Default - optional/advanced] : -->                    

                        <header>                                
                            (*) => First Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Default - optional/advanced] || [Length : Default - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variable before [Counting Substraction] :
                                    echo "Main String value is " . "<br>" . $strCount . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Counting Substraction]  :
                                    $count1 = substr_count($str, "PHP");
                                
                                // Printing the [Substracted String] :1
                                    echo "The the [Substracted count] with certain [Starting index : Default - optional/advanced] || [Length : Default - optional/advanced] is  " . "<br>" . $count1 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Default - optional/advanced] : -->                    

                        <header>                                
                            (*) => Second Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Default - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variable before [Counting Substraction] :
                                    echo "Main String value is " . "<br>" . $strCount . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Counting Substraction]  :
                                    $count2 = substr_count($str, "PHP", 10);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Default - optional/advanced] is  " . "<br>" . $count2 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized - optional/advanced] : -->                    

                        <header>                                
                            (*) => Third Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variable before [Counting Substraction] :
                                    echo "Main String value is " . "<br>" . $strCount . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Counting Substraction]  :
                                    $count3 = substr_count($str, "PHP", 10, 30);
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Customized(30) - optional/advanced] is  " . "<br>" . $count3 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => Fourth Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized(Main parent String length) - optional/advanced] : -->                    

                        <header>                                
                            (*) => Fourth Example => String Functions -  {substr_count(Main String , Sub String ,  Start Index, Length)} =>  Default Method : [ Starting index : Customized - optional/advanced] || [Length : Customized(Main parent String length) - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                
                            <?php
                                // Printing the main string variable before [Counting Substraction] :
                                    echo "Main String value is " . "<br>" . $strCount . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Counting Substraction]  :
                                    $count4 = substr_count($str, "PHP", 10, strlen($strCount));
                                
                                // Printing the [Substracted String] :
                                    echo "The the [Substracted count] with certain [Starting index : Customized(10) - optional/advanced] || [Length : Customized(strlen(Main String Var)) - optional/advanced] is  " . "<br>" . $count4 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Fifth Example => String Functions -  { substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Default Method : [ Starting index : (10) - Obligatory] || [Length : default - optional/advanced] || [Letter case : default(false) - optional/advanced] : -->                    

                        <header>                                
                            (*) => Fifth Example => String Functions -  { substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Default Method : [ Starting index : (10) - Obligatory] || [Length : default - optional/advanced] || [Letter case : default(false) - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha5 ?>  </h1>  
                                
                            <?php
                                // Printing the both strings variable values before [Comparing Substraction] :
                                    echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Comparing Substraction]  :
                                    $result1 = substr_compare($str1, $str2, 10);
                                
                                // Printing the [Substracted Strings Comparing Result] :
                                    echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : Default - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result1 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                    
            <!-- (*) => Sixth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : default(false) - optional/advanced] : -->                    

                        <header>                                
                            (*) => Sixth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : advanced - optional/advanced] || [Letter case : default(false) - optional/advanced] : <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha6 ?>  </h1>  
                                
                            <?php
                                // Printing the both strings variable values before [Comparing Substracted strings] :
                                    echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Comparing Substracted strings]  :
                                    $result2 = substr_compare($str1, $str2, 10, 30);
                                
                                // Printing the [Substracted Strings Comparing Result] :
                                    echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result2 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Seventh Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(false) - optional/advanced] : -->                    

                        <header>                                
                            (*) => Seventh Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(false) - optional/advanced]: <br>                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha7 ?>  </h1>  
                                
                            <?php
                                // Printing the both strings variable values before [Comparing Substracted strings] :
                                    echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Comparing Substracted strings]  :
                                    $result3 = substr_compare($str1, $str2, 10, 30 , false);
                                
                                // Printing the [Substracted Strings Comparing Result] :
                                    echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(false) - optional/advanced]  is  " . "<br>" . $result2 . "<br>" ;

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Eigth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(true) - optional/advanced] : -->

                        <header>                                
                            (*) => Eigth Example => String Functions - {substr_compare(String1 , String2 , Start Index, Length , Letter Case) } =>  Advanced Method : [ Starting index : default(10) - Obligatory] || [Length : Customized - optional/advanced] || [Letter case : advanced(true) - optional/advanced]: <br>
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha8 ?>  </h1>  
                                
                            <?php

                            // Printing the both strings variable values before [Comparing Substracted strings] :
                                    echo "First String value is " . "<br>" . $str1 . "<br> Second String value is" . $str2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Comparing Substracted strings]  :
                                    $result4 = substr_compare($str1, $str2, 10, 30 , true);
                                
                                // Printing the [Substracted Strings Comparing Result] :
                                    echo "The the [Substracted Strings Comparing Result (with Default starting index:10)] with [Length : customized - optional/advanced] || [Letter Case : Default(true) - optional/advanced]  is  " . "<br>" . $result4 . "<br>" ;

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