<?php
    /*
    * This is Connection file
    * Created on: 01-Dec-2018
    * Modfied on: 01-Dec-2018
    * Created by: Prateek Magarde
    * Modfied bn: Prateek Magarde
    */

    $db_host	=	"localhost";
    $db_name	=	"todo";
    $db_user	=	"root";
    $db_pass	=	"";

    $conn = mysqli_connect($db_host, $db_user, $db_pass);

    if (!$conn) {
        die('Not connected : ' . mysql_error());
    }
    $db_selected = mysqli_select_db($conn, $db_name);

    if (!$db_selected) {
        die ('Can\'t use $DB : ' . mysql_error());
    }
?>
