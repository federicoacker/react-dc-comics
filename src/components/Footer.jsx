import FooterNavbar from './FooterNavbar.jsx'
import FooterBody from './FooterBody.jsx'
import FooterSocials from './FooterSocials.jsx'
function Footer(){
    return(
        <>
        <FooterNavbar/>
        <FooterBody className="footer-body"/>
        <FooterSocials/>
        </>
    )
}

export default Footer