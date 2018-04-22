<?php
    header('Content-Type:application/json');
    $conn=mysqli_connect('127.0.0.1','root','','blog','3306');
    mysqli_query($conn,'set names UTF8');
    $searchVal=$_REQUEST['_searchVal'];
    
    $sql="select * from article where title like '%".$searchVal."%' or summary like '%".$searchVal."%' or fullpage like '%".$searchVal."%' ORDER BY publishDate DESC"; 
     $result=mysqli_query($conn,$sql); 
     $row=mysqli_fetch_all($result,1);
    echo json_encode($row); 
    mysqli_close($conn);
?>