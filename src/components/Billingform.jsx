import React from 'react';
import { Form, Col,InputGroup,Button} from 'react-bootstrap';



function Billingform() {
  return (
    <div>
      <Form>
        <Form.Row className="py-2">
          <h2 className="text-dark">Billing address</h2>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="fname"/>
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lname"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email(optional)</Form.Label>
            <Form.Control type="email" placeholder="your@example.com" />
          </Form.Group>
        </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment or suite" />
          </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select">
              <option>United States</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>California</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <Form.Row className="py-4 border-top border-bottom">
          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Shipping address is the same as my billing address"/>
            <Form.Check type="checkbox" label="Save the infomation for next time"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <h3>Payment</h3>
        </Form.Row>
        <Form.Row className="py-2">
          <Form.Group id="formGridCheckbox">
            <Form.Check type="radio" label="Credit Card"/>
            <Form.Check type="radio" label="Debit Card"/>
            <Form.Check type="radio" label="Paypal"/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Label>Name On Card</Form.Label>
            <Form.Control type="cardname"/>
            <Form.Label>Full name as displayed on card</Form.Label>
          </Col>
          <Col>
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control type="cardnumber"/>
          </Col>
        </Form.Row>
        <Form.Row className="pb-4">
          <Col md={4}>
            <Form.Label>Expiration</Form.Label>
            <Form.Control type="expiration"/>
          </Col>
          <Col md={4}>
            <Form.Label>CVV</Form.Label>
            <Form.Control type="cvv"/>
          </Col>
        </Form.Row>
        <Form.Row className="py-4 border-top">
          <Button variant="primary" size="md" block>
            Continue to checkout
          </Button>
        </Form.Row>
      </Form>
    </div>
  )
}

export default Billingform;
