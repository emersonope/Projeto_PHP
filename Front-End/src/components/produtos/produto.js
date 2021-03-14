import "./produto.css";

export default function Produto(props) {

    /*function show_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility ="initial";
    }
onMouseOver="shoe_info" onMouseOut="hide_info"
    function hide_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility ="hidden";
    }
*/

    return (
        <div class={props.categoria} >
           <div class="geral">
                <img src={require(`../images/${props.nomeimagem}`).default}></img>
                <figcaption>
                <h2>{props.imagem}</h2>
                <h3>{props.descricao}</h3>
                <p>{props.preco}</p>
                <h5>{props.precofinal}</h5>
                </figcaption>
           </div>
        </div>
    )
}