const { Schema, model } = require('mongoose')

const MensagemSchema = new Schema({
    nome:{
        type:String
        
    },
    email:{
        type:String
        
    },
    mensagem:{
        type:String
        
    } 
})

modelo = model("mensagens", MensagemSchema)

module.exports = modelo