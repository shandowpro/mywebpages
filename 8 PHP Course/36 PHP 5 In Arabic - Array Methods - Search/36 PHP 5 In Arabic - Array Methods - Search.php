 <!--  36 PHP 5 - Array Methods - Search    --> 
<?php
    $lessonName  ='Array Methods - Search';
    $title = '36 PHP5 - ' . $lessonName;
    $css = '36 PHP 5 In Arabic - Array Methods - Search.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) Arrays Definitions & Decleration :
        $indArr = array("html", "css", "js", "php", "mySql", "ruby", "python");
    
        $assoArr = array(
            "html"  => "10%",
            "css"   => "10%",
            "js"    => "10%",
            "php"   => "10%",
            "mySql" => "10%",
            "ruby"  => "10%",
            "python"=> "10%",
        );

        $mulArrInd = array(
            array("HTML4", "HTML5", "HTMLX"),
            array("CSS1", "CSS2", "CSS3"),
            array("JS", "JS DOM", "JS BOM")
        );
                

        $mulArrAsso = array(
            "first"     => array("HTML4", "HTML5", "HTMLX"),
            "second"    => array("CSS1", "CSS2", "CSS3"),
            "third"     => array("JS", "JS DOM", "JS BOM"),
        );
    // =================================================================================
        
    // (*) =>  First Example => {in_array();} in => {Indexed Array}:
                            
        // (a) => Searching & Typing the [Element's Value] & [Element's Index] => {{Canceled}} :
            
            // (1) Searching without using Identical Mode [false]: 
                // $ha11 = "The Element' value & Index by using Identical Mode is : ";                
                // $elemIndValInF = in_array("mySql" , $indArr);                      // or  in_array("" , $indArr, false)                
                // echo "The searched element is " . "mySql" . "Is Existed";

            // (2) Searching with using Identical Mode [true]: 
                // $ha12 = "The Element' Index by using Identical Mode is : ";               
                // $elemIndValInT = in_array("css" , $indArr, true);                            
                // // echo "The searched element is " . $indArr[$elemIndValInT] . " with index : " . $elemIndValInT . "using element's Value";                
                                
        // ---------------------------------------------                        
        
        // (d) => Checking of Element's Existance :
            $ha21 = " The result of Checking without using Identical Mode [false] as following : "; 
            // (1) Checking without using Identical Mode [false]: 
                // if (in_array("css", $indArr)) {
                //     echo "The Element " . "css" . " [Is existed] in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }
            
            $ha22 = " The result of Checking with using Identical Mode [true] as following : ";                
            // (2) Checking without using Identical Mode [true]: 
                // if (in_array("css", $indArr , true)) {
                //     echo "The Element " . "css" . " [Is existed] in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }

        // ---------------------------------------------                        

    // ==================================================================================
    
    // (*) => Second Example => {array_search();} in => {Indexed Array} :
        
        // (a) => Searching & Typing the [Element's Value] & [Element's Index] by {array_search();} => {canceled }:
            
            // (1) Searching without using Identical Mode [false]: 
                // $hb11 = "The Elements' Value & Index searched by {array_search();} with using Identical Mode is : ";
                // $elemIndValSeF = array_search("css" , $indArr);                   // or  in_array("" , $indArr, false)
                // echo "The searched element is " . "css" . " is existed in the array" ;
                
            // (2) Searching with using Identical Mode [true]: 
                // $hb12 = "The Element' Index & Index searched by {array_search();} by using Identical Mode is : ";
                // $elemIndValSeT = array_search("css" , $indArr, true);
                // echo "The searched element is " . $indArr[$elemIndValSeT] . " with index : " . $elemIndValSeT;
        // ---------------------------------------------
                
        // (b) => Checking of Element's Existance by {array_search();} :
            
            // (1) Checking without using Identical Mode [false] : 
                $hb21 = "Checking result by {array_search();} Without using Identical Mode [false] as following : ";
                
                // if (array_search("css3", $indArr)) {
                //     echo "The Element " . "[css3]" . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }

            // (2) Checking with using Identical Mode [True] : 
                $hb22 = "Checking result by {array_search();} With using Identical Mode [true] as following : ";
                
                // if (array_search("css3", $indArr, true)) {
                //     echo "The Element " . "[css3]" . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }                    
        // ---------------------------------------------                        
    // =============================================================================
                            
    // (*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} :
        
        // (a) => Searching & Typing the [Element's Index] || [Element's Value] :
            
            // (1) Search & Print [Element's Index] && [Element's Value] in {Indexed Array} by {array_key_exists(Element Index);} : 
                $hc11 = "The Element's [Index & Value] with key {3} in [Indexed Array] searched by {array_key_exists();} is : ";                
                $elemIndIndExis1 = "The Element with index : " . "[3]" .  " with value " . $indArr[3] . "Is existed in the array " ;
                // echo $elemIndIndExis1;

            // (2) Searching & Print [Element's Index] && [Element's Value] in {Associative Array} by {array_key_exists(Element keyname);}  : 
                $hc12 = "The Element's [Index & Value] with keyname {js} in [Associative Array] searched by {array_key_exists();} is : ";
                $elemIndAssoExis2 = "The Element's keyName : " .  "[js]" . " with value " . $assoArr["js"] . "Is existed in the array" ;
                // $elemIndAssoExis2 = "The Element with keyName : " .  " {js} " . " is " . $assoArr[array_key_exists( 3 , $assoArr)] ;
                // echo $elemIndAssoExis2;
        // ---------------------------------------------
                                        
        // (b) => Checking of Element's Existance in [Indexed array] || [Associative array] :
           
            // (1) Searching for Element in [Indexed Array] using it's [Index] : 
                $hc21 = "Checking result of Existed element in [Indexed Array] by {array_key_exists();} as following : ";
                
                // if (array_key_exists( 2, $indArr )) {
                //     echo "The Element [" . $indArr[2] . "] with index : " . "[2]" . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }            

            // (2) Searching for Element in [Associative Array] using it's [keyName] : 
                $hc22 = "Checking result of Existed element in [Associative Array] by {array_key_exists();} as following : ";
                
                // if (array_key_exists( "js", $assoArr )) {
                //     echo "The Element [" . $assoArr["js"] . "] with key : " . "[js]" . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }
        // ---------------------------------------------
                            
    // ==================================================================================
    
    // (*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array} => {canceled} :
        
        // (a) => Searching & Typing the [Element's Index] || [Element's Value] in :
                                                    
            // (1) Searching in : {Multidimensional Array - indexed} => by [in_array();]  : 
                // $hd11 = "The Element's [Index & Value] in [Multidimensional Array - Indexed] searched by {in_array();} is : ";
                // $elemIndMulIndIn = "The Element with index : " . in_array( "HTML4" , $mulArrInd) .  " is " . $mulArrInd[in_array( "HTML4" , $mulArrInd)] ;
                // echo $elemIndMulIndIn;
                
            // (2) Searching in : {Multidimensional Array - indexed} => by [array_search();]  : 
                // $hd12 = "The Element's [Index & Value] in [Multidimensional Array - Indexed] searched by {array_search();} is : ";
                // $elemIndMulIndSe = "The Element with index : " . array_search( "HTML4" , $mulArrInd) .  " is " . $mulArrInd[array_search( "HTML4" , $mulArrInd)] ;
                // echo $elemIndMulIndSe;
                
            // (3) Searching in : {Multidimensional Array - indexed} => by [array_key_exists();]  : 
                // $hd13 = "The Element's [Index & Value] in [Multidimensional Array - Indexed] searched by {array_key_exists();} is : ";
                // $elemIndMulIndExis = "The Element with index : " . array_key_exists( "HTML4" , $mulArrInd) .  " is " . $mulArrInd[array_key_exists( "HTML4" , $mulArrInd)] ;
                // echo $elemIndMulIndExis;                            
                

            // (4) Searching in : {Multidimensional Array - associative} => by [in_array();]: 
                // $hd14 = "The Element's [keyname & Value] in [Multidimensional Array - Associative] searched by {in_array();} is : ";
                // $elemKeyMulAssoIn = "The Element with keyname : " . in_array( "first" , $mulArrAsso) .  " is " . $mulArrAsso[in_array( "first" , $mulArrAsso)] ;
                // echo $elemKeyMulAssoIn;
        
            // (5) Searching in : {Multidimensional Array - associative} => by [array_search();]  : 
                // $hd15 = "The Element's [keyname & Value] in [Multidimensional Array - Associative] searched by {array_search();} is : ";
                // $elemKeyMulAssoSe = "The Element with keyname : " . array_search( "first" , $mulArrAsso) .  " is " . $mulArrAsso[array_search( "first" , $mulArrAsso)] ;
                // echo $elemKeyMulAssoSe;
        
            // (6) Searching in : {Multidimensional Array - associative} => by [array_key_exists();]  : 
                // $hd16 = "The Element's [keyname & Value] in [Multidimensional Array - Associative] searched by {array_key_exists();} is : ";
                // $elemKeyMulAssoExis = "The Element with keyname : " . array_key_exists( "first" , $mulArrAsso) .  " is " . $mulArrAsso[array_key_exists( "first" , $mulArrAsso)] ;
                // echo $elemKeyMulAssoExis;
        
        // ---------------------------------------------
                                        
        // (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} :
           
            // (1) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [in_array()] : 
                $hd21 = "Checking result of Existed element in [Multidimensional array - indexed] by {in_array();} as following : ";

                // if (in_array( "HTML4", $mulArrInd[0] )) {
                //     echo "The Element " . $mulArrInd[0]["HTML4"] . " Is existed in this array" ; 
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }            
            
            // (2) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [array_search()] : 
                $hd22 = "Checking result of Existed element[Element's Index] in [Multidimensional array - indexed] by {array_search();} as following : ";
                
                if (array_search( "CSS3", $mulArrInd[1] )) {
                    echo "The Element " . $mulArrInd[array_search( "HTML4", $mulArrInd )] . " with index : " . array_search( "HTML4", $mulArrInd ) . " Is existed in this array" ;
                } else {
                    echo "The Element Is NOT existed in this array" ; 
                }
                                    
            // (3) Searching for Element in [Multidimensional array - indexed] using it's [index] => by using [array_key_exists()] : 
                $hd23 = "Checking result of Existed element[Element's Index] in [Multidimensional array - indexed] by {array_key_exists();} as following : ";
                
                // if (array_key_exists( 2, $mulArrInd )) {
                //     echo "The Element " . $mulArrInd[array_key_exists( 2, $mulArrInd )] . " with index : " . array_key_exists( 2, $mulArrInd ) . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }            
            

            // (4) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [in_array()] : 
                $hd24 = "Checking result of Existed element[Element's keyname] in [Associative Array] by {array_search();} as following : ";
                
                // if (in_array( "JS", $mulArrAsso )) {
                //     echo "The Element " . $mulArrAsso[in_array( "JS", $mulArrAsso )] . " with keyname : " . in_array( "JS", $mulArrAsso ) . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }


            // (5) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_search()] : 
                $hd25 = "Checking result of Existed element[Element's keyname] in [Associative Array] by {array_search();} as following : ";
                
                // if (array_search( "JS", $mulArrAsso )) {
                //     echo "The Element " . $mulArrAsso[array_search( "JS", $mulArrAsso )] . " with keyname : " . array_search( "JS", $mulArrAsso ) . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }
            

            // (6) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_key_exists()] : 
                $hd26 = "Checking result of Existed element[Element's keyname] in [Associative Array] by {array_key_exists();} as following : ";
                
                // if (array_key_exists( "second" , $mulArrAsso )) {
                //     echo "The Element " . $mulArrAsso[array_key_exists( "second" , $mulArrAsso )] . " with keyname : " . array_key_exists( "second", $mulArrAsso ) . " Is existed in this array" ;
                // } else {
                //     echo "The Element Is NOT existed in this array" ; 
                // }
        // ---------------------------------------------                
    // ==================================================================================    
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
                header {font-size: 20px; font-weight: bold; color:#fff; background-color: gray; border:3px solid black; text-align: center;}
            </style>
        </head>
        
        <body class='body' style="background-color: gray">
            <h1>
                The following textnode of this head has been genereated by PHP file : <br>        
                <?php echo $heading; echo '<br>'; ?>            
            </h1>

            <p>
                The following textnode of this Paragraph has been genereated by PHP file : <br>        
                <?php echo $paragraph; echo '<br>'; ?> 
            </p> <br>        
          <!-- ------------------------------------------------------------------------- -->            

            <section class="PHPPract" id="PHPPract">                           
                <!-- (*) =>  First Example => {in_array();} in => {Indexed Array}: {canceled}  <br>
                                 (a) => Searching & Typing the [Element's Value] & [Element's Index] : <br>
                                     (1) Searching without using Identical Mode [false]:  -->
                        <!-- <header>                                
                             (*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                                <span class="one"></span> (a) => Searching & Typing the [Element's Value] & [Element's Index] : <br>
                                    <span class="two"></span> (1) Searching without using Identical Mode [false]: 
                        </header>                                    
                        
                        <div>
                            <h1>   </h1>  
                            
                                // echo "The searched element is " . $indArr[$elemIndValInF] . " with index : " . $elemIndValInF . "using element's Value";
                            
                        </div>                
                        <br> <br> <br> <hr> -->
                    
                <!-- ---------------------------------------------------------- -->
                      
                <!-- /(*) =>  First Example => {in_array();} in => {Indexed Array}: {canceled} <br>
                                 (a) => Searching & Typing the [Element's Value] & [Element's Index] : <br>
                                     (2) Searching with using Identical Mode [true]:  -->

                        <!-- <header>                                
                             /(*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                                <span class="one"></span> (a) => Searching & Typing the [Element's Value] & [Element's Index] : <br>
                                    <span class="two"></span> (2) Searching with using Identical Mode [true]: 
                        </header>                                    
                        
                        <div>
                            <h1>   </h1>  
                            
                                echo "The searched element is " . $indArr[$elemIndValInT] . " with index : " . $elemIndValInT . "using element's Value";
                            
                        </div>                
                        <br> <br> <br> <hr> -->
                    
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->

                    
                <!-- /(*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                             (b) => Checking of Element's Existance : <br>
                                     (1) Checking without using Identical Mode [false]:  -->
                        <header>                                
                             /(*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                                <span class="one"></span> // (d) => Checking of Element's Existance : <br>
                                    <span class="two"></span> (1) Checking without using Identical Mode [false]: 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $ha21; ?>  </h1>  
                            <?php
                                if (in_array("css", $indArr)) {
                                    echo "The Element " . "css" . " [Is existed] in this array" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->

                <!-- /(*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                             (b) => Checking of Element's Existance : <br>
                                    (2) Checking without using Identical Mode [true]:  -->
                        <header>                                
                             /(*) =>  First Example => {in_array();} in => {Indexed Array}: <br>
                                <span class="one"></span> // (d) => Checking of Element's Existance : <br>
                                    <span class="two"></span> (2) Checking without using Identical Mode [true]: 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $ha22; ?>  </h1>  
                            <?php                                
                                if (in_array("css", $indArr , true)) {
                                    echo "The Element " . "css" . " [Is existed] in this array" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>
                    
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                

                <!-- (*) => Second Example => {array_search();} in => {Indexed Array} {canceled}: <br>
                            (a) => Searching & Typing the [Element's Value] & [Element's Index] by {array_search();} : <br>
                                (1) Searching without using Identical Mode [false]:  -->
                        
                
                        <!-- <header>                                
                             (*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                                 <span class="one"></span> (a) => Searching & Typing the [Element's Value] & [Element's Index] by {array_search();} : <br>
                                    <span class="two"></span> (1) Searching without using Identical Mode [false]: 
                        </header>                                    
                        
                        <div>
                            <h1>    </h1>  
                            
                                // echo "The searched element is " . $indArr[$elemIndValSeF] . " with index : " . $elemIndValSeF; 
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->

                <!-- /(*) => Second Example => {array_search();} in => {Indexed Array} {canceled}: <br>
                            (a) => Searching & Typing the [Element's Value] & [Element's Index] by {array_search();} :  <br>
                                (2) Searching with using Identical Mode [true]:  -->
                        
                        <!-- <header>                                
                             /(*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                                 <span class="one"></span> (a) => Searching & Typing the [Element's Value] & [Element's Index] by {array_search();} :  <br>
                                    <span class="two"></span> (2) Searching with using Identical Mode [true]: 
                        </header>                                    
                        
                        <div>
                            <h1>    </h1>  
                            
                                echo "The searched element is " . $indArr[$elemIndValSeT] . " with index : " . $elemIndValSeT;
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                         (b) => Checking of Element's Existance by {array_search();} : <br>
                              (1) Searching without using Identical Mode [false]:  -->
              
                        <header>                                
                            /(*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                                <span class="one"></span> (b) => Checking of Element's Existance by {array_search();} : <br>
                                    <span class="two"></span>  (1) Searching without using Identical Mode [false]: 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hb21; ?>  </h1>  
                            <?php                                
                                if (array_search("css3", $indArr)) {
                                    echo "The Element " . "[css3]" . " Is existed in this array" ;
                                } else {
                                    echo "The Element [css3] Is NOT existed in this array" ; 
                                }
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
              
                <!-- /(*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                             (b) => Checking of Element's Existance by {array_search();} : <br>
                              (2) Checking with using Identical Mode [True] :  -->
                
                        <header>                                
                            /(*) => Second Example => {array_search();} in => {Indexed Array} : <br>
                                <span class="one"></span> (b) => Checking of Element's Existance by {array_search();} : <br>
                                    <span class="two"></span>  (2) Checking with using Identical Mode [True] : 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hb22; ?>  </h1>  
                            <?php                                                                
                                if (array_search("css3", $indArr, true)) {
                                    echo "The Element " . "[css3]" . " Is existed in this array" ;
                                } else {
                                    echo "The Element [css3] Is NOT existed in this array" ; 
                                }                                
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                
                
                <!-- (*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                         (a) => Searching & Typing the [Element's Index] || [Element's Value] : <br>
                                (1) Search & Print [Element's Index] && [Element's Value] in {Indexed Array} by {array_key_exists(Element Index);} :    -->

                        <header>                                                        
                            (*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                                <span class="one"></span> (a) => Searching & Typing the [Element's Index] || [Element's Value] : <br>
                                    <span class="two"></span>  (1) Search & Print [Element's Index] && [Element's Value] in {Indexed Array} by {array_key_exists(Element Index);} :   
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hc11; ?>  </h1>  
                            <?php                                                                
                                echo $elemIndIndExis1;
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                        (a) => Searching & Typing the [Element's Index] || [Element's Value] : <br>
                                (2) Searching & Print [Element's Index] && [Element's Value] in {Associative Array} by {array_key_exists(Element keyname);}  :  -->
                       
                       <header>                                                        
                            /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                                <span class="one"></span> (a) => Searching & Typing the [Element's Index] || [Element's Value] : <br>
                                    <span class="two"></span> (2) Searching & Print [Element's Index] && [Element's Value] in {Associative Array} by {array_key_exists(Element keyname);}  : 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hc12; ?>  </h1>  
                            <?php                                                                
                                echo $elemIndAssoExis2;
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                         (b) => Checking of Element's Existance in [Indexed array] || [Associative array] : <br>
                             (1) Searching for Element in [Indexed Array] using it's [Index] :  -->
                       
                        <header>                                                        
                            /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                                <span class="one"></span> (b) => Checking of Element's Existance in [Indexed array] || [Associative array] : <br>
                                    <span class="two"></span> (1) Searching for Element in [Indexed Array] using it's [Index] : 
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hc21; ?>  </h1>  
                            <?php                                                                
                                if (array_key_exists( 2, $indArr )) {
                                    echo "The Element [" . $indArr[2] . "] with index : " . "[2]" . " Is existed in this array" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }            
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                        
                <!-- /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                            (b) => Checking of Element's Existance in [Indexed array] || [Associative array] : <br>
                                (2) Searching for Element in [Associative Array] using it's [keyName] : -->

                        <header>                                                        
                            /(*) => Third Example => {array_key_exists();} in => {Associative Array} && {Indexed Array} : <br>
                                <span class="one"></span> (b) => Checking of Element's Existance in [Indexed array] || [Associative array] : <br>
                                    <span class="two"></span> (2) Searching for Element in [Associative Array] using it's [keyName] :
                        </header>                                    
                        
                        <div>
                            <h1>  <?php echo $hc22; ?>  </h1>  
                            <?php                                                                
                                if (array_key_exists( "js", $assoArr )) {
                                    echo "The Element [" . $assoArr["js"] . "] with key : " . "[js]" . " Is existed in this array" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                

                <!-- (*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                         (a) => Searching & Typing the [Element's Index] || [Element's Value] in : <br>
                             (1) Searching in : {Multidimensional Array - indexed} => by [in_array();]  :  -->
                
                        <!-- <header>                                                        
                            (*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span> (a) => Searching & Typing the [Element's Index] || [Element's Value] in : <br>
                                    <span class="two"></span> (1) Searching in : {Multidimensional Array - indexed} => by [in_array();]  : 
                        </header>                                    
                                
                        <div>
                            <h1>    </h1>  
                                                                                          
                                echo $elemIndMulIndIn;                                
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                              (2) Searching in : {Multidimensional Array - indexed} => by [array_search();]  : -->
                
                        <!-- <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                                    <span class="two"></span>  (2) Searching in : {Multidimensional Array - indexed} => by [array_search();]  :
                        </header>                                    
                                
                        <div>
                            <h1>    </h1>  
                            
                                echo $elemIndMulIndSe;                                
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                    <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                        <span class="two"></span> (3) Searching in : {Multidimensional Array - indexed} => by [array_key_exists();]  :  -->
                        
                        <!-- <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                                    <span class="two"></span> (3) Searching in : {Multidimensional Array - indexed} => by [array_key_exists();]  : 
                        </header>                                    
                                
                        <div>
                            <h1>     </h1>  
                                                                                          
                                echo $elemIndMulIndExis;
                                                                        
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                              (4) Searching in : {Multidimensional Array - associative} => by [in_array();]:  -->
                        
                        <!-- <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                                    <span class="two"></span>  (4) Searching in : {Multidimensional Array - associative} => by [in_array();]: 
                        </header>                                    
                                
                        <div>
                            <h1>      </h1>  
                            
                                echo $elemKeyMulAssoIn;
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                            (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                              (5) Searching in : {Multidimensional Array - associative} => by [array_search();]  :  -->
                
                        <!-- <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                                    <span class="two"></span>  (5) Searching in : {Multidimensional Array - associative} => by [array_search();]  : 
                        </header>                                    
                                
                        <div>
                            <h1>     </h1>  
                            
                                echo $elemKeyMulAssoSe;
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                    <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                        <span class="two"></span>  (6) Searching in : {Multidimensional Array - associative} => by [array_key_exists();]  :  -->
                        
                        <!-- <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (a) => Searching & Typing the [Element's Index] || [Element's Value] in :   <br>
                                    <span class="two"></span>  (6) Searching in : {Multidimensional Array - associative} => by [array_key_exists();]  : 
                        </header>                                    
                                
                        <div>
                            <h1>   </h1>  
                                                                                          
                                echo $elemKeyMulAssoExis;
                            
                        </div>                
                        <br> <br> <br> <hr>                     -->
                <!-- ---------------------------------------------------------- -->
                <!-- ---------------------------------------------------------- -->
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                (1) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [in_array()] :  -->
                        
                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span> (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span> (1) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [in_array()] : 
                        </header>                                    
                                
                        <div>
                            <h1>  <?php echo $hd21; ?>  </h1>  
                            <?php                                                                
                                if (in_array( "HTML4", $mulArrInd[0] )) {
                                    echo "The Element " . "HTML4" . " Is existed in this [Multidimensional array - indexed]" . "<br>" ; 
                                } else {
                                    echo "The Element Is NOT existed in this [Multidimensional array - indexed]" . "<br>"; 
                                }            
                                
                                if (in_array( "CSS3", $mulArrInd[1] )) {
                                    echo "The Element " . "CSS3" . " Is existed in this [Multidimensional array - indexed]" . "<br>"; 
                                } else {
                                    echo "The Element Is NOT existed in this [Multidimensional array - indexed]" . "<br>"; 
                                }            
                            ?>                                            
                        </div>                                        
                        <br> <br> <br> <hr>                    
                <!-- -------------------------------------------------------- -->                

                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                             (2) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [array_search()] :  -->                        

                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span> (2) Searching for Element in [Multidimensional array - indexed] using it's [value] => by using [array_search()] : 
                        </header>                                    
                                
                        <div>
                            <h1>  <?php echo $hd22; ?>  </h1>  
                            <?php                                                                
                                if (array_search( "JS BOM", $mulArrInd[2] )) {
                                    echo "The Element " . $mulArrInd[2][2] . " with index : [2] Is existed in this [Multidimensional array - indexed]" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }                                            
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                              (3) Searching for Element in [Multidimensional array - indexed] using it's [index] => by using [array_key_exists()] :  -->

                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span>  (3) Searching for Element in [Multidimensional array - indexed] using it's [index] => by using [array_key_exists()] : 
                        </header>                                    
                                
                        <div>
                            <h1>  <?php echo $hd23; ?>  </h1>  
                            <?php                                                                
                                if (array_key_exists( 1, $mulArrInd[1] )) {
                                    echo "The Element with value " . $mulArrInd[1][1] . " with index [2] Is existed in this [Multidimensional array - indexed]" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }            
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                                
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                              (4) Searching for Element in [Multidimensional array - associative] using it's [keyname? or value?] => by using [in_array()] :  -->

                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span>  (4) Searching for Element in [Multidimensional array - associative] using it's [keyname? or value?] => by using [in_array()] : 
                        </header>
                                
                        <div>
                            <h1>  <?php echo $hd24; ?>  </h1>  
                            <?php 
                                if (in_array( "CSS3", $mulArrAsso["second"] )) {
                                    echo "The Element [" . $mulArrAsso["second"][2] . "] with index : [2] Is existed in this [Multidimensional array - associative] " ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }                                                            
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                
                
                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                              (5) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_search()] :  -->

                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span>  (5) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_search()] : 
                        </header>

                        <div>
                            <h1>  <?php echo $hd25; ?>  </h1>  
                            <?php 
                                if (array_search( $mulArrAsso["third"] , $mulArrAsso  )) {
                                    echo "The Element [" . $mulArrAsso["third"] . "] with index : [2] Is existed in this [Multidimensional array - associative] " ;
                                } else {
                                    echo "The Element Is NOT existed in this array" ; 
                                }
                            
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    
                <!-- ---------------------------------------------------------- -->                

                <!-- /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                          (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                              (6) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_key_exists()] :  -->
                
                        <header>                                                        
                            /(*) => Fourth Example => {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array}: <br>
                                <span class="one"></span>  (b) => Checking of Element's Existance by {in_array();} && {array_search();} && {array_key_exists();} within => {Multidimensional Array - indexed && associative} : <br>
                                    <span class="two"></span>  (6) Searching for Element in [Multidimensional array - associative] using it's [keyname] => by using [array_key_exists()] : 
                        </header>

                        <div>
                            <h1>  <?php echo $hd26; ?>  </h1>  
                            <?php 
                                if (array_key_exists( 1 , $mulArrAsso["second"] )) {
                                    echo "The Element " . $mulArrAsso["second"][1] . " with keyname : " . " [second] Is existed in this array" . "<br>" ;
                                } else {
                                    echo "The Element Is NOT existed in this array" . "<br>" ; 
                                }
                                
                                
                                if (array_key_exists( $mulArrAsso["first"][1] , $mulArrAsso["first"] )) {
                                    echo "The Element " . $mulArrAsso["first"][1] . " with keyname :  [second] Is existed in this array" . "<br>";
                                } else {
                                    echo "The Element Is NOT existed in this array" . "<br>"; 
                                }
                            ?>                                            
                        </div>                
                        <br> <br> <br> <hr>                    

                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            
                <!-- ---------------------------------------------------------- -->                            
            </section>
                                                                    
         </body>
</html>             