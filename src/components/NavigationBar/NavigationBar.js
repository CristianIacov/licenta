import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col} from 'react-bootstrap';
import './NavigationBar.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSignedIn } from '../../actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCommentAlt,faSignInAlt,faUserCog } from '@fortawesome/free-solid-svg-icons'

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
class NavbarPage extends React.Component {

constructor(props){
  super(props);
  this.state = {
    
  }
  
}
render() {
  const { isSignedIn } = this.props;

  return (
    <div className="navbarcomp">
    <Container  className = "buttonscontainer">
    <Row >
      <Col align = "right" >
        { isSignedIn === true?
      <Button className ="custombuttons  btn-lg"  onClick = {() => this.props.history.push("/MyAdverts")} variant="Light">
            <FontAwesomeIcon className = "fontawesome" color = "green" icon={faCommentAlt}  size="1x" /> 
        Anunțurile mele
        </Button>
      :
      <div></div>
        }
      <Button className ="custombuttons  btn-lg" onClick = {() => this.props.history.push('Register')} variant="Light">
      <FontAwesomeIcon className = "fontawesome" color = "green" icon={faUserCog}  size="1x" /> 
      Contul Meu
      </Button>{' '}       
      <Button className ="custombuttons  btn-lg"  onClick = {() => this.props.history.push('Signin')} variant="Light">
      <FontAwesomeIcon  className = "fontawesome" color = "green" icon={faSignInAlt}  size="1x" /> 
        Conectare
        </Button>{' '}
      </Col>
    </Row>
  </Container>

  <Navbar className="nvbar" bg="success" variant="dark">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav >
      <Nav.Link 
      onClick = {() => this.props.history.push("/")} 
      className="navbarfirst" href="#home">Acasă</Nav.Link>
      <Nav.Link className="navbar-nav" href="#shelters">Adăposturi</Nav.Link>
      <Nav.Link className="navbar-nav" href="#caini">Îngrijire Câini</Nav.Link>
      <Nav.Link className="navbar-nav" href="#pisici">Îngrijire Pisici</Nav.Link>

      <Nav.Link className="navbar-nav"onClick = {() => {
        if(isSignedIn === true)
        this.props.history.push("/Advert")
        }} >Adaugă Anunț</Nav.Link>

    </Nav>
  </Navbar>

  </div>
    
  );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarPage));