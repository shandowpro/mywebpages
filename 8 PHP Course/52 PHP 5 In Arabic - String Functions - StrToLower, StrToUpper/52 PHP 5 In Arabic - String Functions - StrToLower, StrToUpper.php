<!--  52 PHP 5 In Arabic - String Functions - StrToLower, StrToUpper   --> 
<?php
    $lessonName  ='String Functions - StrToLower, StrToUpper';
    $title = '52 PHP5 - ' . $lessonName;
    $css = '52 PHP 5 In Arabic - String Functions - StrToLower, StrToUpper.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable with special symbol:  
        $str = "Hello I love PHP so much" ;
                
                        
    // =================================================================================    
    // (*) => First Example => String Functions -  {strtolower(string variable/text value)} Method : contains (1) Exp : 
                            
        // (a) => {Convert all letter to lower case||small letter} :
                                    
            $ha1 = "{strtolower()}  Method :{Convert all letter to lower case||small letter} as following: " ; 
                 
                // // printing the string variable before {Convert all letter to lower case||small letter} :
                //     echo "The string variable [before] {Convert all letter to lower case||small letter} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing [Convert all letter to lower case||small letter]:
                //     $toLower = strtolower($str);
                                
                // // printing the string variable before {Convert all letter to lower case||small letter} : 
                //     echo "The string variable [after] {Convert all letter to lower case||small letter} is " .  "<br>" . $toLower;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    // =================================================================================    
    // (*) => Second Example => String Functions -  {strtoupper(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => {Convert ALL letter to upper case||capital letter} :
                                    
            $hb1 = "{strtoupper()}  Method :{Convert ALL letter to upper case||Capital letter} as following: " ; 
                 
                // // printing the string variable before {Convert ALL letter to upper case||Capital letter} :
                //     echo "The string variable [before] {Convert ALL letter to upper case||Capital letter} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing [Convert ALL letter to upper case||Capital:
                //     $toUpper = strtoupper($str);
                                
                // // printing the string variable before {Convert ALL letter to upper case||Capital} : 
                //     echo "The string variable [after] {Convert ALL letter to upper case||Capital} is " .  "<br>" . $toUpper;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    // =================================================================================    
    // (*) => Third Example => String Functions -  {lcfirst(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => {Convert First letter of the first word to lower case||Small letter} :
                                    
            $hc1 = "{lcfirst()}  Method :{Convert First letter of the first word to lower case||Small letter} as following: " ; 
                 
                // // printing the string variable before {Convert First letter of the first word to lower case||Small letter} :
                //     echo "The string variable [before] {Convert First letter of the first word to lower case||Small letter} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing {Convert First letter of the first word to lower case||Small letter} :
                //     $lcFirst = lcfirst($str);
                                
                // // printing the string variable before {Convert First letter of the first word to lower case||Small letter} : 
                //     echo "The string variable [after] {Convert First letter of the first word to lower case||Small letter}  is " .  "<br>" . $lcFirst;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    
    // =================================================================================    
    // (*) => Fourth Example => String Functions -  {ucfirst(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => {Convert First letter of the first word to Upper case||Capital letter} :
                                    
            $hd1 = "{ucfirst()}  Method :{Convert First letter of the first word to Upper case||Capital letter} as following: " ; 
                 
                // // printing the string variable before {Convert First letter of each first word to Upper case||Capital letter} :
                //     echo "The string variable [before] {Convert First letter of the first word to Upper case||Capital letter} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing {Convert First letter of the first word to Upper case||Capital letter} :
                //     $UcFirst = ucfirst($str);
                                
                // // printing the string variable before {Convert First letter of the first word to Upper case||Capital letter}  : 
                //     echo "The string variable [after] {Convert First letter of the first word to Upper case||Capital letter}  is " .  "<br>" . $UcFirst;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    
    // =================================================================================    
    // (*) => Fifth Example => String Functions -  {ucwords(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => {Convert the First letter of each word to Upper case||Capitalizing letter} :
                                    
            $he1 = "{ucwords()}  Method :{Convert First letter of each word to Upper case||Capitalizing letter} as following: " ; 
                 
                // // printing the string variable before {Convert First letter of each word to Upper case||Capitalizing letter} :
                //     echo "The string variable [before] {Convert First letter of each word to Upper case||Capitalizing letter} is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing {Convert First letter of each word to Upper case||Capitalizing letter} :
                //     $UcWords = ucwords($str);
                                
                // // printing the string variable after {Convert First letter of each word to Upper case||Capitalizing letter}  : 
                //     echo "The string variable [after] {Convert First letter of each word to Upper case||Capitalizing letter}  is " .  "<br>" . $UcWords;
            
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
            
            <!-- (*) => First Example => String Functions -  {strtolower(string variable/text value)} Method : contains (1) Exps   -->
                    <!-- a) {Convert all letter to lower case||small letter}  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strtolower(string variable/text value)} Method : <br>
                                <span class="one"></span> (a) => {Convert all letter to lower case||small letter}  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                
                                // printing the string variable before {Convert all letter to lower case||small letter} :
                                    echo "The string variable [before] {Convert all letter to lower case||small letter} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing [Convert all letter to lower case||small letter]:
                                    $toLower = strtolower($str);
                                                
                                // printing the string variable before {Convert all letter to lower case||small letter} : 
                                    echo "The string variable [after] {Convert all letter to lower case||small letter} is " .  "<br>" . $toLower;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                
            <!-- ================================================================================= -->            

            <!-- (*) => Second Example => String Functions -  {stripslashes(String variable)} Method : contains (1) Exps :  -->
                     <!--  (a) => {Convert ALL letter to upper case||capital letter} : -->
                        <header>                                
                            (*) => Second Example => String Functions -  {stripslashes(String variable)} Method :  => <br>
                                <span class="one"></span> (a) => {Convert ALL letter to upper case||capital letter}: 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                                <?php                                     
                                // printing the string variable before {Convert ALL letter to upper case||Capital letter} :
                                    echo "The string variable [before] {Convert ALL letter to upper case||Capital letter} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing [Convert ALL letter to upper case||Capital:
                                    $toUpper = strtoupper($str);
                                                
                                // printing the string variable before {Convert ALL letter to upper case||Capital} : 
                                    echo "The string variable [after] {Convert ALL letter to upper case||Capital} is " .  "<br>" . $toUpper;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;                                                                                            
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!-- (*) =>  Third Example => String Functions -  {lcfirst(string variable/text value)} Method : contains (1) Exps  -->
                    <!--  (a) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} without [using allow] feature : -->

                        <header>                                
                            Third Example => String Functions -  {lcfirst(string variable/text value)} Method : <br>
                                <span class="one"></span> (a) => {Convert First letter of the first word to lower case||Small letter} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                
                            <?php                                     
                            // printing the string variable before {Convert First letter of the first word to lower case||Small letter} :
                                echo "The string variable [before] {Convert First letter of the first word to lower case||Small letter} is " .  "<br>" . $str;
                                echo "<br>" . "<br>";
                                                    
                            // Processing {Convert First letter of the first word to lower case||Small letter} :
                                $lcFirst = lcfirst($str);
                                            
                            // printing the string variable before {Convert First letter of the first word to lower case||Small letter}  : 
                                echo "The string variable [after] {Convert First letter of the first word to lower case||Small letter}  is " .  "<br>" . $lcFirst;
                        
                                echo "<br>" . "<br>" . "----------------------------------" ;                            
                           ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            
            <!-- (*) => Fourth Example => String Functions -  {ucfirst(string variable/text value)} Method : contains (1) Exps : -->
                    <!--   (a) => {Convert the First letter of each word to Upper case||Capitalizing letter} : -->

                        <header>                                
                            Fourth Example => String Functions -  {ucfirst(string variable/text value)} Method :   <br>
                                <span class="one"></span> (a) => {Convert the First letter of each word to Upper case||Capitalizing letter} : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd1 ?>  </h1>  
                                
                            <?php                                     
                            
                                // printing the string variable before {Convert First letter of the first word to Upper case||Capital letter} :
                                    echo "The string variable [before] {Convert First letter of the first word to Upper case||Capital letter} is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing {Convert First letter of the first word to Upper case||Capital letter} :
                                    $UcFirst = ucfirst($str);
                                                
                                // printing the string variable before {Convert First letter of the first word to Upper case||Capital letter}  : 
                                    echo "The string variable [after] {Convert First letter of the first word to Upper case||Capital letter}  is " .  "<br>" . $UcFirst;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!-- ---------------------------------------------------------- -->
            <!-- (*) => Fifth Example => String Functions -  {ucwords(string variable/text value)} Method : contains (1) Exps :  -->
                    <!-- (a) => {Convert the First letter of each word to Upper case||Capitalizing letter}:  -->

                        <header>                                
                            Fifth Example => String Functions -  {ucwords(string variable/text value)} Method :   <br>
                                <span class="one"></span> (a) => {Convert the First letter of each word to Upper case||Capitalizing letter} : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd1 ?>  </h1>  
                                
                            <?php                                     
                            // printing the string variable before {Convert First letter of each word to Upper case||Capitalizing letter} :
                                echo "The string variable [before] {Convert First letter of each word to Upper case||Capitalizing letter} is " .  "<br>" . $str;
                                echo "<br>" . "<br>";
                                                    
                            // Processing {Convert First letter of each word to Upper case||Capitalizing letter} :
                                $UcWords = ucwords($str);
                                            
                            // printing the string variable after {Convert First letter of each word to Upper case||Capitalizing letter}  : 
                                echo "The string variable [after] {Convert First letter of each word to Upper case||Capitalizing letter}  is " .  "<br>" . $UcWords;
                        
                                echo "<br>" . "<br>" . "----------------------------------" ;                                                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!-- ---------------------------------------------------------- -->
                                                        
            
            <!-- ============================================================================= -->
            </section>
                                                                    
         </body>
    </html>             