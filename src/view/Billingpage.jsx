 import React from 'react';
 import {Container,Row,Col} from 'react-bootstrap';
import Header from '../components/Header';
import Body from '../components/Body';
 
 function Billingpage() {
   return (
     <div>
      <Container fluid={true}>
        <Row>
          <Col md={12} style={{paddingLeft:'0px',paddingRight:'0px'}}>
            <Header/>
          </Col>
          <Container>
            <Row>
              <Col md={12}>
                <Body/>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
     </div>
   )
 }
 
 export default Billingpage;
 