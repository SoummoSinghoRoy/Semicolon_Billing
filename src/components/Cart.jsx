import React from 'react';
import {Badge,ListGroup, InputGroup,FormControl} from 'react-bootstrap';

function Cart() {
  return (
    <div>
      <h4 className="pt-3 text-secondary">
      Your Cart <Badge variant="secondary" className="float-right" style={{borderRadius:'16px', paddingLeft:'8px',paddingRight:'8px',paddingTop:'2px',paddingBottom:'2px'}}>3</Badge>
      </h4>
      <ListGroup className="py-3">
        <ListGroup.Item>
        <span className="font-weight-bold text-secondary">Product name</span>
        <Badge className="float-right text-muted" style={{fontSize:'15px'}}>$12</Badge>
          <div style={{fontSize:'13px'}}>
            Brief description
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="font-weight-bold text-secondary">Second product</span>
          <Badge className="float-right text-muted" style={{fontSize:'15px'}}>$8</Badge>
            <div style={{fontSize:'13px'}}>
              Brief description
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="font-weight-bold text-secondary">Third item</span>
          <Badge className="float-right text-muted" style={{fontSize:'15px'}}>$5</Badge>
            <div style={{fontSize:'13px'}}>
              Brief description
            </div>
        </ListGroup.Item>
        <ListGroup.Item className='text-success' variant="light">
          <span className="font-weight-bold">Promo code</span>
          <Badge className="float-right text-success" style={{fontSize:'15px'}}>-$5</Badge>
            <div style={{fontSize:'13px',fontWeight:'bold'}}>
              Examplecode
            </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="font-weight-bold text-secondary">Total &nbsp;(USD)</span>
          <Badge className="float-right text-muted" style={{fontSize:'15px'}}>$20</Badge>
        </ListGroup.Item>
        <ListGroup.Item>
          <InputGroup>
            <FormControl
            placeholder="Promo code"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"/>
            <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">Reddem</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Cart;
