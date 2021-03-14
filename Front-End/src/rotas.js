import { Switch, Route } from 'react-router-dom';

import * as Pages from './pages';


function Rotas(){
    return (
        <Switch>
            <Route exact path="/" component={ Pages.Home } />
            <Route exact path="/Produtos" component={ Pages.Produtos } />
            <Route exact path="/Pedidos" component={ Pages.Pedido } />
            <Route exact path="/Sobrenos" component={ Pages.Sobrenos } />
            <Route exact path="/Mensagens" component={ Pages.Mensagens } />
        </Switch>
    )
}
export default Rotas;