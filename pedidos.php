<?php include_once("conexaoBD.php"); ?>
<?php include_once("header.php"); ?>
<?php 
    if(isset($_POST['nome']) && isset($_POST['endereco']) && isset($_POST['telefone']) && isset($_POST['nomeproduto']) && isset($_POST['quantidade'])){

        echo "Dados Recebidos";

        $nomecliente = $_POST['nome'];
        $endereco = $_POST['endereco'];
        $telefone = $_POST['telefone'];
        $nomeproduto = $_POST['nomeproduto'];
        $valorunitario = $_POST['valorunitario'];
        $quantidade = $_POST['quantidade'];
        $valorfinal = $_POST['valorfinal'];
       
        $sql = "insert into pedidos (nome, endereco, telefone, nomeproduto, valorunitario, quantidade, valorfinal) values ('$nomecliente', '$endereco', '$telefone', '$nomeproduto', '$valorunitario', '$quantidade', '$valorfinal')";
        $result = $conn->query($sql);

        if($result){
            echo "Dados Inseridos Com Sucesso!";
        }else{
            echo "Dados Não Inseridos";
        }


    }
?>  
<section class="container mb-5">
<form method="POST" name="pedidos" action="">
    <div class="form-group">
        <label for="nome">Nome: </label><br>
        <input type="text" class="form-control"  id="nome" name = "nome"  maxlength = "30" required /><br>
    </div>
        <div class="form-group">
        <label for="endereco">Endereço:</label><br>
        <input type="text" class="form-control"  id="endereco" name="endereco"  maxlength = "30" required /><br>
    </div>
        <div class="form-group">
        <label for="telefone">Telefone (Ex: (11) 00000-0000):</label><br>
        <input placeholder="Ex: (00) 00000-0000" type="tel" class="form-control"  id="telefone" name="telefone" maxlength = "15" required /><br>
    </div>
        <div class="form-group">
        <label for="nomeproduto">Produto:</label><br>
        <input type="text" class="form-control"  id="nomeproduto" name="nomeproduto"  maxlength = "80" required /><br>
    </div>
        <div class="form-group">
        <label for="valorunitario">Valor Unitário:</label><br>
        <input type="text" class="form-control"  id="valorunitario" name="valorunitario"  maxlength = "30" required /><br>
    </div>
        <div class="form-group">
        <label for="quantidade">Quantidade:</label><br>
        <input type="number" class="form-control"  id="quantidade" name="quantidade"  maxlength = "30" required /><br>
    </div>
        <div class="form-group">
        <label for="valorfinal">Valor Total:</label><br>
        <input type="text" class="form-control"  id="valorfinal" name="valorfinal"  maxlength = "30" required /><br>
    </div>
        <input type="submit" class="btn btn-primary" class="submit" value="Enviar" />

</form>  
</section>

<?php include_once("footer.php"); ?>