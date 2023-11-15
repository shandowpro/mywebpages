<!--  56 PHP 5 In Arabic - String Functions - StrPos, StriPos, StrrPos , StrriPos   --> 
<?php
    $lessonName  ='String Functions - StrPos, StriPos, StrrPos , StrriPos ';
    $title = '56 PHP5 - ' . $lessonName;
    $css = '56 PHP 5 In Arabic - String Functions - StrPos, StriPos, StrrPos.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        $str = "I love PHP so much because PHP is Famous and cool language" ;                        
    // =================================================================================    

    
    // (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : contains (3) Exps : 
    
        // (a) => {Default strpos(String, find)} Method [Default Starting index] || [Sensitive] || [Search From left to right] :
        
            $ha1 = "{strpos(String, find)} Default Method : [Default Starting index] || [Sensitive] || [Search From left to right] as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the index of certian Text] :
            //     $index11 = strpos($str, "PHP");
            
            // // Printing the main [Searched text's Index] :
            //     echo "The [Searched text Index] by [Default Starting index] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                
            //     echo $index11;            

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        // (b) => {Advanced strpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From left to right] :
        
            $ha2 = "{strpos(String, find, offset)} Advanced Method : [Customized Starting index] || [sensitive] || [Search From left to right] - first exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the index certian Text] :
            //     $index12 = strpos($str, "PHP", 7);
            
            // // Printing the main [Searched text Index] :
            //     echo "The [Searched text Index] by [Customized Starting index (7)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
            
            //     echo $index12;            

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        
        // ---------------------------------------------                                                                
        // (c) => {Advanced strpos(String, find, offset)} Method - second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From left to right] :
        
            $ha3 = "{strpos(String, find, offset)} Advanced Method : [Customized Starting index - Negative] || [Sensitive] || [Search From left to right] - second exp as following: " ; 
            
            // // Printing the main string before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
                
            // // Processing [Searching for the index certian Text] :
            //     $index13 = strpos($str, "PHP", -10);
            
            // // Printing the main [Searched text Index] :
            //     echo "The [Searched text Index] by [Customized Starting index - Negative (-10)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                
            //     echo $index13;            
    
            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;                        
    //   ====================================================================================
    

    // (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method  : contains (3) Exps : 

        // (a) => {Default stripos(String, find)} Method [Searching for the certain Text index [Default Starting index (0)] || [InSensitive] || [Search From left to right] :
         
            $hb1 = "{stripos(String, find)} Default Method : [Searching for the certain Text index [Default Starting index (0)] || [InSensitive] || [Search From left to right] as following: " ; 
                
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the index certian Text] :
            //     $index21 = stripos($str, "Php");
            
            // // Printing the main [Searched text Index] :
            //     echo "The [Searched text Index] by [Default Starting index (0)] || [InSensitive] || [Search From left to right] = " . "<br>" ;
            
            //     echo $index21; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {Advanced stripos(String, find, offset)} Method - first adv exp [Searching for the certain Text index [Customized Starting index] || [InSensitive] || [Search From left to right] :
    
            $hb2 = "{stripos(String, find, offset)} Advanced Method : [Customized Starting index] || [InSensitive] || [Search From left to right] - first exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    

            // // Processing [Searching for the index certian Text] :
            //     $index22 = stripos($str, "Php", 7);

            // // Printing the main [Searched text Index] :
            //     echo "The [Searched text Index] by [Customized Starting index (7)] || [InSensitive] || [Search From left to right] = " . "<br>" ;

            //     echo $index22; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
        // ---------------------------------------------                                          
                                      
        // (c) => {Advanced stripos(String, find, offset)} Method - second adv exp [Searching for the certain Text index [Customized Starting index - Negative] || [InSensitive] || [Search From left to right (Reversely)] :
    
            $hb3 = "{stripos(String, find, offset)} Advanced Method : [Searching for the certain Text index [Customized Starting index - Negative] || [InSensitive] || [Search From left to right] - second exp as following: " ; 

            // // Printing the main string before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
                
            // // Processing [Searching for the index certian Text] :
            //     $index23 = stripos($str, "Php", -30);
            
            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Customized Starting index - Negative (-30)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                
            //     echo $index23;            
    
            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
    // ---------------------------------------------                                                                
    // =================================================================================        
    
    
    // (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method  : contains (3) Exps : 

        // (a) => {Default strrpos(String, find)} Method [Default Starting index (0)] || [Sensitive] || [Search From right to left (Reversely)] :
        
            $hc1 = "{strrpos(String, find)} Default Method : [Default Starting index (0)] || [Sensitive] || [Search From right to left (Reversely)] as following: " ; 
                
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the index certian Text] :
            //     $index31 = strrpos($str, "PHP");
            
            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Default Starting index (0)] || [Sensitive] || [Search From left to right (Reversely)] = " . "<br>" ;
            
            //     echo $index31; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {Advanced strrpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From Right to Left (Reversely)] :
    
            $hc2 = "{strrpos(String, find, offset)} Advanced Method : [Searching for the certain Text index by [Customized Starting index] || [Sensitive] || [Search From right to left (Reversely)] - first exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    

            // // Processing [Searching for the index certian Text] :
            //     $index32 = strrpos($str, "PHP", 7);

            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Customized Starting index (7)] || [Sensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

            //     echo $index32; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
        // ---------------------------------------------                                                                
        
        // (c) => {Advanced strrpos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From Right to Left (Reversely)]  :
    
            $hc3 = "{strrpos(String, find, offset)} Advanced Method : [Searching for the certain Text index by [Customized Starting index] || [Sensitive] || [Search From Right to Left (Reversely)] - second exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    

            // // Processing [Searching for the index certian Text] :
            //     $index33 = strrpos($str, "PHP", -44);

            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Customized Starting index - Negative (-44)] || [Sensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

            //     echo $index33; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
        // ---------------------------------------------                                                                        
    // =================================================================================        


    // (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : contains (3) Exps : 

        // (a) => {Default strripos(String, find)} Method [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)] :        
            $hd1 = "{strripos(String, find)} Default Method : [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)] as following: " ; 
                
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    
            
            // // Processing [Searching for the index certian Text] :
            //     $index41 = strripos($str, "Php");
            
            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Default Starting index (0)] || [InSensitive] || [Search From left to right (Reversely)] = " . "<br>" ;
            
            //     echo $index41; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    
        // (b) => {Advanced strrpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [InSensitive] || [Search From Right to Left (Reversely)] :

            $hd2 = "{strripos(String, find, offset)} Advanced Method : [Searching for the certain Text index by [Customized Starting index] || [InSensitive] || [Search From right to left (Reversely)] - first exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    

            // // Processing [Searching for the index certian Text] :
            //     $index42 = strripos($str, "Php", 7);

            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Customized Starting index (7)] || [InSensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

            //     echo $index42; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
        // ---------------------------------------------                                                                
    
        // (c) => {Advanced strripos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [InSensitive] || [Search From Right to Left (Reversely)]  :

            $hd3 = "{strripos(String, find, offset)} Advanced Method : [Searching for the certain Text index by [Customized Starting index - Negative] || [InSensitive] || [Search From Right to Left (Reversely)] - second exp as following: " ; 
            
            // // Printing the main string variables before [Searching for the index certian Text]  :
            //     echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";                                    

            // // Processing [Searching for the index certian Text] :
            //     $index43 = strripos($str, "Php", -44);

            // // Printing the main [Searched text Index]:
            //     echo "The [Searched text Index] by [Customized Starting index - Negative (-44)] || [InSensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

            //     echo $index43; 

            //     echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
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
            
            <!-- (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : contains (3) Exps : -->
                    <!-- (a) => {Default strpos(String, find)} Method [Default Starting index] || [Sensitive] || [Search From left to right]  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method  : <br>
                                <span class="one"></span> (a) => {Default strpos(String, find)} Method => [Default Starting index] || [Sensitive] || [Search From left to right] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the index of certian Text] :
                                    $index11 = strpos($str, "PHP");
                                
                                // Printing the main [Searched text's Index]:
                                    echo "The [Searched text Index] by [Default Starting index] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                                    
                                    echo $index11;            
                    
                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : -->
                    <!-- (b) => {Advanced strpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From left to right]  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (b) => {Advanced strpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From left to right] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the index certian Text] :
                                    $index12 = strpos($str, "PHP", 7);
                                
                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Customized Starting index (7)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                                
                                    echo $index12;            

                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method  : -->
                    <!-- (c) => {Advanced strpos(String, find, offset)} Method - second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From left to right]  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (c) => {Advanced strpos(String, find, offset)} Method - second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From left to right] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing the main string before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                    
                                // Processing [Searching for the index certian Text] :
                                    $index13 = strpos($str, "PHP", -10);
                                
                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Customized Starting index - Negative (-10)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                                    
                                    echo $index13;            
                        
                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method  : contains (3) Exps : -->
                    <!-- (a) => {Default stripos(String, find)} Method [Searching for the certain Text index [Default Starting index (0)] || [InSensitive] || [Search From left to right]  -->

                        <header>                                
                            (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method  : <br>
                                <span class="one"></span> (a) => {Default stripos(String, find)} Method [Searching for the certain Text index [Default Starting index (0)] || [InSensitive] || [Search From left to right] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the index certian Text] :
                                    $index21 = stripos($str, "Php");
                                
                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Default Starting index (0)] || [InSensitive] || [Search From left to right] = " . "<br>" ;
                                
                                    echo $index21; 

                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;                                                                                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method : -->
                    <!-- (b) => {Advanced stripos(String, find, offset)} Method - first adv exp [Searching for the certain Text index [Customized Starting index] || [InSensitive] || [Search From left to right]  -->

                        <header>                                
                            (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (b) => {Advanced stripos(String, find, offset)} Method - first adv exp [Searching for the certain Text index [Customized Starting index] || [InSensitive] || [Search From left to right]:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                            
                            // Printing the main string variables before [Searching for the index certian Text]  :
                                echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                echo "<br>" . "<br>";                                    

                            // Processing [Searching for the index certian Text] :
                                $index22 = stripos($str, "Php", 7);

                            // Printing the main [Searched text Index]:
                                echo "The [Searched text Index] by [Customized Starting index (7)] || [InSensitive] || [Search From left to right] = " . "<br>" ;

                                echo $index22; 

                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method : -->
                    <!-- (c) => {Advanced stripos(String, find, offset)} Method - second adv exp [Searching for the certain Text index [Customized Starting index - Negative] || [InSensitive] || [Search From left to right (Reversely)] Method -->

                        <header>                                
                            (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (c) => {Advanced stripos(String, find, offset)} Method - second adv exp [Searching for the certain Text index [Customized Starting index - Negative] || [InSensitive] || [Search From left to right (Reversely)] Method:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                                               

                            // Printing the main string before [Searching for the index certian Text]  :
                                echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                echo "<br>" . "<br>";                                    
                                
                            // Processing [Searching for the index certian Text] :
                                $index23 = stripos($str, "Php", -30);
                            
                            // Printing the main [Searched text Index]:
                                echo "The [Searched text Index] by [Customized Starting index - Negative (-30)] || [Sensitive] || [Search From left to right] = " . "<br>" ;
                                
                                echo $index23;            
                    
                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;                                                                            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method  : contains (3) Exps -->
                    <!-- (a) => {Default strrpos(String, find)} Method [Default Starting index (0)] || [Sensitive] || [Search From right to left (Reversely)]   -->

                        <header>                                
                            (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (a) => {Default strrpos(String, find)} Method [Default Starting index (0)] || [Sensitive] || [Search From right to left (Reversely)] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                                // Processing [Searching for the index certian Text] :
                                    $index31 = strrpos($str, "PHP");
                                
                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Default Starting index (0)] || [Sensitive] || [Search From left to right (Reversely)] = " . "<br>" ;
                                
                                    echo $index31; 

                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method : -->
                    <!-- (b) => {Advanced strrpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From Right to Left (Reversely)]   -->

                        <header>                                
                            (*) => Second Example => String Functions - {stripos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span>  (b) => {Advanced strrpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [Sensitive] || [Search From Right to Left (Reversely)] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                            
                            // Printing the main string variables before [Searching for the index certian Text]  :
                                echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                echo "<br>" . "<br>";                                    

                            // Processing [Searching for the index certian Text] :
                                $index32 = strrpos($str, "PHP", 7);

                            // Printing the main [Searched text Index]:
                                echo "The [Searched text Index] by [Customized Starting index (7)] || [Sensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

                                echo $index32; 

                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method : -->
                    <!-- (c) => {Advanced strrpos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From Right to Left (Reversely)] Method -->

                        <header>                                
                            (*) => Third Example => String Functions - {strrpos(string variable/text value , find, offset)} Method : <br>
                                <span class="one"></span> (c) => {Advanced strrpos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [Sensitive] || [Search From Right to Left (Reversely)] Method:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                                               

                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    

                                // Processing [Searching for the index certian Text] :
                                    $index33 = strrpos($str, "PHP", -44);

                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Customized Starting index - Negative (-44)] || [Sensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

                                    echo $index33; 

                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : contains (3) Exps -->
                    <!-- (a) => {Default strripos(String, find)} Method [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)]a) => {Default strripos(String, find)} Method [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)]  -->

                        <header>                                
                            (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : contains (3) Exps Method : <br>
                                <span class="one"></span> (a) => {Default strripos(String, find)} Method [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)]a) => {Default strripos(String, find)} Method [Default Starting index (0)] || [InSensitive] || [Search From right to left (Reversely)] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                            // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    
                                
                            // Processing [Searching for the index certian Text] :
                                $index41 = strripos($str, "Php");
                            
                            // Printing the main [Searched text Index]:
                                echo "The [Searched text Index] by [Default Starting index (0)] || [InSensitive] || [Search From left to right (Reversely)] = " . "<br>" ;
                            
                                echo $index41; 

                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : -->
                    <!-- (b) => {Advanced strripos(String, find, offset)} Method - first adv exp [Customized Starting index] || [InSensitive] || [Search From Right to Left (Reversely)] -->

                        <header>                                
                            (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : contains (3) Exps Method : <br>
                                <span class="one"></span> (b) => {Advanced strrpos(String, find, offset)} Method - first adv exp [Customized Starting index] || [InSensitive] || [Search From Right to Left (Reversely)]  Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd2 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                            // Printing the main string variables before [Searching for the index certian Text]  :
                                echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                echo "<br>" . "<br>";                                    

                            // Processing [Searching for the index certian Text] :
                                $index42 = strripos($str, "Php", 7);

                            // Printing the main [Searched text Index]:
                                echo "The [Searched text Index] by [Customized Starting index (7)] || [InSensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

                                echo $index42; 

                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method  : -->
                    <!-- (c) => {Advanced strripos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [InSensitive] || [Search From Right to Left (Reversely)] -->

                        <header>                                
                            (*) => Fourth Example => String Functions - {strripos(string variable/text value , find, offset)} Method: <br>
                                <span class="one"></span> (c) => {Advanced strripos(String, find, offset)} Method - Second adv exp [Customized Starting index - Negative] || [InSensitive] || [Search From Right to Left (Reversely)]  Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd3 ?>  </h1>  
                                                            
                            <?php                                                                                                                               
                                // Printing the main string variables before [Searching for the index certian Text]  :
                                    echo "The main string before [Searching for the index of certian Text] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";                                    

                                // Processing [Searching for the index certian Text] :
                                    $index43 = strripos($str, "Php", -44);

                                // Printing the main [Searched text Index]:
                                    echo "The [Searched text Index] by [Customized Starting index - Negative (-44)] || [InSensitive] || [Search From right to left  (Reversely)] = " . "<br>" ;

                                    echo $index43; 

                                    echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->            
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            

            </section>
                                                                    
         </body>
</html>