<!--  51 PHP 5 In Arabic - String Functions - AddSlashes, Strip_Tags   --> 
<?php
    $lessonName  ='String Functions - AddSlashes, Strip_Tags';
    $title = '51 PHP5 - ' . $lessonName;
    $css = '51 PHP 5 In Arabic - String Functions - AddSlashes, Strip_Tags.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable with spcial symbol:  
        $str = "I will go at o'clock" ;
        
        // String variable with HTML Tags:  
        $str1 = "I <b> love </b> <span> PHP </span> Go to <a href='php.net'>  php .net </a> to <i> learn </i>" ;
                        
    // =================================================================================
    
    // (*) => First Example => String Functions -  {addslashes(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => Adding backslashes before every special charachter [symbols] :
                                    
            $ha1 = "{addslashes()}  Method :{Adding backslashes before every special charachter [symbols] } as following: " ; 
                 
                // // printing the string variable before adding back slashes before every special charachter [symbols]   :            
                //     echo "The string variable [before] adding back slashes before every special charachter [symbols]  is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing  [addding back slashes before every special charachter [symbols] ]:
                //     $backSlashed = addslashes($str);
                                
                // // printing the string variable after adding back slashes:
                //     echo "The string variable [after] back slashes is " .  "<br>" . $backSlashed;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    // (*) => Second Example => String Functions -  {stripslashes(String variable)} Method : contains (1) Exps : 
                                        
       // (a) => {stripslashes()}  Method [Removing any backslashes before every special character ] :
            $hb1 = "{stripslashes()}  Method :{Removing any backslashes before every special character}  as following :" ; 
            
        // // printing the string variable before [Removing-stripping] back slashes before every special charachter [symbols]   :            
        //     echo "The string variable [before] [Removing-stripping] back slashes before every special charachter [symbols]  is " .  "<br>" . $str;
        //     echo "<br>" . "<br>";
                                
        // // Processing  [Removing-Stripping back slashes before every special charachter [symbols] ]:
        //     $stripped = stripslashes($str);
                        
        // // printing the string variable after Stripping-Removing back slashes :
        //     echo "The string variable [after] back slashes is " .  "<br>" . $stripped;
    
        //     echo "<br>" . "<br>" . "----------------------------------" ;

        // ---------------------------------------------
    // =================================================================================
            
    //  (*) => Third Example => String Functions - {strip_tags(string variable)} Method : contains (2) Exps : 
                            
        // (a) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} without [using allow] feature :
                                    
            $hc1 = "{strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable , as following: "; 
                
            // // printing the string variable (before) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:
            //     echo "The string variable before [Removing-stripping] All {HTML Tags} without [using allow] feature  is " .  "<br>" . $str1;
            //     echo "<br>" . "<br>";
                                    
            // // Processing  [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable] : 
            //     $strippedAllTags = strip_tags($str1);
                            
            // // printing the string variable (after) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:
            //     echo "The string variable (after) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:is " .  "<br>" . $strippedAllTags;

            //     echo "<br>" . "<br>" . "----------------------------------" ;

        // ---------------------------------------------                
        
        // (b) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} with [using allow (2) elements] feature :
                                    
            $hc2 = "{strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable , as following: "; 
                
            // // printing the string variable (before) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:
            //     echo "The string variable before [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature  is " .  "<br>" . $str1;
            //     echo "<br>" . "<br>";
                                    
            // // Processing  [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable] : 
            //     $strippedAllTags = strip_tags($str1, "<b><i>");
                            
            // // printing the string variable (after) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:
            //     echo "The string variable (after) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:is " .  "<br>" . $strippedAllTags;

            //     echo "<br>" . "<br>" . "----------------------------------" ;

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
            
            <!-- (*) => First Example => String Functions -  {addslashes(string variable/text value)} Method : contains (1) Exps   -->
                    <!-- //(a) => Adding backslashes before every special charachter [symbols] : -->

                        <header>                                
                            (*) => First Example => String Functions -  {addslashes(string variable/text value)} Method : <br>
                                <span class="one"></span> (a) => Adding backslashes before every special charachter [symbols] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                
                                // printing the string variable before adding back slashes before every special charachter [symbols]   :            
                                    echo "The string variable [before] adding back slashes before every special charachter [symbols]  is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing  [addding back slashes before every special charachter [symbols] ]:            
                                    $backSlashed = addslashes($str);
                                                
                                // printing the string variable after adding back slashes:            
                                    echo "The string variable [after] back slashes is " .  "<br>" . $backSlashed;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                
            <!-- ================================================================================= -->            

            <!-- (*) => Second Example => String Functions -  {stripslashes(String variable)} Method : contains (1) Exps :  -->
                     <!--  (a) => {stripslashes()}  Method [Removing any backslashes before every special character ]: -->
                        <header>                                
                        (*) => Second Example => String Functions -  {stripslashes(String variable)} Method  => <br>
                                <span class="one"></span> (a) => {stripslashes()}  Method [Removing any backslashes before every special character ]: 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                                <?php                                     

                                // printing the string variable before [Removing-stripping] back slashes before every special charachter [symbols]   :            
                                    echo "The string variable [before] [Removing-stripping] back slashes before every special charachter [symbols]  is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing  [Removing-Stripping back slashes before every special charachter [symbols] ]:            
                                    $stripped = stripslashes($str);
                                                
                                // printing the string variable after Stripping-Removing back slashes:            
                                    echo "The string variable [after] back slashes is " .  "<br>" . $stripped;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                                                                
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!-- (*) => Third Example => String Functions - {strip_tags(string variable)} Method : contains (2) Exps :  -->
                    <!--  (a) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} without [using allow] feature : -->

                        <header>                                
                            Third Example => String Functions - {strip_tags(string variable)} Method : <br>
                                <span class="one"></span> (a) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} without [using allow] feature :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                
                            <?php                                     
                            
                                 // printing the string variable (before) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:
                                    echo "The string variable before [Removing-stripping] All {HTML Tags} without [using allow] feature  is " .  "<br>" . $str1;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing  [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable]: 
                                    $strippedAllTags = strip_tags($str1);
                                                
                                // printing the string variable (after) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:
                                    echo "The string variable (after) [Removing-stripping] All {HTML Tags} without [using allow] feature from string variable:is " .  "<br>" . $strippedAllTags;
                                
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                                    
                           ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            
            <!-- (*) => Third Example => String Functions - {strip_tags(string variable)} Method : -->
                    <!--  // (b) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} with [using allow (2) elements] feature : -->

                        <header>                                
                            (*) => Third Example => String Functions - {strip_tags(string variable)} Method  :   <br>
                                <span class="one"></span> // (b) => {strip_tags(string variable)} => [Removing-stripping] All {HTML Tags} with [using allow (2) elements] feature : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                                
                            <?php                                     
                            
                                // printing the string variable (before) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:
                                    echo "The string variable before [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature  is " .  "<br>" . $str1;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing  [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable]: 
                                    $strippedAllTags = strip_tags($str1, "<b><i>");
                                                
                                // printing the string variable (after) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:
                                    echo "The string variable (after) [Removing-stripping] All {HTML Tags} with [using allow (bold)||(italic) elements] feature from string variable:is " .  "<br>" . $strippedAllTags;

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