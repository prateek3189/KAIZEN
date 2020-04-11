<?php 
    include("config/config.php");
?>
<h1>Services</h1>
<table border="1" cellspedding="0" cellspacing="0" width="100%">
    <thead>
        <tr>
            <td width="20%">Service Name</td>
            <td width="10%">Type</td>
            <td width="70%">URL</td>
        </tr>
    </thead>
    <tbody>
    <tr>
            <td width="20%">TestJSON</td>
            <td width="10%">TEST</td>
            <td width="70%">
                <a target="blank" href="<?php echo ROOT_HTTP;?>TestJSON.php"><?php echo ROOT_HTTP;?>TestJSON.php</a>
            </td>
        </tr>
        <tr>
            <td width="20%">GetToDoItems</td>
            <td width="10%">GET</td>
            <td width="70%">
                <a target="blank" href="<?php echo ROOT_HTTP;?>GetToDoItems.php"><?php echo ROOT_HTTP;?>GetToDoItems.php</a>
            </td>
        </tr>
    </tbody>
</table>