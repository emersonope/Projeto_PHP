<?php include_once("conexaoBD.php"); ?>
<?php

if(isset($_POST['nome']) && isset($_POST['msg'])){
    $nome = $_POST['nome'];
    $msg = $_POST['msg'];

    $sql = "insert into comentarios (nome, msg) values ('$nome','$msg')";
    $result = $conn->query($sql);
}

?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link rel="stylesheet" type="text/css" href="./_css/slyle.css">
    <link rel="stylesheet" type="text/css" href="./_css/slider.css">
    <link rel="stylesheet" type="text/css" href="./_css/pagamentos.css">
    <link rel="stylesheet" type="text/css" href="./_css/contato.css">
    <meta charset="UTF-8">
    <title>BoomSell</title>

</head>

<body>

<?php include_once("header.html"); ?>

<section id="texto-paginas">
        <h1>standard Lorem Ipsum passage, used since the 1500s</h1>
      
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> </div>
        
        <h1> 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h1>
       
       <p >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>



</section>
<section class="contatos">
    <ul>
        <li>
    <h3>Rio de Janeiro</h3>
    <p><strong> Avenida Brasil, 5.555</strong></p>
    <p><em>25 &ordm; andar</em></p>
    <p> Centro</p>
    <p>(21) 2222-2222</p>


    <li>
    <h3>São Paulo</h3>
    <p><strong> Avenida Aricanduva, 5.555</strong></p>
    <p><em> Loja 54</em></p>
    <p> Jardim Aricanduva</p>
    <p>(21) 2222-2222</p>
</li>
    <li>
    <h3>Rio Grande Do Norte</h3>
    <p><strong> Avenida Alguma Coisa, Natal</strong></p>
    <p><em>10 &ordm; andar</em></p>
    <p> Centro</p>
    <p>(21) 2222-2222</p>
</li>
    <li>
    <h3>Curitiba</h3>
    <p><strong> Avenida Só Deus Sabe, 5.555</strong></p>
    <p ><em>2 &ordm; andar</em></p>
    <p> Centro</p>
    <p >(21) 2222-2222</p>
</li>

</ul>
</section>



<section id="texto-paginas">
<form method="post" action="">

    <h1>Envie-nos Uma Mensagem:</h1>

    Nome:<br><br>
    <input type="text" name="nome"  stle="width:500px"><br><br>

    Mensagem:<br>
    <textarea type="text" name="msg"  rows="8" cols="80"></textarea><br><br>

    <input type="submit" name="submit" value="Enviar">

</form>
<?php
            $sql = "select * from comentarios";
            $result = $conn->query($sql);

            if($result->num_rows > 0){
                while($rows = $result->fetch_assoc()){  
                    echo "Data: ", $rows['data'], "<br>";
                    echo "Nome: ", $rows['nome'], "<br>";
                    echo "Mensagem: ", $rows['msg'], "<br>";      
                    echo "<hr>";
                }
            } else {
                    echo "Nenhum Comentario Eviado!";
            }
    ?>




</div>


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