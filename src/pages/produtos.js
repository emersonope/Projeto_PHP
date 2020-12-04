import {useState, useEffect} from 'react';

import 'react-bootstrap';
import "./produtos.css";
import Produto from "../components/Menu/produtos/produto"
import { Container, Row } from 'react-bootstrap';

function Produtos() {
    const [ produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://react/api/produtos.php?table=produtos")
        const dados = await resposta.json()
        setProdutos(dados)
    }, []);

    return (
        <div class="container-fluid">
            <div class="row">
                   
                    <div class="col">
                        <h3>Categorias</h3>
                        <div class="row">
                            <ol id="listaLinha">
                                <li class="lisP" onclick="exibir_todos()" ><a>Todos (52)</a></li>
                                <li class="lisP" onclick="exibir_categoria('play')" ><a>Playstation (6)</a></li>
                                <li class="lisP" onclick="exibir_categoria('nintendo')" ><a >Nintendo (1)</a></li>
                                <li class="lisP" onclick="exibir_categoria('xbox')" ><a >Xbox (9)</a></li>
                                <li class="lisP" onclick="exibir_categoria('manga')" ><a >Mangá (30)</a></li>
                            </ol>
                        </div>
                    </div>

            </div> 
                <Container fluid >
                    <Row >
                        {produtos && produtos.map(item => <Produto nomeimagem={item.nomeimagem} preco={item.preco} precofinal={item.precofinal} descricao={item.descricao} />)}
                    </Row>
                </Container>
        </div>               
    )   
}

export default Produtos;