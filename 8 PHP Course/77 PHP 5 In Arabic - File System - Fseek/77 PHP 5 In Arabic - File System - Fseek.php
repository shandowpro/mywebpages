 <!--  77 PHP 5 In Arabic - File System - Fseek --> 
<?php

    $lessonName  ='File System - Fseek ';
    $title = '77 PHP5 - ' . $lessonName;
    $css = '77 PHP 5 In Arabic - File System - Fseek.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $file  = __DIR__ . "/PHP" . "/shadi.txt";
    // =================================================================================        
                    
    // (*) => First Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_SET} } => [default Seeking Mode  - {SEEK_SET} ] + [write method with {r+}] :
    
        $ha1 = "File System - { fseek(Handle Pointer, Index , Seek Mode } => [default Seeking Mode  - {SEEK_SET} ] + [write method with {r+}] :  as following : " . "<br>" ; 
        
        // // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
        //     $HandlingFile1 = fopen($file , 'r+');
            
        // // Seeking operation inside the assigned file by [default Mode : SEEK_SET]:
        //     fseek($HandlingFile1, 2 ,SEEK_SET);            
                    
            
        // // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
        //     $write1 = fwrite($HandlingFile1, 'a');
 
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_CUR} } => [advanced Seeking Mode  - {SEEK_CUR} ] + [write method with {r+}] :
    
        $ha2 = "File System - { fseek(Handle Pointer, Index , Seek Mode } => [advanced Seeking Mode  - {SEEK_CUR} ] + [write method with {r+}] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
            // $HandlingFile1 = fopen($file , 'r+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

        // // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR]:
        //     fseek($HandlingFile1, 4 ,SEEK_CUR);            
                    
            
        // // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode : SEEK_CUR] :
        //     $write2 = fwrite($HandlingFile1, "a");
 
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Third Example => File System - { fseek(Handle Pointer, Index{Negative} , Seek Mode{SEEK_END} } => [advanced Seeking Mode  - {SEEK_END} >> Negative Index Value ] + [write method with {r+}] :
    
        $ha3 = "File System - File System - { fseek(Handle Pointer, Index{Negative} , Seek Mode{SEEK_END} } => [advanced Seeking Mode  - {SEEK_END} >> Negative Index Value ] + [write method with {r+} ] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
            // $HandlingFile1 = fopen($file , 'r+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            
            
        // // Seeking operation inside the assigned file by [Advanced Mode : SEEK_END]:
        //     fseek($HandlingFile1, -5 ,SEEK_END);            
                    
            
        // // Declaring the File Writing Method by replacing the new contents with certain (-index value) [upon index and seeking mode : SEEK_END] :
        //     $write3 = fwrite($HandlingFile1, "a");
 
            
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
            
            <!-- (*) => First Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_SET} } => [default Seeking Mode  - {SEEK_SET} ] + [write method with {r+}]  : -->
                        
                    <header>
                        First Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_SET} } => [default Seeking Mode  - {SEEK_SET} ] + [write method with {r+}]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
                                $HandlingFile1 = fopen($file , 'r+');
            
                            // Seeking operation inside the assigned file by [default Mode : SEEK_SET]:
                                fseek($HandlingFile1, 2 ,SEEK_SET);            
                                        
                                
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
                                $write1 = fwrite($HandlingFile1, 'a');
                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_CUR} } => [advanced Seeking Mode  - {SEEK_CUR} ] + [write method with {r+}]   : -->
                        
                    <header>
                        Second Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_CUR} } => [advanced Seeking Mode  - {SEEK_CUR} ] + [write method with {r+}]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
                                // $HandlingFile1 = fopen($file , 'r+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

                        
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR]:
                                fseek($HandlingFile1, 4 ,SEEK_CUR);            
                                        
                                
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode : SEEK_CUR]:
                                $write2 = fwrite($HandlingFile1, "a");
                        
                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_END} } => [advanced Seeking Mode  - {SEEK_END} >> Negative Index Value ] + [write method with {r+}]  : -->
                        
                    <header>
                        Third Example => File System - { fseek(Handle Pointer, Index{Positive} , Seek Mode{SEEK_END} } => [advanced Seeking Mode  - {SEEK_END} >> Negative Index Value ] + [write method with {r+}]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
                                // $HandlingFile1 = fopen($file , 'r+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_END]:
                                fseek($HandlingFile1, -5 ,SEEK_END);            
                                        
                                
                            // Declaring the File Writing Method by replacing the new contents with certain (-index value) [upon index and seeking mode : SEEK_END]:
                                $write3 = fwrite($HandlingFile1, "a");
                    
                                    
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
