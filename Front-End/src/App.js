import Menu from './components/Menu'
import Rotas from './rotas';
//import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css'
import {lazy, Suspense} from 'react';
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu/>
        </header>
        <main>
          <Container fluid>
              <Rotas />
          </Container>
        </main>
        <Suspense fallback={<p>Carregando ...</p>}>
           <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
