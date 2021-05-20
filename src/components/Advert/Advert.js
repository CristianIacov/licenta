import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarPage from '../NavigationBar/NavigationBar';
import {Container,Row,Col,Button, Form} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { connect } from 'react-redux';
import { setSignedIn, LoggedInUser } from '../../actions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
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

class Advert extends React.Component{

constructor(props){
    super(props);
    this.state = {
        title:'',
        categories:'',
        description:'',
        location:'',
        animalname:'',
        email:'',
        img: '',
        phone: ''
    }
}
onNumberChange = (event) => {
  this.setState({phone:event.target.value});
}
onImgChange = (event) => {
  this.setState({img:event.target.value});
}
onTitleChange = (event) => {
    this.setState({title:event.target.value});
  } 
  onCategoriesChange = (event) => {
    this.setState({categories:event.target.value});
  }   
  onDescriptionChange = (event) => {
    this.setState({description:event.target.value});
  } 
  onLocationChange = (event) => {
    this.setState({location:event.target.value});
  } 
  onAnimalNameChange = (event) => {
    this.setState({animalname:event.target.value});
  } 
  onEmailChange = (event) => {
    this.setState({email:event.target.value});
  } 
  onLocationChange = (event) => {
    this.setState({location:event.target.value});
  } 
  onSubmitAdd = () => {
    const myFile = document.getElementById('photo1').files[0];
    const myFile2 = document.getElementById('photo2').files[0]? document.getElementById('photo2').files[0] :document.getElementById('photo1').files[0];
    const myFile3 = document.getElementById('photo3').files[0]? document.getElementById('photo3').files[0] :document.getElementById('photo1').files[0];
    const data = new FormData();
    data.append("animalImage", myFile);
    data.append("animalImage2", myFile2);
    data.append("animalImage3", myFile3);
    data.append("email", this.props.user.email);
    data.append("firstname", this.props.user.firstname);
    data.append("lastname", this.props.user.lastname);
    data.append("description", this.state.description);
    data.append("location", this.state.location);
    data.append("title", this.state.title);
    data.append("animalname", this.state.animalname);
    data.append("category", this.state.categories);
    data.append("phonenumber", this.state.phone);
   
    console.log(data)
    fetch('http://localhost:3001/addimg',{
      method: 'post',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      
      window.alert('Anuntul este postat')
      this.props.history.push('/');}
      )
    .catch(err => window.alert('Adaugati campurile necesare!!!!'))
  }
render()
{
  const { isSignedIn } = this.props;
  const { user } = this.props;
  console.log(isSignedIn);
  console.log(user);
return (
    <div>
            <Row noGutters className = "row">
                <Col className="homepagenav" >
                    <NavbarPage />
                </Col>

           </Row>


    <Container className = " bg-light ">
        <label  className = "mt-3" >Publica un anunt</label>
        <Col sm="6" className = "mt-1 mb-3">
        <input 
        required 
        onChange = { this.onTitleChange }
        type="text" className="form-control" placeholder="Titlu" />
        </Col>
        <label  className = "mt-3" >Nume animalut   (daca nu are un nume puteti specifica caine/pisica etc.)</label>
    <Col sm="3" className = "mt-1 mb-3">
        <input  
        required 
        onChange = { this.onAnimalNameChange }
        type="text" className="form-control" placeholder="Nume animalut" />
    </Col>
        <Col sm = "3" className = "mt-1 mb-3">
        <Form.Control
        required 
        onChange = {this.onCategoriesChange}
        as="select" defaultValue="Choose...">
        <option>Alege categoria</option>
        <option>Caini</option>
        <option>Pisici</option>
        <option>Alte animale</option>
      </Form.Control>
      </Col>
      <label  className = "mt-3" >Adauga imagini</label>
      <Col  className = "mt-1 mb-3">
      <Form>
        <Form.File 
        onChange={this.onImgChange}
        required
        id="photo1"
        label=""
        data-browse=""
        custom
      />    

            <Form.File 
        id="photo2"
        label=""
        data-browse=""
        custom
      />     
            <Form.File 
        id="photo3"
        label=""
        data-browse=""
        custom
      />          
    </Form>
    </Col>
    
    <label  className = "mt-3" >Descriere</label>
   <Col  className = "mt-1 mb-3" sm= "6">  
   <Form.Control 
   required 
   onChange={this.onDescriptionChange}
   as="textarea" rows={5} />
   </Col>
   <label  className = "mt-3" >Informatii contact</label>
   <Col>
   <label  className = "mt-3" >Locatie (Judet/Localitate)</label>
   </Col>
   <Col sm="3" className = "mt-1 mb-3">
        <input 
        required 
        onChange = {this.onLocationChange}
        type="text" className="form-control" placeholder="Judet/Localitate" />
    </Col>
    <label  className = "mt-3" >Numar de contact</label>
    <Col sm="3" className = "mt-1 mb-2">
        <input 
        required  
        onChange = {this.onNumberChange}
        type="text" className="form-control" placeholder="Telefon" />
    </Col>
    <label  className = "mt-3" >Adresa de email</label>
    <Col sm="3" className = "mt-1 mb-2">
        <input  
        required 
        onChange = {this.onEmailChange}
        type="text" className="form-control" placeholder="Adresa de email" />
    </Col>
    <Col sm="3" >
    <Button  
    onClick = { this.onSubmitAdd }
    variant="success">Publica anunt</Button>{' '}
    </Col>
 </Container>      

    </div>
);
    
}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Advert));