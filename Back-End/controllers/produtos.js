const knex = require('../database/connection');

class ProdutoController {
  //metodos
  async index(req, res) {
    res.send("API EXPRESS - Rotas de Produtos");
  }

  async getAll(req, res) {
    try {
     const produtos = await knex("produtos")
      
        //.join("categorias", "posts.categoria_id", "categorias.id")
        //.select("nome", "endereco", "telefone","produto","valorunitario","quantidade","valortotal");
      

      res.status(200).json({ status: "OK", produtos });
    } catch (e) {
      console.log(e);

      res.status(400).json({ status: "ERROR ddddd" });
    }
  }
 
}

module.exports = new ProdutoController();