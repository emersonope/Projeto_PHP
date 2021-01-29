import Menu from './components/Menu'
import Rotas from './rotas';
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css'

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
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
