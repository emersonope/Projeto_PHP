<?php include_once("conexaoBD.php"); ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link rel="stylesheet" type="text/css" href="./_css/slyle.css"/>
    <link rel="stylesheet" type="text/css" href="./_css/slider.css"/>  
    <link rel="stylesheet" type="text/css" href="./_css/produtos.css"/>
    <script src="./_js/produto.js"></script>
    <script src="./_js/index.js"></script>
    <meta charset="UTF-8">
    <title>BoomSell</title>

</head>

<body>

<?php include_once("header.html"); ?>
  
<section class="categoria">
                <h2>Categorias</h2>
                <ul>
                    <li onclick="exibir_todos()" ><a>Todos (52)</a></li>
                    <li onclick="exibir_categoria('play')" ><a>Playstation (6)</a></li>
                    <li onclick="exibir_categoria('nintendo')" ><a >Nintendo (1)</a></li>
                    <li onclick="exibir_categoria('xbox')" ><a >Xbox (9)</a></li>
                    <li onclick="exibir_categoria('manga')" ><a >Mangá (30)</a></li>
                </ul>
</section>
<section  class="produtos">

    <?php
            $sql = "select * from produtos";
            $result = $conn->query($sql);

            if($result->num_rows > 0){
                while($rows = $result->fetch_assoc()){
    ?>

        <div  class="geral" id="<?php echo $rows["categoria"]; ?>" onclick="destaque(this)">
            <div><img onmouseover="trocarImagem1()" onmouseout="imagemAnterior1()" src="<?php echo $rows["nomeimagem"]; ?>" src = "<?php echo $rows["nomeimagem2"]; ?>" id="id1" alt="Playstation"></div>
            <div><h3><?php echo $rows["descricao"]; ?></h3></div>
            <hr/>
            <div><p><?php echo $rows["preco"]; ?></p></div>
            <div><h5> <?php echo $rows["precofinal"]; ?></h5></div>
        
        </div>

    <?php         
                }
            } else {
                    echo "Nenhum produto cadastrado!";
            }
    ?>
            
</section>
    


<footer class="rodape" id="rodape">
    <ul>
<li>
    <a href="pagamento.html">Formas de Pagamento</a>
</li>
    <li>
    <a href="conta.html">Minha Conta</a>
</li>
    <li>
    <a href="contato.html">Fale Conosco</a>
</li><li>

    <a href="trocas.html">Trocas e Devoluções</a>
</li>
    <li>
    <a href="sobrenos.html">Sobre Nós</a>
</li>
</ul>


</footer>




</body>

</html>























<?php include_once("conexaoBD.php"); ?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto PHP</title>
</head>
<body>
<?php 
    
 $sql = "select nome, endereco, telefone, nomeproduto, valorunitario, quantidade, valorfinal";
 $sql ="select * from produtos";
 $result = $conn->query($sql);
 

  while($row = $result->fetch_assoc()){
    echo "<p> O produto selecionado é: ".$row["categoria"]. " conforme ".$row['nomeimagem']." no valor de: ".$row['preco']. " e um valor total de: ".$row['precofinal']."</p><hr>";
    }

?>     
</body>
</html>