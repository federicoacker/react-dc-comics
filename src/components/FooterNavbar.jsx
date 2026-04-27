import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import FooterNavlink from './FooterNavlink';

const links = [
    {
        name:'Digital Comics', 
        url:'/img/buy-comics-digital-comics.png'
    },
    {
        name:'DC Merchandise',
        url:'/img/buy-comics-merchandise.png'
    },
    {
        name:'Subscription',
        url:'/img/buy-comics-subscriptions.png'
    },
    {
        name:'Comic Shop Locator',
        url: '/img/buy-comics-shop-locator.png'
    }, 
    {
        name:'DC Power Visa',
        url:'/img/buy-dc-power-visa.svg'
    }
];

function FooterNavbar(){
    return(
        <>
        <Navbar expand="md" className="footer-navbar">
            <Container>
                <Nav className="footer-navbar-links">
                    <FooterNavlink name={ links[0].name } url= { links[0].url }></FooterNavlink>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default FooterNavbar