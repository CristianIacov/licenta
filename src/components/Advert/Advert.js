import React from 'react';
import { withRouter } from 'react-router-dom';
import NavbarPage from '../NavigationBar/NavigationBar';
import {Container,Row,Col,Button, Form} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { connect } from 'react-redux';
import { setSignedIn, LoggedInUser } from '../../actions.js';

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
        email:''
    }
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


    <Container>
        <label  className = "mt-3" >Publica un anunt</label>
        <Col sm="6" className = "mt-1 mb-3">
        <input  type="text" className="form-control" placeholder="Titlu" />
        </Col>
        <label  className = "mt-3" >Nume animalut   (daca nu are un nume puteti specifica caine/pisica etc.)</label>
    <Col sm="3" className = "mt-1 mb-3">
        <input  type="text" className="form-control" placeholder="Nume animalut" />
    </Col>
        <Col sm = "3" className = "mt-1 mb-3">
        <Form.Control as="select" defaultValue="Choose...">
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
        id="photo1"
        label=""
        data-browse=""
        custom
      />     
            <Form.File 
        id="photo1"
        label=""
        data-browse=""
        custom
      />     
            <Form.File 
        id="photo1"
        label=""
        data-browse=""
        custom
      />          
    </Form>
    </Col>
    
    <label  className = "mt-3" >Descriere</label>
   <Col  className = "mt-1 mb-3" sm= "6">  
   <Form.Control as="textarea" rows={5} />
   </Col>
   <label  className = "mt-3" >Informatii contact</label>
   <Col>
   <label  className = "mt-3" >Locatie (Judet/Localitate)</label>
   </Col>
   <Col sm="3" className = "mt-1 mb-3">
        <input  type="text" className="form-control" placeholder="Judet/Localitate" />
    </Col>
    <label  className = "mt-3" >Adresa de email</label>
    <Col sm="3" className = "mt-1 mb-2">
        <input  type="text" className="form-control" placeholder="Adresa de email" />
    </Col>
    <Col sm="3" >
    <Button  variant="success">Publica anunt</Button>{' '}
    </Col>
 </Container>      

    </div>
);
    
}
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Advert));