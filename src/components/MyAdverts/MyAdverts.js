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
const mapStateToProps = (state) => {
    return {
      isSignedIn: state.setSignedIn.isSignedIn,
      user: state.setLoggedInUser.user
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  };
class MyAdverts extends Component {
  constructor(props){
    super(props);
    this.state = {
        allAdverts: []
    }

  }

componentDidMount() {
    fetch('http://localhost:3001/allannouncesforauser',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email:this.props.user.email,
        })
      })
      .then(response => response.json())
      .then(data => {
        
            console.log(data);
        this.setState({allAdverts: data});
        })
        .catch(err => console.log(err))
      }


render() {
    const { allAdverts } = this.state;
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
                <Col sm ={{span:4, offset:0}}  className = "p-3 ml-2">
                <PetCard Pet = {data}/>
                </Col>
                <Col sm="7" className ="bg-light mt-3">
                <h3 className = "mb-3">{data.title}</h3>     
                <p className ="mx-auto">Postat la data de {data.timestamp.substring(0,10)}</p>
                <p className ="mx-auto">{data.description}</p>          
  
                </Col>
                </Row>

            );
    }
    )
    }
        <Row>
    <Col>
    <FooterPage />
    </Col>
  </Row>
    </Container>
    
    
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyAdverts));