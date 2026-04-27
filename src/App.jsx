import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
    <Container fluid="lg" className='d-flex flex-column min-vh-100 justify-content-between'>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row className="flex-grow-1 main-container">
        <Col >
          <Main/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
