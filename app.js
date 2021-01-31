const express = require('express');
const app = express();
const connection = require("./database/connection");

const bodyParser = require('body-parser');
const buscardados = require('./function/buscardados');

// declarando que vou usar o ejs
app.set('view engine', 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Mostrando para o express onde ta minha pasta views
app.set('views', './views')


// renderizando minha pagina principal
app.get('/', (req, res) => {
  // chamando o arquivo da minha view
    res.render('index')
})


app.get('/resultado', async(req, res) =>{
  var cadastros = buscardados();

  cadastros.buscar(connection, function(err, resultados){
       res.render('resultado', {buscar: resultados});
   });
});


// pegando os dados da minha view
app.post('/cadastro', function(req, res){
  let dados = req.body
  let valores = [
      dados.nome,
      dados.sobrenome,
      dados.email
  ]
   let sql = "INSERT INTO dados (nome, sobrenome, email) VALUES (?, ?, ?)"
   connection.query(sql, valores, (err, result) =>{
       if(err){
           console.log('Erro ' + err)
       }else{
           res.redirect('/resultado');
       }
   })
});

app.listen(3333)