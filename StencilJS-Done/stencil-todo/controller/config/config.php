<?php
    // session start
    @session_start();

    // Show errors
    error_reporting( E_STRICT );

    // Set default timezone to india
    date_default_timezone_set("Asia/Calcutta");

    // Path settings
    define("PROTOCOL", mb_strtolower(explode("/", $_SERVER["SERVER_PROTOCOL"])[0]));
    define("HOSTNAME", $_SERVER["HTTP_HOST"]);
    define("DOCUMENT_ROOT", $_SERVER["DOCUMENT_ROOT"]);
    define("REQUEST_URI", "/KAIZEN/stencil-todo/controller/");

    // This is root http path
    define("ROOT_HTTP", PROTOCOL."://".HOSTNAME.REQUEST_URI);

    define("FORMAT", "json");
    
    function pr($arr) {
        echo "<pre>";
        print_r($arr);
    }
?>
