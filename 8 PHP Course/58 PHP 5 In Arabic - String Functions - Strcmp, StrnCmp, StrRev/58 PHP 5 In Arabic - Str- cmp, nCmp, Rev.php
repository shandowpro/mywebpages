<!--  58 PHP 5 In Arabic - String Functions - Strcmp, StrnCmp, StrRev  --> 
<?php
    $lessonName  ='String Functions - Strcmp, StrnCmp, StrRev';
    $title = '58 PHP5 - ' . $lessonName;
    $css = '58 PHP 5 In Arabic - String Functions - Strcmp, StrnCmp, StrRev.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable :          
        $str01 = "PHP" ; 
        $str02 = "PHP" ; 
       
        $strp1 = "PHPP" ; 
        $strp2 = "PHP" ; 
        
        $strn1 = "PHP" ; 
        $strn2 = "PHPP" ; 
        
        $strRev = "Shadi" ; 


    // =================================================================================    
    
    // (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps :         
    
        // (a) => {strcmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values :
    
            $ha1 = "{strcmp(First string variable/text  , Second string variable/text)} Method [0] : Comparisoning between equalled String values , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $str01 . "<br>";
            //     echo "Second String is value" .  "<br>" . $str02 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $comp1 = strcmp($str01, $str02);
            
            // // Printing the [comparison result] :
            //     echo "The the [comparison result] = " . $comp1 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {strcmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values :
    
            $ha2 = "{strcmp(First string variable/text  , Second string variable/text)} Method [+ positive result] : Comparisoning between First String > Second String values , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $strp1 . "<br>";
            //     echo "Second String is value" .  "<br>" . $strp2 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $comp2 = strcmp($strp1, $strp2);
            
            // // Printing the [comparison result]   :
            //     echo "The the [comparison result] = " . $comp2 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (c) => {strcmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values :
    
            $ha3 = "{strcmp(First string variable/text  , Second string variable/text)} Method [- Negative result] : Comparisoning between First String < Second String values , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $strn1 . "<br>";
            //     echo "Second String is value" .  "<br>" . $strn2 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $comp3 = strcmp($strn1, $strn2);
            
            // // Printing the [comparison result]   :
            //     echo "The the [comparison result] = " . $comp3 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                                
    //   ====================================================================================        
    // =================================================================================        
    
    // (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps :         
    
        // (a) => {strncmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values [of certain first length] :
    
            $hb1 = "{strncmp(First string variable/text  , Second string variable/text)} Method [0] : Comparisoning between equalled String values [of certain first length] , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $str01 . "<br>";
            //     echo "Second String is value" .  "<br>" . $str02 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $compn1 = strncmp($str01, $str02, 3);
            
            // // Printing the [comparison result]   :
            //     echo "The the [comparison result] = " . $compn1 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (b) => {strncmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values [of certain first length] :
    
            $hb2 = "{strncmp(First string variable/text  , Second string variable/text)} Method [+ positive result] : Comparisoning between First String > Second String values [of certain first length] , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $strp1 . "<br>";
            //     echo "Second String is value" .  "<br>" . $strp2 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $compn2 = strncmp($strp1, $strp2, 3);
            
            // // Printing the [comparison result]   :
            //     echo "The the [comparison result] = " . $compn2 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
        
        // (c) => {strncmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values [of certain first length] :
    
            $hb3 = "{strcmp(First string variable/text  , Second string variable/text)} Method [- Negative result] : Comparisoning between First String < Second String values [of certain first length] , as following: " ; 
            
            // // Printing (2) main string variables before [comparison] :
            //     echo "First String is value" .  "<br>" . $strn1 . "<br>";
            //     echo "Second String is value" .  "<br>" . $strn2 . "<br>";
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [comparison]  :
            //     $compn3 = strncmp($strn1, $strn2, 3);
            
            // // Printing the [comparison result]   :
            //     echo "The the [comparison result] = " . $compn3 . "<br>" ;                

            //     echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                                
    //   ====================================================================================        
    // =================================================================================        
    
    // (*) => Third Example => String Functions -  {strrev(string variable/text)} Reversing Method : contains (1) Exps :         
    
        // (a) => {strrev(string variable/text)} Method : Reversing the string's letters [from to right to left] :
    
            $hc1 = "{strrev(string variable/text)} Method : Reversing the string's letters [from to right to left] , as following: " ; 
            
            // // Printing the main string variable before [Reverising] :
            //     echo "The Main String before Reversing is value" .  "<br>" . $strRev . "<br>";                
            //     echo "<hr>" . "<br>";                                    
            
            // // Processing [Reversing]  :
            //     $Rev = strrev($strRev);
            
            // // Printing the [Reversed result] :
            //     echo "The the [Reversed result] = " . $Rev . "<br>" ;                

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
            
            <!-- (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps: -->
                    <!--  (a) => {strcmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values -->

                        <header>                                
                            (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps: <br>
                                <span class="one"></span> (a) => {strcmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php
                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $str01 . "<br>";
                                    echo "Second String is value" .  "<br>" . $str02 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $comp1 = strcmp($str01, $str02);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $comp1 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                                                                     
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : -->
                    <!-- (b) => {strcmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : <br>
                                <span class="one"></span> (b) => {strcmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $strp1 . "<br>";
                                    echo "Second String is value" .  "<br>" . $strp2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $comp2 = strcmp($strp1, $strp2);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $comp2 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                                                                
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method  : -->
                    <!-- (c) => {strcmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values  -->

                        <header>                                
                            (*) => First Example => String Functions -  {strcmp(First string variable/text  , Second string variable/text )} Method : <br>
                                <span class="one"></span> (c) => {strcmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $strn1 . "<br>";
                                    echo "Second String is value" .  "<br>" . $strn2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $comp3 = strcmp($strn1, $strn2);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $comp3 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps: -->
                    <!-- (a) => {strncmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values [of certain first length]  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method : contains (3) Exps  : <br>
                                <span class="one"></span> (a) => {strncmp(First string variable/text  , Second string variable/text)} Method [0] :  Comparisoning between equalled String values [of certain first length] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $str01 . "<br>";
                                    echo "Second String is value" .  "<br>" . $str02 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $compn1 = strncmp($str01, $str02, 4);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $compn1 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
    
            <!-- (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method : -->
                    <!--  (b) => {strncmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values [of certain first length]  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method  <br>
                                <span class="one"></span> (b) => {strncmp(First string variable/text  , Second string variable/text)} Method [+ positive result] :  Comparisoning between First String > Second String values [of certain first length]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                            <?php                                                                                                                               
                            
                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $strp1 . "<br>";
                                    echo "Second String is value" .  "<br>" . $strp2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $compn2 = strncmp($strp1, $strp2, 4);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $compn2 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {strncmp(First string variable/text  , Second string variable/text )} Method : -->
                    <!-- (c) => {strncmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values [of certain first length] -->

                        <header>                                
                            (*) =>  Second Example => String Functions - {stristr(string variable/text value , find, Search before)} Method : <br>
                                <span class="one"></span> (c) => {strncmp(First string variable/text  , Second string variable/text)} Method [- Negative result] :  Comparisoning between First String < Second String values [of certain first length] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                                               
                                // Printing (2) main string variables before [comparison] :
                                    echo "First String is value" .  "<br>" . $strn1 . "<br>";
                                    echo "Second String is value" .  "<br>" . $strn2 . "<br>";
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [comparison]  :
                                    $compn3 = strncmp($strn1, $strn2, 4);
                                
                                // Printing the [comparison result]   :
                                    echo "The the [comparison result] = " . $compn3 . "<br>" ;                

                                    echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            
       
            
            <!-- (*) => Third Example => String Functions -  {strrev(string variable/text)} Reversing Method : contains (1) Exps : -->
                    <!-- (a) => {strrev(string variable/text)} Method : Reversing the string's letters [from to right to left]   -->

                        <header>                                
                            (*) => Third Example => String Functions -  {strrev(string variable/text)} Reversing Method : contains (1) Exps : <br>
                                <span class="one"></span> (a) => {strrev(string variable/text)} Method : Reversing the string's letters [from to right to left]   :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                                            
                            <?php                                                                                                                               

                                // Printing the main string variable before [Reverising] :
                                    echo "The Main String before Reversing is value" .  "<br>" . $strRev . "<br>";                
                                    echo "<hr>" . "<br>";                                    
                                
                                // Processing [Reversing]  :
                                    $Rev = strrev($strRev);
                                
                                // Printing the [Reversed result]   :
                                    echo "The the [Reversed result] = " . $Rev . "<br>" ;                

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