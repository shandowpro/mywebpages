 <!--  33 PHP 5 - Array Associative    --> 
    <?php 
    
    $lessonName  ='Associative Array';
    $title = '33 PHP5 - ' . $lessonName;
    $css = '33 PHP 5 - Array Associative.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
    /* 1) [Associative Array ] =>
        First Example => Defining the Associative Array => : */
       
    $h1 = "Definging the Associative Array as following : " ;     
    $p1 = "The defined Associative Array of my web programing languages && my progress percentage  ..." ;
    
    $langs = array(
        "html"      => "100%",
        "html5"     => "95%",
        "css"       => "100%" ,
        "css3"      => "90%",
        "js"        => "90%",
        "php"       => "33%" ,
        "python"    => "20%" ,
        "ruby"      => "10%",
    );
    // echo 'Defined Associative Array Structural form as following :';
    //echo '<pre>';    
    //print_r($langs); 
    //echo '</pre>';        
// ==================================================================================

    /* 2) [Associative Array ] =>
        Second Example => Accessing && printing All Elements of Associative Array   => : */               
    
    $h2 = "Printing the All pre defined Associative Array using [Default method] as following : " ;     
    $p2 = "All Associative Array Elements[keys + Values] will be printed as syntax method { print_r(); }..." ;
    
    // echo 'Defined Associative Array Structural form as following :';
    // echo '<pre>';    
    // print_r($langs); 
    // echo '</pre>';    
// ==================================================================================
    
    /* 3) [Associative Array ] =>
        Third Example => Accessing && printing all {KeysNames only} of Associative Array   => : */               
    
    $h3 = "Printing the all keyNames only of pre defined Associative Array using [looping method] as following : " ;     
    $p3 = "All Associative Array Elements will be printed as syntax method { foreach(){} [Values]}..." ;
    
    $foreachKeys = "<ul>";        
    foreach ($langs as $lang => $perc) {
        $foreachKeys .= "<li>" . "KeyName is [" . $lang . "]" . "</li>" . "<br>";
    }
    $foreachKeys .= "</ul>";
        
    // echo 'All Associative Array's keysNames using foreach looping as following :' . "<br>" ;    
    // echo $foreachKeys;         
// ==================================================================================
    
    /* 4) [Associative Array ] =>
        Fourth Example => Accessing && printing All Element's {Values only} of Associative Array   => : */               
    
    $h4 = "Printing the all keyNames only of pre defined Associative Array using [looping method] as following : " ;     
    $p4 = "All Associative Array Elements will be printed as syntax method { foreach(){} [KeyNames]}..." ;

    $foreachValues = "<ul>";        
    foreach ($langs as $lang => $perc) {
        $foreachValues .= "<li>" . "Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachValues .= "</ul>";
        
    // echo 'All Associative Array's Values using foreach looping as following :' . "<br>" ;    
    // echo $foreachValuess;         
// ==================================================================================
    
    /* 5) [Associative Array ] =>
        Fifth Example => Accessing && printing All Element's [KeysNames + Values] only of Associative Array   => : */               
    
    $h5 = "Printing the all Element's [KeysNames + Values] pre defined Associative Array using [looping method] as following : " ;     
    $p5 = "All Associative Array Elements will be printed as syntax method { foreach(){} [KeyNames + values]}..." ;
    
    $foreachAll = "<ul>";        
    foreach ($langs as $lang => $perc) {
        $foreachAll .= "<li>" . "Language(keyName) [" . $lang . "] progress percentage(Value) = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachAll .= "</ul>";
    
    // echo 'All Associative Array using foreach looping as following :' . "<br>" ;    
    // echo $foreachAll;         
// ==================================================================================
    
    /* 6) [Associative Array ] =>
        Sixth Example => Adding new element(s) [Solo] to the Associative Array => : */               
    
    $h6 = "Adding new element(s) [Solo] to the pre defined Associative Array using [Solo Method] as following : " ;     
    $p6 = "Adding new Elements with keynames datatypes [String || Integer || Boolean || Float || Null] by syntax method { $ ASSArr['keyName'] = 'Value'; } ..." ;
    
    // Adding new [String] Element into the Assoiciative Array: 
    $langs["StrKeyName"] = 'String Value';
    
    // Adding new [String Integer] Element into the Assoiciative Array: 
    $langs["10"] = 'Numeric String Value';
    
    // Adding new [Integer] Element into the Assoiciative Array: 
    $langs[10] = 'Numeric Value';
    
    // Adding new [Float] Element into the Assoiciative Array: 
    $langs[10.5] = 'Numeric Value';
    
    // Adding new [Boolean:True] Element into the Assoiciative Array: 
    $langs[true] = 'Boolean True Value';
        
    // Adding new [Boolean:False] Element into the Assoiciative Array: 
    $langs[false] = 'Boolean False Value';
    
    // Adding new [Null] Element into the Assoiciative Array: 
    $langs[Null] = 'Null Value';
    
    // Adding new [Empty] Element into the Assoiciative Array: 
    $langs[""] = 'Empty Value';
  
    
    // $foreachAddS = "The Associative Array after adding new elements [Solo Mode] as following";        
    // $foreachAddS .= "<ul>";        
    
    // foreach ($langs as $lang => $perc) {
    //     $foreachAddS .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    // }
    // $foreachAddS .= "</ul>";            
//=================================================================================
    
    /* 7) [Associative Array ] =>
    Seventh Example => Adding new (3) String element(s) as [Group] to the Associative Array with keyNames datatypes [String || Integer || Boolean || Float || Null] => : */               
    
    $h7 = "Adding new (3) element(s) as [Group] to the pre-Defined Associative Array using [Group Method] as following : " ;     
    $p7 = "Adding new (3) element(s) as [Group] with keyNames datatypes [String || Integer || Boolean || Float || Null] by syntax method { for () {foreach(){}} } ..." ;

    
    /* 7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>
        a) Definging the main Associative Array [with different datatype]:*/
    $langsStr = array (
        "KeyName1"  => "This is string keyName" ,
        "10"        => "This is Numeric string keyName" ,
        10          => "This is Integer keyName" ,
        1.6         => "This is Float keyName" ,
        True        => "This is Boolean keyName" ,
        ""          => "This is Empty keyName" ,
        Null        => "This is Null KeyName" ,
    );
    // ----------------------------------------------

    $h71 = "Adding new (3) element(s) as [Group] to the pre-Defined Associative Array using [Group Method] as following : " ;     
    $p71 = "Adding new (3) element(s) as [Group] with keynames datatype [String] by syntax method { for () {foreach(){}} } ..." ;

    /* 7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>
       b) Adding new (3){String} Elements as [Group] to pre-Defiened Asssociative Array: */
       
       for ($i=0; $i<2; $i++) {    
            $langsStr["strkeyName". ($i+1)] = "Value of the new String keyName by For loop";
        } 
    // ------------------------------------------------
                
    /* 7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>
        c) Printing the Associtative Array after adding process: */
    $foreachAddGS = "The Associative Array after adding new [String] elements [Group Mode] as following";        
    
    $foreachAddGS .= "<ul>";        
    
    foreach ($langsStr as $lang => $perc) {
        $foreachAddGS .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachAddGS .= "</ul>";            

    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------

    /* 7 / B /Seventh Example => Adding new element(s) as [Group] / Adding new [Integer] Group Elements =>
        a) Defyinging the main Associative Array [with different datatype]: */
    $langsInt = array (
        "KeyName1"  => "This is string keyName" ,
        "10"        => "This is Numeric string keyName" ,
        10          => "This is Integer keyName" ,
        1.6         => "This is Float keyName" ,
        True        => "This is Boolean keyName",
        ""          => "This is Empty keyName" ,
        Null        => "This is Null KeyName" ,
    );
    // ----------------------------------------------

    $h72 = "Adding new (3) element(s) as [Group] to the pre-Defined Associative Array using [Group Method] as following : " ;     
    $p72 = "Adding new (3) element(s) as [Group] with keynames datatype [Integer] by syntax method { for () {foreach(){}} } ..." ;

    /* 7 / B /Seventh Example => Adding new element(s) as [Group] / Adding new [Integer] Group Elements =>
       b) Adding new (3){Integer} Elements as [Group] to pre-Defiened Asssociative Array: */
       
       for ($i=0; $i<2; $i++) {    
           $langsInt[($i+1)] = "Value of the new Integer keyName by For loop";
        } 
    // ------------------------------------------------
                
    /* 7 / B /Seventh Example => Adding new element(s) as [Group] / Adding new [Integer] Group Elements =>
        c) Printing the Associtative Array after adding process: */
    $foreachAddGI = "The Associative Array after adding new [Integer] elements [Group Mode] as following";        
    $foreachAddGI .= "<ul>";        
    
    foreach ($langsInt as $lang => $perc) {
        $foreachAddGI .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachAddGI .= "</ul>";            
    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------

    /* 7 / C /Seventh Example => Adding new element(s) as [Group] / Adding new [Boolean-True && False] Group Elements =>
        a) Defyinging the main Associative Array [with different datatype]:*/
    $langsBol = array (
        "KeyName1"  => "This is string keyName" ,
        "10"        => "This is Numeric string keyName" ,
        10          => "This is Integer keyName" ,
        1.6         => "This is Float keyName" ,        
        ""          => "This is Empty keyName" ,
        Null        => "This is Null KeyName" ,
    );
    // ----------------------------------------------

    $h73 = "Adding new (3) element(s) as [Group] to the pre-Defined Associative Array using [Group Method] as following : " ;     
    $p73 = "Adding new (3) element(s) as [Group] with keynames datatype [Boolean] by syntax method { for () {foreach(){}} } ..." ;

    /* 7 / C / Seventh Example => Adding new element(s) as [Group] / Adding new [Boolean-True && False] Group Elements =>
       b) Adding new (2){Booleean : True || False} Elements as [Group] to pre-Defiened Asssociative Array: */
       
       for ($i=0; $i=0; $i++) {    
           $langsBol[True] = "Value of the new Boolean-True keyName by For loop";
           $langsBol[False] = "Value of the new Boolean-False keyName by For loop";
        } 
    // ------------------------------------------------
                
    /* 7 / C / Seventh Example => Adding new element(s) as [Group] / Adding new [Boolean-True && False] Group Elements =>
        c) Printing the Associtative Array after adding process: */
    $foreachAddGB = "The Associative Array after adding new [Boolean] elements [Group Mode] as following";        
    $foreachAddGB .= "<ul>";        
    
    foreach ($langsBol as $lang => $perc) {
        $foreachAddGB .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachAddGB .= "</ul>";            

    // ----------------------------------------------------------------------------
    // ----------------------------------------------------------------------------
    
    /* 7 / D /Seventh Example => Adding new element(s) as [Group] / Adding new [Empty- "" && Null] Group Elements =>
        a) Defyinging the main Associative Array [with different datatype]:*/
    $langsEmp = array (
        "KeyName1"  => "This is string keyName" ,
        "10"        => "This is Numeric string keyName" ,
        10          => "This is Integer keyName" ,
        1.6         => "This is Float keyName" ,                
        True        => "This is Boolean True keyName",
        False       => "This is Boolean False keyName",
    );
    // ----------------------------------------------

    $h74 = "Adding new (2) element(s) as [Group] to the pre-Defined Associative Array using [Group Method] as following : " ;     
    $p74 = "Adding new (2) element(s) as [Group] with keynames datatype [Empty] by syntax method { for () {foreach(){}} } ..." ;

    /* 7 / D / Seventh Example => Adding new element(s) as [Group] / Adding new [Empty- "" && Null] Group Elements =>
       b) Adding new (2) {Empty : "" || Null} Elements as [Group] to pre-Defiened Asssociative Array: */
       
    for ($i=0; $i=0; $i++) {    
        $langsEmp[""] = "Value of the new Empty - '' keyName by For loop";
        $langsEmp[Null] = "Value of the new Empty - Null keyName by For loop";
    } 
    // ------------------------------------------------
                
    /* 7 / D / Seventh Example => Adding new element(s) as [Group] / Adding new [Empty- "" && Null] Group Elements =>
        c) Printing the Associtative Array after adding process: */
    $foreachAddGE = "The Associative Array after adding new [Empty] elements [Group Mode] as following"."<br>";        
    $foreachAddGE .= "<ul>";        
    
    foreach ($langsEmp as $lang => $perc) {
        $foreachAddGE .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachAddGE .= "</ul>";            
//========================================================================================= 
    
/* 8) [Associative Array ] =>
        Eighth Example => Adding new element(s) [Dublicated keyNames] to the Associative Array => : */               
    
    $h8 = "Adding new element(s) [Dublicated keyNames] to the pre defined Associative Array using [Default Method] as following : " ;     
    $p8 = "Adding new Elements with the same keyNames by Solo syntax method { $ ASSArr['keyName'] = 'Value'; } ..." ;
        
    // Defining the Assoiciative Array: 
    $ArrDub = array(
        "html" => "This is the First Element",
        "html" => "This is the Second Element with the same keyName",
        "html" => "This is the Third Element with the same keyName",
    );
        
    // Printing the Assoiciative Array [after definition]: 
            
    $foreachDub = "Printing Associative Array after adding dublicated elements by[foreach Loop] as following";        
    $foreachDub .= "<ul>";        
    
    foreach ($ArrDub as $lang => $perc) {
        $foreachDub .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
    }
    $foreachDub .= "</ul>";            
    //=================================================================================
    
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
     <!-- 1) [Associative Array ] =>
        First Example => Defining the Associative Array => :  -->
        
        <section class="PHPPract" id="PHPPract">                           
            
            <header>  1) [Associative Array ] =>
                        First Example => Defining the Associative Array : =>  </header>
                <div>
                    <h1>  <?php echo $h1; ?>  </h1>            
                    <p>   <?php echo $p1; ?>  </p> <br>                        
                    <?php                                                                     
                        echo 'Defined Associative Array Structural form as following :';
                        echo '<pre>';    
                        print_r($langs); 
                        echo '</pre>';        
                    ?>                                            
                </div>
            <br> <br>  <br><br> <hr>
        <!-- =============================================================================== -->
        
            <header>  2) [Associative Array ] =>
                Second Example => Accessing && printing All Elements of Associative Array by {print_r() Method} :  =>   <br>                    
            </header>
            
                <div>
                    <h1>  <?php echo $h2; ?>  </h1>            
                    <p>   <?php echo $p2; ?>  </p> <br>                        
                    <?php                         
                        echo 'Defined Associative Array Structural form as following :';
                        echo '<pre>';    
                        print_r($langs); 
                        echo '</pre>';    
                    ?>            
                </div>
            <br> <br> <br> <hr>
                
            <!-- =============================================================================== -->    
                
            <header>
                3) [Associative Array ] =>
                Third Example => Accessing && printing all {KeysNames only} of Associative Array by {foreach Loop}   => : 
            </header>
                
                <div>
                    <h1>  <?php echo $h3; ?>  </h1>
                    <p>   <?php echo $p3; ?>  </p> <br>
                    <?php 
                                
                        $foreachKeys = "<ul>";        
                        
                        foreach ($langs as $lang => $perc) {
                            $foreachKeys .= "<li>" . "KeyName is [" . $lang . "]" . "</li>" . "<br>";
                        }
                        
                        $foreachKeys .= "</ul>";
                            
                        echo "All Associative Array's keysNames using foreach looping as following :" . "<br>" ;    
                        echo $foreachKeys;        
                        
                    ?>            
                </div> 
            <br> <br> <br> <hr>
            <!-- ===================================================================== -->
        
                <header>
                        4) [Associative Array ] =>
                            Fourth Example => Accessing && printing All Element's {Values only} of Associative Array   => : 
                </header>
                    
                <div>
                    <h1>  <?php echo $h4; ?>  </h1>
                    <p>   <?php echo $p4; ?>  </p> <br>
                    <?php 
                                
                        $foreachValues = "<ul>";        
                    
                        foreach ($langs as $lang => $perc) {
                            $foreachValues .= "<li>" . "Value = [" . $perc . "]" . "</li>" . "<br>";
                        }
                    
                        $foreachValues .= "</ul>";
                            
                        echo "All Associative Array's [Values] using foreach looping as following :" . "<br>" ;    
                        echo $foreachValues;                                 
                    ?>            
                </div>
            <br> <br> <br> <hr>
            <!-- ===================================================================== -->
    
            <header>
                        5) [Associative Array ] =>
                        Fifth Example => Accessing && printing All Element's [KeysNames + Values] only of Associative Array   => : 
            </header>
                
                <div>
                    <h1>  <?php echo $h5; ?>  </h1>
                    <p>   <?php echo $p5; ?>  </p> <br>
                    <?php 
                                
                        $foreachAll = "<ul>";        
                        
                        foreach ($langs as $lang => $perc) {
                            $foreachAll .= "<li>" . "Language(keyName) [" . $lang . "] progress percentage(Value) = [" . $perc . "]" . "</li>" . "<br>";
                        }
                        
                        $foreachAll .= "</ul>";
                        
                        echo 'All Associative Array using foreach looping as following :' . "<br>" ;    
                        echo $foreachAll;                                                                 
                    ?>            
                </div> 
            <br> <br> <br> <hr>
            <!-- ===================================================================== -->
    
                <header>
                        6) [Associative Array ] =>
                            Sixth Example => Adding new element(s) [Solo] to the Associative Array => : 
                </header>
                    
                <div>
                    <h1>  <?php echo $h6; ?>  </h1>
                    <p>   <?php echo $p6; ?>  </p> <br>
                    <?php 
                        // // Adding new [String] Element into the Assoiciative Array: 
                        // $langs["StrKeyName"] = 'String Value';
                        
                        // // Adding new [String Integer] Element into the Assoiciative Array: 
                        // $langs["10"] = 'Numeric String Value';
                        
                        // // Adding new [Integer] Element into the Assoiciative Array: 
                        // $langs[10] = 'Numeric Value';
                        
                        // // Adding new [Float] Element into the Assoiciative Array: 
                        // $langs[10.5] = 'Numeric Value';
                        
                        // // Adding new [Boolean:True] Element into the Assoiciative Array: 
                        // $langs[true] = 'Boolean True Value';
                            
                        // // Adding new [Boolean:False] Element into the Assoiciative Array: 
                        // $langs[false] = 'Boolean False Value';
                        
                        // // Adding new [Null] Element into the Assoiciative Array: 
                        // $langs[Null] = 'Null Value';
                        
                        // // Adding new [Empty] Element into the Assoiciative Array: 
                        // $langs[""] = 'Empty Value';
                                            
                        $foreachAddS = "The Associative Array after adding new elements [Solo Mode] as following";        
                
                        $foreachAddS .= "<ul>";        
                        
                        foreach ($langs as $lang => $perc) {
                            $foreachAddS .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
                        }
                
                        $foreachAddS .= "</ul>" . "<br>";                                                

                        echo $foreachAddS;

                    ?>            
                <!-- ===================================================================== -->                        
            
                <header>
                     7) [Associative Array ] =>
                        Seventh Example => Adding new (3) String element(s) as [Group] to the Associative Array with keyNames datatypes [String || Integer || Boolean || Float || Null] => :
                </header>
                    
                    <div>
                        <h1>  <?php echo $h7; ?>  </h1>
                        <p>   <?php echo $p7; ?>  </p> <br> <br>
                    </div>
                    
                ================================================= <br> <hr>

                <header>
                    <h1>  <?php echo $h71; ?>  </h1>
                    <p>   <?php echo $p71; ?>  </p> <br>
                </header>
                
                <header>
                     7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>                        
                        a) Definging the main Associative Array [with different datatype]: 
                </header>
                
                    <div>
                        <?php                
                            // Main Associative Array decleration : 
                            $langsStr = array (
                                "KeyName1"  => "This is string keyName" ,
                                "10"        => "This is Numeric string keyName" ,
                                10          => "This is Integer keyName" ,
                                1.6         => "This is Float keyName" ,
                                True        => "This is Boolean keyName" ,
                                ""          => "This is Empty keyName" ,
                                Null        => "This is Null KeyName" ,
                            );                              
                        ?>
                    </div>
                <br> <br> <br> <hr>
                ======================================================================= <br> <hr>
                
                <header>
                        7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>                        
                            b) Adding new (3){String} Elements as [Group] to pre-Defiened Asssociative Array: 
                </header>

                    <div>                                        
                        <?php                                                     
                            
                            for ($i=0; $i<2; $i++) {    
                                $langsStr["strkeyName". ($i+1)] = "Value of the new String keyName by For loop";
                            }                             
                        ?>                                            
                    </div> 
                <br> <br> <br> <hr>
                    

                <header>
                        7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>                        
                            c) Printing the Associtative Array after adding process: */
                </header>
                    
                    <div>                                                                
                        <?php                                                                                 
                            $foreachAddGS = "The Associative Array after adding new [String] elements [Group Mode] as following";        
    
                            $foreachAddGS .= "<ul>";        
                            
                            foreach ($langsStr as $lang => $perc) {
                                $foreachAddGS .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
                            }
                            $foreachAddGS .= "</ul>";            

                            echo $foreachAddGS ;
                        
                        ?>                                            
                    </div>
                <br> <br> <br> <hr>
                ======================================================================= <br> <hr>
                
                <header>
                    <h1>  <?php echo $h72; ?>  </h1>
                    <p>   <?php echo $p72; ?>  </p> <br>
                </header>
                

                <header>
                    7 / A /Seventh Example => Adding new element(s) as [Group] / Adding new [String] Group Elements =>                        
                        a) Definging the main Associative Array [with different datatype]: 
                </header>                
                    
                    <div>
                        <?php                
                            $langsInt = array (
                                "KeyName1"  => "This is string keyName" ,
                                "10"        => "This is Numeric string keyName" ,
                                10          => "This is Integer keyName" ,
                                1.6         => "This is Float keyName" ,
                                True        => "This is Boolean keyName",
                                ""          => "This is Empty keyName" ,
                                Null        => "This is Null KeyName" ,
                            );
                        ?>
                    </div>
                <br> <br> <br> <hr>
                                           
                <header>
                        7 / B /Seventh Example => Adding new element(s) as [Group] / Adding new [Integer] Group Elements =>
                            b) Adding new (3){Integer} Elements as [Group] to pre-Defiened Asssociative Array: 
                </header>

                    <div>                                        
                        <?php                                                     
                            
                            for ($i=0; $i<2; $i++) {    
                                $langsInt[($i+1)] = "Value of the new Integer keyName by For loop";
                             }   
                        ?>                                            
                    </div> 
                <br> <br> <br> <hr>
                                        
                <header>
                        7 / B /Seventh Example => Adding new element(s) as [Group] / Adding new [Integer] Group Elements =>
                            c) Printing the Associtative Array after adding process: 
                </header>
                    
                    <div>                                                                
                        <?php                                                                                 
                            $foreachAddGI = "The Associative Array after adding new [Integer] elements [Group Mode] as following";        
                            $foreachAddGI .= "<ul>";        
                            
                            foreach ($langsInt as $lang => $perc) {
                                $foreachAddGI .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
                            }
                            $foreachAddGI .= "</ul>";            

                            echo $foreachAddGI;
                        ?>                                            
                    </div> 
                <br> <br> <br> <hr>
                ======================================================================= <br> <hr>

                <header>
                    <h1>  <?php echo $h73; ?>  </h1>
                    <p>   <?php echo $p73; ?>  </p> <br>
                </header>
                                
    
                <header>
                         7 / C /Seventh Example => Adding new element(s) as [Group] / Adding new [Boolean-True && False] Group Elements =>
                            a) Defyinging the main Associative Array [with different datatype]: 
                </header>                
                    
                    <div>
                        <?php                
                            $langsBol = array (
                                "KeyName1"  => "This is string keyName" ,
                                "10"        => "This is Numeric string keyName" ,
                                10          => "This is Integer keyName" ,
                                1.6         => "This is Float keyName" ,        
                                ""          => "This is Empty keyName" ,
                                Null        => "This is Null KeyName" ,
                            );                        
                        ?>
                    </div>                
                <br> <br> <br> <hr>
                              
                <header>
                        7 / C / Seventh Example => Adding new element(s) as [Group] / Adding new [Boolean-True && False] Group Elements =>
                            b) Adding new (2){Booleean : True || False} Elements as [Group] to pre-Defiened Asssociative Array: 
                </header>

                    <div>                                        
                        <?php                                                                                 
                            for ($i=0; $i=0; $i++) {    
                                $langsBol[True] = "Value of the new Boolean-True keyName by For loop";
                                $langsBol[False] = "Value of the new Boolean-False keyName by For loop";
                             }                      
                        ?>                                            
                    </div>
                <br> <br> <br> <hr>
                                                                
                <header>
                        7 / D / Seventh Example => Adding new element(s) as [Group] / Adding new [Empty- "" && Null] Group Elements =>
                            c) Printing the Associtative Array after adding process: 
                </header>
                    
                    <div>                                                                
                        <?php                                                                                 
                            $foreachAddGE = "The Associative Array after adding new [Empty] elements [Group Mode] as following"."<br>";        
                            $foreachAddGE .= "<ul>";        

                            foreach ($langsEmp as $lang => $perc) {
                                $foreachAddGE .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
                            }
                            $foreachAddGE .= "</ul>";                                                            

                            echo $foreachAddGE;
                        ?>                                            
                    </div> 
                <br> <br> <br> <hr>
                ======================================================================= <br> <hr>
                ======================================================================= <br> <hr>
                        
                <header>
                        8) [Associative Array ] =>
                            Eighth Example => Adding new element(s) [Dublicated keyNames] to the Associative Array => : 
                </header>

                
                <div>
                    <h1>  <?php echo $h8; ?>  </h1>
                    <p>   <?php echo $p8; ?>  </p> <br>
                                        
                    
                    <?php 
                        // Defining the Assoiciative Array: 
                        $ArrDub = array(
                            "html" => "This is the First Element",
                            "html" => "This is the Second Element with the same keyName",
                            "html" => "This is the Third Element with the same keyName",
                        );
                            
                        // Printing the Assoiciative Array [after definition]: 
                                
                        $foreachDub = "Printing Associative Array after adding dublicated elements by[foreach Loop] as following";        
                        $foreachDub .= "<ul>";        
                        
                        foreach ($ArrDub as $lang => $perc) {
                            $foreachDub .= "<li>" . "keyName [" . $lang . "] with Value = [" . $perc . "]" . "</li>" . "<br>";
                        }
                        $foreachDub .= "</ul>";            

                        echo $foreachDub;
                    ?>            
                </div>
                <!-- ===================================================================== -->                                            
        </section>
        
        <!-- =====================================================  -->          
    </body>
</html>             