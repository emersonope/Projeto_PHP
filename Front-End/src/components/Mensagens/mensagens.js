import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";



function Mensagens(){
    const { register, handleSubmit } = useForm();
  
    const handleOnSubmit = (data) => {
      axios.post("http://localhost:3210/contatos", data).then((response) => {
        alert("Cadastrado com Sucesso");  
        window.location.reload()
      });
    };

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3210/contatos").then((response) => {
        setContatos(response.data.contatos);
        console.log(setContatos)
        });
    }, []);

    return (

        <div class="container-fluid">
        <h2>Contato</h2>
        <hr />
        <div class="container">
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div class="form-group">
                    <h4>Nome:</h4>
                    <input type="text" name="nome" placeholder="Digite seu nome ..." class="form-control" ref={register} />
                </div>
                <div class="form-group">
                    <h4>Email:</h4>
                    <input type="text" name="email" placeholder="Digite seu email ..." class="form-control" ref={register} />
                </div>
                <div class="form-group">
                    <h4>Mensagem:</h4>
                    <textarea name="menssagem" placeholder="Digite sua mensagem ..." class="form-control" ref={register}></textarea>
                </div>   
                <br />
                <input type="submit" value="Enviar" />
            </form>
           
            </div>
        </div>
    )
}

export default Mensagens;