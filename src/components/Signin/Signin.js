import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron} from 'react-bootstrap';
import './Signin.css';

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
      if(data){
      window.alert('Esti conectat')
      }
      else{
          this.props.onPathChange('register');
      }

  })
  .catch(err => console.log('could not register user'))
}
render() {
  return (
    <div className = "formdiv">
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

                <button 
                onClick = {this.onSubmitSignin}
                type="submit" className="btn btn-success btn-lg btn-block">Conecteaza-te</button>
               
            </form>
    </div>
    
  );
  }
}

export default Signin;