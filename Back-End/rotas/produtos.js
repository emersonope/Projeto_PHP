let express = require("express");
let app = express();
let routerProdutos = express.Router();
let ProdutoController = require("../controllers/produtos");


routerProdutos.get("/", ProdutoController.getAll);


module.exports = routerProdutos;