<?php include_once("conexaoBD.php"); ?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link rel="stylesheet" type="text/css" href="./_css/slyle.css">
    <link rel="stylesheet" type="text/css" href="./_css/slider.css">
    <script src="./_js/index.js"></script>
    <meta charset="UTF-8">
    <title>BoomSell</title>

</head>

<body>
  
<?php include_once("header.html"); ?>

<!--Slider abaixo-->

<section class="section1">
<div class="container">
  
    <ul class="slider">
      <li id="slide1">
        <img src="./_img/banner.jpg"/>
      </li>
      <li id="slide2">
        <img src="./_img/logo_size.jpg"/>
      </li>
      <li id="slide3">
        <h1>Este texto é um exemplo com outros elementos</h1>
        <p>Este texto server para demonstrar que podemos incluir texto em um slider</p>
        
      </li>
    </ul>
    
    <ul class="menu-slider">
      <li>
        <a href="#slide1">1</a>
      </li>
      <li>
        <a href="#slide2">2</a>
      </li>
       <li>
        <a href="#slide3">3</a>
      </li>
    </ul>
    
  </div>
</section>
<section class="titulo_produtos">
<h2 >Confira Nossos Produtos Mais Vendidos</h2><br>
</section>
<section class="section2">
  

    <div class="container2" onmouseover="container()" onmouseout="zoom_fora()" id="cont_1">
      
        <ul class="slider2">
          <li> 
            <img  src="./_img/tokyoghoul2.jpg"/>
          </li>
          </ul>  
        
      </div class="slider2">
      <div class="container2" onmouseover="container1()" onmouseout="zoom_fora1()" id="cont_2">
      
        <ul class="slider2">
          <li>
            <img  src="./_img/ps5.webp">
          </li>
          </ul>  
        
      </div>
      <div class="container2" onmouseover="container2()" onmouseout="zoom_fora2()" id="cont_3">
      
        <ul class="slider2">
          <li>
            <img  src="./_img/HeadsetPulse3d.webp"/>
          </li>
          </ul>  
        
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