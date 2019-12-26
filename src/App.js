import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container fluid={true}>
        <Row>
          <Col md={12} style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
