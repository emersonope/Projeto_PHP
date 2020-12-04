import {useState} from 'react';
import { form, Button, Row, Form} from 'react-bootstrap';


function Pedidos() {
    const [ form, setForm ] = useState({
        nome: "",
        endereco: "",
        fone: "",
        nomeproduto: "",
        valorunitario: "",
        quantidade: "",
        valorfinal: "",
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

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        //consolelog("Enviando")
        const valorfinal = parseFloat(form.valorunitario)*parseFloat(form.quantidade);
        //console.log(valorfinal);
        document.getElementById("valorfinal").value = `R$ ${valorfinal}`;

        const json = JSON.stringify(form);

        const opcoes = {
            method: 'POST',
            headers: { 'Content-type' : 'application/json', "access-control-allow-headers":"*"},  
            body: json
        }

        const resposta = await fetch("http://react/api/cadastro.php", opcoes)
        const dados = await resposta.json()
        console.log(dados);       
    
    }

    return (
        <section class="container p-5 mb-5">
<Form onSubmit={controleEnvio}>
    <Form.Group>
        <Form.Label for="nome">Nome: </Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="nome"   maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="endereco">Endereço:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="endereco"   maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="telefone">Telefone (Ex: (11) 00000-0000):</Form.Label><br/>
        <Form.Control onChange={controleMudanca} placeholder="Ex: (00) 00000-0000" type="tel" class="form-control"  id="fone"  maxlength = "15" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="nomeproduto">Produto:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="nomeproduto"   maxlength = "80" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="valorunitario">Valor Unitário:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="text" class="form-control"  id="valorunitario"   maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="quantidade">Quantidade:</Form.Label><br/>
        <Form.Control onChange={controleMudanca} type="number" class="form-control"  id="quantidade"   maxlength = "30" required /><br/>
    </Form.Group>
    <Form.Group>
        <Form.Label for="valorfinal">Valor Total:</Form.Label><br/>
        <Form.Control desabled type="text" class="form-control"  id="valorfinal" maxlength = "30"  /><br/>
    </Form.Group>
        <Button type="submit" variant="danger" >Enviar</Button>
        

</Form>  
</section>
    )
}

export default Pedidos;