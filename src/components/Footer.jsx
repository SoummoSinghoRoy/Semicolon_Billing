import React from 'react';
import { Container, Row, Col,Image, Nav } from 'react-bootstrap';
import logo from '../asset/logo/logo.png';

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={3}>
          <Image src={logo} style={{width:'350px', height:'auto'}} className="mx-auto d-block img-fluid" responsive/>
          <span className="mx-3">&copy;2017-2019</span>
          </Col>
          <Col md={3}>
            <h4 className="pt-4">Features</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Cool Stuff</Nav.Link>
              <Nav.Link eventKey="link-1">Random Features</Nav.Link>
              <Nav.Link eventKey="link-2">Team Feature</Nav.Link>
              <Nav.Link eventKey="link-3">Stuff for Developers</Nav.Link>
              <Nav.Link eventKey="link-3">Another One</Nav.Link>
              <Nav.Link eventKey="link-3">Last One</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h4 className="pt-4">Resources</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Resource</Nav.Link>
              <Nav.Link eventKey="link-1">Resource Name</Nav.Link>
              <Nav.Link eventKey="link-2">Another Resource</Nav.Link>
              <Nav.Link eventKey="link-3">Final Resource</Nav.Link>
            </Nav>
          </Col>
          <Col md={3}>
            <h4 className="pt-4">About</h4>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Team</Nav.Link>
              <Nav.Link eventKey="link-1">Locations</Nav.Link>    
              <Nav.Link eventKey="link-2">privacy</Nav.Link>
              <Nav.Link eventKey="link-3">Terms</Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="border-top">
          <Col md={12}>
            <p className="text-center">&copy;2017-2019<Image src={logo} style={{width:'250px', height:'auto'}} className="img-fluid" responsive/></p>
            <Nav className="justify-content-center" activeKey="/">
              <Nav.Item>
                <Nav.Link href="/">Privacy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Terms</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Support</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
