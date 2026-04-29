import Logo from './Logo.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { navbarLinks } from '../utility/linkData.js';


function DCNavbar(){
    return(
        <>
        <Navbar expand="md" className="dc-navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="dc-navbar-nav"/>
                <Navbar.Collapse id="dc-navbar-nav" className="justify-content-end">
                    <Nav className="dc-navbar-links align-items-center">
                        {
                            navbarLinks.map(
                                (link) => <Nav.Link href={ link.url } className="dc-navbar-link" key={ link.id } tabIndex={ link.id - 1 }>{ link.name }</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default DCNavbar;