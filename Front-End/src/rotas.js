import { Switch, Route } from 'react-router-dom';

import Produtos from './pages/produtos';
import Pedidos from './pages/pedidos';
import Sobrenos from './pages/sobrenos';
import Mensagens from './pages/mensagens';

function Rotas(){
    return (
        <Switch>
            <Route exact path="/Produtos" component={ Produtos } />
            <Route exact path="/Pedidos" component={ Pedidos } />
            <Route exact path="/Sobrenos" component={ Sobrenos } />
            <Route exact path="/Mensagens" component={ Mensagens } />
        </Switch>
    )
}
export default Rotas;