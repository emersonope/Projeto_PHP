<?php

require "Connection.php";

class Pedido
{
    public $nome;
    public $endereco;
    public $telefone;
    public $produto;
    public $valorunitario;
    public $quantidade;
    public $valortotal;


    public function cadastroPedidos()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("INSERT INTO pedidos (nome, endereco, telefone, produto, valorunitario, quantidade, valortotal ) values ('$this->nome', '$this->endereco','$this->telefone','$this->produto','$this->valorunitario','$this->quantidade','$this->valortotal')");
        
        if ($stmt->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }
}
