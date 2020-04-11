<?php 
    // Config
    include("config/config.php");

    // Db Manager
    include("dbmanager/dbmanager.php");
    
    // Set header as JSON Content
    header('Content-type: application/json');
    // header('Access-Control-Allow-Origin: *');
    
    $select = "*";
    $table = "todo_items";
    $where = "name != ''";
    $todoItems = $db->getAll($select, $table, $where);
    if(count($todoItems)) {
        $data = array(
            "length" => count($todoItems),
            "data" => $todoItems
        );
    } else {
        $data = array(
            "length" => 0,
            "data" => array()
        );
    }
    echo json_encode($data);    
?>