import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'
import { connect } from 'react-redux';
import './Signin.css';
import { setSignedIn } from '../../actions.js';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.isSignedIn
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetSignIn: () => dispatch(setSignedIn(true))
    
  }
};
class Signin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

 onEmailChange = (event) => {
   this.setState({email:event.target.value});
 } 
 onFirstNameChange = (event) => {
  this.setState({firstName:event.target.value});
} 
onLastNameChange = (event) => {
  this.setState({lastName:event.target.value});
} 
onPasswordChange = (event) => {
  this.setState({password:event.target.value});
} 
onSubmitSignin = () => {
  fetch('http://localhost:3001/signin',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email:this.state.email,
      password:this.state.password
    })
  })
  .then(response => response.json())
  .then(data => {

      this.props.onSetSignIn();
      this.props.setUser(data);
      window.alert('logged in');
      }
  )
  .catch(err => console.log('could not register user'))
}
render() {
  return (

                <Container fluid={true} className= "p-0 background-image">
                <Row noGutters className = "row">
                  <Col className="homepagenav" >
                      <NavbarPage />
                  </Col>
               </Row>
               <Row  noGutters className = "row">
                  <Col >
                    <CarouselPage />
                  </Col>
              </Row>
              <div className = "formdiv" >
  <form>
                <h3>Conectare cont</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input onChange = { this.onEmailChange} type="email" className="form-control" placeholder="Adauga email" />
                </div>

                <div className="form-group">
                    <label>Parola</label>
                    <input onChange = { this.onPasswordChange} type="password" className="form-control" placeholder="Parola" />
                </div>

                <a
                onClick = {this.onSubmitSignin}
                type="submit" className="btn btn-success btn-lg btn-block">Conecteaza-te</a>
               
            </form>
            </div>
            <Row>
          <Col className ="mt-3">
          <FooterPage />
          </Col>
        </Row>
            </Container>
 
    
  );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);