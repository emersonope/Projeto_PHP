<?php include_once("header.php"); ?>
<!--Slider abaixo-->





<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="./_img/banner.jpg" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./_img/banner.jpg" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="./_img/banner.jpg" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  <!-- final slider-->
  
<section class="container container2 my-5" >
  <h2 >Confira Nossos Produtos Mais Vendidos</h2><br>
  <div class="row" >
    <div class="rol">
        <div class="card m-3" style="width: 18rem; " onmouseover="container()" onmouseout="zoom_fora()" id="cont_1" >
          <img class="card-img-top" src="./_img/tokyoghoul2.jpg" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            <a href="#" class="btn btn-danger ml-4">Confira nossos Produtos</a>
          </div>
        </div>
      </div>
    <div class="rol">
      <div class="card m-3" style="width: 18rem;" onmouseover="container1()" onmouseout="zoom_fora1()" id="cont_2">
          <img class="card-img-top" src="./_img/ps5.webp" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            <a href="#" class="btn btn-danger ml-4">Confira nossos Produtos</a>
          </div>
        </div>
      </div>
    <div class="rol">
      <div class="card m-3" style="width: 18rem;" onmouseover="container2()" onmouseout="zoom_fora2()" id="cont_3">
          <img class="card-img-top" src="./_img/HeadsetPulse3d.webp" alt="Imagem de capa do card">
          <div class="card-body">
            <h5 class="card-title">Título do card</h5>
            <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            <a href="#" class="btn btn-danger ml-4">Confira nossos Produtos</a>
          </div>
        </div>
      </div>
  </div>  
</section>
<?php include_once("footer.php"); ?>