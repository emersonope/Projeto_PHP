import {lazy, Suspense} from 'react';

const Mensagens = lazy(() => import('../../components/Mensagens/mensagens'));

function Mensagem(){
    return (
        <Suspense fallback={<p>Carregando ...</p>}>
            <Mensagens />
        </Suspense>
    )
}

export default Mensagem;