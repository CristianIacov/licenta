import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Card} from 'react-bootstrap';
import './PetCard.css';
import { withRouter } from 'react-router-dom';
class PetCard extends Component {
constructor(props){
    super(props);
}

render() {
  const {Pet} = this.props;
  const img_url = "http://localhost:3001/" + Pet.path;
  return (
      <div>
<a
onClick = {() => this.props.history.push({
  pathname: "/AdvertPage",
  state: {petInfo: Pet}
  })}
>
<Card className="text-center mx-auto">
  <Card.Img  variant="top" src = {img_url} />
  <Card.Body>
    <Card.Title>{Pet.animalname}</Card.Title>
    <Card.Text> {Pet.location}   </Card.Text>
  </Card.Body>
</Card>
</a>
      </div>
    
  );
  }
}

export default withRouter(PetCard);