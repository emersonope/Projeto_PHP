import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './footer.css'

function BaseFooter(props) {
    const { location } = props

    return (
        <div class="rodape" bg="dark">
            <p>Todos direitos reservados. Projeto Recode&lt;<small id="pro">Pro</small>&gt;</p>
        </div>
    )
}

const Footer = withRouter(BaseFooter);

export default Footer;