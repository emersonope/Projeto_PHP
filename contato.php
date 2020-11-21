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
        <div class="col-md-6 text-justify">
        <h1>standard Lorem Ipsum passage, used since the 1500s</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
        <img src="./_img/banner.jpg" class=" img-fluid" />
        </div>
        
    
        <div class="col-md-6 text-justify">
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
            <h3 class="card-title">Rio de Janeiro</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Avenida Brasil, 5.555</li>
            <li class="list-group-item">25 º andar</li>
            <li class="list-group-item">Centro</li>
            <li class="list-group-item">(21) 2222-2222</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="rol">
      <div class="card m-3" style="width: 18rem;" >
            <img class="card-img-top" src="./_img/banner.jpg" alt="Imagem de capa do card">
        <div class="card-body">
            <h4 class="card-title">São Paulo</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Avenida Aricanduva, 5.555</li>
            <li class="list-group-item">Loja 54</li>
            <li class="list-group-item">Jardim Aricanduva</li>
            <li class="list-group-item">(21) 2222-2222</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="rol">
      <div class="card m-3" style="width: 18rem;" >
            <img class="card-img-top" src="./_img/banner.jpg" alt="Imagem de capa do card">
        <div class="card-body">
            <h4 class="card-title">Rio Grande Do Norte</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Avenida Alguma Coisa, Natal</li>
            <li class="list-group-item">10 &ordm; andar</li>
            <li class="list-group-item">Centro</li>
            <li class="list-group-item">(21) 2222-2222</li>
          </ul>
        </div>
      </div>
    </div>
  </div>  
</section>
<section class="container p-5 mb-5">
<form method="post" action="" >
<label for="basic-url">Envie-nos sua mensagem: </label>
  
  <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Nome</span>
      </div>
        <input type="text" name="nome" class="form-control" placeholder="Nome">
  </div>
  <div class="input-group mb-5">
      <div class="input-group-prepend">
        <span class="input-group-text">Mensagem</span>
      </div>
      <textarea class="form-control"  name="msg" type="text" id="mensagem" rows="3" aria-label="Com textarea"></textarea>
  </div>
  
  
  <input type="submit" name="submit" value="Enviar" class="btn btn-danger">

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