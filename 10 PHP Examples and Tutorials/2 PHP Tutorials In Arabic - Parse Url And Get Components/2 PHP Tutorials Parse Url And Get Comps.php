<!--  2 PHP Tutorials In Arabic - Parse Url And Get Components --> 
<!-- =============================================================== -->


<?php
    $lessonName ='Parse Url And Get Components';
    $title = '2 PHP Tutorials - ' . $lessonName;
    $css = '2 PHP Tutorials In Arabic - Parse Url And Get Components.css';

    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName . "<br>";    
    // ============================================================================
        /* In this lesson will be (3) Applications [Ananlysisng the url video to get an partial component from the main url ] :
        // 1- First Example [Get a default url to main Url Query ] by using {parse_url(url Main String Variable, Url Flag ); } 
        // 2- Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); }         
        // 3- Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag }]
    */    
        
        $main =  'In this lesson will be (3) Applications [Ananlysisng the url video to get an partial component from the main url ] :   as following  : ' . '<br>' . '<ul>' .
    '<li>' . 'First Example [Get a default url to main Url Query] by using {parse_url(Url Main String , Url Flag ); }' . '</li>' .     
    '<li>' . 'Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); }' . '</li>' .    
    '<li>' . 'Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag }' . '</li>' .    
    '</ul>'; 
    // ============================================================================    

    // (*)=>  First Example [Get a default url to main Url Query ] by using {parse_url(url Main String Variable, Url Flag ); }  :
        $ha1 = 'First Example [Get a default url to main Url Query ] by using {parse_url(url Main String Variable, Url Flag ); }   : as following : ' . "<br>" ; 
            
        // Defining a Url as string Varialbe:
            $videoUrl = 'https://www.youtube.com/watch?v=rKvGr95WRU&start_radio=1&list=RDrKvGrg5WBRU';

        // Converting the main Video URL to parsed Variable :
            $parsedVideo = parse_url($videoUrl, PHP_URL_QUERY);

        // Printing the Extracted Parsed Variable : 
            echo 'The Extracted Parsed Variable is ' . '<br>' . $parsedVideo . '<br>';  
                                                                            
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                

    // (*)=> Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); } :
        $ha2 = 'Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); }  : as following : ' . "<br>" ; 
            
        // Converting the Extracted Parsed Variable to an Array  : 
            parse_str($parsedVideo , $componentArr);
        
        // Printing the Extracted Parsed Array : 
            echo 'The Extracted Parsed Array as Following' . '<br>' ;
            echo '<pre>';
            print_r($componentArr);
            echo '</pre>';

        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
    // =================================================================================                                
                        
    // (*)=> Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag }] :
        $ha3 = 'Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag }] : as following : ' . "<br>" ; 
            
        // Defining a Url as string Varialbe:
            $videoUrl = 'https://www.youtube.com/watch?v=rKvGr95WRU&start_radio=1&list=RDrKvGrg5WBRU';

        // Converting the main Video URL to parsed Variable :
            $parsedVideo = parse_url($videoUrl, PHP_URL_QUERY);

        // Printing the Extracted Parsed Variable : 
            echo 'The Extracted Parsed Variable is ' . '<br>' . $parsedVideo . '<br>';  
        
        // Converting the Extracted Parsed Variable to an Array  : 
            parse_str($parsedVideo , $componentArr);
        
        // Printing the Extracted Parsed Array : 
            echo 'The Extracted Parsed Array as Following' . '<br>' ;
            echo '<pre>';
            print_r($componentArr);
            echo '</pre>';                                                    

        // Putting the video Id which extracted from the Extracted Parsed Array in the a Embed [iframe] tag  : 
            echo '<iframe src="https://www.youtube.com/embed/' .$componentArr['v'] . '"></iframe>';
         
        echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
            
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
            
            <!-- (*) => First Example [Get a default url to main Url Query ] by using {parse_url(url Main String Variable, Url Flag ); } : -->
                        
                    <header>
                        First Example [Get a default url to main Url Query ] by using {parse_url(url Main String Variable, Url Flag ); }  : <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha1 . ' => [This Title is an Embeded code by php]'; ?>   </h1>  

                        <?php                                                                                               

                            // Defining a Url as string Varialbe:
                                $videoUrl = 'https://www.youtube.com/watch?v=rKvGr95WRU&start_radio=1&list=RDrKvGrg5WBRU';

                            // Converting the main Video URL to parsed Variable :
                                $parsedVideo = parse_url($videoUrl, PHP_URL_QUERY);
                    
                            // Printing the Extracted Parsed Variable : 
                                echo 'The Extracted Parsed Variable is ' . '<br>' . $parsedVideo . '<br>';  
                                                                                
                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                            
                        ?>                            
                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                        
            <!-- (*) => Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); } : -->
                        
                    <header>
                        Second Example [Convert main Url Query Variable to Array to Get Video Id] by using {parse_str(parsed video Variable, New Array Name ); }  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha2; ?>  </h1>  
                        <?php                                           
                            // Converting the Extracted Parsed Variable to an Array  : 
                                parse_str($parsedVideo , $componentArr);
                            
                            // Printing the Extracted Parsed Array : 
                                echo 'The Extracted Parsed Array as Following' . '<br>' ;
                                echo '<pre>';
                                print_r($componentArr);
                                echo '</pre>';

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                                                                        

                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- (*) => Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag } : -->
                        
                    <header>
                        Third Example [Full Procedures to get the video id as an Embed Source in a I-Frame Tag }  :  <br> 
                    </header>                                    
                    
                    <div>
                        <h1> <?php echo $ha3; ?>  </h1>  
                        <?php                                           
                            // Defining a Url as string Varialbe:
                                $videoUrl = 'https://www.youtube.com/watch?v=rKvGr95WRU&start_radio=1&list=RDrKvGrg5WBRU';

                                // Converting the main Video URL to parsed Variable :
                                    $parsedVideo = parse_url($videoUrl, PHP_URL_QUERY);
                        
                                // Printing the Extracted Parsed Variable : 
                                    echo 'The Extracted Parsed Variable is ' . '<br>' . $parsedVideo . '<br>';  
                                
                                // Converting the Extracted Parsed Variable to an Array  : 
                                    parse_str($parsedVideo , $componentArr);
                                
                                // Printing the Extracted Parsed Array : 
                                    echo 'The Extracted Parsed Array as Following' . '<br>' ;
                                    echo '<pre>';
                                    print_r($componentArr);
                                    echo '</pre>' . '<br>';                                                    

                                // Putting the video Id which extracted from the Extracted Parsed Array in the a Embed [iframe] tag  : 
                                    echo '<iframe src="https://www.youtube.com/embed/' .$componentArr['v'] . '"></iframe>' . '<br>' ;

                            echo '<br>' . '====================================' . "<br>" . "<hr>" . "<br>";
                        ?>                            
                                                                        

                    </div>                
                    <br> <br> <br> <hr>                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            <!-- ---------------------------------------------------------- -->                                            
                                                    
            </section>
                                                                    
        </body>
    </html> 