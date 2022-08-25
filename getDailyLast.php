<?php
    //Conectando ao banco de dados
    $con = new mysqli("localhost", "testlink", "testlink", "testlink");
    if (mysqli_connect_errno()) trigger_error(mysqli_connect_error());
    
    //Consultando banco de dados
    $qryLista = mysqli_query($con, "SELECT id, status, notes, execution_ts FROM executions WHERE DATE(execution_ts) = DATE(CURDATE()-1) AND build_id = 1 ORDER BY execution_ts ASC;");    
    while($resultado = mysqli_fetch_assoc($qryLista)){
        $vetor[] = array_map('utf8_encode', $resultado); 
    }    
    
    //Passando vetor em forma de json
    echo json_encode($vetor);
    
?>