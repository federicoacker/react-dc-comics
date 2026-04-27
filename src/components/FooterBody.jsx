import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FooterList from './FooterList';

const arraysOfLists = [

    {
        name:'DC COMICS',
        array:['Characters', 'Comics', 'Movies', 'TV', 'Games', 'Videos', 'News']
    },
    {
        name:'SHOP',
        array:['Shop DC', 'Shop DC Collectibles']
    },
    {
        name:'DC',
        array:['Terms Of Use', 'Privacy policy(New)', 'Ad Choices', 'Advertising', 'Jobs', 'Subscriptions', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us']
    },
    {
        name:'SITES',
        array:['SITES', 'DC', 'MAD Magazine', 'DC Kids', 'DC Universe', 'DC Power Visa']
    }
];
function FooterBody(){
    return(
        <>
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
        </>
    )
}

export default FooterBody