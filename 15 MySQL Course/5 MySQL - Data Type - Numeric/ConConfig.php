<!-- This is the DB Connection configuration file
    Lesson : 5 MySQL - Data Type - Numeric  
-->

<?php
$lesson = '5 MySQL - Data Type - Numeric';
echo 'Weclome to ' . $lesson . '<br>';

// A] Defining connection configuration Variables :

// 1) Data Source Name Variable => [obl:host & dbname:Database Name] :
$dsn = 'mysql:host=localhost;dbname=test';

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
    // $q = "INSERT INTO items (names) VALUES('منتح4')"; 
    // $q = "INSERT INTO products.items(names) VALUES('product3')"; 

    $q = "SELECT * FROM test.tbl ";

    // 4) Executing the Query variable :
    $db->exec($q);

    // 5) Printing an informal Mesage of Succesful connection  :
    echo 'Successful connection';
} catch (PDOException $e) {
    // Catching the Error Type and print it's message syntax :            
    echo 'Failed to connect ' . $e->getMessage();
}

// ----------------------------------------------------------------------------------
// C] Inserting new items into the Database [test] -> within table [tbl] -> inside field [idTinyInt] by using for loop :

try {

    // $stmt0 = $db->prepare("SELECT * FROM tbl");
    // $stmt0-> execute();

    for ($i = 0; $i <= 100; $i++) {

        $stmt1 = $db->prepare("INSERT INTO tbl (idTinInt) VALUES ('$i') ");
        $stmt2 = $db->prepare("INSERT INTO tbl (idSmlInt) VALUES ('$i') ");
        $stmt3 = $db->prepare("INSERT INTO tbl (idMedInt) VALUES ('$i') ");
        $stmt4 = $db->prepare("INSERT INTO tbl (idInt) VALUES ('$i') ");
        $stmt5 = $db->prepare("INSERT INTO tbl (idBigInt) VALUES ('$i') ");
        $stmt6 = $db->prepare("INSERT INTO tbl (idDec) VALUES ('$i') ");
        $stmt7 = $db->prepare("INSERT INTO tbl (idFlot) VALUES ('$i') ");
        $stmt8 = $db->prepare("INSERT INTO tbl (idDbl) VALUES ('$i') ");
        $stmt9 = $db->prepare("INSERT INTO tbl (idBol) VALUES ('$i') ");
        $stmt10 = $db->prepare("INSERT INTO tbl (idReal) VALUES ('$i') ");
        $stmt11 = $db->prepare("INSERT INTO tbl (idSer) VALUES ('$i') ");

        $stmt1->execute();
        $stmt2->execute();
        $stmt3->execute();
        $stmt4->execute();
        $stmt5->execute();
        $stmt6->execute();
        $stmt7->execute();
        $stmt8->execute();
        $stmt9->execute();
        $stmt10->execute();
        $stmt11->execute();
    }
} catch (PDOException $e) {

    echo 'Faild continue process ' . $e->getMessage();
}




?>