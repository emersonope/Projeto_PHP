<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto PHP</title>
</head>
<body>
<?php 
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $database   = "boomsell";

    //Criando a conexão com BD
    $conn = mysqli_connect($servername, $username, $password, $database);

    //Verificando a conexão com servidor
    if(!$conn){
        die("A conexão falhou".mysqli_connect_error());
    }else{
      // die("Conectado com sucesso do BD".mysqli_connect_error());
    }
    ?>
    
</body>
</html>