import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremento, decremento } from './actions';
import { Button, Container, Row, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Timer from './assets/images/timer.jpg';

function App() {
  const contereducer = useSelector(state => state.contereducer);
  const dispatch = useDispatch();

  return (
    
    <Container id="idCard">

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Timer} />
          <Card.Body>
            <Card.Title class="text-center">Contando</Card.Title>
            <Card.Text class="text-center">
                <h1> {contereducer} </h1>
            </Card.Text>
            <Button variant="danger" className='mr-3' onClick = { () => dispatch(incremento())}>Incremento</Button>
            <Button variant="danger" onClick = { () => dispatch(decremento())}>Decremento</Button>
          </Card.Body>
        </Card>

    </Container>
  );
}

export default App;
