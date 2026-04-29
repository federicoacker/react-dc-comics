import FooterNavbar from './FooterNavbar.jsx'
import FooterBody from './FooterBody.jsx'
import FooterSocials from './FooterSocials.jsx'
function Footer( { links, arraysOfLists }){
    return(
        <footer>
            <FooterNavbar links={ links }/>
            <FooterBody arraysOfLists={ arraysOfLists }/>
            <FooterSocials/>
        </footer>
    )
}

export default Footer