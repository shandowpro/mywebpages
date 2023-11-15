   <!--  php5 - Lesson19 -  All Operators=>    -->
<?php     
    $lessonName  ='All Operators';
    $title = '19 PHP5 - ' . $lessonName;
    $css = '19 PHP 5 In Arabic - All Operators.css';
    
    $heading = 'This the head lesson about ' . $lessonName;
    $paragraph = 'This is paragraph about ' . $lessonName;    
    
        
// First [ Arithmetic operators  ] :
    $num10 = 100;      
    $num100 = 200;      
    
    $sum = $num10 + $num100;
    $sub = $num10 - $num100;
    $mult = $num10 * $num100;
    $div = $num10 / $num100;
    $mod = $num10 % $num100;
    $pow = $num10 ** $num100;

    $h11 = 'First Summition {+} of numbers [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    $h12 = 'Second Substraction {-} [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    $h13 = 'Third Multiply {*} [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    $h14 = 'Fourth Division {/} [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    $h15 = 'Fifth Modulus {%} [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    $h16 = 'Sixth Power {**} [' . $num10 . '] & [' . $num100 . '] result as following : ' . '<br>';
    
    $p11 = $sum;
    $p12 = $sub;
    $p13 = $mult;
    $p14 = $div;
    $p15 = $mod;
    $p16 = $pow;
// ======================================================
    
// Second [ Assignment operators  ] :
    
    // 1 ) adding [+=]  :
    $asum = 100;      
    $asum += $asum;      
    
    // 2 ) adding [-=]  :
    $asub = 100;      
    $asub -= $asub;      
    
    // 3 ) Multiply [*=]  :
    $amult = 100;          
    $amult *= $amult;      
    
    // 4 ) Division  [/=]  :
    $adiv = 100;
    $adiv /= $adiv;
    
    // 5 ) Powering [**=]  :
    $apow = 10;    
    $apow **= $apow;                
    
    $h21 = 'First Summition {+=} result as following : ' . '<br>';
    $h22 = 'Second Substraction {-=} result as following : ' . '<br>';
    $h23 = 'Third Multiply {*=} result as following : ' . '<br>';
    $h24 = 'Fourth Division {/=} result as following : ' . '<br>';    
    $h25 = 'Sixth Power {**=} result as following : ' . '<br>';
    
    $p21 = $asum;
    $p22 = $asub;
    $p23 = $amult;
    $p24 = $adiv;    
    $p25 = $apow;
// ========================================================

// Third [ Comparison operators  ] :
    $name = 'Shadi';
    $age = 33;
    $Skill = 3;

    $h31 = '[Greater than] operator result as following : ' . '<br>';
    $h32 = '[Less than] operator result as following : ' . '<br>';
    $h33 = '[Greater than or equal] operator result as following : ' . '<br>';
    $h34 = '[Less than or equal] operator result as following : ' . '<br>';
    $h35 = '[Value Equal] operator result as following : ' . '<br>';
    $h36 = '[Identcial Equal] operator result as following : ' . '<br>';
    $h37 = '[Not value Equal (!=) ] operator result as following : ' . '<br>';
    $h38 = '[Not value Equal (<>) ] operator result as following : ' . '<br>';
    $h39 = '[Not Identical Equal (!==) ] operator result as following : ' . '<br>';
        
    $p31 = '';
    $p32 = '';
    $p33 = '';
    $p34 = '';    
    $p35 = '';
    $p36 = '';
    $p37 = '';
    $p38 = '';
    $p39 = '';

// 1 ) [>] greater than operator 
    if ($age > 30) {
        $p31 = 'Your age is ' . $age . ' Is greater than ' . '[30]' .  ' and accepted' ;
    }else {
        $p31 = 'Your age is ' . $age .  ' Is Not greater than ' . '[30]' . ' Is Not accepted' ;
    }
        
// 2 ) [<] less than operator 
    if ($age < 30) {
        $p32 = 'Your age is ' . $age .  ' Is smaller than ' . '[30]' . ' and accepted' ;
    }else {
        $p32 = 'Your age is ' . $age .  ' Is Not smaller than ' . '[30]' . ' Is Not accepted' ;
    }

// 3 ) [>=] greater than / equal operator 
    if ($age >= 30) {
        $p33 = 'Your age is ' . $age . ' Is greater than or equal ' . '[30]' .  ' and accepted' ;
    }else {
        $p33 = 'Your age is ' . $age .  ' Is Not greater than or equal  ' . '[30]' . ' Is Not accepted' ;
    }
        
// 4 ) [<=] less than / equal operator 
    if ($age <= 30) {
        $p34 = 'Your age is ' . $age .  ' Is smaller than or equal ' . '[30]' . ' and accepted' ;
    }else {
        $p34 = 'Your age is ' . $age .  ' Is Not smaller than or equal ' . '[30]' . ' Is Not accepted' ;
    }

// 5 ) [==] Value Equality Operator 
    if ($age == 30) {
        $p35 = 'Your age is ' . $age . ' Is value Equal ' . '[30]' .  ' and accepted' ;
    }else {
        $p35 = 'Your age is ' . $age .  ' Is Not Value Equal ' . '[30]' . ' Is Not accepted' ;
    }
        
// 6 ) [===] Identical Equality operator 
    if ($age === 30) {
        $p36 = 'Your age is ' . $age .  ' Is Identical Equal with ' . '[30]' . ' and accepted' ;
    }else {
        $p36 = 'Your age is ' . $age .  ' Is Not Identical Equal with ' . '[30]' . ' Is Not accepted' ;
    }

// 7 ) [!=] Not Equal operator 
    if ($age != 30) {
        $p37 = 'Your age is ' . $age . ' Is value Not equal ' . '[30]' .  ' and accepted' ;
    }else {
        $p37 = 'Your age is ' . $age .  ' Is equal  ' . '[30]' . ' Is Not accepted' ;
    }
    
// 8 ) [<>] Not Equal operator 
    if ($age <> 30) {
        $p38 = 'Your age is ' . $age . ' Is value Not equal ' . '[30]' .  ' and accepted' ;        
    }else {
        $p38 = 'Your age is ' . $age .  ' Is equal  ' . '[30]' . ' Is Not accepted' ;        
    }
        
// 9 ) [!==] Not Identical equal operator 
    if ($age !== 30) {
        $p39 = 'Your age is ' . $age .  ' Is Not Idenitcal equal ' . '[30]' . ' and accepted' ;
    }else {
        $p39 = 'Your age is ' . $age .  ' Is Identical equal ' . '[30]' . ' Is Not accepted' ;
    }
// ========================================================

// Fourth [ Incremnent & Decrement operators  ] :

    // 1 ) [++$var] Pre Increment operator :
    $num40 = 100;
    $h41 = '[++$var] Pre Increment operator result :';
    
    $p41 = 'Pre Increment of variable '. $num40 . ' Result = ' . ++$num40 . '<br>';
    $p41 .= 'Pre Increment of variable '. $num40 . ' Result = ' . ++$num40 . '<br>';
    $p41 .= 'Pre Increment of variable '. $num40 . ' Result = ' . ++$num40 . '<br>';
    
    // 2 ) [$var++] Post Increment operator :
    $num400 = 100;
    $h42 = '[$var++] Post Increment operator result :';
    
    $p42 = 'Pre Increment of variable '. $num400 . ' Result = ' . $num400++ . '<br>';
    $p42 .= 'Pre Increment of variable '. $num400 . ' Result = ' . $num400++ . '<br>';
    $p42 .= 'Pre Increment of variable '. $num400 . ' Result = ' . $num400++ . '<br>';
    
    // 3 ) [--$var] Pre Decrement operator :
    $num4000 = 100;
    $h43 = '[--$var] Pre Increment operator result :';
    
    $p43 = 'Pre Decrement of variable '. $num4000 . ' Result = ' . --$num4000 . '<br>';
    $p43 .= 'Pre Decrement of variable '. $num4000 . ' Result = ' . --$num4000 . '<br>';
    $p43 .= 'Pre Decrement of variable '. $num4000 . ' Result = ' . --$num4000 . '<br>';
    
    // 4 ) [$var--] Post Decrement operator :
    $num40000 = 100;
    $h44 = '[$var--] Post Increment operator result :';
    
    $p44 = 'Pre Decrement of variable '. $num40000 . ' Result = ' . $num40000-- . '<br>';
    $p44 .= 'Pre Decrement of variable '. $num40000 . ' Result = ' . $num40000-- . '<br>';
    $p44 .= 'Pre Decrement of variable '. $num40000 . ' Result = ' . $num40000-- . '<br>';
    // =======================================================================================
    
// Fifth [ Logical operators  ] :
    $age = 33 ;
    $skill = 3 ;
    $name = 'shadi' ;
     
    $h51 = '[and] logical operator result as following : ' . '<br>';
    $h52 = '[&&] logical operator result as following : ' . '<br>';    
    $h53 = '[or] logical operator result as following : ' . '<br>';    
    $h54 = '[||] logical operator result as following : ' . '<br>';    
    $h55 = '[xor] logical operator result as following : ' . '<br>';    
    $h56 = '[!] logical operator result as following : ' . '<br>';        

    $p51 = '';
    $p52 = '';
    $p53 = '';
    $p54 = '';    
    $p55 = '';
    $p56 = '';
        
// 1 ) [and] logical operator :
    if ($age > 30 and $skill > 1 ) {
        $p51 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted all conditions by [and]' ;
    } else {        
        $p51 = 'Hello ' . $name . ' your age =' . $age . 'Your Not accepted all conditions [and]' ;
    }

// 2 ) [&&] logical operator :
    if ($age > 30 && $skill > 1 ) {
        $p52 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted all conditions by [&&]' ;
    } else {        
        $p52 = 'Hello ' . $name . ' your age =' . $age . 'Your Not accepted all conditions by [&&]' ;
    }
    
// 3 ) [or] logical operator :
    if ($age > 30 or $skill > 1 ) {
        $p53 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted one or more conditions by [or]' ;
    } else {        
        $p53 = 'Hello ' . $name . ' your age =' . $age . 'Your Not accepted one or more conditions by [or]' ;
    }    

// 4 ) [||] logical operator :
    if ($age > 30 || $skill > 1 ) {
        $p54 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted one or more conditions by [||]' ;
    } else {        
        $p54 = 'Hello ' . $name . ' your age =' . $age . 'Your Not accepted one or more conditions by [||]' ;
    }    

// 5 ) [xor] logical operator :
    if ($age > 30 xor $skill > 1 ) {
        $p55 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted one or more conditions {but not all} by [xor]' ;
    } else {        
        $p55 = 'Hello ' . $name . ' your age =' . $age . 'Your accepted {All} conditions by [xor]' ;
    }    
                                                                                                                                                                                        
// 6 ) [!] not (negative) logical operator :
    if (!($age = 30)) {
        $p56 = 'Hello ' . $name . ' your age =' . $age . 'Your are accepted , because condition (age =30) is negative by [!]' ;
    } else {        
        $p56 = 'Hello ' . $name . ' your age =' . $age . 'Your are Not accepted , because condition (age =30) is Not negative by [!]' ;                
    }    
                                                                                                                                                                                               
// ===========================================================================

// Sixth Error control operators :
    $file = @fopen('sh.txt', 'r') or die('This is customized Error message of open file');

    $h6 = 'Error control operators message as following  :';
    $p6 = $file;

// ===========================================================================                                

// Seventh [ String operators  ] :
    $var1 = 'html' ;
    $var2 = 'css' ;
    $var3 = 'javascript' ;

    // 1) Normal Concatenration :
    $all = $var1 . ' ' . $var2 . ' ' . $var3 ; 
    
    // 2) Overwriting Cocatenation :
    $all1 = '';
    $all1 .= $var1;
    $all1 .= $var2;    
    $all1 .= $var3;    
            
    $h71 = 'First Concatenation {.} [Single Concateantion] as following : ';
    $h72 = 'Second Concatenation {.=} [Overwirting Concatenation] as following : ';
    
    $p71 = $all;
    $p72 = $all1;

?>
<!-- --------------------------------------------------------------------- -->



    <!DOCTYPE html>
    <html>
        <head>
            <title> <?php echo $title; ?>  </title>
            <link rel="stylesheet" href= <?php echo $css; ?> media="all">            
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
         <!-- ----------------------------------------------- -->        
         <!-- First Artihmetic operastors  -->
         <section>  
            <head> First Artihmetic operastors : </head>
             
            <h1>  <?php echo $h11; ?>  </h1>            
            <p>   <?php echo $p11; ?>  </p> <br>
            
            <h1>  <?php echo $h12; ?>  </h1>            
            <p>   <?php echo $p12; ?>  </p> <br>
            
            <h1>  <?php echo $h13; ?>  </h1>            
            <p>   <?php echo $p13; ?>  </p> <br>
            
            <h1>  <?php echo $h14; ?>  </h1>            
            <p>   <?php echo $p14; ?>  </p> <br>
            
            <h1>  <?php echo $h15; ?>  </h1>            
            <p>   <?php echo $p15; ?>  </p> <br>
        </section>             
        <br> <br> <hr>                                
<!-- -------------------------------------------------------------- -->
         <!-- Second Assignment operators  -->
         <section>  
            <head> Second Assignment operators : </head>
             
            <h1>  <?php echo $h21; ?>  </h1>            
            <p>   <?php echo $p21; ?>  </p> <br>
            
            <h1>  <?php echo $h22; ?>  </h1>            
            <p>   <?php echo $p22; ?>  </p> <br>
            
            <h1>  <?php echo $h23; ?>  </h1>            
            <p>   <?php echo $p23; ?>  </p> <br>
            
            <h1>  <?php echo $h24; ?>  </h1>            
            <p>   <?php echo $p24; ?>  </p> <br>
            
            <h1>  <?php echo $h25; ?>  </h1>            
            <p>   <?php echo $p25; ?>  </p> <br>
        </section>             
        <br><br> <hr>                                
    <!------------------------------------------------------------------------------  -->        
        
    <!-- Third Comparison operators  -->
         <section>  
            <head> Third Comparison operators : </head>
             
            <h1>  <?php echo $h31; ?>  </h1>            
            <p>   <?php echo $p31; ?>  </p> <br>
            
            <h1>  <?php echo $h32; ?>  </h1>            
            <p>   <?php echo $p32; ?>  </p> <br>
            
            <h1>  <?php echo $h33; ?>  </h1>            
            <p>   <?php echo $p33; ?>  </p> <br>
            
            <h1>  <?php echo $h34; ?>  </h1>            
            <p>   <?php echo $p34; ?>  </p> <br>
            
            <h1>  <?php echo $h35; ?>  </h1>            
            <p>   <?php echo $p35; ?>  </p> <br>
            
            <h1>  <?php echo $h36; ?>  </h1>            
            <p>   <?php echo $p36; ?>  </p> <br>
            
            <h1>  <?php echo $h37; ?>  </h1>            
            <p>   <?php echo $p37; ?>  </p> <br>
            
            <h1>  <?php echo $h38; ?>  </h1>            
            <p>   <?php echo $p38; ?>  </p> <br>
            
            <h1>  <?php echo $h39; ?>  </h1>            
            <p>   <?php echo $p39; ?>  </p> <br>
        </section>             
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
    
    <!-- Fourth Incremnent & Decrement operators  -->
         <section>  
            <head> Fourth Incremnent & Decrement operators : </head>
             
            <h1>  <?php echo $h41; ?>  </h1>            
            <p>   <?php echo $p41; ?>  </p> <br>
            
            <h1>  <?php echo $h42; ?>  </h1>            
            <p>   <?php echo $p42; ?>  </p> <br>
            
            <h1>  <?php echo $h43; ?>  </h1>            
            <p>   <?php echo $p43; ?>  </p> <br>
            
            <h1>  <?php echo $h44; ?>  </h1>            
            <p>   <?php echo $p44; ?>  </p> <br>
            
            <h1>  <?php echo $h45; ?>  </h1>            
            <p>   <?php echo $p25; ?>  </p> <br>
            
            <h1>  <?php echo $h46; ?>  </h1>            
            <p>   <?php echo $p46; ?>  </p> <br>
            
            <h1>  <?php echo $h47; ?>  </h1>            
            <p>   <?php echo $p47; ?>  </p> <br>
            
            <h1>  <?php echo $h48; ?>  </h1>            
            <p>   <?php echo $p48; ?>  </p> <br>
            
            <h1>  <?php echo $h49; ?>  </h1>            
            <p>   <?php echo $p49; ?>  </p> <br>
        </section>             
        <br><br> <hr>                                
    <!-- ======================================================================== -->

    <!-- Fifth Logical operators  -->
         <section>  
            <head> Fifth Logical operators : </head>
             
            <h1>  <?php echo $h51; ?>  </h1>            
            <p>   <?php echo $p51; ?>  </p> <br>
            
            <h1>  <?php echo $h52; ?>  </h1>            
            <p>   <?php echo $p52; ?>  </p> <br>
            
            <h1>  <?php echo $h53; ?>  </h1>            
            <p>   <?php echo $p53; ?>  </p> <br>
            
            <h1>  <?php echo $h54; ?>  </h1>            
            <p>   <?php echo $p54; ?>  </p> <br>
            
            <h1>  <?php echo $h55; ?>  </h1>            
            <p>   <?php echo $p55; ?>  </p> <br>
            
            <h1>  <?php echo $h56; ?>  </h1>            
            <p>   <?php echo $p56; ?>  </p> <br>
            
        </section>             
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
    
    <!-- Sixth Error control operators : -->
         <section>  
            <head> Sixth Error control operators : </head>
             
            <h1>  <?php echo $h6; ?>  </h1>            
            <p>   <?php echo $p6; ?>  </p> <br>
                                    
        </section>             
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 
    
    <!--  Seventh [ String operators ]: -->
         <section>  
            <head> Seventh [ String operators ] : </head>
             
            <h1>  <?php echo $h71; ?>  </h1>            
            <p>   <?php echo $p71; ?>  </p> <br>

            <h1>  <?php echo $h72; ?>  </h1>            
            <p>   <?php echo $p72; ?>  </p> <br>
                                    
        </section>             
        <br><br> <hr>                                
    <!-- ----------------------------------------------- -->                 

        </body>
    </html>             