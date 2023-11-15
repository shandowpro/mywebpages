 <!--  49 PHP 5 - String Functions - Str_Replace   --> 
<?php
    $lessonName  ='String Functions - Str_Replace';
    $title = '49 PHP5 - ' . $lessonName;
    $css = '49 PHP 5 In Arabic - String Functions - Str_Replace.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        $str = "Hello world! Im Shadi and studying php because php is very easy and famous language ";

        $str0 = "Hello@world!=Im-Shadi|and|studying#php@because-php|is@very-easy-and#famous@language ";
        
        $str00 = "Line1\rline2\nline3\r\n";
                        
    // =================================================================================
    
    // (*) => First Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[one value] , string variable, count)} Method : contains (2) Exps : 
                            
        // (a) => {str_replace()}  Method : {[default] without count} => inside [string variable]  :
                                    
            $ha1 = "{str_replace()}  Method :{[default Replacment] without count} => inside [string variable] as following: " ; 
                 
                // // printing the string variable before replacement:            
                //     echo "The string variable [before] replacement is " .  "<br>" . $str;
                //     echo "<br>" . "<br>";
                                        
                // // Processing one by one [default replacement]:            
                //     $str1 = str_replace("php", "javascript" , $str);
                                
                // // printing the string variable after replacement:            
                //     echo "The string variable [after] replacement is " .  "<br>" . $str1;
            
                //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (b) => {str_replace()}  Method : {[customized] with count} => inside [string variable] :
                                    
            $ha2 = "{str_replace()}  Method : {[customized Replacement] with count} => inside [string variable] as following :"  ; 
            
            // // printing the string variable before replacement:            
            //     echo "The string variable [before] replacement is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";
                
                
            // // Processing one by one [customized replacement]:            
            //     $str2 = str_replace("php", "javascript" , $str, $i1);
                                
            // // printing the string variable after replacement:                
            //     echo "The string variable [after] replacement is " .  "<br>" . $str2 . "and count of replacement proceses = " . $i1;
       
            //     echo "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------                                   
    // =================================================================================
    
    // (*) => Second Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[many values] , array, count)} Method : contains (1) Exps : 
                                        
       // (a) => {str_replace()}  Method : advanced example {[explode] && [implode] && [customized replacement] with count} => [inside array] :
            $hb1 = "{str_replace()}  Method : advanced example {[explode] && [implode] && [customized replacement] with count} => [inside array] as following :" ; 
            
                // // Exploding the string variable in to => Arary before Replacement:
                //     $str3 = explode(" " , $str);
                    
                // // printing the Exploded array before replacement:
                //     echo "<pre>";
                //     echo "The exploded array [before] replacement is " .  "<br>";
                //     print_r($str3);
                //     echo "</pre>" . "<br>" . "<br>";
                
                // // The replacement process inside the explooded array by single value:
                //     $str3 = str_replace("php", "javascript" , $str3, $i1);


                // // Imploding the exploded array in to => String variable:
                //     $str3 = implode(" " , $str3);
                
                                                
                // // printing the string variable after replacement && imploded:                
                //     echo "The string variable [after replacement] && [Imploded] is " .  "<br>" . $str3 . "and count of replacement proceses = " . $i1;
        
                //     echo "<br>" . "<br>" . "----------------------------------" ;                        
        // ---------------------------------------------
    // =================================================================================
            
    //  (*) => Third Example [replace many by one ] => String Functions - {str_replace(search[many values], replace by[one value] , string variable, count)} Method : contains (2) Exps : 
                            
        // (a) => {str_replace()} Method : {Default Replacment of Many[text values] by one} => inside [string variable]  :
                                    
            $hc1 = "{str_replace()} Method : {Default Replacment of Many[text values] by one} => inside [string variable] as following: "; 
                 
            // // printing the string variable before replacement:                
            //     echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";                
            
            // // Processing Many[text values] by one [default Replacement] :                    
            //     $str4 = str_replace(array("php", "Im", "and"), "javascript" , $str);
                                
            // // printing the string variable after replacement:      
            //     echo "The string variable [after] Many[text values] by one [default replacement] many to one  is " .  "<br>" . $str4 ;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

        // ---------------------------------------------                
        
        // (b) => {str_replace()} Method : {Default Replacment of Many[symbols] by one} => inside [string variable]  :
                                    
            $hc2 = "{str_replace()} Method : {Default Replacment of Many[symbols] by one} => inside [string variable] as following: "; 
                 
            // // printing the string variable before replacement:                
            //     echo "The string variable [before] Many[symbols] by one [default replacement] is " .  "<br>" . $str0 . "<br>" . "<br>";                
                
            // // Processing Many[symbols values] by one [default Replacement] :
            //     $str5 = str_replace(array("#", "-", "|", "@", "="), "javascript" , $str0);
                                
            // // printing the string variable after replacement:                
            //     echo "The string variable [after] Many[symbols] by one [default replacement] is " .  "<br>" . $str5 ;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

        // ---------------------------------------------                
      
    // ==================================================================================                    
    
    //  (*) => Fourth Example [replace many by many ] => String Functions - {str_replace(search[many values], replace by[many values] , string variable, count)} Method : contains (2) Exps : 
                            
        // (a) => {str_replace()} Method : {Default Replacment of Many by Many (Equaled indexes)} => inside [string variable]  :
                                    
            $hd1 = "{str_replace()} Method : {Default Replacment of Many by Many (Equaled indexes) } => inside [string variable] as following: "; 
                 
            // // printing the string variable before replacement:                
            //     echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";
                                                            
            // // Processing Many by Many Replacement:                
            //     $str6 = str_replace(array("php", "Im", "and"), array(" A ", " B " , " C ") , $str);
                                
            // // printing the string variable after replacement:                
            //     echo "The string variable [after]  Many to Many (Equaled indexes) [default replacement] is " .  "<br>" . $str6 ;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

        // ---------------------------------------------                
        
        // (b) => {str_replace()} Method : {Default Replacment of Many by Many (Non-Equaled indexes)} => inside [string variable]  :
                                    
            $hd2 = "{str_replace()} Method : {Default Replacment of Many by Many (Non-Equaled indexes) } => inside [string variable] as following: "; 
                 
            // // printing the string variable before replacement:                
            //     echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";                                            
                
            // // Processing Many by Many Replacement:                
            //     $str7 = str_replace(array("php", "Im", "and"), array(" A ", " B ") , $str);
                                
            // // printing the string variable after replacement:                
            //     echo "The string variable [after] Many to Many (Non-Equaled indexes) [default replacement] is " .  "<br>" . $str7 ;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

        // ---------------------------------------------                
      
    // ==================================================================================                    
    
    
    //  (*) => Fifth Example => String Functions - [replace many by one ] {advanced syntax}  Many to One : contains (1) Exps : 

        // (a) => {str_replace(search[many values], replace by[Html element] , string variable, count)}:

            $he1 = "{str_replace()} Method : [replace many by one ] {str_replace(search[many values - array special symbols], replace by[Html element-<br>] , string variable, count)} Method as following: "; 
            
            // // printing the string variable before replacement:                
            //     echo "The string variable [before] replacement is " .  "<br>" . $str00 . "<br>" . "<br>";
            

            // // Declerataion of the array of replacement elements:
            //     $order = array("\r","\n","\r\n");

            
            // // Processing Many(special symbols) by one(html element) Replacement:
            //     $str00 = str_replace($order, "<br>", $str00, $i);
                            
                                
            // // printing the string variable after replacement:
            //     echo "The string variable [after] {str_replace(search[many values - array special symbols], replace by one value [Html element] , string variable, count)} is " .  "<br>" . $str00 ;
            //     echo "<br>" . "<br>" . "----------------------------------" ;                        

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
            
            <!-- (*) => First Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[one value] , string variable, count)} Method : contains (2) Exps :  -->
                    <!-- // (a) => {str_replace()}  Method : {[default] without count} => inside [string variable]  : -->

                        <header>                                
                            (*) => First Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[one value] , string variable, count)} Method : <br>
                                <span class="one"></span> // (a) => {str_replace()}  Method : {[default] without count} => inside [string variable]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                // printing the string variable before replacement:            
                                    echo "The string variable [before] replacement is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                                    
                                // Processing one by one [default replacement]:            
                                    $str1 = str_replace("php", "javascript" , $str);
                                            
                                // printing the string variable after replacement:            
                                    echo "The string variable [after] replacement is " .  "<br>" . $str1;
                        
                                    echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => First Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[one value] , string variable, count)} Method  -->
                    <!-- (b) => {str_replace()}  Method : {[customized] with count} => inside [string variable] :  -->
                        <header>                                
                            / (*) => First Example => String Functions - {str_replace} :  => <br>
                                <span class="one"></span> (b) => {str_replace()}  Method :{Customized Length value [one letter]} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                                <?php                                     
                                     // printing the string variable before replacement:            
                                        echo "The string variable [before] replacement is " .  "<br>" . $str;
                                        echo "<br>" . "<br>";
                                        
                                        
                                    // Processing one by one [customized replacement]:            
                                        $str2 = str_replace("php", "javascript" , $str, $i1);
                                                        
                                    // printing the string variable after replacement:                
                                        echo "The string variable [after] replacement is " .  "<br>" . $str2 . "and count of replacement proceses = " . $i1;
                            
                                        echo "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                    
            <!-- ================================================================================= -->            

            <!-- (*) => Second Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[many values] , array, count)} Method : contains (1) Exps :  -->
                     <!--  (a) => {str_replace()}  Method : advanced example {[explode] && [implode] && [customized replacement] with count} => [inside array] : -->
                        <header>                                
                            (*) => Second Example [replace one by one ] => String Functions -  {str_replace(search[one value], replace by[many values] , array, count)} Method : contains (1) Exps : => <br>
                                <span class="one"></span>   (a) => {str_replace()}  Method : advanced example {[explode] && [implode] && [customized replacement] with count} => [inside array] : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                                <?php                                     
                                    // Exploding the string variable in to => Arary before Replacement:
                                        $str3 = explode(" " , $str);
                                        
                                    // printing the Exploded array before replacement:
                                        echo "<pre>";
                                        echo "The exploded array [before] replacement is " .  "<br>";
                                        print_r($str3);
                                        echo "</pre>" . "<br>" . "<br>";
                                    
                                    // The replacement process inside the explooded array by single value:
                                        $str3 = str_replace("php", "javascript" , $str3, $i1);
                    
                    
                                    // Imploding the exploded array in to => String variable:
                                        $str3 = implode(" " , $str3);
                                    
                                                                    
                                    // printing the string variable after replacement && imploded:                
                                        echo "The string variable [after replacement] && [Imploded] is " .  "<br>" . $str3 . "and count of replacement proceses = " . $i1;
                            
                                        echo "<br>" . "<br>" . "----------------------------------" ;                                     
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!-- (*) => Third Example [replace many by one ] => String Functions - {str_replace(search[many values], replace by[one value] , string variable, count)} Method : contains (2) Exps : -->
                    <!--  (a) => {str_replace()} Method : {Default Replacment of Many[text values] by one} => inside [string variable]  : -->

                        <header>                                
                            (*) => Third Example [replace many by one ] => String Functions - {str_replace(search[many values], replace by[one value] , string variable, count)} Method : contains (1) Exps : => <br>
                                <span class="one"></span>  (a) => {str_replace()} Method : {Default Replacment of Many[text values] by one} => inside [string variable]  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc1 ?>  </h1>  
                                
                            <?php                                     
                            // printing the string variable before replacement:                
                                echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";                
                            
                            // Processing Many[text values] by one [default Replacement] :                    
                                $str4 = str_replace(array("php", "Im", "and"), "javascript" , $str);
                                                
                            // printing the string variable after replacement:                
                                echo "The string variable [after] Many[text values] by one [default replacement] many to one  is " .  "<br>" . $str4 ;
                                echo "<br>" . "<br>" . "----------------------------------" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!-- (*) => Third Example [replace many by one ] => String Functions - {str_replace(search[many values], replace by[one value] , string variable, count)} Method  : -->
                    <!--  (b) => {str_replace()} Method : {Default Replacment of Many[symbols] by one} => inside [string variable] : -->

                        <header>                                
                             (*) => Third Example [replace many by one ] => String Functions - {str_replace(search[many values], replace by[one value] , string variable, count)} Method: => <br>
                                <span class="one"></span>  (b) => {str_replace()} Method : {Default Replacment of Many[symbols] by one} => inside [string variable]  : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hc2 ?>  </h1>  
                                
                            <?php                                     
                            // printing the string variable before replacement:
                                echo "The string variable [before] replacement is " .  "<br>" . $str0 . "<br>" . "<br>";
                            
                            // Processing Many[text values] by one [default Replacement] :                    
                                $str4 = str_replace(array("@", "#", "|", "=", "-"), " A " , $str0);
                                                
                            // printing the string variable after replacement:
                                echo "The string variable [after] Many[text values] by one [default replacement] many to one  is " .  "<br>" . $str4 ;
                                echo "<br>" . "<br>" . "----------------------------------" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->

            <!-- ================================================================================= -->            
                
            <!--   (*) => Fourth Example [replace many by many ] => String Functions - {str_replace(search[many values], replace by[many values] , string variable, count)} Method : contains (1) Exps : 
                    (a) => {str_replace()} Method : {Default Replacment of Many by Many (Equaled indexes)} => inside [string variable]  : -->
                        <header>                                
                            (*) => Fourth Example [replace many by many ] => String Functions - {str_replace(search[many values], replace by[many values] , string variable, count)} Method  => <br>
                                <span class="one"></span> (a) => {str_replace()} Method : {Default Replacment of Many by Many (Equaled indexes)} => inside [string variable] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd1 ?>  </h1>  
                                
                                <?php                                     
                                     // printing the string variable before replacement:                
                                        echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";
                                                                                    
                                    // Processing Many by Many Replacement:                
                                        $str6 = str_replace(array("php", "Im", "and"), array(" A ", " B " , " C ") , $str);
                                                        
                                    // printing the string variable after replacement:                
                                        echo "The string variable [after]  Many to Many (Equaled indexes) [default replacement] is " .  "<br>" . $str6 ;
                                        echo "<br>" . "<br>" . "----------------------------------" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!--   (*) => Fourth Example [replace many by many ] => String Functions - {str_replace(search[many values], replace by[many values] , string variable, count)} Method : contains (2) Exps : 
                    (b) => {str_replace()} Method : {Default Replacment of Many by Many (Non-Equaled indexes)} => inside [string variable]  : -->
                        <header>                                
                            (*) => Fourth Example [replace many by many ] => String Functions - {str_replace(search[many values], replace by[many values] , string variable, count)} Method  => <br>
                                <span class="one"></span> (b) => {str_replace()} Method : {Default Replacment of Many by Many (Non-Equaled indexes)} => inside [string variable] :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hd2 ?>  </h1>  
                                
                                <?php                                     
                                     // printing the string variable before replacement:                
                                        echo "The string variable [before] replacement is " .  "<br>" . $str . "<br>" . "<br>";
                                                                                    
                                    // Processing Many by Many Replacement:                
                                        $str6 = str_replace(array("php", "Im", "and"), array(" A ", " B " , " C ") , $str);
                                                        
                                    // printing the string variable after replacement:                
                                        echo "The string variable [after]  Many to Many (Equaled indexes) [default replacement] is " .  "<br>" . $str6 ;
                                        echo "<br>" . "<br>" . "----------------------------------" ;                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                        
            <!--   (*) => Fifth Example [replace many by one ] {advanced syntax} => String Functions - {str_replace(search[many values], replace by[Html element] , string variable, count)} Method : contains (1) Exps : -->
                    <!--  (a) => {str_replace(search[many values], replace by[Html element] , string variable, count)}: -->
                        <header>                                
                            Fifth Example [replace many by one ] {advanced syntax} => String Functions - {str_replace(search[many values], replace by[Html element] , string variable, count)} Method : contains (1) Exps  => <br>
                                <span class="one"></span> (a) => {str_replace(search[many values], replace by[Html element] , string variable, count)}:
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $he1 ?>  </h1>  
                                
                                <?php                                     
                                // printing the string variable before replacement:                
                                  echo "The string variable [before] replacement is " .  "<br>" . $str00 . "<br>" . "<br>";
                                

                                // Declerataion of the array of replacement elements:
                                    $order = array("\r","\n","\r\n");
                        
                                
                                // Processing Many(special symbols) by one(html element) Replacement:
                                    $str00 = str_replace($order, "<br>", $str00, $i);
                                                
                                                    
                                // printing the string variable after replacement:
                                    echo "The string variable [after] {str_replace(search[many values - array special symbols], replace by one value [Html element] , string variable, count)} is " .  "<br>" . $str00 ;
                                    echo "<br>" . "<br>" . "----------------------------------" ;                                                             
                                     
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                        
            
            <!-- ============================================================================= -->
            </section>
                                                                    
         </body>
</html>             