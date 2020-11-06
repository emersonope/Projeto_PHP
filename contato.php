<?php include_once("conexaoBD.php"); ?>
<?php include_once("header.php"); ?>
<?php

if(isset($_POST['nome']) && isset($_POST['msg'])){
    $nome = $_POST['nome'];
    $msg = $_POST['msg'];

    $sql = "insert into comentarios (nome, msg) values ('$nome','$msg')";
    $result = $conn->query($sql);
}

?>
<!--Slider abaixo-->

<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./_img/banner.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./_img/banner.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block text-right">
            <h5>Somos empreendedores!</h5>
            <p>É vdd esse bilhete!</p>
        </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./_img/banner.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block text-right">
            <h5>Somos empreendedores!</h5>
            <p>É vdd esse bilhete!</p>
        </div>
    </div>
  </div>
</div>
  <!-- final slider-->
<div class="container">
    <div class="row">
        <div class="col-6 text-justify">
        <h1>standard Lorem Ipsum passage, used since the 1500s</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
        <img src="./_img/banner.jpg" class="mr-3 img-fluid" />
        </div>
        
    
        <div class="col-6 text-justify">
        <h1> 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h1>
       
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        </div>
    </div>
</div>

<section class="container container3 my-5" >
  <h2 >Confira Nossos Produtos Mais Vendidos</h2><br>
  <div class="row" >
    <div class="rol">
        <div class="card m-3" style="width: 18rem; "  >
          <img class="card-img-top" src="./_img/banner.jpg" alt="Imagem de capa do card">
          <div class="card-body">
                <p class="card-text">
                <h3>Rio de Janeiro</h3>
                <p><strong> Avenida Brasil, 5.555</strong></p>
                <p><em>25 &ordm; andar</em></p>
                <p> Centro</p>
                <p>(21) 2222-2222</p>
          </div>
        </div>
      </div>
    <div class="rol">
      <div class="card m-3" style="width: 18rem;" >
          <img class="card-img-top" src="./_img/banner.jpg" alt="Imagem de capa do card">
          <div class="card-body">
                <p class="card-text">
                <h3>São Paulo</h3>
                <p><strong> Avenida Aricanduva, 5.555</strong></p>
                <p><em> Loja 54</em></p>
                <p> Jardim Aricanduva</p>
                <p>(21) 2222-2222</p>
          </div>
        </div>
      </div>
    <div class="rol">
      <div class="card m-3" style="width: 18rem;" >
          <img class="card-img-top" src="./_img/banner.jpg" alt="Imagem de capa do card">
          <div class="card-body">
                <p class="card-text">
                <h3>Rio Grande Do Norte</h3>
                <p><strong> Avenida Alguma Coisa, Natal</strong></p>
                <p><em>10 &ordm; andar</em></p>
                <p> Centro</p>
                <p>(21) 2222-2222</p>
          </div>
        </div>
      </div>
  </div>  
</section>
<section class="container mb-5">
<form method="post" action="" >
  <div class="row">
    <div class="col-12 form-group">
      <label for="nome">Nome:</label>
      <input type="text" name="nome" class="form-control" placeholder="Nome">
    </div>
  <div class="form-group col-12" >
    <label for="mensagem">Mensagem</label>
    <textarea class="form-control" name="msg" type="text" id="emensagem" rows="3"></textarea>
  </div>
  <div class="col-12">
  <input type="submit" name="submit" value="Enviar" class="btn btn-danger">
</div>
</form>


<div class="container text-center">
    <div class="row">
        <div class="col">
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
    </div>
</div>





</div>


</section>
<?php include_once("footer.php"); ?>