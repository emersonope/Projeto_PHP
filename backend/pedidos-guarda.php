<?php

require "./Models/Pedidos.php";

$pedido = new Pedido;
$pedido->nome = $_POST['nome'];
$pedido->endereco = $_POST['endereco'];
$pedido->telefone = $_POST['telefone'];
$pedido->produto = $_POST['produto'];
$pedido->valorunitario = $_POST['valorunitario'];
$pedido->quantidade = $_POST['quantidade'];
$pedido->valortotal = $_POST['valortotal'];


$validate = $pedido->cadastroPedidos();

if ($validate == true) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}
