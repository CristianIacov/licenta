import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
import './SearchBar.css';
import NavbarPage from '../NavigationBar/NavigationBar';
import CarouselPage from '../Carousel/Carousel'
import FooterPage from '../Footer/Footer'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
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
onSubmitRegister = () => {
  fetch('http://localhost:3001/register',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      firstname:this.state.firstName,
      lastname:this.state.lastName,
      email:this.state.email,
      password:this.state.password
    })
  })
  .then(response => response.json())
  .then(data => {
    if(data.email == this.state.email){
      window.alert('Contul a fost inregistrat');
      this.props.history.push('/');
      console.log(data);
  }
  else{
      window.alert('Adaugati campurile necesare!');
  }}
    )
  .catch(err => {
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
              <div className = "formdiv">
          <form>
                <h3>Inregistrare cont</h3>
                <div className="form-group">
                    <label>Nume</label>
                    <input
                    required
                    onChange = { this.onFirstNameChange} type="text" className="form-control" placeholder="Nume" />
                </div>

                <div className="form-group">
                    <label>Prenume</label>
                    <input
                     required
                    onChange = { this.onLastNameChange} type="text" className="form-control" placeholder="Prenume" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                     required
                    onChange = { this.onEmailChange} type="email" className="form-control" placeholder="Adauga email" />
                </div>

                <div className="form-group">
                    <label>Parola</label>
                    <input 
                     required
                    onChange = { this.onPasswordChange} type="password" className="form-control" placeholder="Parola" />
                </div>

                <button 
                onClick = {this.onSubmitRegister}
                type="submit" className="btn btn-success btn-lg btn-block mt-3">Inregistrare</button>
                <p className="forgot-password text-right">
                    Ai un cont deja? <a href="#">conecteaza-te?</a>
                </p>
            </form>
    </div>
    <Row>
          <Col>
          <FooterPage />
          </Col>
        </Row>
    </Container>
    
  );
  }
}

export default SearchBar;