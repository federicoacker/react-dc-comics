
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FooterSocials(){
    return(
        <>
        <div className="footer-socials">
            <Row className="justify-content-between gap-3">
            <Col>
            <button type="button" className="text-white btn btn-outline-primary rounded-0">SIGN-UP NOW!</button>
            </Col>
            <Col className = "d-flex gap-3 justify-content-end">
            <h3 className = "follow-us">FOLLOW US</h3>
            <a href=""><img src="/img/footer-facebook.png"/></a>
            <a href=""><img src="/img/footer-twitter.png"/></a>
            <a href=""><img src="/img/footer-youtube.png"/></a>
            <a href=""><img src="/img/footer-pinterest.png"/></a>
            <a href=""><img src="/img/footer-periscope.png"/></a>
            </Col>
            </Row>
        </div>
        </>
    )
}

export default FooterSocials