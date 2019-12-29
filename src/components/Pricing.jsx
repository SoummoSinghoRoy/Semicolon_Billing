import React from 'react';
import {Card,Button, Container, Row, Col} from 'react-bootstrap';

function Pricing() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <Card className="text-center">
              <Card.Header style={{fontSize:'20px'}}>Free</Card.Header>
              <Card.Body>
                <Card.Text className="font-weight-bold">$0/mo</Card.Text>
                <Card.Text>10 users included</Card.Text>
                <Card.Text>2 GB of storage</Card.Text>
                <Card.Text>Email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="outline-primary" size="lg" block>Sign Up For Free</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Header style={{fontSize:'20px'}}>Pro</Card.Header>
              <Card.Body>
                <Card.Text className="font-weight-bold">$15/mo</Card.Text>
                <Card.Text>20 users included</Card.Text>
                <Card.Text>10 GB of storage</Card.Text>
                <Card.Text>Priority email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="primary" size="lg" block>Get Started</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Header style={{fontSize:'20px'}}>Enterprise </Card.Header>
              <Card.Body>
                <Card.Text className="font-weight-bold">$29/mo</Card.Text>
                <Card.Text>30 users included</Card.Text>
                <Card.Text>15 GB of storage</Card.Text>
                <Card.Text>Phone and email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="primary" size="lg" block>Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing;
