import 'bootstrap/dist/css/bootstrap.min.css';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
function App() {
  return (
    <>
    <div className='container-fluid d-flex flex-column min-vh-100 justify-content-between'>
      <Row>
        <Col>
        <Container fluid="lg">
          <Header/>
        </Container>
        </Col>
      </Row>
      <Row>
        <Col className="g-0">
          <Hero/>
        </Col>
      </Row>
      <Row className="main-container">
        <Col >
        <Container fluid="lg">
          <Main/>
        </Container>
        </Col>
      </Row>
      <Row>
        <Col className="g-0">
          <Footer/>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default App
