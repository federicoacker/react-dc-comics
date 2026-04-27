import Logo from './Logo.jsx'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


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
                        <Nav.Link href="" className="dc-navbar-link">Characters</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Comics</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Movies</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Tv</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Games</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Collecibles</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Videos</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Fans</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">News</Nav.Link>
                        <Nav.Link href="" className="dc-navbar-link">Shop</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default DCNavbar;