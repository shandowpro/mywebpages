 <!--  78 PHP 5 In Arabic - File System - Fclose + Training 2 --> 
<?php

    $lessonName  ='File System - Fclose + Training 2 ';
    $title = '78 PHP5 - ' . $lessonName;
    $css = '78 PHP 5 In Arabic - File System - Fclose + Training 2.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================
    // (*) Variable Definitions & Decleration :                          
            $fileR  = __DIR__ . "/PHP" . "/shadiR.txt";  //  For the r & r+ mode
            $fileW  = __DIR__ . "/PHP" . "/shadiW.txt";  //  For the w & w+ mode
            $fileA  = __DIR__ . "/PHP" . "/shadiA.txt";  //  For the a & a+ mode
            // $file  = __DIR__ . "/PHP" . "/shadir.txt";  //  For the x & x+ mode [Must be not existed!]
    // =================================================================================                            

    // (*) => I) fwrite() :
    // (*) => First Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {r+} Read And write] :
    
        $ha1 = "File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {r+} Read And write] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
            $HandlingFile1 = fopen($fileR , 'r+');
            
        // Writing operation inside the assigned file by [ {r+ : Read and Write } Mode ]:
            fwrite($HandlingFile1, ' This contents by write mode [r+]');

        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                                        
    // ---------------------------------------------        
    
    // (*) => Second Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {w+} Write(Overwriting) and read] :
    
        $ha2 = "File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write(Overwriting) method with {w+}] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : Write(Overwriting) and read} :
            $HandlingFile2 = fopen($fileW , 'w+');
            
        // Writing operation inside the assigned file by [ w+ Mode ] :
            fwrite($HandlingFile2, ' This contents by write mode [w+]' . "<br>" ); 

            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                                        
    // ---------------------------------------------           
    
    // (*) => Third Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {a+} Write(Add) and read] :
    
        $ha3 = "File System - { fwrite(Handle Pointer, contents , length} => [ write(Add) method with {a+}] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : Write(Add) and read} :
            $HandlingFile3 = fopen($fileA , 'a+');
        
        // Writing operation inside the assigned file by [ a+ Mode ] :
            fwrite($HandlingFile3, ' This contents by write mode [a+] ' . "<br>" ); 
                                        
    // ---------------------------------------------            
        
    // (*) => Fourth Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {x+} Write(Not Existed File) and read] :
    
        $ha4 = "File System - { fwrite(Handle Pointer, contents , length} => [ write(Add) method with {x+}] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : Write(Not Existed File) and read} :
            $HandlingFile4 = fopen(__DIR__ . "/PHP" . "/shadiX.txt" , 'x+');            
        
        // Writing operation inside the assigned file by [ x+ Mode ] :
            fwrite($HandlingFile4, 'This contents by write mode [x+]' . "<br>" ); 
                                        
    // ---------------------------------------------        
    // ---------------------------------------------        
    
    // (*) =>  II) fread() :
    // Every fopen method mode with reading only && Reading and writing + with each length : [limited and dynamic] :

    // (*) => Fifth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {r+} read and Write] :
    
        $ha5 = "File System - { fread(Handle Pointer , length[limited + dynamic]} => [ Read method with {r+} read and Write] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : read and write} :
            $HandlingFile5 = fopen($fileR, 'r+'); 
        
        // Writing of the read variable operation inside the assigned file by [ r+ Mode ] :
            fwrite($HandlingFile5, ' This contents has been written by mode [r+] ' ); 

        // Reading[limited length] operation inside the assigned file by [ r+ Mode ] :
            $readLim1 = fread($HandlingFile5, 100); 

        // Reading[Dynamic length] operation inside the assigned file by [ r+ Mode ] :
            // $readDyn1 = fread($HandlingFile5, filesize(__DIR__ . "/PHP" . "/shadiR.txt"));
            // $readDyn1 = fread($HandlingFile5, filesize("/PHP/shadiR.txt"));
        
        // Typing the read contents [Limited & Dynamic] by [a+: write and read method] :
            echo 'The file read contents by limited length as following : ' . '<br>' . $readLim1 . "<br>" . "<br>". "<hr>" . "<br>";
            // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn1 . "<br>" . "<br>";
        
        
                                                           
    // ---------------------------------------------        
    
    // (*) => Sixth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {w+} : Write(overwrite) and read ] :
    
        $ha6 = "File System - { fread(Handle Pointer , length[limited + dynamic]} => [ Read method with {w+} :  Write(overwrite) read] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : read and write} :
            $HandlingFile6 = fopen($fileW , 'w+'); 
                
        // Writing operation inside the assigned file by [ w+ Mode ] :
            fwrite($HandlingFile6, ' This contents has been written by mode [w+] ' ); 
        
        // Reading[limited length] operation inside the assigned file by [ w+ Mode ] :
            $readLim2 = fread($HandlingFile6, 100); 
    
        // Reading[Dynamic length] operation inside the assigned file by [ w+ Mode ] :
            // $readDyn2 = fread($HandlingFile6, filesize(__DIR__ . "/PHP" . "/shadiW.txt")); 
            // $readDyn2 = fread($HandlingFile6, filesize("/PHP/shadiW.txt")); 
        
        // Typing the read contents [Limited & Dynamic] by [w+: write and read method] :
            echo 'The file read contents by limited length as following : ' . '<br>' . $readLim2 . "<br>" . "<hr>" . "<br>";
            // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn2 . "<br>" ;
                
                                                                                                        
    // ---------------------------------------------        
    
    // (*) => Seventh Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {a+} : Write(add-replace) and read ] :
    
        $ha7 = "File System - { fread(Handle Pointer , length[limited + dynamic]} => [ Read method with {a+} : Write(add-replace) and read] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : read and write} :
            $HandlingFile7 = fopen($fileA , 'a+'); 
                    
        // Writing operation inside the assigned file by [ a+ Mode ] :
            fwrite($HandlingFile7, ' This contents has been written by mode [a+] ' ); 

        // Reading[limited length] operation inside the assigned file by [ a+ Mode ] :
            $readLim3 = fread($HandlingFile7, 100); 
        
        // Reading[Dynamic length] operation inside the assigned file by [ a+ Mode ] :
            // $readDyn3 = fread($HandlingFile7, filesize(__DIR__ . "/PHP/shadiA.txt")); 
            // $readDyn3 = fread($HandlingFile7, filesize("/PHP/shadiA.txt")); 
        
        // Typing the read contents [Limited & Dynamic] by [a+: write and read method] :
            echo 'The file read contents by limited length as following : ' . '<br>' . $readLim3 . "<br>" . "<br>" . "<hr>" . "<br>" ;
            // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn3 . "<br>" ;
        
                                        
    // ---------------------------------------------        
    
    // (*) => Eigth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Write method with {x+} :  Write(File Not Existance) and read] :
    
        $ha8 = "File System - { fread(Handle Pointer , length[limited + dynamic]} => [ Read method with {x+} : ] :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : read and write} :
            $HandlingFile8 = fopen(__DIR__ . '/PHP/shadiX1.txt' , 'x+'); 
                    
        // Writing operation inside the assigned file by [ x+ Mode ] :
            fwrite($HandlingFile8, ' This contents has been written by mode [x+] ' ); 

        // Reading[limited length] operation inside the assigned file by [ x+ Mode ] :
            $readLim4 = fread($HandlingFile8, 100); 
        
        // Reading[Dynamic length] operation inside the assigned file by [ x+ Mode ] :
            // $readDyn4 = fread($HandlingFile8, filesize(__DIR__ . "/PHP/shadiX1.txt")); 
            // $readDyn4 = fread($HandlingFile8, filesize("/PHP/shadiX1.txt")); 
        
        // Typing the read contents [Limited & Dynamic] by [x+: write and read method] :
            echo 'The file read contents by limited length as following : ' . '<br>' . $readLim4 . "<br>" . "<br>" . "<hr>" . "<br>";
            // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn4 . "<br>" ;
        
                                        
    // ---------------------------------------------        
    
    // (*) =>  III) fseek() :
    // (*) => Nineth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {r+}] :
    
        $ha9 = "File System - { fseek(Handle Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {r+}] :  as following : " . "<br>" ; 
    
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
            $HandlingFile9 = fopen($fileR , 'r+');
            
        // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
            fseek($HandlingFile9, 2 ,SEEK_SET);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeSET1 = fwrite($HandlingFile9, ' Text written by method r+ , using default seek-set method ');
            $readSET1 = fread($HandlingFile9, 100);
            echo "The file after writing contents by writing mode : [r+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET1 . "<br>" . "<hr>". "<br>";
    
        // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
            fseek($HandlingFile9, 4 ,SEEK_CUR);                                
    
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeCUR1 = fwrite($HandlingFile9, ' Text written by method r+ , using default seek-set method ');
            $readCUR1 = fread($HandlingFile9, 100);
            echo "The file after writing contents by writing mode : [r+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR1 . "<br>" . "<hr>" . "<br>" ;
            
        // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
            fseek($HandlingFile9, -2 ,SEEK_END);            
            
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeEND1 = fwrite($HandlingFile9, ' Text written by method r+ , using seek-end method ');
            $readEND1 = fread($HandlingFile9, 100);
            echo "The file after writing contents by writing mode : [r+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND1 . "<br>" . "<hr>" . "<br>";

            
        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Tenth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {w+}] :
    
        $ha10 = "File System - { fseek(Handle Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {w+}]  :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : Read and Write} :
            $HandlingFile10 = fopen($fileW , 'w+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

        // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
           fseek($HandlingFile10 , 2 ,SEEK_SET);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeSET2 = fwrite($HandlingFile10 , ' Text written by method w+ , using default seek-set method ');
            $readSET2 = fread($HandlingFile10, 100);
            echo "The file after writing contents by writing mode : [w+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET2 . "<br>" . "<hr>" . "<br>";

        // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
            fseek($HandlingFile10 , 4 ,SEEK_CUR);                                
    
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeCUR2 = fwrite($HandlingFile10 , ' Text written by method w+ , using default seek-set method ');
            $readCUR2 = fread($HandlingFile10, 100);
            echo "The file after writing contents by writing mode : [w+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR2 . "<br>" . "<hr>" . "<br>";
            
        // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
            fseek($HandlingFile10 , -2 ,SEEK_END);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeEND2 = fwrite($HandlingFile10 , ' Text written by method w+ , using seek-end method '); 
            $readEND2 = fread($HandlingFile10, 100);
            echo "The file after writing contents by writing mode : [w+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND2 . "<br>" . "<hr>" . "<br>";
 
            
        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    
    // (*) => Eleventh Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {a+}] :
    
        $ha11 = "File System - File System - { fseek(Handle Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {a+}]  :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : Read and Write} :
            $HandlingFile11 = fopen($fileA , 'a+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

        // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
           fseek($HandlingFile11 , 2 ,SEEK_SET);                       
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeSET3 = fwrite($HandlingFile11 , ' Text written by method a+ , using default seek-set method ');
            $readSET3 = fread($HandlingFile11, 100);
            echo "The file after writing contents by writing mode : [a+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET3 . "<br>" . "<hr>" . "<br>";


        // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
            fseek($HandlingFile11 , 4 ,SEEK_CUR);                                
    
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeCUR3 = fwrite($HandlingFile11 , ' Text written by method a+ , using default seek-set method ');
            $readCUR3 = fread($HandlingFile11, 100);
            echo "The file after writing contents by writing mode : [a+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR3 . "<br>" . "<hr>" . "<br>";
            
            
        // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
            fseek($HandlingFile11 , -2 ,SEEK_END);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeEND3 = fwrite($HandlingFile11 , ' Text written by method a+ , using seek-end method '); 
            $readEND3 = fread($HandlingFile11, 100);
            echo "The file after writing contents by writing mode : [a+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND3 . "<br>" . "<hr>" . "<br>";

            
        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
        
    // (*) => Twelvth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {x+}] :
    
        $ha12 = "File System - File System - { fseek(Handle Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {x+}]  :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : Read and Write} :
            $HandlingFile12 = fopen(__DIR__ . '/PHP' . '/shadiX2.txt' , 'x+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]

        // Writing contents inside the new file operation inside the assigned file by {x+} :
           fwrite($HandlingFile12 , ' This is new content written by the [x+] Mode ');            
                        
    
        // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET]:
           fseek($HandlingFile12 , 2 ,SEEK_SET);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
            $writeSET4 = fwrite($HandlingFile12 , ' Text written by method x+ , using default seek-set method ');
            $readSET4 = fread($HandlingFile12, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET4 . "<br>" . "<hr>" . "<br>";

        // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR]:
            fseek($HandlingFile12 , 4 ,SEEK_CUR);                                
    
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
            $writeCUR4 = fwrite($HandlingFile12 , ' Text written by method x+ , using default seek-set method ');
            $readCUR4 = fread($HandlingFile12, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR4 . "<br>" . "<hr>" . "<br>";
            
        // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END]:
            fseek($HandlingFile12 , -2 ,SEEK_END);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
            $writeEND4 = fwrite($HandlingFile12 , ' Text written by method x+ , using seek-end method '); 
            $readEND4 = fread($HandlingFile12, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND4 . "<br>" . "<hr>" . "<br>";
            
        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ; 
    
    // ---------------------------------------------        
    // ---------------------------------------------        

    // (*) =>  IV) fopen(ftp url) :
    // (*) => Thirtenth Example => File System - { fopen(Handler Pointer [ftp url] , Open Mode } => [open FTP file in the file manager] :
    
        // $ha13 = "File System - { fopen(Handle Pointer [FTP url], Open Mode } => [open FTP file in the file manager]  :  as following : " . "<br>" ; 
        
        // // Declaring the main open Handling FTP File inside the FTP Directory/Folder , with Mode: {r+ : Read and Write} :
        //     $HandlingFile13 = fopen('ftp://username:password@domainName.domainExtension/file Name.FileExtension', 'r+');    //  [The open file method the ftp file in the certain server and domain ]

        // // Writing contents inside the new FTP file operation inside the assigned Directory/file and extension by {r+} :
        //    fwrite($HandlingFile13 , ' This is new content written by the [r+] Mode ');      //  [Writing Method to write inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]
                          
        // // Seeking operation inside the assigned ftp file from [index numbmer: 2] , [default Mode : SEEK_SET] :
        //    fseek($HandlingFile13 , 2 ,SEEK_SET);          //  [Seeking Method to Set the index inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]  
                                
           
        // // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
        //     fwrite($HandlingFile13 , 'Writing inside thg ftp from the seek Set index ');   //  [Writing Method to write inside the FTP Directory file {from the index set} in the certain server and domain using the {FTP username and password} ]
                      
                                
        // //  Using the Closing Method to close handling the FTP file :
        //     fclose($HandlingFile13); 
            
        // echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
    // ---------------------------------------------        
    // ---------------------------------------------                            
    
    // (*) =>  V) Overall example:
    /* (*) => Fourtenth Example => File System - => [All file system methods] + [using method with {r+}] :
        1- {fopen(Handle Pointer , r+)} &&
        2- {fwrite()} &&
        3- {fread(Max Length)} &&
        4- fseek(Offset Index{Positive || Negative} , All Seek Modes) &&
        5- {fclose(Handle Pointer}} 
      */
    
        $ha14 = "File System - File System - => [All file system methods] + [using method with {r+}] :
        1- {fopen(Handle Pointer , r+)} &&
        2- {fwrite()} &&
        3- {fread(Max Length)} &&
        4- fseek(Offset Index{Positive || Negative} , All Seek Modes) &&
        5- fwrite() from the seek pointer &&
        6- {fclose(Handle Pointer}}   :  as following : " . "<br>" ; 
        
        // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
            $HandlingFile14 = fopen($fileR , 'r+');    //  [Opening the handler pointer by r+ mode]

        // Writing contents inside the new file operation inside the assigned file by {x+} :
           fwrite($HandlingFile14 , ' This is new content written by the [r+] Mode ' . '<br>');
    
        // Reading all contents from the file by {r+} :
        //    $readAll = fread($HandlingFile14 , filesize(__DIR__ . "/PHP" . "/shadiR.txt"));            
           $readAll = fread($HandlingFile14 , 100);                    
    
        // Printing all contents from the file by {r+} :
           echo 'Read variable Variable of the all file contents as following  : ' . '<br>' . $readAll . '<br>' . '<hr>' . "<br>";           
    

        // Seeking operation inside the assigned file by from [Index numbmer: 2] , [default Mode : SEEK_SET] :
           fseek($HandlingFile14 , 2 ,SEEK_SET);            
                                
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeSET5 = fwrite($HandlingFile14 , ' Text written by method r+ , using default seek-set method ');
            $readSET5 = fread($HandlingFile14, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET5 . "<br>" . "<hr>" . "<br>" ;

        // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
            fseek($HandlingFile14 , 4 ,SEEK_CUR);                                
    
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeCUR5 = fwrite($HandlingFile14 , ' Text written by method {r+} , using CUR seek-set method ');
            $readCUR5 = fread($HandlingFile14, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [CUR seeking] is :" . "<br>" . $readCUR5 . "<br>" . "<hr>" . "<br>";
            
        // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
            fseek($HandlingFile14 , -2 ,SEEK_END);            
            
        // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
            $writeEND5 = fwrite($HandlingFile14 , ' Text written by method r+ , using seek-end method '); 
            $readEND5 = fread($HandlingFile14, 100);
            echo "The file after writing contents by writing mode : [x+] && Seeking mode: [End seeking] is :" . "<br>" . $readEND5 . "<br>" . "<hr>" . "<br>" ;
            
            
        // Closing the File Writing Method [fclose()] :
            fclose($HandlingFile14); 
            
        echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
    
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
                    border-radius: 100px;
                    margin: 100px auto;
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
            
            <!-- (*) => First Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {r+} Read And write]   : -->
                        
                    <header>
                        First Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {r+} Read And write]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 ?>  </h1>  
                            
                        <?php       
                            
                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
                                $HandlingFile1 = fopen($fileR , 'r+');
                            
                            // Writing operation inside the assigned file by [ {r+ : Read and Write } Mode ]:
                                fwrite($HandlingFile1, ' This contents by write mode [r+]');
                    
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;                                    
                                                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->    
            
            <!-- (*) => Second Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {w+} Write(Overwriting) and read]  : -->
                        
                    <header>
                        Second Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {w+} Write(Overwriting) and read] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2 ?>  </h1>  
                            
                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : Write(Overwriting) and read} :
                                $HandlingFile2 = fopen($fileW , 'w+');
            
                            // Writing operation inside the assigned file by [ w+ Mode ] :
                                fwrite($HandlingFile2, ' This contents by write mode [w+]' . "<br>" );                     
                                                                                
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Third Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {a+} Write(Add) and read]  : -->
                        
                    <header>
                        Third Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {a+} Write(Add) and read] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3 ?>  </h1>                              

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : Write(Add) and read} :
                                $HandlingFile3 = fopen($fileA , 'a+');
        
                            // Writing operation inside the assigned file by [ a+ Mode ] :
                                fwrite($HandlingFile3, ' This contents by write mode [a+] ' . "<br>" ); 

                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fourth Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {x+} Write(Not Existed File) and read]  : -->
                        
                    <header>
                        Fourth Example => File System - { fwrite(Handle Pointer, contents , length[Default]} => [ write method with {x+} Write(Not Existed File) and read] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha4 ?>  </h1>                              

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : Write(Not Existed File) and read} :
                                $HandlingFile4 = fopen(__DIR__ . "/PHP" . "/shadiX.txt" , 'x+');            
        
                            // Writing operation inside the assigned file by [ x+ Mode ] :
                                fwrite($HandlingFile4, 'This contents by write mode [x+]' . "<br>" ); 
                                                                        
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fifth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {r+} read and Write]   : -->
                        
                    <header>
                        Fifth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {r+} read and Write] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha5 ?>  </h1>                              

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : read and write} :
                                $HandlingFile5 = fopen($fileR, 'r+'); 
        
                            // Writing of the read variable operation inside the assigned file by [ r+ Mode ] :
                                fwrite($HandlingFile5, ' This contents has been written by mode [r+] ' ); 
                    
                            // Reading[limited length] operation inside the assigned file by [ r+ Mode ] :
                                $readLim1 = fread($HandlingFile5, 100); 
                    
                            // Reading[Dynamic length] operation inside the assigned file by [ r+ Mode ] :
                                // $readDyn1 = fread($HandlingFile5, filesize(__DIR__ . "/PHP" . "/shadiR.txt"));
                                // $readDyn1 = fread($HandlingFile5, filesize("/PHP/shadiR.txt"));
                            
                            // Typing the read contents [Limited & Dynamic] by [a+: write and read method] :
                                echo 'The file read contents by limited length as following : ' . '<br>' . $readLim1 . "<br>" . "<br>". "<hr>" . "<br>";
                                // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn1 . "<br>" . "<br>";
                                                                                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Sixth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {w+} : Write(overwrite) and read ]    : -->
                        
                    <header>
                        Sixth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {w+} : Write(overwrite) and read ]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha6 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : read and write} :
                                $HandlingFile6 = fopen($fileW , 'w+'); 
                
                            // Writing operation inside the assigned file by [ w+ Mode ] :
                                fwrite($HandlingFile6, ' This contents has been written by mode [w+] ' ); 
                            
                            // Reading[limited length] operation inside the assigned file by [ w+ Mode ] :
                                $readLim2 = fread($HandlingFile6, 100); 
                        
                            // Reading[Dynamic length] operation inside the assigned file by [ w+ Mode ] :
                                // $readDyn2 = fread($HandlingFile6, filesize(__DIR__ . "/PHP" . "/shadiW.txt")); 
                                // $readDyn2 = fread($HandlingFile6, filesize("/PHP/shadiW.txt")); 
                            
                            // Typing the read contents [Limited & Dynamic] by [w+: write and read method] :
                                echo 'The file read contents by limited length as following : ' . '<br>' . $readLim2 . "<br>" . "<hr>" . "<br>";
                                // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn2 . "<br>" ;
                                                                                                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Seventh Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {a+} : Write(add-replace) and read ] : -->
                        
                    <header>
                        Seventh Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Read method with {a+} : Write(add-replace) and read ]: <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha7 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : read and write} :
                                $HandlingFile7 = fopen($fileA , 'a+'); 
                    
                            // Writing operation inside the assigned file by [ a+ Mode ] :
                                fwrite($HandlingFile7, ' This contents has been written by mode [a+] ' ); 
                    
                            // Reading[limited length] operation inside the assigned file by [ a+ Mode ] :
                                $readLim3 = fread($HandlingFile7, 100); 
                            
                            // Reading[Dynamic length] operation inside the assigned file by [ a+ Mode ] :
                                // $readDyn3 = fread($HandlingFile7, filesize(__DIR__ . "/PHP/shadiA.txt")); 
                                // $readDyn3 = fread($HandlingFile7, filesize("/PHP/shadiA.txt")); 
                            
                            // Typing the read contents [Limited & Dynamic] by [a+: write and read method] :
                                echo 'The file read contents by limited length as following : ' . '<br>' . $readLim3 . "<br>" . "<br>" . "<hr>" . "<br>" ;
                                // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn3 . "<br>" ;
                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Eigth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Write method with {x+} :  Write(File Not Existance) and read] : -->
                        
                    <header>
                        Eigth Example => File System - { fread(Handler Pointer , length[limited + dynamic]} => [ Write method with {x+} :  Write(File Not Existance) and read]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha8 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : read and write} :
                                $HandlingFile8 = fopen(__DIR__ . '/PHP/shadiX1.txt' , 'x+'); 
                                        
                            // Writing operation inside the assigned file by [ x+ Mode ] :
                                fwrite($HandlingFile8, ' This contents has been written by mode [x+] ' ); 
                    
                            // Reading[limited length] operation inside the assigned file by [ x+ Mode ] :
                                $readLim4 = fread($HandlingFile8, 100); 
                            
                            // Reading[Dynamic length] operation inside the assigned file by [ x+ Mode ] :
                                // $readDyn4 = fread($HandlingFile8, filesize(__DIR__ . "/PHP/shadiX1.txt")); 
                                // $readDyn4 = fread($HandlingFile8, filesize("/PHP/shadiX1.txt")); 
                            
                            // Typing the read contents [Limited & Dynamic] by [x+: write and read method] :
                                echo 'The file read contents by limited length as following : ' . '<br>' . $readLim4 . "<br>" . "<br>" . "<hr>" . "<br>";
                                // echo 'The file read contents by Max length as following : ' . '<br>' . $readDyn4 . "<br>" ;
                            
                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                                        
            <!-- ---------------------------------------------------------- -->                                                                                           

            <!-- (*) => Nineth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {r+}]: -->
                        
                    <header>
                        Nineth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {r+}]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha9 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write } :
                                $HandlingFile9 = fopen($fileR , 'r+');
            
                            // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
                                fseek($HandlingFile9, 2 ,SEEK_SET);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeSET1 = fwrite($HandlingFile9, ' Text written by method r+ , using default seek-set method ');
                                $readSET1 = fread($HandlingFile9, 100);
                                echo "The file after writing contents by writing mode : [r+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET1 . "<br>" . "<hr>". "<br>";
                        
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
                                fseek($HandlingFile9, 4 ,SEEK_CUR);                                
                        
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeCUR1 = fwrite($HandlingFile9, ' Text written by method r+ , using default seek-set method ');
                                $readCUR1 = fread($HandlingFile9, 100);
                                echo "The file after writing contents by writing mode : [r+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR1 . "<br>" . "<hr>" . "<br>" ;
                                
                            // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
                                fseek($HandlingFile9, -2 ,SEEK_END);            
                                
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeEND1 = fwrite($HandlingFile9, ' Text written by method r+ , using seek-end method ');
                                $readEND1 = fread($HandlingFile9, 100);
                                echo "The file after writing contents by writing mode : [r+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND1 . "<br>" . "<hr>" . "<br>";                                            
                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Tenth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {w+}] : -->
                        
                    <header>
                        Tenth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {w+}]  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha10 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {w+ : Read and Write} :
                                $HandlingFile10 = fopen($fileW , 'w+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

                            // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
                            fseek($HandlingFile10 , 2 ,SEEK_SET);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeSET2 = fwrite($HandlingFile10 , ' Text written by method w+ , using default seek-set method ');
                                $readSET2 = fread($HandlingFile10, 100);
                                echo "The file after writing contents by writing mode : [w+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET2 . "<br>" . "<hr>" . "<br>";
                    
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
                                fseek($HandlingFile10 , 4 ,SEEK_CUR);                                
                        
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeCUR2 = fwrite($HandlingFile10 , ' Text written by method w+ , using default seek-set method ');
                                $readCUR2 = fread($HandlingFile10, 100);
                                echo "The file after writing contents by writing mode : [w+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR2 . "<br>" . "<hr>" . "<br>";
                                
                            // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
                                fseek($HandlingFile10 , -2 ,SEEK_END);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeEND2 = fwrite($HandlingFile10 , ' Text written by method w+ , using seek-end method '); 
                                $readEND2 = fread($HandlingFile10, 100);
                                echo "The file after writing contents by writing mode : [w+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND2 . "<br>" . "<hr>" . "<br>";                                        
                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Eleventh Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {a+}]  : -->
                        
                    <header>
                        Eleventh Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {a+}]   : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha11 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {a+ : Read and Write} :
                                $HandlingFile11 = fopen($fileA , 'a+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]            

                            // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET] :
                            fseek($HandlingFile11 , 2 ,SEEK_SET);                       
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeSET3 = fwrite($HandlingFile11 , ' Text written by method a+ , using default seek-set method ');
                                $readSET3 = fread($HandlingFile11, 100);
                                echo "The file after writing contents by writing mode : [a+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET3 . "<br>" . "<hr>" . "<br>";
                    
                    
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
                                fseek($HandlingFile11 , 4 ,SEEK_CUR);                                
                        
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeCUR3 = fwrite($HandlingFile11 , ' Text written by method a+ , using default seek-set method ');
                                $readCUR3 = fread($HandlingFile11, 100);
                                echo "The file after writing contents by writing mode : [a+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR3 . "<br>" . "<hr>" . "<br>";
                                
                                
                            // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
                                fseek($HandlingFile11 , -2 ,SEEK_END);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeEND3 = fwrite($HandlingFile11 , ' Text written by method a+ , using seek-end method '); 
                                $readEND3 = fread($HandlingFile11, 100);
                                echo "The file after writing contents by writing mode : [a+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND3 . "<br>" . "<hr>" . "<br>";
                                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Twelvth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {x+}]  : -->
                        
                    <header>
                        Twelvth Example => File System - { fseek(Handler Pointer, offset Index{Positive || Negative} , Seek Mode{SEEK_SET || SEEK_CUR || SEEK_END} } => [All Seeking Modes] + [write method with {x+}] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha12 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {x+ : Read and Write} :
                                $HandlingFile12 = fopen(__DIR__ . '/PHP' . '/shadiX2.txt' , 'x+');    //  [The same open file method due to no change, but will Not be acitivated to not Reset the seek index again]

                            // Writing contents inside the new file operation inside the assigned file by {x+} :
                                fwrite($HandlingFile12 , ' This is new content written by the [x+] Mode ');            
                                            
                        
                            // Seeking operation inside the assigned file by from [index numbmer: 2] , [default Mode : SEEK_SET]:
                                fseek($HandlingFile12 , 2 ,SEEK_SET);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
                                $writeSET4 = fwrite($HandlingFile12 , ' Text written by method x+ , using default seek-set method ');
                                $readSET4 = fread($HandlingFile12, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET4 . "<br>" . "<hr>" . "<br>";
                    
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR]:
                                fseek($HandlingFile12 , 4 ,SEEK_CUR);                                
                        
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
                                $writeCUR4 = fwrite($HandlingFile12 , ' Text written by method x+ , using default seek-set method ');
                                $readCUR4 = fread($HandlingFile12, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [SEEK_CUR] is :" . "<br>" . $readCUR4 . "<br>" . "<hr>" . "<br>";
                                
                            // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END]:
                                fseek($HandlingFile12 , -2 ,SEEK_END);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode]:
                                $writeEND4 = fwrite($HandlingFile12 , ' Text written by method x+ , using seek-end method '); 
                                $readEND4 = fread($HandlingFile12, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [SEEK_END] is :" . "<br>" . $readEND4 . "<br>" . "<hr>" . "<br>";
                                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Thirtenth Example => File System - { fopen(Handler Pointer [ftp url] , Open Mode } => [open FTP file in the file manager]  : -->
                        
                    <header>
                        Thirtenth Example => File System - { fopen(Handler Pointer [ftp url] , Open Mode } => [open FTP file in the file manager] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha13 ?>  </h1> 

                        <?php       

                            // // Declaring the main open Handling FTP File inside the FTP Directory/Folder , with Mode: {r+ : Read and Write} :
                    //     $HandlingFile13 = fopen('ftp://username:password@domainName.domainExtension/file Name.FileExtension', 'r+');    //  [The open file method the ftp file in the certain server and domain ]

                            // // Writing contents inside the new FTP file operation inside the assigned Directory/file and extension by {r+} :
                            //    fwrite($HandlingFile13 , ' This is new content written by the [r+] Mode ');      //  [Writing Method to write inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]
                                            
                            // // Seeking operation inside the assigned ftp file from [index numbmer: 2] , [default Mode : SEEK_SET] :
                            //    fseek($HandlingFile13 , 2 ,SEEK_SET);          //  [Seeking Method to Set the index inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]  
                                                    
                            
                            // // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                            //     fwrite($HandlingFile13 , 'Writing inside thg ftp from the seek Set index ');   //  [Writing Method to write inside the FTP Directory file {from the index set} in the certain server and domain using the {FTP username and password} ]
                                        
                                                    
                            // //  Using the Closing Method to close handling the FTP file :
                            //     fclose($HandlingFile13); // // Declaring the main open Handling FTP File inside the FTP Directory/Folder , with Mode: {r+ : Read and Write} :
                            //     $HandlingFile13 = fopen('ftp://username:password@domainName.domainExtension/file Name.FileExtension', 'r+');    //  [The open file method the ftp file in the certain server and domain ]

                            // // Writing contents inside the new FTP file operation inside the assigned Directory/file and extension by {r+} :
                            //    fwrite($HandlingFile13 , ' This is new content written by the [r+] Mode ');      //  [Writing Method to write inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]
                                            
                            // // Seeking operation inside the assigned ftp file from [index numbmer: 2] , [default Mode : SEEK_SET] :
                            //    fseek($HandlingFile13 , 2 ,SEEK_SET);          //  [Seeking Method to Set the index inside the FTP Directory file in the certain server and domain using the {FTP username and password} ]  
                                                    
                            
                            // // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                            //     fwrite($HandlingFile13 , 'Writing inside thg ftp from the seek Set index ');   //  [Writing Method to write inside the FTP Directory file {from the index set} in the certain server and domain using the {FTP username and password} ]
                                        
                                                    
                            // //  Using the Closing Method to close handling the FTP file :
                            //     fclose($HandlingFile13); 
                                                            
                            echo "<br>" . "<hr>" . "----------------------------------" . "<br>" ;            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                                                                           
            
            <!-- (*) => Fourtenth Example => File System - => [All file system methods] + [using method with {r+}] :
                    1- {fopen(Handle Pointer , r+)} &&
                    2- {fwrite()} &&
                    3- {fread(Max Length)} &&
                    4- fseek(Offset Index{Positive || Negative} , All Seek Modes) &&
                    5- {fclose(Handle Pointer}}  : -->
                        
                    <header>
                        Fourtenth Example => File System - => [All file system methods] + [using method with {r+}] : <br>
                            1- {fopen(Handle Pointer , r+)} && <br>
                            2- {fwrite()} && <br>
                            3- {fread(Max Length)} && <br>
                            4- fseek(Offset Index{Positive || Negative} , All Seek Modes) && <br>
                            5- {fclose(Handle Pointer}} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha14 ?>  </h1> 

                        <?php       

                            // Declaring the main Handling File inside the Directory/Folder , with Mode: {r+ : Read and Write} :
                               $HandlingFile14 = fopen($fileR , 'r+');    //  [Opening the handler pointer by r+ mode]

                            // Writing contents inside the new file operation inside the assigned file by {x+} :
                                fwrite($HandlingFile14 , ' This is new content written by the [r+] Mode ' . '<br>');
                        
                            // Reading all contents from the file by {r+} :
                            //    $readAll = fread($HandlingFile14 , filesize(__DIR__ . "/PHP" . "/shadiR.txt"));            
                                $readAll = fread($HandlingFile14 , 100);                    
                        
                            // Printing all contents from the file by {r+} :
                                echo 'Read variable Variable of the all file contents as following  : ' . '<br>' . $readAll . '<br>' . '<hr>' . "<br>";           
                        
                    
                            // Seeking operation inside the assigned file by from [Index numbmer: 2] , [default Mode : SEEK_SET] :
                                fseek($HandlingFile14 , 2 ,SEEK_SET);            
                                                    
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeSET5 = fwrite($HandlingFile14 , ' Text written by method r+ , using default seek-set method ');
                                $readSET5 = fread($HandlingFile14, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [Default seeking] is :" . "<br>" . $readSET5 . "<br>" . "<hr>" . "<br>" ;
                    
                            // Seeking operation inside the assigned file by [Advanced Mode : SEEK_CUR] :
                                fseek($HandlingFile14 , 4 ,SEEK_CUR);                                
                        
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeCUR5 = fwrite($HandlingFile14 , ' Text written by method {r+} , using CUR seek-set method ');
                                $readCUR5 = fread($HandlingFile14, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [CUR seeking] is :" . "<br>" . $readCUR5 . "<br>" . "<hr>" . "<br>";
                                
                            // Seeking operation inside the assigned file by from [index numbmer: -2] , [advanced Mode : SEEK_END] :
                                fseek($HandlingFile14 , -2 ,SEEK_END);            
                                
                            // Declaring the File Writing Method by replacing the new contents with certain index value [upon index and seeking mode] :
                                $writeEND5 = fwrite($HandlingFile14 , ' Text written by method r+ , using seek-end method '); 
                                $readEND5 = fread($HandlingFile14, 100);
                                echo "The file after writing contents by writing mode : [x+] && Seeking mode: [End seeking] is :" . "<br>" . $readEND5 . "<br>" . "<hr>" . "<br>" ;
                                
                                
                            // Closing the File Writing Method [fclose()] :
                                fclose($HandlingFile14); 
                                                            
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
