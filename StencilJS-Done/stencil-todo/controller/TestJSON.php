<?php 
    $data[] = (object) array('id' => 1, 'name' => 'Test 1', 'completed' => true);
    $data[] = (object) array('id' => 2, 'name' => 'Test 2', 'completed' => false);
    $data[] = (object) array('id' => 3, 'name' => 'Test 3', 'completed' => false);

    $format = 'xml';
    if($format === 'json') {
        header('Content-type: application/json');
    	echo json_encode($data);
    } else {
        header('Content-type: text/xml');
        echo '<items>
            <item>
                <id>1</id>
                <name>Text 1</name>
                <completed>true</completed>
            </item>
        </items>';
    }
    
?>