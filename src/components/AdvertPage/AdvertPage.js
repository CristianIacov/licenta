import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron,Media} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import PetCarousel from '../PetCarousel/PetCarousel'
import FooterPage from '../Footer/Footer'
import { connect } from 'react-redux';
import '../Signin/Signin.css';
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
class AdvertPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }

 onMessageChange = (event) => {
   this.setState({message: event.target.value})
 };

 onSendMessage  = () => {
   fetch('http://localhost:3001/messages',{
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       sourceUser: this.props.user.email,
       destinationUser: this.props.location.state.petInfo.email,
       advertId: this.props.location.state.petInfo.id.toString(),
       message: this.state.message
     })
   })
   .then(response => response.json())
   .then(data => {
     console.log(data);
     if(data == 'ok'){
     window.alert('Mesajul a fost trimis');
     }
     else{
       window.alert('Mesajul nu a putut fi trimis');
     }
   })
   .catch(err => { console.log(err)})
 }

render() {
    const {petInfo} = this.props.location.state;
    var photo1,photo2,photo3;
    photo1 = petInfo.path;
    photo2 = petInfo.path2;
    photo3 = petInfo.path3;
    console.log(photo2);
    if(photo2 == null)
      photo2 = photo1;
      else
      photo2 = petInfo.path2;
  console.log(photo2);
      if(photo3 == null)
      photo3 = photo1;
      else
      photo3 = petInfo.path3;

  return (
        <div className = "align">

            <Container fluid={true} className= "p-0">
            <Row noGutters >
                  <Col className="homepagenav" >
                      <NavbarPage />
                  </Col>
                  </Row>
            </Container>      
 
                  <Row  >
            <Col  >
              <PetCarousel
              img1_url = {"http://localhost:3001/"+ photo1}
              img2_url = {"http://localhost:3001/"+ photo2}
              img3_url = {"http://localhost:3001/"+ photo3}
              />
             </Col>
            </Row>
            

              <Row>
              <Col  sm="6" className = "mx-auto bg-light mt-5">
           <h2 className="fs-1 mb-5">{petInfo.title}</h2>
            <p className="fs-5 mb-2 "> Anunt postat la data de {petInfo.timestamp.substring(0,10)} </p>
            <h1 className="fs-2 mb-3">Descriere</h1>
            <p className="fs-5 "> {petInfo.description}</p>
            <p className="fs-2"> Judet/Localitate:  {petInfo.location} </p>
            </Col>
              </Row>
            <Row>
     
              <Col sm = "6" className="bg-light mt-5 mx-auto">
              <p className = "fs-2">Anuntul este oferit de: {petInfo.lastname} {petInfo.firstname}</p>
            <p className="fs-3"> {petInfo.phonenumber}</p>
            <a
                type="submit" className="btn btn-success btn-sm btn-bottom">Vezi anunturile vanzatorului</a>

                              <p className="fs-4 mt-5"> Trimite un mesaj vanzatorului </p>
            <Form.Control 
            id = "mesajform"
            onChange = {this.onMessageChange}
            placeholder = "Scrie mesajul tau"
            as="textarea" rows={5} />
             <a 
             onClick = {() => {
               this.onSendMessage();
               document.getElementById('mesajform').value = '';}}
         type="submit" className="btn btn-success btn-sm">Trimite</a>     
            </Col>
          </Row>



 
          <Row className= "p-0 mt-5">
            
          <Col className ="footerpage">
          <FooterPage />
          </Col>
        </Row> 

            
        </div>
    
  );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdvertPage);