<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    echo '{"userData":"'.$_FILES["image"]["name"].'"}';
    move_uploaded_file($_FILES["image"]["tmp_name"], "images/" . $_FILES["image"]["name"]);
    //echo $_FILES["image"]["name"];
