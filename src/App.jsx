import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import { navbarLinks, links, arraysOfLists } from './utility/linkData.js';
import comics from './utility/comics.js';

function App() {
  return (
    <>
      <div className='container-fluid d-flex flex-column min-vh-100 justify-content-between'>
        <Row>
          <Col className="g-0">
            <Container fluid="lg">
              <Header navbarLinks={ navbarLinks }/>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="g-0">
            <Hero />
          </Col>
        </Row>
        <Row className="main-container">
          <Col >
            <Container fluid="lg" className="comic-container">
              <Main comics={comics}/>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="g-0">
            <Footer links={ links} arraysOfLists={arraysOfLists }/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default App
