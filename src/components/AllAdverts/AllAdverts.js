import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setSignedIn, setLoggedInUser } from '../../actions.js';
import PetCard from '../PetCard/PetCard'

class AllAdverts extends Component {
  constructor(props){
    super(props);
    this.state = {
        allAdverts: []
    }

  }



render() {
    const { allAdverts } = this.props.location.state;
  return (

    <Container fluid={true} className= "p-0">
    <Row noGutters >
          <Col className="homepagenav" >
              <NavbarPage />
          </Col>
          </Row>
    {
        allAdverts.map((data) => {
            return(

                <Row>
                <Col sm ={{span:2, offset:2}}  className = "p-3 ">
                <PetCard Pet = {data}/>
                </Col>
                <Col sm="6" className ="bg-light mt-3">
                <h3 className = "mb-3">{data.title}</h3>     
                <p className ="mx-auto">Postat la data de {data.timestamp.substring(0,10)}</p>
                <p className ="mx-auto">{data.description}</p>          
  
                </Col>
                </Row>

            );
    }
    )
    }

    <Row className ="mt-auto">
      <Col className ="mt-auto">
    <FooterPage />
    </Col>
    </Row>
    </Container>  


    
  );
  }
}

export default withRouter(AllAdverts);