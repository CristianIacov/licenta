import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col} from 'react-bootstrap';
import './SearchBar.css';
class SearchBar extends Component {


render() {
  return (
    
    <Container className="containersearchbar">
        <Row>
            <Col md={{span:9,offset:3}}>
            
            <input type="text" placeholder="Judetul/Cod postal" className="searchbox"/>
            <Button padding-left ="20px" variant="success">Caini</Button>{' '}
            <Button variant="success">Pisici</Button>{' '}
            <Button variant="success">Alte animale</Button>{' '}
            
            </Col>
        </Row>
    </Container>
  

    
  );
  }
}

export default SearchBar;