const cors = require("cors");
const app = require('./src/config/server')
const connect = require('./src/config/connection')
const Mensagens = require('./src/models/Mensagens')

app.use(cors());


app.get("/mensagens", async (req,res) => {
    const mensagemResponse = await Mensagens.find()
    const mensagemJson = await mensagemResponse

    res.json(mensagemJson)
})

//Insert
app.post("/mensagens", async (req, res) => {
    const { nome, email, mensagem } = req.body

    let resultado = await Mensagens.create({ nome, email, mensagem })

    res.json(resultado)
})

app.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome, email, mensagem } = req.body
    let resultado = await Mensagens.updateOne({_id: id}, {
        nome, email, mensagem
    })

    res.json(resultado)
})

//Delete

app.delete("/", async (req, res) => {
    const { id } = req.body

    let resultado = await Mensagens.findByIdAndDelete({_id: id})

    res.json({message: "Deletado com sucesso"})

})