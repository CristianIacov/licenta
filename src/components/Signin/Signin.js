import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'
import { connect } from 'react-redux';
import './Signin.css';
import { setSignedIn, setLoggedInUser } from '../../actions.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.setSignedIn.isSignedIn,
    user: state.setLoggedInUser.user
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetSignIn: () => dispatch(setSignedIn(true)),
    setLoggedInUser: (data) => dispatch(setLoggedInUser(data))
    
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
    
      console.log(data);
      if(data.email == this.state.email){
      localStorage.setItem('user', JSON.stringify(data))
      this.props.onSetSignIn();
      this.props.setLoggedInUser(data);
      window.alert('Esti conectat');
      this.props.history.push('/');
      }  
      else{
        window.alert('Email sau parola gresita');
      }
    }
  )
  .catch(err => {
    window.alert('Email sau parola gresita');
    console.log('could not register user');
  })
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
                onClick = {
                  
                  this.onSubmitSignin
                  }
                type="submit" className="btn btn-success btn-lg btn-block mt-3">Conecteaza-te</a>
               
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signin));