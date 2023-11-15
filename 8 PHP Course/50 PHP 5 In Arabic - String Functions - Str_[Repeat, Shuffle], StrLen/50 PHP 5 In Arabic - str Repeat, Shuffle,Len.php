<!--  50 PHP 5 In Arabic - String Functions - Str_[Repeat, Shuffle], StrLen   --> 
<?php
    $lessonName  ='String Functions - Str_[Repeat, Shuffle], StrLen';
    $title = '50 PHP5 - ' . $lessonName;
    $css = '50 PHP 5 In Arabic - String Functions - Str_[Repeat, Shuffle], StrLen.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        $str = "Shadi";
                        
    // =================================================================================
    
    // (*) => First Example => String Functions -  {str_repeat(string variable/text value)} Method : contains (1) Exps : 
                            
        // (a) => Repeating the varaible certain times [20] :
                                    
            $ha1 = "{str_repeat()}  Method :{Repeating the varaible certain times [20] } as following: " ; 
                 
                // // printing the string variable before Repeation:            
                //     echo "The string variable [before] Repetation is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing one by one [Repeation by 20 times]:            
                //     $repeat = str_repeat($str, 20);
                                
                // // printing the string variable after Repeation:            
                //     echo "The string variable [after] Repetation is " .  "<br>" . $repeat;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                        
    // =================================================================================
    
    // (*) => Second Example [Shuffling ] => String Functions -  {str_shuffle(String variable)} Method : contains (1) Exps : 
                                        
       // (a) => {str_shuffle()}  Method [Random generating]:
        $hb1 = "{str_shuffle()}  Method :{Shuffling the varaible}  as following :" ; 
            
        // // printing the string variable before Shuffling:
        // echo "The string variable [before] Repetation is " .  "<br>" . $str;
        //  echo "<br>" . "<br>";
                                    
        // // Processing [Shuffling]:            
        // $shuffle = str_shuffle($str);
                            
        // // printing the string variable after Shuffling:            
        //  echo "The string variable [after] Shuffling is " .  "<br>" . $shuffle;
        
        // echo "<br>" . "<br>" . "----------------------------------" ;
                              
        // ---------------------------------------------
    // =================================================================================
            
    //  (*) => Third Example [Getting length] => String Functions - {strlen(string variable)} Method : contains (2) Exps : 
                            
        // (a) => {strlen()} Method : {Getting length / count} of [string variable] letters including empty spaces  :
                                    
            $hc1 = "{strlen()} Method : {Getting length / count} of [string variable] letters including empty spaces} as following: "; 
                             
            // // Processing Getting the string variable  [length] including {empty spaces}:
            //     $length = strlen($str);
                                
            // // printing the string variable's Length after :                
            //     echo "The string variable [Length] is " .  "<br>" . $length;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

        // ---------------------------------------------                
        
        // (b) => {strlen()} Method : {Getting length / count} with [conditional If] of [string variable] letters including empty spaces  :
                                    
            $hc2 = "{strlen()} Method : {Getting length / count}  with [conditional If] of [string variable] letters including empty spaces} as following: "; 
                             
            // // Processing Getting the string variable  [length] including {empty spaces}:
                // $length = strlen($str);
                                
            // // Testing the count of string variable : 

            //     if ($length < 10) {
            //         // printing the string variable's Length after Testing  :                
            //             echo "The string variable [Length] is smaller than [10] " .  "<br>" . "[" . $length . "]";
            //             echo "<br>" . "<br>" . "----------------------------------" ;                                        
            //     } else {
                        
            //         // printing the string variable's Length after Testing :                
            //             echo "The string variable [Length] is greater than [10] " .  "<br>" . "[" . $length . "]";
            //             echo "<br>" . "<br>" . "----------------------------------" ;                                        
            //     }

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
            
            <!-- (*) => First Example => String Functions -  {str_repeat(string variable/text value)} Method : contains (1) Exps  -->
                    <!-- // (a) => Repeating the varaible certain times [20]  : -->

                        <header>                                
                            (*) => First Example => String Functions -  {str_repeat(string variable/text value)} Method : <br>
                                <span class="one"></span> // (a) => Repeating the varaible certain times [20]   :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                // printing the string variable before Repeation:            
                                    echo "The string variable [before] Repetation is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing one by one [Repeation by 20 times]:            
                                    $repeat = str_repeat($str, 20);
                                                
                                // printing the string variable after Repeation:            
                                    echo "The string variable [after] Repetation is " .  "<br>" . $repeat;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;      
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                
            <!-- ================================================================================= -->            

            <!-- (*) => Second Example [Shuffling ] => String Functions -  {str_shuffle(String variable)} Method : contains (1) Exps  :  -->
                     <!--  (a) => {str_shuffle()}  Method [Random re-arangement generating] : -->
                        <header>                                
                        (*) => Second Example [Shuffling ] => String Functions -  {str_shuffle(String variable)} Method  : => <br>
                                <span class="one"></span> (a) => {str_shuffle()}  Method [Random re-arangement generating] : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                                <?php                                     

                                // printing the string variable before Shuffling:
                                    echo "The string variable [before] Repetation is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                        
                                // Processing [Shuffling]:            
                                    $shuffle = str_shuffle($str);
                                                
                                // printing the string variable after Shuffling:            
                                    echo "The string variable [after] Shuffling is " .  "<br>" . $shuffle;
                            
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                                                                
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!-- (*) => Third Example [Getting length] => String Functions - {strlen(string variable)} Method : contains (2) Exps  -->
                    <!--  (a) => {strlen()} Method : {Getting length / count} of [string variable] letters including empty spaces  : -->

                        <header>                                
                            (*) => Third Example [Getting length] => String Functions - {strlen(string variable)} Method : <br>
                                <span class="one"></span> (a) => {strlen()} Method : {Getting length / count} of [string variable] letters including empty spaces  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                
                            <?php                                     
                            
                                // Processing Getting the string variable  [length] including {empty spaces}:
                                    $length = strlen($str);
                                                    
                                // printing the string variable's Length after :                
                                    echo "The string variable [Length] is " .  "<br>" . $length;
                                    echo "<br>" . "<br>" . "----------------------------------" ;                        
                            
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            
            <!-- (*) => Third Example [Getting length] => String Functions - {strlen(string variable)} Method :  -->
                    <!--  // (b) => {strlen()} Method : {Getting length / count} with [conditional If] of [string variable] letters including empty spaces  : -->

                        <header>                                
                            (*) => Third Example [Getting length] => String Functions - {strlen(string variable)} Method : <br>
                                <span class="one"></span> // (b) => {strlen()} Method : {Getting length / count} with [conditional If] of [string variable] letters including empty spaces  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                                
                            <?php                                     
                            
                                // Processing Getting the string variable  [length] including {empty spaces}:
                                    $length = strlen($str);
                                                    
                                // Testing the count of string varialbe : 
                    
                                    if ($length < 10) {
                                        // printing the string variable's Length after :                
                                            echo "The string variable [Length] is smaller than [10] " .  "<br>[" . $length . "]";
                                            echo "<br>" . "<br>" . "----------------------------------" ;                                        
                                    } else {
                                            
                                        // printing the string variable's Length after :                
                                            echo "The string variable [Length] is greater than [10] " .  "<br>[" . $length . "]";
                                            echo "<br>" . "<br>" . "----------------------------------" ;                                        
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