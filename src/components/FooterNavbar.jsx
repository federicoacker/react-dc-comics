import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { links } from '../utility/linkData.js'
import FooterNavlink from './FooterNavlink';
import Container from 'react-bootstrap/Container';



function FooterNavbar(){
    return(
        <div className="footer-navbar-wrapper">
            <Container className="footer-navbar-container">
                <Navbar expand="md" className="footer-navbar">
                        <Nav className="footer-navbar-links gap-3 justify-content-between align-items-center flex-wrap flex-grow-1">
                            <FooterNavlink name={ links[0].name } url= { links[0].url }></FooterNavlink>
                            <FooterNavlink name={ links[1].name } url= { links[1].url }></FooterNavlink>
                            <FooterNavlink name={ links[2].name } url= { links[2].url }></FooterNavlink>
                            <FooterNavlink name={ links[3].name } url= { links[3].url }></FooterNavlink>
                            <FooterNavlink name={ links[4].name } url= { links[4].url }></FooterNavlink>
                        </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default FooterNavbar