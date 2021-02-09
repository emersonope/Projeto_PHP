import {useState, useEffect} from 'react';
import axios from "axios";
import 'react-bootstrap';
import "./produtos.css";
//import Produto from "../components/Menu/produtos/produto"
import { Container, Row } from 'react-bootstrap';

import {lazy, Suspense} from 'react';
const Produto = lazy(() => import("../components/Menu/produtos/produto"));

function Produtos() {
    const [ produtos, setProdutos] = useState([]);

    /*useEffect(async () => {
        const resposta = await fetch("http://localhost:3005/produto")
        const dados = await resposta.json()
        setProdutos(dados)
    }, []);*/
    useEffect(() => {
        axios.get("http://localhost:3005/produto").then((response) => {
        setProdutos(response.data.produtos);
        });
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
                    <Suspense fallback={<div>Carregando ...</div>}>
                        {produtos && produtos.map(item => <Produto nomeimagem={item.nomeimagem} preco={item.preco} precofinal={item.precofinal} descricao={item.descricao} />)}
                    </Suspense>
                </Container>
        </div>               
    )   
}

export default Produtos;