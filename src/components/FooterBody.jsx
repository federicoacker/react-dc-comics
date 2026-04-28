import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterList from './FooterList';
import { arraysOfLists } from '../utility/linkData.js'


function FooterBody(){
    return(
        <>
        <div className="footer-body-wrapper">
        <Container className="footer-body">
            <Row className="py-5">
                <Col xs={6} lg={2}>
                <FooterList name={arraysOfLists[0].name} listArray={arraysOfLists[0].array}/>
                <FooterList  name={arraysOfLists[1].name} listArray={arraysOfLists[1].array}/>
                </Col>
                <Col xs={6} lg={2}>
                <FooterList  name={arraysOfLists[2].name} listArray={arraysOfLists[2].array}/>
                </Col>
                <Col xs={6} lg={2}>
                <FooterList  name={arraysOfLists[3].name} listArray={arraysOfLists[3].array}/>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default FooterBody