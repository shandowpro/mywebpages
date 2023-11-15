 <!--  74 PHP 5 In Arabic - File System - Fopen --> 
<?php

    $lessonName  ='File System - Fopen ';
    $title = '74 PHP5 - ' . $lessonName;
    $css = '74 PHP 5 In Arabic - File System - Fopen.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $link  = __DIR__ . "/PHP";
    // =================================================================================        
                    
    // (*) => First Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r} : read Only ] :
    
        $ha1 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r : ReadOnly} ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode {r :  Read Only} :
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'r');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r+} : read & Write + ] :
    
        $ha2 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - { r+ : Read & Write + } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { r+ : Read & Write + }  :        
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'r+');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Third Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w} : Write Only + Overwirting Current contents ] :
    
        $ha3 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w : Write Only + Overwirting the current contents  } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { w : Write Only + Overwirting Current contents } :        
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'w');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Fourth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w+} : Write & Read + Overwriting Current contents] :
    
        $ha4 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w+ : Write & Read + Overwriting to current contents } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { w+ : Write & Read + Overwriting Current contents } :        
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'w+');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Fifth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a} : Write Only + Adding to current Contents  ] :
    
        $ha5 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a : Write Only + Adding to current Contents} ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { w+ : Write & Read + Overwriting Current contents } :        
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'a');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Sixth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a+} : Write & Read + Adding to current Contents  ] :
    
        $ha6 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a : Write & Read + Adding to current Contents } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { a+ : Write & Read + Adding to current Contents } :        
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'a+');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    // (*) => Seventh Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x} : Write + Adding to current Contents + Prohibited Existance ] :
    
        $ha7 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x : Write + Adding to current Contents + Prohibited Existance } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { x: Write + Adding to current Contents + Prohibited Existance } :
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'x');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------            
    
    // (*) => Eigth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x+} : Write & Read + Adding to current Contents + Prohibited Existance ] :
    
        $ha8 = "File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x+ : Write & Read + Adding to current Contents + Prohibited Existance } ]  as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode { x+ : Write & Read + Adding to current Contents + Prohibited Existance  } :
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'x+');
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
    // ---------------------------------------------        
    
    
    // ====================================================================================        
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
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r} : read Only ]  : -->
                        
                    <header>
                         First Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r} : read Only ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'r');
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r+} : read & Write + ] : -->
                        
                    <header>
                        Second Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {r+} : read & Write + ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                               $HandlingFile = fopen($link. "/shadi.txt" , 'r+');    
                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Third Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w} : Write Only + Overwirting Current contents ]  : -->
                        
                    <header>
                          Third Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w} : Write Only + Overwirting Current contents ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'w');                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fourth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w+} : Write & Read + Overwriting to contents]  : -->
                    <header>
                        Fourth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {w+} : Write & Read + Overwriting to contents] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'w+');                                        
                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Fifth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a} : Write Only + Adding to current Contents  ]  : -->
                    <header>
                        Fifth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a} : Write Only + Adding to current Contents  ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'a');
                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
                                                               
            <!-- (*) => Sixth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a+} : Write & Read + Adding to current Contents  ]  : -->
                    <header>
                        Sixth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {a+} : Write & Read + Adding to current Contents  ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'a+');
                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Seventh Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x} : Write + Adding to current Contents + Prohibited Existance ]  : -->

                    <header>
                        Seventh Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x} : Write + Adding to current Contents + Prohibited Existance ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha7 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'x');

                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
                                                               
            <!-- (*) => Eigth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x+} : Write & Read + Adding to current Contents + Prohibited Existance ]  : -->

                    <header>
                         Eigth Example => File System - { fopen(Directory full path || URL, Mode type , Include_Path, context } => [default Handling method - {x+} : Write & Read + Adding to current Contents + Prohibited Existance ] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha8 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder :        
                                $HandlingFile = fopen($link. "/shadi.txt" , 'x+');

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
