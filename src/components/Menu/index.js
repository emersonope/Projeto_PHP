import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';
import React from 'react';

function BaseMenu(props) {
    const { location } =  props;
    return(
        <Navbar className="navbar-dark" bg="primary" expand="lg" fixed="top">
           <Navbar.Brand>
               Boomsell
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="intem-menu"/>
           <Navbar.Collapse id="intem-menu">
                <Nav activekey={location.pathname} className="ml-5 mr-5">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/sobrenos" to="/sobrenos">Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
           </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu;