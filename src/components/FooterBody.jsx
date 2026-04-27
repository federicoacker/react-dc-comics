import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterList from './FooterList';
import FooterLogo from './FooterLogo';

const arraysOfLists = [
    ['DC COMICS', 'Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News'],
    ['SHOP', 'Shop DC', 'Shop DC Collectibles'],
    ['DC', 'Terms Of Use', 'Privacy policy(New)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us'],
    ['SITES', 'DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']
];
function FooterBody(){
    return(
        <>
        <Container>
            <Row>
                <Col xs={6} lg={2}>
                <FooterList listArray={arraysOfLists[0]}/>
                <FooterList listArray={arraysOfLists[1]}/>
                </Col>
                <Col xs={6} lg={2}>
                <FooterList listArray={arraysOfLists[2]}/>
                </Col>
                <Col xs={6} lg={2}>
                <FooterList listArray={arraysOfLists[3]}/>
                </Col>
                <Col xs={6} lg={6}>
                <FooterLogo/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default FooterBody