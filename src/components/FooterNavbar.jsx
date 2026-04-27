import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import FooterNavlink from './FooterNavlink';

const links = ['Digital Comics', 'DC Merchandise', 'Subscription', 'Comic Shop Locator', 'DC Power Visa'];

function FooterNavbar(){
    return(
        <>
        <Navbar expand="md" className="footer-navbar">
            <Container>
                <Navbar.Toggle aria-controls="footer-navbar-nav"/>
                <Navbar.Collapse id="footer-navbar-nav" className="justify-content-between">
                    <Nav className="footer-navbar-links">
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default FooterNavbar