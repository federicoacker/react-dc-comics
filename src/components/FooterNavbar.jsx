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
        <Navbar expand="md" className="footer-navbar justify-content-center">
                <Nav className="footer-navbar-links justify-content-between gap-3 flex-grow-1">
                    <FooterNavlink name={ links[0].name } url= { links[0].url }></FooterNavlink>
                    <FooterNavlink name={ links[1].name } url= { links[1].url }></FooterNavlink>
                    <FooterNavlink name={ links[2].name } url= { links[2].url }></FooterNavlink>
                    <FooterNavlink name={ links[3].name } url= { links[3].url }></FooterNavlink>
                    <FooterNavlink name={ links[4].name } url= { links[4].url }></FooterNavlink>
                </Nav>
        </Navbar>
        </>
    )
}

export default FooterNavbar