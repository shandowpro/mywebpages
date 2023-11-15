
<!--  Login Form Page [2 Forms] + Adding Form Page [2 Forms] --> 
<?php ?>
<!-- I) Login Form  -->
    <!-- This form login if directed to control.php page -->
    <form method="get" action="control.php">
        <caption> This form directed to [control.php] page </caption> <br>
        <label> User Name: </label> <input type="text" name="username"> <br>
        <label> User password: </label> <input type="password" name="password"> <br>
        <input type="submit" value="Submit">
    </form>

    <!-- This form login if directed to Main php lesson page [81 PHP 5 In Arabic - Predefined Variables - Get].php page -->
    <form method="get" action="81 PHP 5 In Arabic - Predefined Variables - Get.php">
        <caption> This form directed to [main lesson] php page </caption> <br>
        <label> User Name: </label> <input type="text" name="username"> <br>
        <label> User password: </label> <input type="password" name="password"> <br>
        <input type="submit" value="Submit">`
    </form>
<!-- ========================================================================================== -->

<!-- II) Adding new elements Form  -->
    <!-- This form Adding new Admin Form => directed to Main php lesson page [81 PHP 5 In Arabic - Predefined Variables - Get].php page -->
    <form method="get" action="81 PHP 5 In Arabic - Predefined Variables - Get.php">
        <caption> This form directed to [main lesson] php page </caption> <br>
        <label> New Admin Name: </label> <input type="text" name="admin1"> <br>        
        <input type="submit" value="Add">

    </form>

    <!-- This form Adding new Admin Form => directed to other page [control].php page -->
    <form method="get" action="control.php">
        <caption> This form directed to [control] php page </caption> <br>
        <label> New Admin Name: </label> <input type="text" name="admin2"> <br>
        <input type="submit" value="Add">
    </form>
<!-- ========================================================================================== -->

<!-- III) Processing values Form [Calculation]  -->
    <!-- This form Adding new Admin Form => directed to Main php lesson page [81 PHP 5 In Arabic - Predefined Variables - Get].php page -->
    <form method="get" action="81 PHP 5 In Arabic - Predefined Variables - Get.php">
        <caption> This form directed to [main lesson] php page </caption> <br>
        <label> Number1: </label> <input type="text" name="num11"> <br>        
        <label> Number2: </label> <input type="text" name="num21"> <br>        
        <input type="submit" value="Calculate">`
    </form>

    <!-- This form Adding new Admin Form => directed to other page [control].php page -->
    <form method="get" action="control.php">
        <caption> This form directed to [main lesson] php page </caption> <br>
        <label> Number1: </label> <input type="text" name="num12"> <br>        
        <label> Number2: </label> <input type="text" name="num22"> <br>        
        <input type="submit" value="Calculate">`
    </form>
<!-- ========================================================================================== -->
