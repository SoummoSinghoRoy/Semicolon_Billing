import React from 'react';
import { Navbar, Nav,Image} from 'react-bootstrap';
import logo from '../asset/logo/logo.png';

export default function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" text="dark">
        <Navbar.Brand href="#home"><Image src={logo} style={{width:'200px', height:'auto'}} responsive /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto pull-right" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home" style={{color:'black'}}>Features</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" style={{color:'black'}}>Enterprise</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" style={{color:'black'}}>Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-3" style={{color:'black'}}>
                    Pricing
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
