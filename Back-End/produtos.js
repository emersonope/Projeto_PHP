const express = require('express');
const app = express();

const connection = require('./database/connection')
app.use(express.json());


app.get('/postagem', (req, res) => {
    connection.query("SELECT*FROM produtos", (error, result) => {
        res.json(result);
    });
});

app.listen(5000, () => {
    console.log("Servidor ativo!");
});