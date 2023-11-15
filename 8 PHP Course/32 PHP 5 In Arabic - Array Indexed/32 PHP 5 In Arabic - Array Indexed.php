 <!--  32 PHP 5 In Arabic - Array Indexed    -->
 
    <?php     
    $lessonName  ='Array Indexed';
    $title = '32 PHP5 - ' . $lessonName;
    $css = '32 PHP 5 In Arabic - Array Indexed.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
/* 1) [Indexed Array ] =>
   First Example => Defining the Array with (2) methods [Default method] && [Squared Brackets Method] => : */
   
    // First Example / a) Declaring/Defining the Array using [Default method]  :   
    $h11 = "Definging the Array using (Default method) as following : " ;     
    $p11 = "The defined Array will be printed as syntax method { print_r(); }..." ;
    
    $langs1 = array("html", "html5", "css" , "css3" , "js" , "php" , "python" , "ruby");
    // $DefArr1 = print_r($langs1);   
    //  -----------------------------------------------------------------------
    
    // First Example / b) Declaring/Defining the Array using [Squard Brackets method]  :   
    $h12 = "Definging the Array using (Squared Brackets method) as following : " ;         
    $p12 = "The defined Array will be printed as syntax method { print_r(); }..." ;
    
    $langs2[0] = "html";
    $langs2[] = "html5";
    $langs2[] = "css";
    $langs2[] = "css3";
    $langs2[] = "js";
    $langs2[] = "php";
    $langs2[] = "python";
    $langs2[] = "ruby";

    // $DefArr2 = print_r($langs2);   
        
// ==================================================================================

/* 2) [Indexed Array ] =>
   Second Example => Array All Elements Accessing  && printing => : */
       
    /*) Accessing Printing/Output the both declared arrays by all method: 
     1- [Syntax Method only php] : {print_r($arrayName[#index])} ||
     2- [Html Syntax Method -using html pre element-] : { <pre> print_r($arrayName) </pre> }  || 
     3- [Looping Statements - User method-] : {foreach () {}  ||  for (){} } */

    // Second Example / a) Printing the All 2 previous Arrays using [Default method only php]  :   
    $h21 = "Printing the All 2 previous Arrays using [Default method] as following : " ;     
    $p21 = "All Array Elements will be printed as syntax method { print_r(); }..." ;
    
    // $AllDefArr1 = print_r($langs1);   
    // $AllDefArr2 = print_r($langs2);          
// -----------------------------------------------------------    
    
    // Second Example / b) Printing the All 2 previous Arrays using [ Html Syntax Method php + html pre element]  :   
    $h22 = "Printing the All 2 previous Arrays using [Html Syntax Method php + html pre element] as following : " ;     
    $p22 = "All Array Elements will be printed as syntax method { echo <pre> . print_r() . </pre>; }..." ;
    
    // $AllHPArr1 = "<pre>" . print_r($langs1) . "</pre>";   
    // $AllHPArr2 = "<pre>" . print_r($langs2) . "</pre>";       
   
// -----------------------------------------------------------    

    // Second Example / c) Printing the All Elements of (2) previous Arrays using [ {Foreach} || {For} Looping Statements - User method- ]  :   

    // a - Printing Elements of the [First Array] => 
       // 1-  By using {foreach} =>  within a {List} element:
    
    $h2311 = "Printing the All First previous Arrays using [{Foreach} Looping Statements] as following : " ;     
    $p2311 = "All elements of {langs1} Array Elements will be printed to user as syntax method { foreach(){} }..." ;
    
    $AllForeachArr1 = "<ul>";
        
    foreach ($langs1 as $lang1) {
        $AllForeachArr1 .= "<li>" . $lang1 . "</li>" . "<br>";
    }
    $AllForeachArr1 .= "</ul>";
    

    // b- printing Elements of the [First Array] => by using {for} =>  within a {List} element: 
    $h2312 = "Printing the All First previous Arrays using [{For} Looping Statements] as following : " ;     
    $p2312 = "All elements of {langs1} Array Elements will be printed to user as syntax method { for(){} }..." ;

    $AllForArr1 = "<ul>";
        
    for ($lang1 = 0; $lang1 < count($langs1) ; $lang1++) {
        $AllForArr1 .= "<li>" . $langs1[$lang1] . "</li>" . "<br>";
    }
    $AllForArr1 .= "</ul>";
    
    // ----------------------------------------------------------------------
    
    // a- Printing Elements of the [Second Array] => by using {foreach} =>  within a {List} element:
    // 1- By using {foreach} =>  within a {List} element:
    
    $h2321 = "Printing the All Elements Second previous Array using [{Foreach Looping statement}] as following : " ;     
    $p2321 = "All elements of {langs2} Array will be printed to user as syntax method { foreach(){} }..." ;    
    
    $AllForeachArr2 = "<ul>";        
    foreach ($langs2 as $lang2) {
        $AllForeachArr2 .= "<li>" . $lang2 . "</li>" . "<br>";
    }
    $AllForeachArr2 .= "</ul>";
        
    // 2- By using {for} =>  within a {List} element:
        
    $h2322 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
    $p2322 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
    
    $AllForArr2 = "<ul>";

    for ($lang2 = 0; $lang2 < count($langs2) ; $lang2++) {
        $AllForArr2 .= "<li>" . $langs2[$lang2] . "</li>" . "<br>";
    }
    $AllForArr2 .= "</ul>";    
// ---------------------------------------------------------------------    
// ===========================================================================

// Third Example / Printing [certain Element(s)] in (2) previous Arrays using following methods :

/* a) Accessing Printing/Output the both declared arrays by all method: 
    1- [Syntax Method only php] : {print_r($arrayName[#index])} ||
    2- [Html Syntax Method -using html pre element-] : { <pre> print_r($arrayName[#index]) </pre> } || 
    3- [Looping Statements - User method-] : { foreach (){} || for (){} }  */

    // Third Example / 1-  By using {Syntax Method only php} =>  {print_r($arrayName[#index])} -> [all in one variable]  :    
        // a - Printing Elements of the [First Array] => 
        $h311 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p311 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
        
        $elem311 = $langs1[0] . "<br>";
        $elem311 .= $langs1[1] . "<br>";
        $elem311 .= $langs1[2] . "<br>";
        $elem311 .= $langs1[3] . "<br>";
        $elem311 .= $langs1[4] . "<br>";
        $elem311 .= $langs1[5] . "<br>";
        $elem311 .= $langs1[6] . "<br>";
        $elem311 .= $langs1[7] . "<br>";
    // ------------------------------------------

    // Third Example / 1-  By using {Syntax Method only php} =>  {print_r($arrayName[#index])} -> [all in one variable]  :    
        // b - Printing Elements of the [Second Array] => 
        $h3112 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p3112 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
        
        $elem312 = $langs2[0] . "<br>";    
        $elem312 .= $langs2[1] . "<br>";
        $elem312 .= $langs2[2] . "<br>";
        $elem312 .= $langs2[3] . "<br>";
        $elem312 .= $langs2[4] . "<br>";
        $elem312 .= $langs2[5] . "<br>";
        $elem312 .= $langs2[6] . "<br>";
        $elem312 .= $langs2[7] . "<br>";    
    // ----------------------------------------------------
    
    // Third Example / 2- By using {Syntax Method only php} =>  { <pre> print_r($arrayName[#index]) </pre>  -> [all in one variable]  :            
        // Third Example / a - Printing certain Elements of the [First Array] =>                 

        $h321 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p321 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
        
        $elem321 = "<pre>" . $langs1[0] . "<pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[1] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[2] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[3] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[4] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[5] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[6] . "</pre>" . "<br>";
        $elem321 .= "<pre>" . $langs1[7] . "</pre>" . "<br>";
        
        // ------------------------------------------
    // Third Example / 2- By using {Syntax Method only php} =>  { <pre> print_r($arrayName[#index]) </pre>  -> [all in one variable]  :                
        // Third Example / b - Printing certain Elements of the [Second Array] => 

        $h322 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p322 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
        
        $elem322 = "<pre>" . $langs2[0] . "<pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[1] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[2] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[3] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[4] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[5] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[6] . "</pre>" . "<br>";
        $elem322 .= "<pre>" . $langs1[7] . "</pre>" . "<br>";
                
        // ----------------------------------------------------    

    // Third Example / 3-  By using {Looping Statements - User method-} =>  {foreach(){}} || {for(){}}    :            
        // Third Example / a - Printing Elements of the [First Array] => {foreach(){}} :
        
        $h3311 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p3311 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;
        
        $elem3311 = "<ul>";
        foreach ($langs1 as $lang1) {
            $elem3311 .= "<li>" . $lang1 . "</li>" ;
        }
        $elem3311 .= "</ul>";
        // ------------------------------------------

    // Third Example / 3-  By using {Looping Statements - User method-} =>  {foreach(){}} || {for(){}}    :            
        // Third Example / a - Printing Elements of the [First Array] => {for(){}} :

        $h3312 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p3312 = "All elements of {langs2} Array will be printed to user as syntax method { foreach(){} }..." ;
        
        $elem3312 = "<ul>";
        for ($lang1=0; $lang1 < count($langs1); $lang1++) {
            $elem3312 .= "<li>" . $langs1[$lang1] . "</li>" ;
        }
        $elem3312 .= "</ul>";
        // ------------------------------------------
        
        // Third Example / b - Printing Elements of the [Second Array] => 
        $h3321 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p3321 = "All elements of {langs2} Array will be printed to user as syntax method { foreach(){} }..." ;
        
        $elem3321 = "<ul>";
        foreach ($langs2 as $lang2) {
            $elem3321 .= "<li>" . $lang2 . "</li>" ;
        }
        $elem3321 .= "</ul>";
        // ------------------------------------------
        
        $h3322 = "Printing the All Elements of Second previous Array using [{For Looping statement}] as following : " ;     
        $p3322 = "All elements of {langs2} Array will be printed to user as syntax method { for(){} }..." ;

        $elem3322 = "<ul>";
        for ($lang2=0; $lang2 < count($langs2); $lang2++) {
            $elem3322 .= "<li>" . $langs2[$lang2] . "</li>" ;
        }        
        $elem3322 .= "</ul>";        
// =====================================================================
        
/*  Fourth Example => {Overriding/Re-setting certian Array Element's value} Methods => [using sqaured brackets defining Method] : */
                
    $h4 = "Resetting the array elements as following => [using squared brackets defining Method] : " ;     
    $p4 = "Printing the array before setting & after re-setting : " ;
    
    $arr_over = array("Shadi", "Sayed", "Mohammed");
    
    // $arrBefore_over = "The Array before re-setting it's elements value" . print_r($arr_over);
 
    $arr_over_after[0] = "Ali";
    $arr_over_after[1] = "Ahmed";
    $arr_over_after[2] = "Omar";
    
    // $arrAfter_over = "The Array after re-setting it's elements value" .  print_r($arr_over_after);    
    
    // ===========================================================================
    
/*Fifth Example => {Overriding/Re-setting certian Array Element's value [to empty]} Methods : 
    *) [using sqaured brackets defining Method] : */
        
    $h5 = "Overriding/Re-setting certian Array Element's value [to empty] : " ;     
    $p5 = "Printing the array before Re-setting & after Re-setting [emptying] of element with index [3] : " ;
    
    $arr_emp = array("Shadi", "Sayed", "Mohammed", "Ahmed");
    
    // $arrBefore_emp = print_r($arr_emp);
    
    $arr_emp[3] = "";
    
    // $arrAfter_emp = print_r($arr_emp);                    
    // ===========================================================================

/* Sixth Example => {Mixing between both Array decleration Methods} : 
    *) [using default defining array Method to define & sqaured brackets defining Method to (add and Merging)] : */
    
    $h6 = "{Mixing between both Array decleration Methods} as following : " ;     
    $p6 = "Using default defining array Method to define & sqaured brackets defining Method to (add and Merging 3 elements)" ;
    
    $arr_add = array("html", "css" ,"Js"); 
    
    $arr_add[3] = "J-Querry"; // Adding new elemnet to the same defined Array (with index number [3]); </span> <br> 
    $arr_add[4] = "PHP"; // Adding new elemnet to the same defined Array (with index number [4]); </span> <br> 
    $arr_add[5] = "Python"; // Adding new elemnet to the same defined Array (with index number [5]); </span> <br>

    // $arrAfter_add = print_r($arr_add);  
    // ===========================================================================
    
/* Seventh Example => {Define Array with elements Mixed between more than one datatype } :
    *) [using mixed different datatype in the same array ] : */
    
    $h7 = "Define Array with elements Mixed between more than one datatype : " ;     
    $p7 = "Printing the mixed datatypes array : " ;
    
    $arr_mix = array("String1", 10 , "String2" , 20);
    
    // $arrMix = print_r($arr_mix);
// ===========================================================================

/* Eighth Example => {{Define Array with element with child Array type } : 
    a) [Defining Array with a child array inside ] :  */
        
    $h81 = "Define Array with element with child Array type : " ;     
    $p81 = "Printing the all the main array Elements -including the child array-: " ;

    $arr_Arr = array( "html","css2","css3", array("js", "dom", "bom", "Angular JS"), "python");
    
    // $arrArr = "<pre>" . print_r($arr_Arr) . "</pre>";
    // $arrArr = "<pre>" . print_r($arr_Arr[3]) . "</pre>";
    // ------------------------------------------------------

    //  Eighth Example => /b) [Accessing certain element(s) in the child array element in the main array] :                             
    $h82 = "Accessing certain element(s) in the child array element in the main array : " ;     
    $p82 = "Printing the child array in a [single form] {all concatenated in one variable}: " ;

    $arrArr_elem =  "Your Elements of the Child array of the main array [single form] as foilowing:" . "<br>" ;
    $arrArr_elem .= " First element: " .$arr_Arr[3][0]. "<br>";
    $arrArr_elem .= " Second element: " . $arr_Arr[3][1]. "<br>";
    $arrArr_elem .= " Third element: " . $arr_Arr[3][2]. "<br>";
    $arrArr_elem .= " Fourth element: " . $arr_Arr[3][3]. "<br>";
    // $arrArr_elem .= " First element: " . print_r($arr_Arr[3][4]);    
    // -----------------------------------------------------

    /* Eighth Example => c) Accessing all main array elements  : */                            
    $h83 = "Accessing all main array elements [using the print_r() for the main array ]: " ;     
    $p83 = "Printing ALL elements the main array :" ;
    
    // $mainArr = print_r($arr_Arr); 
    // $mainArr = "<pre>" . print_r($arr_Arr) . "</pre>";     
    // ===========================================================================
    
    /* Ninth Example => {Getting the Array count } : */    
    $h9 = "Getting the array count : " ;     
    $p9 = "Printing array count of three types of array [one datatype || mixed datatype || array with inner child array ] :" ;
    
    $arrOneData = array("String 1","String 2","String 3");
    $arrMixData = array("String 1", 10 , true);
    $arrInArr = array("String 1", 10 , true, array("child1","child2","child3"), "String 2");
     
    $countOne = "Count of the One Datatype array is => " .  count($arrOneData) . "<br>";
    $countMix = "Count of the Mix Datatype array is => " . count($arrMixData) . "<br>";
    $countInArr = "Count of the array with inner child array is => " . count($arrInArr) . "<br>";
    
    // ===========================================================================

    //  Tenth Example => {Printing all Array indexes number using {For} Looping statament } : 
    $h10 = "Getting All Array's Elements Index : " ;     
    $p10 = "Printing all Array indexes number using {For} Looping statament [printing with in list element ] :" ;

    $arrInd = array("StringValue1", 20 , "StringValue2"); 
    
    $arrAllInd = "<ul>" ;
    for ($var = 0; $var < count($arrInd); $var++ )  { 
        $arrAllInd .= "<li>" . "The index of element number [" . ($var+1) . "] is " . $var . "</li>" . "<br>" ;
    } 
    $arrAllInd .= "</ul>" ;
    // ===========================================================================
    
    
// ----------------------------------------------------------
        
    // ===========================================================================
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
        
        </head>
        
        <body class='body'>
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
    <!-- ========================================================================================= -->
    <!-- 1) [Indexed Array ] =>
        First Example => Defining the Array with (2) methods [Default method] && [Squared Brackets Method] => : -->
        <section class="PHPPract" id="PHPPract">                           
            
            <header>  1)  [Indexed Array ] => First Example => Defining the Array with (2) methods [Default method] && [Squared Brackets Method] => <br>
                            a) Defining the Array with (2) methods [Default method] && [Squared Brackets Method] =>  </header>
                <div>
                    <h1>  <?php echo $h11; ?>  </h1>            
                    <p>   <?php echo $p11; ?>  </p> <br>                        
                    <?php                         
                        print_r($langs1);   
                    ?>            
                </div> <br> <br>
                    
            <header>  / 1) [Indexed Array ] => First Example => Defining the Array with (2) methods [Default method] && [Squared Brackets Method] =>: <br>
                        b) Declaring/Defining the Array using [Squard Brackets method]  : </header>
                <div>
                    <h1>  <?php echo $h12; ?>  </h1>
                    <p>   <?php echo $p12; ?>  </p> <br>
                    <?php                           
                         print_r($langs2);   
                        ?>            
                </div> <br> <br>  <br><br> <hr>
        <!-- =============================================================================== -->

            <header>  2) [Indexed Array ] =>  Second Example => Array All Elements Accessing  && printing => : <br>
                    /*) Accessing Printing/Output the both declared arrays by all method:  <br>
                    <ol>
                        <li>  1- [Syntax Method only php] : {print_r($arrayName[#index])} ||  </li> 
                        <li>  2- [Html Syntax Method -using html pre element-] : { &lt;pre&gt; print_r($arrayName) &lt;/pre&gt; }  || </li> 
                        <li>  3- [Looping Statements - User method-] : {foreach () {}  ||  for (){} }  </li>
                    </ol>
            </header>


            <header>
                2) [Indexed Array ] =>  Second Example => a- [Syntax Method only php] : {print_r($arrayName[#index])} 
            </header>

                <div>
                    <h1>  <?php echo $h21; ?>  </h1>            
                    <p>   <?php echo $p21; ?>  </p> <br>                        
                    <?php                         
                        print_r($langs1);   
                        print_r($langs2);   
                    ?>            
                </div> <br> <br>
            
            <!-- -------------------------------------------------------------------------------------- -->
            <header>
                2) [Indexed Array ] =>  Second Example => b - [Html Syntax Method -using html pre element-] : { &lt;pre&gt; print_r($arrayName) &lt;/pre&gt; }   
            </header>
                
                <div>
                    <h1>  <?php echo $h22; ?>  </h1>
                    <p>   <?php echo $p22; ?>  </p> <br>
                    <?php 
                        echo $AllHPArr1;  
                        echo $AllHPArr2;   
                    ?>            
                </div> <br> <br>  <br>            

            <!-- -------------------------------------------------------------------------------------- -->
            <header>
                2) [Indexed Array ] =>  Second Example => c - [Looping Statements - User method-] : {foreach () {}  ||  for (){} } 
            </header>
                
                <div>
                    <h1> 1) for & foreach => {first array} : </h1>                
                    <div>  
                        <h2> *) [for] => {first array} : </h2>
                        <h1>  <?php echo $h2311; ?>  </h1>
                        <p>   <?php echo $p2311; ?>  </p> <br>
                        <?php                                 
                            echo $AllForArr1;
                        ?>            
                    </div>
                        
                    <div>  
                        <h2> *) [foreach] => {first array} : </h2>
                        <h1>  <?php echo $h2312; ?>  </h1>
                        <p>   <?php echo $p2312; ?>  </p> <br>
                        <?php 
                            echo $AllForeachArr1;                                
                        ?>            
                    </div>
                </div> <br> <br><br>

                <div>
                    <h1> 2) for & foreach => {second array} : </h1>                
                    <div>  
                        <h2> *) [for] => {second array} : </h2>
                        <h1>  <?php echo $h2321; ?>  </h1>
                        <p>   <?php echo $p2321; ?>  </p> <br>
                        <?php                                 
                            echo $AllForArr2;
                        ?>            
                    </div>
                    
                    <div>  
                        <h2> *) [foreach] => {second array} : </h2>
                        <h1>  <?php echo $h2322; ?>  </h1>
                        <p>   <?php echo $p2322; ?>  </p> <br>
                        <?php 
                            echo $AllForeachArr2;
                        ?> 
                    </div>

                </div> <br> <br>
            <!-- ===================================================================== -->
    
            <header>  3) [Indexed Array ] => // Third Example /  Accessing Printing/Output the both declared arrays by all method : <br>
                <ol>
                    <li> [Syntax Method only php] : {print_r($arrayName[#index])}  </li> 
                    <li> [Html Syntax Method -using html pre element-] : { &lt; pre &gt; print_r($arrayName[#index]) } </li> 
                    <li> [Looping Statements - User method-] : { foreach (){} || for (){} } </li>
                </ol>
            </header>
            
            <header>
                3) [Indexed Array ] =>  Third Example =><br>
                     a- [Syntax Method only php] : {print_r($arrayName[#index])} :
            </header>

                <div>
                    <h1>  <?php echo $h311; ?>  </h1>            
                    <p>   <?php echo $p311; ?>  </p> <br>                        
                    <?php                         
                        echo $elem311;                        
                    ?>            
                </div> <br> <br>

                <div>
                    <h1>  <?php echo $h312; ?>  </h1>            
                    <p>   <?php echo $p312; ?>  </p> <br>                        
                    <?php                         
                        echo $elem312;                        
                    ?>            
                </div> <br> <br>
                <!-- ------------------------------------------------------------------------------------ -->

            
            <header>
                3) [Indexed Array ] =>  Third Example => <br>
                    b) Html Syntax Method -using html pre element-] : { &lt; pre &gt; print_r($arrayName[#index]) }:
            </header>

                <div>
                    <h1>  <?php echo $h321; ?>  </h1>            
                    <p>   <?php echo $p321; ?>  </p> <br>                        
                    <?php                         
                        echo $elem321;                        
                    ?>            
                </div> <br> <br>
            
                <div>
                    <h1>  <?php echo $h322; ?>  </h1>            
                    <p>   <?php echo $p322; ?>  </p> <br>                        
                    <?php                         
                        echo $elem322;                        
                    ?>            
                </div> <br> <br>
            
            <!-- -------------------------------------------------------------------------------------- -->
            
            <header>
                3) [Indexed Array ] =>  Third Example => <br>
                    c) Looping Statements - User method-] : { foreach (){} || for (){} } :
            </header>
            
            <header>
                3) [Indexed Array ] =>  Third Example => <br>
                    c) Looping Statements - User method-] : 1- { foreach (){} || for (){} } =>  first Array:
            </header>
            
            <div>
                <h1>  <?php echo $h3311; ?>  </h1>            
                <p>   <?php echo $p3311; ?>  </p> <br>                        
                <?php                         
                        echo $elem3311;
                        ?>            
                </div> <br> <br>
                
                <div>
                    <h1>  <?php echo $h3312; ?>  </h1>            
                    <p>   <?php echo $p3312; ?>  </p> <br>                        
                    <?php                         
                        echo $elem3312;                        
                    ?>            
                </div> <br> <br>
                <!-- ------------------------------------------------------------>
            <header>
                3) [Indexed Array ] =>  Third Example => <br>
                    c) Looping Statements - User method-] : 1- { foreach (){} || for (){} } =>  second Array:
            </header>
            
            <div>
                <h1>  <?php echo $h3321; ?>  </h1>            
                <p>   <?php echo $p3321; ?>  </p> <br>                        
                <?php                         
                        echo $elem3321;
                        ?>            
                </div> <br> <br>
                
                <div>
                    <h1>  <?php echo $h3322; ?>  </h1>            
                    <p>   <?php echo $p3322; ?>  </p> <br>                        
                    <?php                         
                        echo $elem3322;                        
                    ?>            
                </div> <br> <br>
            <!-- ========================================================================== -->

            <header>
                  Fourth Example => {Overriding/Re-setting certian Array Element's value} Methods => <br>
                   [using sqaured brackets defining Method] : 
            </header>
            
            <div>
                <h1>  <?php echo $h4; ?>  </h1>            
                <p>   <?php echo $p4; ?>  </p> <br>                        
                <?php                         
                    echo "The Array before overriding-resetting as following :" . "<br>";
                    print_r($arr_over);
                    echo "<br>" . "<hr>" ;
                    
                    echo "The Array after overriding-resetting as following :" . "<br>";
                    print_r($arr_over_after);                    
                    echo "<br>" . "<hr>";
                    
                    // print_r($arr_over);
                    // echo $arrBefore_over;
                    // echo $arrAfter_over;
                    // print_r($arrBefore_over);
                    // print_r($arrAfter_over);                    
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->
            
            <header>
                Fifth Example => {Overriding/Re-setting certian Array Element's value [to empty]} Methods : <br>
                *) [using sqaured brackets defining Method] :
            </header>
            
            <div>
                <h1>  <?php echo $h5; ?>  </h1>            
                <p>   <?php echo $p5; ?>  </p> <br>                        
                <?php                         
                    echo "The Array after overriding-resetting as following :" . "<br>";
                    print_r($arr_emp);
                    echo "<br>" . "<hr>";
                    // echo $arrBefore_emp;
                    // echo $arrAfter_emp;
                    ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->                                                            
            
            <header>
                Sixth Example => {Mixing between both Array decleration Methods} : <br>
                *) [using default defining array Method to define & sqaured brackets defining Method to (add and Merging)] : 
            </header>
            
            <div>
                <h1>  <?php echo $h6; ?>  </h1>            
                <p>   <?php echo $p6; ?>  </p> <br>                        
                <?php                                         
                    
                    echo "The Array after adding new elements by different methods as following :" . "<br>";                    
                    print_r($arr_add);  
                // echo $arrAfter_add;
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->

            <header>
                Seventh Example => {Define Array with elements Mixed between more than one datatype } :
                    *) [using mixed different datatype in the same array ] : 
            </header>
            
            <div>
                <h1>  <?php echo $h7; ?>  </h1>            
                <p>   <?php echo $p7; ?>  </p> <br>                        
                <?php                         
                    print_r($arr_mix);
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->
            
            <header>
                Eighth Example => {{Define Array with element with child Array type } :  <br>
                    a) [Defining Array with a child array inside ] :  
            </header>
            
            <div>
                <h1>  <?php echo $h81; ?>  </h1>            
                <p>   <?php echo $p81; ?>  </p> <br>                        
                <?php                                             
                    echo "All Main array elements included by the child array as following : " . "<br>" ; 
                    echo "<pre>";
                    print_r($arr_Arr);
                    echo "</pre>" . "<br>" . "<hr>";
                    
                    echo "Only child array elements as following : " . "<br>" ; 
                    echo "<pre>" ;
                    print_r($arr_Arr[3]);
                    echo "</pre>" . "<br>" . "<hr>";                    
                ?>            
            </div> <br> <br>                                        
            <!-- ------------------------------------------------------------------->
            
            <header>            
                /Eighth Example => {Define Array with element with child Array type } :  <br>
                 /b) [Accessing certain element(s) in the child array element in the main array] {printed in accomulted variable} :                             
            </header>
            
            <div>
                <h1>  <?php echo $h82; ?>  </h1>            
                <p>   <?php echo $p82; ?>  </p> <br>                        
                <?php                         
                    echo $arrArr_elem;
                ?>            
            </div> <br> <br>                                        
            <!-- --------------------------------------------------------------------- -->
            
            <header>            
                /Eighth Example => {{Define Array with element with child Array type } :  <br>
                    / c) Accessing all main array elements:                             
            </header>
            
            <div>
                <h1>  <?php echo $h83; ?>  </h1>            
                <p>   <?php echo $p83; ?>  </p> <br>                        
                <?php                         
                    echo "Printing only all Child Array Elements by print_r() with out : "  . "<br>";
                    print_r($arr_Arr[3]);
                    echo "<br>" . "<br>" . "<hr>" . "<br>" ;
                    
                    echo "Printing only all Child Array Elements by print_r() + <pre></pre>" . "<br>";                    
                    echo "<pre>";
                    print_r($arr_Arr[3]);
                    echo "</pre>";     
                    echo "<br>" . "<hr>" . "<br>" ;
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->
            
            <header>            
                 Nighnth Example => {Getting the Array count } :<br>
            </header>
            
            <div>
                <h1>  <?php echo $h9; ?>  </h1>            
                <p>   <?php echo $p9; ?>  </p> <br>                        
                <?php                         
                    echo $countOne;
                    echo $countMix;
                    echo $countInArr;
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->

            <header>            
                  Tenth Example => {Printing all Array indexes number using {For} Looping statament } : 
            </header>
            
            <div>
                <h1>  <?php echo $h10; ?>  </h1>            
                <p>   <?php echo $p10; ?>  </p> <br>                        
                <?php                         
                    echo $arrAllInd;
                ?>            
            </div> <br> <br>                                        
            <!-- ===================================================================== -->                                                            
            </div> <br> <br>  <br><br> <hr>        
        </section>
        <!-- =====================================================  -->
<!-- -------------------------------------------------------------- -->                                
<!-- -------------------------------------------------------------- -->                
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
    </body>
</html>             