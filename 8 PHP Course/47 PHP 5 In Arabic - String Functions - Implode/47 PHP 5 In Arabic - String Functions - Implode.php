 <!--  47 PHP 5  - String Functions - Implode   --> 
<?php
    $lessonName  ='String Functions - Implode || Join';
    $title = '47 PHP5 - ' . $lessonName;
    $css = '47 PHP 5 In Arabic - String Functions - Implode.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Variable Definitions & Decleration :
        
        $arr = array("Shadi", "Sayed", "Mohamed", "Ahmed");
                        
    // =================================================================================
    
    // (*) => First Example => String Functions - Implode : contains (3) Exps : 
                            
        // (a) => Implode Method :{Default Separator }  :
                                    
            $ha1 = "Implode Method => with {Default Separator } as following: "; 
                 
                $str1 = implode(",", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str1;               
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (b) => Implode Method :{Space Separator } :
                                    
            $ha2 = "Implode Method => with {Space Separator } as following: "; 
                 
                $str2 = implode(" ", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str2;                
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (c) => Implode Method :{Comma Separator }  :
                                    
            $ha3 = "Implode Method => with {Comma Separator } as following: "; 
                 
                $str3 = implode(" ", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str3;                
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
    // =================================================================================

    // (*) => Second Example => String Functions - Join : contains (3) Exps : 
                            
        // (a) => Join Method :{Default Separator }  :
                                    
            $hb1 = "Join Method => with {Default Separator} as following: "; 
                 
                $str11 = join(",", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str11;               
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (b) => Join Method :{Space Separator }  :
                                    
            $hb2 = "Join Method => with {Space Separator } as following: "; 
                 
                $str12 = join(" ", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str12;                
                // echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
        // ---------------------------------------------
        
        // (c) => Join Method :{Comma Separator }  :
                                    
            $hb3 = "Join Method => with {Comma Separator } as following: "; 
                 
                $str13 = Join(" ", $arr);
                
                // echo "<pre>";
                // print_r($arr);
                // echo "</pre>" . "<br>" . "<br>";
                
                // echo "<pre>";
                // echo $str13;                
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
            
            <!--  (*) => First Example => String Functions - Implode : contains (3) Exps : 
                    (a) => Implode Method :{Default Separator }  : -->

                        <header>                                
                            (*) => First Example => String Functions - Implode : contains (3) Exps :  => <br>
                                <span class="one"></span> (a) => Implode Method :{Default Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha1 ?>  </h1>  
                                
                            <?php                                     
                                echo "<pre>";
                                print_r($arr);
                                echo "</pre>" . "<br>" . "<br>";
                                
                                echo "<pre>";
                                echo $str1;               
                                echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => First Example => String Functions - Implode : contains (3) Exps :
                     (b) => Implode Method :{Space Separator }  :-->
                        <header>                                
                            / (*) => (*) => First Example => String Functions - Implode : contains (3) Exps: => <br>
                                <span class="one"></span> (b) => Implode Method :{Space Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha2 ?>  </h1>  
                                
                                <?php                                     
                                     echo "<pre>";
                                     print_r($arr);
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     echo $str2;                
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!--  (*) => First Example => String Functions - Implode : contains (3) Exps :
                     (c) => Implode Method :{Comma Separator } :-->
                        <header>                                
                            / (*) => First Example => String Functions - Implode : contains (3) Exps : => <br>
                                <span class="one"></span> (c) => Implode Method :{Comma Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $ha3 ?>  </h1>  
                                
                                <?php                                     
                                     echo "<pre>";
                                     print_r($arr);
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     echo $str3;                
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!-- ================================================================================= -->            
            
            <!--  (*) => Second Example => String Functions - Join : contains (3) Exps : 
                    (a) => Implode Method :{Default Separator }  : -->

                        <header>                                
                            (*) => Second Example => String Functions - Join : contains (3) Exps :  => <br>
                                <span class="one"></span> (a) => Join Method :{Default Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb1 ?>  </h1>  
                                
                            <?php                                     
                                echo "<pre>";
                                print_r($arr);
                                echo "</pre>" . "<br>" . "<br>";
                                
                                echo "<pre>";
                                echo $str11;               
                                echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                
            <!--  (*) => Second Example => String Functions - Join : contains (3) Exps :
                     (b) => Join Method :{Space Separator }  :-->
                        <header>                                
                            / (*) => Second Example => String Functions - Join : contains (3) Exps: => <br>
                                <span class="one"></span> (b) => Join Method :{Space Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb2 ?>  </h1>  
                                
                                <?php                                     
                                     echo "<pre>";
                                     print_r($arr);
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     echo $str12;                
                                     echo "</pre>" . "<br>" . "<br>" . "----------------------------------" ;
                            // ----------------------------------------                                        
                            ?>                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                                                    
            <!--  (*) => Second Example => String Functions - Join : contains (3) Exps :
                     (c) => Join Method :{Comma Separator } :-->
                        <header>                                
                            / (*) => Second Example => String Functions - Join : contains (3) Exps : => <br>
                                <span class="one"></span> (c) => Join Method :{Comma Separator } :
                        </header>                                    
                        
                        <div>
                            <h1> <?php echo $hb3 ?>  </h1>  
                                
                                <?php                                     
                                     echo "<pre>";
                                     print_r($arr);
                                     echo "</pre>" . "<br>" . "<br>";
                                     
                                     echo "<pre>";
                                     echo $str13;                
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