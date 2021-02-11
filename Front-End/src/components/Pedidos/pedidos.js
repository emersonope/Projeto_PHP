import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Pedidos() {
    const [ form, setForm ] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        produto: "",
        valorunitario: "",
        quantidade: "",
        valortotal: "",
    } )

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        console.log(form)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
        console.log(form);
    }

    async function cadastroPedidos(evento) {
        evento.preventDefault();

        const valortotal = parseFloat(form.valorunitario)*parseFloat(form.quantidade);
        //console.log(valorfinal);
        document.getElementById("valortotal").value = `R$ ${valortotal}`;

        let formData = new FormData(evento.target);
        const url = 'http://localhost:3005/postando';

        await fetch(url, {

            body: JSON.stringify(Object.fromEntries(formData)), 

            method: 'POST', 

            headers: new Headers({'content-type': 'application/json'})

        });
    }

    return (
        <section class="container p-5 mb-5">
<Form onSubmit={cadastroPedidos}>
    <Form.Group>
        <Form.Label for="nome">Nome: </Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="nome" name="nome"  maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="endereco">Endereço:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="endereco" name="endereco"  maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="telefone">Telefone (Ex: (11) 00000-0000):</Form.Label><br/>
        <Form.Control onChange={controleMudanca} placeholder="Ex: (00) 00000-0000" type="tel" class="form-control"  id="telefone" name="telefone"  maxlength = "15" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="produto">Produto:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="produto" name="produto"   maxlength = "80" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="valorunitario">Valor Unitário:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="valorunitario" name="valorunitario"  maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="quantidade">Quantidade:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="number" class="form-control"  id="quantidade" name="quantidade"  maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="valortotal">Valor Total:</Form.Label><br/>
        <Form.Control  type="text" class="form-control"  id="valortotal" name="valortotal" maxlength = "30"  /><br/>
    </Form.Group>
        <Button type="submit" variant="dark" >Enviar</Button>
        

</Form>  
</section>
    )
}

export default Pedidos;