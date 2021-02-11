import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";



function Mensagens(){
    const { register, handleSubmit } = useForm();
  
    const handleOnSubmit = (data) => {
      axios.post("http://localhost:8000/mensagens", data).then((response) => {
        alert("Enviado com Sucesso");  
        window.location.reload()
      });
    };

    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/mensagens").then((response) => {
        setMensagens(response.data.mensagens);
        console.log(setMensagens)
        });
    }, []);

    return (

        <div class="container-fluid">
        <h2>Contato</h2>
        <hr />
        <div class="container">
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" name="nome" placeholder="Digite seu nome ..." class="form-control" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Digite seu email ..." class="form-control" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control as="textarea" name="mensagem" placeholder="Digite sua mensagem ..." class="form-control" ref={register} />
                </Form.Group>   
                <br />
                <Button type="submit" variant="dark">Enviar</Button>
            </Form>
            <br /><br />
                <div class="container-fluid">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Menssagem</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mensagens && mensagens.map((item) => (
                        <tr key={item._id}>
                            <td>{item.nome}</td>
                            <td>{item.mensagem}</td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Mensagens;