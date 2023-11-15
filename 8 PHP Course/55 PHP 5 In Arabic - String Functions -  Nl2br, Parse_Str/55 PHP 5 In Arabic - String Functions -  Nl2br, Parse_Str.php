<!--  55 PHP 5 In Arabic - String Functions -  Nl2br, Parse_Str   --> 
<?php
    $lessonName  ='String Functions - Nl2br, Parse_Str';
    $title = '55 PHP5 - ' . $lessonName;
    $css = '55 PHP 5 In Arabic - String Functions -  Nl2br, Parse_Str.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        // String variable with special symbol:  
        $link = "name=shadi&age=24&year=2022&skill=3" ;
        $str = "I love php so much \n and also \n the javascript \n\n" ;
                        
    // =================================================================================    
    // (*) => First Example => String Functions -  {parse_str(string variable/text value , array)} Method : contains (1) Exps : 
    
        // (a) => {Advanced parse_str($string, $array)} Method :
        
            $ha1 = "{parse_str(string)} Default Method :{Analyzing & Converting the link string to seperated variables} as following: " ; 
            
            // // printing the main string link variables before [ analyzing & Seperating ]  :
            // echo "The main string link {variables} [before analyzing & Seperating ] is " .  "<br>" . $link;
            // echo "<br>" . "<br>";                                    
            
            // // Processing [Analyzing & Seperating]  :
            // $parsed = parse_str($link, $myarry);
            
            // // printing the main string link Array after [analyzing & Seperating ] :
            // echo "The string link {Array} after [analyzing & Seperating ] = " . "<br>" ;
            
            // echo "<pre>";
            // print_r($myarry);
            // echo "<pre>";

            // echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
        // ---------------------------------------------                                                                
    //   ====================================================================================
    
    // (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : contains (3) Exps : 

        // (a) => Default {nl2br(string)} Method :

            $hb1 = "Default {nl2br(string)} => [Default converting the new lines to br tags] :  as following: " ; 
                    
            // // printing the string variable before [Default converting the new lines to br tags] :
            //     echo "The main string variable before [Converting] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";
            
            // // Processing [Default converting the new lines to br tags]  :
            //     $braked1 = nl2br($str);

            // // Printing [ string variable before [Default converting the new lines to br tags] ]:
            //     echo "The main string variable after [Default converting the new lines to br tags] is " .  "<br>" . $braked1;
            
            //     echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (b) => Advanced => [Xhtml:True]: {nl2br(string, true)} Method :

            $hb2 = "Default {nl2br(string, true)} => [Advanced converting the new lines to Xhtml br tags] :  as following: " ; 
                    
            // // printing the string variable before [Advanced converting the new lines to Xhtml br tags] :
            //     echo "The main string variable before [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";
            
            // // Processing [Advanced converting the new lines to Xhtml br tags]  :
            //     $braked2 = nl2br($str, true);

            // // Printing [ string variable before [Advanced converting the new lines to Xhtml br tags] ]:
            //     echo "The main string variable after [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $braked2;            
            //     echo "<br>" . "<br>" . "----------------------------------" ; 
        // ---------------------------------------------                        
        
        // (c) => Advanced => [Xhtml:False]: {nl2br(string, false)} Method :

            $hb3 = "Default {nl2br(string, false)} => [Advanced converting the new lines to Html br tags] :  as following: " ; 
                    
            // // printing the string variable before [Advanced converting the new lines to Html br tags] :
            //     echo "The main string variable before [Advanced converting the new lines to Html br tags] is " .  "<br>" . $str;
            //     echo "<br>" . "<br>";
            
            // // Processing [Advanced converting the new lines to Html br tags]  :
            //     $braked3 = nl2br($str, false);

            // // Printing [ string variable before [Advanced converting the new lines to Xhtml br tags] ]:
            //     echo "The main string variable after [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $braked3;            
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
            
            <!-- (*) => First Example => String Functions -  {parse_str(string variable/text value , array)} Method : contains (1) Exps : -->
                    <!-- (a) => {Advanced parse_str($string, $array)} Method  -->

                        <header>                                
                            (*) => First Example => String Functions -  {parse_str(string variable/text value , array)} Method : contains (1) Exps : <br>
                                <span class="one"></span> (a) => {Advanced parse_str($string, $array)} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                                                                                             
                                // printing the main string link variables before [ analyzing & Seperating ]  :
                                echo "The main string link {variables} [before analyzing & Seperating ] is " .  "<br>" . $link;
                                echo "<br>" . "<br>";                                    
                                
                                // Processing [Analyzing & Seperating]  :
                                $parsed = parse_str($link, $myarry);
                                
                                // printing the main string link Array after [analyzing & Seperating ] :
                                echo "The string link {Array} after [analyzing & Seperating ] = " . "<br>" ;
                                
                                echo "<pre>";
                                print_r($myarry);
                                echo "<pre>";

                                echo "<br>" . "<br>" . "----------------------------------" . "<br>" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ================================================================================= -->            
            <!-- ================================================================================= -->            


            <!-- (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : contains (3) Exps    -->
                    <!-- (a) => Default {nl2br(string)} Method   -->

                        <header>                                
                            (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : contains (3) Exps <br>
                                <span class="one"></span> (a) => Default {nl2br(string)} Method :
                        </header>                                    
                         
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable before [Default converting the new lines to br tags] :
                                    echo "The main string variable before [Converting] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                
                                // Processing [Default converting the new lines to br tags]  :
                                    $braked1 = nl2br($str);

                                // Printing [ string variable before [Default converting the new lines to br tags] ]:
                                    echo "The main string variable after [Default converting the new lines to br tags] is " .  "<br>" . $braked1;
                                
                                    echo "<br>" . "<br>" . "----------------------------------" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : -->
                    <!--  (b) => Advanced => [Xhtml:True]: {nl2br(string, true)} Method:  -->

                        <header>                                
                            (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : <br>
                                <span class="one"></span>  (b) => Advanced => [Xhtml:True]: {nl2br(string, true)} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                            <?php                                                                                                                                                         
                                // printing the string variable before [Advanced converting the new lines to Xhtml br tags] :
                                    echo "The main string variable before [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                
                                // Processing [Advanced converting the new lines to Xhtml br tags]  :
                                    $braked2 = nl2br($str, true);

                                // Printing [ string variable before [Advanced converting the new lines to Xhtml br tags] ]:
                                    echo "The main string variable after [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $braked2;            
                                    echo "<br>" . "<br>" . "----------------------------------" ; 
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : -->
                    <!-- (c) => Advanced => [Xhtml:False]: {nl2br(string, false)} Method    -->

                        <header>                                
                            (*) => Second Example => String Functions -  {nl2br(string variable/text value , Xhtml[ture,false)} Method : <br>
                                <span class="one"></span> (c) => Advanced => [Xhtml:False]: {nl2br(string, false)} Method :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                            <?php                                                                                                 
                                // printing the string variable before [Advanced converting the new lines to Html br tags] :
                                    echo "The main string variable before [Advanced converting the new lines to Html br tags] is " .  "<br>" . $str;
                                    echo "<br>" . "<br>";
                                
                                // Processing [Advanced converting the new lines to Html br tags]  :
                                    $braked3 = nl2br($str, false);

                                // Printing [ string variable before [Advanced converting the new lines to Xhtml br tags] ]:
                                    echo "The main string variable after [Advanced converting the new lines to Xhtml br tags] is " .  "<br>" . $braked3;
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