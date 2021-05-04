import React, { useState } from 'react';
import NavbarPage from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';
import Signin from '../Signin/Signin';
import CarouselPage from '../Carousel/Carousel'
import PetCard from '../PetCard/PetCard'
import FooterPage from '../Footer/Footer'
import AdvertsSearchBar from '../AdvertsSearchBar/AdvertsSearchBar'
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {Container,Row,Col,Button} from 'react-bootstrap';
import {Link, NavLink, RouteComponentProps } from 'react-router-dom';

 class HomePage extends React.Component{

  constructor(){
    super();
    this.state= {
      nbOfAnimalsSave:'',
      lastAnnounces: [{
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      },
      {
        path:'def'
      }],
      currentPath:'home',
      isSignedIn: 'false',
      user:[]
    }
  }


   setSignedIn = (data) => {
     console.log('SUNT INSET SIGNEDIN');
     console.log(data);
    this.setState({isSignedIn: data});
  };
  getSignedIn = () => {
    return this.state.isSignedIn;
  }

   setUser = (data) => {
     console.log(data);
    this.setState({user:data});
  };

  componentDidMount(){
    fetch('http://localhost:3001/savedanimals')
    .then(response => response.json())
    .then(data => this.setState({nbOfAnimalsSave: data}))
    .catch(err => {})


    fetch('http://localhost:3001/lastannounces')
    .then(response => response.json())
    .then(announces => {
      this.setState({lastAnnounces: announces})
    })
    .catch(err => console.log('Could not get the latest pets'))
  }
  onPathChange = (path) =>{
    this.setState({currentPath:path})
  }
  render()
  { 
    const {lastAnnounces,currentPath} = this.state;
    return(
     
       <div classname="homepage"> 

         <Container fluid={true} className= "p-0 background-image">
           <Row noGutters className = "row">
             <Col className="homepagenav" >
              <NavbarPage onPathChange = {this.onPathChange} getSignedIn={this.getSignedIn} onPathChange = {this.onPathChange}/>
              </Col>
              
             </Row>
          <Row  noGutters className = "row">
            <Col >
              <CarouselPage nbOfAnimalsSave = {this.state.nbOfAnimalsSave}/>
             </Col>
          </Row>
          <Row>
          <Col>
             <AdvertsSearchBar />
            </Col>
            <FontAwesomeIcon icon="faDog" /> 
                <FontAwesomeIcon icon="coffee" />
            </Row>
        </Container>


        <br/>
      <h1 className = "animaledisponibile"> Cele mai recente anunturi </h1>
        <Row   className ="cards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[0]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[1]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[2]} />
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[3]} />
            </Col>

          </Row>
          <Row   className ="lastrowcards">
            <Col sm="2">
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[4]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[5]}/>
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[6]} />
            </Col>
            <Col sm="2">
            <PetCard Pet = {lastAnnounces[7]} />
            </Col>

          </Row>
      
        <Row>
          <Col>
          <FooterPage />
          </Col>
        </Row>
       </div>

    );
  };
 }
export default HomePage;