import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import logo from '../asset/logo/logo.png';
import Billingform from './Billingform';
import Cart from './Cart';
import Pricing from './Pricing';


function Body() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
          <Image src={logo} style={{width:'350px', height:'auto'}} className="mx-auto d-block img-fluid" responsive/>
            <h2 className="text-center">Checkout From</h2>
            <p className="text-center py-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Billingform/>
          </Col>
          <Col md={6}>
            <Cart/>
          </Col>
        </Row>
        <Container className="pricing">
          <Row className="py-5">
            <Col md={12}>
              <h2 className="text-center">Pricing</h2>
              <p className="text-center py-1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. </p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Pricing/>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Body;
