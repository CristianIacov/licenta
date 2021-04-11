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
<a>
<Card className="text-center" style={{ width: '20rem' }}>
  <Card.Img  variant="top" src={this.props.src} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>Timis Timisoara
     
    </Card.Text>
  </Card.Body>
</Card>
</a>
      </div>
    
  );
  }
}

export default PetCard;