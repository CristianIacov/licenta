import React, { Component } from "react";
import {Nav,Form,FormControl,Button} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import {Container,Row,Col,Dropdown,Jumbotron,Media,Modal} from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import PetCarousel from '../PetCarousel/PetCarousel'
import FooterPage from '../Footer/Footer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../Signin/Signin.css';
import { setSignedIn, setLoggedInUser } from '../../actions.js';
import PetCard from '../PetCard/PetCard'
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faPhone } from '@fortawesome/free-solid-svg-icons'
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
      message: '',
      feedback: 'notempty',
      ratingModalShow: false,
      averageRatingForUser: '',
      userRating: '',
      reasonForDelete: '',
      modalShow: false
    }
  }
 onFeedBackChange = (event) => {
  this.setState({feedback: event.target.value})
}
 onReasonChange = (event) => {
  this.setState({reasonForDelete: event.target.value})
 }
 onMessageChange = (event) => {
   this.setState({message: event.target.value})
 };
onSubmitRating = () => {
  fetch('http://localhost:3001/giverating',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      sourceUser: this.props.user.email, // the logged in user 
      destinationUser: this.props.location.state.petInfo.email, // the user who posted the advert
      rating: this.state.userRating
    })
  })
  .then(response => response.json())
  .then(data => {
    if(data == 'ok'){
      window.alert('Rating trimis');
    }
    else{
      window.alert('Rating-ul nu a putut fi trimis');
    }
}
)
}

 onSubmitDelete =  () => {
   var email = this.props.location.state.petInfo.email?this.props.location.state.petInfo.email: 'test';
   var id = this.props.location.state.petInfo.id?this.props.location.state.petInfo.id:'test';
   var feedback = this.state.feedback?this.state.feedback: 'test';
   var reasonForDelete = this.state.reasonForDelete?this.state.reasonForDelete: 'test';
   fetch('http://localhost:3001/deleteadvert',{
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       email: email,
       id: id,
       feedback: feedback,
       reasonForDelete: reasonForDelete
     })
   })
   .then(response => response.json())
   .then(data => {
    if(data == 'ok'){
      window.alert('Anuntul a fost sters');
      this.props.history.push('/MyAdverts');
    }
    else{
      window.alert('Anuntul nu a putut fi sters');
    }

   })
 }
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
 };

 componentDidMount(){
  fetch('http://localhost:3001/getratingforuser',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      destinationUser: this.props.location.state.petInfo.email, // the user who posted the advert
    })
  })
  .then(response => response.json())
  .then(data => this.setState({averageRatingForUser: data}))
  .catch(err => console.log('could not get user rating'))
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
            <Col  className = "mt-5">
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
              <p className = "fs-3">{petInfo.firstname} are un rating de: {this.state.averageRatingForUser}
              <ReactStars
                count={5}
                size={48}
                activeColor="#ffd700"
                value= {this.state.averageRatingForUser || 5}
                edit = {true}
              />
              </p>
            <p className="fs-3"> 
            <FontAwesomeIcon className = "fontawesome"  icon={faPhone}  size="1x" />
            {petInfo.phonenumber}</p>
            {
              (this.props.isSignedIn && this.props.user.email == petInfo.email)?
              <a
              onClick = {() => { this.setState({modalShow: true})
 
              }}
              type="submit" className="btn btn-success btn-sm btn-bottom">Sterge anuntul</a>
              :
              <div>
              <a
              type="submit" className="btn btn-success btn-sm btn-bottom">Vezi anunturile vanzatorului</a>
              <br></br>
              <a
              onClick = {() => this.setState({ratingModalShow:true})}
              type="submit" className="btn btn-success btn-sm btn-bottom mt-3">Ofera un rating vanzatorului</a>
              </div>
            }


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


          <Modal
                  show = {this.state.ratingModalShow}
                  onHide={() => this.setState({ratingModalShow:false})}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Ofera un raiting pentru {petInfo.firstname}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <ReactStars
                        count={5}
                        size={48}
                        activeColor="#ffd700"
                        onChange = {(rating) => {this.setState({userRating:rating})}}
                      />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button 
                    onClick = {() => {
                      this.onSubmitRating();
                      this.setState({ratingModalShow:false})}}
                    className = "mx-auto" variant ="success">Ofera raiting</Button>
                  </Modal.Footer>
                </Modal>



                <Modal
                  show = {this.state.modalShow}
                  onHide={() => this.setState({modalShow:false})}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Stergere anunt
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Pentru a ne imbunatatii serviciile te rugam sa acorzi o clipa pentru a raspunde la urmatoarele intrebari</h4>
                    <p className = "fs-5"> Te rugam sa selectezi motivul pentru care ai decis sa stergi anuntul.
                    </p>
                    <Form.Control
                      required 
                      onChange = {this.onReasonChange}
                      as="select" defaultValue="Choose...">
                      <option>Selecteaza motivul</option>
                      <option>Animalutul a fost adoptat</option>
                      <option>Alte motive</option>
                   </Form.Control>
                   <p className = "fs-5"> Te rugam sa ne lasi un feedback cu privire la experienta ta petrecuta pe site,
                                          si poate cateva servicii pe care le-am putea imbunatatii.
                    </p>
                    <Form.Control 
                    required 
                    placeholder = "Scrie feedback-ul tau.."
                    onChange={this.onFeedBackChange}
                    as="textarea" rows={5} />
                     
                     <Button 
                    onClick = { () => {
                      this.onSubmitDelete();
                      this.setState({modalShow:false});                     
                    }}
                    className = "mx-auto" variant ="success">Sterge anuntul</Button>
                  </Modal.Body>
                  <Modal.Footer>
                  </Modal.Footer>
                </Modal>
 
          <Row className= "p-0 mt-5">
            
          <Col className ="footerpage">
          <FooterPage />
          </Col>
        </Row> 

            
        </div>
    
  );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AdvertPage));