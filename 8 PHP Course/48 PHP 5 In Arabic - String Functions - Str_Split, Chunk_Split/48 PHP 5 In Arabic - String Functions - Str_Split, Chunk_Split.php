 <!--  48 PHP 5 - String Functions - Str_Split, Chunk_Split   --> 
<?php
    $lessonName  ='String Functions - Str_Split, Chunk_Split';
    $title = '48 PHP5 - ' . $lessonName;
    $css = '48 PHP 5 In Arabic - String Functions - Str_Split, Chunk_Split.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        $str = "Hello world! Im Shadi and studying php";
                        
    // =================================================================================
    
    // (*) => First Example => String Functions - {str_split(String, Length)} Method : contains (3) Exps : 
                            
        // (a) => {str_split()}  Method : {Default Length value}  :
                                    
            $ha1 = "{str_split()}  Method :{Default Length value} as following: " ; 
                 
                // $arr1 = str_split($str);
                
                // echo "<pre>";
                // echo $str;
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // print_r($arr1);
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (b) => {str_split()}  Method : {Customized Length value [one letter]}  :
                                    
            $ha2 = "{str_split()}  Method :{Customized Length value [one letter] } as following: "; 
            
            // $arr2 = str_split($str, 1);
                
            // echo "<pre>";
            // echo $str;
            // echo "</pre>" . "<br>" . "<br>";
            
            // echo "<pre>";
            // print_r($arr2);
            // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;                                            
        // ---------------------------------------------
        
       // (c) => {str_split()}  Method : {Customized Length value [2 letters]}  :
                                    
            $ha3 = "{str_split()}  Method :{Customized Length value [2 letters]} as following: " ; 
                 
            // $arr3 = str_split($str, 2);
                
            // echo "<pre>";
            // echo $str;
            // echo "</pre>" . "<br>" . "<br>";
            
            // echo "<pre>";
            // print_r($arr3);
            // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;                                            
            
        // ---------------------------------------------
    // =================================================================================

    // (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method : contains (3) Exps : 
                            
        // (a) => {chunk_split()} Method : {Default Length && Default End}  :
                                    
            $hb1 = "{chunk_split()} Method :{Default Length value && Default End} as following: "; 
                 
            // $var1 = chunk_split($str);
                
            // echo "<pre>";
            // echo $str;
            // echo "</pre>" . "<br>" . "<br>";
            
            // echo "<pre>";
            // print_r($var1);
            // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (b) => {chunk_split()} Method : {Customized Length && Default End}  :
                                    
            $hb2 = "{chunk_split()} Method :{Customized Length [3] && Default End} as following  "; 
                 
            // $var2 = chunk_split($str, 3);
                
            // echo "<pre>";
            // echo $str;
            // echo "</pre>" . "<br>" . "<br>";
            
            // echo "<pre>";
            // print_r($var2);
            // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (c) => {chunk_split()} Method : {Customized Length && Customized End} :
                                    
            $hb3 = "{chunk_split()} Method :{Customized Length [3] && Customized End [ @ ]}  as following: "; 
                 
            // $var3 = chunk_split($str, 3, " @ ");
                
            // echo "<pre>";
            // echo $str;
            // echo "</pre>" . "<br>" . "<br>";
            
            // echo "<pre>";
            // print_r($var3);
            // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------        
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
            
            <!--  (*) => First Example => String Functions - {str_split} : 
                  (a) => {str_split()}  Method :{Default Length value}  : -->

                        <header>                                
                        (*) => First Example => String Functions - {str_split} : => <br>
                                <span class="one"></span> (a) => {str_split()}  Method :{Default Length value}  : 
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                $arr1 = str_split($str);
                
                                echo "<pre>";
                                echo $str;
                                echo "</pre>" . "<br>" . "<br>";
                                
                                echo "<pre>";
                                print_r($arr1);
                                echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => First Example => String Functions - {str_split} :
                    (b) => {str_split()}  Method :{Customized Length value [one letter]} : -->
                        <header>                                
                            / (*) => First Example => String Functions - {str_split} :  => <br>
                                <span class="one"></span> (b) => {str_split()}  Method :{Customized Length value [one letter]} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                                <?php                                     
                                     $arr2 = str_split($str, 1);
                
                                     echo "<pre>";
                                     echo $str;
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($arr2);
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;                                            
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!--  (*) => First Example => String Functions - {str_split} :
                    (c) => {str_split()}  Method :{Customized Length value [2 letters]}   -->
                        <header>                                
                            / (*) => First Example => String Functions - {str_split} : => <br>
                                <span class="one"></span> (c) => {str_split()}  Method :{Customized Length value [2 letters]}  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                                <?php                                     
                                     $arr3 = str_split($str, 2);
                
                                     echo "<pre>";
                                     echo $str;
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($arr3);
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;                                            
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!--  (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method : 
                    (a) => {chunk_split()} Method :{Default Length && Default End}  :  -->

                        <header>                                
                            (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method :  => <br>
                                <span class="one"></span> (a) => {chunk_split()} Method :{Default Length && Default End} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                            <?php                                     
                                $var1 = chunk_split($str);
                
                                echo "<pre>";
                                echo $str;
                                echo "</pre>" . "<br>" . "<br>";
                                
                                echo "<pre>";
                                print_r($var1);
                                echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method :
                     (b) => {chunk_split()} Method :{Customized Length && Default End}  : -->
                        <header>                                
                            / (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method :  => <br>
                                <span class="one"></span> (b) => {chunk_split()} Method :{Customized Length && Default End}  :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                                <?php                                     
                                     $var2 = chunk_split($str, 3);
                
                                     echo "<pre>";
                                     echo $str;
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($var2);
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
                                                    
            <!--  (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method : 
                    (c) => {chunk_split()} Method :{Customized Length && Customized End} : -->
                        <header>                                
                            / (*) => Second Example => String Functions - {chunk_split(String, Length, End)} Method :  => <br>
                                <span class="one"></span> (c) => {chunk_split()} Method : {Customized Length [3] && Customized End [ @ ]} :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                                <?php                                     
                                     $var3 = chunk_split($str, 3, " @ ");
                
                                     echo "<pre>";
                                     echo $str;
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     print_r($var3);
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                                ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!-- ============================================================================= -->
            </section>
                                                                    
         </body>
</html>             