<!--  php - Lesson10 => Constant  -->
<?php     

        $lessonName  ='Constants';
        $title = '10 PHP5 - ' . $lessonName;
        $heading = 'This the head lesson about ' . $lessonName;
        $paragraph = 'This is paragraph about ' . $lessonName;
        
        $h11 = '<h1> Following Constants information declared by {define()} Method </h1> . "<br>"';
        $h12 = '<h1> Following Constants information declared by {Const} Method </h1>' . "<br>";    
        $h13 = '<h1> Following some Magic-Constants information  </h1>' . "<br>";    
        

        /* 1) Decleration of Constants by {define("Constant Name" , "Constant Value", "Instentivity case")}
            a- [Normal value + Insensitivity] : */
            define("VALUE_SEN_DEF", "Shadi" , false);
            define("VALUE_INS_DEF", "Shadi" , true);           
        
            //b- [Logical value ] : 
            define("LOG_FAL_DEF", false);        
            define("LOG_TRU_DEF", true);            
        // =====================================================================================================

        /* 2) Decleration of Constants by {const Constant_Name =  "Constant Value" } : 
            a- [Normal value ] : */
            const VAL_CONS = "Shadi";         
                    
            // b- [Logical value ] : 
            const LOG_TRUE_CONS = true;
            const LOG_FALSE_CONS  = false;    
        // =====================================================================================================
            
        /* [printing :
            1-  Constants values 
            2- It's datatype by var_dump()
            3- Case Sensitivity - for the define() Method } ] => */


            // a) Creating the Accomulated variable of all result of constants declared by {define()}  =>
        $ConstD = '<ul>';
        
        $ConstD .= '<li>' . "The First constant is => [" . VALUE_SEN_DEF . "] || with datatype =>  [" .  var_dump(VALUE_SEN_DEF) . "] by Declaration Method =>  [Define()] && and case sensitivity => [false] " . '</li>' . '<br>';         

        $ConstD .= '<li>' . "The Second constant is => [" . VALUE_INS_DEF . "] || with datatype =>  [" .  var_dump(VALUE_INS_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';

        $ConstD .= '<li>' . "The Third constant is => [" . LOG_FAL_DEF . "] || with datatype =>  [" .  var_dump(LOG_FAL_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';    

        $ConstD .= '<li>' . "The Fourth constant is => [" . LOG_TRU_DEF . "] || with datatype =>  [" .  var_dump(LOG_TRU_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';    
        
        $ConstD .= '<li>' . "The Fifth constant is => [" . VAL_CONS . "] || with datatype =>  [" .  var_dump(VAL_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
            
        $ConstD .= '<li>' . "The Sixth constant is => [" . LOG_TRUE_CONS . "] || with datatype =>  [" .  var_dump(LOG_TRUE_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
            
        $ConstD .= '<li>' . "The Seventh constant is => [" . LOG_FALSE_CONS . "] || with datatype =>  [" .  var_dump(LOG_FALSE_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
                    
        $ConstD .= '</ul>';        
        // -------------------------------------------------------------------------------------------
        
            // b) Creating the Accomulated variable of all result of constants declared by {const()}  =>
        $ConstC = '<ul>';
        
        $ConstC .= '<li>' . "The First constant is => [" . VALUE_SEN_DEF . "] || with datatype =>  [" .  gettype(VALUE_SEN_DEF) . "] by Declaration Method =>  [Define()] && and case sensitivity => [false] " . '</li>' . '<br>';         

        $ConstC .= '<li>' . "The Second constant is => [" . VALUE_INS_DEF . "] || with datatype =>  [" .  gettype(VALUE_INS_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';

        $ConstC .= '<li>' . "The Third constant is => [" . LOG_FAL_DEF . "] || with datatype =>  [" .  gettype(LOG_FAL_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';    

        $ConstC .= '<li>' . "The Fourth constant is => [" . LOG_TRU_DEF . "] || with datatype =>  [" .  gettype(LOG_TRU_DEF) . "] by Declaration Method => [Define()] && and case sensitivity => [true] " . '</li>' . '<br>';    
        
        $ConstC .= '<li>' . "The Fifth constant is => [" . VAL_CONS . "] || with datatype =>  [" .  gettype(VAL_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
            
        $ConstC .= '<li>' . "The Sixth constant is => [" . LOG_TRUE_CONS . "] || with datatype =>  [" .  gettype(LOG_TRUE_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
            
        $ConstC .= '<li>' . "The Seventh constant is => [" . LOG_FALSE_CONS . "] || with datatype =>  [" .  gettype(LOG_FALSE_CONS) . "] by Declaration Method => [Const]  " . '</li>' . '<br>';    
                    
        $ConstC .= '</ul>';        
        // --------------------------------------------------------------------------------------------
        
            // C) Creating the Accomulated variable of all result of {magic-constants} =>
        $ConstM = '<ul>';
        
        $ConstM .= '<li>' . "The First Magic-constant is => [" . __DIR__ . "] is about  =>   [printing local-host directory] " . '</li>' . '<br>';         
        
        $ConstM .= '<li>' . "The Second Magic-constant is => [" . __FILE__ . "] is about  =>   [printing local-host current File] " . '</li>' . '<br>';         
        
        $ConstM .= '<li>' . "The Third Magic-constant is => [" .__LINE__ . "] is about  =>   [printing current line of the current script ] " . '</li>' . '<br>';         
        
        $ConstM .= '<li>' . "The Fourth Magic-constant is => [" . PHP_INT_MAX . "] is about  =>   [printing PHP integer max number ] " . '</li>' . '<br>';
                    
        $ConstM .= '</ul>';        
    ?>
    <!-- ------------------------------------------------------------- -->

    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href="10 PHP 5 In Arabic - Constants.css" media="all">
        </head>
        <body>
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; ?> 
            </p> <br>        
            

            <?php echo $h11; ?>        
            <p>                     
                <?php                                       
                    echo $ConstD; // printing all constants && Datatypes[by gettype();] && Case-Sensitivity 
                    ?>                                             
            </p> <br> <hr>                                
            
                    
            <?php echo $h12; ?>
            <p>                     
                <?php                                       
                    echo $ConstC; // printing all constants && Datatypes[by var_dump();] && Case-Sensitivity                                              
                ?>                                             
            </p> <br> <hr>                                

            <?php echo $h13; ?>
            <p>                     
                <?php                                       
                    echo $ConstM; // printing some Magic-Constants] 
                ?>                                             
            </p> <br> <hr>                                
                
            
        </body>
    </html>         

    <!-- document.getElementById("SourceCode").innerHTML = test + "\n\n" + "=".repeat(90) + "\n\n" +  test1;         -->     