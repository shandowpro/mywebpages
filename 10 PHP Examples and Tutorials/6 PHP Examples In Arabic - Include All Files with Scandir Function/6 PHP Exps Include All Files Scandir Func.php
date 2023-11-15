
<!--  6 PHP Examples In Arabic - Include All Files with Scandir Function --> 
<!-- =============================================================== -->

<?php
    $lessonName ='Include All Files with Scandir Function';
    $title = '6 PHP Tutorials - ' . $lessonName;
    $css = '6 PHP Examples In Arabic - Include All Files with Scandir Function.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (3) Applications [Printing, Include, Embeding all files in a certain Directory/Folder] using {scandir()} with other functions :
        // 1- First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} .
        // 2- Second Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using multiple conditions with If Statement} .
        // 3- Third Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array} .
        */    
        
        $main = 'In this lesson will be (3) Applications [Printing, Include, Embeding all files in a certain Directory/Folder] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement}' . '</li>' . 
    '<li>' . 'Second Example : [{Printing, Include, Embeding} => all Files names {With more than one type of extension} in a certain folder] => {using multiple conditions with If Statement}' . '</li>' .     
    '<li>' . 'Third Example : [{Printing, Include, Embeding} => all Files names {With more than one type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array}' . '</li>' .     
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} :
        $ha1 = 'First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} : as following : ' . "<br>" ;             
        
        // // Defining directoy path variable of the parent folder that has inner Files inside :
        //     $dir = __DIR__ . '/inc/';
        
        // // Looping inside parent folder and reach certain Extension type of File [php] :
        //     foreach(scandir($dir) as $file) {
        //         // Printing all reached files names [with all types] :
        //             echo  $file . ' => Public Reach file' . '<br> <hr> <br>' ;                
        
        //         // Testing if any of inner files inside the directory has an [php] extension :
        //             if (pathinfo($file, PATHINFO_EXTENSION) === 'php') { 
        //                 // Printing php files Full path [with php type only] :
        //                     echo  $file . ' => Customized Reach file' . '<br>'; 
                                                        
        //                 // Including php files Full path [with php type only] :
        //                     include $dir. $file ; 
        //             }
        //     }            
                                                                                        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                                    
    
    // (*)=> Second Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using multiple conditions with If Statement} :
        $ha2 = 'Second Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using multiple conditions with If Statement} : as following : ' . "<br>" ;             
        
        // // Defining directoy path variable of the parent folder that has inner Files inside :
        //     $dir = __DIR__ . '/inc/';
        
        // // Looping inside parent folder and reach certain Extension type of File [php] :
        //     foreach(scandir($dir) as $file) {
        //         // Printing all reached files names [with all types] :
        //             echo  $file . ' => Public Reach file' . '<br> <hr> <br>';
                
        //         // // Printing all reached files Full path [with all types] :
        //         //     echo $dir. $file . ' => Public Reach file';
        
        //         // Testing if any of inner files inside the directory has an [php] or [inc] extensions :
        //             if (pathinfo($file, PATHINFO_EXTENSION) === 'php' || pathinfo($file, PATHINFO_EXTENSION) === 'inc' ) { 
        //                 // Printing php files Full path [with php type only] :
        //                     echo  $file . ' => Customized Reach file' . '<br>'; 
                                                        
        //                 // Including php files Full path [with php type only] :
        //                     include $dir. $file  ; 
        //             }
        //     }            
                                                                                        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
    // =================================================================================                                                                                

    // (*)=> Third Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array} :
        $ha3 = 'Third Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array} : as following : ' . "<br>" ;
        
        // // Defining directoy path variable of the parent folder that has inner Files inside :
        //     $dir = __DIR__ . '/inc/';
        
        // // Defining array of group of Extensions :
        //     $ext = array('php', 'inc') ;
        
        //     // Looping inside parent folder and reach certain Extension type of File [php] :
        //         foreach(scandir($dir) as $file) {
        //             // Printing all reached files names [with all types] :
        //                 echo  $file . ' => Public Reach file' . '<br> <hr> <br>';
        //             // // Printing all reached files Full path [with all types] :
        //             //     echo $dir. $file . ' => Public Reach file' . '<br>' ;
            
        //             // Testing if any of inner files inside the directory has one of array extensions :
        //                 if ( in_array(pathinfo($file, PATHINFO_EXTENSION), $ext) ) { 
        //                     // Printing php files Full path [with php type only] :
        //                         echo  $file . ' => Customized Reach file' . '<br>'; 
                                                            
        //                     // Including php files Full path [with php type only] :
        //                         include $dir. $file ; 
        //                 }
        //         }            
                                                                                        
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";

    // =================================================================================                                                                                
    // =================================================================================                                
                                                  
// ==================================================================================
?>

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
            
        <body class='body' style="background-color: <?php echo $body; ?>" > 
            <h1>
                The following textnode of this head has been genereated by PHP path : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP path : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
            <!-- ------------------------------------------------------------------------- -->            
            <?php
                echo $main;
            ?>

            <section class="PHPPract" id="PHPPract">                                       
            
            <!-- (*) => First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} : -->
                        
                    <header>
                        First Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one condition with If Statement} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               

                            // Defining directoy path variable of the parent folder that has inner Files inside :
                                $dir = __DIR__ . '/inc/';
                            
                                // Looping inside parent folder and reach certain Extension type of File [php] :
                                    foreach(scandir($dir) as $file) {
                                        // Printing all reached files names [with all types] :
                                            echo  $file . ' => Public Reach file' . '<br> <hr> <br>' ;                
                                
                                        // Testing if any of inner files inside the directory has an [php] extension :
                                            if (pathinfo($file, PATHINFO_EXTENSION) === 'php') { 
                                                // Printing php files Full path [with php type only] :
                                                    echo  $file . ' => Customized Reach file' . '<br>'; 
                                                                                
                                                // Including php files Full path [with php type only] :
                                                    include $dir. $file ; 
                                            }
                                    }            
                                                                                                                
                                echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                        
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current Second Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using multiple conditions with If Statement}: -->
                        
                    <header>
                        Second Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using multiple conditions with If Statement} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // Defining directoy path variable of the parent folder that has inner Files inside :
                                $dir = __DIR__ . '/inc/';
                            
                                // Looping inside parent folder and reach certain Extension type of File [php] :
                                    foreach(scandir($dir) as $file) {
                                        // Printing all reached files names [with all types] :
                                            echo  $file . ' => Public Reach file' . '<br> <hr> <br>';
                                                                                                                
                                        // Testing if any of inner files inside the directory has an [php] or [inc] extensions :
                                            if (pathinfo($file, PATHINFO_EXTENSION) === 'php' || pathinfo($file, PATHINFO_EXTENSION) === 'inc' ) { 
                                                // Printing php files Full path [with php type only] :
                                                    echo  $file . ' => Customized Reach file' . '<br>'; 
                                                                                
                                                // Including php files Full path [with php type only] :
                                                    include $dir. $file  ; 
                                            }
                                    }            
                                                                                                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                                                                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array} : -->
                        
                    <header>
                        Third Example : [{Printing, Include, Embeding} => all Files names {With one certain type of extension} in a certain folder] => {using one conditions with If Statement + extensions array + in_array} : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>   </h1>  

                        <?php                                                                                               
                            // Defining directoy path variable of the parent folder that has inner Files inside :
                                $dir = __DIR__ . '/inc/';
                            
                            // Defining array of group of Extensions :
                                $ext = array('php', 'inc') ;
                            
                            // Looping inside parent folder and reach certain Extension type of File [php] :
                                foreach(scandir($dir) as $file) {
                                    // Printing all reached files names [with all types] :
                                        echo  $file . ' => Public Reach file' . '<br> <hr> <br>';                                            
                            
                                    // Testing if any of inner files inside the directory has one of array extensions :
                                        if ( in_array(pathinfo($file, PATHINFO_EXTENSION), $ext) ) { 
                                            // Printing php files Full path [with php type only] :
                                                echo  $file . ' => Customized Reach file' . '<br>'; 
                                                                            
                                            // Including php files Full path [with php type only] :
                                                include $dir. $file ; 
                                        }
                                }            
                                                                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            <!-- ---------------------------------------------------------- --> 
                                                    
            </section>
                                                                    
        </body>
    </html> 