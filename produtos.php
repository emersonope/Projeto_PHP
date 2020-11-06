<?php include_once("conexaoBD.php"); ?>
<?php include_once("header.php"); ?>
<div class="container-fluid">
    <div class="cow">
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
</div>

<?php include_once("footer.php"); ?>