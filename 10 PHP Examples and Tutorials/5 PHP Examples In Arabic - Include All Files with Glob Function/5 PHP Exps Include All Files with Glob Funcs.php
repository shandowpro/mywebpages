
<!--  5 PHP Examples In Arabic - Include All Files with Glob Function --> 
<!-- =============================================================== -->

<?php
    $lessonName ='Include All Files with Glob Function';
    $title = '5 PHP Tutorials - ' . $lessonName;
    $css = '5 PHP Examples In Arabic - Include All Files with Glob Function.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /*  In this lesson will be (3) Applications [Printing, Include, Embeding all files in a certain Directory/Folder]  :
        // 1- First Example [{Printing} => all Files names {With one certain type && All available types} in a certain folder] .
        // 2- Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page].
        // 3- Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page.
        */    
        
        $main = 'In this lesson will be (3) Applications [Printing, Include, Embeding all files in a certain Directory/Folder] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [{Printing} => all Files names {With one certain type && All available types} in a certain folder]' . '</li>' . 
    '<li>' . 'Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page]' . '</li>' . 
    '<li>' . 'Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page]' . '</li>' . 
    '</ul>'; 
    // ============================================================================    

    // (*)=> First Example [{Printing} all Files names {With one certain type && All available types} in a certain folder] :
        $ha1 = 'First Example [{Printing} all Files names {With one certain type && All available types} in a certain folder] : as following : ' . "<br>" ;             
        
        // //  {Printing} Globing , Looping inside the [inc] path all files inside with [php] extension only : 
        //     echo '{Printing} Globing , Looping inside the [inc] path all files inside with [php] extension only   :' . "<br>" ;
            
        //     foreach (glob('inc/*.php') as $file) {
        //         echo $file. "<br>";                
        //     }           
        //     echo '<hr>';                 
        
        // // {Printing} Globing , Looping inside the [inc] path of all files inside with [all extension] types : 
        //     echo '{Printing} Globing , Looping inside the [inc] path of all files inside with [all extension] types :' . "<br>";
            
        //     foreach (glob('inc/*.{php,txt,zip,inc}' , GLOB_BRACE) as $file) {
        //         echo $file. "<br>";                
        //     }                            
                                                                                
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                                    
    
    // (*)=> Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page] :
        $ha2 = 'Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page] : as following : ' . "<br>" ;             
        
        // // {Embeding} => Globing , Looping inside the [inc] path and get all files of extension [css] only : 
        //     echo '{Embeding} => Globing , Looping inside the [inc] path and get all files of extension [css] only  :' ;
                
        //     foreach (glob('inc/*.css') as $file) {
        //         echo '<link rel="stylesheet" href="' . $file . '" /> <br>';                                
        //     }                            
                                                                                                                            
        // echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                                    
                        
    // (*)=> Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page] :
        $ha3 = 'Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page] : as following : ' . "<br>" ;             
        
        // //  {Including} => Globing , Looping inside the [inc] path of all files inside with [php] extension only : 
        //     echo '{Including} => Globing , Looping inside the [inc] path of all files inside with [php] extension only  :' . "<br>" ;
                
        //     foreach (glob('inc/*.php') as $file) {                
        //         include $file;
        //     }           
        //     echo '<hr>';                 
    
        // // {Including} => Globing , Looping inside the [inc] path , of all files inside with [all extension] types : 
        //     echo '{Including} => Globing , Looping inside the [inc] path , of all files inside with [all extension] types :' . "<br>";
            
        //     foreach (glob('inc/*.{php,txt,zip,inc}' , GLOB_BRACE) as $file) {                
        //         include $file;
        //     }                            
            
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
            
            <!-- (*) => First Example [{Printing} => all Files names {With one certain type && All available types} in a certain folder] : -->
                        
                    <header>
                        First Example [{Printing} => all Files names {With one certain type && All available types} in a certain folder] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1; ?>   </h1>  

                        <?php                                                                                               
                            //  {Printing} Globing , Looping inside the [inc] path all files inside with [php] extension only : 
                                echo '{Printing} Globing , Looping inside the [inc] path all files inside with [php] extension only   :' . "<br>" ;
                                
                                foreach (glob('inc/*.php') as $file) {
                                    echo $file. "<br>";                
                                }           
                                echo '<hr>';                 
                            
                            // {Printing} Globing , Looping inside the [inc] path of all files inside with [all extension] types : 
                                echo '{Printing} Globing , Looping inside the [inc] path of all files inside with [all extension] types :' . "<br>";
                                
                                foreach (glob('inc/*.{php,txt,zip,inc}' , GLOB_BRACE) as $file) {
                                    echo $file. "<br>";                
                                }                            
                                                                                                    
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page] : -->
                        
                    <header>
                        Second Example [{Embeding} => Adding all Css files as link Tag Sources in the current page] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>   </h1>  

                        <?php                                                                                               
                            // {Embeding} => Globing , Looping inside the [inc] path and get all files of extension [css] only  : 
                                echo '{Embeding} => Globing , Looping inside the [inc] path and get all files of extension [css] only  :' ;
                                    
                                foreach (glob('inc/*.css') as $file) {
                                    echo '<link rel="stylesheet" href="' . $file . '" /> <br>';                                
                                }                            
                            
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->
            
            <!-- (*) => Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page] : -->
                        
                    <header>
                        Third Example [{Including} => all Files {With one certain type && All available types} in a certain folder] with in the current page] : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>   </h1>  

                        <?php                                                                                               
                            //  {Including} => Globing , Looping inside the [inc] path of all files inside with [php] extension only : 
                                echo '{Including} => Globing , Looping inside the [inc] path of all files inside with [php] extension only  :' . "<br>" ;
                                    
                                foreach (glob('inc/*.php') as $file) {                
                                    include $file;
                                }           
                                echo '<hr>';                 
                        
                            // {Including} => Globing , Looping inside the [inc] path , of all files inside with [all extension] types : 
                                echo '{Including} => Globing , Looping inside the [inc] path , of all files inside with [all extension] types :' . "<br>";
                                
                                foreach (glob('inc/*.{php,txt,zip,inc}' , GLOB_BRACE) as $file) {                
                                    include $file;
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