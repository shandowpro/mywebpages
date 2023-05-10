 <!--  34 PHP 5 - Array Multidimensional    --> 
<?php 
    
    $lessonName  ='Multidimensional Array';
    $title = '34 PHP5 - ' . $lessonName;
    $css = '34 PHP 5 - Array Multidimensional.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    

    // ============================================================================

    // (*) =>  [A]: Defintion & all elements printing :
        // a) One Layer :    
            //First Example => Defining the Multidimensional Array {One layer of interanl Indexed Arrays} => :
        
                $h1 ="Defining the Multidimensional Array {One layer of interanl Indexed Arrays} as following : " ;     
                $p1 = "The defined Multidimensional Array of my diet elements  ..." ;
                
                $dietOneInd = array(
                    array("apple", "orange", "carrot", "tomato"),
                    array("rice", "meat", "fish", "chicken"),
                    array("egg", "rice", "banana"),
                    array("apple", "milk"),            
                );
                
                // echo 'Defined Multidimensional Array Structural form of type : {One layer of internal Indexed arrays} as following :';
                //echo '<pre>';    
                //print_r($dietOneInd); 
                //echo '</pre>';        
    // ==================================================================================
        
    // (*) =>  [A]: Defintion & all elements printing :
        // a) One Layer :    
            //Second Example => Defining the Multidimensional Array of type : {One Layer of internal Associative Array} => : 
        
                $h2 = "Definging the Multidimensional Array (of 3 children Arrays) as {One Layer of internal Associative Arrays} as following : " ;     
                $p2 = "The defined Multidimensional Array of my diet elements && my progress percentage  ..." ;
                
                $dietOneAsso = array(
                    array(
                        "Proten" => "fish",
                        "Carbos" => "rice",
                        "veg"    => "tomato",
                        "fruit"  => "apple"
                    ),
                    
                    array(
                        "proten" => "fish",
                        "Carbos" => "spaketti",
                        "veg"    => "carrot",
                        "fruit"  => "banana"
                    ),                
                    
                    array(
                        "proten" => "fish",
                        "Carbos" => "rice",
                        "veg"    => "onion",
                        "fruit"  => "orange"
                    )
                );
                
                // echo 'Defined Multidimensional Array Structural form of type : {One layer of internal Associative arrays} as following :';
                //echo '<pre>';    
                //print_r($dietOneAsso); 
                //echo '</pre>';        
    // ==================================================================================

    // (*) =>  [A]: Defintion & all elements printing :
        // b) Two Layer :    
            //Third Example => Defining the Multidimensional Array {Two layers of Interanl Indexed Arrays => with Associative Array child} => : 
        
                $h3 = "Defining the Multidimensional Array (of 3 children Arrays) as {Two layers of interanl Indexed Arrays => with Associative Array child in each layer} as following : " ;     
                $p3 = "The defined Multidimensional Array of my diet elements  ..." ;
                
                $dietTwoIndAsso = array(
                    array(
                        "apple",
                        "orange",
                        "carrot", 
                        array(       // The first child associative array is located at the [Last element] of the parent indexed array  
                            "apple"  => "10%",
                            "orange" => "20%",
                            "carrot" => "30%",
                        ),
                    ),                      
                
                    array(
                        "apple", "orange", "carrot",
                        array(      // The first child associative array is located at the [Last element] of the parent indexed array  
                            "apple"  => "10%",
                            "orange" => "20%",
                            "carrot" => "30%",
                        ), 
                    ),
                    
                    array(
                        "apple", "orange", "carrot",
                        array(     // The first child associative array is located at the [Last element] of the parent indexed array  
                            "apple"  => "10%",
                            "orange" => "20%",
                            "carrot" => "30%",
                        ),                    
                    ),
                );

                // echo 'Defined Multidimensional Array Structural form of type : {Two layers of interanl Indexed Arrays with Associatvie Array} as following :';
                //echo '<pre>';    
                //print_r($dietTwoIndAsso); 
                //echo '</pre>';        
    // ==================================================================================

    // (*) =>  [A]: Defintion & all elements printing :
        // b) Two Layers :    
            // Fourth Example => Defining the Multidimensional Array {Two layers of Interanl Associatvie Arrays => with Indexed Array child in each layer} => : */
        
                $h4 = "Definging the Multidimensional Array (of 3 children Arrays) as {Two layers of interanl Associatvie Arrays with Indexed Array child in each layer} as following : " ;     
                $p4 = "The defined Multidimensional Array of my diet elements  ..." ;
                
                $dietTwoAssoInd = array(                        
                    array(               
                        "first"  => array("apple", "orange", "carrot"),  // The first child indexed array is located at the [Last element] of the parent associative array  
                        "second" => "20%",
                        "third"  => "30%",
                        "fourth" => "10%"
                    ),
                    array(               
                        "first" => array("apple", "orange", "carrot"),  // The second child indexed array is located at the [Last element] of the parent associative array  
                        "fourth"  => "10%",
                        "second" => "20%",
                        "third"  => "30%",
                    ),
                    array(               
                        "first"  => array("apple", "orange", "carrot"),  // The third child indexed array is located at the [middle element] of the parent associative array  
                        "third"  => "10%",
                        "second" => "20%",
                        "fourth" => "30%"
                    ),           
                );

                // echo 'Defined Multidimensional Array Structural form of type : {Two layers of interanl Associatvie Arrays => with children Indexed Array} as following :';
                //echo '<pre>';    
                //print_r($dietTwoAssoInd); 
                //echo '</pre>';        
    // ==================================================================================
    // ==================================================================================

    // (*) =>  [A]: Defintion & all elements printing :
        // c) Three Layers :    
            // Fifth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Associatvie-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => : */
            
                $h5 = "Defining the Multidimensional Array {Three layers of Internal [Three Associatvie-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} =>  as following : " ;     
                $p5 = "The defined Multidimensional Array of assumed elements  ..." ;

                $dietThreeAssoMixMix = array(
                    array(             // First Parent Multidimensional array :
                        "First" => array(             // First Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array(
                                "Sub indexed child 1",
                                "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                        // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Second" => array(             // Second Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Third" => array(             // Third Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                    // ------------------------------------------------------
                    array(             // Second Parent Multidimensional array :
                        "First" => array(             // First Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                            array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                     // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Second" => array(             // Second Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Third" => array(             // Third Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                    // ------------------------------------------------------
                    array(             // Third Parent Multidimensional array :
                        "First" => array(             // First Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                            array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                     // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Second" => array(             // Second Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        "Third" => array(             // Third Child Asssociative array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                );

                // echo "<pre>";
                // print_r($dietThreeAssoMixMix);
                // echo "</pre>";
    // ==================================================================================

    // (*) =>  [A]: Defintion & all elements printing :
        // c) Three Layers :    
            // Sixth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Indexed-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => : */

                $h6 = "Defining the Multidimensional Array {Three layers of Interanl [Three Associatvie-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} =>  as following : " ;     
                $p6 = "The defined Multidimensional Array of assumed elements  ..." ;
                
                $dietThreeIndMixMix = array(
                    array(             // First Parent [Indexed array] :
                        array(             // First Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4" => array("1","2","3"),                        // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Second Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Third Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                    // ------------------------------------------------------
                    array(             // Second Parent [Indexed array] :
                        array(             // First Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                            array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                     // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Second Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Third Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                    // ------------------------------------------------------
                    array(             // Third Parent [Indexed array] :
                        array(             // First Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                            array(                                                                      // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                          // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                     // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Second Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                        
                        array(             // Third Child Multidimensional array Element :
                            "Child 1 String Value",                                     // First Sub Child of Asssociative array Element [String] :
                            array("Sub indexed child 1", "Sub indexed child 2",                 // Second Sub Child of Asssociative array Element [Indexed Array] :
                                array(                                                                 // Third Sub Child of the Second Sub Child of Asssociative array Element [Indexed Array]:
                                    1 => "First Child of Sub indexed array child of associative array child",
                                    2 => "Second Child of Sub indexed array child of associative array child",
                                    3 => "Third Child of Sub indexed array child of associative array child",
                                )
                            ),     
                            array(                                                                     // Third Sub Child of Asssociative array Element [Associative Array] :
                                "Sub Associative KeyName child 1" => "Sub Associative Value child 1",                         
                                "Sub Associative KeyName child 2" => "Sub Associative Value child 2",                         
                                "Sub Associative KeyName child 3" => "Sub Associative Value child 3",
                                "Sub Associative KeyName child 4 " => array("1","2","3"),                   // Fourth Sub Indexed Array child of => Third Sub Child => of Asssociative array Element [Associative Array]
                            ),
                        ), 
                    ),                            
                );            
                
                // echo "<pre>";
                // print_r($dietThreeIndMixMix);
                // echo "</pre>";            
    // ==================================================================================
    // ==================================================================================


    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // Seventh Example : 
            // 1) First Example Array { $dietOneInd } => [Indexed array] :
            
                $h71 = "Acessing & Printing Elements of Array { dietOneInd } as following : " ;     
                $p71 = "Solo Acessing & Printing by [for] Loop statement ..." ;

                // echo "<pre>";
                    // for ($elem = 0; $elem< count($dietOneInd); $elem++) {
                    //     echo $dietOneInd[$elem] . "<br>";
                    // }
                // echo "</pre>";
        
            
    // ==================================================================================

    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // /Seventh Example : 
            // 2) Second Example Array { $dietOneAsso } => [Associative Array] :

                $h72 = "Acessing & Printing Elements of Array { dietOneAsso } as following : " ;     
                $p72 = "Solo Acessing & Printing by [foreach] Loop statement ..." ;

                // echo "<pre>";
                // foreach ($dietOneAsso as $elemN => $elemV) {
                    // echo $elemN "=>" . $elemV . "<br>" ;
                // }
                // echo "</pre>";
        
        // ==================================================================================
        
    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // /Seventh Example : 
            // 3) Third Example Array { $dietTwoIndAsso } => [Indexed Array] : [Associative Array] :

                $h73 = "Acessing & Printing Elements of Array { dietTwoIndAsso } as following : " ;     
                $p73 = "Solo Accessing & Printing by [for && foreach] Loop statement ..." ;

                // echo "<pre>";
                
                // for ($elem = 0; $elem < count($dietTwoIndAsso); $elem++) {

                //     foreach ($dietTwoIndAsso as $elemAssoN => $elemAssoV ) {
                //         echo $dietTwoIndAsso[$elem][$elemAssoN] . "<br>";
                //     }
                // }
                
                // echo "</pre>";        
                
    // ==================================================================================
    
    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // /Seventh Example : 
            // 4) Forth Example Array { $dietTwoAssoInd } => [Associative Array] : [Indexed Array]

                $h74 = "Acessing & Printing Elements of Array { dietTwoAssoInd } as following : " ;     
                $p74 = "Solo Accessing & Printing by [foreach && for] Loop statement ..." ;

                // echo "<pre>";
                
                // for ($elem = 0; $elem < count($dietTwoAssoInd); $elem++) {
                //     foreach ($dietTwoAssoInd as $elemAssoN => $elemAssoV ) {
                //         echo $dietTwoAssoInd[$elemAssoN][$elem] . "<br>";
                //     }
                // }
                
                // echo "</pre>";                    
    // ==================================================================================
    
    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // /Seventh Example : 
            // 5) Fifth Example Array { $dietThreeAssoMixMix } => [Associative Array] : [Indexed Array]

                $h75 = "Acessing & Printing Elements of Array { dietThreeAssoMixMix } as following : " ;     
                $p75 = "Solo Accessing & Printing by [foreach && for] Loop statement ..." ;

                // echo "<pre>";
                
                // for ($elem = 0; $elem < count($dietThreeAssoMixMix); $elem++) {
                //    foreach ($dietThreeAssoMixMix[$elem] as $elemAssoN => $elemAssoV ) {                        
                //         foreach ($dietThreeAssoMixMix[$elem][$elemAssoN] as $elemAssoN1 => $elemAssoV1 ) {                        
                //                 echo $dietThreeAssoMixMix[$elem][$elemAssoN][$elemAssoN1] . "=>" . $elemAssoV1 . "<br>";
                //         }
                //    }
                // }
                
                // echo "</pre>";                    
    // ==================================================================================
    
    // (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
        // /Seventh Example : 
            // 6) Sixth Example Array { $dietThreeIndMixMix } => [Associative Array] : [Indexed Array]
            
                $h76 = "Acessing & Printing Elements of Array { dietThreeIndMixMix } as following : " ;     
                $p76 = "Solo Accessing & Printing by [foreach && for] Loop statement ..." ;

                // echo "<pre>";
                
                // for ($elem = 0; $elem < count($dietThreeIndMixMix); $elem++) {
                //     for ($elem1 = 0; $elem1 < count($dietThreeIndMixMix[$elem]); $elem1++) {
                //         foreach ($dietThreeIndMixMix[$elem][$elem1] as $elemAssoN => $elemAssoV ) {
                //             echo $dietThreeIndMixMix[$elem][$elem1][$elemAssoN] . "=>" . $elemAssoV . "<br>";
                //         }
                //     }
                // }
                
                // echo "</pre>";                        
        
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
            
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    a) One Layer :    
                        First Example => Defining the Multidimensional Array {One layer of interanl Indexed Arrays} => : -->
            
                            <header>
                                // (*) =>  [A]: Defintion & all elements printing : <br>
                                    // a) One Layer :     <br>
                                        //First Example => Defining the Multidimensional Array {One layer of interanl Indexed Arrays} => : <br>
                                        + => Printing All Elements of Multidimensional Array by {print_r() Method}   => : <br>
                            </header>
                                    
                            <div>
                                <h1>  <?php echo $h1; ?>  </h1>            
                                <p>   <?php echo $p1; ?>  </p> <br>                        
                                <?php                                                                     
                                    echo 'Defined Multidimensional Array Structural form of type : {One layer of internal Indexed arrays} as following :';
                                    echo '<pre>';    
                                    print_r($dietOneInd); 
                                    echo '</pre>';        
                                                
                                ?>                                            
                            </div>                
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->
        
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    a) One Layer :    
                        Second Example => Defining the Multidimensional Array of type : {One Layer of internal Associative Array} => :  -->

                            <header>  
                                // (*) =>  [A]: Defintion & all elements printing : <br>
                                    // a) One Layer :    <br>
                                        //Second Example => Defining the Multidimensional Array of type : {One Layer of internal Associative Array} => :  <br>
                                        + => Printing All Elements of Multidimensional Array by {print_r() Method}   => : <br>             
                            </header>
                            
                            <div>
                                <h1>  <?php echo $h2; ?>  </h1>            
                                <p>   <?php echo $p2; ?>  </p> <br>                        
                                <?php                         
                                    echo 'Defined Multidimensional Array Structural form of type : {One layer of internal Associative arrays} as following :';
                                    echo '<pre>';    
                                    print_r($dietOneAsso); 
                                    echo '</pre>';                                                
                                ?>            
                            </div>
                        <br> <br> <br> <hr>
                    <!-- ---------------------------------------------------------- -->    
                    
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    b) Two Layer :    
                        Third Example => Defining the Multidimensional Array {Two layers of Interanl Indexed Arrays => with Associatvie Array child} => :  -->
                    
                            <header>
                                    // (*) =>  [A]: Defintion & all elements printing : <br>
                                        // b) Two Layer :    <br>
                                            //Third Example => Defining the Multidimensional Array {Two layers of Interanl Indexed Arrays => with Associatvie Array child} => : <br> 
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h3; ?>  </h1>
                                <p>   <?php echo $p3; ?>  </p> <br>
                                <?php 
                                    
                                    echo 'Defined Multidimensional Array Structural form of type : {Two layers of interanl Indexed Arrays with Associatvie Array} as following :';
                                    echo '<pre>';    
                                    print_r($dietTwoIndAsso); 
                                    echo '</pre>';                                                                   
                                    
                                ?>            
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- ---------------------------------------------------------- -->
                        
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    b) Two Layers :    
                        Fourth Example => Defining the Multidimensional Array {Two layers of Interanl Associatvie Arrays => with Indexed Array child in each layer} => : -->

                            <header>
                                // (*) =>  [A]: Defintion & all elements printing :
                                    // b) Two Layers :    
                                        // Fourth Example => Defining the Multidimensional Array {Two layers of Interanl Associatvie Arrays => with Indexed Array child in each layer} => : */            
                            </header>
                                    
                            <div>
                                    <h1>  <?php echo $h4; ?>  </h1>
                                    <p>   <?php echo $p4; ?>  </p> <br>
                                    <?php 
                                        
                                        echo 'Defined Multidimensional Array Structural form of type : {Two layers of interanl Associatvie Arrays => with children Indexed Array} as following :';
                                        echo '<pre>';    
                                        print_r($dietTwoAssoInd); 
                                        echo '</pre>';        
                                                                            
                                    ?>            
                            </div>
                        <br> <br> <br> <hr>
                        <!-- ---------------------------------------------------------- -->
        
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    c) Three Layers :    
                        Fifth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Associatvie-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => -->

                            <header>
                                // (*) =>  [A]: Defintion & all elements printing :
                                    // c) Three Layers :    
                                        // Fifth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Associatvie-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => : */
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h5; ?>  </h1>
                                <p>   <?php echo $p5; ?>  </p> <br>
                                <?php 
                                    echo "<pre>";
                                    print_r($dietThreeAssoMixMix);
                                    echo "</pre>"; 
                                                                                 
                                ?>            
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->
                
                <!-- (*) =>  [A]: Defintion & all elements printing :
                    c) Three Layers :    
                        Sixth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Indexed-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => :  -->

                            <header>
                                    // (*) =>  [A]: Defintion & all elements printing :
                                        // c) Three Layers :    
                                            // Sixth Example => Defining the Multidimensional Array {Three layers of Interanl [Three Indexed-mixed Arrays] => with (1)String Value && (1)Associative Array child && (1)Indexed Array child => with (1) Asssociative Array sub child && with (1)Indexed Array sub child} => : */
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h6; ?>  </h1>
                                <p>   <?php echo $p6; ?>  </p> <br>
                                <?php 
                                    
                                    echo "<pre>";
                                    print_r($dietThreeIndMixMix);
                                    echo "</pre>";            
                                                                        
                                ?>            
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->
                        <!-- --------------------------------------------------- -->
                
                <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                    Seventh Example : 
                        1) First Example Array { $dietOneInd } : [ Indexed Array ] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                        Seventh Example => of First Example -> {$dietOneInd} : [Indexed Array] 
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h71; ?>  </h1>
                                <p>   <?php echo $p71; ?>  </p> <br>
                                <?php 
                                    echo "<pre>";
                                    
                                    for ($i=0; $i < count($dietOneInd); $i++) {
                                        
                                        echo "The array Number [" . ($i+1) . "] (with count : " . count($dietOneInd[$i]) . ") elements as following " . "<br>";
                                        
                                        for ($a=0; $a < count($dietOneInd[$i]); $a++ ) {
                                            echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietOneInd[$i][$a] . "<br>";                                            
                                        }
                                                                            
                                        echo "=============================" . "<br>";
                                    }
                                    
                                    echo "</pre>";                            
                                                            
                                ?> 
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->
                
                <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                    Seventh Example : 
                        2) Second Example Array { $dietOneAsso } : [ Associative Array ] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                        Seventh Example => of Second Example -> {$dietOneAsso} : [Associative Array] 
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h72; ?>  </h1>
                                <p>   <?php echo $p72; ?>  </p> <br>
                                <?php 
                                   
                                   echo "<pre>";                       

                                   for ($i=0; $i < count($dietOneAsso); $i++) {
                                        
                                    echo "The array Number [" . ($i+1) . "] (with count : " . count($dietOneAsso[$i]) . ") elements as following " . "<br>";
                                    
                                    foreach ($dietOneAsso[$i] as $elemN => $elemV) {
                                            echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN . "=>" . $elemV .  "<br>";
                                    }
                                    
                                    echo "=============================" . "<br>";
                                }
                                
                                echo "</pre>";                            
                                
                                // echo "<pre>";                                
                                    // f    or ($a=0; $a < count($dietOneAsso[$i]); $a++ ) {
                                    //     echo $dietOneAsso[$i][$a] . "<br>";                                            
                                    // }
                                // echo "</pre>";
                                ?> 
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->
                
                <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                    /Seventh Example : 
                        3) Third Example Array { $dietTwoIndAsso } : [ Associative Array ] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                        Seventh Example =>  of Third Example -> {$dietTwoIndAsso} : [Indexed Array] & [Associative]
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h73; ?>  </h1>
                                <p>   <?php echo $p73; ?>  </p> <br>
                                <?php 
                                
                                    echo "<pre>";                       

                                    for ($i=0; $i < count($dietTwoIndAsso); $i++) {
                                        
                                        echo "The array Number [" . ($i+1) . "] (with count : " . count($dietTwoIndAsso) . ") elements as following: " . "<br>";
                                        
                                        for ($a = 0; $a < count($dietTwoIndAsso[$i]); $a++ ) {
                                        
                                            if (!($a == 3 )) {

                                                echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietTwoIndAsso[$i][$a] . "<br>" ;
                                            
                                            } else {
                                                
                                                echo "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "The array Number [" . ($a+1) . "] (with count : " . count($dietTwoIndAsso[$i][$a]) . ") elements as following :" . "<br>";
                                                
                                                foreach ($dietTwoIndAsso[$i][$a] as $elemN => $elemV ) {
                                                    
                                                    echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN . "=>" . $elemV .  "<br>";

                                                }
                                                                                  
                                                // echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . print_r($dietTwoIndAsso[$i][$a]);
                                            }
                                        
                                        }                                                                                                                                                                
                                        echo "=============================" . "<br>";
                                    }                                    
                                    
                                    echo "</pre>";                            
                                    /*
                                            // echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietTwoIndAsso[$i] . "<br>";                                                                                          
                                        // } elseif ($i == 3 ) {
                                            
                                            // for ($a=0; $a < count($dietTwoIndAsso[$i]); $a++ ) {
                                            //     echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietTwoIndAsso[$i][$a] . "<br>";                                            
                                            // }

                                            // for ($a = 0; $a < count($dietTwoIndAsso[$i]); $a++ ) {

                                            //     foreach ($dietTwoIndAsso[$i][$a] as $elemN => $elemV) {
                                            //         echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN . "=>" . $elemV .  "<br>";
                                            //     }                                                
                                            // }

                                        // }
                                            
                                        
                                        //     echo "<pre>";                                                        
                            
                                        //     for ($elem = 0; $elem < count($dietTwoIndAsso); $elem++) {
                                        //         foreach ($dietTwoIndAsso[$elem] as $elemN => $elemV) {
                                        //             echo $dietTwoIndAsso[$elem][$elemN] . "=>" . $elemV . "<br>";                                    
                                        //         }
                                        //     }

                                        //     echo "</pre>";
                                    */                                                                                                                                    
                                ?> 
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->
                
                <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                    /Seventh Example : 
                        4) Fourth Example Array { $dietTwoAssoInd } : [ Associative Array ] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                        Seventh Example => of Fourth Example -> {$dietTwoAssoInd } : [Indexed Array] & [Associative Array] 
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h74; ?>  </h1>
                                <p>   <?php echo $p74; ?>  </p> <br>
                                <?php 
                    
                                    echo "<pre>";                       
                                    
                                    for ($i=0; $i < count($dietTwoAssoInd); $i++) {
                                        
                                        echo "The array Number [" . ($i+1) . "] (with count : " . count($dietTwoAssoInd[$i]) . ") elements as following: " . "<br>";
                                        
                                        foreach ($dietTwoAssoInd[$i] as $elemN => $elemV ) {
                                            
                                            if ($elemN == "first" ) {
                                                                                                    
                                                foreach ($dietTwoAssoInd[$i][$elemN] as $elemN1 => $elemV1 ) {
                                                    
                                                    echo "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN1 . "=>" . $elemV1 .  "<br>" . "<br>";
                                                    
                                                }
                                                
                                                echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "The child array fo the first child element with count [ " . count($dietTwoAssoInd[$i][$elemN]) . " ]" . "<br>" . "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;"  .  $elemN . " => array ( " . "<br>";
                                            } else {
                                                echo "<br>";
                                                
                                                echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN . "=>" . $elemV .  "<br>" ."<br>";
                                            }
                                            
                                            
                                        }                                        echo "&nbsp;" . "&nbsp;" . "&nbsp;"  . ")" . "<br>";
                                        
                                        echo "=============================" . "<br>";                                                                                    
                                    }
                                    
                                    echo "</pre>";                                                                                                                                               
                                    
                                    ?> 
                            </div> 
                            <br> <br> <br> <hr>
                <!-- --------------------------------------------------- -->
                            
                
            <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                    /Seventh Example : 
                    5) Fifth Example Array { $dietThreeAssoMixMix } : [ Associative Array ] & [Mix Array] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                    Seventh Example => of Fifth Example -> {$dietThreeAssoMixMix} : [Indexed Array] & [Associative Array] 
                                </header>
                                
                                <div>
                                <h1>  <?php echo $h75; ?>  </h1>
                                <p>   <?php echo $p75; ?>  </p> <br>
                                <?php 
                                   
                                   echo "<pre>";                       
                                   
                                   for ($i=0; $i < count($dietThreeAssoMixMix); $i++) {
                                       
                                       echo "The array Number [" . ($i+1) . "] (with count : " . count($dietThreeAssoMixMix[$i]) . ") elements as following: " . "<br>";
                                                                            
                                       foreach ($dietThreeAssoMixMix[$i] as $elemN => $elemV ) {
                                                                                                                                                                                                                                    
                                            for ($a=0; $a < count($dietThreeAssoMixMix[$i][$elemN]); $a++) {
                                                
                                                if ($a==1) {
                                                    
                                                    for ($b=0; $b < count($dietThreeAssoMixMix[$i][$elemN][$a]); $b++) {
                                                        
                                                        if ($b==2) {                                                                                                                      
                                                            
                                                            foreach ( $dietThreeAssoMixMix[$i][$elemN][$a][$b] as $elemN1 => $elemV1 ) {
                                                                echo "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN1 . "=>" . $elemV1 .  "<br>" . "<br>";
                                                            }                                                                                                                        
                                                                                                                                                                                
                                                        } else {
                                                            echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietThreeAssoMixMix[$i][$elemN][$a][$b] . "<br>" ;
                                                        }                                                        
                                                    }
                                                                        
                                                } elseif ($a==2) {
                    
                                                    for ($b=0; $b < count($dietThreeAssoMixMix[$i][$elemN][$a]); $b++) {
                    
                                                        if (!($b==3)) {
                                                            
                                                            foreach ( $dietThreeAssoMixMix[$i][$elemN][$a] as $elemN1 => $elemV1 ) {
                                                                echo "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN1 . "=>" . $elemV1 .  "<br>" . "<br>";
                                                            }                                                                           

                                                        } else {
                                                            
                                                            for($c = 0; $c < $dietThreeAssoMixMix[$i][$elemN][$a]["Sub Associative KeyName child 4"]; $c++) {
                                                                echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietThreeAssoMixMix[$i][$elemN][$a]["Sub Associative KeyName child 4"][$c] . "<br>" ;
                                                            }
                                                        }
                                                    
                                                    }                                                                                                    

                                                } else {

                                                    echo "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $dietThreeAssoMixMix[$i][$elemN][$a] . "<br>" ; 

                                                }
                                                                                                                                                
                                            }
                                                                                                                                                                        
                                        }

                                    
                                        //    print_r($dietThreeAssoMixMix[$i]); 



                                                                           
                                       //    foreach ($dietThreeAssoMixMix[$i] as $elemN => $elemV ) {
                                       // echo "<br>" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . "&nbsp;" . $elemN . "=>" . $elemV .  "<br>" . "<br>";                                           
                                       
                                        // }
                                    }
                                    
                                    echo "</pre>";
                                /*
                                            // echo "<pre>";                                                        
                        
                                        // for ($elem = 0; $elem < count($dietThreeAssoMixMix); $elem++) {
                                        //     foreach ($dietThreeAssoMixMix[$elem] as $elemN => $elemV) {
                                        //         echo $dietThreeAssoMixMix[$elem][$elemN] . "=>" . $elemV . "<br>";                                    
                                        //     }
                                        // }

                                   
                                    */
                                ?> 
                            </div> 

                        <br> <br> <br> <hr>
            <!-- --------------------------------------------------- -->
                
        <!-- (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
            /Seventh Example : 
                6) Sixth Example Array { $dietThreeIndMixMix  } : [ Associative Array ] & [Mix Array] : -->
                            <header>
                                    (*) =>  [B]: Accessing certain Element inside the Multidimensional Array :
                                        Seventh Example => {$dietThreeIndMixMix : [Indexed Array] & [Associative Array] 
                            </header>
                                
                            <div>
                                <h1>  <?php echo $h76; ?>  </h1>
                                <p>   <?php echo $p76; ?>  </p> <br>
                                <?php 

                                    echo "Accessing to the certain Solo element Value  {first sub child of the first child of the main Array  } " .  "<br>" ;
                                    echo $dietThreeIndMixMix[0][0][0] . "<br>" . "<hr>";
                                    echo $dietThreeIndMixMix[0][0][1][0] . "<br>" . "<hr>";
                                    echo $dietThreeIndMixMix[0][0][1][2][1] . "<br>" . "<hr>";
                                    echo $dietThreeIndMixMix[0][0][1][0][3] . "<br>" . "<hr>";
                                
                                    // echo "<pre>";                                                        
                    
                                    // for ($elem = 0; $elem < count($dietThreeIndMixMix); $elem++) {
                                    //     foreach ($dietThreeIndMixMix[$elem] as $elemN => $elemV) {
                                    //         echo $dietThreeIndMixMix[$elem][$elemN] . "=>" . $elemV . "<br>";                                    
                                    //     }
                                    // }

                                    // echo "</pre>";                                                                                                                                    
                                ?>  
                            </div> 
                        <br> <br> <br> <hr>
                        <!-- --------------------------------------------------- -->

            </section>
                                                                    
         </body>
</html>             