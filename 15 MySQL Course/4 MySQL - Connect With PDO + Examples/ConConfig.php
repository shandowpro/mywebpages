<!-- This is the DB Connection configuration file  
    LESSON : 4 MySQL - Connect With PDO + Example
-->

<?php
$lesson = '4 MySQL - Connect With PDO + Examples';
echo 'Weclome to ' . $lesson . '<br>';

// A] Defining connection configuration Variables :

// 1) Data Source Name Variable => [obl:host & dbname:Database Name] :
$dsn = 'mysql:host=localhost;dbname=products';

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
    $q = "INSERT INTO items (names) VALUES('منتح4')";
    // $q = "INSERT INTO products.items(names) VALUES('product3')"; 

    // 4) Executing the Query variable :
    $db->exec($q);

    // 5) Printing an informal Mesage of Succesful connection  :
    echo 'Successful connection';
} catch (PDOException $e) {
    // Catching the Error Type and print it's message syntax :            
    echo 'Failed to connect ' . $e->getMessage();
}

?>