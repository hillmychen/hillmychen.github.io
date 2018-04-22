<?php
    header('Content-Type:application/json');
    require('connect.php');
    $sql="select * from mainimg";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,1);
    // while () {
    //     $imgarr= array();
    //     array_push($imgarr,$row);
    // }
    echo json_encode($row); 
    mysqli_close($conn);
?>