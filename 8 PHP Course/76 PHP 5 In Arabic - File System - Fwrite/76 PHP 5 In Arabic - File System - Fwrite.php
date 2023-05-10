0 <!--  76 PHP 5 In Arabic - File System - Fwrite --> 
<?php

    $lessonName  ='File System - Fwrite ';
    $title = '76 PHP5 - ' . $lessonName;
    $css = '76 PHP 5 In Arabic - File System - Fwrite.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $link  = __DIR__ . "/PHP";
    // =================================================================================        
                    
    // (*) => First Example => File System - { fread(Handle Pointer, Length } => [default read and write method - {r+} : Read And write : Full size/length] :
    
        $ha1 = "File System - { fread(Handle Pointer, Length } => [default read and write method - {r+} : Read And write : Full size/length]  as following : " . "<br>" ; 
        
        // // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ :  Write And Read} :
        //     $HandlingFile1 = fopen($link. "/shadiR.txt" , 'r+');
            
        // // Declaring the File Reading contents on upon file Handler open variable [Reading all contents before writing ]:
        //     $contentsR11 = fread($HandlingFile1, 50);
        //     // $contentsR11 = fread($HandlingFile1, filesize($link. "/shadiR.txt"));
            
        // // Printing the file contents that has been read [before writing] :
        //     echo 'The contents of the file before adding new contents is : <br> ' . $contentsR11 . "<br>";
            
        // // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
        //     $contentsW1 = fwrite($HandlingFile1, " <br> This text has been added to the file by [w+] Writing Mode " , 50);
            
        // // Declaring the File Reading contents on upon file Handler open variable [Reading all contents after writing ]:
        //     $contentsR12 = fread($HandlingFile1, 50);
            
        // // Printing the file contents that has been read [After adding/Writing new contents] :
        //     echo 'The contents of the file before adding/Writing new contents is : <br> ' . $contentsR12 . "<br>";
        //     echo 'The contents of the file before adding/Writing new contents is : <br> ' . $contentsW1 . "<br>";
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {w+} ||  : write and read : Full size/length] :
    
        $ha2 = "File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {w+} ||  : write and read : Full size/length] as following : " . "<br>" ; 
        
        // // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ :  Write And Read} :
        //     $HandlingFile2 = fopen($link. "/shadi.txt" , 'w+');
            
        // // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
        //     $contentsW2 = fwrite($HandlingFile2, "This text has been added to the file by [w+] Writing Mode " , 50);
            
        // // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
        //     $contentsR2 = fread($HandlingFile2, 50);
            
        // // Printing the file contents that has been read [After Adding/Writing new contents]:
        //     echo $contentsR2 ;
        //     echo 'The contents of the file After adding/Writing new contents is : ' . $contentsW2 . "<br>";
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Third Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {a+} ||  : write and read : Full size/length] :
    
        $ha3 = "File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {a+} ||  : write and read : Full size/length] as following : " . "<br>" ; 
        
        // // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ :  Write And Read} :
        //     $HandlingFile3 = fopen($link. "/shadi.txt" , 'a+');
            
        // // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
        //     $contentsW3 = fwrite($HandlingFile3, "This text has been added to the file by [a+] Writing Mode " , 50);
            
        // // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
        //     $contentsR3 = fread($HandlingFile3, 50);
            
        // // Printing the file contents that has been read [After Adding/Writing new contents]:
        //     echo 'The contents of the file After adding/Writing new contents is : <br> ' . $contentsR3 . "<br>";
        //     echo 'The contents of the file After adding/Writing new contents is : <br> ' . $contentsW3 . "<br>";
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Fourth Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {x+} ||  : write and read : Full size/length] :
    
        $ha4 = "File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {x+} ||  : write and read : Full size/length] as following : " . "<br>" ; 
        
        // // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ :  Write And Read} :
        //     $HandlingFile4 = fopen($link. "/shadiX.txt" , 'x+');
            
        // // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
        //     $contentsW4 = fwrite($HandlingFile4, "This text has been added to the file by [x+] Writing Mode " , 50);
            
        // // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
        //     $contentsR4 = fread($HandlingFile4, 50);
            
        // // Printing the file contents that has been read [After adding/Writing new contents] :
        //     echo 'The contents of the file After Adding/Writing new contents is : <br> ' . $contentsR4 . "<br>";
        //     echo 'The contents of the file After Adding/Writing new contents is : <br> ' . $contentsW4 . "<br>";
            
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
            
            <!-- (*) => First Example => File System - { fread(Handle Pointer, Length } => [default read and write method - {r+} : Read And write : Full size/length] : -->
                        
                    <header>
                        First Example => File System - { fread(Handle Pointer, Length } => [default read and write method - {r+} : Read And write : Full size/length]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ :  Write And Read} :
                                $HandlingFile1 = fopen($link. "/shadiR.txt" , 'r+');
                                $size1 = filesize($link. "/shadiR.txt");
                                
                            // Declaring the File Reading contents on upon file Handler open variable [Reading all contents before writing ]:
                                $contentsR11 = fread($HandlingFile1, $size1);
                                // $contentsR11 = fread($HandlingFile1, filesize($link. "/shadiR.txt"));
                                
                            // Printing the file contents that has been read [before writing] :
                                echo 'The contents of the file before adding new contents is : <br> ' . $contentsR11 . "<br>";
                                
                            // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
                                $contentsW1 = fwrite($HandlingFile1, "<br>" . " This text has been added to the file by [w+] Writing Mode " , $size1);
                                
                            // Declaring the File Reading contents on upon file Handler open variable [Reading all contents after writing ]:
                                $contentsR12 = fread($HandlingFile1, $size1);
                                
                            // Printing the file contents that has been read [After adding/Writing new contents] :
                                echo 'The contents of the file before adding/Writing new contents is : <br> ' . $contentsR12 . "<br>";
                                echo 'The contents of the file before adding/Writing new contents is : <br> ' . $contentsW1 . "<br>";
                                
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {w+} ||  : write and read : Full size/length]  : -->
                        
                    <header>
                        Second Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {w+} ||  : write and read : Full size/length]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ :  Write And Read} :
                                $HandlingFile2 = fopen($link. "/shadi.txt" , 'w+');
                                $size2 = filesize($link. "/shadi.txt");
                                
                            // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
                                $contentsW2 = fwrite($HandlingFile2, "This text has been added to the file by [w+] Writing Mode " , $size2);
                                
                            // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
                                $contentsR2 = fread($HandlingFile2, $size2);
                                
                            // Printing the file contents that has been read [After Adding/Writing new contents]:
                                echo $contentsR2 ;
                                echo 'The contents of the file After adding/Writing new contents is : ' . $contentsW2 . "<br>";
                                                                                                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {a+} ||  : write and read : Full size/length] : -->
                        
                    <header>
                        Third Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {a+} ||  : write and read : Full size/length]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ :  Write And Read} :
                                $HandlingFile3 = fopen($link. "/shadi.txt" , 'a+');
                                $size3 = filesize($link. "/shadi.txt");
            
                            // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
                                $contentsW3 = fwrite($HandlingFile3, "This text has been added to the file by [a+] Writing Mode " , $size3);
                                
                            // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
                                $contentsR3 = fread($HandlingFile3, $size3);
                                
                            // Printing the file contents that has been read [After Adding/Writing new contents]:
                                echo 'The contents of the file After adding/Writing new contents is : <br> ' . $contentsR3 . "<br>";
                                echo 'The contents of the file After adding/Writing new contents is : <br> ' . $contentsW3 . "<br>";
                                
                                
                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fourth Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {x+} ||  : write and read : Full size/length]: -->
                        
                    <header>
                            Fourth Example => File System - { fwrite(Handle Pointer, String , Length } => [default write and read method - {x+} ||  : write and read : Full size/length] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ :  Write And Read} :
                                $HandlingFile4 = fopen($link. "/shadiX.txt" , 'x+');
                                $size4 = filesize($link. "/shadiX.txt");
                                
                            // Declaring the File Writing contents on upon file Handler open variable [Writing all contents]:
                                $contentsW4 = fwrite($HandlingFile4, "This text has been added to the file by [x+] Writing Mode " , $size4);
                                
                            // Declaring the File Reading contents on upon file Handler open variable [Reading all contents]:
                                $contentsR4 = fread($HandlingFile4, $size4);
                                
                            // Printing the file contents that has been read [After adding/Writing new contents] :
                                echo 'The contents of the file After Adding/Writing new contents is : <br> ' . $contentsR4 . "<br>";
                                echo 'The contents of the file After Adding/Writing new contents is : <br> ' . $contentsW4 . "<br>";
                                                                                                                    
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
