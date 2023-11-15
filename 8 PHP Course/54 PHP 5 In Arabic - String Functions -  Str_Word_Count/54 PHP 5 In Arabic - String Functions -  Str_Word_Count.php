<!--  54 PHP 5 In Arabic - String Functions -  Str_Word_Count   --> 
<?php
    $lessonName  ='String Functions - Str_Word_Count';
    $title = '54 PHP5 - ' . $lessonName;
    $css = '54 PHP 5 In Arabic - String Functions -  Str_Word_Count.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable with special symbol:  
        $str = "I Love PHP So Much" ;
                        
    // =================================================================================    
    // (*) => First Example => String Functions -  {str_word_count(string variable/text value , Default Format , Default charlist)} Method : contains (1) Exps : 
    
        // (a) => {Default str_word_count()} Method :
        
            $ha1 = "{str_word_count()} Default Method :{Counting the string words without using the advaced feature [ Default Format || Default charlist]} as following: " ; 
            
            // // printing the main string variable  :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";                                    
            
            // // Printing  [Default words default count]:
            // echo "The String Variable's words [default count] = " . "<br>" . str_word_count($str);                                     
            
            // echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                        
    //   ====================================================================================
    
    // (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : contains (3) Exps : 

        // (a) => {Default str_word_count(string , customized format[0]:Single count value) , default} Method :

            $hb1 = "Default {str_word_count()} [Default Format(0) : Single count value] Method :{Counting the string words with using one of the advaced features [ Customized Format(0) || Default charlist]} as following: " ; 
                    
            // // printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format]:
            // echo "The String Variable's words [Advanced words count - advanced Format(0) : Single count value] = " . "<br>" . str_word_count($str, 0) . "<br>"; 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (b) => {Advanced str_word_count(string , customized format[1] : count in indexed array) , default} Method :

            $hb2 = "Advanced {str_word_count()} [Advanced Format(1) : count in indexed array]  Method :{Counting the string words with using one of the advanced features [ Customized Format(1) || Default charlist]} as following: " ; 
                    
            // // Printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format(1) : count in indexed array]:
            // echo "The String Variable's words [Advanced words count - advanced Format(1): count in indexed array ] = " . "<br>" . print_r(str_word_count($str, 1)) . "<br>"; 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (c) => {Advanced str_word_count(string , customized format[2] : count in Associative array) , default} Method :

            $hb3 = "Advanced {str_word_count()} [Advanced Format(2) : count in Associative array]  Method :{Counting the string words with using one of the advaced features [ Customized Format(2) || Default charlist]} as following: " ; 
                    
            // // printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format(2) : count in Associative array]:
            // echo "The String Variable's words [Advanced words count - advanced Format(2) : count in Associative array ] = " . "<br>" . print_r(str_word_count($str, 2)) . "<br>"; 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
                                               
    // =================================================================================        
    
    // (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method : contains (3) Exps : 

        // (a) => {Default str_word_count(string , customized format[0] : count in single value , customized charlist("&")) } Method :

            $hc1 = "Default {str_word_count()} [advanced Format(0): count in single value && customized('&')] Method :{Counting the string words with using one of the advaced features [Customized Format(0) || Default charlist] } as following: " ; 
                    
            // // printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format(0): count in single value  && customized("&") ]:
            // echo "The String Variable's words [Advanced words count - advanced Format(0): count in single value  && customized('&') ] = " . "<br>" . str_word_count($str, 0, "&"); 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (b) => {Default str_word_count(string , customized format[1]: count in Indexed array , customized charlist("&")) } Method :

            $hc2 = "Advanced {str_word_count()} [advanced Format(1): count in indexed array && customized('&') ] Method :{Counting the string words with using one of the advanced features [ Customized Format(1) || Default charlist]} as following: " ; 
                    
            // // printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format(1): count in Indexed array && customized('&')]:
            // echo "The String Variable's words [Advanced words count - advanced Format(1): count in Indexed array && customized('&') ] = " . "<br>" . print_r(str_word_count($str, 1, "&")) . "<br>"; 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (c) => {Default str_word_count(string , customized format[2]: count in Associative array , customized charlist("&")) } Method :

            $hc3 = "Advanced {str_word_count()} [Advanced Format(2): count in Associative array && customized('&')]  Method :{Counting the string words with using one of the advaced features [ Customized Format(2) || Customized Charlist('&')]} as following: " ; 
                    
            // // printing the string variable :
            // echo "The main string variable is " .  "<br>" . $str;
            // echo "<br>" . "<br>";
            
            // // Printing  [Advanced words count - advanced Format(2): count in Associative array && customized('&')]:
            // echo "The String Variable's words [Advanced words count - advanced Format(2): count in Associative array && customized('&') ] = " . "<br>" . print_r(str_word_count($str, 2 , "&")) . "<br>"; 
            
            // echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                                                                       
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
            
            <!-- (*) =>  First Example => String Functions -  {str_word_count(string variable/text value , Default Format , Default charlist)} Method : contains (1) Exps :  -->
                    <!-- (a) => {Default str_word_count()} Method  -->

                        <header>                                
                            (*) =>  First Example => String Functions -  {str_word_count(string variable/text value , Default Format , Default charlist)} Method : contains (1) Exps : <br>
                                <span class="one"></span> (a) => {Default str_word_count()} Method  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                                                 
                                $ha1 = "{str_word_count()} Default Method :{Counting the string words without using the advaced feature [ Default Format || Default charlist]} as following: " ; 
            
                                // printing the main string variable  :
                                echo "The main string variable is " .  "<br>" . $str;
                                echo "<br>" . "<br>";                                    
                                
                                // Printing  [Default words default count]:
                                echo "The String Variable's words [default count] = " . "<br>" . str_word_count($str);                                     
                                
                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : contains (3) Exps   -->
                    <!-- (a) => {Default str_word_count(string , customized format[0]:Single count value) , default} Method  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : contains (3) Exps : <br>
                                <span class="one"></span> (a) => {Default str_word_count(string , customized format[0]:Single count value) , default} Method  :
                        </header>                                    
                         
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                            <?php                                                                                                 
                                $hb1 = "Default {str_word_count()} [Default Format(0) : Single count value] Method :{Counting the string words with using one of the advaced features [ Customized Format(0) || Default charlist]} as following: " ; 
                    
                                // printing the string variable :
                                echo "The main string variable is " .  "<br>" . $str;
                                echo "<br>" . "<br>";
                                
                                // Printing  [Advanced words count - advanced Format]:
                                echo "The String Variable's words [Advanced words count - advanced Format(0) : Single count value] = " . "<br>"; 
                                
                                echo "<pre>";
                                echo str_word_count($str, 0);
                                echo "</pre>";
                                echo "<br>" . "<br>" . "----------------------------------" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : -->
                    <!--  (b) => {Advanced str_word_count(string , customized format[1] : count in indexed array) , default} Method :  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : <br>
                                <span class="one"></span>  (b) => {Advanced str_word_count(string , customized format[1] : count in indexed array) , default} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                            <?php                                                                                                                                     
                    
                                // Printing the string variable :
                                    echo "The main string variable is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                // Printing  [Advanced words count - advanced Format(1) : count in indexed array]:
                                    echo "The String Variable's words [Advanced words count - advanced Format(1): count in indexed array ] = " . "<br>"; 

                                    echo "<pre>";
                                    print_r(str_word_count($str, 1)) . "<br>";
                                    echo "</pre>";

                                    echo "<br>" . "<br>" . "----------------------------------" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : -->
                    <!--  (c) => {Advanced str_word_count(string , customized format[2] : count in Associative array) , default} Method   -->

                        <header>                                
                            (*) => Second Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0, 1, 2] , charlist)} Method : <br>
                                <span class="one"></span> (c) => {Advanced str_word_count(string , customized format[2] : count in Associative array) , default} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable :
                                    echo "The main string variable is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    // Printing  [Advanced words count - advanced Format(2) : count in Associative array]:
                                    echo "The String Variable's words [Advanced words count - advanced Format(2) : count in Associative array ] = " . "<br>"; 
                        
                                    echo "<pre>";
                                    print_r(str_word_count($str, 2)) . "<br>";
                                    echo "</pre>";
                                    echo "<br>" . "<br>" . "----------------------------------" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method : contains (3) Exps:  -->
                     <!--  (a) => {Default str_word_count(string , customized format[0] : count in single value , customized charlist("&")) } Method :  -->
                        <header>                                
                            (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method : <br>
                                <span class="one"></span> (a) => {Default str_word_count(string , customized format[0] : count in single value , customized charlist("&")) } Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                            
                                <?php                                     
                                    $hc2 = "Advanced {str_word_count()} [advanced Format(1): count in indexed array && customized('&') ] Method :{Counting the string words with using one of the advanced features [ Customized Format(1) || Default charlist]} as following: " ; 
                    
                                    // printing the string variable :
                                    echo "The main string variable is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    // Printing  [Advanced words count - advanced Format(1): count in Indexed array && customized('&')]:
                                    echo "The String Variable's words [Advanced words count - advanced Format(1): count in Indexed array && customized('&') ] = " . "<br>" . str_word_count($str, 0, "&") . "<br>"; 
                                    
                                    echo "<br>" . "<br>" . "----------------------------------" ; 
                        
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method :   -->
                     <!--  (b) => {Default str_word_count(string , customized format[1]: count in Indexed array , customized charlist("&")) } Method : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  => <br>
                                <span class="one"></span>  (b) => {Default str_word_count(string , customized format[1]: count in Indexed array , customized charlist("&")) } Method:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                            
                                <?php                                     
                                    // printing the string variable :
                                        echo "The main string variable is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        // Printing  [Advanced words count - advanced Format(1): count in Indexed array && customized('&')]:
                                        echo "The String Variable's words [Advanced words count - advanced Format(1): count in Indexed array && customized('&') ] = " . "<br>"; 
                                        
                                        echo "<pre>";
                                        print_r(str_word_count($str, 1, "&")) . "<br>";
                                        echo "</pre>";
                                        
                                        echo "<br>" . "<br>" . "----------------------------------" ; 
                                                    
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method :  -->
                     <!--  (c) => {Default str_word_count(string , customized format[2]: count in Associative array , customized charlist("&")) } Method : -->
                        <header>                                
                            (*) => Third Example => String Functions -  {str_word_count(string variable/text value , Customized Format[0 , 1 , 2] , charlist[""])} Method :  => <br>
                                <span class="one"></span> (c) => {Default str_word_count(string , customized format[2]: count in Associative array , customized charlist("&")) } Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc3 ?>  </h1>  
                            
                                <?php                                     
       
                                    // printing the string variable :
                                        echo "The main string variable is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                    
                                    // Printing  [Advanced words count - advanced Format(2): count in Associative array && customized('&')]:
                                        echo "The String Variable's words [Advanced words count - advanced Format(2): count in Associative array && customized('&') ] = " . "<br>"; 
                         
                                        echo "<pre>";
                                        print_r(str_word_count($str, 2 , "&")) . "<br>";
                                        echo "</pre>";
                                                                                
                                        echo "<br>" . "<br>" . "----------------------------------" ; 
                                            
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->        
                                                    
            <!-- ================================================================================= -->                                                    
            <!-- ---------------------------------------------------------- -->                                                                    
            <!-- ============================================================================= -->
            </section>
                                                                    
         </body>
</html>