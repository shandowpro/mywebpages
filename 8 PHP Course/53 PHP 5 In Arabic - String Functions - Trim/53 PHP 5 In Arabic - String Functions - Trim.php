<!--  53 PHP 5 In Arabic - String Functions - Trim   --> 
<?php
    $lessonName  ='String Functions - Trim';
    $title = '53 PHP5 - ' . $lessonName;
    $css = '53 PHP 5 In Arabic - String Functions - Trim.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable with special symbol:  
        $str = "     Hello I Love PHP So Much    " ;
        $strR = "Hello I Love PHP So Much    " ;
        $strL = "    Hello I Love PHP So Much" ;                
                        
    // =================================================================================    
    // (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : contains (4) Exps : 
                            
        // (a) => {Default Trim()} Method :
                                    
            $ha1 = "{trim()} Default Method :{Trim the string without using the charlist advaced feature} as following: " ; 
                 
                // // printing the string variable [Before] {Default Trim} :
                //     echo "The string variable & [Before] {Dafault Trim} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                        
                // // Processing [Default Trim]:
                //     $TrimD = trim($str);
                                
                // // printing the string variable || Datatype || String Letter count [After] {Default Trim} :
                //     echo "The string variable [After] {Default Trim} is " .  "<br>" . $TrimD;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($TrimD);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
        // (b) => {Advanced Trim()} [Trim from Front] Method :
                                    
            $ha2 = "{trim()} Advanced [Trim from Front] Method :{Trim the string with using the charlist advaced feature 1} as following: " ; 
                 
                // // printing the string variable [Before] {Advanced Trim - Letter form front} :
                //     echo "The string variable & [Before] {Advanced Trim - Letter form front} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                                        
                // // Processing [Default Trim] - advanced :
                //     $TrimAF = trim($str, "I Lo");
                                
                // // printing the string variable || Datatype || String Letter count [After] {Advanced Trim - Letter form front} :
                //     echo "The Advanced Trimmed - From Front String [After] {Advanced Trim - Letter form front} is " .  "<br>" . $TrimAF;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Advanced Trimmed - From Front String [Variable Datatype & Letter count] = " . "<br>". var_dump($TrimAF);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
        
        // (c) => {Advanced Trim()} [Trim from Back] Method :
                                    
            $ha3 = "{trim()} Advanced [Trim from Back] Method :{Trim the string with using the charlist advaced feature 2} as following: " ; 
                 
                // // printing the string variable [Before] {Advanced Trim - Letter form Back} :
                //     echo "The string variable & [Before] {Advanced Trim - Letter form Back} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                                        
                // // Processing [Default Trim] - advanced:
                //     $TrimAB = trim($str, "Much");
                                
                // // printing the string variable || Datatype || String Letter count [After] {Advanced Trim - Letter form Back} :
                //     echo "The Advanced Trimmed - From Back String [After] {Advanced Trim - Letter form Back} is " .  "<br>" . $TrimAB;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Advanced Trimmed - From Back String Variable Datatype & Letter count = " . "<br>" . var_dump($TrimAB);                    
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        

        // (d) => {Advanced Trim()} [Trim from Both Sides] Method :                                    
            $ha4 = "{trim()} Advanced [Trim from Both Sides] Method :{Trim the string with using the charlist advaced feature 2} as following: " ; 
                 
                // // printing the string variable [Before] {Advanced Trim - Letter form Both Sides} :
                //     echo "The string variable & [Before] {Advanced Trim - Letter form Both Sides} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                // // Processing [Default Trim]- advanced:
                //     $TrimABoth = trim($str, "I LoMuch");
                
                                
                // // printing the string variable || Datatype || String Letter count [After] {Advanced Trim - Letter form Both Sides} :
                //     echo "The Advanced Trimmed - From Back String [After] {Advanced Trim - Letter form Both Sides} is " .  "<br>" . $TrimABoth;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Advanced Trimmed - From Back String Variable Datatype & Letter count = " . "<br>" . var_dump($TrimABoth);                    
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================    
   
    // (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method : contains (4) Exps : 
                            
        // (a) => {Default rTrim()} Method :
                                    
            $hb1 = "{rtrim()} Default Method :{Right Trim the string (without) using the charlist advaced feature} as following: " ; 
                 
                // // printing the string variable [Before] {Default Right Trim} :
                //     echo "The string variable & [Before] {Dafault Right Trim} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                        
                // // Processing [Default Right Trim] :
                //     $rTrimD = rtrim($str);
                                
                // // printing the string variable || Datatype || String Letter count [After] {Default Right Trim} :
                //     echo "The string variable [After] {Default Right Trim} is " .  "<br>" . $rTrimD;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Right Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($rTrimD);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
        
        // (b) => {Default lTrim()} Method :
                                    
            $hb2 = "{ltrim()} Default Method :{Left Trim the string (without) using the charlist advaced feature} as following: " ; 
                 
                // // printing the string variable [Before] {Default Left Trim} :
                //     echo "The string variable & [Before] {Dafault Left Trim} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                        
                // // Processing [Default Left Trim]:
                //     $lTrimD = ltrim($str);
                                
                // // printing the string variable || Datatype || String Letter count [After] {Default Left Trim} :
                //     echo "The string variable [After] {Default Left Trim} is " .  "<br>" . $lTrimD;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Left Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($lTrimD);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
        
        // (c) => {Advanced rTrim()} Method :
                                    
            $hb3 = "{rtrim()} Advanced Method :{Right Trim the string (with) using the charlist advanced feature} as following: " ; 
                 
                // // printing the string variable [Before] {Advanced Right Trim} :
                //     echo "The string variable & [Before] {Advanced Right Trim} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                        
                // // Processing [Adavnced Right Trim]:
                //     $rTrimA = rtrim($str , "I Lo");
                                
                // // printing the string variable || Datatype || String Letter count [After] {Advanced Right Trim} :
                //     echo "The string variable [After] {Advanced Right Trim} is " .  "<br>" . $rTrimA;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Right Advanced Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($rTrimA);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
        
        // (d) => {Advanced lTrim()} Advanced Method :
                                    
            $hb4 = "{ltrim()} Advanced Method :{Left Trim the string (with) using the charlist advaced feature} as following: " ; 
                 
                // // printing the string variable [Before] {Advanced Left Trim} :
                //     echo "The string variable & [Before] {Advanced Left Trim} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                    
                //     echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                        
                // // Processing [Advanced Left Trim]:
                //     $lTrimA = ltrim($str, "Much");
                                
                // // printing the string variable || Datatype || String Letter count [After] {Advanced Left Trim} :
                //     echo "The string variable [After] {Advanced Left Trim} is " .  "<br>" . $lTrimA;
                //     echo "<br>" . "<br>";
                    
                //     echo "The Left Advanced Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($lTrimA);            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
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
            
            <!-- (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : contains (4) Exps  -->
                    <!-- // (a) => {Default Trim()} Method :  -->

                        <header>                                
                            (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : contains (4) Exps : <br>
                                <span class="one"></span> // (a) => {Default Trim()} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                                                 
                                // printing the string variable [Before] {Default Trim} :
                                    echo "The string variable & [Before] {Dafault Trim} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                                        
                                // Processing [Default Trim]:
                                    $TrimD = trim($str);
                                                
                                // printing the string variable [After] {Default Trim} :
                                    echo "The string variable [After] {Default Trim} is " .  "<br>" . $TrimD;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($TrimD);            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : contains (4) Exps  -->
                    <!-- // (b) => {Advanced Trim()} [Trim from Front] Method :  -->

                        <header>                                
                            (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : <br>
                                <span class="one"></span> (b) => {Advanced Trim()} [Trim from Front] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable [Before] {Advanced Trim - Letter form front} :
                                    echo "The string variable & [Before] {Advanced Trim - Letter form front} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                                                        
                                // Processing [Default Trim]:
                                    $TrimAF = trim($str, "I Lo");
                                                
                                // printing the string variable [After] {Advanced Trim - Letter form front} :
                                    echo "The Advanced Trimmed - From Front String [After] {Advanced Trim - Letter form front} is " .  "<br>" . $TrimAF;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The Advanced Trimmed - From Front String [Variable Datatype & Letter count] = " . "<br>". var_dump($TrimAF);            
                                    echo "<br>" . "<br>" . "----------------------------------" ;                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : -->
                    <!--  (c) => {Advanced Trim()} [Trim from Back] Method :  -->

                        <header>                                
                            (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : <br>
                                <span class="one"></span>  (c) => {Advanced Trim()} [Trim from Back] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable [Before] {Advanced Trim - Letter form front} :
                                    echo "The string variable & [Before] {Advanced Trim - Letter form front} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                                                        
                                // Processing [Default Trim]:
                                    $TrimAF = trim($str, "I Lo");
                                                
                                // printing the string variable [After] {Advanced Trim - Letter form front} :
                                    echo "The Advanced Trimmed - From Front String [After] {Advanced Trim - Letter form front} is " .  "<br>" . $TrimAF;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The Advanced Trimmed - From Front String [Variable Datatype & Letter count] = " . "<br>". var_dump($TrimAF);            
                                    echo "<br>" . "<br>" . "----------------------------------" ;                                    
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : -->
                    <!--  (d) => {Advanced Trim()} [Trim from Both Sides] Method :  -->

                        <header>                                
                            (*) => First Example => String Functions -  {trim(string variable/text value, charlist)} Method : <br>
                                <span class="one"></span> (d) => {Advanced Trim()} [Trim from Both Sides] Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha4 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable [Before] {Advanced Trim - Letter form Both Sides} :
                                    echo "The string variable & [Before] {Advanced Trim - Letter form Both Sides} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str) . "<br>";
                                                        
                                // Processing [Default Trim]:
                                    $TrimABoth = trim($str, "I LoMuch");
                                                
                                // printing the string variable [After] {Advanced Trim - Letter form Both Sides} :
                                    echo "The Advanced Trimmed - From Back String [After] {Advanced Trim - Letter form Both Sides} is " .  "<br>" . $TrimABoth;
                                    echo "<br>" . "<br>";
                                    
                                    echo "The Advanced Trimmed - From Back String Variable Datatype & Letter count = " . "<br>" . var_dump($TrimABoth);                    
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            

            <!-- (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method : contains (4) Exps :  -->
                     <!--  (a) => {Default rTrim()} Method : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  => <br>
                                <span class="one"></span>  (a) => {Default rTrim()} Method : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                            
                                <?php                                     
                                    // printing the string variable [Before] {Default Right Trim} :
                                        echo "The string variable & [Before] {Dafault Right Trim} is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                                            
                                    // Processing [Default Right Trim]:
                                        $rTrimD = rtrim($str);
                                                    
                                    // printing the string variable [After] {Default Right Trim} :
                                        echo "The string variable [After] {Default Right Trim} is " .  "<br>" . $rTrimD;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The Right Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($rTrimD);            
                                        echo "<br>" . "<br>" . "----------------------------------" ;
                        
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  -->
                     <!--  (b) => {Default lTrim()} Method : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  => <br>
                                <span class="one"></span>  (b) => {Default lTrim()} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                            
                                <?php                                     
                                    // printing the string variable [Before] {Default Left Trim} :
                                        echo "The string variable & [Before] {Dafault Left Trim} is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                                            
                                    // Processing [Default Left Trim]:
                                        $lTrimD = ltrim($str);
                                                    
                                    // printing the string variable [After] {Default Left Trim} :
                                        echo "The string variable [After] {Default Left Trim} is " .  "<br>" . $lTrimD;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The Left Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($lTrimD);            
                                        echo "<br>" . "<br>" . "----------------------------------" ;
                        
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  -->
                     <!--  // (c) => {Advanced rTrim()} Method : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  => <br>
                                <span class="one"></span>  // (c) => {Advanced rTrim()} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                            
                                <?php                                     
                                    // printing the string variable [Before] {Advanced Right Trim} :
                                        echo "The string variable & [Before] {Advanced Right Trim} is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                                            
                                    // Processing [Default Right Trim]:
                                        $rTrimA = rtrim($str , "I Lo");
                                                    
                                    // printing the string variable [After] {Advanced Right Trim} :
                                        echo "The string variable [After] {Advanced Right Trim} is " .  "<br>" . $rTrimA;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The Right Advanced Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($rTrimA);            
                                        echo "<br>" . "<br>" . "----------------------------------" ;
                                            
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {trim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  -->
                     <!-- (d) => {Advanced lTrim()} Advanced Method : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {rtrim(string variable/text value, charlist)} || {ltrim(string variable/text value, charlist)} Method :  => <br>
                                <span class="one"></span> (d) => {Advanced lTrim()} Advanced Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb4 ?>  </h1>  
                            
                                <?php                                     
                                    // printing the string variable [Before] {Advanced Left Trim} :
                                        echo "The string variable & [Before] {Advanced Left Trim} is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The String Variable Datatype & Letter count = " . "<br>" . var_dump($str);
                                                            
                                    // Processing [Advanced Left Trim]:
                                        $lTrimA = ltrim($str, "Much");
                                                    
                                    // printing the string variable [After] {Advanced Left Trim} :
                                        echo "The string variable [After] {Advanced Left Trim} is " .  "<br>" . $lTrimA;
                                        echo "<br>" . "<br>";
                                        
                                        echo "The Left Advanced Trimmed String Variable Datatype & Letter count = " . "<br>" . var_dump($lTrimA);
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