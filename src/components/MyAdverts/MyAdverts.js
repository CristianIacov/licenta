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
  /* Whe refreshing, the adverts for a user will be refreshed aswell */
  const userAdvert = localStorage.getItem("userAdvert");
  var foundUser;
  if (userAdvert) {
     foundUser = JSON.parse(userAdvert).email;
  }
  else{
     foundUser = this.props.user.email;
  }

    fetch('http://localhost:3001/allannouncesforauser',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: foundUser,
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
    const userAdvert = localStorage.getItem("userAdvert");
  return (

    <Container fluid={true} className= "p-0">
    <Row noGutters >
          <Col className="homepagenav" >
              <NavbarPage />
          </Col>
          </Row>

            <Col sm="4" md="4" className = "mx-auto mt-5 mb-5">
              {
                JSON.parse(userAdvert).email == this.props.user.email?
                <h2 className = "fs-1"> Anunturile mele </h2>
                :
                <h2 className = "fs-1"> Anunturile lui {JSON.parse(userAdvert).firstname} {JSON.parse(userAdvert).lastname}</h2>
              }
            </Col>

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
    {
    !allAdverts[0]?
    <Row>
      <Col sm="4" style ={{margin:"auto"}}>
      <h3 className="fs-1">Momentan nu ai niciun anunt postat</h3>
      </Col>
    </Row>

    :
    <>
    </>
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