 <!--  75 PHP 5 In Arabic - File System - Fread --> 
<?php

    $lessonName  ='File System - Fread ';
    $title = '75 PHP5 - ' . $lessonName;
    $css = '75 PHP 5 In Arabic - File System - Fread.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $link  = __DIR__ . "/PHP";
    // =================================================================================        
                    
    // (*) => First Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : limited size/length] :
    
        $ha1 = "File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : limited size/length] ] } as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode {r :  Read Only} :
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'r');
            
        // // Declaring the Reading File contents upon file open varible :
        //     $contentsL = fread($HandlingFile, 57);
        
        // // Printing the file contents has been read :
        //     echo $contentsL;
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : All Dynamic size/length] :
    
        $ha2 = "File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : All Dynamic size/length] ] } as following : " . "<br>" ; 
        
        // // Declaring the Handling File inside the Directory/Folder , with mode {r :  Read Only} :
        //     $HandlingFile = fopen($link. "/shadi.txt" , 'r');
        
        // // Declaring the File size :
        //     $size = filesize($link. "/shadi.txt");
            
        // // Declaring the Reading File contents upon file open varible :
        //     $contentsD = fread($HandlingFile, $size);

        // // Printing the file contents has been read :
        //     echo $contentsD;
            
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
            
            <!-- (*) => First Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : limited size/length]  : -->
                        
                    <header>
                            First Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : limited size/length] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder , with mode {r :  Read Only} :
                                $HandlingFile = fopen($link. "/shadi.txt" , 'r');
                                
                            // Declaring the Reading File contents upon file open varible :
                                $contentsL = fread($HandlingFile, 20);
                        
                            // Printing the file contents has been read :
                                echo $contentsL;
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : All Dynamic size/length] : -->
                        
                    <header>
                            Second Example => File System - { fread(Handle Pointer, Length } => [default Handling method - {r} : read Only : All Dynamic size/length] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       
                            // Declaring the Handling File inside the Directory/Folder , with mode {r :  Read Only} :
                                $HandlingFile = fopen($link. "/shadi.txt" , 'r');
        
                            // Declaring the File size :
                                $size = filesize($link. "/shadi.txt");
                                
                            // Declaring the Reading File contents upon file open varible :
                                $contentsD = fread($HandlingFile, $size);

                            // Printing the file contents has been read :
                                echo $contentsD;
                                                                    
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
