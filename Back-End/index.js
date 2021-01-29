  
var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./rotas/routes");
var routerProdutos = require("./rotas/produtos");
const knex = require('./database/connection');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cors
app.use(cors());

app.use("/", router);
app.use("/produto", routerProdutos);
app.post("/postando", (req, res) => {
  let dados = [];
  
  dados.push({
      nome: req.body.nome,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      produto: req.body.produto,
      valorunitario: req.body.valorunitario,
      quantidade: req.body.quantidade,
      valortotal: req.body.valortotal,
  })

  const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9358Ope$",
    database: "boomsell"
})


  connection.query("INSERT INTO pedidos SET?", dados, () => {
      dados = []
      res.json({mensagem: "Dados enviados com sucesso!"})
  })
})


app.listen(3005, () => {
  console.log("Servidor rodando");
});