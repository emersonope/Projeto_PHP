import {lazy, Suspense} from 'react';

const Pedidos = lazy(() => import('../../components/Pedidos/pedidos'));

function Pedido(){
    return (
        <Suspense fallback={<p>Carregando ...</p>}>
            <Pedidos />
        </Suspense>
    )
}

export default Pedido;