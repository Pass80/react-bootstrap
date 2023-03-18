import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form inline={true}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>1 of 4</Col>
          <Col>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col>4 of 4</Col>
        </Row>
        <Row>
          <Col>1 of 4</Col>
          <Col>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col>4 of 4</Col>
        </Row>
        <Row>
          <Col>1 of 4</Col>
          <Col>2 of 4</Col>
          <Col>3 of 4</Col>
          <Col>4 of 4</Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
