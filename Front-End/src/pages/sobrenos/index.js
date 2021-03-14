import rio from "../../components/images/rj.jpg"
import sao from "../../components/images/sp.png"
import norte from "../../components/images/rn.jpg"


function Sobrenos(){
    return(
        <section class="container">
            <h2 >Nossas lojas:</h2><br/>
            <div class="row" >
                <div class="rol">
                    <div class="card m-3"   >
                            <img class="card-img-top" src={rio} alt="Imagem de capa do card"></img>
                        <div class="card-body">
                            <h3 class="card-title">Rio de Janeiro</h3>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Avenida Brasil, 5.555</li>
                                <li class="list-group-item">25 º andar</li>
                                <li class="list-group-item">Centro</li>
                                <li class="list-group-item">(21) 2222-2222</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="rol">
                    <div class="card m-3"  >
                            <img class="card-img-top" src={sao} alt="Imagem de capa do card"></img>
                        <div class="card-body">
                            <h4 class="card-title">São Paulo</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Avenida Aricanduva, 5.555</li>
                                <li class="list-group-item">Loja 54</li>
                                <li class="list-group-item">Jardim Aricanduva</li>
                                <li class="list-group-item">(21) 2222-2222</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="rol">
                    <div class="card m-3"  >
                            <img class="card-img-top" src={norte} alt="Imagem de capa do card"></img>
                        <div class="card-body">
                            <h4 class="card-title">Rio Grande Do Norte</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Avenida Alguma Coisa, Natal</li>
                                <li class="list-group-item">10 &ordm; andar</li>
                                <li class="list-group-item">Centro</li>
                                <li class="list-group-item">(21) 2222-2222</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </section>

    
    )
}

export default Sobrenos;