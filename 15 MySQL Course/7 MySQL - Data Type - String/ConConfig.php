<!-- This is the DB Connection configuration file
    Lesson : 7 MySQL - Data Type - String 
-->

<?php
$lesson = '7 MySQL - Data Type - String ';
echo 'Weclome to ' . $lesson . '<br>';

// A] Defining connection configuration Variables :

// 1) Data Source Name Variable => [obl:host & dbname:Database Name] :
$dsn = 'mysql:host=localhost;dbname=newdb';

// 2) Username of login to database => [Default: root] :
$user = 'root';

// 3) Password of login to database => [Default: empty] :
$pass = '';

// 4) Options Associtated Array => [Adding Arabic language: utf8] => {This option will be initiated once the Database connection is run succefuly } :
$option = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);
// =======================================================

// B] Initiate connection testing by [Try & Catch ] :

try {
    // 1) DB Connection variable according to upper configuration vars :
    $db = new PDO($dsn, $user, $pass, $option);

    // 2) Adding DB Connection Attribute(s) :
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 3) Defining a SQL Query Variable to be executed => [Adding new Values(Arabic Value) in (items) Table within (names) field -> in the {products} Database] :
    // $q = "UPDATE newdb.tbl SET 'mydate' = '2020-20-20 23:59:10' WHERE id=1 "; 
    // $q = "INSERT INTO tbl(mydate) VALUES('2020-20-20 20:20:20')"; 

    // $q = "SELECT * FROM test.tbl ";

    // 4) Executing the Query variable :
    // $db-> exec($q);

    // 5) Printing an informal Mesage of Succesful connection  :
    echo 'Successful connection';
} catch (PDOException $e) {
    // Catching the Error Type and print it's message syntax :            
    echo 'Failed to connect ' . $e->getMessage();
}

// ----------------------------------------------------------------------------------
// C] Inserting new items into the Database [test] -> within table [tbl] -> inside field [mydate(datetime)] by using for variable  :

try {

    $stmt0 = $db->prepare("INSERT INTO tbl(items, mydate) VALUES('product10', '2020-10-20 20:20:20') ");

    // $stmt1 = $db->prepare("UPDATE tbl SET 'mydate' = '2020-10-11 23:59:10' WHERE id=1 ");

    $stmt0->execute();

    // $stmt1-> execute();

    // for($i=0 ; $i <= 100 ; $i++)  {

    //     $stmt1 = $db->prepare("INSERT INTO tbl (idTinInt) VALUES ('$i') ");
    //     $stmt2 = $db->prepare("INSERT INTO tbl (idSmlInt) VALUES ('$i') ");
    //     $stmt3 = $db->prepare("INSERT INTO tbl (idMedInt) VALUES ('$i') ");
    //     $stmt4 = $db->prepare("INSERT INTO tbl (idInt) VALUES ('$i') ");

    //     $stmt1-> execute(); 
    //     $stmt2-> execute(); 
    //     $stmt3-> execute(); 
    //     $stmt4-> execute(); 

    // }   
} catch (PDOException $e) {

    echo 'Failed to continue process ' . $e->getMessage();
}




?>