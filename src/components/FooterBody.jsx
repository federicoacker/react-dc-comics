import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FooterBody(){
    return(
        <>
        <Container>
            <Row>
                <Col xs={6} lg={2}></Col>
                <Col xs={6} lg={2}></Col>
                <Col xs={6} lg={2}></Col>
                <Col xs={6} lg={6}></Col>
            </Row>
        </Container>
        </>
    )
}

export default FooterBody