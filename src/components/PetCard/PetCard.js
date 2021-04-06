import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Card} from 'react-bootstrap';
import './PetCard.css';
class PetCard extends Component {
constructor(props){
    super(props);
}

render() {
  return (
      <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.src} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button  variant="success">Adopta</Button>
  </Card.Body>
</Card>
      </div>
    
  );
  }
}

export default PetCard;